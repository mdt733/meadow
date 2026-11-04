// Only the real Meadow hfield survives from EMU's original terrain viewer.
// The 257x257 samples come from meadow.html; no legacy box/ramp/park courses
// or second geometry/render generator are retained.
const rounded=n=>Number(n.toFixed(6));

export function withMeadowTerrain(robotXml,park){
 if(typeof robotXml!=='string'||!robotXml.includes('</worldbody>'))
   throw new Error('Cannot locate worldbody in policy robot XML');
 if(!park||!park.heights||!park.resolution||!Number.isFinite(park.zOffset))
   throw new Error('Real Meadow heightfield required');
 if(/viewer_park_hfield/.test(robotXml))
   throw new Error('Physical terrain already inserted');

 // Same row reversal, normalisation, 1.5 friction and signed zOffset
 // as the pinned EMU viewer hfield generator. This is COLLIDING MuJoCo
 // geometry; it is not a visual mesh or a scripted gait surface.
 const {resolution,radius,maxHeight,heights}=park;
 const elevations=[];
 for(let j=resolution-1;j>=0;j--)for(let i=0;i<resolution;i++)
   elevations.push(rounded(heights[j*resolution+i]/maxHeight));
 const asset=`<hfield name="viewer_park_hfield" nrow="${resolution}" ncol="${resolution}"
   size="${radius} ${radius} ${rounded(maxHeight)} 0.20"
   elevation="${elevations.join(' ')}" />`;
 const geometry='<geom name="viewer_park_ground" type="hfield" hfield="viewer_park_hfield" pos="0 0 '+
   rounded(park.zOffset||0)+'" friction="1.5 0.005 0.0001" rgba="0.31 0.53 0.25 1" />';

 let xml=robotXml.replace(/<geom\s+name="floor"[^>]*\/>/,'');
 if(xml===robotXml)throw new Error('Expected named MuJoCo floor plane');
 if(xml.includes('</asset>'))xml=xml.replace('</asset>',asset+'\n</asset>');
 else xml=xml.replace('<worldbody>','<asset>'+asset+'</asset>\n<worldbody>');
 return xml.replace('</worldbody>',geometry+'\n</worldbody>');
}

// Physical slope measurement (informational telemetry, never a control
// shortcut). Identical sampling and heading convention to the EMU viewer.
export function surfaceSlope(park,x,y,robotHeading=0){
 if(![x,y,robotHeading].every(Number.isFinite)||
    !park||Math.abs(x)>=park.radius||Math.abs(y)>=park.radius)
   return {supported:false,degrees:0,arrowDegrees:0};
 const delta=Math.max(park.cell*0.5,0.05);
 const xl=Math.max(-park.radius,x-delta),xr=Math.min(park.radius,x+delta);
 const yl=Math.max(-park.radius,y-delta),yr=Math.min(park.radius,y+delta);
 const gx=(park.sampleHeight(xr,y)-park.sampleHeight(xl,y))/(xr-xl);
 const gy=(park.sampleHeight(x,yr)-park.sampleHeight(x,yl))/(yr-yl);
 const degrees=Math.atan(Math.hypot(gx,gy))*180/Math.PI;
 const relative=Math.atan2(Math.sin(Math.atan2(gy,gx)-robotHeading),
                            Math.cos(Math.atan2(gy,gx)-robotHeading));
 return {supported:true,degrees,arrowDegrees:-relative*180/Math.PI,
         flat:degrees<.05};
}
