/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ji={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,Nc=1,Du=2,Jc=1,Zc=2,Gn=3,oi=0,fn=1,_n=2,ii=0,$i=1,Uc=2,Oc=3,kc=4,Lu=5,mi=100,Fu=101,Iu=102,Nu=103,Uu=104,Ou=200,ku=201,Bu=202,zu=203,xo=204,So=205,Hu=206,Gu=207,Vu=208,Wu=209,Xu=210,ju=211,$u=212,qu=213,Yu=214,Mo=0,Eo=1,wo=2,Yi=3,bo=4,To=5,Ao=6,Ro=7,Qc=0,Ku=1,Ju=2,ri=0,Zu=1,Qu=2,ed=3,el=4,td=5,nd=6,id=7,tl=300,Ki=301,Ji=302,Co=303,Po=304,_s=306,Do=1e3,_i=1001,Lo=1002,bn=1003,rd=1004,Zr=1005,Ln=1006,po=1007,gi=1008,Nn=1009,nl=1010,il=1011,Tr=1012,_a=1013,xi=1014,Xn=1015,Ir=1016,ga=1017,va=1018,Ar=1020,rl=35902,sl=35899,ol=1021,al=1022,wn=1023,Rr=1026,Cr=1027,cl=1028,ya=1029,ll=1030,xa=1031,Sa=1033,ns=33776,is=33777,rs=33778,ss=33779,Fo=35840,Io=35841,No=35842,Uo=35843,Oo=36196,ko=37492,Bo=37496,zo=37808,Ho=37809,Go=37810,Vo=37811,Wo=37812,Xo=37813,jo=37814,$o=37815,qo=37816,Yo=37817,Ko=37818,Jo=37819,Zo=37820,Qo=37821,ea=36492,ta=36494,na=36495,ia=36283,ra=36284,sa=36285,oa=36286,sd=3200,od=3201,hl=0,ad=1,ni="",un="srgb",Zi="srgb-linear",hs="linear",wt="srgb",Hi=7680,Bc=519,cd=512,ld=513,hd=514,ul=515,ud=516,dd=517,fd=518,pd=519,aa=35044,Qr=35048,zc="300 es",Fn=2e3,us=2001;class Ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,Hc=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function vv(i,e){return(i%e+e)%e}function Ka(i,e,t){return(1-t)*i+t*e}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const md={DEG2RAD:mo};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*r+e.x,this.y=o*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class In{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,c,l){let u=n[r+0],d=n[r+1],m=n[r+2],p=n[r+3];const _=o[c+0],y=o[c+1],E=o[c+2],T=o[c+3];if(l===0){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(l===1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=T;return}if(p!==T||u!==_||d!==y||m!==E){let x=1-l;const v=u*_+d*y+m*E+p*T,P=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const N=Math.sqrt(L),R=Math.atan2(N,v*P);x=Math.sin(x*R)/N,l=Math.sin(l*R)/N}const A=l*P;if(u=u*x+_*A,d=d*x+y*A,m=m*x+E*A,p=p*x+T*A,x===1-l){const N=1/Math.sqrt(u*u+d*d+m*m+p*p);u*=N,d*=N,m*=N,p*=N}}e[t]=u,e[t+1]=d,e[t+2]=m,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,o,c){const l=n[r],u=n[r+1],d=n[r+2],m=n[r+3],p=o[c],_=o[c+1],y=o[c+2],E=o[c+3];return e[t]=l*E+m*p+u*y-d*_,e[t+1]=u*E+m*_+d*p-l*y,e[t+2]=d*E+m*y+l*_-u*p,e[t+3]=m*E-l*p-u*_-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,c=e._order,l=Math.cos,u=Math.sin,d=l(n/2),m=l(r/2),p=l(o/2),_=u(n/2),y=u(r/2),E=u(o/2);switch(c){case"XYZ":this._x=_*m*p+d*y*E,this._y=d*y*p-_*m*E,this._z=d*m*E+_*y*p,this._w=d*m*p-_*y*E;break;case"YXZ":this._x=_*m*p+d*y*E,this._y=d*y*p-_*m*E,this._z=d*m*E-_*y*p,this._w=d*m*p+_*y*E;break;case"ZXY":this._x=_*m*p-d*y*E,this._y=d*y*p+_*m*E,this._z=d*m*E+_*y*p,this._w=d*m*p-_*y*E;break;case"ZYX":this._x=_*m*p-d*y*E,this._y=d*y*p+_*m*E,this._z=d*m*E-_*y*p,this._w=d*m*p+_*y*E;break;case"YZX":this._x=_*m*p+d*y*E,this._y=d*y*p+_*m*E,this._z=d*m*E-_*y*p,this._w=d*m*p-_*y*E;break;case"XZY":this._x=_*m*p-d*y*E,this._y=d*y*p-_*m*E,this._z=d*m*E+_*y*p,this._w=d*m*p+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],c=t[1],l=t[5],u=t[9],d=t[2],m=t[6],p=t[10],_=n+l+p;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-u)*y,this._y=(o-d)*y,this._z=(c-r)*y}else if(n>l&&n>p){const y=2*Math.sqrt(1+n-l-p);this._w=(m-u)/y,this._x=.25*y,this._y=(r+c)/y,this._z=(o+d)/y}else if(l>p){const y=2*Math.sqrt(1+l-n-p);this._w=(o-d)/y,this._x=(r+c)/y,this._y=.25*y,this._z=(u+m)/y}else{const y=2*Math.sqrt(1+p-n-l);this._w=(c-r)/y,this._x=(o+d)/y,this._y=(u+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,c=e._w,l=t._x,u=t._y,d=t._z,m=t._w;return this._x=n*m+c*l+r*d-o*u,this._y=r*m+c*u+o*l-n*d,this._z=o*m+c*d+n*u-r*l,this._w=c*m-n*l-r*u-o*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const u=1-l*l;if(u<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const d=Math.sqrt(u),m=Math.atan2(d,l),p=Math.sin((1-t)*m)/d,_=Math.sin(t*m)/d;return this._w=c*p+this._w*_,this._x=n*p+this._x*_,this._y=r*p+this._y*_,this._z=o*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,c=e.y,l=e.z,u=e.w,d=2*(c*r-l*n),m=2*(l*t-o*r),p=2*(o*n-c*t);return this.x=t+u*d+c*p-l*m,this.y=n+u*m+l*d-o*p,this.z=r+u*p+o*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,c=t.x,l=t.y,u=t.z;return this.x=r*u-o*l,this.y=o*c-n*u,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new z,xh=new In;class nt{constructor(e,t,n,r,o,c,l,u,d){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,u,d)}set(e,t,n,r,o,c,l,u,d){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=o,m[5]=u,m[6]=n,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[3],u=n[6],d=n[1],m=n[4],p=n[7],_=n[2],y=n[5],E=n[8],T=r[0],x=r[3],v=r[6],P=r[1],L=r[4],A=r[7],N=r[2],R=r[5],U=r[8];return o[0]=c*T+l*P+u*N,o[3]=c*x+l*L+u*R,o[6]=c*v+l*A+u*U,o[1]=d*T+m*P+p*N,o[4]=d*x+m*L+p*R,o[7]=d*v+m*A+p*U,o[2]=_*T+y*P+E*N,o[5]=_*x+y*L+E*R,o[8]=_*v+y*A+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],u=e[6],d=e[7],m=e[8];return t*c*m-t*l*d-n*o*m+n*l*u+r*o*d-r*c*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],u=e[6],d=e[7],m=e[8],p=m*c-l*d,_=l*u-m*o,y=d*o-c*u,E=t*p+n*_+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=p*T,e[1]=(r*d-m*n)*T,e[2]=(l*n-r*c)*T,e[3]=_*T,e[4]=(m*t-r*u)*T,e[5]=(r*o-l*t)*T,e[6]=y*T,e[7]=(n*u-d*t)*T,e[8]=(c*t-n*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,c,l){const u=Math.cos(o),d=Math.sin(o);return this.set(n*u,n*d,-n*(u*c+d*l)+c+e,-r*d,r*u,-r*(-d*c+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new nt;function _d(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){const i=ca("canvas");return i.style.display="block",i}const Sh={};function ds(i){i in Sh||(Sh[i]=!0,console.warn(i))}function yv(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Mh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xv(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===wt&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===wt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?hs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,c){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:e,whitePoint:n,transfer:hs,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Mh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const gt=xv();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class vd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tr===void 0&&(tr=ca("canvas")),tr.width=e.width,tr.height=e.height;const r=tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=si(o[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sv=0;class Ma{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(Qa(r[c].image)):o.push(Qa(r[c]))}else o=Qa(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mv=0;const ec=new z;class an extends Ei{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=_i,r=_i,o=Ln,c=gi,l=wn,u=Nn,d=an.DEFAULT_ANISOTROPY,m=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=yi(),this.name="",this.source=new Ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=u,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=tl;an.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const u=e.elements,d=u[0],m=u[4],p=u[8],_=u[1],y=u[5],E=u[9],T=u[2],x=u[6],v=u[10];if(Math.abs(m-_)<.01&&Math.abs(p-T)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(p+T)<.1&&Math.abs(E+x)<.1&&Math.abs(d+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(d+1)/2,A=(y+1)/2,N=(v+1)/2,R=(m+_)/4,U=(p+T)/4,B=(E+x)/4;return L>A&&L>N?L<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(L),r=R/n,o=U/n):A>N?A<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(A),n=R/r,o=B/r):N<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),n=U/o,r=B/o),this.set(n,r,o,t),this}let P=Math.sqrt((x-E)*(x-E)+(p-T)*(p-T)+(_-m)*(_-m));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(p-T)/P,this.z=(_-m)/P,this.w=Math.acos((d+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:n.depth},o=new an(r);this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ma(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends yd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dl extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=o.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,Rn):Rn.fromBufferAttribute(o,c),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const r=e.children;for(let o=0,c=r.length;o<c;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),zs.subVectors(this.max,Wr),nr.subVectors(e.a,Wr),ir.subVectors(e.b,Wr),rr.subVectors(e.c,Wr),ci.subVectors(ir,nr),li.subVectors(rr,ir),Ni.subVectors(nr,rr);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ni.z,Ni.y,ci.z,0,-ci.x,li.z,0,-li.x,Ni.z,0,-Ni.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ni.y,Ni.x,0];return!tc(t,nr,ir,rr,zs)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,nr,ir,rr,zs))?!1:(Hs.crossVectors(ci,li),t=[Hs.x,Hs.y,Hs.z],tc(t,nr,ir,rr,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new z,new z,new z,new z,new z,new z,new z,new z],Rn=new z,Bs=new Nr,nr=new z,ir=new z,rr=new z,ci=new z,li=new z,Ni=new z,Wr=new z,zs=new z,Hs=new z,Ui=new z;function tc(i,e,t,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Ui.fromArray(i,o);const l=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),u=e.dot(Ui),d=t.dot(Ui),m=n.dot(Ui);if(Math.max(-Math.max(u,d,m),Math.min(u,d,m))>l)return!1}return!0}const Ev=new Nr,Xr=new z,nc=new z;class gs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ev.setFromPoints(e).getCenter(n);let r=0;for(let o=0,c=e.length;o<c;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(nc)),this.expandByPoint(Xr.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Kn=new z,ic=new z,Gs=new z,hi=new z,rc=new z,Vs=new z,sc=new z;class vs{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ic.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(ic);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Gs),l=hi.dot(this.direction),u=-hi.dot(Gs),d=hi.lengthSq(),m=Math.abs(1-c*c);let p,_,y,E;if(m>0)if(p=c*u-l,_=c*l-u,E=o*m,p>=0)if(_>=-E)if(_<=E){const T=1/m;p*=T,_*=T,y=p*(p+c*_+2*l)+_*(c*p+_+2*u)+d}else _=o,p=Math.max(0,-(c*_+l)),y=-p*p+_*(_+2*u)+d;else _=-o,p=Math.max(0,-(c*_+l)),y=-p*p+_*(_+2*u)+d;else _<=-E?(p=Math.max(0,-(-c*o+l)),_=p>0?-o:Math.min(Math.max(-o,-u),o),y=-p*p+_*(_+2*u)+d):_<=E?(p=0,_=Math.min(Math.max(-o,-u),o),y=_*(_+2*u)+d):(p=Math.max(0,-(c*o+l)),_=p>0?o:Math.min(Math.max(-o,-u),o),y=-p*p+_*(_+2*u)+d);else _=c>0?-o:o,p=Math.max(0,-(c*_+l)),y=-p*p+_*(_+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ic).addScaledVector(Gs,_),y}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),r=Kn.dot(Kn)-n*n,o=e.radius*e.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,u=n+c;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,c,l,u;const d=1/this.direction.x,m=1/this.direction.y,p=1/this.direction.z,_=this.origin;return d>=0?(n=(e.min.x-_.x)*d,r=(e.max.x-_.x)*d):(n=(e.max.x-_.x)*d,r=(e.min.x-_.x)*d),m>=0?(o=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(o=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),p>=0?(l=(e.min.z-_.z)*p,u=(e.max.z-_.z)*p):(l=(e.max.z-_.z)*p,u=(e.min.z-_.z)*p),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,r,o){rc.subVectors(t,e),Vs.subVectors(n,e),sc.crossVectors(rc,Vs);let c=this.direction.dot(sc),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;hi.subVectors(this.origin,e);const u=l*this.direction.dot(Vs.crossVectors(hi,Vs));if(u<0)return null;const d=l*this.direction.dot(rc.cross(hi));if(d<0||u+d>c)return null;const m=-l*hi.dot(sc);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,r,o,c,l,u,d,m,p,_,y,E,T,x){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,c,l,u,d,m,p,_,y,E,T,x)}set(e,t,n,r,o,c,l,u,d,m,p,_,y,E,T,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=o,v[5]=c,v[9]=l,v[13]=u,v[2]=d,v[6]=m,v[10]=p,v[14]=_,v[3]=y,v[7]=E,v[11]=T,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),o=1/sr.setFromMatrixColumn(e,1).length(),c=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),p=Math.sin(o);if(e.order==="XYZ"){const _=c*m,y=c*p,E=l*m,T=l*p;t[0]=u*m,t[4]=-u*p,t[8]=d,t[1]=y+E*d,t[5]=_-T*d,t[9]=-l*u,t[2]=T-_*d,t[6]=E+y*d,t[10]=c*u}else if(e.order==="YXZ"){const _=u*m,y=u*p,E=d*m,T=d*p;t[0]=_+T*l,t[4]=E*l-y,t[8]=c*d,t[1]=c*p,t[5]=c*m,t[9]=-l,t[2]=y*l-E,t[6]=T+_*l,t[10]=c*u}else if(e.order==="ZXY"){const _=u*m,y=u*p,E=d*m,T=d*p;t[0]=_-T*l,t[4]=-c*p,t[8]=E+y*l,t[1]=y+E*l,t[5]=c*m,t[9]=T-_*l,t[2]=-c*d,t[6]=l,t[10]=c*u}else if(e.order==="ZYX"){const _=c*m,y=c*p,E=l*m,T=l*p;t[0]=u*m,t[4]=E*d-y,t[8]=_*d+T,t[1]=u*p,t[5]=T*d+_,t[9]=y*d-E,t[2]=-d,t[6]=l*u,t[10]=c*u}else if(e.order==="YZX"){const _=c*u,y=c*d,E=l*u,T=l*d;t[0]=u*m,t[4]=T-_*p,t[8]=E*p+y,t[1]=p,t[5]=c*m,t[9]=-l*m,t[2]=-d*m,t[6]=y*p+E,t[10]=_-T*p}else if(e.order==="XZY"){const _=c*u,y=c*d,E=l*u,T=l*d;t[0]=u*m,t[4]=-p,t[8]=d*m,t[1]=_*p+T,t[5]=c*m,t[9]=y*p-E,t[2]=E*p-y,t[6]=l*m,t[10]=T*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wv,e,bv)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ui.crossVectors(n,gn),ui.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ui.crossVectors(n,gn)),ui.normalize(),Ws.crossVectors(gn,ui),r[0]=ui.x,r[4]=Ws.x,r[8]=gn.x,r[1]=ui.y,r[5]=Ws.y,r[9]=gn.y,r[2]=ui.z,r[6]=Ws.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[4],u=n[8],d=n[12],m=n[1],p=n[5],_=n[9],y=n[13],E=n[2],T=n[6],x=n[10],v=n[14],P=n[3],L=n[7],A=n[11],N=n[15],R=r[0],U=r[4],B=r[8],F=r[12],M=r[1],H=r[5],K=r[9],Z=r[13],Q=r[2],oe=r[6],ce=r[10],Me=r[14],re=r[3],Te=r[7],Fe=r[11],Ve=r[15];return o[0]=c*R+l*M+u*Q+d*re,o[4]=c*U+l*H+u*oe+d*Te,o[8]=c*B+l*K+u*ce+d*Fe,o[12]=c*F+l*Z+u*Me+d*Ve,o[1]=m*R+p*M+_*Q+y*re,o[5]=m*U+p*H+_*oe+y*Te,o[9]=m*B+p*K+_*ce+y*Fe,o[13]=m*F+p*Z+_*Me+y*Ve,o[2]=E*R+T*M+x*Q+v*re,o[6]=E*U+T*H+x*oe+v*Te,o[10]=E*B+T*K+x*ce+v*Fe,o[14]=E*F+T*Z+x*Me+v*Ve,o[3]=P*R+L*M+A*Q+N*re,o[7]=P*U+L*H+A*oe+N*Te,o[11]=P*B+L*K+A*ce+N*Fe,o[15]=P*F+L*Z+A*Me+N*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],c=e[1],l=e[5],u=e[9],d=e[13],m=e[2],p=e[6],_=e[10],y=e[14],E=e[3],T=e[7],x=e[11],v=e[15];return E*(+o*u*p-r*d*p-o*l*_+n*d*_+r*l*y-n*u*y)+T*(+t*u*y-t*d*_+o*c*_-r*c*y+r*d*m-o*u*m)+x*(+t*d*p-t*l*y-o*c*p+n*c*y+o*l*m-n*d*m)+v*(-r*l*m-t*u*p+t*l*_+r*c*p-n*c*_+n*u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],u=e[6],d=e[7],m=e[8],p=e[9],_=e[10],y=e[11],E=e[12],T=e[13],x=e[14],v=e[15],P=p*x*d-T*_*d+T*u*y-l*x*y-p*u*v+l*_*v,L=E*_*d-m*x*d-E*u*y+c*x*y+m*u*v-c*_*v,A=m*T*d-E*p*d+E*l*y-c*T*y-m*l*v+c*p*v,N=E*p*u-m*T*u-E*l*_+c*T*_+m*l*x-c*p*x,R=t*P+n*L+r*A+o*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=P*U,e[1]=(T*_*o-p*x*o-T*r*y+n*x*y+p*r*v-n*_*v)*U,e[2]=(l*x*o-T*u*o+T*r*d-n*x*d-l*r*v+n*u*v)*U,e[3]=(p*u*o-l*_*o-p*r*d+n*_*d+l*r*y-n*u*y)*U,e[4]=L*U,e[5]=(m*x*o-E*_*o+E*r*y-t*x*y-m*r*v+t*_*v)*U,e[6]=(E*u*o-c*x*o-E*r*d+t*x*d+c*r*v-t*u*v)*U,e[7]=(c*_*o-m*u*o+m*r*d-t*_*d-c*r*y+t*u*y)*U,e[8]=A*U,e[9]=(E*p*o-m*T*o-E*n*y+t*T*y+m*n*v-t*p*v)*U,e[10]=(c*T*o-E*l*o+E*n*d-t*T*d-c*n*v+t*l*v)*U,e[11]=(m*l*o-c*p*o-m*n*d+t*p*d+c*n*y-t*l*y)*U,e[12]=N*U,e[13]=(m*T*r-E*p*r+E*n*_-t*T*_-m*n*x+t*p*x)*U,e[14]=(E*l*r-c*T*r-E*n*u+t*T*u+c*n*x-t*l*x)*U,e[15]=(c*p*r-m*l*r+m*n*u-t*p*u-c*n*_+t*l*_)*U,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,c=e.x,l=e.y,u=e.z,d=o*c,m=o*l;return this.set(d*c+n,d*l-r*u,d*u+r*l,0,d*l+r*u,m*l+n,m*u-r*c,0,d*u-r*l,m*u+r*c,o*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,c){return this.set(1,n,o,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,c=t._y,l=t._z,u=t._w,d=o+o,m=c+c,p=l+l,_=o*d,y=o*m,E=o*p,T=c*m,x=c*p,v=l*p,P=u*d,L=u*m,A=u*p,N=n.x,R=n.y,U=n.z;return r[0]=(1-(T+v))*N,r[1]=(y+A)*N,r[2]=(E-L)*N,r[3]=0,r[4]=(y-A)*R,r[5]=(1-(_+v))*R,r[6]=(x+P)*R,r[7]=0,r[8]=(E+L)*U,r[9]=(x-P)*U,r[10]=(1-(_+T))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=sr.set(r[0],r[1],r[2]).length();const c=sr.set(r[4],r[5],r[6]).length(),l=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const d=1/o,m=1/c,p=1/l;return Cn.elements[0]*=d,Cn.elements[1]*=d,Cn.elements[2]*=d,Cn.elements[4]*=m,Cn.elements[5]*=m,Cn.elements[6]*=m,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,t.setFromRotationMatrix(Cn),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,o,c,l=Fn,u=!1){const d=this.elements,m=2*o/(t-e),p=2*o/(n-r),_=(t+e)/(t-e),y=(n+r)/(n-r);let E,T;if(u)E=o/(c-o),T=c*o/(c-o);else if(l===Fn)E=-(c+o)/(c-o),T=-2*c*o/(c-o);else if(l===us)E=-c/(c-o),T=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=m,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,o,c,l=Fn,u=!1){const d=this.elements,m=2/(t-e),p=2/(n-r),_=-(t+e)/(t-e),y=-(n+r)/(n-r);let E,T;if(u)E=1/(c-o),T=c/(c-o);else if(l===Fn)E=-2/(c-o),T=-(c+o)/(c-o);else if(l===us)E=-1/(c-o),T=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=m,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=p,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new z,Cn=new Ct,wv=new z(0,0,0),bv=new z(1,1,1),ui=new z,Ws=new z,gn=new z,wh=new Ct,bh=new In;class Un{constructor(e=0,t=0,n=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],c=r[4],l=r[8],u=r[1],d=r[5],m=r[9],p=r[2],_=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-at(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-p,o),this._z=0);break;case"ZXY":this._x=Math.asin(at(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-at(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-p,o)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Ea{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tv=0;const Th=new z,or=new In,Jn=new Ct,Xs=new z,jr=new z,Av=new z,Rv=new In,Ah=new z(1,0,0),Rh=new z(0,1,0),Ch=new z(0,0,1),Ph={type:"added"},Cv={type:"removed"},ar={type:"childadded",child:null},oc={type:"childremoved",child:null};class zt extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new z,t=new Un,n=new In,r=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new nt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(jr,Xs,this.up):Jn.lookAt(Xs,jr,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Jn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),ar.child=e,this.dispatchEvent(ar),ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cv),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Av),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let d=0,m=u.length;d<m;d++){const p=u[d];o(e.shapes,p)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,d=this.material.length;u<d;u++)l.push(o(e.materials,this.material[u]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(o(e.animations,u))}}if(t){const l=c(e.geometries),u=c(e.materials),d=c(e.textures),m=c(e.images),p=c(e.shapes),_=c(e.skeletons),y=c(e.animations),E=c(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),m.length>0&&(n.images=m),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=r,n;function c(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new z,Zn=new z,ac=new z,Qn=new z,cr=new z,lr=new z,Dh=new z,cc=new z,lc=new z,hc=new z,uc=new Bt,dc=new Bt,fc=new Bt;class xn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Pn.subVectors(r,t),Zn.subVectors(n,t),ac.subVectors(e,t);const c=Pn.dot(Pn),l=Pn.dot(Zn),u=Pn.dot(ac),d=Zn.dot(Zn),m=Zn.dot(ac),p=c*d-l*l;if(p===0)return o.set(0,0,0),null;const _=1/p,y=(d*u-l*m)*_,E=(c*m-l*u)*_;return o.set(1-y-E,E,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,r,o,c,l,u){return this.getBarycoord(e,t,n,r,Qn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Qn.x),u.addScaledVector(c,Qn.y),u.addScaledVector(l,Qn.z),u)}static getInterpolatedAttribute(e,t,n,r,o,c){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(uc,o.x),c.addScaledVector(dc,o.y),c.addScaledVector(fc,o.z),c}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Zn.subVectors(e,t),Pn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Pn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let c,l;cr.subVectors(r,n),lr.subVectors(o,n),cc.subVectors(e,n);const u=cr.dot(cc),d=lr.dot(cc);if(u<=0&&d<=0)return t.copy(n);lc.subVectors(e,r);const m=cr.dot(lc),p=lr.dot(lc);if(m>=0&&p<=m)return t.copy(r);const _=u*p-m*d;if(_<=0&&u>=0&&m<=0)return c=u/(u-m),t.copy(n).addScaledVector(cr,c);hc.subVectors(e,o);const y=cr.dot(hc),E=lr.dot(hc);if(E>=0&&y<=E)return t.copy(o);const T=y*d-u*E;if(T<=0&&d>=0&&E<=0)return l=d/(d-E),t.copy(n).addScaledVector(lr,l);const x=m*E-y*p;if(x<=0&&p-m>=0&&y-E>=0)return Dh.subVectors(o,r),l=(p-m)/(p-m+(y-E)),t.copy(r).addScaledVector(Dh,l);const v=1/(x+T+_);return c=T*v,l=_*v,t.copy(n).addScaledVector(cr,c).addScaledVector(lr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},js={h:0,s:0,l:0};function pc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=vv(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=pc(c,o,e+1/3),this.g=pc(c,o,e),this.b=pc(c,o,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=un){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=Sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return gt.workingToColorSpace(rn.copy(this),e),Math.round(at(rn.r*255,0,255))*65536+Math.round(at(rn.g*255,0,255))*256+Math.round(at(rn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(rn.copy(this),t);const n=rn.r,r=rn.g,o=rn.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let u,d;const m=(l+c)/2;if(l===c)u=0,d=0;else{const p=c-l;switch(d=m<=.5?p/(c+l):p/(2-c-l),c){case n:u=(r-o)/p+(r<o?6:0);break;case r:u=(o-n)/p+2;break;case o:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=d,e.l=m,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=un){gt.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,r=rn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(js);const n=Ka(di.h,js.h,t),r=Ka(di.s,js.s,t),o=Ka(di.l,js.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new dt;dt.NAMES=Sd;let Pv=0;class wi extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=$i,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=So,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}if(t){const o=r(e.textures),c=r(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qi extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new z,$s=new we;let Dv=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=aa,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),o=At(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==aa&&(e.usage=this.usage),e}}class fl extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lv=0;const En=new Ct,mc=new zt,hr=new z,vn=new Nr,$r=new Nr,Jt=new z;class Ut extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?pl:fl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new nt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];vn.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];$r.setFromBufferAttribute(l),this.morphTargetsRelative?(Jt.addVectors(vn.min,$r.min),vn.expandByPoint(Jt),Jt.addVectors(vn.max,$r.max),vn.expandByPoint(Jt)):(vn.expandByPoint($r.min),vn.expandByPoint($r.max))}vn.getCenter(n);let r=0;for(let o=0,c=e.count;o<c;o++)Jt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],u=this.morphTargetsRelative;for(let d=0,m=l.count;d<m;d++)Jt.fromBufferAttribute(l,d),u&&(hr.fromBufferAttribute(e,d),Jt.add(hr)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],u=[];for(let B=0;B<n.count;B++)l[B]=new z,u[B]=new z;const d=new z,m=new z,p=new z,_=new we,y=new we,E=new we,T=new z,x=new z;function v(B,F,M){d.fromBufferAttribute(n,B),m.fromBufferAttribute(n,F),p.fromBufferAttribute(n,M),_.fromBufferAttribute(o,B),y.fromBufferAttribute(o,F),E.fromBufferAttribute(o,M),m.sub(d),p.sub(d),y.sub(_),E.sub(_);const H=1/(y.x*E.y-E.x*y.y);isFinite(H)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(p,-y.y).multiplyScalar(H),x.copy(p).multiplyScalar(y.x).addScaledVector(m,-E.x).multiplyScalar(H),l[B].add(T),l[F].add(T),l[M].add(T),u[B].add(x),u[F].add(x),u[M].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let B=0,F=P.length;B<F;++B){const M=P[B],H=M.start,K=M.count;for(let Z=H,Q=H+K;Z<Q;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new z,A=new z,N=new z,R=new z;function U(B){N.fromBufferAttribute(r,B),R.copy(N);const F=l[B];L.copy(F),L.sub(N.multiplyScalar(N.dot(F))).normalize(),A.crossVectors(R,F);const H=A.dot(u[B])<0?-1:1;c.setXYZW(B,L.x,L.y,L.z,H)}for(let B=0,F=P.length;B<F;++B){const M=P[B],H=M.start,K=M.count;for(let Z=H,Q=H+K;Z<Q;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const r=new z,o=new z,c=new z,l=new z,u=new z,d=new z,m=new z,p=new z;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),T=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,T),c.fromBufferAttribute(t,x),m.subVectors(c,o),p.subVectors(r,o),m.cross(p),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),l.add(m),u.add(m),d.add(m),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(x,d.x,d.y,d.z)}else for(let _=0,y=t.count;_<y;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,o),p.subVectors(r,o),m.cross(p),n.setXYZ(_+0,m.x,m.y,m.z),n.setXYZ(_+1,m.x,m.y,m.z),n.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(l,u){const d=l.array,m=l.itemSize,p=l.normalized,_=new d.constructor(u.length*m);let y=0,E=0;for(let T=0,x=u.length;T<x;T++){l.isInterleavedBufferAttribute?y=u[T]*l.data.stride+l.offset:y=u[T]*m;for(let v=0;v<m;v++)_[E++]=d[y++]}return new on(_,m,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],d=e(u,n);t.setAttribute(l,d)}const o=this.morphAttributes;for(const l in o){const u=[],d=o[l];for(let m=0,p=d.length;m<p;m++){const _=d[m],y=e(_,n);u.push(y)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,u=c.length;l<u;l++){const d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const d=n[u];e.data.attributes[u]=d.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],m=[];for(let p=0,_=d.length;p<_;p++){const y=d[p];m.push(y.toJSON(e.data))}m.length>0&&(r[u]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const d in r){const m=r[d];this.setAttribute(d,m.clone(t))}const o=e.morphAttributes;for(const d in o){const m=[],p=o[d];for(let _=0,y=p.length;_<y;_++)m.push(p[_].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const p=c[d];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Ct,Oi=new vs,qs=new gs,Fh=new z,Ys=new z,Ks=new z,Js=new z,_c=new z,Zs=new z,Ih=new z,Qs=new z;class dn extends zt{constructor(e=new Ut,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){Zs.set(0,0,0);for(let u=0,d=o.length;u<d;u++){const m=l[u],p=o[u];m!==0&&(_c.fromBufferAttribute(p,e),c?Zs.addScaledVector(_c,m):Zs.addScaledVector(_c.sub(t),m))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(o),Oi.copy(e.ray).recast(e.near),!(qs.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(qs,Fh)===null||Oi.origin.distanceToSquared(Fh)>(e.far-e.near)**2))&&(Lh.copy(o).invert(),Oi.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let r;const o=this.geometry,c=this.material,l=o.index,u=o.attributes.position,d=o.attributes.uv,m=o.attributes.uv1,p=o.attributes.normal,_=o.groups,y=o.drawRange;if(l!==null)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const x=_[E],v=c[x.materialIndex],P=Math.max(x.start,y.start),L=Math.min(l.count,Math.min(x.start+x.count,y.start+y.count));for(let A=P,N=L;A<N;A+=3){const R=l.getX(A),U=l.getX(A+1),B=l.getX(A+2);r=eo(this,v,e,n,d,m,p,R,U,B),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(l.count,y.start+y.count);for(let x=E,v=T;x<v;x+=3){const P=l.getX(x),L=l.getX(x+1),A=l.getX(x+2);r=eo(this,c,e,n,d,m,p,P,L,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(c))for(let E=0,T=_.length;E<T;E++){const x=_[E],v=c[x.materialIndex],P=Math.max(x.start,y.start),L=Math.min(u.count,Math.min(x.start+x.count,y.start+y.count));for(let A=P,N=L;A<N;A+=3){const R=A,U=A+1,B=A+2;r=eo(this,v,e,n,d,m,p,R,U,B),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),T=Math.min(u.count,y.start+y.count);for(let x=E,v=T;x<v;x+=3){const P=x,L=x+1,A=x+2;r=eo(this,c,e,n,d,m,p,P,L,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Fv(i,e,t,n,r,o,c,l){let u;if(e.side===fn?u=n.intersectTriangle(c,o,r,!0,l):u=n.intersectTriangle(r,o,c,e.side===oi,l),u===null)return null;Qs.copy(l),Qs.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Qs);return d<t.near||d>t.far?null:{distance:d,point:Qs.clone(),object:i}}function eo(i,e,t,n,r,o,c,l,u,d){i.getVertexPosition(l,Ys),i.getVertexPosition(u,Ks),i.getVertexPosition(d,Js);const m=Fv(i,e,t,n,Ys,Ks,Js,Ih);if(m){const p=new z;xn.getBarycoord(Ih,Ys,Ks,Js,p),r&&(m.uv=xn.getInterpolatedAttribute(r,l,u,d,p,new we)),o&&(m.uv1=xn.getInterpolatedAttribute(o,l,u,d,p,new we)),c&&(m.normal=xn.getInterpolatedAttribute(c,l,u,d,p,new z),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const _={a:l,b:u,c:d,normal:new z,materialIndex:0};xn.getNormal(Ys,Ks,Js,_.normal),m.face=_,m.barycoord=p}return m}class Qi extends Ut{constructor(e=1,t=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const u=[],d=[],m=[],p=[];let _=0,y=0;E("z","y","x",-1,-1,n,t,e,c,o,0),E("z","y","x",1,-1,n,t,-e,c,o,1),E("x","z","y",1,1,e,n,t,r,c,2),E("x","z","y",1,-1,e,n,-t,r,c,3),E("x","y","z",1,-1,e,t,n,r,o,4),E("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(u),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(m,3)),this.setAttribute("uv",new Pt(p,2));function E(T,x,v,P,L,A,N,R,U,B,F){const M=A/U,H=N/B,K=A/2,Z=N/2,Q=R/2,oe=U+1,ce=B+1;let Me=0,re=0;const Te=new z;for(let Fe=0;Fe<ce;Fe++){const Ve=Fe*H-Z;for(let it=0;it<oe;it++){const vt=it*M-K;Te[T]=vt*P,Te[x]=Ve*L,Te[v]=Q,d.push(Te.x,Te.y,Te.z),Te[T]=0,Te[x]=0,Te[v]=R>0?1:-1,m.push(Te.x,Te.y,Te.z),p.push(it/U),p.push(1-Fe/B),Me+=1}}for(let Fe=0;Fe<B;Fe++)for(let Ve=0;Ve<U;Ve++){const it=_+Ve+oe*Fe,vt=_+Ve+oe*(Fe+1),tt=_+(Ve+1)+oe*(Fe+1),Qe=_+(Ve+1)+oe*Fe;u.push(it,vt,Qe),u.push(vt,tt,Qe),re+=6}l.addGroup(y,re,F),y+=re,_+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=Pr(i[t]);for(const r in n)e[r]=n[r]}return e}function Iv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Ed={clone:Pr,merge:hn};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Iv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ml extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new z,Nh=new we,Uh=new we;class yn extends ml{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Uh),t.subVectors(Uh,Nh)}setViewOffset(e,t,n,r,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const u=c.fullWidth,d=c.fullHeight;o+=c.offsetX*r/u,t-=c.offsetY*n/d,r*=c.width/u,n*=c.height/d}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ur=-90,dr=1;class wd extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(ur,dr,e,t);r.layers=this.layers,this.add(r);const o=new yn(ur,dr,e,t);o.layers=this.layers,this.add(o);const c=new yn(ur,dr,e,t);c.layers=this.layers,this.add(c);const l=new yn(ur,dr,e,t);l.layers=this.layers,this.add(l);const u=new yn(ur,dr,e,t);u.layers=this.layers,this.add(u);const d=new yn(ur,dr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,c,l,u]=t;for(const d of t)this.remove(d);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,l,u,d,m]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(p,_,y),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class _l extends an{constructor(e=[],t=Ki,n,r,o,c,l,u,d,m){super(e,t,n,r,o,c,l,u,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bd extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _l(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),o=new ai({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ii});o.uniforms.tEquirect.value=t;const c=new dn(r,o),l=t.minFilter;return t.minFilter===gi&&(t.minFilter=Ln),new wd(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(o)}}class xr extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ov={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,c=null;const l=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,n),v=this._getHandJoint(d,T);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const m=d.joints["index-finger-tip"],p=d.joints["thumb-tip"],_=m.position.distanceTo(p.position),y=.02,E=.005;d.inputState.pinching&&_>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ov)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=t,this.far=n}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Td extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ad{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=aa,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new z;class fs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),o=At(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gl extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fr;const qr=new z,pr=new z,mr=new z,_r=new we,Yr=new we,Rd=new Ct,to=new z,Kr=new z,no=new z,Oh=new we,gc=new we,kh=new we;class Cd extends zt{constructor(e=new gl){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ad(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new fs(n,3,0,!1)),fr.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=fr,this.material=e,this.center=new we(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),Rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const n=this.material.rotation;let r,o;n!==0&&(o=Math.cos(n),r=Math.sin(n));const c=this.center;io(to.set(-.5,-.5,0),mr,c,pr,r,o),io(Kr.set(.5,-.5,0),mr,c,pr,r,o),io(no.set(.5,.5,0),mr,c,pr,r,o),Oh.set(0,0),gc.set(1,0),kh.set(1,1);let l=e.ray.intersectTriangle(to,Kr,no,!1,qr);if(l===null&&(io(Kr.set(-.5,.5,0),mr,c,pr,r,o),gc.set(0,1),l=e.ray.intersectTriangle(to,no,Kr,!1,qr),l===null))return;const u=e.ray.origin.distanceTo(qr);u<e.near||u>e.far||t.push({distance:u,point:qr.clone(),uv:xn.getInterpolation(qr,to,Kr,no,Oh,gc,kh,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function io(i,e,t,n,r,o){_r.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Yr.x=o*_r.x-r*_r.y,Yr.y=r*_r.x+o*_r.y):Yr.copy(_r),i.copy(e),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(Rd)}const vc=new z,kv=new z,Bv=new nt;class ei{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vc.subVectors(n,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bv.getNormalMatrix(e),r=this.coplanarPoint(vc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new gs,zv=new we(.5,.5),ro=new z;class ba{constructor(e=new ei,t=new ei,n=new ei,r=new ei,o=new ei,c=new ei){this.planes=[e,t,n,r,o,c]}set(e,t,n,r,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){const r=this.planes,o=e.elements,c=o[0],l=o[1],u=o[2],d=o[3],m=o[4],p=o[5],_=o[6],y=o[7],E=o[8],T=o[9],x=o[10],v=o[11],P=o[12],L=o[13],A=o[14],N=o[15];if(r[0].setComponents(d-c,y-m,v-E,N-P).normalize(),r[1].setComponents(d+c,y+m,v+E,N+P).normalize(),r[2].setComponents(d+l,y+p,v+T,N+L).normalize(),r[3].setComponents(d-l,y-p,v-T,N-L).normalize(),n)r[4].setComponents(u,_,x,A).normalize(),r[5].setComponents(d-u,y-_,v-x,N-A).normalize();else if(r[4].setComponents(d-u,y-_,v-x,N-A).normalize(),t===Fn)r[5].setComponents(d+u,y+_,v+x,N+A).normalize();else if(t===us)r[5].setComponents(u,_,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=zv.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ti extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new z,ha=new z,Bh=new Ct,Jr=new vs,so=new gs,yc=new z,zh=new z;class Dr extends zt{constructor(e=new Ut,t=new ti){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)la.fromBufferAttribute(t,r-1),ha.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=la.distanceTo(ha);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=o,e.ray.intersectsSphere(so)===!1)return;Bh.copy(r).invert(),Jr.copy(e.ray).applyMatrix4(Bh);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=this.isLineSegments?2:1,m=n.index,_=n.attributes.position;if(m!==null){const y=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let T=y,x=E-1;T<x;T+=d){const v=m.getX(T),P=m.getX(T+1),L=oo(this,e,Jr,u,v,P,T);L&&t.push(L)}if(this.isLineLoop){const T=m.getX(E-1),x=m.getX(y),v=oo(this,e,Jr,u,T,x,E-1);v&&t.push(v)}}else{const y=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let T=y,x=E-1;T<x;T+=d){const v=oo(this,e,Jr,u,T,T+1,T);v&&t.push(v)}if(this.isLineLoop){const T=oo(this,e,Jr,u,E-1,y,E-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function oo(i,e,t,n,r,o,c){const l=i.geometry.attributes.position;if(la.fromBufferAttribute(l,r),ha.fromBufferAttribute(l,o),t.distanceSqToSegment(la,ha,yc,zh)>n)return;yc.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(yc);if(!(d<e.near||d>e.far))return{distance:d,point:zh.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const Hh=new z,Gh=new z;class go extends Dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Hh.fromBufferAttribute(t,r),Gh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Hh.distanceTo(Gh);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends Dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dd extends an{constructor(e,t,n,r,o,c,l,u,d){super(e,t,n,r,o,c,l,u,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vl extends an{constructor(e,t,n=xi,r,o,c,l=bn,u=bn,d,m=Rr,p=1){if(m!==Rr&&m!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:p};super(_,r,o,c,l,u,m,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yl extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ys extends Ut{constructor(e=1,t=1,n=1,r=32,o=1,c=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:c,thetaStart:l,thetaLength:u};const d=this;r=Math.floor(r),o=Math.floor(o);const m=[],p=[],_=[],y=[];let E=0;const T=[],x=n/2;let v=0;P(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(m),this.setAttribute("position",new Pt(p,3)),this.setAttribute("normal",new Pt(_,3)),this.setAttribute("uv",new Pt(y,2));function P(){const A=new z,N=new z;let R=0;const U=(t-e)/n;for(let B=0;B<=o;B++){const F=[],M=B/o,H=M*(t-e)+e;for(let K=0;K<=r;K++){const Z=K/r,Q=Z*u+l,oe=Math.sin(Q),ce=Math.cos(Q);N.x=H*oe,N.y=-M*n+x,N.z=H*ce,p.push(N.x,N.y,N.z),A.set(oe,U,ce).normalize(),_.push(A.x,A.y,A.z),y.push(Z,1-M),F.push(E++)}T.push(F)}for(let B=0;B<r;B++)for(let F=0;F<o;F++){const M=T[F][B],H=T[F+1][B],K=T[F+1][B+1],Z=T[F][B+1];(e>0||F!==0)&&(m.push(M,H,Z),R+=3),(t>0||F!==o-1)&&(m.push(H,K,Z),R+=3)}d.addGroup(v,R,0),v+=R}function L(A){const N=E,R=new we,U=new z;let B=0;const F=A===!0?e:t,M=A===!0?1:-1;for(let K=1;K<=r;K++)p.push(0,x*M,0),_.push(0,M,0),y.push(.5,.5),E++;const H=E;for(let K=0;K<=r;K++){const Q=K/r*u+l,oe=Math.cos(Q),ce=Math.sin(Q);U.x=F*ce,U.y=x*M,U.z=F*oe,p.push(U.x,U.y,U.z),_.push(0,M,0),R.x=oe*.5+.5,R.y=ce*.5*M+.5,y.push(R.x,R.y),E++}for(let K=0;K<r;K++){const Z=N+K,Q=H+K;A===!0?m.push(Q,Q+1,Z):m.push(Q+1,Q,Z),B+=3}d.addGroup(v,B,A===!0?1:2),v+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends ys{constructor(e=1,t=1,n=32,r=1,o=!1,c=0,l=Math.PI*2){super(0,e,t,n,r,o,c,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:l}}static fromJSON(e){return new Ta(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Aa extends Ut{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const o=[],c=[];l(r),d(n),m(),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(o.slice(),3)),this.setAttribute("uv",new Pt(c,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(P){const L=new z,A=new z,N=new z;for(let R=0;R<t.length;R+=3)y(t[R+0],L),y(t[R+1],A),y(t[R+2],N),u(L,A,N,P)}function u(P,L,A,N){const R=N+1,U=[];for(let B=0;B<=R;B++){U[B]=[];const F=P.clone().lerp(A,B/R),M=L.clone().lerp(A,B/R),H=R-B;for(let K=0;K<=H;K++)K===0&&B===R?U[B][K]=F:U[B][K]=F.clone().lerp(M,K/H)}for(let B=0;B<R;B++)for(let F=0;F<2*(R-B)-1;F++){const M=Math.floor(F/2);F%2===0?(_(U[B][M+1]),_(U[B+1][M]),_(U[B][M])):(_(U[B][M+1]),_(U[B+1][M+1]),_(U[B+1][M]))}}function d(P){const L=new z;for(let A=0;A<o.length;A+=3)L.x=o[A+0],L.y=o[A+1],L.z=o[A+2],L.normalize().multiplyScalar(P),o[A+0]=L.x,o[A+1]=L.y,o[A+2]=L.z}function m(){const P=new z;for(let L=0;L<o.length;L+=3){P.x=o[L+0],P.y=o[L+1],P.z=o[L+2];const A=x(P)/2/Math.PI+.5,N=v(P)/Math.PI+.5;c.push(A,1-N)}E(),p()}function p(){for(let P=0;P<c.length;P+=6){const L=c[P+0],A=c[P+2],N=c[P+4],R=Math.max(L,A,N),U=Math.min(L,A,N);R>.9&&U<.1&&(L<.2&&(c[P+0]+=1),A<.2&&(c[P+2]+=1),N<.2&&(c[P+4]+=1))}}function _(P){o.push(P.x,P.y,P.z)}function y(P,L){const A=P*3;L.x=e[A+0],L.y=e[A+1],L.z=e[A+2]}function E(){const P=new z,L=new z,A=new z,N=new z,R=new we,U=new we,B=new we;for(let F=0,M=0;F<o.length;F+=9,M+=6){P.set(o[F+0],o[F+1],o[F+2]),L.set(o[F+3],o[F+4],o[F+5]),A.set(o[F+6],o[F+7],o[F+8]),R.set(c[M+0],c[M+1]),U.set(c[M+2],c[M+3]),B.set(c[M+4],c[M+5]),N.copy(P).add(L).add(A).divideScalar(3);const H=x(N);T(R,M+0,P,H),T(U,M+2,L,H),T(B,M+4,A,H)}}function T(P,L,A,N){N<0&&P.x===1&&(c[L]=P.x-1),A.x===0&&A.z===0&&(c[L]=N/2/Math.PI+.5)}function x(P){return Math.atan2(P.z,-P.x)}function v(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.vertices,e.indices,e.radius,e.details)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const o=n.length;let c;t?c=t:c=e*n[o-1];let l=0,u=o-1,d;for(;l<=u;)if(r=Math.floor(l+(u-l)/2),d=n[r]-c,d<0)l=r+1;else if(d>0)u=r-1;else{u=r;break}if(r=u,n[r]===c)return r/(o-1);const m=n[r],_=n[r+1]-m,y=(c-m)/_;return(r+y)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const c=this.getPoint(r),l=this.getPoint(o),u=t||(c.isVector2?new we:new z);return u.copy(l).sub(c).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new z,r=[],o=[],c=[],l=new z,u=new Ct;for(let y=0;y<=e;y++){const E=y/e;r[y]=this.getTangentAt(E,new z)}o[0]=new z,c[0]=new z;let d=Number.MAX_VALUE;const m=Math.abs(r[0].x),p=Math.abs(r[0].y),_=Math.abs(r[0].z);m<=d&&(d=m,n.set(1,0,0)),p<=d&&(d=p,n.set(0,1,0)),_<=d&&n.set(0,0,1),l.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],l),c[0].crossVectors(r[0],o[0]);for(let y=1;y<=e;y++){if(o[y]=o[y-1].clone(),c[y]=c[y-1].clone(),l.crossVectors(r[y-1],r[y]),l.length()>Number.EPSILON){l.normalize();const E=Math.acos(at(r[y-1].dot(r[y]),-1,1));o[y].applyMatrix4(u.makeRotationAxis(l,E))}c[y].crossVectors(r[y],o[y])}if(t===!0){let y=Math.acos(at(o[0].dot(o[e]),-1,1));y/=e,r[0].dot(l.crossVectors(o[0],o[e]))>0&&(y=-y);for(let E=1;E<=e;E++)o[E].applyMatrix4(u.makeRotationAxis(r[E],y*E)),c[E].crossVectors(r[E],o[E])}return{tangents:r,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ra extends On{constructor(e=0,t=0,n=1,r=1,o=0,c=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=l,this.aRotation=u}getPoint(e,t=new we){const n=t,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const c=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(c?o=0:o=r),this.aClockwise===!0&&!c&&(o===r?o=-r:o=o-r);const l=this.aStartAngle+e*o;let u=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const m=Math.cos(this.aRotation),p=Math.sin(this.aRotation),_=u-this.aX,y=d-this.aY;u=_*m-y*p+this.aX,d=_*p+y*m+this.aY}return n.set(u,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ld extends Ra{constructor(e,t,n,r,o,c){super(e,t,n,n,r,o,c),this.isArcCurve=!0,this.type="ArcCurve"}}function xl(){let i=0,e=0,t=0,n=0;function r(o,c,l,u){i=o,e=l,t=-3*o+3*c-2*l-u,n=2*o-2*c+l+u}return{initCatmullRom:function(o,c,l,u,d){r(c,l,d*(l-o),d*(u-c))},initNonuniformCatmullRom:function(o,c,l,u,d,m,p){let _=(c-o)/d-(l-o)/(d+m)+(l-c)/m,y=(l-c)/m-(u-c)/(m+p)+(u-l)/p;_*=m,y*=m,r(c,l,_,y)},calc:function(o){const c=o*o,l=c*o;return i+e*o+t*c+n*l}}}const ao=new z,xc=new xl,Sc=new xl,Mc=new xl;class Fd extends On{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,o=r.length,c=(o-(this.closed?0:1))*e;let l=Math.floor(c),u=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/o)+1)*o:u===0&&l===o-1&&(l=o-2,u=1);let d,m;this.closed||l>0?d=r[(l-1)%o]:(ao.subVectors(r[0],r[1]).add(r[0]),d=ao);const p=r[l%o],_=r[(l+1)%o];if(this.closed||l+2<o?m=r[(l+2)%o]:(ao.subVectors(r[o-1],r[o-2]).add(r[o-1]),m=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(d.distanceToSquared(p),y),T=Math.pow(p.distanceToSquared(_),y),x=Math.pow(_.distanceToSquared(m),y);T<1e-4&&(T=1),E<1e-4&&(E=T),x<1e-4&&(x=T),xc.initNonuniformCatmullRom(d.x,p.x,_.x,m.x,E,T,x),Sc.initNonuniformCatmullRom(d.y,p.y,_.y,m.y,E,T,x),Mc.initNonuniformCatmullRom(d.z,p.z,_.z,m.z,E,T,x)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(d.x,p.x,_.x,m.x,this.tension),Sc.initCatmullRom(d.y,p.y,_.y,m.y,this.tension),Mc.initCatmullRom(d.z,p.z,_.z,m.z,this.tension));return n.set(xc.calc(u),Sc.calc(u),Mc.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(i,e,t,n,r){const o=(n-e)*.5,c=(r-t)*.5,l=i*i,u=i*l;return(2*t-2*n+o+c)*u+(-3*t+3*n-2*o-c)*l+o*i+t}function Hv(i,e){const t=1-i;return t*t*e}function Gv(i,e){return 2*(1-i)*i*e}function Vv(i,e){return i*i*e}function os(i,e,t,n){return Hv(i,e)+Gv(i,t)+Vv(i,n)}function Wv(i,e){const t=1-i;return t*t*t*e}function Xv(i,e){const t=1-i;return 3*t*t*i*e}function jv(i,e){return 3*(1-i)*i*i*e}function $v(i,e){return i*i*i*e}function as(i,e,t,n,r){return Wv(i,e)+Xv(i,t)+jv(i,n)+$v(i,r)}class Sl extends On{constructor(e=new we,t=new we,n=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new we){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(as(e,r.x,o.x,c.x,l.x),as(e,r.y,o.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Id extends On{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2,l=this.v3;return n.set(as(e,r.x,o.x,c.x,l.x),as(e,r.y,o.y,c.y,l.y),as(e,r.z,o.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ml extends On{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nd extends On{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class El extends On{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(os(e,r.x,o.x,c.x),os(e,r.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ud extends On{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,o=this.v1,c=this.v2;return n.set(os(e,r.x,o.x,c.x),os(e,r.y,o.y,c.y),os(e,r.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wl extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,r=this.points,o=(r.length-1)*e,c=Math.floor(o),l=o-c,u=r[c===0?c:c-1],d=r[c],m=r[c>r.length-2?r.length-1:c+1],p=r[c>r.length-3?r.length-1:c+2];return n.set(Vh(l,u.x,d.x,m.x,p.x),Vh(l,u.y,d.y,m.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var Wh=Object.freeze({__proto__:null,ArcCurve:Ld,CatmullRomCurve3:Fd,CubicBezierCurve:Sl,CubicBezierCurve3:Id,EllipseCurve:Ra,LineCurve:Ml,LineCurve3:Nd,QuadraticBezierCurve:El,QuadraticBezierCurve3:Ud,SplineCurve:wl});class Od extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let o=0;for(;o<r.length;){if(r[o]>=n){const c=r[o]-n,l=this.curves[o],u=l.getLength(),d=u===0?0:1-c/u;return l.getPointAt(d,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,o=this.curves;r<o.length;r++){const c=o[r],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,u=c.getPoints(l);for(let d=0;d<u.length;d++){const m=u[d];n&&n.equals(m)||(t.push(m),n=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Wh[r.type]().fromJSON(r))}return this}}class kd extends Od{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ml(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const o=new El(this.currentPoint.clone(),new we(e,t),new we(n,r));return this.curves.push(o),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,o,c){const l=new Sl(this.currentPoint.clone(),new we(e,t),new we(n,r),new we(o,c));return this.curves.push(l),this.currentPoint.set(o,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+l,t+u,n,r,o,c),this}absarc(e,t,n,r,o,c){return this.absellipse(e,t,n,n,r,o,c),this}ellipse(e,t,n,r,o,c,l,u){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+d,t+m,n,r,o,c,l,u),this}absellipse(e,t,n,r,o,c,l,u){const d=new Ra(e,t,n,r,o,c,l,u);if(this.curves.length>0){const p=d.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(d);const m=d.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class bl extends Aa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bl(e.radius,e.detail)}}class Ca extends Ut{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=at(r,0,Math.PI*2);const o=[],c=[],l=[],u=[],d=[],m=1/t,p=new z,_=new we,y=new z,E=new z,T=new z;let x=0,v=0;for(let P=0;P<=e.length-1;P++)switch(P){case 0:x=e[P+1].x-e[P].x,v=e[P+1].y-e[P].y,y.x=v*1,y.y=-x,y.z=v*0,T.copy(y),y.normalize(),u.push(y.x,y.y,y.z);break;case e.length-1:u.push(T.x,T.y,T.z);break;default:x=e[P+1].x-e[P].x,v=e[P+1].y-e[P].y,y.x=v*1,y.y=-x,y.z=v*0,E.copy(y),y.x+=T.x,y.y+=T.y,y.z+=T.z,y.normalize(),u.push(y.x,y.y,y.z),T.copy(E)}for(let P=0;P<=t;P++){const L=n+P*m*r,A=Math.sin(L),N=Math.cos(L);for(let R=0;R<=e.length-1;R++){p.x=e[R].x*A,p.y=e[R].y,p.z=e[R].x*N,c.push(p.x,p.y,p.z),_.x=P/t,_.y=R/(e.length-1),l.push(_.x,_.y);const U=u[3*R+0]*A,B=u[3*R+1],F=u[3*R+0]*N;d.push(U,B,F)}}for(let P=0;P<t;P++)for(let L=0;L<e.length-1;L++){const A=L+P*e.length,N=A,R=A+e.length,U=A+e.length+1,B=A+1;o.push(N,R,B),o.push(U,B,R)}this.setIndex(o),this.setAttribute("position",new Pt(c,3)),this.setAttribute("uv",new Pt(l,2)),this.setAttribute("normal",new Pt(d,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.points,e.segments,e.phiStart,e.phiLength)}}class Ur extends Ut{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,c=t/2,l=Math.floor(n),u=Math.floor(r),d=l+1,m=u+1,p=e/l,_=t/u,y=[],E=[],T=[],x=[];for(let v=0;v<m;v++){const P=v*_-c;for(let L=0;L<d;L++){const A=L*p-o;E.push(A,-P,0),T.push(0,0,1),x.push(L/l),x.push(1-v/u)}}for(let v=0;v<u;v++)for(let P=0;P<l;P++){const L=P+d*v,A=P+d*(v+1),N=P+1+d*(v+1),R=P+1+d*v;y.push(L,A,R),y.push(A,N,R)}this.setIndex(y),this.setAttribute("position",new Pt(E,3)),this.setAttribute("normal",new Pt(T,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pa extends Ut{constructor(e=.5,t=1,n=32,r=1,o=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:o,thetaLength:c},n=Math.max(3,n),r=Math.max(1,r);const l=[],u=[],d=[],m=[];let p=e;const _=(t-e)/r,y=new z,E=new we;for(let T=0;T<=r;T++){for(let x=0;x<=n;x++){const v=o+x/n*c;y.x=p*Math.cos(v),y.y=p*Math.sin(v),u.push(y.x,y.y,y.z),d.push(0,0,1),E.x=(y.x/t+1)/2,E.y=(y.y/t+1)/2,m.push(E.x,E.y)}p+=_}for(let T=0;T<r;T++){const x=T*(n+1);for(let v=0;v<n;v++){const P=v+x,L=P,A=P+n+1,N=P+n+2,R=P+1;l.push(L,A,R),l.push(A,N,R)}}this.setIndex(l),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wr extends Ut{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(c+l,Math.PI);let d=0;const m=[],p=new z,_=new z,y=[],E=[],T=[],x=[];for(let v=0;v<=n;v++){const P=[],L=v/n;let A=0;v===0&&c===0?A=.5/t:v===n&&u===Math.PI&&(A=-.5/t);for(let N=0;N<=t;N++){const R=N/t;p.x=-e*Math.cos(r+R*o)*Math.sin(c+L*l),p.y=e*Math.cos(c+L*l),p.z=e*Math.sin(r+R*o)*Math.sin(c+L*l),E.push(p.x,p.y,p.z),_.copy(p).normalize(),T.push(_.x,_.y,_.z),x.push(R+A,1-L),P.push(d++)}m.push(P)}for(let v=0;v<n;v++)for(let P=0;P<t;P++){const L=m[v][P+1],A=m[v][P],N=m[v+1][P],R=m[v+1][P+1];(v!==0||c>0)&&y.push(L,A,R),(v!==n-1||u<Math.PI)&&y.push(A,N,R)}this.setIndex(y),this.setAttribute("position",new Pt(E,3)),this.setAttribute("normal",new Pt(T,3)),this.setAttribute("uv",new Pt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gc extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bd extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zd extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tl extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hd extends Tl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ec=new Ct,Xh=new z,jh=new z;class qv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ec,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Al extends ml{constructor(e=-1,t=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,l-=m*this.view.offsetY,u=l-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yv extends qv{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vc extends Tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Yv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gd extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $h=new Ct;class Vd{constructor(e,t,n=0,r=1/0){this.ray=new vs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $h.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort(qh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Wc(e[r],this,n,t);return n.sort(qh),n}}function qh(i,e){return i.distance-e.distance}function Wc(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const o=i.children;for(let c=0,l=o.length;c<l;c++)Wc(o[c],e,t,!0)}}class Xc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yh=new z;let co,wc;class Wd extends zt{constructor(e=new z(0,0,1),t=new z(0,0,0),n=1,r=16776960,o=n*.2,c=o*.2){super(),this.type="ArrowHelper",co===void 0&&(co=new Ut,co.setAttribute("position",new Pt([0,0,0,0,1,0],3)),wc=new Ta(.5,1,5,1),wc.translate(0,-.5,0)),this.position.copy(t),this.line=new Dr(co,new ti({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new dn(wc,new qi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,o,c)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Yh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Yh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Xd extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Kh(i,e,t,n){const r=Kv(n);switch(t){case ol:return i*e;case cl:return i*e/r.components*r.byteLength;case ya:return i*e/r.components*r.byteLength;case ll:return i*e*2/r.components*r.byteLength;case xa:return i*e*2/r.components*r.byteLength;case al:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case Sa:return i*e*4/r.components*r.byteLength;case ns:case is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rs:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:case Uo:return Math.max(i,16)*Math.max(e,8)/4;case Fo:case No:return Math.max(i,8)*Math.max(e,8)/2;case Oo:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ea:case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ia:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case oa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(i){switch(i){case Nn:case nl:return{byteLength:1,components:1};case Tr:case il:case Ir:return{byteLength:2,components:1};case ga:case va:return{byteLength:2,components:4};case xi:case _a:case Xn:return{byteLength:4,components:1};case rl:case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jd(){let i=null,e=!1,t=null,n=null;function r(o,c){t(o,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Jv(i){const e=new WeakMap;function t(l,u){const d=l.array,m=l.usage,p=d.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,d,m),l.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function n(l,u,d){const m=u.array,p=u.updateRanges;if(i.bindBuffer(d,l),p.length===0)i.bufferSubData(d,0,m);else{p.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<p.length;y++){const E=p[_],T=p[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,p[_]=T)}p.length=_+1;for(let y=0,E=p.length;y<E;y++){const T=p[y];i.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function c(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const m=e.get(l);(!m||m.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,t(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,u),d.version=l.version}}return{get:r,remove:o,update:c}}var Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,S0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,by=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ry=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Py=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ny=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,By=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ox=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Zv,alphahash_pars_fragment:Qv,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:r0,aomap_pars_fragment:s0,batching_pars_vertex:o0,batching_vertex:a0,begin_vertex:c0,beginnormal_vertex:l0,bsdfs:h0,iridescence_fragment:u0,bumpmap_pars_fragment:d0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:_0,color_fragment:g0,color_pars_fragment:v0,color_pars_vertex:y0,color_vertex:x0,common:S0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:E0,displacementmap_pars_vertex:w0,displacementmap_vertex:b0,emissivemap_fragment:T0,emissivemap_pars_fragment:A0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:P0,envmap_common_pars_fragment:D0,envmap_pars_fragment:L0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:W0,envmap_vertex:I0,fog_vertex:N0,fog_pars_vertex:U0,fog_fragment:O0,fog_pars_fragment:k0,gradientmap_pars_fragment:B0,lightmap_pars_fragment:z0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:G0,lights_pars_begin:V0,lights_toon_fragment:X0,lights_toon_pars_fragment:j0,lights_phong_fragment:$0,lights_phong_pars_fragment:q0,lights_physical_fragment:Y0,lights_physical_pars_fragment:K0,lights_fragment_begin:J0,lights_fragment_maps:Z0,lights_fragment_end:Q0,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:ry,map_pars_fragment:sy,map_particle_fragment:oy,map_particle_pars_fragment:ay,metalnessmap_fragment:cy,metalnessmap_pars_fragment:ly,morphinstance_vertex:hy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:fy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:_y,normal_pars_fragment:gy,normal_pars_vertex:vy,normal_vertex:yy,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:wy,opaque_fragment:by,packing:Ty,premultiplied_alpha_fragment:Ay,project_vertex:Ry,dithering_fragment:Cy,dithering_pars_fragment:Py,roughnessmap_fragment:Dy,roughnessmap_pars_fragment:Ly,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Iy,shadowmap_vertex:Ny,shadowmask_pars_fragment:Uy,skinbase_vertex:Oy,skinning_pars_vertex:ky,skinning_vertex:By,skinnormal_vertex:zy,specularmap_fragment:Hy,specularmap_pars_fragment:Gy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:jy,uv_pars_fragment:$y,uv_pars_vertex:qy,uv_vertex:Yy,worldpos_vertex:Ky,background_vert:Jy,background_frag:Zy,backgroundCube_vert:Qy,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:rx,distanceRGBA_vert:sx,distanceRGBA_frag:ox,equirect_vert:ax,equirect_frag:cx,linedashed_vert:lx,linedashed_frag:hx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:fx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:_x,meshnormal_vert:gx,meshnormal_frag:vx,meshphong_vert:yx,meshphong_frag:xx,meshphysical_vert:Sx,meshphysical_frag:Mx,meshtoon_vert:Ex,meshtoon_frag:wx,points_vert:bx,points_frag:Tx,shadow_vert:Ax,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Px},Ce={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Dn={basic:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:hn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:hn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:hn([Ce.points,Ce.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:hn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:hn([Ce.common,Ce.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:hn([Ce.sprite,Ce.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:hn([Ce.common,Ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:hn([Ce.lights,Ce.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Dn.physical={uniforms:hn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const lo={r:0,b:0,g:0},Bi=new Un,Dx=new Ct;function Lx(i,e,t,n,r,o,c){const l=new dt(0);let u=o===!0?0:1,d,m,p=null,_=0,y=null;function E(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?t:e).get(A)),A}function T(L){let A=!1;const N=E(L);N===null?v(l,u):N&&N.isColor&&(v(N,1),A=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,c):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(L,A){const N=E(A);N&&(N.isCubeTexture||N.mapping===_s)?(m===void 0&&(m=new dn(new Qi(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Pr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(R,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),Bi.copy(A.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(Bi)),m.material.toneMapped=gt.getTransfer(N.colorSpace)!==wt,(p!==N||_!==N.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,p=N,_=N.version,y=i.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new dn(new Ur(2,2),new ai({name:"BackgroundMaterial",uniforms:Pr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=gt.getTransfer(N.colorSpace)!==wt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(p!==N||_!==N.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,p=N,_=N.version,y=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function v(L,A){L.getRGB(lo,Md(i)),n.buffers.color.setClear(lo.r,lo.g,lo.b,A,c)}function P(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,A=1){l.set(L),u=A,v(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(L){u=L,v(l,u)},render:T,addToRenderList:x,dispose:P}}function Fx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let o=r,c=!1;function l(M,H,K,Z,Q){let oe=!1;const ce=p(Z,K,H);o!==ce&&(o=ce,d(o.object)),oe=y(M,Z,K,Q),oe&&E(M,Z,K,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,A(M,H,K,Z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return i.createVertexArray()}function d(M){return i.bindVertexArray(M)}function m(M){return i.deleteVertexArray(M)}function p(M,H,K){const Z=K.wireframe===!0;let Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let oe=Q[H.id];oe===void 0&&(oe={},Q[H.id]=oe);let ce=oe[Z];return ce===void 0&&(ce=_(u()),oe[Z]=ce),ce}function _(M){const H=[],K=[],Z=[];for(let Q=0;Q<t;Q++)H[Q]=0,K[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:Z,object:M,attributes:{},index:null}}function y(M,H,K,Z){const Q=o.attributes,oe=H.attributes;let ce=0;const Me=K.getAttributes();for(const re in Me)if(Me[re].location>=0){const Fe=Q[re];let Ve=oe[re];if(Ve===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(Ve=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(Ve=M.instanceColor)),Fe===void 0||Fe.attribute!==Ve||Ve&&Fe.data!==Ve.data)return!0;ce++}return o.attributesNum!==ce||o.index!==Z}function E(M,H,K,Z){const Q={},oe=H.attributes;let ce=0;const Me=K.getAttributes();for(const re in Me)if(Me[re].location>=0){let Fe=oe[re];Fe===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(Fe=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(Fe=M.instanceColor));const Ve={};Ve.attribute=Fe,Fe&&Fe.data&&(Ve.data=Fe.data),Q[re]=Ve,ce++}o.attributes=Q,o.attributesNum=ce,o.index=Z}function T(){const M=o.newAttributes;for(let H=0,K=M.length;H<K;H++)M[H]=0}function x(M){v(M,0)}function v(M,H){const K=o.newAttributes,Z=o.enabledAttributes,Q=o.attributeDivisors;K[M]=1,Z[M]===0&&(i.enableVertexAttribArray(M),Z[M]=1),Q[M]!==H&&(i.vertexAttribDivisor(M,H),Q[M]=H)}function P(){const M=o.newAttributes,H=o.enabledAttributes;for(let K=0,Z=H.length;K<Z;K++)H[K]!==M[K]&&(i.disableVertexAttribArray(K),H[K]=0)}function L(M,H,K,Z,Q,oe,ce){ce===!0?i.vertexAttribIPointer(M,H,K,Q,oe):i.vertexAttribPointer(M,H,K,Z,Q,oe)}function A(M,H,K,Z){T();const Q=Z.attributes,oe=K.getAttributes(),ce=H.defaultAttributeValues;for(const Me in oe){const re=oe[Me];if(re.location>=0){let Te=Q[Me];if(Te===void 0&&(Me==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),Me==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),Te!==void 0){const Fe=Te.normalized,Ve=Te.itemSize,it=e.get(Te);if(it===void 0)continue;const vt=it.buffer,tt=it.type,Qe=it.bytesPerElement,he=tt===i.INT||tt===i.UNSIGNED_INT||Te.gpuType===_a;if(Te.isInterleavedBufferAttribute){const de=Te.data,le=de.stride,xe=Te.offset;if(de.isInstancedInterleavedBuffer){for(let He=0;He<re.locationSize;He++)v(re.location+He,de.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let He=0;He<re.locationSize;He++)x(re.location+He);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let He=0;He<re.locationSize;He++)L(re.location+He,Ve/re.locationSize,tt,Fe,le*Qe,(xe+Ve/re.locationSize*He)*Qe,he)}else{if(Te.isInstancedBufferAttribute){for(let de=0;de<re.locationSize;de++)v(re.location+de,Te.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let de=0;de<re.locationSize;de++)x(re.location+de);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let de=0;de<re.locationSize;de++)L(re.location+de,Ve/re.locationSize,tt,Fe,Ve*Qe,Ve/re.locationSize*de*Qe,he)}}else if(ce!==void 0){const Fe=ce[Me];if(Fe!==void 0)switch(Fe.length){case 2:i.vertexAttrib2fv(re.location,Fe);break;case 3:i.vertexAttrib3fv(re.location,Fe);break;case 4:i.vertexAttrib4fv(re.location,Fe);break;default:i.vertexAttrib1fv(re.location,Fe)}}}}P()}function N(){B();for(const M in n){const H=n[M];for(const K in H){const Z=H[K];for(const Q in Z)m(Z[Q].object),delete Z[Q];delete H[K]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const H=n[M.id];for(const K in H){const Z=H[K];for(const Q in Z)m(Z[Q].object),delete Z[Q];delete H[K]}delete n[M.id]}function U(M){for(const H in n){const K=n[H];if(K[M.id]===void 0)continue;const Z=K[M.id];for(const Q in Z)m(Z[Q].object),delete Z[Q];delete K[M.id]}}function B(){F(),c=!0,o!==r&&(o=r,d(o.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:B,resetDefaultState:F,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:x,disableUnusedAttributes:P}}function Ix(i,e,t){let n;function r(d){n=d}function o(d,m){i.drawArrays(n,d,m),t.update(m,n,1)}function c(d,m,p){p!==0&&(i.drawArraysInstanced(n,d,m,p),t.update(m,n,p))}function l(d,m,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,m,0,p);let y=0;for(let E=0;E<p;E++)y+=m[E];t.update(y,n,1)}function u(d,m,p,_){if(p===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],m[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,m,0,_,0,p);let E=0;for(let T=0;T<p;T++)E+=m[T]*_[T];t.update(E,n,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Nx(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(U){return!(U!==wn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(U){const B=U===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Nn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Xn&&!B)}function u(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=u(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:N,maxSamples:R}}function Ux(i){const e=this;let t=null,n=0,r=!1,o=!1;const c=new ei,l=new nt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const y=p.length!==0||_||n!==0||r;return r=_,n=p.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(p,_){t=m(p,_,0)},this.setState=function(p,_,y){const E=p.clippingPlanes,T=p.clipIntersection,x=p.clipShadows,v=i.get(p);if(!r||E===null||E.length===0||o&&!x)o?m(null):d();else{const P=o?0:n,L=P*4;let A=v.clippingState||null;u.value=A,A=m(E,_,L,y);for(let N=0;N!==L;++N)A[N]=t[N];v.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(p,_,y,E){const T=p!==null?p.length:0;let x=null;if(T!==0){if(x=u.value,E!==!0||x===null){const v=y+T*4,P=_.matrixWorldInverse;l.getNormalMatrix(P),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,A=y;L!==T;++L,A+=4)c.copy(p[L]).applyMatrix4(P,l),c.normal.toArray(x,A),x[A+3]=c.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function Ox(i){let e=new WeakMap;function t(c,l){return l===Co?c.mapping=Ki:l===Po&&(c.mapping=Ji),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Co||l===Po)if(e.has(c)){const u=e.get(c).texture;return t(u,c.mapping)}else{const u=c.image;if(u&&u.height>0){const d=new bd(u.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Sr=4,Jh=[.125,.215,.35,.446,.526,.582],Vi=20,bc=new Al,Zh=new dt;let Tc=null,Ac=0,Rc=0,Cc=!1;const Gi=(1+Math.sqrt(5))/2,gr=1/Gi,Qh=[new z(-Gi,gr,0),new z(Gi,gr,0),new z(-gr,0,Gi),new z(gr,0,Gi),new z(0,Gi,-gr),new z(0,Gi,gr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],kx=new z;class jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,o={}){const{size:c=256,position:l=kx}=o;Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc,Ac,Rc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ir,format:wn,colorSpace:Zi,depthBuffer:!1},r=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bx(o)),this._blurMaterial=zx(o,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,r,o){const u=new yn(90,1,t,n),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,y=p.toneMapping;p.getClearColor(Zh),p.toneMapping=ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));const T=new qi({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new dn(new Qi,T);let v=!1;const P=e.background;P?P.isColor&&(T.color.copy(P),e.background=null,v=!0):(T.color.copy(Zh),v=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(u.up.set(0,d[L],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x+m[L],o.y,o.z)):A===1?(u.up.set(0,0,d[L]),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y+m[L],o.z)):(u.up.set(0,d[L],0),u.position.set(o.x,o.y,o.z),u.lookAt(o.x,o.y,o.z+m[L]));const N=this._cubeSize;ho(r,A*N,L>2?N:0,N,N),p.setRenderTarget(r),v&&p.render(x,u),p.render(e,u)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=y,p.autoClear=_,e.background=P}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ki||e.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new dn(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const u=this._cubeSize;ho(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(c,bc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Qh[(r-o-1)%Qh.length];this._blur(e,o-1,o,c,l)}t.autoClear=n}_blur(e,t,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",o),this._halfBlur(c,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,c,l){const u=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,p=new dn(this._lodPlanes[r],d),_=d.uniforms,y=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Vi-1),T=o/E,x=isFinite(o)?1+Math.floor(m*T):Vi;x>Vi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vi}`);const v=[];let P=0;for(let U=0;U<Vi;++U){const B=U/T,F=Math.exp(-B*B/2);v.push(F),U===0?P+=F:U<x&&(P+=2*F)}for(let U=0;U<v.length;U++)v[U]=v[U]/P;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=c==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-n;const A=this._sizeLods[r],N=3*A*(r>L-Sr?r-L+Sr:0),R=4*(this._cubeSize-A);ho(t,N,R,3*A,2*A),u.setRenderTarget(t),u.render(p,bc)}}function Bx(i){const e=[],t=[],n=[];let r=i;const o=i-Sr+1+Jh.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);t.push(l);let u=1/l;c>i-Sr?u=Jh[c-i+Sr-1]:c===0&&(u=0),n.push(u);const d=1/(l-2),m=-d,p=1+d,_=[m,m,p,m,p,p,m,m,p,p,m,p],y=6,E=6,T=3,x=2,v=1,P=new Float32Array(T*E*y),L=new Float32Array(x*E*y),A=new Float32Array(v*E*y);for(let R=0;R<y;R++){const U=R%3*2/3-1,B=R>2?0:-1,F=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];P.set(F,T*E*R),L.set(_,x*E*R);const M=[R,R,R,R,R,R];A.set(M,v*E*R)}const N=new Ut;N.setAttribute("position",new on(P,T)),N.setAttribute("uv",new on(L,x)),N.setAttribute("faceIndex",new on(A,v)),e.push(N),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eu(i,e,t){const n=new Si(i,e,t);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zx(i,e,t){const n=new Float32Array(Vi),r=new z(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function tu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function nu(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hx(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,d=u===Co||u===Po,m=u===Ki||u===Ji;if(d||m){let p=e.get(l);const _=p!==void 0?p.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==_)return t===null&&(t=new jc(i)),p=d?t.fromEquirectangular(l,p):t.fromCubemap(l,p),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),p.texture;if(p!==void 0)return p.texture;{const y=l.image;return d&&y&&y.height>0||m&&y&&r(y)?(t===null&&(t=new jc(i)),p=d?t.fromEquirectangular(l):t.fromCubemap(l),p.texture.pmremVersion=l.pmremVersion,e.set(l,p),l.addEventListener("dispose",o),p.texture):null}}}return l}function r(l){let u=0;const d=6;for(let m=0;m<d;m++)l[m]!==void 0&&u++;return u===d}function o(l){const u=l.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Gx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Vx(i,e,t,n){const r={},o=new WeakMap;function c(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete r[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(p,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,t.memory.geometries++),_}function u(p){const _=p.attributes;for(const y in _)e.update(_[y],i.ARRAY_BUFFER)}function d(p){const _=[],y=p.index,E=p.attributes.position;let T=0;if(y!==null){const P=y.array;T=y.version;for(let L=0,A=P.length;L<A;L+=3){const N=P[L+0],R=P[L+1],U=P[L+2];_.push(N,R,R,U,U,N)}}else if(E!==void 0){const P=E.array;T=E.version;for(let L=0,A=P.length/3-1;L<A;L+=3){const N=L+0,R=L+1,U=L+2;_.push(N,R,R,U,U,N)}}else return;const x=new(_d(_)?pl:fl)(_,1);x.version=T;const v=o.get(p);v&&e.remove(v),o.set(p,x)}function m(p){const _=o.get(p);if(_){const y=p.index;y!==null&&_.version<y.version&&d(p)}else d(p);return o.get(p)}return{get:l,update:u,getWireframeAttribute:m}}function Wx(i,e,t){let n;function r(_){n=_}let o,c;function l(_){o=_.type,c=_.bytesPerElement}function u(_,y){i.drawElements(n,y,o,_*c),t.update(y,n,1)}function d(_,y,E){E!==0&&(i.drawElementsInstanced(n,y,o,_*c,E),t.update(y,n,E))}function m(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,_,0,E);let x=0;for(let v=0;v<E;v++)x+=y[v];t.update(x,n,1)}function p(_,y,E,T){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)d(_[v]/c,y[v],T[v]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,o,_,0,T,0,E);let v=0;for(let P=0;P<E;P++)v+=y[P]*T[P];t.update(v,n,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=p}function Xx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(o/3);break;case i.LINES:t.lines+=l*(o/2);break;case i.LINE_STRIP:t.lines+=l*(o-1);break;case i.LINE_LOOP:t.lines+=l*o;break;case i.POINTS:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function jx(i,e,t){const n=new WeakMap,r=new Bt;function o(c,l,u){const d=c.morphTargetInfluences,m=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=m!==void 0?m.length:0;let _=n.get(l);if(_===void 0||_.count!==p){let F=function(){U.dispose(),n.delete(l),l.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();const y=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,T=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],P=l.morphAttributes.color||[];let L=0;y===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let A=l.attributes.position.count*L,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*N*4*p),U=new dl(R,A,N,p);U.type=Xn,U.needsUpdate=!0;const B=L*4;for(let M=0;M<p;M++){const H=x[M],K=v[M],Z=P[M],Q=A*N*4*M;for(let oe=0;oe<H.count;oe++){const ce=oe*B;y===!0&&(r.fromBufferAttribute(H,oe),R[Q+ce+0]=r.x,R[Q+ce+1]=r.y,R[Q+ce+2]=r.z,R[Q+ce+3]=0),E===!0&&(r.fromBufferAttribute(K,oe),R[Q+ce+4]=r.x,R[Q+ce+5]=r.y,R[Q+ce+6]=r.z,R[Q+ce+7]=0),T===!0&&(r.fromBufferAttribute(Z,oe),R[Q+ce+8]=r.x,R[Q+ce+9]=r.y,R[Q+ce+10]=r.z,R[Q+ce+11]=Z.itemSize===4?r.w:1)}}_={count:p,texture:U,size:new we(A,N)},n.set(l,_),l.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let y=0;for(let T=0;T<d.length;T++)y+=d[T];const E=l.morphTargetsRelative?1:1-y;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function $x(i,e,t,n){let r=new WeakMap;function o(u){const d=n.render.frame,m=u.geometry,p=e.get(u,m);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return p}function c(){r=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:c}}const $d=new an,iu=new vl(1,1),qd=new dl,Yd=new xd,Kd=new _l,ru=[],su=[],ou=new Float32Array(16),au=new Float32Array(9),cu=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=ru[r];if(o===void 0&&(o=new Float32Array(r),ru[r]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(o,l)}return o}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;cu.set(n),i.uniformMatrix2fv(this.addr,!1,cu),Kt(t,n)}}function Qx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Kt(t,n)}}function eS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),Kt(t,n)}}function tS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function iS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function rS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function sS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function oS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function aS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function cS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function lS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=ul,o=iu):o=$d,t.setTexture2D(e||o,r)}function hS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yd,r)}function uS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kd,r)}function dS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qd,r)}function fS(i){switch(i){case 5126:return qx;case 35664:return Yx;case 35665:return Kx;case 35666:return Jx;case 35674:return Zx;case 35675:return Qx;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return oS;case 36295:return aS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return dS}}function pS(i,e){i.uniform1fv(this.addr,e)}function mS(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function _S(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function gS(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function vS(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yS(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xS(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function SS(i,e){i.uniform1iv(this.addr,e)}function MS(i,e){i.uniform2iv(this.addr,e)}function ES(i,e){i.uniform3iv(this.addr,e)}function wS(i,e){i.uniform4iv(this.addr,e)}function bS(i,e){i.uniform1uiv(this.addr,e)}function TS(i,e){i.uniform2uiv(this.addr,e)}function AS(i,e){i.uniform3uiv(this.addr,e)}function RS(i,e){i.uniform4uiv(this.addr,e)}function CS(i,e,t){const n=this.cache,r=e.length,o=Da(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||$d,o[c])}function PS(i,e,t){const n=this.cache,r=e.length,o=Da(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Yd,o[c])}function DS(i,e,t){const n=this.cache,r=e.length,o=Da(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Kd,o[c])}function LS(i,e,t){const n=this.cache,r=e.length,o=Da(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||qd,o[c])}function FS(i){switch(i){case 5126:return pS;case 35664:return mS;case 35665:return _S;case 35666:return gS;case 35674:return vS;case 35675:return yS;case 35676:return xS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return ES;case 35669:case 35673:return wS;case 5125:return bS;case 36294:return TS;case 36295:return AS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return LS}}class IS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fS(t.type)}}class NS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FS(t.type)}}class US{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function lu(i,e){i.seq.push(e),i.map[e.id]=e}function OS(i,e,t){const n=i.name,r=n.length;for(Pc.lastIndex=0;;){const o=Pc.exec(n),c=Pc.lastIndex;let l=o[1];const u=o[2]==="]",d=o[3];if(u&&(l=l|0),d===void 0||d==="["&&c+2===r){lu(t,d===void 0?new IS(l,i,e):new NS(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new US(l),lu(t,p)),t=p}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);OS(o,c,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,c=t.length;o!==c;++o){const l=t[o],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const kS=37297;let BS=0;function zS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const uu=new nt;function HS(i){gt._getMatrix(uu,gt.workingColorSpace,i);const e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case hs:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function du(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const l=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+zS(i.getShaderSource(e),l)}else return o}function GS(i,e){const t=HS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function VS(i,e){let t;switch(e){case Zu:t="Linear";break;case Qu:t="Reinhard";break;case ed:t="Cineon";break;case el:t="ACESFilmic";break;case nd:t="AgX";break;case id:t="Neutral";break;case td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new z;function WS(){gt.getLuminanceCoefficients(uo);const i=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function jS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $S(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),c=o.name;let l=1;o.type===i.FLOAT_MAT2&&(l=2),o.type===i.FLOAT_MAT3&&(l=3),o.type===i.FLOAT_MAT4&&(l=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function es(i){return i!==""}function fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace(qS,KS)}const YS=new Map;function KS(i,e){let t=rt[e];if(t===void 0){const n=YS.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $c(t)}const JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(JS,ZS)}function ZS(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function _u(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function eM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case Ji:e="ENVMAP_TYPE_CUBE";break;case _s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:e="ENVMAP_MODE_REFRACTION";break}return e}function nM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ku:e="ENVMAP_BLENDING_MIX";break;case Ju:e="ENVMAP_BLENDING_ADD";break}return e}function iM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rM(i,e,t,n){const r=i.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const u=QS(t),d=eM(t),m=tM(t),p=nM(t),_=iM(t),y=XS(t),E=jS(o),T=r.createProgram();let x,v,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(es).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(es).join(`
`),v.length>0&&(v+=`
`)):(x=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),v=[_u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?rt.tonemapping_pars_fragment:"",t.toneMapping!==ri?VS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,GS("linearToOutputTexel",t.outputColorSpace),WS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),c=$c(c),c=fu(c,t),c=pu(c,t),l=$c(l),l=fu(l,t),l=pu(l,t),c=mu(c),l=mu(l),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=P+x+c,A=P+v+l,N=hu(r,r.VERTEX_SHADER,L),R=hu(r,r.FRAGMENT_SHADER,A);r.attachShader(T,N),r.attachShader(T,R),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function U(H){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(T)||"",Z=r.getShaderInfoLog(N)||"",Q=r.getShaderInfoLog(R)||"",oe=K.trim(),ce=Z.trim(),Me=Q.trim();let re=!0,Te=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,N,R);else{const Fe=du(r,N,"vertex"),Ve=du(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+Fe+`
`+Ve)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ce===""||Me==="")&&(Te=!1);Te&&(H.diagnostics={runnable:re,programLog:oe,vertexShader:{log:ce,prefix:x},fragmentShader:{log:Me,prefix:v}})}r.deleteShader(N),r.deleteShader(R),B=new vo(r,T),F=$S(r,T)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let F;this.getAttributes=function(){return F===void 0&&U(this),F};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(T,kS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=R,this}let sM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new aM(e),t.set(e,n)),n}}class aM{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}}function cM(i,e,t,n,r,o,c){const l=new Ea,u=new oM,d=new Set,m=[],p=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(F){return d.add(F),F===0?"uv":`uv${F}`}function x(F,M,H,K,Z){const Q=K.fog,oe=Z.geometry,ce=F.isMeshStandardMaterial?K.environment:null,Me=(F.isMeshStandardMaterial?t:e).get(F.envMap||ce),re=Me&&Me.mapping===_s?Me.image.height:null,Te=E[F.type];F.precision!==null&&(y=r.getMaxPrecision(F.precision),y!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",y,"instead."));const Fe=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ve=Fe!==void 0?Fe.length:0;let it=0;oe.morphAttributes.position!==void 0&&(it=1),oe.morphAttributes.normal!==void 0&&(it=2),oe.morphAttributes.color!==void 0&&(it=3);let vt,tt,Qe,he;if(Te){const st=Dn[Te];vt=st.vertexShader,tt=st.fragmentShader}else vt=F.vertexShader,tt=F.fragmentShader,u.update(F),Qe=u.getVertexShaderID(F),he=u.getFragmentShaderID(F);const de=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),xe=Z.isInstancedMesh===!0,He=Z.isBatchedMesh===!0,ht=!!F.map,Dt=!!F.matcap,G=!!Me,yt=!!F.aoMap,Ze=!!F.lightMap,Ye=!!F.bumpMap,Oe=!!F.normalMap,It=!!F.displacementMap,Ne=!!F.emissiveMap,Ke=!!F.metalnessMap,Ot=!!F.roughnessMap,Et=F.anisotropy>0,k=F.clearcoat>0,D=F.dispersion>0,Y=F.iridescence>0,ie=F.sheen>0,fe=F.transmission>0,ae=Et&&!!F.anisotropyMap,Ge=k&&!!F.clearcoatMap,Ee=k&&!!F.clearcoatNormalMap,ke=k&&!!F.clearcoatRoughnessMap,ze=Y&&!!F.iridescenceMap,ve=Y&&!!F.iridescenceThicknessMap,De=ie&&!!F.sheenColorMap,qe=ie&&!!F.sheenRoughnessMap,Be=!!F.specularMap,Ae=!!F.specularColorMap,et=!!F.specularIntensityMap,W=fe&&!!F.transmissionMap,ye=fe&&!!F.thicknessMap,be=!!F.gradientMap,Le=!!F.alphaMap,X=F.alphaTest>0,V=!!F.alphaHash,Ie=!!F.extensions;let Je=ri;F.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=i.toneMapping);const mt={shaderID:Te,shaderType:F.type,shaderName:F.name,vertexShader:vt,fragmentShader:tt,defines:F.defines,customVertexShaderID:Qe,customFragmentShaderID:he,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:y,batching:He,batchingColor:He&&Z._colorsTexture!==null,instancing:xe,instancingColor:xe&&Z.instanceColor!==null,instancingMorph:xe&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Zi,alphaToCoverage:!!F.alphaToCoverage,map:ht,matcap:Dt,envMap:G,envMapMode:G&&Me.mapping,envMapCubeUVHeight:re,aoMap:yt,lightMap:Ze,bumpMap:Ye,normalMap:Oe,displacementMap:_&&It,emissiveMap:Ne,normalMapObjectSpace:Oe&&F.normalMapType===ad,normalMapTangentSpace:Oe&&F.normalMapType===hl,metalnessMap:Ke,roughnessMap:Ot,anisotropy:Et,anisotropyMap:ae,clearcoat:k,clearcoatMap:Ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:ke,dispersion:D,iridescence:Y,iridescenceMap:ze,iridescenceThicknessMap:ve,sheen:ie,sheenColorMap:De,sheenRoughnessMap:qe,specularMap:Be,specularColorMap:Ae,specularIntensityMap:et,transmission:fe,transmissionMap:W,thicknessMap:ye,gradientMap:be,opaque:F.transparent===!1&&F.blending===$i&&F.alphaToCoverage===!1,alphaMap:Le,alphaTest:X,alphaHash:V,combine:F.combine,mapUv:ht&&T(F.map.channel),aoMapUv:yt&&T(F.aoMap.channel),lightMapUv:Ze&&T(F.lightMap.channel),bumpMapUv:Ye&&T(F.bumpMap.channel),normalMapUv:Oe&&T(F.normalMap.channel),displacementMapUv:It&&T(F.displacementMap.channel),emissiveMapUv:Ne&&T(F.emissiveMap.channel),metalnessMapUv:Ke&&T(F.metalnessMap.channel),roughnessMapUv:Ot&&T(F.roughnessMap.channel),anisotropyMapUv:ae&&T(F.anisotropyMap.channel),clearcoatMapUv:Ge&&T(F.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(F.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&T(F.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&T(F.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(F.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(F.sheenColorMap.channel),sheenRoughnessMapUv:qe&&T(F.sheenRoughnessMap.channel),specularMapUv:Be&&T(F.specularMap.channel),specularColorMapUv:Ae&&T(F.specularColorMap.channel),specularIntensityMapUv:et&&T(F.specularIntensityMap.channel),transmissionMapUv:W&&T(F.transmissionMap.channel),thicknessMapUv:ye&&T(F.thicknessMap.channel),alphaMapUv:Le&&T(F.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Oe||Et),vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!oe.attributes.uv&&(ht||Le),fog:!!Q,useFog:F.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:F.flatShading===!0&&F.wireframe===!1,sizeAttenuation:F.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:Z.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:it,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:F.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:ht&&F.map.isVideoTexture===!0&&gt.getTransfer(F.map.colorSpace)===wt,decodeVideoTextureEmissive:Ne&&F.emissiveMap.isVideoTexture===!0&&gt.getTransfer(F.emissiveMap.colorSpace)===wt,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===_n,flipSided:F.side===fn,useDepthPacking:F.depthPacking>=0,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionClipCullDistance:Ie&&F.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&F.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:F.customProgramCacheKey()};return mt.vertexUv1s=d.has(1),mt.vertexUv2s=d.has(2),mt.vertexUv3s=d.has(3),d.clear(),mt}function v(F){const M=[];if(F.shaderID?M.push(F.shaderID):(M.push(F.customVertexShaderID),M.push(F.customFragmentShaderID)),F.defines!==void 0)for(const H in F.defines)M.push(H),M.push(F.defines[H]);return F.isRawShaderMaterial===!1&&(P(M,F),L(M,F),M.push(i.outputColorSpace)),M.push(F.customProgramCacheKey),M.join()}function P(F,M){F.push(M.precision),F.push(M.outputColorSpace),F.push(M.envMapMode),F.push(M.envMapCubeUVHeight),F.push(M.mapUv),F.push(M.alphaMapUv),F.push(M.lightMapUv),F.push(M.aoMapUv),F.push(M.bumpMapUv),F.push(M.normalMapUv),F.push(M.displacementMapUv),F.push(M.emissiveMapUv),F.push(M.metalnessMapUv),F.push(M.roughnessMapUv),F.push(M.anisotropyMapUv),F.push(M.clearcoatMapUv),F.push(M.clearcoatNormalMapUv),F.push(M.clearcoatRoughnessMapUv),F.push(M.iridescenceMapUv),F.push(M.iridescenceThicknessMapUv),F.push(M.sheenColorMapUv),F.push(M.sheenRoughnessMapUv),F.push(M.specularMapUv),F.push(M.specularColorMapUv),F.push(M.specularIntensityMapUv),F.push(M.transmissionMapUv),F.push(M.thicknessMapUv),F.push(M.combine),F.push(M.fogExp2),F.push(M.sizeAttenuation),F.push(M.morphTargetsCount),F.push(M.morphAttributeCount),F.push(M.numDirLights),F.push(M.numPointLights),F.push(M.numSpotLights),F.push(M.numSpotLightMaps),F.push(M.numHemiLights),F.push(M.numRectAreaLights),F.push(M.numDirLightShadows),F.push(M.numPointLightShadows),F.push(M.numSpotLightShadows),F.push(M.numSpotLightShadowsWithMaps),F.push(M.numLightProbes),F.push(M.shadowMapType),F.push(M.toneMapping),F.push(M.numClippingPlanes),F.push(M.numClipIntersection),F.push(M.depthPacking)}function L(F,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),M.gradientMap&&l.enable(22),F.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reversedDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),F.push(l.mask)}function A(F){const M=E[F.type];let H;if(M){const K=Dn[M];H=Ed.clone(K.uniforms)}else H=F.uniforms;return H}function N(F,M){let H;for(let K=0,Z=m.length;K<Z;K++){const Q=m[K];if(Q.cacheKey===M){H=Q,++H.usedTimes;break}}return H===void 0&&(H=new rM(i,M,F,o),m.push(H)),H}function R(F){if(--F.usedTimes===0){const M=m.indexOf(F);m[M]=m[m.length-1],m.pop(),F.destroy()}}function U(F){u.remove(F)}function B(){u.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:A,acquireProgram:N,releaseProgram:R,releaseShaderCache:U,programs:m,dispose:B}}function lM(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,u){i.get(c)[l]=u}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function hM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vu(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function c(p,_,y,E,T,x){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:_,material:y,groupOrder:E,renderOrder:p.renderOrder,z:T,group:x},i[e]=v):(v.id=p.id,v.object=p,v.geometry=_,v.material=y,v.groupOrder=E,v.renderOrder=p.renderOrder,v.z=T,v.group=x),e++,v}function l(p,_,y,E,T,x){const v=c(p,_,y,E,T,x);y.transmission>0?n.push(v):y.transparent===!0?r.push(v):t.push(v)}function u(p,_,y,E,T,x){const v=c(p,_,y,E,T,x);y.transmission>0?n.unshift(v):y.transparent===!0?r.unshift(v):t.unshift(v)}function d(p,_){t.length>1&&t.sort(p||hM),n.length>1&&n.sort(_||gu),r.length>1&&r.sort(_||gu)}function m(){for(let p=e,_=i.length;p<_;p++){const y=i[p];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:u,finish:m,sort:d}}function uM(){let i=new WeakMap;function e(n,r){const o=i.get(n);let c;return o===void 0?(c=new vu,i.set(n,[c])):r>=o.length?(c=new vu,o.push(c)):c=o[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function dM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new dt};break;case"SpotLight":t={position:new z,direction:new z,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function fM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pM=0;function mM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){const e=new dM,t=fM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new z);const r=new z,o=new Ct,c=new Ct;function l(d){let m=0,p=0,_=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let y=0,E=0,T=0,x=0,v=0,P=0,L=0,A=0,N=0,R=0,U=0;d.sort(mM);for(let F=0,M=d.length;F<M;F++){const H=d[F],K=H.color,Z=H.intensity,Q=H.distance,oe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=K.r*Z,p+=K.g*Z,_+=K.b*Z;else if(H.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(H.sh.coefficients[ce],Z);U++}else if(H.isDirectionalLight){const ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Me=H.shadow,re=t.get(H);re.shadowIntensity=Me.intensity,re.shadowBias=Me.bias,re.shadowNormalBias=Me.normalBias,re.shadowRadius=Me.radius,re.shadowMapSize=Me.mapSize,n.directionalShadow[y]=re,n.directionalShadowMap[y]=oe,n.directionalShadowMatrix[y]=H.shadow.matrix,P++}n.directional[y]=ce,y++}else if(H.isSpotLight){const ce=e.get(H);ce.position.setFromMatrixPosition(H.matrixWorld),ce.color.copy(K).multiplyScalar(Z),ce.distance=Q,ce.coneCos=Math.cos(H.angle),ce.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ce.decay=H.decay,n.spot[T]=ce;const Me=H.shadow;if(H.map&&(n.spotLightMap[N]=H.map,N++,Me.updateMatrices(H),H.castShadow&&R++),n.spotLightMatrix[T]=Me.matrix,H.castShadow){const re=t.get(H);re.shadowIntensity=Me.intensity,re.shadowBias=Me.bias,re.shadowNormalBias=Me.normalBias,re.shadowRadius=Me.radius,re.shadowMapSize=Me.mapSize,n.spotShadow[T]=re,n.spotShadowMap[T]=oe,A++}T++}else if(H.isRectAreaLight){const ce=e.get(H);ce.color.copy(K).multiplyScalar(Z),ce.halfWidth.set(H.width*.5,0,0),ce.halfHeight.set(0,H.height*.5,0),n.rectArea[x]=ce,x++}else if(H.isPointLight){const ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),ce.distance=H.distance,ce.decay=H.decay,H.castShadow){const Me=H.shadow,re=t.get(H);re.shadowIntensity=Me.intensity,re.shadowBias=Me.bias,re.shadowNormalBias=Me.normalBias,re.shadowRadius=Me.radius,re.shadowMapSize=Me.mapSize,re.shadowCameraNear=Me.camera.near,re.shadowCameraFar=Me.camera.far,n.pointShadow[E]=re,n.pointShadowMap[E]=oe,n.pointShadowMatrix[E]=H.shadow.matrix,L++}n.point[E]=ce,E++}else if(H.isHemisphereLight){const ce=e.get(H);ce.skyColor.copy(H.color).multiplyScalar(Z),ce.groundColor.copy(H.groundColor).multiplyScalar(Z),n.hemi[v]=ce,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=_;const B=n.hash;(B.directionalLength!==y||B.pointLength!==E||B.spotLength!==T||B.rectAreaLength!==x||B.hemiLength!==v||B.numDirectionalShadows!==P||B.numPointShadows!==L||B.numSpotShadows!==A||B.numSpotMaps!==N||B.numLightProbes!==U)&&(n.directional.length=y,n.spot.length=T,n.rectArea.length=x,n.point.length=E,n.hemi.length=v,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=A+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=U,B.directionalLength=y,B.pointLength=E,B.spotLength=T,B.rectAreaLength=x,B.hemiLength=v,B.numDirectionalShadows=P,B.numPointShadows=L,B.numSpotShadows=A,B.numSpotMaps=N,B.numLightProbes=U,n.version=pM++)}function u(d,m){let p=0,_=0,y=0,E=0,T=0;const x=m.matrixWorldInverse;for(let v=0,P=d.length;v<P;v++){const L=d[v];if(L.isDirectionalLight){const A=n.directional[p];A.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),p++}else if(L.isSpotLight){const A=n.spot[y];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),y++}else if(L.isRectAreaLight){const A=n.rectArea[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(x),c.identity(),o.copy(L.matrixWorld),o.premultiply(x),c.extractRotation(o),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const A=n.point[_];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(x),_++}else if(L.isHemisphereLight){const A=n.hemi[T];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(x),T++}}}return{setup:l,setupView:u,state:n}}function yu(i){const e=new _M(i),t=[],n=[];function r(m){d.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function c(m){n.push(m)}function l(){e.setup(t)}function u(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:c}}function gM(i){let e=new WeakMap;function t(r,o=0){const c=e.get(r);let l;return c===void 0?(l=new yu(i),e.set(r,[l])):o>=c.length?(l=new yu(i),c.push(l)):l=c[o],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xM(i,e,t){let n=new ba;const r=new we,o=new we,c=new Bt,l=new Bd({depthPacking:od}),u=new zd,d={},m=t.maxTextureSize,p={[oi]:fn,[fn]:oi,[_n]:_n},_=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:vM,fragmentShader:yM}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ut;E.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new dn(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let v=this.type;this.render=function(R,U,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const F=i.getRenderTarget(),M=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),K=i.state;K.setBlending(ii),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Z=v!==Gn&&this.type===Gn,Q=v===Gn&&this.type!==Gn;for(let oe=0,ce=R.length;oe<ce;oe++){const Me=R[oe],re=Me.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;r.copy(re.mapSize);const Te=re.getFrameExtents();if(r.multiply(Te),o.copy(re.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/Te.x),r.x=o.x*Te.x,re.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/Te.y),r.y=o.y*Te.y,re.mapSize.y=o.y)),re.map===null||Z===!0||Q===!0){const Ve=this.type!==Gn?{minFilter:bn,magFilter:bn}:{};re.map!==null&&re.map.dispose(),re.map=new Si(r.x,r.y,Ve),re.map.texture.name=Me.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();const Fe=re.getViewportCount();for(let Ve=0;Ve<Fe;Ve++){const it=re.getViewport(Ve);c.set(o.x*it.x,o.y*it.y,o.x*it.z,o.y*it.w),K.viewport(c),re.updateMatrices(Me,Ve),n=re.getFrustum(),A(U,B,re.camera,Me,this.type)}re.isPointLightShadow!==!0&&this.type===Gn&&P(re,B),re.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(F,M,H)};function P(R,U){const B=e.update(T);_.defines.VSM_SAMPLES!==R.blurSamples&&(_.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Si(r.x,r.y)),_.uniforms.shadow_pass.value=R.map.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(U,null,B,_,T,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(U,null,B,y,T,null)}function L(R,U,B,F){let M=null;const H=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)M=H;else if(M=B.isPointLight===!0?u:l,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=M.uuid,Z=U.uuid;let Q=d[K];Q===void 0&&(Q={},d[K]=Q);let oe=Q[Z];oe===void 0&&(oe=M.clone(),Q[Z]=oe,U.addEventListener("dispose",N)),M=oe}if(M.visible=U.visible,M.wireframe=U.wireframe,F===Gn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:p[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const K=i.properties.get(M);K.light=B}return M}function A(R,U,B,F,M){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Gn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),Q=R.material;if(Array.isArray(Q)){const oe=Z.groups;for(let ce=0,Me=oe.length;ce<Me;ce++){const re=oe[ce],Te=Q[re.materialIndex];if(Te&&Te.visible){const Fe=L(R,Te,F,M);R.onBeforeShadow(i,R,U,B,Z,Fe,re),i.renderBufferDirect(B,null,Z,Fe,R,re),R.onAfterShadow(i,R,U,B,Z,Fe,re)}}}else if(Q.visible){const oe=L(R,Q,F,M);R.onBeforeShadow(i,R,U,B,Z,oe,null),i.renderBufferDirect(B,null,Z,oe,R,null),R.onAfterShadow(i,R,U,B,Z,oe,null)}}const K=R.children;for(let Z=0,Q=K.length;Z<Q;Z++)A(K[Z],U,B,F,M)}function N(R){R.target.removeEventListener("dispose",N);for(const B in d){const F=d[B],M=R.target.uuid;M in F&&(F[M].dispose(),delete F[M])}}}const SM={[Mo]:Eo,[wo]:Ao,[bo]:Ro,[Yi]:To,[Eo]:Mo,[Ao]:wo,[Ro]:bo,[To]:Yi};function MM(i,e){function t(){let W=!1;const ye=new Bt;let be=null;const Le=new Bt(0,0,0,0);return{setMask:function(X){be!==X&&!W&&(i.colorMask(X,X,X,X),be=X)},setLocked:function(X){W=X},setClear:function(X,V,Ie,Je,mt){mt===!0&&(X*=Je,V*=Je,Ie*=Je),ye.set(X,V,Ie,Je),Le.equals(ye)===!1&&(i.clearColor(X,V,Ie,Je),Le.copy(ye))},reset:function(){W=!1,be=null,Le.set(-1,0,0,0)}}}function n(){let W=!1,ye=!1,be=null,Le=null,X=null;return{setReversed:function(V){if(ye!==V){const Ie=e.get("EXT_clip_control");V?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ye=V;const Je=X;X=null,this.setClear(Je)}},getReversed:function(){return ye},setTest:function(V){V?de(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(V){be!==V&&!W&&(i.depthMask(V),be=V)},setFunc:function(V){if(ye&&(V=SM[V]),Le!==V){switch(V){case Mo:i.depthFunc(i.NEVER);break;case Eo:i.depthFunc(i.ALWAYS);break;case wo:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case Ao:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=V}},setLocked:function(V){W=V},setClear:function(V){X!==V&&(ye&&(V=1-V),i.clearDepth(V),X=V)},reset:function(){W=!1,be=null,Le=null,X=null,ye=!1}}}function r(){let W=!1,ye=null,be=null,Le=null,X=null,V=null,Ie=null,Je=null,mt=null;return{setTest:function(st){W||(st?de(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(st){ye!==st&&!W&&(i.stencilMask(st),ye=st)},setFunc:function(st,Tn,Ht){(be!==st||Le!==Tn||X!==Ht)&&(i.stencilFunc(st,Tn,Ht),be=st,Le=Tn,X=Ht)},setOp:function(st,Tn,Ht){(V!==st||Ie!==Tn||Je!==Ht)&&(i.stencilOp(st,Tn,Ht),V=st,Ie=Tn,Je=Ht)},setLocked:function(st){W=st},setClear:function(st){mt!==st&&(i.clearStencil(st),mt=st)},reset:function(){W=!1,ye=null,be=null,Le=null,X=null,V=null,Ie=null,Je=null,mt=null}}}const o=new t,c=new n,l=new r,u=new WeakMap,d=new WeakMap;let m={},p={},_=new WeakMap,y=[],E=null,T=!1,x=null,v=null,P=null,L=null,A=null,N=null,R=null,U=new dt(0,0,0),B=0,F=!1,M=null,H=null,K=null,Z=null,Q=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Me=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(re)[1]),ce=Me>=1):re.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ce=Me>=2);let Te=null,Fe={};const Ve=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),vt=new Bt().fromArray(Ve),tt=new Bt().fromArray(it);function Qe(W,ye,be,Le){const X=new Uint8Array(4),V=i.createTexture();i.bindTexture(W,V),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<be;Ie++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(ye+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return V}const he={};he[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),de(i.DEPTH_TEST),c.setFunc(Yi),Ye(!1),Oe(Nc),de(i.CULL_FACE),yt(ii);function de(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function le(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function xe(W,ye){return p[W]!==ye?(i.bindFramebuffer(W,ye),p[W]=ye,W===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ye),W===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function He(W,ye){let be=y,Le=!1;if(W){be=_.get(ye),be===void 0&&(be=[],_.set(ye,be));const X=W.textures;if(be.length!==X.length||be[0]!==i.COLOR_ATTACHMENT0){for(let V=0,Ie=X.length;V<Ie;V++)be[V]=i.COLOR_ATTACHMENT0+V;be.length=X.length,Le=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Le=!0);Le&&i.drawBuffers(be)}function ht(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const Dt={[mi]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};Dt[Nu]=i.MIN,Dt[Uu]=i.MAX;const G={[Ou]:i.ZERO,[ku]:i.ONE,[Bu]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Vu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Gu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(W,ye,be,Le,X,V,Ie,Je,mt,st){if(W===ii){T===!0&&(le(i.BLEND),T=!1);return}if(T===!1&&(de(i.BLEND),T=!0),W!==Lu){if(W!==x||st!==F){if((v!==mi||A!==mi)&&(i.blendEquation(i.FUNC_ADD),v=mi,A=mi),st)switch(W){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,L=null,N=null,R=null,U.set(0,0,0),B=0,x=W,F=st}return}X=X||ye,V=V||be,Ie=Ie||Le,(ye!==v||X!==A)&&(i.blendEquationSeparate(Dt[ye],Dt[X]),v=ye,A=X),(be!==P||Le!==L||V!==N||Ie!==R)&&(i.blendFuncSeparate(G[be],G[Le],G[V],G[Ie]),P=be,L=Le,N=V,R=Ie),(Je.equals(U)===!1||mt!==B)&&(i.blendColor(Je.r,Je.g,Je.b,mt),U.copy(Je),B=mt),x=W,F=!1}function Ze(W,ye){W.side===_n?le(i.CULL_FACE):de(i.CULL_FACE);let be=W.side===fn;ye&&(be=!be),Ye(be),W.blending===$i&&W.transparent===!1?yt(ii):yt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),o.setMask(W.colorWrite);const Le=W.stencilWrite;l.setTest(Le),Le&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ne(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(W){M!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),M=W)}function Oe(W){W!==Pu?(de(i.CULL_FACE),W!==H&&(W===Nc?i.cullFace(i.BACK):W===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),H=W}function It(W){W!==K&&(ce&&i.lineWidth(W),K=W)}function Ne(W,ye,be){W?(de(i.POLYGON_OFFSET_FILL),(Z!==ye||Q!==be)&&(i.polygonOffset(ye,be),Z=ye,Q=be)):le(i.POLYGON_OFFSET_FILL)}function Ke(W){W?de(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function Ot(W){W===void 0&&(W=i.TEXTURE0+oe-1),Te!==W&&(i.activeTexture(W),Te=W)}function Et(W,ye,be){be===void 0&&(Te===null?be=i.TEXTURE0+oe-1:be=Te);let Le=Fe[be];Le===void 0&&(Le={type:void 0,texture:void 0},Fe[be]=Le),(Le.type!==W||Le.texture!==ye)&&(Te!==be&&(i.activeTexture(be),Te=be),i.bindTexture(W,ye||he[W]),Le.type=W,Le.texture=ye)}function k(){const W=Fe[Te];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function D(){try{i.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{i.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ae(){try{i.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{i.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{i.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{i.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(W){vt.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),vt.copy(W))}function qe(W){tt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),tt.copy(W))}function Be(W,ye){let be=d.get(ye);be===void 0&&(be=new WeakMap,d.set(ye,be));let Le=be.get(W);Le===void 0&&(Le=i.getUniformBlockIndex(ye,W.name),be.set(W,Le))}function Ae(W,ye){const Le=d.get(ye).get(W);u.get(ye)!==Le&&(i.uniformBlockBinding(ye,Le,W.__bindingPointIndex),u.set(ye,Le))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Te=null,Fe={},p={},_=new WeakMap,y=[],E=null,T=!1,x=null,v=null,P=null,L=null,A=null,N=null,R=null,U=new dt(0,0,0),B=0,F=!1,M=null,H=null,K=null,Z=null,Q=null,vt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:de,disable:le,bindFramebuffer:xe,drawBuffers:He,useProgram:ht,setBlending:yt,setMaterial:Ze,setFlipSided:Ye,setCullFace:Oe,setLineWidth:It,setPolygonOffset:Ne,setScissorTest:Ke,activeTexture:Ot,bindTexture:Et,unbindTexture:k,compressedTexImage2D:D,compressedTexImage3D:Y,texImage2D:ze,texImage3D:ve,updateUBOMapping:Be,uniformBlockBinding:Ae,texStorage2D:Ee,texStorage3D:ke,texSubImage2D:ie,texSubImage3D:fe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ge,scissor:De,viewport:qe,reset:et}}function EM(i,e,t,n,r,o,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new we,m=new WeakMap;let p;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(k,D){return y?new OffscreenCanvas(k,D):ca("canvas")}function T(k,D,Y){let ie=1;const fe=Et(k);if((fe.width>Y||fe.height>Y)&&(ie=Y/Math.max(fe.width,fe.height)),ie<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const ae=Math.floor(ie*fe.width),Ge=Math.floor(ie*fe.height);p===void 0&&(p=E(ae,Ge));const Ee=D?E(ae,Ge):p;return Ee.width=ae,Ee.height=Ge,Ee.getContext("2d").drawImage(k,0,0,ae,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ae+"x"+Ge+")."),Ee}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),k;return k}function x(k){return k.generateMipmaps}function v(k){i.generateMipmap(k)}function P(k){return k.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?i.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(k,D,Y,ie,fe=!1){if(k!==null){if(i[k]!==void 0)return i[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ae=D;if(D===i.RED&&(Y===i.FLOAT&&(ae=i.R32F),Y===i.HALF_FLOAT&&(ae=i.R16F),Y===i.UNSIGNED_BYTE&&(ae=i.R8)),D===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.R8UI),Y===i.UNSIGNED_SHORT&&(ae=i.R16UI),Y===i.UNSIGNED_INT&&(ae=i.R32UI),Y===i.BYTE&&(ae=i.R8I),Y===i.SHORT&&(ae=i.R16I),Y===i.INT&&(ae=i.R32I)),D===i.RG&&(Y===i.FLOAT&&(ae=i.RG32F),Y===i.HALF_FLOAT&&(ae=i.RG16F),Y===i.UNSIGNED_BYTE&&(ae=i.RG8)),D===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RG16UI),Y===i.UNSIGNED_INT&&(ae=i.RG32UI),Y===i.BYTE&&(ae=i.RG8I),Y===i.SHORT&&(ae=i.RG16I),Y===i.INT&&(ae=i.RG32I)),D===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),Y===i.UNSIGNED_INT&&(ae=i.RGB32UI),Y===i.BYTE&&(ae=i.RGB8I),Y===i.SHORT&&(ae=i.RGB16I),Y===i.INT&&(ae=i.RGB32I)),D===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ae=i.RGBA32UI),Y===i.BYTE&&(ae=i.RGBA8I),Y===i.SHORT&&(ae=i.RGBA16I),Y===i.INT&&(ae=i.RGBA32I)),D===i.RGB&&(Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),D===i.RGBA){const Ge=fe?hs:gt.getTransfer(ie);Y===i.FLOAT&&(ae=i.RGBA32F),Y===i.HALF_FLOAT&&(ae=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ae=Ge===wt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function A(k,D){let Y;return k?D===null||D===xi||D===Ar?Y=i.DEPTH24_STENCIL8:D===Xn?Y=i.DEPTH32F_STENCIL8:D===Tr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===xi||D===Ar?Y=i.DEPTH_COMPONENT24:D===Xn?Y=i.DEPTH_COMPONENT32F:D===Tr&&(Y=i.DEPTH_COMPONENT16),Y}function N(k,D){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==bn&&k.minFilter!==Ln?Math.log2(Math.max(D.width,D.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?D.mipmaps.length:1}function R(k){const D=k.target;D.removeEventListener("dispose",R),B(D),D.isVideoTexture&&m.delete(D)}function U(k){const D=k.target;D.removeEventListener("dispose",U),M(D)}function B(k){const D=n.get(k);if(D.__webglInit===void 0)return;const Y=k.source,ie=_.get(Y);if(ie){const fe=ie[D.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&F(k),Object.keys(ie).length===0&&_.delete(Y)}n.remove(k)}function F(k){const D=n.get(k);i.deleteTexture(D.__webglTexture);const Y=k.source,ie=_.get(Y);delete ie[D.__cacheKey],c.memory.textures--}function M(k){const D=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(D.__webglFramebuffer[ie]))for(let fe=0;fe<D.__webglFramebuffer[ie].length;fe++)i.deleteFramebuffer(D.__webglFramebuffer[ie][fe]);else i.deleteFramebuffer(D.__webglFramebuffer[ie]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[ie])}else{if(Array.isArray(D.__webglFramebuffer))for(let ie=0;ie<D.__webglFramebuffer.length;ie++)i.deleteFramebuffer(D.__webglFramebuffer[ie]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ie=0;ie<D.__webglColorRenderbuffer.length;ie++)D.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[ie]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const Y=k.textures;for(let ie=0,fe=Y.length;ie<fe;ie++){const ae=n.get(Y[ie]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),c.memory.textures--),n.remove(Y[ie])}n.remove(k)}let H=0;function K(){H=0}function Z(){const k=H;return k>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),H+=1,k}function Q(k){const D=[];return D.push(k.wrapS),D.push(k.wrapT),D.push(k.wrapR||0),D.push(k.magFilter),D.push(k.minFilter),D.push(k.anisotropy),D.push(k.internalFormat),D.push(k.format),D.push(k.type),D.push(k.generateMipmaps),D.push(k.premultiplyAlpha),D.push(k.flipY),D.push(k.unpackAlignment),D.push(k.colorSpace),D.join()}function oe(k,D){const Y=n.get(k);if(k.isVideoTexture&&Ke(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&Y.__version!==k.version){const ie=k.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(Y,k,D);return}}else k.isExternalTexture&&(Y.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+D)}function ce(k,D){const Y=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){he(Y,k,D);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+D)}function Me(k,D){const Y=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){he(Y,k,D);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+D)}function re(k,D){const Y=n.get(k);if(k.version>0&&Y.__version!==k.version){de(Y,k,D);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+D)}const Te={[Do]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},Fe={[bn]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},Ve={[cd]:i.NEVER,[pd]:i.ALWAYS,[ld]:i.LESS,[ul]:i.LEQUAL,[hd]:i.EQUAL,[fd]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function it(k,D){if(D.type===Xn&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===Ln||D.magFilter===po||D.magFilter===Zr||D.magFilter===gi||D.minFilter===Ln||D.minFilter===po||D.minFilter===Zr||D.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(k,i.TEXTURE_WRAP_S,Te[D.wrapS]),i.texParameteri(k,i.TEXTURE_WRAP_T,Te[D.wrapT]),(k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY)&&i.texParameteri(k,i.TEXTURE_WRAP_R,Te[D.wrapR]),i.texParameteri(k,i.TEXTURE_MAG_FILTER,Fe[D.magFilter]),i.texParameteri(k,i.TEXTURE_MIN_FILTER,Fe[D.minFilter]),D.compareFunction&&(i.texParameteri(k,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(k,i.TEXTURE_COMPARE_FUNC,Ve[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===bn||D.minFilter!==Zr&&D.minFilter!==gi||D.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(k,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function vt(k,D){let Y=!1;k.__webglInit===void 0&&(k.__webglInit=!0,D.addEventListener("dispose",R));const ie=D.source;let fe=_.get(ie);fe===void 0&&(fe={},_.set(ie,fe));const ae=Q(D);if(ae!==k.__cacheKey){fe[ae]===void 0&&(fe[ae]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),fe[ae].usedTimes++;const Ge=fe[k.__cacheKey];Ge!==void 0&&(fe[k.__cacheKey].usedTimes--,Ge.usedTimes===0&&F(D)),k.__cacheKey=ae,k.__webglTexture=fe[ae].texture}return Y}function tt(k,D,Y){return Math.floor(Math.floor(k/Y)/D)}function Qe(k,D,Y,ie){const ae=k.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,Y,ie,D.data);else{ae.sort((ve,De)=>ve.start-De.start);let Ge=0;for(let ve=1;ve<ae.length;ve++){const De=ae[Ge],qe=ae[ve],Be=De.start+De.count,Ae=tt(qe.start,D.width,4),et=tt(De.start,D.width,4);qe.start<=Be+1&&Ae===et&&tt(qe.start+qe.count-1,D.width,4)===Ae?De.count=Math.max(De.count,qe.start+qe.count-De.start):(++Ge,ae[Ge]=qe)}ae.length=Ge+1;const Ee=i.getParameter(i.UNPACK_ROW_LENGTH),ke=i.getParameter(i.UNPACK_SKIP_PIXELS),ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,D.width);for(let ve=0,De=ae.length;ve<De;ve++){const qe=ae[ve],Be=Math.floor(qe.start/4),Ae=Math.ceil(qe.count/4),et=Be%D.width,W=Math.floor(Be/D.width),ye=Ae,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,et,W,ye,be,Y,ie,D.data)}k.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),i.pixelStorei(i.UNPACK_SKIP_ROWS,ze)}}function he(k,D,Y){let ie=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ie=i.TEXTURE_3D);const fe=vt(k,D),ae=D.source;t.bindTexture(ie,k.__webglTexture,i.TEXTURE0+Y);const Ge=n.get(ae);if(ae.version!==Ge.__version||fe===!0){t.activeTexture(i.TEXTURE0+Y);const Ee=gt.getPrimaries(gt.workingColorSpace),ke=D.colorSpace===ni?null:gt.getPrimaries(D.colorSpace),ze=D.colorSpace===ni||Ee===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ve=T(D.image,!1,r.maxTextureSize);ve=Ot(D,ve);const De=o.convert(D.format,D.colorSpace),qe=o.convert(D.type);let Be=L(D.internalFormat,De,qe,D.colorSpace,D.isVideoTexture);it(ie,D);let Ae;const et=D.mipmaps,W=D.isVideoTexture!==!0,ye=Ge.__version===void 0||fe===!0,be=ae.dataReady,Le=N(D,ve);if(D.isDepthTexture)Be=A(D.format===Cr,D.type),ye&&(W?t.texStorage2D(i.TEXTURE_2D,1,Be,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Be,ve.width,ve.height,0,De,qe,null));else if(D.isDataTexture)if(et.length>0){W&&ye&&t.texStorage2D(i.TEXTURE_2D,Le,Be,et[0].width,et[0].height);for(let X=0,V=et.length;X<V;X++)Ae=et[X],W?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ae.width,Ae.height,De,qe,Ae.data):t.texImage2D(i.TEXTURE_2D,X,Be,Ae.width,Ae.height,0,De,qe,Ae.data);D.generateMipmaps=!1}else W?(ye&&t.texStorage2D(i.TEXTURE_2D,Le,Be,ve.width,ve.height),be&&Qe(D,ve,De,qe)):t.texImage2D(i.TEXTURE_2D,0,Be,ve.width,ve.height,0,De,qe,ve.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){W&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Be,et[0].width,et[0].height,ve.depth);for(let X=0,V=et.length;X<V;X++)if(Ae=et[X],D.format!==wn)if(De!==null)if(W){if(be)if(D.layerUpdates.size>0){const Ie=Kh(Ae.width,Ae.height,D.format,D.type);for(const Je of D.layerUpdates){const mt=Ae.data.subarray(Je*Ie/Ae.data.BYTES_PER_ELEMENT,(Je+1)*Ie/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Je,Ae.width,Ae.height,1,De,mt)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ae.width,Ae.height,ve.depth,De,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Be,Ae.width,Ae.height,ve.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ae.width,Ae.height,ve.depth,De,qe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Be,Ae.width,Ae.height,ve.depth,0,De,qe,Ae.data)}else{W&&ye&&t.texStorage2D(i.TEXTURE_2D,Le,Be,et[0].width,et[0].height);for(let X=0,V=et.length;X<V;X++)Ae=et[X],D.format!==wn?De!==null?W?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Ae.width,Ae.height,De,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ae.width,Ae.height,De,qe,Ae.data):t.texImage2D(i.TEXTURE_2D,X,Be,Ae.width,Ae.height,0,De,qe,Ae.data)}else if(D.isDataArrayTexture)if(W){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Be,ve.width,ve.height,ve.depth),be)if(D.layerUpdates.size>0){const X=Kh(ve.width,ve.height,D.format,D.type);for(const V of D.layerUpdates){const Ie=ve.data.subarray(V*X/ve.data.BYTES_PER_ELEMENT,(V+1)*X/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,V,ve.width,ve.height,1,De,qe,Ie)}D.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,qe,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,De,qe,ve.data);else if(D.isData3DTexture)W?(ye&&t.texStorage3D(i.TEXTURE_3D,Le,Be,ve.width,ve.height,ve.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,qe,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,De,qe,ve.data);else if(D.isFramebufferTexture){if(ye)if(W)t.texStorage2D(i.TEXTURE_2D,Le,Be,ve.width,ve.height);else{let X=ve.width,V=ve.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Be,X,V,0,De,qe,null),X>>=1,V>>=1}}else if(et.length>0){if(W&&ye){const X=Et(et[0]);t.texStorage2D(i.TEXTURE_2D,Le,Be,X.width,X.height)}for(let X=0,V=et.length;X<V;X++)Ae=et[X],W?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,De,qe,Ae):t.texImage2D(i.TEXTURE_2D,X,Be,De,qe,Ae);D.generateMipmaps=!1}else if(W){if(ye){const X=Et(ve);t.texStorage2D(i.TEXTURE_2D,Le,Be,X.width,X.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,qe,ve)}else t.texImage2D(i.TEXTURE_2D,0,Be,De,qe,ve);x(D)&&v(ie),Ge.__version=ae.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function de(k,D,Y){if(D.image.length!==6)return;const ie=vt(k,D),fe=D.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+Y);const ae=n.get(fe);if(fe.version!==ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+Y);const Ge=gt.getPrimaries(gt.workingColorSpace),Ee=D.colorSpace===ni?null:gt.getPrimaries(D.colorSpace),ke=D.colorSpace===ni||Ge===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ze=D.isCompressedTexture||D.image[0].isCompressedTexture,ve=D.image[0]&&D.image[0].isDataTexture,De=[];for(let V=0;V<6;V++)!ze&&!ve?De[V]=T(D.image[V],!0,r.maxCubemapSize):De[V]=ve?D.image[V].image:D.image[V],De[V]=Ot(D,De[V]);const qe=De[0],Be=o.convert(D.format,D.colorSpace),Ae=o.convert(D.type),et=L(D.internalFormat,Be,Ae,D.colorSpace),W=D.isVideoTexture!==!0,ye=ae.__version===void 0||ie===!0,be=fe.dataReady;let Le=N(D,qe);it(i.TEXTURE_CUBE_MAP,D);let X;if(ze){W&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,et,qe.width,qe.height);for(let V=0;V<6;V++){X=De[V].mipmaps;for(let Ie=0;Ie<X.length;Ie++){const Je=X[Ie];D.format!==wn?Be!==null?W?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie,0,0,Je.width,Je.height,Be,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie,et,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie,0,0,Je.width,Je.height,Be,Ae,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie,et,Je.width,Je.height,0,Be,Ae,Je.data)}}}else{if(X=D.mipmaps,W&&ye){X.length>0&&Le++;const V=Et(De[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,et,V.width,V.height)}for(let V=0;V<6;V++)if(ve){W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,De[V].width,De[V].height,Be,Ae,De[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,et,De[V].width,De[V].height,0,Be,Ae,De[V].data);for(let Ie=0;Ie<X.length;Ie++){const mt=X[Ie].image[V].image;W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie+1,0,0,mt.width,mt.height,Be,Ae,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie+1,et,mt.width,mt.height,0,Be,Ae,mt.data)}}else{W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Be,Ae,De[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,et,Be,Ae,De[V]);for(let Ie=0;Ie<X.length;Ie++){const Je=X[Ie];W?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie+1,0,0,Be,Ae,Je.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie+1,et,Be,Ae,Je.image[V])}}}x(D)&&v(i.TEXTURE_CUBE_MAP),ae.__version=fe.version,D.onUpdate&&D.onUpdate(D)}k.__version=D.version}function le(k,D,Y,ie,fe,ae){const Ge=o.convert(Y.format,Y.colorSpace),Ee=o.convert(Y.type),ke=L(Y.internalFormat,Ge,Ee,Y.colorSpace),ze=n.get(D),ve=n.get(Y);if(ve.__renderTarget=D,!ze.__hasExternalTextures){const De=Math.max(1,D.width>>ae),qe=Math.max(1,D.height>>ae);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,ae,ke,De,qe,D.depth,0,Ge,Ee,null):t.texImage2D(fe,ae,ke,De,qe,0,Ge,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,k),Ne(D)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,fe,ve.__webglTexture,0,It(D)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,fe,ve.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(k,D,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,k),D.depthBuffer){const ie=D.depthTexture,fe=ie&&ie.isDepthTexture?ie.type:null,ae=A(D.stencilBuffer,fe),Ge=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=It(D);Ne(D)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ae,D.width,D.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ae,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ae,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ge,i.RENDERBUFFER,k)}else{const ie=D.textures;for(let fe=0;fe<ie.length;fe++){const ae=ie[fe],Ge=o.convert(ae.format,ae.colorSpace),Ee=o.convert(ae.type),ke=L(ae.internalFormat,Ge,Ee,ae.colorSpace),ze=It(D);Y&&Ne(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,ke,D.width,D.height):Ne(D)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,ke,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ke,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(k,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,k),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(D.depthTexture);ie.__renderTarget=D,(!ie.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),oe(D.depthTexture,0);const fe=ie.__webglTexture,ae=It(D);if(D.depthTexture.format===Rr)Ne(D)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(D.depthTexture.format===Cr)Ne(D)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ht(k){const D=n.get(k),Y=k.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==k.depthTexture){const ie=k.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),ie){const fe=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,ie.removeEventListener("dispose",fe)};ie.addEventListener("dispose",fe),D.__depthDisposeCallback=fe}D.__boundDepthTexture=ie}if(k.depthTexture&&!D.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ie=k.texture.mipmaps;ie&&ie.length>0?He(D.__webglFramebuffer[0],k):He(D.__webglFramebuffer,k)}else if(Y){D.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[ie]),D.__webglDepthbuffer[ie]===void 0)D.__webglDepthbuffer[ie]=i.createRenderbuffer(),xe(D.__webglDepthbuffer[ie],k,!1);else{const fe=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=D.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ae)}}else{const ie=k.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),xe(D.__webglDepthbuffer,k,!1);else{const fe=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(k,D,Y){const ie=n.get(k);D!==void 0&&le(ie.__webglFramebuffer,k,k.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ht(k)}function G(k){const D=k.texture,Y=n.get(k),ie=n.get(D);k.addEventListener("dispose",U);const fe=k.textures,ae=k.isWebGLCubeRenderTarget===!0,Ge=fe.length>1;if(Ge||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=D.version,c.memory.textures++),ae){Y.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(D.mipmaps&&D.mipmaps.length>0){Y.__webglFramebuffer[Ee]=[];for(let ke=0;ke<D.mipmaps.length;ke++)Y.__webglFramebuffer[Ee][ke]=i.createFramebuffer()}else Y.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ee=0;Ee<D.mipmaps.length;Ee++)Y.__webglFramebuffer[Ee]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Ge)for(let Ee=0,ke=fe.length;Ee<ke;Ee++){const ze=n.get(fe[Ee]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),c.memory.textures++)}if(k.samples>0&&Ne(k)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<fe.length;Ee++){const ke=fe[Ee];Y.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);const ze=o.convert(ke.format,ke.colorSpace),ve=o.convert(ke.type),De=L(ke.internalFormat,ze,ve,ke.colorSpace,k.isXRRenderTarget===!0),qe=It(k);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,De,k.width,k.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),k.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),it(i.TEXTURE_CUBE_MAP,D);for(let Ee=0;Ee<6;Ee++)if(D.mipmaps&&D.mipmaps.length>0)for(let ke=0;ke<D.mipmaps.length;ke++)le(Y.__webglFramebuffer[Ee][ke],k,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke);else le(Y.__webglFramebuffer[Ee],k,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);x(D)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ee=0,ke=fe.length;Ee<ke;Ee++){const ze=fe[Ee],ve=n.get(ze);let De=i.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(De,ve.__webglTexture),it(De,ze),le(Y.__webglFramebuffer,k,ze,i.COLOR_ATTACHMENT0+Ee,De,0),x(ze)&&v(De)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ee=k.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ie.__webglTexture),it(Ee,D),D.mipmaps&&D.mipmaps.length>0)for(let ke=0;ke<D.mipmaps.length;ke++)le(Y.__webglFramebuffer[ke],k,D,i.COLOR_ATTACHMENT0,Ee,ke);else le(Y.__webglFramebuffer,k,D,i.COLOR_ATTACHMENT0,Ee,0);x(D)&&v(Ee),t.unbindTexture()}k.depthBuffer&&ht(k)}function yt(k){const D=k.textures;for(let Y=0,ie=D.length;Y<ie;Y++){const fe=D[Y];if(x(fe)){const ae=P(k),Ge=n.get(fe).__webglTexture;t.bindTexture(ae,Ge),v(ae),t.unbindTexture()}}}const Ze=[],Ye=[];function Oe(k){if(k.samples>0){if(Ne(k)===!1){const D=k.textures,Y=k.width,ie=k.height;let fe=i.COLOR_BUFFER_BIT;const ae=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ge=n.get(k),Ee=D.length>1;if(Ee)for(let ze=0;ze<D.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const ke=k.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ze=0;ze<D.length;ze++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);const ve=n.get(D[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,fe,i.NEAREST),u===!0&&(Ze.length=0,Ye.length=0,Ze.push(i.COLOR_ATTACHMENT0+ze),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ze.push(ae),Ye.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let ze=0;ze<D.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,Ge.__webglColorRenderbuffer[ze]);const ve=n.get(D[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&u){const D=k.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function It(k){return Math.min(r.maxSamples,k.samples)}function Ne(k){const D=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Ke(k){const D=c.render.frame;m.get(k)!==D&&(m.set(k,D),k.update())}function Ot(k,D){const Y=k.colorSpace,ie=k.format,fe=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Y!==Zi&&Y!==ni&&(gt.getTransfer(Y)===wt?(ie!==wn||fe!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),D}function Et(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(d.width=k.naturalWidth||k.width,d.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(d.width=k.displayWidth,d.height=k.displayHeight):(d.width=k.width,d.height=k.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.setTexture2D=oe,this.setTexture2DArray=ce,this.setTexture3D=Me,this.setTextureCube=re,this.rebindTextures=Dt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ne}function Jd(i,e){function t(n,r=ni){let o;const c=gt.getTransfer(r);if(n===Nn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nl)return i.BYTE;if(n===il)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===ol)return i.ALPHA;if(n===al)return i.RGB;if(n===wn)return i.RGBA;if(n===Rr)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===ll)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===ns||n===is||n===rs||n===ss)if(c===wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===is)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ss)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Io||n===No||n===Uo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Fo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===ko||n===Bo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Oo||n===ko)return c===wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Bo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===jo||n===$o||n===qo||n===Yo||n===Ko||n===Jo||n===Zo||n===Qo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===zo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Go)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return c===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===ta||n===na)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ea)return c===wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ia||n===ra||n===sa||n===oa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ia)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:wM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dn(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends Ei{constructor(e,t){super();const n=this;let r=null,o=1,c=null,l="local-floor",u=1,d=null,m=null,p=null,_=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",x=new TM,v={},P=t.getContextAttributes();let L=null,A=null;const N=[],R=[],U=new we;let B=null;const F=new yn;F.viewport=new Bt;const M=new yn;M.viewport=new Bt;const H=[F,M],K=new Gd;let Z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let de=N[he];return de===void 0&&(de=new _o,N[he]=de),de.getTargetRaySpace()},this.getControllerGrip=function(he){let de=N[he];return de===void 0&&(de=new _o,N[he]=de),de.getGripSpace()},this.getHand=function(he){let de=N[he];return de===void 0&&(de=new _o,N[he]=de),de.getHandSpace()};function oe(he){const de=R.indexOf(he.inputSource);if(de===-1)return;const le=N[de];le!==void 0&&(le.update(he.inputSource,he.frame,d||c),le.dispatchEvent({type:he.type,data:he.inputSource}))}function ce(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",Me);for(let he=0;he<N.length;he++){const de=R[he];de!==null&&(R[he]=null,N[he].disconnect(de))}Z=null,Q=null,x.reset();for(const he in v)delete v[he];e.setRenderTarget(L),y=null,_=null,p=null,r=null,A=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){o=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){l=he,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(he){d=he},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",Me),P.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,xe=null,He=null;P.depth&&(He=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=P.stencil?Cr:Rr,xe=P.stencil?Ar:xi);const ht={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:o};p=this.getBinding(),_=p.createProjectionLayer(ht),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new Si(_.textureWidth,_.textureHeight,{format:wn,type:Nn,depthTexture:new vl(_.textureWidth,_.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const le={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new Si(y.framebufferWidth,y.framebufferHeight,{format:wn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(u),d=null,c=await r.requestReferenceSpace(l),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Me(he){for(let de=0;de<he.removed.length;de++){const le=he.removed[de],xe=R.indexOf(le);xe>=0&&(R[xe]=null,N[xe].disconnect(le))}for(let de=0;de<he.added.length;de++){const le=he.added[de];let xe=R.indexOf(le);if(xe===-1){for(let ht=0;ht<N.length;ht++)if(ht>=R.length){R.push(le),xe=ht;break}else if(R[ht]===null){R[ht]=le,xe=ht;break}if(xe===-1)break}const He=N[xe];He&&He.connect(le)}}const re=new z,Te=new z;function Fe(he,de,le){re.setFromMatrixPosition(de.matrixWorld),Te.setFromMatrixPosition(le.matrixWorld);const xe=re.distanceTo(Te),He=de.projectionMatrix.elements,ht=le.projectionMatrix.elements,Dt=He[14]/(He[10]-1),G=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],Ze=(He[9]-1)/He[5],Ye=(He[8]-1)/He[0],Oe=(ht[8]+1)/ht[0],It=Dt*Ye,Ne=Dt*Oe,Ke=xe/(-Ye+Oe),Ot=Ke*-Ye;if(de.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Ot),he.translateZ(Ke),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),He[10]===-1)he.projectionMatrix.copy(de.projectionMatrix),he.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Et=Dt+Ke,k=G+Ke,D=It-Ot,Y=Ne+(xe-Ot),ie=yt*G/k*Et,fe=Ze*G/k*Et;he.projectionMatrix.makePerspective(D,Y,ie,fe,Et,k),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function Ve(he,de){de===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(de.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let de=he.near,le=he.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(le=x.depthFar)),K.near=M.near=F.near=de,K.far=M.far=F.far=le,(Z!==K.near||Q!==K.far)&&(r.updateRenderState({depthNear:K.near,depthFar:K.far}),Z=K.near,Q=K.far),K.layers.mask=he.layers.mask|6,F.layers.mask=K.layers.mask&3,M.layers.mask=K.layers.mask&5;const xe=he.parent,He=K.cameras;Ve(K,xe);for(let ht=0;ht<He.length;ht++)Ve(He[ht],xe);He.length===2?Fe(K,F,M):K.projectionMatrix.copy(F.projectionMatrix),it(he,K,xe)};function it(he,de,le){le===null?he.matrix.copy(de.matrixWorld):(he.matrix.copy(le.matrixWorld),he.matrix.invert(),he.matrix.multiply(de.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(de.projectionMatrix),he.projectionMatrixInverse.copy(de.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Hc*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&y===null))return u},this.setFoveation=function(he){u=he,_!==null&&(_.fixedFoveation=he),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=he)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(K)},this.getCameraTexture=function(he){return v[he]};let vt=null;function tt(he,de){if(m=de.getViewerPose(d||c),E=de,m!==null){const le=m.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let xe=!1;le.length!==K.cameras.length&&(K.cameras.length=0,xe=!0);for(let G=0;G<le.length;G++){const yt=le[G];let Ze=null;if(y!==null)Ze=y.getViewport(yt);else{const Oe=p.getViewSubImage(_,yt);Ze=Oe.viewport,G===0&&(e.setRenderTargetTextures(A,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(A))}let Ye=H[G];Ye===void 0&&(Ye=new yn,Ye.layers.enable(G),Ye.viewport=new Bt,H[G]=Ye),Ye.matrix.fromArray(yt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(yt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),G===0&&(K.matrix.copy(Ye.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),xe===!0&&K.cameras.push(Ye)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){p=n.getBinding();const G=p.getDepthInformation(le[0]);G&&G.isValid&&G.texture&&x.init(G,r.renderState)}if(He&&He.includes("camera-access")&&T){e.state.unbindTexture(),p=n.getBinding();for(let G=0;G<le.length;G++){const yt=le[G].camera;if(yt){let Ze=v[yt];Ze||(Ze=new yl,v[yt]=Ze);const Ye=p.getCameraImage(yt);Ze.sourceTexture=Ye}}}}for(let le=0;le<N.length;le++){const xe=R[le],He=N[le];xe!==null&&He!==void 0&&He.update(xe,de,d||c)}vt&&vt(he,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),E=null}const Qe=new jd;Qe.setAnimationLoop(tt),this.setAnimationLoop=function(he){vt=he},this.dispose=function(){}}}const zi=new Un,RM=new Ct;function CM(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,Md(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function r(x,v,P,L,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?o(x,v):v.isMeshToonMaterial?(o(x,v),p(x,v)):v.isMeshPhongMaterial?(o(x,v),m(x,v)):v.isMeshStandardMaterial?(o(x,v),_(x,v),v.isMeshPhysicalMaterial&&y(x,v,A)):v.isMeshMatcapMaterial?(o(x,v),E(x,v)):v.isMeshDepthMaterial?o(x,v):v.isMeshDistanceMaterial?(o(x,v),T(x,v)):v.isMeshNormalMaterial?o(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&l(x,v)):v.isPointsMaterial?u(x,v,P,L):v.isSpriteMaterial?d(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===fn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===fn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const P=e.get(v),L=P.envMap,A=P.envMapRotation;L&&(x.envMap.value=L,zi.copy(A),zi.x*=-1,zi.y*=-1,zi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),x.envMapRotation.value.setFromMatrix4(RM.makeRotationFromEuler(zi)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function l(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function u(x,v,P,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*P,x.scale.value=L*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function p(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,P){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function T(x,v){const P=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function PM(i,e,t,n){let r={},o={},c=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(P,L){const A=L.program;n.uniformBlockBinding(P,A)}function d(P,L){let A=r[P.id];A===void 0&&(E(P),A=m(P),r[P.id]=A,P.addEventListener("dispose",x));const N=L.program;n.updateUBOMapping(P,N);const R=e.render.frame;o[P.id]!==R&&(_(P),o[P.id]=R)}function m(P){const L=p();P.__bindingPointIndex=L;const A=i.createBuffer(),N=P.__size,R=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,A),A}function p(){for(let P=0;P<l;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const L=r[P.id],A=P.uniforms,N=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let R=0,U=A.length;R<U;R++){const B=Array.isArray(A[R])?A[R]:[A[R]];for(let F=0,M=B.length;F<M;F++){const H=B[F];if(y(H,R,F,N)===!0){const K=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let Q=0;for(let oe=0;oe<Z.length;oe++){const ce=Z[oe],Me=T(ce);typeof ce=="number"||typeof ce=="boolean"?(H.__data[0]=ce,i.bufferSubData(i.UNIFORM_BUFFER,K+Q,H.__data)):ce.isMatrix3?(H.__data[0]=ce.elements[0],H.__data[1]=ce.elements[1],H.__data[2]=ce.elements[2],H.__data[3]=0,H.__data[4]=ce.elements[3],H.__data[5]=ce.elements[4],H.__data[6]=ce.elements[5],H.__data[7]=0,H.__data[8]=ce.elements[6],H.__data[9]=ce.elements[7],H.__data[10]=ce.elements[8],H.__data[11]=0):(ce.toArray(H.__data,Q),Q+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(P,L,A,N){const R=P.value,U=L+"_"+A;if(N[U]===void 0)return typeof R=="number"||typeof R=="boolean"?N[U]=R:N[U]=R.clone(),!0;{const B=N[U];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return N[U]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function E(P){const L=P.uniforms;let A=0;const N=16;for(let U=0,B=L.length;U<B;U++){const F=Array.isArray(L[U])?L[U]:[L[U]];for(let M=0,H=F.length;M<H;M++){const K=F[M],Z=Array.isArray(K.value)?K.value:[K.value];for(let Q=0,oe=Z.length;Q<oe;Q++){const ce=Z[Q],Me=T(ce),re=A%N,Te=re%Me.boundary,Fe=re+Te;A+=Te,Fe!==0&&N-Fe<Me.storage&&(A+=N-Fe),K.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=A,A+=Me.storage}}}const R=A%N;return R>0&&(A+=N-R),P.__size=A,P.__cache={},this}function T(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function x(P){const L=P.target;L.removeEventListener("dispose",x);const A=c.indexOf(L.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(r[L.id]),delete r[L.id],delete o[L.id]}function v(){for(const P in r)i.deleteBuffer(r[P]);c=[],r={},o={}}return{bind:u,update:d,dispose:v}}class Zd{constructor(e={}){const{canvas:t=gd(),context:n=null,depth:r=!0,stencil:o=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),T=new Int32Array(4);let x=null,v=null;const P=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=un;let R=0,U=0,B=null,F=-1,M=null;const H=new Bt,K=new Bt;let Z=null;const Q=new dt(0);let oe=0,ce=t.width,Me=t.height,re=1,Te=null,Fe=null;const Ve=new Bt(0,0,ce,Me),it=new Bt(0,0,ce,Me);let vt=!1;const tt=new ba;let Qe=!1,he=!1;const de=new Ct,le=new z,xe=new Bt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Dt(){return B===null?re:1}let G=n;function yt(I,$){return t.getContext(I,$)}try{const I={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r180"),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",X,!1),G===null){const $="webgl2";if(G=yt($,I),G===null)throw yt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ze,Ye,Oe,It,Ne,Ke,Ot,Et,k,D,Y,ie,fe,ae,Ge,Ee,ke,ze,ve,De,qe,Be,Ae,et;function W(){Ze=new Gx(G),Ze.init(),Be=new Jd(G,Ze),Ye=new Nx(G,Ze,e,Be),Oe=new MM(G,Ze),Ye.reversedDepthBuffer&&_&&Oe.buffers.depth.setReversed(!0),It=new Xx(G),Ne=new lM,Ke=new EM(G,Ze,Oe,Ne,Ye,Be,It),Ot=new Ox(A),Et=new Hx(A),k=new Jv(G),Ae=new Fx(G,k),D=new Vx(G,k,It,Ae),Y=new $x(G,D,k,It),ve=new jx(G,Ye,Ke),Ee=new Ux(Ne),ie=new cM(A,Ot,Et,Ze,Ye,Ae,Ee),fe=new CM(A,Ne),ae=new uM,Ge=new gM(Ze),ze=new Lx(A,Ot,Et,Oe,Y,y,u),ke=new xM(A,Y,Ye),et=new PM(G,It,Ye,Oe),De=new Ix(G,Ze,It),qe=new Wx(G,Ze,It),It.programs=ie.programs,A.capabilities=Ye,A.extensions=Ze,A.properties=Ne,A.renderLists=ae,A.shadowMap=ke,A.state=Oe,A.info=It}W();const ye=new AM(A,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const I=Ze.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ze.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(I){I!==void 0&&(re=I,this.setSize(ce,Me,!1))},this.getSize=function(I){return I.set(ce,Me)},this.setSize=function(I,$,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=I,Me=$,t.width=Math.floor(I*re),t.height=Math.floor($*re),ee===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(ce*re,Me*re).floor()},this.setDrawingBufferSize=function(I,$,ee){ce=I,Me=$,re=ee,t.width=Math.floor(I*ee),t.height=Math.floor($*ee),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(H)},this.getViewport=function(I){return I.copy(Ve)},this.setViewport=function(I,$,ee,te){I.isVector4?Ve.set(I.x,I.y,I.z,I.w):Ve.set(I,$,ee,te),Oe.viewport(H.copy(Ve).multiplyScalar(re).round())},this.getScissor=function(I){return I.copy(it)},this.setScissor=function(I,$,ee,te){I.isVector4?it.set(I.x,I.y,I.z,I.w):it.set(I,$,ee,te),Oe.scissor(K.copy(it).multiplyScalar(re).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(I){Oe.setScissorTest(vt=I)},this.setOpaqueSort=function(I){Te=I},this.setTransparentSort=function(I){Fe=I},this.getClearColor=function(I){return I.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(I=!0,$=!0,ee=!0){let te=0;if(I){let q=!1;if(B!==null){const ge=B.texture.format;q=ge===Sa||ge===xa||ge===ya}if(q){const ge=B.texture.type,Re=ge===Nn||ge===xi||ge===Tr||ge===Ar||ge===ga||ge===va,Ue=ze.getClearColor(),Pe=ze.getClearAlpha(),$e=Ue.r,Se=Ue.g,We=Ue.b;Re?(E[0]=$e,E[1]=Se,E[2]=We,E[3]=Pe,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=$e,T[1]=Se,T[2]=We,T[3]=Pe,G.clearBufferiv(G.COLOR,0,T))}else te|=G.COLOR_BUFFER_BIT}$&&(te|=G.DEPTH_BUFFER_BIT),ee&&(te|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",X,!1),ze.dispose(),ae.dispose(),Ge.dispose(),Ne.dispose(),Ot.dispose(),Et.dispose(),Y.dispose(),Ae.dispose(),et.dispose(),ie.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ht),ye.removeEventListener("sessionend",bi),jn.stop()};function be(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const I=It.autoReset,$=ke.enabled,ee=ke.autoUpdate,te=ke.needsUpdate,q=ke.type;W(),It.autoReset=I,ke.enabled=$,ke.autoUpdate=ee,ke.needsUpdate=te,ke.type=q}function X(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function V(I){const $=I.target;$.removeEventListener("dispose",V),Ie($)}function Ie(I){Je(I),Ne.remove(I)}function Je(I){const $=Ne.get(I).programs;$!==void 0&&($.forEach(function(ee){ie.releaseProgram(ee)}),I.isShaderMaterial&&ie.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ee,te,q,ge){$===null&&($=He);const Re=q.isMesh&&q.matrixWorld.determinant()<0,Ue=Es(I,$,ee,te,q);Oe.setMaterial(te,Re);let Pe=ee.index,$e=1;if(te.wireframe===!0){if(Pe=D.getWireframeAttribute(ee),Pe===void 0)return;$e=2}const Se=ee.drawRange,We=ee.attributes.position;let ct=Se.start*$e,St=(Se.start+Se.count)*$e;ge!==null&&(ct=Math.max(ct,ge.start*$e),St=Math.min(St,(ge.start+ge.count)*$e)),Pe!==null?(ct=Math.max(ct,0),St=Math.min(St,Pe.count)):We!=null&&(ct=Math.max(ct,0),St=Math.min(St,We.count));const kt=St-ct;if(kt<0||kt===1/0)return;Ae.setup(q,te,Ue,ee,Pe);let Lt,Mt=De;if(Pe!==null&&(Lt=k.get(Pe),Mt=qe,Mt.setIndex(Lt)),q.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*Dt()),Mt.setMode(G.LINES)):Mt.setMode(G.TRIANGLES);else if(q.isLine){let je=te.linewidth;je===void 0&&(je=1),Oe.setLineWidth(je*Dt()),q.isLineSegments?Mt.setMode(G.LINES):q.isLineLoop?Mt.setMode(G.LINE_LOOP):Mt.setMode(G.LINE_STRIP)}else q.isPoints?Mt.setMode(G.POINTS):q.isSprite&&Mt.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const je=q._multiDrawStarts,Ft=q._multiDrawCounts,pt=q._multiDrawCount,Qt=Pe?k.get(Pe).bytesPerElement:1,w=Ne.get(te).currentProgram.getUniforms();for(let ut=0;ut<pt;ut++)w.setValue(G,"_gl_DrawID",ut),Mt.render(je[ut]/Qt,Ft[ut])}else if(q.isInstancedMesh)Mt.renderInstances(ct,kt,q.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ft=Math.min(ee.instanceCount,je);Mt.renderInstances(ct,kt,Ft)}else Mt.render(ct,kt)};function mt(I,$,ee){I.transparent===!0&&I.side===_n&&I.forceSinglePass===!1?(I.side=fn,I.needsUpdate=!0,Ai(I,$,ee),I.side=oi,I.needsUpdate=!0,Ai(I,$,ee),I.side=_n):Ai(I,$,ee)}this.compile=function(I,$,ee=null){ee===null&&(ee=I),v=Ge.get(ee),v.init($),L.push(v),ee.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),I!==ee&&I.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights();const te=new Set;return I.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ge=q.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){const Ue=ge[Re];mt(Ue,ee,q),te.add(Ue)}else mt(ge,ee,q),te.add(ge)}),v=L.pop(),te},this.compileAsync=function(I,$,ee=null){const te=this.compile(I,$,ee);return new Promise(q=>{function ge(){if(te.forEach(function(Re){Ne.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){q(I);return}setTimeout(ge,10)}Ze.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let st=null;function Tn(I){st&&st(I)}function Ht(){jn.stop()}function bi(){jn.start()}const jn=new jd;jn.setAnimationLoop(Tn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(I){st=I,ye.setAnimationLoop(I),I===null?jn.stop():jn.start()},ye.addEventListener("sessionstart",Ht),ye.addEventListener("sessionend",bi),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera($),$=ye.getCamera()),I.isScene===!0&&I.onBeforeRender(A,I,$,B),v=Ge.get(I,L.length),v.init($),L.push(v),de.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),tt.setFromProjectionMatrix(de,Fn,$.reversedDepth),he=this.localClippingEnabled,Qe=Ee.init(this.clippingPlanes,he),x=ae.get(I,P.length),x.init(),P.push(x),ye.enabled===!0&&ye.isPresenting===!0){const ge=A.xr.getDepthSensingMesh();ge!==null&&kr(ge,$,-1/0,A.sortObjects)}kr(I,$,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(Te,Fe),ht=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ht&&ze.addToRenderList(x,I),this.info.render.frame++,Qe===!0&&Ee.beginShadows();const ee=v.state.shadowsArray;ke.render(ee,I,$),Qe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,q=x.transmissive;if(v.setupLights(),$.isArrayCamera){const ge=$.cameras;if(q.length>0)for(let Re=0,Ue=ge.length;Re<Ue;Re++){const Pe=ge[Re];xs(te,q,I,Pe)}ht&&ze.render(I);for(let Re=0,Ue=ge.length;Re<Ue;Re++){const Pe=ge[Re];Sn(x,I,Pe,Pe.viewport)}}else q.length>0&&xs(te,q,I,$),ht&&ze.render(I),Sn(x,I,$);B!==null&&U===0&&(Ke.updateMultisampleRenderTarget(B),Ke.updateRenderTargetMipmap(B)),I.isScene===!0&&I.onAfterRender(A,I,$),Ae.resetDefaultState(),F=-1,M=null,L.pop(),L.length>0?(v=L[L.length-1],Qe===!0&&Ee.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function kr(I,$,ee,te){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)v.pushLight(I),I.castShadow&&v.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||tt.intersectsSprite(I)){te&&xe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(de);const Re=Y.update(I),Ue=I.material;Ue.visible&&x.push(I,Re,Ue,ee,xe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||tt.intersectsObject(I))){const Re=Y.update(I),Ue=I.material;if(te&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),xe.copy(I.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),xe.copy(Re.boundingSphere.center)),xe.applyMatrix4(I.matrixWorld).applyMatrix4(de)),Array.isArray(Ue)){const Pe=Re.groups;for(let $e=0,Se=Pe.length;$e<Se;$e++){const We=Pe[$e],ct=Ue[We.materialIndex];ct&&ct.visible&&x.push(I,Re,ct,ee,xe.z,We)}}else Ue.visible&&x.push(I,Re,Ue,ee,xe.z,null)}}const ge=I.children;for(let Re=0,Ue=ge.length;Re<Ue;Re++)kr(ge[Re],$,ee,te)}function Sn(I,$,ee,te){const q=I.opaque,ge=I.transmissive,Re=I.transparent;v.setupLightsView(ee),Qe===!0&&Ee.setGlobalState(A.clippingPlanes,ee),te&&Oe.viewport(H.copy(te)),q.length>0&&$n(q,$,ee),ge.length>0&&$n(ge,$,ee),Re.length>0&&$n(Re,$,ee),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function xs(I,$,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[te.id]===void 0&&(v.state.transmissionRenderTarget[te.id]=new Si(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Ir:Nn,minFilter:gi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ge=v.state.transmissionRenderTarget[te.id],Re=te.viewport||H;ge.setSize(Re.z*A.transmissionResolutionScale,Re.w*A.transmissionResolutionScale);const Ue=A.getRenderTarget(),Pe=A.getActiveCubeFace(),$e=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(Q),oe=A.getClearAlpha(),oe<1&&A.setClearColor(16777215,.5),A.clear(),ht&&ze.render(ee);const Se=A.toneMapping;A.toneMapping=ri;const We=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),v.setupLightsView(te),Qe===!0&&Ee.setGlobalState(A.clippingPlanes,te),$n(I,ee,te),Ke.updateMultisampleRenderTarget(ge),Ke.updateRenderTargetMipmap(ge),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let St=0,kt=$.length;St<kt;St++){const Lt=$[St],Mt=Lt.object,je=Lt.geometry,Ft=Lt.material,pt=Lt.group;if(Ft.side===_n&&Mt.layers.test(te.layers)){const Qt=Ft.side;Ft.side=fn,Ft.needsUpdate=!0,Ti(Mt,ee,te,je,Ft,pt),Ft.side=Qt,Ft.needsUpdate=!0,ct=!0}}ct===!0&&(Ke.updateMultisampleRenderTarget(ge),Ke.updateRenderTargetMipmap(ge))}A.setRenderTarget(Ue,Pe,$e),A.setClearColor(Q,oe),We!==void 0&&(te.viewport=We),A.toneMapping=Se}function $n(I,$,ee){const te=$.isScene===!0?$.overrideMaterial:null;for(let q=0,ge=I.length;q<ge;q++){const Re=I[q],Ue=Re.object,Pe=Re.geometry,$e=Re.group;let Se=Re.material;Se.allowOverride===!0&&te!==null&&(Se=te),Ue.layers.test(ee.layers)&&Ti(Ue,$,ee,Pe,Se,$e)}}function Ti(I,$,ee,te,q,ge){I.onBeforeRender(A,$,ee,te,q,ge),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),q.onBeforeRender(A,$,ee,te,I,ge),q.transparent===!0&&q.side===_n&&q.forceSinglePass===!1?(q.side=fn,q.needsUpdate=!0,A.renderBufferDirect(ee,$,te,q,I,ge),q.side=oi,q.needsUpdate=!0,A.renderBufferDirect(ee,$,te,q,I,ge),q.side=_n):A.renderBufferDirect(ee,$,te,q,I,ge),I.onAfterRender(A,$,ee,te,q,ge)}function Ai(I,$,ee){$.isScene!==!0&&($=He);const te=Ne.get(I),q=v.state.lights,ge=v.state.shadowsArray,Re=q.state.version,Ue=ie.getParameters(I,q.state,ge,$,ee),Pe=ie.getProgramCacheKey(Ue);let $e=te.programs;te.environment=I.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(I.isMeshStandardMaterial?Et:Ot).get(I.envMap||te.environment),te.envMapRotation=te.environment!==null&&I.envMap===null?$.environmentRotation:I.envMapRotation,$e===void 0&&(I.addEventListener("dispose",V),$e=new Map,te.programs=$e);let Se=$e.get(Pe);if(Se!==void 0){if(te.currentProgram===Se&&te.lightsStateVersion===Re)return Ms(I,Ue),Se}else Ue.uniforms=ie.getUniforms(I),I.onBeforeCompile(Ue,A),Se=ie.acquireProgram(Ue,Pe),$e.set(Pe,Se),te.uniforms=Ue.uniforms;const We=te.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(We.clippingPlanes=Ee.uniform),Ms(I,Ue),te.needsLights=Fa(I),te.lightsStateVersion=Re,te.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),te.currentProgram=Se,te.uniformsList=null,Se}function Ss(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=vo.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function Ms(I,$){const ee=Ne.get(I);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.batchingColor=$.batchingColor,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.instancingMorph=$.instancingMorph,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function Es(I,$,ee,te,q){$.isScene!==!0&&($=He),Ke.resetTextureUnits();const ge=$.fog,Re=te.isMeshStandardMaterial?$.environment:null,Ue=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zi,Pe=(te.isMeshStandardMaterial?Et:Ot).get(te.envMap||Re),$e=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Se=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ee.morphAttributes.position,ct=!!ee.morphAttributes.normal,St=!!ee.morphAttributes.color;let kt=ri;te.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(kt=A.toneMapping);const Lt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Mt=Lt!==void 0?Lt.length:0,je=Ne.get(te),Ft=v.state.lights;if(Qe===!0&&(he===!0||I!==M)){const Zt=I===M&&te.id===F;Ee.setState(te,I,Zt)}let pt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ft.state.version||je.outputColorSpace!==Ue||q.isBatchedMesh&&je.batching===!1||!q.isBatchedMesh&&je.batching===!0||q.isBatchedMesh&&je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&je.instancing===!1||!q.isInstancedMesh&&je.instancing===!0||q.isSkinnedMesh&&je.skinning===!1||!q.isSkinnedMesh&&je.skinning===!0||q.isInstancedMesh&&je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&je.instancingMorph===!1&&q.morphTexture!==null||je.envMap!==Pe||te.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ee.numPlanes||je.numIntersection!==Ee.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==Se||je.morphTargets!==We||je.morphNormals!==ct||je.morphColors!==St||je.toneMapping!==kt||je.morphTargetsCount!==Mt)&&(pt=!0):(pt=!0,je.__version=te.version);let Qt=je.currentProgram;pt===!0&&(Qt=Ai(te,$,q));let w=!1,ut=!1,Ri=!1;const bt=Qt.getUniforms(),Wt=je.uniforms;if(Oe.useProgram(Qt.program)&&(w=!0,ut=!0,Ri=!0),te.id!==F&&(F=te.id,ut=!0),w||M!==I){Oe.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),bt.setValue(G,"projectionMatrix",I.projectionMatrix),bt.setValue(G,"viewMatrix",I.matrixWorldInverse);const en=bt.map.cameraPosition;en!==void 0&&en.setValue(G,le.setFromMatrixPosition(I.matrixWorld)),Ye.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&bt.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,ut=!0,Ri=!0)}if(q.isSkinnedMesh){bt.setOptional(G,q,"bindMatrix"),bt.setOptional(G,q,"bindMatrixInverse");const Zt=q.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),bt.setValue(G,"boneTexture",Zt.boneTexture,Ke))}q.isBatchedMesh&&(bt.setOptional(G,q,"batchingTexture"),bt.setValue(G,"batchingTexture",q._matricesTexture,Ke),bt.setOptional(G,q,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",q._indirectTexture,Ke),bt.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",q._colorsTexture,Ke));const pn=ee.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ve.update(q,ee,Qt),(ut||je.receiveShadow!==q.receiveShadow)&&(je.receiveShadow=q.receiveShadow,bt.setValue(G,"receiveShadow",q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Wt.envMap.value=Pe,Wt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&$.environment!==null&&(Wt.envMapIntensity.value=$.environmentIntensity),ut&&(bt.setValue(G,"toneMappingExposure",A.toneMappingExposure),je.needsLights&&La(Wt,Ri),ge&&te.fog===!0&&fe.refreshFogUniforms(Wt,ge),fe.refreshMaterialUniforms(Wt,te,re,Me,v.state.transmissionRenderTarget[I.id]),vo.upload(G,Ss(je),Wt,Ke)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vo.upload(G,Ss(je),Wt,Ke),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&bt.setValue(G,"center",q.center),bt.setValue(G,"modelViewMatrix",q.modelViewMatrix),bt.setValue(G,"normalMatrix",q.normalMatrix),bt.setValue(G,"modelMatrix",q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Zt=te.uniformsGroups;for(let en=0,Br=Zt.length;en<Br;en++){const qn=Zt[en];et.update(qn,Qt),et.bind(qn,Qt)}}return Qt}function La(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Fa(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(I,$,ee){const te=Ne.get(I);te.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Ne.get(I.texture).__webglTexture=$,Ne.get(I.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,$){const ee=Ne.get(I);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0};const Ia=G.createFramebuffer();this.setRenderTarget=function(I,$=0,ee=0){B=I,R=$,U=ee;let te=!0,q=null,ge=!1,Re=!1;if(I){const Pe=Ne.get(I);if(Pe.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(G.FRAMEBUFFER,null),te=!1;else if(Pe.__webglFramebuffer===void 0)Ke.setupRenderTarget(I);else if(Pe.__hasExternalTextures)Ke.rebindTextures(I,Ne.get(I.texture).__webglTexture,Ne.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const We=I.depthTexture;if(Pe.__boundDepthTexture!==We){if(We!==null&&Ne.has(We)&&(I.width!==We.image.width||I.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(I)}}const $e=I.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);const Se=Ne.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Se[$])?q=Se[$][ee]:q=Se[$],ge=!0):I.samples>0&&Ke.useMultisampledRTT(I)===!1?q=Ne.get(I).__webglMultisampledFramebuffer:Array.isArray(Se)?q=Se[ee]:q=Se,H.copy(I.viewport),K.copy(I.scissor),Z=I.scissorTest}else H.copy(Ve).multiplyScalar(re).floor(),K.copy(it).multiplyScalar(re).floor(),Z=vt;if(ee!==0&&(q=Ia),Oe.bindFramebuffer(G.FRAMEBUFFER,q)&&te&&Oe.drawBuffers(I,q),Oe.viewport(H),Oe.scissor(K),Oe.setScissorTest(Z),ge){const Pe=Ne.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,Pe.__webglTexture,ee)}else if(Re){const Pe=$;for(let $e=0;$e<I.textures.length;$e++){const Se=Ne.get(I.textures[$e]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+$e,Se.__webglTexture,ee,Pe)}}else if(I!==null&&ee!==0){const Pe=Ne.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Pe.__webglTexture,ee)}F=-1},this.readRenderTargetPixels=function(I,$,ee,te,q,ge,Re,Ue=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ne.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){Oe.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const $e=I.textures[Ue],Se=$e.format,We=$e.type;if(!Ye.textureFormatReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-te&&ee>=0&&ee<=I.height-q&&(I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ue),G.readPixels($,ee,te,q,Be.convert(Se),Be.convert(We),ge))}finally{const $e=B!==null?Ne.get(B).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(I,$,ee,te,q,ge,Re,Ue=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ne.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if($>=0&&$<=I.width-te&&ee>=0&&ee<=I.height-q){Oe.bindFramebuffer(G.FRAMEBUFFER,Pe);const $e=I.textures[Ue],Se=$e.format,We=$e.type;if(!Ye.textureFormatReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ct),G.bufferData(G.PIXEL_PACK_BUFFER,ge.byteLength,G.STREAM_READ),I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ue),G.readPixels($,ee,te,q,Be.convert(Se),Be.convert(We),0);const St=B!==null?Ne.get(B).__webglFramebuffer:null;Oe.bindFramebuffer(G.FRAMEBUFFER,St);const kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await yv(G,kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ct),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ge),G.deleteBuffer(ct),G.deleteSync(kt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,$=null,ee=0){const te=Math.pow(2,-ee),q=Math.floor(I.image.width*te),ge=Math.floor(I.image.height*te),Re=$!==null?$.x:0,Ue=$!==null?$.y:0;Ke.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,ee,0,0,Re,Ue,q,ge),Oe.unbindTexture()};const Na=G.createFramebuffer(),xt=G.createFramebuffer();this.copyTextureToTexture=function(I,$,ee=null,te=null,q=0,ge=null){ge===null&&(q!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=q,q=0):ge=0);let Re,Ue,Pe,$e,Se,We,ct,St,kt;const Lt=I.isCompressedTexture?I.mipmaps[ge]:I.image;if(ee!==null)Re=ee.max.x-ee.min.x,Ue=ee.max.y-ee.min.y,Pe=ee.isBox3?ee.max.z-ee.min.z:1,$e=ee.min.x,Se=ee.min.y,We=ee.isBox3?ee.min.z:0;else{const pn=Math.pow(2,-q);Re=Math.floor(Lt.width*pn),Ue=Math.floor(Lt.height*pn),I.isDataArrayTexture?Pe=Lt.depth:I.isData3DTexture?Pe=Math.floor(Lt.depth*pn):Pe=1,$e=0,Se=0,We=0}te!==null?(ct=te.x,St=te.y,kt=te.z):(ct=0,St=0,kt=0);const Mt=Be.convert($.format),je=Be.convert($.type);let Ft;$.isData3DTexture?(Ke.setTexture3D($,0),Ft=G.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Ke.setTexture2DArray($,0),Ft=G.TEXTURE_2D_ARRAY):(Ke.setTexture2D($,0),Ft=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const pt=G.getParameter(G.UNPACK_ROW_LENGTH),Qt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),w=G.getParameter(G.UNPACK_SKIP_PIXELS),ut=G.getParameter(G.UNPACK_SKIP_ROWS),Ri=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Lt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$e),G.pixelStorei(G.UNPACK_SKIP_ROWS,Se),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We);const bt=I.isDataArrayTexture||I.isData3DTexture,Wt=$.isDataArrayTexture||$.isData3DTexture;if(I.isDepthTexture){const pn=Ne.get(I),Zt=Ne.get($),en=Ne.get(pn.__renderTarget),Br=Ne.get(Zt.__renderTarget);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,en.__webglFramebuffer),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let qn=0;qn<Pe;qn++)bt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get(I).__webglTexture,q,We+qn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ne.get($).__webglTexture,ge,kt+qn)),G.blitFramebuffer($e,Se,Re,Ue,ct,St,Re,Ue,G.DEPTH_BUFFER_BIT,G.NEAREST);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(q!==0||I.isRenderTargetTexture||Ne.has(I)){const pn=Ne.get(I),Zt=Ne.get($);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,Na),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,xt);for(let en=0;en<Pe;en++)bt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,q,We+en):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,q),Wt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zt.__webglTexture,ge,kt+en):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Zt.__webglTexture,ge),q!==0?G.blitFramebuffer($e,Se,Re,Ue,ct,St,Re,Ue,G.COLOR_BUFFER_BIT,G.NEAREST):Wt?G.copyTexSubImage3D(Ft,ge,ct,St,kt+en,$e,Se,Re,Ue):G.copyTexSubImage2D(Ft,ge,ct,St,$e,Se,Re,Ue);Oe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Wt?I.isDataTexture||I.isData3DTexture?G.texSubImage3D(Ft,ge,ct,St,kt,Re,Ue,Pe,Mt,je,Lt.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Ft,ge,ct,St,kt,Re,Ue,Pe,Mt,Lt.data):G.texSubImage3D(Ft,ge,ct,St,kt,Re,Ue,Pe,Mt,je,Lt):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ge,ct,St,Re,Ue,Mt,je,Lt.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ge,ct,St,Lt.width,Lt.height,Mt,Lt.data):G.texSubImage2D(G.TEXTURE_2D,ge,ct,St,Re,Ue,Mt,je,Lt);G.pixelStorei(G.UNPACK_ROW_LENGTH,pt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Qt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w),G.pixelStorei(G.UNPACK_SKIP_ROWS,ut),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ri),ge===0&&$.generateMipmaps&&G.generateMipmap(Ft),Oe.unbindTexture()},this.initRenderTarget=function(I){Ne.get(I).__webglFramebuffer===void 0&&Ke.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ke.setTextureCube(I,0):I.isData3DTexture?Ke.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ke.setTexture2DArray(I,0):Ke.setTexture2D(I,0),Oe.unbindTexture()},this.resetState=function(){R=0,U=0,B=null,Oe.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const vr=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:el,AddEquation:mi,AddOperation:Ju,AdditiveBlending:Uc,AgXToneMapping:nd,AlphaFormat:ol,AlwaysCompare:pd,AlwaysDepth:Eo,AlwaysStencilFunc:Bc,ArcCurve:Ld,ArrayCamera:Gd,ArrowHelper:Wd,BackSide:fn,BasicDepthPacking:sd,Box3:Nr,BoxGeometry:Qi,BufferAttribute:on,BufferGeometry:Ut,ByteType:nl,Camera:ml,CanvasTexture:Dd,CatmullRomCurve3:Fd,CineonToneMapping:ed,ClampToEdgeWrapping:_i,Color:dt,ColorManagement:gt,ConeGeometry:Ta,ConstantAlphaFactor:qu,ConstantColorFactor:ju,Controls:Xd,CubeCamera:wd,CubeReflectionMapping:Ki,CubeRefractionMapping:Ji,CubeTexture:_l,CubeUVReflectionMapping:_s,CubicBezierCurve:Sl,CubicBezierCurve3:Id,CullFaceBack:Nc,CullFaceFront:Du,CullFaceNone:Pu,Curve:On,CurvePath:Od,CustomBlending:Lu,CustomToneMapping:td,CylinderGeometry:ys,Data3DTexture:xd,DataArrayTexture:dl,DepthFormat:Rr,DepthStencilFormat:Cr,DepthTexture:vl,DirectionalLight:Vc,DoubleSide:_n,DstAlphaFactor:Hu,DstColorFactor:Vu,DynamicDrawUsage:Qr,EllipseCurve:Ra,EqualCompare:hd,EqualDepth:bo,EquirectangularReflectionMapping:Co,EquirectangularRefractionMapping:Po,Euler:Un,EventDispatcher:Ei,ExternalTexture:yl,Float32BufferAttribute:Pt,FloatType:Xn,Fog:wa,FrontSide:oi,Frustum:ba,GLSL3:zc,GreaterCompare:ud,GreaterDepth:Ao,GreaterEqualCompare:fd,GreaterEqualDepth:To,Group:xr,HalfFloatType:Ir,HemisphereLight:Hd,IcosahedronGeometry:bl,ImageUtils:vd,IntType:_a,InterleavedBuffer:Ad,InterleavedBufferAttribute:fs,KeepStencilOp:Hi,LatheGeometry:Ca,Layers:Ea,LessCompare:ld,LessDepth:wo,LessEqualCompare:ul,LessEqualDepth:Yi,Light:Tl,Line:Dr,LineBasicMaterial:ti,LineCurve:Ml,LineCurve3:Nd,LineLoop:Pd,LineSegments:go,LinearFilter:Ln,LinearMipmapLinearFilter:gi,LinearMipmapNearestFilter:po,LinearSRGBColorSpace:Zi,LinearToneMapping:Zu,LinearTransfer:hs,MOUSE:ji,Material:wi,MathUtils:md,Matrix3:nt,Matrix4:Ct,MaxEquation:Uu,Mesh:dn,MeshBasicMaterial:qi,MeshDepthMaterial:Bd,MeshDistanceMaterial:zd,MeshStandardMaterial:Gc,MinEquation:Nu,MirroredRepeatWrapping:Lo,MixOperation:Ku,MultiplyBlending:kc,MultiplyOperation:Qc,NearestFilter:bn,NearestMipmapLinearFilter:Zr,NearestMipmapNearestFilter:rd,NeutralToneMapping:id,NeverCompare:cd,NeverDepth:Mo,NoBlending:ii,NoColorSpace:ni,NoToneMapping:ri,NormalBlending:$i,NotEqualCompare:dd,NotEqualDepth:Ro,Object3D:zt,ObjectSpaceNormalMap:ad,OneFactor:ku,OneMinusConstantAlphaFactor:Yu,OneMinusConstantColorFactor:$u,OneMinusDstAlphaFactor:Gu,OneMinusDstColorFactor:Wu,OneMinusSrcAlphaFactor:So,OneMinusSrcColorFactor:zu,OrthographicCamera:Al,PCFShadowMap:Jc,PCFSoftShadowMap:Zc,PMREMGenerator:jc,Path:kd,PerspectiveCamera:yn,Plane:ei,PlaneGeometry:Ur,PolyhedronGeometry:Aa,QuadraticBezierCurve:El,QuadraticBezierCurve3:Ud,Quaternion:In,RED_GREEN_RGTC2_Format:sa,RED_RGTC1_Format:ia,REVISION:"180",RGBADepthPacking:od,RGBAFormat:wn,RGBAIntegerFormat:Sa,RGBA_ASTC_10x10_Format:Jo,RGBA_ASTC_10x5_Format:qo,RGBA_ASTC_10x6_Format:Yo,RGBA_ASTC_10x8_Format:Ko,RGBA_ASTC_12x10_Format:Zo,RGBA_ASTC_12x12_Format:Qo,RGBA_ASTC_4x4_Format:zo,RGBA_ASTC_5x4_Format:Ho,RGBA_ASTC_5x5_Format:Go,RGBA_ASTC_6x5_Format:Vo,RGBA_ASTC_6x6_Format:Wo,RGBA_ASTC_8x5_Format:Xo,RGBA_ASTC_8x6_Format:jo,RGBA_ASTC_8x8_Format:$o,RGBA_BPTC_Format:ea,RGBA_ETC2_EAC_Format:Bo,RGBA_PVRTC_2BPPV1_Format:Uo,RGBA_PVRTC_4BPPV1_Format:No,RGBA_S3TC_DXT1_Format:is,RGBA_S3TC_DXT3_Format:rs,RGBA_S3TC_DXT5_Format:ss,RGBFormat:al,RGB_BPTC_SIGNED_Format:ta,RGB_BPTC_UNSIGNED_Format:na,RGB_ETC1_Format:Oo,RGB_ETC2_Format:ko,RGB_PVRTC_2BPPV1_Format:Io,RGB_PVRTC_4BPPV1_Format:Fo,RGB_S3TC_DXT1_Format:ns,RGFormat:ll,RGIntegerFormat:xa,Ray:vs,Raycaster:Vd,RedFormat:cl,RedIntegerFormat:ya,ReinhardToneMapping:Qu,RenderTarget:yd,RepeatWrapping:Do,ReverseSubtractEquation:Iu,RingGeometry:Pa,SIGNED_RED_GREEN_RGTC2_Format:oa,SIGNED_RED_RGTC1_Format:ra,SRGBColorSpace:un,SRGBTransfer:wt,Scene:Td,ShaderChunk:rt,ShaderLib:Dn,ShaderMaterial:ai,ShortType:il,Source:Ma,Sphere:gs,SphereGeometry:wr,Spherical:Xc,SplineCurve:wl,Sprite:Cd,SpriteMaterial:gl,SrcAlphaFactor:xo,SrcAlphaSaturateFactor:Xu,SrcColorFactor:Bu,StaticDrawUsage:aa,SubtractEquation:Fu,SubtractiveBlending:Oc,TOUCH:Wi,TangentSpaceNormalMap:hl,Texture:an,Triangle:xn,UVMapping:tl,Uint16BufferAttribute:fl,Uint32BufferAttribute:pl,UniformsLib:Ce,UniformsUtils:Ed,UnsignedByteType:Nn,UnsignedInt101111Type:sl,UnsignedInt248Type:Ar,UnsignedInt5999Type:rl,UnsignedIntType:xi,UnsignedShort4444Type:ga,UnsignedShort5551Type:va,UnsignedShortType:Tr,VSMShadowMap:Gn,Vector2:we,Vector3:z,Vector4:Bt,WebGLCoordinateSystem:Fn,WebGLCubeRenderTarget:bd,WebGLRenderTarget:Si,WebGLRenderer:Zd,WebGLUtils:Jd,WebGPUCoordinateSystem:us,WebXRController:_o,ZeroFactor:Ou,createCanvasElement:gd},Symbol.toStringTag,{value:"Module"})),xu={type:"change"},Cl={type:"start"},Qd={type:"end"},fo=new vs,Su=new ei,DM=Math.cos(70*md.DEG2RAD),$t=new z,mn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dc=1e-6;class LM extends Xd{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new In,this._lastTargetPosition=new z,this._quat=new In().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xc,this._sphericalDelta=new Xc,this._scale=1,this._panOffset=new z,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new z,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=IM.bind(this),this._onPointerDown=FM.bind(this),this._onPointerUp=NM.bind(this),this._onContextMenu=GM.bind(this),this._onMouseWheel=kM.bind(this),this._onKeyDown=BM.bind(this),this._onTouchStart=zM.bind(this),this._onTouchMove=HM.bind(this),this._onMouseDown=UM.bind(this),this._onMouseMove=OM.bind(this),this._interceptControlDown=VM.bind(this),this._interceptControlUp=WM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xu),this.update(),this.state=Rt.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),r<-Math.PI?r+=mn:r>Math.PI&&(r-=mn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const l=$t.length();c=this._clampDistance(l*this._scale);const u=l-c;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),o=!!u}else if(this.object.isOrthographicCamera){const l=new z(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=u!==this.object.zoom;const d=new z(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),c=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(fo.origin.copy(this.object.position),fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fo.direction))<DM?this.object.lookAt(this.target):(Su.setFromNormalAndCoplanarPoint(this.object.up,this.target),fo.intersectPlane(Su,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dc||this._lastTargetPosition.distanceToSquared(this.target)>Dc?(this.dispatchEvent(xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$t.copy(r).sub(this.target);let o=$t.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/n.clientHeight,this.object.matrix),this._panUp(2*t*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,o=t-n.top,c=n.width,l=n.height;this._mouse.x=r/c*2-1,this._mouse.y=-(o/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,o=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(c,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function FM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function IM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function NM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=Rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function UM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Rt.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Cl)}function OM(i){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(i.preventDefault(),this.dispatchEvent(Cl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qd))}function BM(i){this.enabled!==!1&&this._handleKeyDown(i)}function zM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Rt.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Rt.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Cl)}function HM(i){switch(this._trackPointer(i),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Rt.NONE}}function GM(i){this.enabled!==!1&&i.preventDefault()}function VM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const XM="modulepreload",jM=function(i,e){return new URL(i,e).href},Mu={},$M=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let d=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");r=d(t.map(m=>{if(m=jM(m,n),m in Mu)return;Mu[m]=!0;const p=m.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(!!n)for(let T=c.length-1;T>=0;T--){const x=c[T];if(x.href===m&&(!p||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${_}`))return;const E=document.createElement("link");if(E.rel=p?"stylesheet":XM,p||(E.as="script"),E.crossOrigin="",E.href=m,u&&E.setAttribute("nonce",u),document.head.appendChild(E),p)return new Promise((T,x)=>{E.addEventListener("load",T),E.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return r.then(c=>{for(const l of c||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};var qM=(async function(i={}){var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!r;if(o){const{createRequire:s}=await $M(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>VE);return{createRequire:a}},void 0,import.meta.url);var l=s(import.meta.url)}var u="./this.program",d=(s,a)=>{throw a},m=import.meta.url,p="";function _(s){return t.locateFile?t.locateFile(s,p):p+s}var y,E;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var T=process.versions.node,x=T.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+T+")");var v=l("fs");m.startsWith("file:")&&(p=l("path").dirname(l("url").fileURLToPath(m))+"/"),E=a=>{a=U(a)?new URL(a):a;var h=v.readFileSync(a);return R(Buffer.isBuffer(h)),h},y=async(a,h=!0)=>{a=U(a)?new URL(a):a;var f=v.readFileSync(a,h?void 0:"utf8");return R(h?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(u=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(a,h)=>{throw process.exitCode=a,h}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{p=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(E=s=>{var a=new XMLHttpRequest;return a.open("GET",s,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),y=async s=>{if(U(s))return new Promise((h,f)=>{var g=new XMLHttpRequest;g.open("GET",s,!0),g.responseType="arraybuffer",g.onload=()=>{if(g.status==200||g.status==0&&g.response){h(g.response);return}f(g.status)},g.onerror=f,g.send(null)});var a=await fetch(s,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var P=console.log.bind(console),L=console.error.bind(console);R(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var A;typeof WebAssembly!="object"&&L("no native wasm support detected");var N=!1;function R(s,a){s||Y("Assertion failed"+(a?": "+a:""))}var U=s=>s.startsWith("file://");function B(){var s=$a();R((s&3)==0),s==0&&(s+=4),xe[s>>2]=34821223,xe[s+4>>2]=2310721022,xe[0]=1668509029}function F(){if(!N){var s=$a();s==0&&(s+=4);var a=xe[s>>2],h=xe[s+4>>2];(a!=34821223||h!=2310721022)&&Y(`Stack overflow! Stack cookie has been overwritten at ${Le(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Le(h)} ${Le(a)}`),xe[0]!=1668509029&&Y("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class M extends Error{}class H extends M{}class K extends M{constructor(a){super(a),this.excPtr=a;const h=sh(a);this.name=h[0],this.message=h[1]}}(()=>{var s=new Int16Array(1),a=new Int8Array(s.buffer);if(s[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Z(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){Y(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Q(s){return()=>R(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function oe(s){Object.getOwnPropertyDescriptor(t,s)&&Y(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function ce(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function Me(s,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){a()}})}function re(s,a){Me(s,()=>{Ie(`\`${s}\` is not longer defined by emscripten. ${a}`)})}re("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),re("asm","Please use wasmExports instead");function Te(s){Me(s,()=>{var a=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,h=s;h.startsWith("_")||(h="$"+s),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${h}')`,ce(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ie(a)}),Fe(s)}function Fe(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var a=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ce(s)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Y(a)}})}var Ve,it,vt,tt,Qe,he,de,le,xe,He,ht,Dt,G,yt=!1;function Ze(){var s=vt.buffer;tt=new Int8Array(s),he=new Int16Array(s),Qe=new Uint8Array(s),de=new Uint16Array(s),le=new Int32Array(s),xe=new Uint32Array(s),He=new Float32Array(s),ht=new Float64Array(s),Dt=new BigInt64Array(s),G=new BigUint64Array(s)}R(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Ye(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)ye(t.preRun.shift());Z("preRun"),Be(W)}function Oe(){R(!yt),yt=!0,F(),!t.noFSInit&&!w.initialized&&w.init(),Fi.__wasm_call_ctors(),w.ignorePermissions=!1}function It(){if(F(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)et(t.postRun.shift());Z("postRun"),Be(Ae)}var Ne=0,Ke=null,Ot={},Et=null;function k(s){Ne++,t.monitorRunDependencies?.(Ne),s?(R(!Ot[s]),Ot[s]=1,Et===null&&typeof setInterval<"u"&&(Et=setInterval(()=>{if(N){clearInterval(Et),Et=null;return}var a=!1;for(var h in Ot)a||(a=!0,L("still waiting on run dependencies:")),L(`dependency: ${h}`);a&&L("(end of list)")},1e4))):L("warning: run dependency added without ID")}function D(s){if(Ne--,t.monitorRunDependencies?.(Ne),s?(R(Ot[s]),delete Ot[s]):L("warning: run dependency removed without ID"),Ne==0&&(Et!==null&&(clearInterval(Et),Et=null),Ke)){var a=Ke;Ke=null,a()}}function Y(s){t.onAbort?.(s),s="Aborted("+s+")",L(s),N=!0;var a=new WebAssembly.RuntimeError(s);throw it?.(a),a}function ie(s,a){return(...h)=>{R(yt,`native function \`${s}\` called before runtime initialization`);var f=Fi[s];return R(f,`exported native function \`${s}\` not found`),R(h.length<=a,`native function \`${s}\` called with ${h.length} args but expects ${a}`),f(...h)}}var fe;function ae(){return t.locateFile?_("mujoco.wasm"):new URL(""+new URL("assets/mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function Ge(s){if(s==fe&&A)return new Uint8Array(A);if(E)return E(s);throw"both async and sync fetching of the wasm failed"}async function Ee(s){if(!A)try{var a=await y(s);return new Uint8Array(a)}catch{}return Ge(s)}async function ke(s,a){try{var h=await Ee(s),f=await WebAssembly.instantiate(h,a);return f}catch(g){L(`failed to asynchronously prepare wasm: ${g}`),U(fe)&&L(`warning: Loading from a file URI (${fe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Y(g)}}async function ze(s,a,h){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!U(a)&&!o)try{var f=fetch(a,{credentials:"same-origin"}),g=await WebAssembly.instantiateStreaming(f,h);return g}catch(S){L(`wasm streaming compile failed: ${S}`),L("falling back to ArrayBuffer instantiation")}return ke(a,h)}function ve(){return{env:gh,wasi_snapshot_preview1:gh}}async function De(){function s(b,C){return Fi=b.exports,vt=Fi.memory,R(vt,"memory not found in wasm exports"),Ze(),Ls=Fi.__indirect_function_table,R(Ls,"table not found in wasm exports"),mm(Fi),D("wasm-instantiate"),Fi}k("wasm-instantiate");var a=t;function h(b){return R(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,s(b.instance)}var f=ve();if(t.instantiateWasm)return new Promise((b,C)=>{try{t.instantiateWasm(f,(O,j)=>{b(s(O,j))})}catch(O){L(`Module.instantiateWasm callback failed with error: ${O}`),C(O)}});fe??=ae();var g=await ze(A,fe,f),S=h(g);return S}class qe{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var Be=s=>{for(;s.length>0;)s.shift()(t)},Ae=[],et=s=>Ae.push(s),W=[],ye=s=>W.push(s),be=!0,Le=s=>(R(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),X=s=>uh(s),V=()=>fh(),Ie=s=>{Ie.shown||={},Ie.shown[s]||(Ie.shown[s]=1,o&&(s="warning: "+s),L(s))},Je=typeof TextDecoder<"u"?new TextDecoder:void 0,mt=(s,a=0,h=NaN)=>{for(var f=a+h,g=a;s[g]&&!(g>=f);)++g;if(g-a>16&&s.buffer&&Je)return Je.decode(s.subarray(a,g));for(var S="";a<g;){var b=s[a++];if(!(b&128)){S+=String.fromCharCode(b);continue}var C=s[a++]&63;if((b&224)==192){S+=String.fromCharCode((b&31)<<6|C);continue}var O=s[a++]&63;if((b&240)==224?b=(b&15)<<12|C<<6|O:((b&248)!=240&&Ie("Invalid UTF-8 leading byte "+Le(b)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),b=(b&7)<<18|C<<12|O<<6|s[a++]&63),b<65536)S+=String.fromCharCode(b);else{var j=b-65536;S+=String.fromCharCode(55296|j>>10,56320|j&1023)}}return S},st=(s,a)=>(R(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?mt(Qe,s,a):""),Tn=(s,a,h,f)=>Y(`Assertion failed: ${st(s)}, at: `+[a?st(a):"unknown filename",h,f?st(f):"unknown function"]),Ht=[],bi=0,jn=s=>{var a=new $n(s);return a.get_caught()||(a.set_caught(!0),bi--),a.set_rethrown(!1),Ht.push(a),ks(s),_h(s)},kr=()=>{if(!Ht.length)return 0;var s=Ht[Ht.length-1];return ks(s.excPtr),s.excPtr},Sn=0,xs=()=>{me(0,0),R(Ht.length>0);var s=Ht.pop();qa(s.excPtr),Sn=0};class $n{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){xe[this.ptr+4>>2]=a}get_type(){return xe[this.ptr+4>>2]}set_destructor(a){xe[this.ptr+8>>2]=a}get_destructor(){return xe[this.ptr+8>>2]}set_caught(a){a=a?1:0,tt[this.ptr+12]=a}get_caught(){return tt[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,tt[this.ptr+13]=a}get_rethrown(){return tt[this.ptr+13]!=0}init(a,h){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(h)}set_adjusted_ptr(a){xe[this.ptr+16>>2]=a}get_adjusted_ptr(){return xe[this.ptr+16>>2]}}var Ti=s=>lh(s),Ai=s=>{var a=Sn?.excPtr;if(!a)return Ti(0),0;var h=new $n(a);h.set_adjusted_ptr(a);var f=h.get_type();if(!f)return Ti(0),a;for(var g of s){if(g===0||g===f)break;var S=h.ptr+16;if(mh(g,f,S))return Ti(g),a}return Ti(f),a},Ss=()=>Ai([]),Ms=s=>Ai([s]),Es=()=>{var s=Ht.pop();s||Y("no exception to throw");var a=s.excPtr;throw s.get_rethrown()||(Ht.push(s),s.set_rethrown(!0),s.set_caught(!1),bi++),Sn=new K(a),Sn},La=s=>{if(s){var a=new $n(s);Ht.push(a),a.set_rethrown(!0),Es()}},Fa=(s,a,h)=>{var f=new $n(s);throw f.init(a,h),Sn=new K(s),bi++,Sn},Ia=()=>bi,Na=s=>{throw Sn||(Sn=new K(s)),Sn},xt={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(s).slice(1)},normalizeArray:(s,a)=>{for(var h=0,f=s.length-1;f>=0;f--){var g=s[f];g==="."?s.splice(f,1):g===".."?(s.splice(f,1),h++):h&&(s.splice(f,1),h--)}if(a)for(;h;h--)s.unshift("..");return s},normalize:s=>{var a=xt.isAbs(s),h=s.slice(-1)==="/";return s=xt.normalizeArray(s.split("/").filter(f=>!!f),!a).join("/"),!s&&!a&&(s="."),s&&h&&(s+="/"),(a?"/":"")+s},dirname:s=>{var a=xt.splitPath(s),h=a[0],f=a[1];return!h&&!f?".":(f&&(f=f.slice(0,-1)),h+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>xt.normalize(s.join("/")),join2:(s,a)=>xt.normalize(s+"/"+a)},I=()=>{if(o){var s=l("crypto");return a=>s.randomFillSync(a)}return a=>crypto.getRandomValues(a)},$=s=>{($=I())(s)},ee={resolve:(...s)=>{for(var a="",h=!1,f=s.length-1;f>=-1&&!h;f--){var g=f>=0?s[f]:w.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!g)return"";a=g+"/"+a,h=xt.isAbs(g)}return a=xt.normalizeArray(a.split("/").filter(S=>!!S),!h).join("/"),(h?"/":"")+a||"."},relative:(s,a)=>{s=ee.resolve(s).slice(1),a=ee.resolve(a).slice(1);function h(j){for(var J=0;J<j.length&&j[J]==="";J++);for(var ne=j.length-1;ne>=0&&j[ne]==="";ne--);return J>ne?[]:j.slice(J,ne-J+1)}for(var f=h(s.split("/")),g=h(a.split("/")),S=Math.min(f.length,g.length),b=S,C=0;C<S;C++)if(f[C]!==g[C]){b=C;break}for(var O=[],C=b;C<f.length;C++)O.push("..");return O=O.concat(g.slice(b)),O.join("/")}},te=[],q=s=>{for(var a=0,h=0;h<s.length;++h){var f=s.charCodeAt(h);f<=127?a++:f<=2047?a+=2:f>=55296&&f<=57343?(a+=4,++h):a+=3}return a},ge=(s,a,h,f)=>{if(R(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var g=h,S=h+f-1,b=0;b<s.length;++b){var C=s.codePointAt(b);if(C<=127){if(h>=S)break;a[h++]=C}else if(C<=2047){if(h+1>=S)break;a[h++]=192|C>>6,a[h++]=128|C&63}else if(C<=65535){if(h+2>=S)break;a[h++]=224|C>>12,a[h++]=128|C>>6&63,a[h++]=128|C&63}else{if(h+3>=S)break;C>1114111&&Ie("Invalid Unicode code point "+Le(C)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[h++]=240|C>>18,a[h++]=128|C>>12&63,a[h++]=128|C>>6&63,a[h++]=128|C&63,b++}}return a[h]=0,h-g},Re=(s,a,h)=>{var f=q(s)+1,g=new Array(f),S=ge(s,g,0,g.length);return g.length=S,g},Ue=()=>{if(!te.length){var s=null;if(o){var a=256,h=Buffer.alloc(a),f=0,g=process.stdin.fd;try{f=v.readSync(g,h,0,a)}catch(S){if(S.toString().includes("EOF"))f=0;else throw S}f>0&&(s=h.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;te=Re(s)}return te.shift()},Pe={ttys:[],init(){},shutdown(){},register(s,a){Pe.ttys[s]={input:[],output:[],ops:a},w.registerDevice(s,Pe.stream_ops)},stream_ops:{open(s){var a=Pe.ttys[s.node.rdev];if(!a)throw new w.ErrnoError(43);s.tty=a,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,a,h,f,g){if(!s.tty||!s.tty.ops.get_char)throw new w.ErrnoError(60);for(var S=0,b=0;b<f;b++){var C;try{C=s.tty.ops.get_char(s.tty)}catch{throw new w.ErrnoError(29)}if(C===void 0&&S===0)throw new w.ErrnoError(6);if(C==null)break;S++,a[h+b]=C}return S&&(s.node.atime=Date.now()),S},write(s,a,h,f,g){if(!s.tty||!s.tty.ops.put_char)throw new w.ErrnoError(60);try{for(var S=0;S<f;S++)s.tty.ops.put_char(s.tty,a[h+S])}catch{throw new w.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),S}},default_tty_ops:{get_char(s){return Ue()},put_char(s,a){a===null||a===10?(P(mt(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){s.output?.length>0&&(P(mt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,a,h){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,a){a===null||a===10?(L(mt(s.output)),s.output=[]):a!=0&&s.output.push(a)},fsync(s){s.output?.length>0&&(L(mt(s.output)),s.output=[])}}},$e=s=>{Y("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Se={ops_table:null,mount(s){return Se.createNode(null,"/",16895,0)},createNode(s,a,h,f){if(w.isBlkdev(h)||w.isFIFO(h))throw new w.ErrnoError(63);Se.ops_table||={dir:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr,lookup:Se.node_ops.lookup,mknod:Se.node_ops.mknod,rename:Se.node_ops.rename,unlink:Se.node_ops.unlink,rmdir:Se.node_ops.rmdir,readdir:Se.node_ops.readdir,symlink:Se.node_ops.symlink},stream:{llseek:Se.stream_ops.llseek}},file:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr},stream:{llseek:Se.stream_ops.llseek,read:Se.stream_ops.read,write:Se.stream_ops.write,mmap:Se.stream_ops.mmap,msync:Se.stream_ops.msync}},link:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr,readlink:Se.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Se.node_ops.getattr,setattr:Se.node_ops.setattr},stream:w.chrdev_stream_ops}};var g=w.createNode(s,a,h,f);return w.isDir(g.mode)?(g.node_ops=Se.ops_table.dir.node,g.stream_ops=Se.ops_table.dir.stream,g.contents={}):w.isFile(g.mode)?(g.node_ops=Se.ops_table.file.node,g.stream_ops=Se.ops_table.file.stream,g.usedBytes=0,g.contents=null):w.isLink(g.mode)?(g.node_ops=Se.ops_table.link.node,g.stream_ops=Se.ops_table.link.stream):w.isChrdev(g.mode)&&(g.node_ops=Se.ops_table.chrdev.node,g.stream_ops=Se.ops_table.chrdev.stream),g.atime=g.mtime=g.ctime=Date.now(),s&&(s.contents[a]=g,s.atime=s.mtime=s.ctime=g.atime),g},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,a){var h=s.contents?s.contents.length:0;if(!(h>=a)){var f=1024*1024;a=Math.max(a,h*(h<f?2:1.125)>>>0),h!=0&&(a=Math.max(a,256));var g=s.contents;s.contents=new Uint8Array(a),s.usedBytes>0&&s.contents.set(g.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,a){if(s.usedBytes!=a)if(a==0)s.contents=null,s.usedBytes=0;else{var h=s.contents;s.contents=new Uint8Array(a),h&&s.contents.set(h.subarray(0,Math.min(a,s.usedBytes))),s.usedBytes=a}},node_ops:{getattr(s){var a={};return a.dev=w.isChrdev(s.mode)?s.id:1,a.ino=s.id,a.mode=s.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=s.rdev,w.isDir(s.mode)?a.size=4096:w.isFile(s.mode)?a.size=s.usedBytes:w.isLink(s.mode)?a.size=s.link.length:a.size=0,a.atime=new Date(s.atime),a.mtime=new Date(s.mtime),a.ctime=new Date(s.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(s,a){for(const h of["mode","atime","mtime","ctime"])a[h]!=null&&(s[h]=a[h]);a.size!==void 0&&Se.resizeFileStorage(s,a.size)},lookup(s,a){throw new w.ErrnoError(44)},mknod(s,a,h,f){return Se.createNode(s,a,h,f)},rename(s,a,h){var f;try{f=w.lookupNode(a,h)}catch{}if(f){if(w.isDir(s.mode))for(var g in f.contents)throw new w.ErrnoError(55);w.hashRemoveNode(f)}delete s.parent.contents[s.name],a.contents[h]=s,s.name=h,a.ctime=a.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,a){delete s.contents[a],s.ctime=s.mtime=Date.now()},rmdir(s,a){var h=w.lookupNode(s,a);for(var f in h.contents)throw new w.ErrnoError(55);delete s.contents[a],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,a,h){var f=Se.createNode(s,a,41471,0);return f.link=h,f},readlink(s){if(!w.isLink(s.mode))throw new w.ErrnoError(28);return s.link}},stream_ops:{read(s,a,h,f,g){var S=s.node.contents;if(g>=s.node.usedBytes)return 0;var b=Math.min(s.node.usedBytes-g,f);if(R(b>=0),b>8&&S.subarray)a.set(S.subarray(g,g+b),h);else for(var C=0;C<b;C++)a[h+C]=S[g+C];return b},write(s,a,h,f,g,S){if(R(!(a instanceof ArrayBuffer)),a.buffer===tt.buffer&&(S=!1),!f)return 0;var b=s.node;if(b.mtime=b.ctime=Date.now(),a.subarray&&(!b.contents||b.contents.subarray)){if(S)return R(g===0,"canOwn must imply no weird position inside the file"),b.contents=a.subarray(h,h+f),b.usedBytes=f,f;if(b.usedBytes===0&&g===0)return b.contents=a.slice(h,h+f),b.usedBytes=f,f;if(g+f<=b.usedBytes)return b.contents.set(a.subarray(h,h+f),g),f}if(Se.expandFileStorage(b,g+f),b.contents.subarray&&a.subarray)b.contents.set(a.subarray(h,h+f),g);else for(var C=0;C<f;C++)b.contents[g+C]=a[h+C];return b.usedBytes=Math.max(b.usedBytes,g+f),f},llseek(s,a,h){var f=a;if(h===1?f+=s.position:h===2&&w.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new w.ErrnoError(28);return f},mmap(s,a,h,f,g){if(!w.isFile(s.node.mode))throw new w.ErrnoError(43);var S,b,C=s.node.contents;if(!(g&2)&&C&&C.buffer===tt.buffer)b=!1,S=C.byteOffset;else{if(b=!0,S=$e(),!S)throw new w.ErrnoError(48);C&&((h>0||h+a<C.length)&&(C.subarray?C=C.subarray(h,h+a):C=Array.prototype.slice.call(C,h,h+a)),tt.set(C,S))}return{ptr:S,allocated:b}},msync(s,a,h,f,g){return Se.stream_ops.write(s,a,0,f,h,!1),0}}},We=async s=>{var a=await y(s);return R(a,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(a)},ct=(...s)=>w.createDataFile(...s),St=s=>{for(var a=s;;){if(!Ot[s])return s;s=a+Math.random()}},kt=[],Lt=(s,a,h,f)=>{typeof Browser<"u"&&Browser.init();var g=!1;return kt.forEach(S=>{g||S.canHandle(a)&&(S.handle(s,a,h,f),g=!0)}),g},Mt=(s,a,h,f,g,S,b,C,O,j)=>{var J=a?ee.resolve(xt.join2(s,a)):s,ne=St(`cp ${J}`);function ue(se){function pe(Xe){j?.(),C||ct(s,a,Xe,f,g,O),S?.(),D(ne)}Lt(se,J,pe,()=>{b?.(),D(ne)})||pe(se)}k(ne),typeof h=="string"?We(h).then(ue,b):ue(h)},je=s=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},h=a[s];if(typeof h>"u")throw new Error(`Unknown file open mode: ${s}`);return h},Ft=(s,a)=>{var h=0;return s&&(h|=365),a&&(h|=146),h},pt=s=>st(ch(s)),Qt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},w={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(s){super(yt?pt(s):""),this.errno=s;for(var a in Qt)if(Qt[a]===s){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,a,h,f){s||(s=this),this.parent=s,this.mount=s.mount,this.id=w.nextInode++,this.name=a,this.mode=h,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return w.isDir(this.mode)}get isDevice(){return w.isChrdev(this.mode)}},lookupPath(s,a={}){if(!s)throw new w.ErrnoError(44);a.follow_mount??=!0,xt.isAbs(s)||(s=w.cwd()+"/"+s);e:for(var h=0;h<40;h++){for(var f=s.split("/").filter(j=>!!j),g=w.root,S="/",b=0;b<f.length;b++){var C=b===f.length-1;if(C&&a.parent)break;if(f[b]!=="."){if(f[b]===".."){if(S=xt.dirname(S),w.isRoot(g)){s=S+"/"+f.slice(b+1).join("/");continue e}else g=g.parent;continue}S=xt.join2(S,f[b]);try{g=w.lookupNode(g,f[b])}catch(j){if(j?.errno===44&&C&&a.noent_okay)return{path:S};throw j}if(w.isMountpoint(g)&&(!C||a.follow_mount)&&(g=g.mounted.root),w.isLink(g.mode)&&(!C||a.follow)){if(!g.node_ops.readlink)throw new w.ErrnoError(52);var O=g.node_ops.readlink(g);xt.isAbs(O)||(O=xt.dirname(S)+"/"+O),s=O+"/"+f.slice(b+1).join("/");continue e}}}return{path:S,node:g}}throw new w.ErrnoError(32)},getPath(s){for(var a;;){if(w.isRoot(s)){var h=s.mount.mountpoint;return a?h[h.length-1]!=="/"?`${h}/${a}`:h+a:h}a=a?`${s.name}/${a}`:s.name,s=s.parent}},hashName(s,a){for(var h=0,f=0;f<a.length;f++)h=(h<<5)-h+a.charCodeAt(f)|0;return(s+h>>>0)%w.nameTable.length},hashAddNode(s){var a=w.hashName(s.parent.id,s.name);s.name_next=w.nameTable[a],w.nameTable[a]=s},hashRemoveNode(s){var a=w.hashName(s.parent.id,s.name);if(w.nameTable[a]===s)w.nameTable[a]=s.name_next;else for(var h=w.nameTable[a];h;){if(h.name_next===s){h.name_next=s.name_next;break}h=h.name_next}},lookupNode(s,a){var h=w.mayLookup(s);if(h)throw new w.ErrnoError(h);for(var f=w.hashName(s.id,a),g=w.nameTable[f];g;g=g.name_next){var S=g.name;if(g.parent.id===s.id&&S===a)return g}return w.lookup(s,a)},createNode(s,a,h,f){R(typeof s=="object");var g=new w.FSNode(s,a,h,f);return w.hashAddNode(g),g},destroyNode(s){w.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var a=["r","w","rw"][s&3];return s&512&&(a+="w"),a},nodePermissions(s,a){return w.ignorePermissions?0:a.includes("r")&&!(s.mode&292)||a.includes("w")&&!(s.mode&146)||a.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!w.isDir(s.mode))return 54;var a=w.nodePermissions(s,"x");return a||(s.node_ops.lookup?0:2)},mayCreate(s,a){if(!w.isDir(s.mode))return 54;try{var h=w.lookupNode(s,a);return 20}catch{}return w.nodePermissions(s,"wx")},mayDelete(s,a,h){var f;try{f=w.lookupNode(s,a)}catch(S){return S.errno}var g=w.nodePermissions(s,"wx");if(g)return g;if(h){if(!w.isDir(f.mode))return 54;if(w.isRoot(f)||w.getPath(f)===w.cwd())return 10}else if(w.isDir(f.mode))return 31;return 0},mayOpen(s,a){return s?w.isLink(s.mode)?32:w.isDir(s.mode)&&(w.flagsToPermissionString(a)!=="r"||a&576)?31:w.nodePermissions(s,w.flagsToPermissionString(a)):44},checkOpExists(s,a){if(!s)throw new w.ErrnoError(a);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=w.MAX_OPEN_FDS;s++)if(!w.streams[s])return s;throw new w.ErrnoError(33)},getStreamChecked(s){var a=w.getStream(s);if(!a)throw new w.ErrnoError(8);return a},getStream:s=>w.streams[s],createStream(s,a=-1){return R(a>=-1),s=Object.assign(new w.FSStream,s),a==-1&&(a=w.nextfd()),s.fd=a,w.streams[a]=s,s},closeStream(s){w.streams[s]=null},dupStream(s,a=-1){var h=w.createStream(s,a);return h.stream_ops?.dup?.(h),h},doSetAttr(s,a,h){var f=s?.stream_ops.setattr,g=f?s:a;f??=a.node_ops.setattr,w.checkOpExists(f,63),f(g,h)},chrdev_stream_ops:{open(s){var a=w.getDevice(s.node.rdev);s.stream_ops=a.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new w.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,a)=>s<<8|a,registerDevice(s,a){w.devices[s]={stream_ops:a}},getDevice:s=>w.devices[s],getMounts(s){for(var a=[],h=[s];h.length;){var f=h.pop();a.push(f),h.push(...f.mounts)}return a},syncfs(s,a){typeof s=="function"&&(a=s,s=!1),w.syncFSRequests++,w.syncFSRequests>1&&L(`warning: ${w.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var h=w.getMounts(w.root.mount),f=0;function g(b){return R(w.syncFSRequests>0),w.syncFSRequests--,a(b)}function S(b){if(b)return S.errored?void 0:(S.errored=!0,g(b));++f>=h.length&&g(null)}h.forEach(b=>{if(!b.type.syncfs)return S(null);b.type.syncfs(b,s,S)})},mount(s,a,h){if(typeof s=="string")throw s;var f=h==="/",g=!h,S;if(f&&w.root)throw new w.ErrnoError(10);if(!f&&!g){var b=w.lookupPath(h,{follow_mount:!1});if(h=b.path,S=b.node,w.isMountpoint(S))throw new w.ErrnoError(10);if(!w.isDir(S.mode))throw new w.ErrnoError(54)}var C={type:s,opts:a,mountpoint:h,mounts:[]},O=s.mount(C);return O.mount=C,C.root=O,f?w.root=O:S&&(S.mounted=C,S.mount&&S.mount.mounts.push(C)),O},unmount(s){var a=w.lookupPath(s,{follow_mount:!1});if(!w.isMountpoint(a.node))throw new w.ErrnoError(28);var h=a.node,f=h.mounted,g=w.getMounts(f);Object.keys(w.nameTable).forEach(b=>{for(var C=w.nameTable[b];C;){var O=C.name_next;g.includes(C.mount)&&w.destroyNode(C),C=O}}),h.mounted=null;var S=h.mount.mounts.indexOf(f);R(S!==-1),h.mount.mounts.splice(S,1)},lookup(s,a){return s.node_ops.lookup(s,a)},mknod(s,a,h){var f=w.lookupPath(s,{parent:!0}),g=f.node,S=xt.basename(s);if(!S)throw new w.ErrnoError(28);if(S==="."||S==="..")throw new w.ErrnoError(20);var b=w.mayCreate(g,S);if(b)throw new w.ErrnoError(b);if(!g.node_ops.mknod)throw new w.ErrnoError(63);return g.node_ops.mknod(g,S,a,h)},statfs(s){return w.statfsNode(w.lookupPath(s,{follow:!0}).node)},statfsStream(s){return w.statfsNode(s.node)},statfsNode(s){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:w.nextInode,ffree:w.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(a,s.node_ops.statfs(s.mount.opts.root)),a},create(s,a=438){return a&=4095,a|=32768,w.mknod(s,a,0)},mkdir(s,a=511){return a&=1023,a|=16384,w.mknod(s,a,0)},mkdirTree(s,a){var h=s.split("/"),f="";for(var g of h)if(g){(f||xt.isAbs(s))&&(f+="/"),f+=g;try{w.mkdir(f,a)}catch(S){if(S.errno!=20)throw S}}},mkdev(s,a,h){return typeof h>"u"&&(h=a,a=438),a|=8192,w.mknod(s,a,h)},symlink(s,a){if(!ee.resolve(s))throw new w.ErrnoError(44);var h=w.lookupPath(a,{parent:!0}),f=h.node;if(!f)throw new w.ErrnoError(44);var g=xt.basename(a),S=w.mayCreate(f,g);if(S)throw new w.ErrnoError(S);if(!f.node_ops.symlink)throw new w.ErrnoError(63);return f.node_ops.symlink(f,g,s)},rename(s,a){var h=xt.dirname(s),f=xt.dirname(a),g=xt.basename(s),S=xt.basename(a),b,C,O;if(b=w.lookupPath(s,{parent:!0}),C=b.node,b=w.lookupPath(a,{parent:!0}),O=b.node,!C||!O)throw new w.ErrnoError(44);if(C.mount!==O.mount)throw new w.ErrnoError(75);var j=w.lookupNode(C,g),J=ee.relative(s,f);if(J.charAt(0)!==".")throw new w.ErrnoError(28);if(J=ee.relative(a,h),J.charAt(0)!==".")throw new w.ErrnoError(55);var ne;try{ne=w.lookupNode(O,S)}catch{}if(j!==ne){var ue=w.isDir(j.mode),se=w.mayDelete(C,g,ue);if(se)throw new w.ErrnoError(se);if(se=ne?w.mayDelete(O,S,ue):w.mayCreate(O,S),se)throw new w.ErrnoError(se);if(!C.node_ops.rename)throw new w.ErrnoError(63);if(w.isMountpoint(j)||ne&&w.isMountpoint(ne))throw new w.ErrnoError(10);if(O!==C&&(se=w.nodePermissions(C,"w"),se))throw new w.ErrnoError(se);w.hashRemoveNode(j);try{C.node_ops.rename(j,O,S),j.parent=O}catch(pe){throw pe}finally{w.hashAddNode(j)}}},rmdir(s){var a=w.lookupPath(s,{parent:!0}),h=a.node,f=xt.basename(s),g=w.lookupNode(h,f),S=w.mayDelete(h,f,!0);if(S)throw new w.ErrnoError(S);if(!h.node_ops.rmdir)throw new w.ErrnoError(63);if(w.isMountpoint(g))throw new w.ErrnoError(10);h.node_ops.rmdir(h,f),w.destroyNode(g)},readdir(s){var a=w.lookupPath(s,{follow:!0}),h=a.node,f=w.checkOpExists(h.node_ops.readdir,54);return f(h)},unlink(s){var a=w.lookupPath(s,{parent:!0}),h=a.node;if(!h)throw new w.ErrnoError(44);var f=xt.basename(s),g=w.lookupNode(h,f),S=w.mayDelete(h,f,!1);if(S)throw new w.ErrnoError(S);if(!h.node_ops.unlink)throw new w.ErrnoError(63);if(w.isMountpoint(g))throw new w.ErrnoError(10);h.node_ops.unlink(h,f),w.destroyNode(g)},readlink(s){var a=w.lookupPath(s),h=a.node;if(!h)throw new w.ErrnoError(44);if(!h.node_ops.readlink)throw new w.ErrnoError(28);return h.node_ops.readlink(h)},stat(s,a){var h=w.lookupPath(s,{follow:!a}),f=h.node,g=w.checkOpExists(f.node_ops.getattr,63);return g(f)},fstat(s){var a=w.getStreamChecked(s),h=a.node,f=a.stream_ops.getattr,g=f?a:h;return f??=h.node_ops.getattr,w.checkOpExists(f,63),f(g)},lstat(s){return w.stat(s,!0)},doChmod(s,a,h,f){w.doSetAttr(s,a,{mode:h&4095|a.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,a,h){var f;if(typeof s=="string"){var g=w.lookupPath(s,{follow:!h});f=g.node}else f=s;w.doChmod(null,f,a,h)},lchmod(s,a){w.chmod(s,a,!0)},fchmod(s,a){var h=w.getStreamChecked(s);w.doChmod(h,h.node,a,!1)},doChown(s,a,h){w.doSetAttr(s,a,{timestamp:Date.now(),dontFollow:h})},chown(s,a,h,f){var g;if(typeof s=="string"){var S=w.lookupPath(s,{follow:!f});g=S.node}else g=s;w.doChown(null,g,f)},lchown(s,a,h){w.chown(s,a,h,!0)},fchown(s,a,h){var f=w.getStreamChecked(s);w.doChown(f,f.node,!1)},doTruncate(s,a,h){if(w.isDir(a.mode))throw new w.ErrnoError(31);if(!w.isFile(a.mode))throw new w.ErrnoError(28);var f=w.nodePermissions(a,"w");if(f)throw new w.ErrnoError(f);w.doSetAttr(s,a,{size:h,timestamp:Date.now()})},truncate(s,a){if(a<0)throw new w.ErrnoError(28);var h;if(typeof s=="string"){var f=w.lookupPath(s,{follow:!0});h=f.node}else h=s;w.doTruncate(null,h,a)},ftruncate(s,a){var h=w.getStreamChecked(s);if(a<0||(h.flags&2097155)===0)throw new w.ErrnoError(28);w.doTruncate(h,h.node,a)},utime(s,a,h){var f=w.lookupPath(s,{follow:!0}),g=f.node,S=w.checkOpExists(g.node_ops.setattr,63);S(g,{atime:a,mtime:h})},open(s,a,h=438){if(s==="")throw new w.ErrnoError(44);a=typeof a=="string"?je(a):a,a&64?h=h&4095|32768:h=0;var f,g;if(typeof s=="object")f=s;else{g=s.endsWith("/");var S=w.lookupPath(s,{follow:!(a&131072),noent_okay:!0});f=S.node,s=S.path}var b=!1;if(a&64)if(f){if(a&128)throw new w.ErrnoError(20)}else{if(g)throw new w.ErrnoError(31);f=w.mknod(s,h|511,0),b=!0}if(!f)throw new w.ErrnoError(44);if(w.isChrdev(f.mode)&&(a&=-513),a&65536&&!w.isDir(f.mode))throw new w.ErrnoError(54);if(!b){var C=w.mayOpen(f,a);if(C)throw new w.ErrnoError(C)}a&512&&!b&&w.truncate(f,0),a&=-131713;var O=w.createStream({node:f,path:w.getPath(f),flags:a,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return O.stream_ops.open&&O.stream_ops.open(O),b&&w.chmod(f,h&511),t.logReadFiles&&!(a&1)&&(s in w.readFiles||(w.readFiles[s]=1)),O},close(s){if(w.isClosed(s))throw new w.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(a){throw a}finally{w.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,a,h){if(w.isClosed(s))throw new w.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new w.ErrnoError(70);if(h!=0&&h!=1&&h!=2)throw new w.ErrnoError(28);return s.position=s.stream_ops.llseek(s,a,h),s.ungotten=[],s.position},read(s,a,h,f,g){if(R(h>=0),f<0||g<0)throw new w.ErrnoError(28);if(w.isClosed(s))throw new w.ErrnoError(8);if((s.flags&2097155)===1)throw new w.ErrnoError(8);if(w.isDir(s.node.mode))throw new w.ErrnoError(31);if(!s.stream_ops.read)throw new w.ErrnoError(28);var S=typeof g<"u";if(!S)g=s.position;else if(!s.seekable)throw new w.ErrnoError(70);var b=s.stream_ops.read(s,a,h,f,g);return S||(s.position+=b),b},write(s,a,h,f,g,S){if(R(h>=0),f<0||g<0)throw new w.ErrnoError(28);if(w.isClosed(s))throw new w.ErrnoError(8);if((s.flags&2097155)===0)throw new w.ErrnoError(8);if(w.isDir(s.node.mode))throw new w.ErrnoError(31);if(!s.stream_ops.write)throw new w.ErrnoError(28);s.seekable&&s.flags&1024&&w.llseek(s,0,2);var b=typeof g<"u";if(!b)g=s.position;else if(!s.seekable)throw new w.ErrnoError(70);var C=s.stream_ops.write(s,a,h,f,g,S);return b||(s.position+=C),C},mmap(s,a,h,f,g){if((f&2)!==0&&(g&2)===0&&(s.flags&2097155)!==2)throw new w.ErrnoError(2);if((s.flags&2097155)===1)throw new w.ErrnoError(2);if(!s.stream_ops.mmap)throw new w.ErrnoError(43);if(!a)throw new w.ErrnoError(28);return s.stream_ops.mmap(s,a,h,f,g)},msync(s,a,h,f,g){return R(h>=0),s.stream_ops.msync?s.stream_ops.msync(s,a,h,f,g):0},ioctl(s,a,h){if(!s.stream_ops.ioctl)throw new w.ErrnoError(59);return s.stream_ops.ioctl(s,a,h)},readFile(s,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var h=w.open(s,a.flags),f=w.stat(s),g=f.size,S=new Uint8Array(g);return w.read(h,S,0,g,0),a.encoding==="utf8"&&(S=mt(S)),w.close(h),S},writeFile(s,a,h={}){h.flags=h.flags||577;var f=w.open(s,h.flags,h.mode);if(typeof a=="string"&&(a=new Uint8Array(Re(a))),ArrayBuffer.isView(a))w.write(f,a,0,a.byteLength,void 0,h.canOwn);else throw new Error("Unsupported data type");w.close(f)},cwd:()=>w.currentPath,chdir(s){var a=w.lookupPath(s,{follow:!0});if(a.node===null)throw new w.ErrnoError(44);if(!w.isDir(a.node.mode))throw new w.ErrnoError(54);var h=w.nodePermissions(a.node,"x");if(h)throw new w.ErrnoError(h);w.currentPath=a.path},createDefaultDirectories(){w.mkdir("/tmp"),w.mkdir("/home"),w.mkdir("/home/web_user")},createDefaultDevices(){w.mkdir("/dev"),w.registerDevice(w.makedev(1,3),{read:()=>0,write:(f,g,S,b,C)=>b,llseek:()=>0}),w.mkdev("/dev/null",w.makedev(1,3)),Pe.register(w.makedev(5,0),Pe.default_tty_ops),Pe.register(w.makedev(6,0),Pe.default_tty1_ops),w.mkdev("/dev/tty",w.makedev(5,0)),w.mkdev("/dev/tty1",w.makedev(6,0));var s=new Uint8Array(1024),a=0,h=()=>(a===0&&($(s),a=s.byteLength),s[--a]);w.createDevice("/dev","random",h),w.createDevice("/dev","urandom",h),w.mkdir("/dev/shm"),w.mkdir("/dev/shm/tmp")},createSpecialDirectories(){w.mkdir("/proc");var s=w.mkdir("/proc/self");w.mkdir("/proc/self/fd"),w.mount({mount(){var a=w.createNode(s,"fd",16895,73);return a.stream_ops={llseek:Se.stream_ops.llseek},a.node_ops={lookup(h,f){var g=+f,S=w.getStreamChecked(g),b={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>S.path},id:g+1};return b.parent=b,b},readdir(){return Array.from(w.streams.entries()).filter(([h,f])=>f).map(([h,f])=>h.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(s,a,h){s?w.createDevice("/dev","stdin",s):w.symlink("/dev/tty","/dev/stdin"),a?w.createDevice("/dev","stdout",null,a):w.symlink("/dev/tty","/dev/stdout"),h?w.createDevice("/dev","stderr",null,h):w.symlink("/dev/tty1","/dev/stderr");var f=w.open("/dev/stdin",0),g=w.open("/dev/stdout",1),S=w.open("/dev/stderr",1);R(f.fd===0,`invalid handle for stdin (${f.fd})`),R(g.fd===1,`invalid handle for stdout (${g.fd})`),R(S.fd===2,`invalid handle for stderr (${S.fd})`)},staticInit(){w.nameTable=new Array(4096),w.mount(Se,{},"/"),w.createDefaultDirectories(),w.createDefaultDevices(),w.createSpecialDirectories(),w.filesystems={MEMFS:Se}},init(s,a,h){R(!w.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),w.initialized=!0,s??=t.stdin,a??=t.stdout,h??=t.stderr,w.createStandardStreams(s,a,h)},quit(){w.initialized=!1,ja(0);for(var s of w.streams)s&&w.close(s)},findObject(s,a){var h=w.analyzePath(s,a);return h.exists?h.object:null},analyzePath(s,a){try{var h=w.lookupPath(s,{follow:!a});s=h.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var h=w.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=h.path,f.parentObject=h.node,f.name=xt.basename(s),h=w.lookupPath(s,{follow:!a}),f.exists=!0,f.path=h.path,f.object=h.node,f.name=h.node.name,f.isRoot=h.path==="/"}catch(g){f.error=g.errno}return f},createPath(s,a,h,f){s=typeof s=="string"?s:w.getPath(s);for(var g=a.split("/").reverse();g.length;){var S=g.pop();if(S){var b=xt.join2(s,S);try{w.mkdir(b)}catch(C){if(C.errno!=20)throw C}s=b}}return b},createFile(s,a,h,f,g){var S=xt.join2(typeof s=="string"?s:w.getPath(s),a),b=Ft(f,g);return w.create(S,b)},createDataFile(s,a,h,f,g,S){var b=a;s&&(s=typeof s=="string"?s:w.getPath(s),b=a?xt.join2(s,a):s);var C=Ft(f,g),O=w.create(b,C);if(h){if(typeof h=="string"){for(var j=new Array(h.length),J=0,ne=h.length;J<ne;++J)j[J]=h.charCodeAt(J);h=j}w.chmod(O,C|146);var ue=w.open(O,577);w.write(ue,h,0,h.length,0,S),w.close(ue),w.chmod(O,C)}},createDevice(s,a,h,f){var g=xt.join2(typeof s=="string"?s:w.getPath(s),a),S=Ft(!!h,!!f);w.createDevice.major??=64;var b=w.makedev(w.createDevice.major++,0);return w.registerDevice(b,{open(C){C.seekable=!1},close(C){f?.buffer?.length&&f(10)},read(C,O,j,J,ne){for(var ue=0,se=0;se<J;se++){var pe;try{pe=h()}catch{throw new w.ErrnoError(29)}if(pe===void 0&&ue===0)throw new w.ErrnoError(6);if(pe==null)break;ue++,O[j+se]=pe}return ue&&(C.node.atime=Date.now()),ue},write(C,O,j,J,ne){for(var ue=0;ue<J;ue++)try{f(O[j+ue])}catch{throw new w.ErrnoError(29)}return J&&(C.node.mtime=C.node.ctime=Date.now()),ue}}),w.mkdev(g,S,b)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=E(s.url),s.usedBytes=s.contents.length}catch{throw new w.ErrnoError(29)}},createLazyFile(s,a,h,f,g){class S{lengthKnown=!1;chunks=[];get(se){if(!(se>this.length-1||se<0)){var pe=se%this.chunkSize,Xe=se/this.chunkSize|0;return this.getter(Xe)[pe]}}setDataGetter(se){this.getter=se}cacheLength(){var se=new XMLHttpRequest;if(se.open("HEAD",h,!1),se.send(null),!(se.status>=200&&se.status<300||se.status===304))throw new Error("Couldn't load "+h+". Status: "+se.status);var pe=Number(se.getResponseHeader("Content-length")),Xe,lt=(Xe=se.getResponseHeader("Accept-Ranges"))&&Xe==="bytes",ot=(Xe=se.getResponseHeader("Content-Encoding"))&&Xe==="gzip",Nt=1024*1024;lt||(Nt=pe);var _t=(jt,cn)=>{if(jt>cn)throw new Error("invalid range ("+jt+", "+cn+") or no bytes requested!");if(cn>pe-1)throw new Error("only "+pe+" bytes available! programmer error!");var Tt=new XMLHttpRequest;if(Tt.open("GET",h,!1),pe!==Nt&&Tt.setRequestHeader("Range","bytes="+jt+"-"+cn),Tt.responseType="arraybuffer",Tt.overrideMimeType&&Tt.overrideMimeType("text/plain; charset=x-user-defined"),Tt.send(null),!(Tt.status>=200&&Tt.status<300||Tt.status===304))throw new Error("Couldn't load "+h+". Status: "+Tt.status);return Tt.response!==void 0?new Uint8Array(Tt.response||[]):Re(Tt.responseText||"")},tn=this;tn.setDataGetter(jt=>{var cn=jt*Nt,Tt=(jt+1)*Nt-1;if(Tt=Math.min(Tt,pe-1),typeof tn.chunks[jt]>"u"&&(tn.chunks[jt]=_t(cn,Tt)),typeof tn.chunks[jt]>"u")throw new Error("doXHR failed!");return tn.chunks[jt]}),(ot||!pe)&&(Nt=pe=1,pe=this.getter(0).length,Nt=pe,P("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=pe,this._chunkSize=Nt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var b=new S,C={isDevice:!1,contents:b}}else var C={isDevice:!1,url:h};var O=w.createFile(s,a,C,f,g);C.contents?O.contents=C.contents:C.url&&(O.contents=null,O.url=C.url),Object.defineProperties(O,{usedBytes:{get:function(){return this.contents.length}}});var j={},J=Object.keys(O.stream_ops);J.forEach(ue=>{var se=O.stream_ops[ue];j[ue]=(...pe)=>(w.forceLoadFile(O),se(...pe))});function ne(ue,se,pe,Xe,lt){var ot=ue.node.contents;if(lt>=ot.length)return 0;var Nt=Math.min(ot.length-lt,Xe);if(R(Nt>=0),ot.slice)for(var _t=0;_t<Nt;_t++)se[pe+_t]=ot[lt+_t];else for(var _t=0;_t<Nt;_t++)se[pe+_t]=ot.get(lt+_t);return Nt}return j.read=(ue,se,pe,Xe,lt)=>(w.forceLoadFile(O),ne(ue,se,pe,Xe,lt)),j.mmap=(ue,se,pe,Xe,lt)=>{w.forceLoadFile(O);var ot=$e();if(!ot)throw new w.ErrnoError(48);return ne(ue,tt,ot,se,pe),{ptr:ot,allocated:!0}},O.stream_ops=j,O},absolutePath(){Y("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){Y("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){Y("FS.createLink has been removed; use FS.symlink instead")},joinPath(){Y("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){Y("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){Y("FS.standardizePath has been removed; use PATH.normalize instead")}},ut={DEFAULT_POLLMASK:5,calculateAt(s,a,h){if(xt.isAbs(a))return a;var f;if(s===-100)f=w.cwd();else{var g=ut.getStreamFromFD(s);f=g.path}if(a.length==0){if(!h)throw new w.ErrnoError(44);return f}return f+"/"+a},writeStat(s,a){le[s>>2]=a.dev,le[s+4>>2]=a.mode,xe[s+8>>2]=a.nlink,le[s+12>>2]=a.uid,le[s+16>>2]=a.gid,le[s+20>>2]=a.rdev,Dt[s+24>>3]=BigInt(a.size),le[s+32>>2]=4096,le[s+36>>2]=a.blocks;var h=a.atime.getTime(),f=a.mtime.getTime(),g=a.ctime.getTime();return Dt[s+40>>3]=BigInt(Math.floor(h/1e3)),xe[s+48>>2]=h%1e3*1e3*1e3,Dt[s+56>>3]=BigInt(Math.floor(f/1e3)),xe[s+64>>2]=f%1e3*1e3*1e3,Dt[s+72>>3]=BigInt(Math.floor(g/1e3)),xe[s+80>>2]=g%1e3*1e3*1e3,Dt[s+88>>3]=BigInt(a.ino),0},writeStatFs(s,a){le[s+4>>2]=a.bsize,le[s+40>>2]=a.bsize,le[s+8>>2]=a.blocks,le[s+12>>2]=a.bfree,le[s+16>>2]=a.bavail,le[s+20>>2]=a.files,le[s+24>>2]=a.ffree,le[s+28>>2]=a.fsid,le[s+44>>2]=a.flags,le[s+36>>2]=a.namelen},doMsync(s,a,h,f,g){if(!w.isFile(a.node.mode))throw new w.ErrnoError(43);if(f&2)return 0;var S=Qe.slice(s,s+h);w.msync(a,S,g,h,f)},getStreamFromFD(s){var a=w.getStreamChecked(s);return a},varargs:void 0,getStr(s){var a=st(s);return a}};function Ri(s,a,h){try{var f=ut.getStreamFromFD(s);if(R(!h),f.fd===a)return-28;if(a<0||a>=w.MAX_OPEN_FDS)return-8;var g=w.getStream(a);return g&&w.close(g),w.dupStream(f,a).fd}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var bt=()=>{R(ut.varargs!=null);var s=le[+ut.varargs>>2];return ut.varargs+=4,s},Wt=bt;function pn(s,a,h){ut.varargs=h;try{var f=ut.getStreamFromFD(s);switch(a){case 0:{var g=bt();if(g<0)return-28;for(;w.streams[g];)g++;var S;return S=w.dupStream(f,g),S.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var g=bt();return f.flags|=g,0}case 12:{var g=Wt(),b=0;return he[g+b>>1]=2,0}case 13:case 14:return 0}return-28}catch(C){if(typeof w>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Zt(s,a){try{return ut.writeStat(a,w.fstat(s))}catch(h){if(typeof w>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}function en(s,a,h){ut.varargs=h;try{var f=ut.getStreamFromFD(s);switch(a){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var g=f.tty.ops.ioctl_tcgets(f),S=Wt();le[S>>2]=g.c_iflag||0,le[S+4>>2]=g.c_oflag||0,le[S+8>>2]=g.c_cflag||0,le[S+12>>2]=g.c_lflag||0;for(var b=0;b<32;b++)tt[S+b+17]=g.c_cc[b]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var S=Wt(),C=le[S>>2],O=le[S+4>>2],j=le[S+8>>2],J=le[S+12>>2],ne=[],b=0;b<32;b++)ne.push(tt[S+b+17]);return f.tty.ops.ioctl_tcsets(f.tty,a,{c_iflag:C,c_oflag:O,c_cflag:j,c_lflag:J,c_cc:ne})}return 0}case 21519:{if(!f.tty)return-59;var S=Wt();return le[S>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var S=Wt();return w.ioctl(f,a,S)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var ue=f.tty.ops.ioctl_tiocgwinsz(f.tty),S=Wt();he[S>>1]=ue[0],he[S+2>>1]=ue[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(se){if(typeof w>"u"||se.name!=="ErrnoError")throw se;return-se.errno}}function Br(s,a){try{return s=ut.getStr(s),ut.writeStat(a,w.lstat(s))}catch(h){if(typeof w>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}function qn(s,a,h,f){try{a=ut.getStr(a);var g=f&256,S=f&4096;return f=f&-6401,R(!f,`unknown flags in __syscall_newfstatat: ${f}`),a=ut.calculateAt(s,a,S),ut.writeStat(h,g?w.lstat(a):w.stat(a))}catch(b){if(typeof w>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}function lf(s,a,h,f){ut.varargs=f;try{a=ut.getStr(a),a=ut.calculateAt(s,a);var g=f?bt():0;return w.open(a,h,g).fd}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function hf(s,a){try{return s=ut.getStr(s),ut.writeStat(a,w.stat(s))}catch(h){if(typeof w>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}var uf=()=>Y("native code called abort()"),Xt=s=>{for(var a="";;){var h=Qe[s++];if(!h)return a;a+=String.fromCharCode(h)}},er={},Ci={},ws={},zr=class extends Error{constructor(a){super(a),this.name="BindingError"}},ft=s=>{throw new zr(s)};function df(s,a,h={}){var f=a.name;if(s||ft(`type "${f}" must have a positive integer typeid pointer`),Ci.hasOwnProperty(s)){if(h.ignoreDuplicateRegistrations)return;ft(`Cannot register type '${f}' twice`)}if(Ci[s]=a,delete ws[s],er.hasOwnProperty(s)){var g=er[s];delete er[s],g.forEach(S=>S())}}function Mn(s,a,h={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return df(s,a,h)}var Fl=(s,a,h)=>{switch(a){case 1:return h?f=>tt[f]:f=>Qe[f];case 2:return h?f=>he[f>>1]:f=>de[f>>1];case 4:return h?f=>le[f>>2]:f=>xe[f>>2];case 8:return h?f=>Dt[f>>3]:f=>G[f>>3];default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Pi=s=>{if(s===null)return"null";var a=typeof s;return a==="object"||a==="array"||a==="function"?s.toString():""+s},Il=(s,a,h,f)=>{if(a<h||a>f)throw new TypeError(`Passing a number "${Pi(a)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${h}, ${f}]!`)},ff=(s,a,h,f,g)=>{a=Xt(a);const S=f===0n;let b=C=>C;if(S){const C=h*8;b=O=>BigInt.asUintN(C,O),g=b(g)}Mn(s,{name:a,fromWireType:b,toWireType:(C,O)=>{if(typeof O=="number")O=BigInt(O);else if(typeof O!="bigint")throw new TypeError(`Cannot convert "${Pi(O)}" to ${this.name}`);return Il(a,O,f,g),O},argPackAdvance:kn,readValueFromPointer:Fl(a,h,!S),destructorFunction:null})},kn=8,pf=(s,a,h,f)=>{a=Xt(a),Mn(s,{name:a,fromWireType:function(g){return!!g},toWireType:function(g,S){return S?h:f},argPackAdvance:kn,readValueFromPointer:function(g){return this.fromWireType(Qe[g])},destructorFunction:null})},mf=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Ua=s=>{function a(h){return h.$$.ptrType.registeredClass.name}ft(a(s)+" instance already deleted")},Oa=!1,Nl=s=>{},_f=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},Ul=s=>{s.count.value-=1;var a=s.count.value===0;a&&_f(s)},Ol=(s,a,h)=>{if(a===h)return s;if(h.baseClass===void 0)return null;var f=Ol(s,a,h.baseClass);return f===null?null:h.downcast(f)},kl={},gf={},vf=(s,a)=>{for(a===void 0&&ft("ptr should not be undefined");s.baseClass;)a=s.upcast(a),s=s.baseClass;return a},yf=(s,a)=>(a=vf(s,a),gf[a]),xf=class extends Error{constructor(a){super(a),this.name="InternalError"}},bs=s=>{throw new xf(s)},Ts=(s,a)=>{(!a.ptrType||!a.ptr)&&bs("makeClassHandle requires ptr and ptrType");var h=!!a.smartPtrType,f=!!a.smartPtr;return h!==f&&bs("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Hr(Object.create(s,{$$:{value:a,writable:!0}}))};function Bl(s){var a=this.getPointee(s);if(!a)return this.destructor(s),null;var h=yf(this.registeredClass,a);if(h!==void 0){if(h.$$.count.value===0)return h.$$.ptr=a,h.$$.smartPtr=s,h.clone();var f=h.clone();return this.destructor(s),f}function g(){return this.isSmartPointer?Ts(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:s}):Ts(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var S=this.registeredClass.getActualType(a),b=kl[S];if(!b)return g.call(this);var C;this.isConst?C=b.constPointerType:C=b.pointerType;var O=Ol(a,this.registeredClass,C.registeredClass);return O===null?g.call(this):this.isSmartPointer?Ts(C.registeredClass.instancePrototype,{ptrType:C,ptr:O,smartPtrType:this,smartPtr:s}):Ts(C.registeredClass.instancePrototype,{ptrType:C,ptr:O})}var Hr=s=>typeof FinalizationRegistry>"u"?(Hr=a=>a,s):(Oa=new FinalizationRegistry(a=>{console.warn(a.leakWarning),Ul(a.$$)}),Hr=a=>{var h=a.$$,f=!!h.smartPtr;if(f){var g={$$:h},S=h.ptrType.registeredClass,b=new Error(`Embind found a leaked C++ instance ${S.name} <${Le(h.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(b,Bl),g.leakWarning=b.stack.replace(/^Error: /,""),Oa.register(a,g,a)}return a},Nl=a=>Oa.unregister(a),Hr(s)),Sf=()=>{let s=As.prototype;Object.assign(s,{isAliasOf(h){if(!(this instanceof As)||!(h instanceof As))return!1;var f=this.$$.ptrType.registeredClass,g=this.$$.ptr;h.$$=h.$$;for(var S=h.$$.ptrType.registeredClass,b=h.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;S.baseClass;)b=S.upcast(b),S=S.baseClass;return f===S&&g===b},clone(){if(this.$$.ptr||Ua(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var h=Hr(Object.create(Object.getPrototypeOf(this),{$$:{value:mf(this.$$)}}));return h.$$.count.value+=1,h.$$.deleteScheduled=!1,h},delete(){this.$$.ptr||Ua(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ft("Object already scheduled for deletion"),Nl(this),Ul(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ua(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ft("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(s[a]=s.delete)};function As(){}var Rs=(s,a)=>Object.defineProperty(a,"name",{value:s}),ka=(s,a,h)=>{if(s[a].overloadTable===void 0){var f=s[a];s[a]=function(...g){return s[a].overloadTable.hasOwnProperty(g.length)||ft(`Function '${h}' called with an invalid number of arguments (${g.length}) - expects one of (${s[a].overloadTable})!`),s[a].overloadTable[g.length].apply(this,g)},s[a].overloadTable=[],s[a].overloadTable[f.argCount]=f}},Ba=(s,a,h)=>{t.hasOwnProperty(s)?((h===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[h]!==void 0)&&ft(`Cannot register public name '${s}' twice`),ka(t,s,s),t[s].overloadTable.hasOwnProperty(h)&&ft(`Cannot register multiple overloads of a function with the same number of arguments (${h})!`),t[s].overloadTable[h]=a):(t[s]=a,t[s].argCount=h)},Mf=48,Ef=57,wf=s=>{R(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var a=s.charCodeAt(0);return a>=Mf&&a<=Ef?`_${s}`:s};function bf(s,a,h,f,g,S,b,C){this.name=s,this.constructor=a,this.instancePrototype=h,this.rawDestructor=f,this.baseClass=g,this.getActualType=S,this.upcast=b,this.downcast=C,this.pureVirtualFunctions=[]}var Cs=(s,a,h)=>{for(;a!==h;)a.upcast||ft(`Expected null or instance of ${h.name}, got an instance of ${a.name}`),s=a.upcast(s),a=a.baseClass;return s};function Tf(s,a){if(a===null)return this.isReference&&ft(`null is not a valid ${this.name}`),0;a.$$||ft(`Cannot pass "${Pi(a)}" as a ${this.name}`),a.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`);var h=a.$$.ptrType.registeredClass,f=Cs(a.$$.ptr,h,this.registeredClass);return f}function Af(s,a){var h;if(a===null)return this.isReference&&ft(`null is not a valid ${this.name}`),this.isSmartPointer?(h=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,h),h):0;(!a||!a.$$)&&ft(`Cannot pass "${Pi(a)}" as a ${this.name}`),a.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&ft(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var f=a.$$.ptrType.registeredClass;if(h=Cs(a.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&ft("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?h=a.$$.smartPtr:ft(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:h=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)h=a.$$.smartPtr;else{var g=a.clone();h=this.rawShare(h,Gt.toHandle(()=>g.delete())),s!==null&&s.push(this.rawDestructor,h)}break;default:ft("Unsupporting sharing policy")}return h}function Rf(s,a){if(a===null)return this.isReference&&ft(`null is not a valid ${this.name}`),0;a.$$||ft(`Cannot pass "${Pi(a)}" as a ${this.name}`),a.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&ft(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var h=a.$$.ptrType.registeredClass,f=Cs(a.$$.ptr,h,this.registeredClass);return f}function Ps(s){return this.fromWireType(xe[s>>2])}var Cf=()=>{Object.assign(Ds.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:kn,readValueFromPointer:Ps,fromWireType:Bl})};function Ds(s,a,h,f,g,S,b,C,O,j,J){this.name=s,this.registeredClass=a,this.isReference=h,this.isConst=f,this.isSmartPointer=g,this.pointeeType=S,this.sharingPolicy=b,this.rawGetPointee=C,this.rawConstructor=O,this.rawShare=j,this.rawDestructor=J,!g&&a.baseClass===void 0?f?(this.toWireType=Tf,this.destructorFunction=null):(this.toWireType=Rf,this.destructorFunction=null):this.toWireType=Af}var zl=(s,a,h)=>{t.hasOwnProperty(s)||bs("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&h!==void 0?t[s].overloadTable[h]=a:(t[s]=a,t[s].argCount=h)},Hl=[],Ls,_e=s=>{var a=Hl[s];return a||(Hl[s]=a=Ls.get(s)),R(Ls.get(s)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},Bn=(s,a,h=!1)=>{R(!h,"Async bindings are only supported with JSPI."),s=Xt(s);function f(){var S=_e(a);return S}var g=f();return typeof g!="function"&&ft(`unknown function pointer with signature ${s}: ${a}`),g};class Pf extends Error{}var Gl=s=>{var a=ah(s),h=Xt(a);return Hn(a),h},Di=(s,a)=>{var h=[],f={};function g(S){if(!f[S]&&!Ci[S]){if(ws[S]){ws[S].forEach(g);return}h.push(S),f[S]=!0}}throw a.forEach(g),new Pf(`${s}: `+h.map(Gl).join([", "]))},An=(s,a,h)=>{s.forEach(C=>ws[C]=a);function f(C){var O=h(C);O.length!==s.length&&bs("Mismatched type converter count");for(var j=0;j<s.length;++j)Mn(s[j],O[j])}var g=new Array(a.length),S=[],b=0;a.forEach((C,O)=>{Ci.hasOwnProperty(C)?g[O]=Ci[C]:(S.push(C),er.hasOwnProperty(C)||(er[C]=[]),er[C].push(()=>{g[O]=Ci[C],++b,b===S.length&&f(g)}))}),S.length===0&&f(g)},Df=(s,a,h,f,g,S,b,C,O,j,J,ne,ue)=>{J=Xt(J),S=Bn(g,S),C&&=Bn(b,C),j&&=Bn(O,j),ue=Bn(ne,ue);var se=wf(J);Ba(se,function(){Di(`Cannot construct ${J} due to unbound types`,[f])}),An([s,a,h],f?[f]:[],pe=>{pe=pe[0];var Xe,lt;f?(Xe=pe.registeredClass,lt=Xe.instancePrototype):lt=As.prototype;var ot=Rs(J,function(...Tt){if(Object.getPrototypeOf(this)!==Nt)throw new zr(`Use 'new' to construct ${J}`);if(_t.constructor_body===void 0)throw new zr(`${J} has no accessible constructor`);var Ii=_t.constructor_body[Tt.length];if(Ii===void 0)throw new zr(`Tried to invoke ctor of ${J} with invalid number of parameters (${Tt.length}) - expected (${Object.keys(_t.constructor_body).toString()}) parameters instead!`);return Ii.apply(this,Tt)}),Nt=Object.create(lt,{constructor:{value:ot}});ot.prototype=Nt;var _t=new bf(J,ot,Nt,ue,Xe,S,C,j);_t.baseClass&&(_t.baseClass.__derivedClasses??=[],_t.baseClass.__derivedClasses.push(_t));var tn=new Ds(J,_t,!0,!1,!1),jt=new Ds(J+"*",_t,!1,!1,!1),cn=new Ds(J+" const*",_t,!1,!0,!1);return kl[s]={pointerType:jt,constPointerType:cn},zl(se,ot),[tn,jt,cn]})},za=s=>{for(;s.length;){var a=s.pop(),h=s.pop();h(a)}};function Vl(s){for(var a=1;a<s.length;++a)if(s[a]!==null&&s[a].destructorFunction===void 0)return!0;return!1}function Lf(s,a,h,f,g){if(s<a||s>h){var S=a==h?a:`${a} to ${h}`;g(`function ${f} called with ${s} arguments, expected ${S}`)}}function Ff(s,a,h,f){var g=Vl(s),S=s.length-2,b=[],C=["fn"];a&&C.push("thisWired");for(var O=0;O<S;++O)b.push(`arg${O}`),C.push(`arg${O}Wired`);b=b.join(","),C=C.join(",");var j=`return function (${b}) {
`;j+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,g&&(j+=`var destructors = [];
`);var J=g?"destructors":"null",ne=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(j+=`var thisWired = classParam['toWireType'](${J}, this);
`);for(var O=0;O<S;++O)j+=`var arg${O}Wired = argType${O}['toWireType'](${J}, arg${O});
`,ne.push(`argType${O}`);if(j+=(h||f?"var rv = ":"")+`invoker(${C});
`,g)j+=`runDestructors(destructors);
`;else for(var O=a?1:2;O<s.length;++O){var ue=O===1?"thisWired":"arg"+(O-2)+"Wired";s[O].destructorFunction!==null&&(j+=`${ue}_dtor(${ue});
`,ne.push(`${ue}_dtor`))}return h&&(j+=`var ret = retType['fromWireType'](rv);
return ret;
`),j+=`}
`,ne.push("checkArgCount","minArgs","maxArgs"),j=`if (arguments.length !== ${ne.length}){ throw new Error(humanName + "Expected ${ne.length} closure arguments " + arguments.length + " given."); }
${j}`,[ne,j]}function If(s){for(var a=s.length-2,h=s.length-1;h>=2&&s[h].optional;--h)a--;return a}function Fs(s,a,h,f,g,S){var b=a.length;b<2&&ft("argTypes array size mismatch! Must at least get return value and 'this' types!"),R(!S,"Async bindings are only supported with JSPI.");for(var C=a[1]!==null&&h!==null,O=Vl(a),j=a[0].name!=="void",J=b-2,ne=If(a),ue=[s,ft,f,g,za,a[0],a[1]],se=0;se<b-2;++se)ue.push(a[se+2]);if(!O)for(var se=C?1:2;se<a.length;++se)a[se].destructorFunction!==null&&ue.push(a[se].destructorFunction);ue.push(Lf,ne,J);let[pe,Xe]=Ff(a,C,j,S);var lt=new Function(...pe,Xe)(...ue);return Rs(s,lt)}var Is=(s,a)=>{for(var h=[],f=0;f<s;f++)h.push(xe[a+f*4>>2]);return h},Ha=s=>{s=s.trim();const a=s.indexOf("(");return a===-1?s:(R(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,a))},Nf=(s,a,h,f,g,S,b,C,O)=>{var j=Is(h,f);a=Xt(a),a=Ha(a),S=Bn(g,S,C),An([],[s],J=>{J=J[0];var ne=`${J.name}.${a}`;function ue(){Di(`Cannot call ${ne} due to unbound types`,j)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var se=J.registeredClass.constructor;return se[a]===void 0?(ue.argCount=h-1,se[a]=ue):(ka(se,a,ne),se[a].overloadTable[h-1]=ue),An([],j,pe=>{var Xe=[pe[0],null].concat(pe.slice(1)),lt=Fs(ne,Xe,null,S,b,C);if(se[a].overloadTable===void 0?(lt.argCount=h-1,se[a]=lt):se[a].overloadTable[h-1]=lt,J.registeredClass.__derivedClasses)for(const ot of J.registeredClass.__derivedClasses)ot.constructor.hasOwnProperty(a)||(ot.constructor[a]=lt);return[]}),[]})},Uf=(s,a,h,f,g,S)=>{R(a>0);var b=Is(a,h);g=Bn(f,g),An([],[s],C=>{C=C[0];var O=`constructor ${C.name}`;if(C.registeredClass.constructor_body===void 0&&(C.registeredClass.constructor_body=[]),C.registeredClass.constructor_body[a-1]!==void 0)throw new zr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${C.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return C.registeredClass.constructor_body[a-1]=()=>{Di(`Cannot construct ${C.name} due to unbound types`,b)},An([],b,j=>(j.splice(1,0,null),C.registeredClass.constructor_body[a-1]=Fs(O,j,null,g,S),[])),[]})},Of=(s,a,h,f,g,S,b,C,O,j)=>{var J=Is(h,f);a=Xt(a),a=Ha(a),S=Bn(g,S,O),An([],[s],ne=>{ne=ne[0];var ue=`${ne.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),C&&ne.registeredClass.pureVirtualFunctions.push(a);function se(){Di(`Cannot call ${ue} due to unbound types`,J)}var pe=ne.registeredClass.instancePrototype,Xe=pe[a];return Xe===void 0||Xe.overloadTable===void 0&&Xe.className!==ne.name&&Xe.argCount===h-2?(se.argCount=h-2,se.className=ne.name,pe[a]=se):(ka(pe,a,ue),pe[a].overloadTable[h-2]=se),An([],J,lt=>{var ot=Fs(ue,lt,ne,S,b,O);return pe[a].overloadTable===void 0?(ot.argCount=h-2,pe[a]=ot):pe[a].overloadTable[h-2]=ot,[]}),[]})},Wl=(s,a,h)=>(s instanceof Object||ft(`${h} with invalid "this": ${s}`),s instanceof a.registeredClass.constructor||ft(`${h} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||ft(`cannot call emscripten binding method ${h} on deleted object`),Cs(s.$$.ptr,s.$$.ptrType.registeredClass,a.registeredClass)),kf=(s,a,h,f,g,S,b,C,O,j)=>{a=Xt(a),g=Bn(f,g),An([],[s],J=>{J=J[0];var ne=`${J.name}.${a}`,ue={get(){Di(`Cannot access ${ne} due to unbound types`,[h,b])},enumerable:!0,configurable:!0};return O?ue.set=()=>Di(`Cannot access ${ne} due to unbound types`,[h,b]):ue.set=se=>ft(ne+" is a read-only property"),Object.defineProperty(J.registeredClass.instancePrototype,a,ue),An([],O?[h,b]:[h],se=>{var pe=se[0],Xe={get(){var ot=Wl(this,J,ne+" getter");return pe.fromWireType(g(S,ot))},enumerable:!0};if(O){O=Bn(C,O);var lt=se[1];Xe.set=function(ot){var Nt=Wl(this,J,ne+" setter"),_t=[];O(j,Nt,lt.toWireType(_t,ot)),za(_t)}}return Object.defineProperty(J.registeredClass.instancePrototype,a,Xe),[]}),[]})},Bf=(s,a,h)=>{s=Xt(s),An([],[a],f=>(f=f[0],t[s]=f.fromWireType(h),[]))},Xl=[],zn=[0,1,,1,null,1,!0,1,!1,1],Ga=s=>{s>9&&--zn[s+1]===0&&(R(zn[s]!==void 0,"Decref for unallocated handle."),zn[s]=void 0,Xl.push(s))},Gt={toValue:s=>(s||ft(`Cannot use deleted val. handle = ${s}`),R(s===2||zn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),zn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Xl.pop()||zn.length;return zn[a]=s,zn[a+1]=1,a}}}},jl={name:"emscripten::val",fromWireType:s=>{var a=Gt.toValue(s);return Ga(s),a},toWireType:(s,a)=>Gt.toHandle(a),argPackAdvance:kn,readValueFromPointer:Ps,destructorFunction:null},$l=s=>Mn(s,jl),zf=(s,a,h)=>{switch(a){case 1:return h?function(f){return this.fromWireType(tt[f])}:function(f){return this.fromWireType(Qe[f])};case 2:return h?function(f){return this.fromWireType(he[f>>1])}:function(f){return this.fromWireType(de[f>>1])};case 4:return h?function(f){return this.fromWireType(le[f>>2])}:function(f){return this.fromWireType(xe[f>>2])};default:throw new TypeError(`invalid integer width (${a}): ${s}`)}},Hf=(s,a,h,f)=>{a=Xt(a);function g(){}g.values={},Mn(s,{name:a,constructor:g,fromWireType:function(S){return this.constructor.values[S]},toWireType:(S,b)=>b.value,argPackAdvance:kn,readValueFromPointer:zf(a,h,f),destructorFunction:null}),Ba(a,g)},Gr=(s,a)=>{var h=Ci[s];return h===void 0&&ft(`${a} has unknown type ${Gl(s)}`),h},Gf=(s,a,h)=>{var f=Gr(s,"enum");a=Xt(a);var g=f.constructor,S=Object.create(f.constructor.prototype,{value:{value:h},constructor:{value:Rs(`${f.name}_${a}`,function(){})}});g.values[h]=S,g[a]=S},Vf=(s,a)=>{switch(a){case 4:return function(h){return this.fromWireType(He[h>>2])};case 8:return function(h){return this.fromWireType(ht[h>>3])};default:throw new TypeError(`invalid float width (${a}): ${s}`)}},Wf=(s,a,h)=>{a=Xt(a),Mn(s,{name:a,fromWireType:f=>f,toWireType:(f,g)=>{if(typeof g!="number"&&typeof g!="boolean")throw new TypeError(`Cannot convert ${Pi(g)} to ${this.name}`);return g},argPackAdvance:kn,readValueFromPointer:Vf(a,h),destructorFunction:null})},Xf=(s,a,h,f,g,S,b,C)=>{var O=Is(a,h);s=Xt(s),s=Ha(s),g=Bn(f,g,b),Ba(s,function(){Di(`Cannot call ${s} due to unbound types`,O)},a-1),An([],O,j=>{var J=[j[0],null].concat(j.slice(1));return zl(s,Fs(s,J,null,g,S,b),a-1),[]})},jf=(s,a,h,f,g)=>{a=Xt(a);const S=f===0;let b=O=>O;if(S){var C=32-8*h;b=O=>O<<C>>>C,g=b(g)}Mn(s,{name:a,fromWireType:b,toWireType:(O,j)=>{if(typeof j!="number"&&typeof j!="boolean")throw new TypeError(`Cannot convert "${Pi(j)}" to ${a}`);return Il(a,j,f,g),j},argPackAdvance:kn,readValueFromPointer:Fl(a,h,f!==0),destructorFunction:null})},$f=(s,a,h)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],g=f[a];function S(b){var C=xe[b>>2],O=xe[b+4>>2];return new g(tt.buffer,O,C)}h=Xt(h),Mn(s,{name:h,fromWireType:S,argPackAdvance:kn,readValueFromPointer:S},{ignoreDuplicateRegistrations:!0})},qf=Object.assign({optional:!0},jl),Yf=(s,a)=>{Mn(s,qf)},Li=(s,a,h)=>(R(typeof h=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ge(s,Qe,a,h)),Kf=(s,a)=>{a=Xt(a),Mn(s,{name:a,fromWireType(h){for(var f=xe[h>>2],g=h+4,S,b,C=g,b=0;b<=f;++b){var O=g+b;if(b==f||Qe[O]==0){var j=O-C,J=st(C,j);S===void 0?S=J:(S+="\0",S+=J),C=O+1}}return Hn(h),S},toWireType(h,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g,S=typeof f=="string";S||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||ft("Cannot pass non-string to std::string"),S?g=q(f):g=f.length;var b=Xa(4+g+1),C=b+4;return xe[b>>2]=g,S?Li(f,C,g+1):Qe.set(f,C),h!==null&&h.push(Hn,b),b},argPackAdvance:kn,readValueFromPointer:Ps,destructorFunction(h){Hn(h)}})},ql=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Jf=(s,a)=>{R(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var h=s>>1,f=h+a/2,g=h;!(g>=f)&&de[g];)++g;if(g-h>16&&ql)return ql.decode(de.subarray(h,g));for(var S="",b=h;!(b>=f);++b){var C=de[b];if(C==0)break;S+=String.fromCharCode(C)}return S},Zf=(s,a,h)=>{if(R(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),R(typeof h=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),h??=2147483647,h<2)return 0;h-=2;for(var f=a,g=h<s.length*2?h/2:s.length,S=0;S<g;++S){var b=s.charCodeAt(S);he[a>>1]=b,a+=2}return he[a>>1]=0,a-f},Qf=s=>s.length*2,ep=(s,a)=>{R(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var h="",f=0;!(f>=a/4);f++){var g=le[s+f*4>>2];if(!g)break;h+=String.fromCodePoint(g)}return h},tp=(s,a,h)=>{if(R(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),R(typeof h=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),h??=2147483647,h<4)return 0;for(var f=a,g=f+h-4,S=0;S<s.length;++S){var b=s.codePointAt(S);if(b>65535&&S++,le[a>>2]=b,a+=4,a+4>g)break}return le[a>>2]=0,a-f},np=s=>{for(var a=0,h=0;h<s.length;++h){var f=s.codePointAt(h);f>65535&&h++,a+=4}return a},ip=(s,a,h)=>{h=Xt(h);var f,g,S,b;a===2?(f=Jf,g=Zf,b=Qf,S=C=>de[C>>1]):a===4&&(f=ep,g=tp,b=np,S=C=>xe[C>>2]),Mn(s,{name:h,fromWireType:C=>{for(var O=xe[C>>2],j,J=C+4,ne=0;ne<=O;++ne){var ue=C+4+ne*a;if(ne==O||S(ue)==0){var se=ue-J,pe=f(J,se);j===void 0?j=pe:(j+="\0",j+=pe),J=ue+a}}return Hn(C),j},toWireType:(C,O)=>{typeof O!="string"&&ft(`Cannot pass non-string to C++ string type ${h}`);var j=b(O),J=Xa(4+j+a);return xe[J>>2]=j/a,g(O,J+4,j+a),C!==null&&C.push(Hn,J),J},argPackAdvance:kn,readValueFromPointer:Ps,destructorFunction(C){Hn(C)}})},rp=(s,a)=>{$l(s)},sp=(s,a)=>{a=Xt(a),Mn(s,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(h,f)=>{}})},op=()=>{throw new H},Yl=(s,a,h)=>{var f=[],g=s.toWireType(f,h);return f.length&&(xe[a>>2]=Gt.toHandle(f)),g},ap=(s,a,h)=>(s=Gt.toValue(s),a=Gr(a,"emval::as"),Yl(a,h,s)),cp=(s,a)=>(s=Gt.toValue(s),a=Gr(a,"emval::as"),a.toWireType(null,s)),Ns=[],lp=(s,a,h,f)=>(s=Ns[s],a=Gt.toValue(a),s(null,a,h,f)),hp={},Va=s=>{var a=hp[s];return a===void 0?Xt(s):a},up=(s,a,h,f,g)=>(s=Ns[s],a=Gt.toValue(a),h=Va(h),s(a,a[h],f,g)),Kl=()=>globalThis,dp=s=>s===0?Gt.toHandle(Kl()):(s=Va(s),Gt.toHandle(Kl()[s])),fp=s=>{var a=Ns.length;return Ns.push(s),a},pp=(s,a)=>{for(var h=new Array(s),f=0;f<s;++f)h[f]=Gr(xe[a+f*4>>2],`parameter ${f}`);return h},mp=(s,a,h)=>{var f=pp(s,a),g=f.shift();s--;var S=`return function (obj, func, destructorsRef, args) {
`,b=0,C=[];h===0&&C.push("obj");for(var O=["retType"],j=[g],J=0;J<s;++J)C.push(`arg${J}`),O.push(`argType${J}`),j.push(f[J]),S+=`  var arg${J} = argType${J}.readValueFromPointer(args${b?"+"+b:""});
`,b+=f[J].argPackAdvance;var ne=h===1?"new func":"func.call";S+=`  var rv = ${ne}(${C.join(", ")});
`,g.isVoid||(O.push("emval_returnValue"),j.push(Yl),S+=`  return emval_returnValue(retType, destructorsRef, rv);
`),S+=`};
`;var ue=new Function(...O,S)(...j),se=`methodCaller<(${f.map(pe=>pe.name).join(", ")}) => ${g.name}>`;return fp(Rs(se,ue))},_p=(s,a)=>(s=Gt.toValue(s),a=Gt.toValue(a),Gt.toHandle(s[a])),gp=s=>{s>9&&(zn[s+1]+=1)},vp=s=>(s=Gt.toValue(s),typeof s=="number"),yp=s=>(s=Gt.toValue(s),typeof s=="string"),xp=()=>Gt.toHandle([]),Sp=s=>Gt.toHandle(Va(s)),Mp=s=>{var a=Gt.toValue(s);za(a),Ga(s)},Ep=(s,a)=>{s=Gr(s,"_emval_take_value");var h=s.readValueFromPointer(a);return Gt.toHandle(h)},wp=s=>{throw s=Gt.toValue(s),s},bp=s=>s%4===0&&(s%100!==0||s%400===0),Tp=[0,31,60,91,121,152,182,213,244,274,305,335],Ap=[0,31,59,90,120,151,181,212,243,273,304,334],Jl=s=>{var a=bp(s.getFullYear()),h=a?Tp:Ap,f=h[s.getMonth()]+s.getDate()-1;return f},Rp=9007199254740992,Cp=-9007199254740992,Zl=s=>s<Cp||s>Rp?NaN:Number(s);function Pp(s,a){s=Zl(s);var h=new Date(s*1e3);le[a>>2]=h.getSeconds(),le[a+4>>2]=h.getMinutes(),le[a+8>>2]=h.getHours(),le[a+12>>2]=h.getDate(),le[a+16>>2]=h.getMonth(),le[a+20>>2]=h.getFullYear()-1900,le[a+24>>2]=h.getDay();var f=Jl(h)|0;le[a+28>>2]=f,le[a+36>>2]=-(h.getTimezoneOffset()*60);var g=new Date(h.getFullYear(),0,1),S=new Date(h.getFullYear(),6,1).getTimezoneOffset(),b=g.getTimezoneOffset(),C=(S!=b&&h.getTimezoneOffset()==Math.min(b,S))|0;le[a+32>>2]=C}var Dp=function(s){var a=(()=>{var h=new Date(le[s+20>>2]+1900,le[s+16>>2],le[s+12>>2],le[s+8>>2],le[s+4>>2],le[s>>2],0),f=le[s+32>>2],g=h.getTimezoneOffset(),S=new Date(h.getFullYear(),0,1),b=new Date(h.getFullYear(),6,1).getTimezoneOffset(),C=S.getTimezoneOffset(),O=Math.min(C,b);if(f<0)le[s+32>>2]=+(b!=C&&O==g);else if(f>0!=(O==g)){var j=Math.max(C,b),J=f>0?O:j;h.setTime(h.getTime()+(J-g)*6e4)}le[s+24>>2]=h.getDay();var ne=Jl(h)|0;le[s+28>>2]=ne,le[s>>2]=h.getSeconds(),le[s+4>>2]=h.getMinutes(),le[s+8>>2]=h.getHours(),le[s+12>>2]=h.getDate(),le[s+16>>2]=h.getMonth(),le[s+20>>2]=h.getYear();var ue=h.getTime();return isNaN(ue)?-1:ue/1e3})();return BigInt(a)},Lp=(s,a,h,f)=>{var g=new Date().getFullYear(),S=new Date(g,0,1),b=new Date(g,6,1),C=S.getTimezoneOffset(),O=b.getTimezoneOffset(),j=Math.max(C,O);xe[s>>2]=j*60,le[a>>2]=+(C!=O);var J=se=>{var pe=se>=0?"-":"+",Xe=Math.abs(se),lt=String(Math.floor(Xe/60)).padStart(2,"0"),ot=String(Xe%60).padStart(2,"0");return`UTC${pe}${lt}${ot}`},ne=J(C),ue=J(O);R(ne),R(ue),R(q(ne)<=16,`timezone name truncated to fit in TZNAME_MAX (${ne})`),R(q(ue)<=16,`timezone name truncated to fit in TZNAME_MAX (${ue})`),O<C?(Li(ne,h,17),Li(ue,f,17)):(Li(ne,f,17),Li(ue,h,17))},Ql=()=>performance.now(),eh=()=>Date.now(),Fp=s=>s>=0&&s<=3;function Ip(s,a,h){if(!Fp(s))return 28;var f;s===0?f=eh():f=Ql();var g=Math.round(f*1e3*1e3);return Dt[h>>3]=BigInt(g),0}var Us=[],Np=(s,a)=>{R(Array.isArray(Us)),R(a%16==0),Us.length=0;for(var h;h=Qe[s++];){var f=String.fromCharCode(h),g=["d","f","i","p"];g.push("j"),R(g.includes(f),`Invalid character ${h}("${f}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`);var S=h!=105;S&=h!=112,a+=S&&a%8?4:0,Us.push(h==112?xe[a>>2]:h==106?Dt[a>>3]:h==105?le[a>>2]:ht[a>>3]),a+=S?8:4}return Us},Up=(s,a,h)=>{var f=Np(a,h);return R(oh.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),oh[s](...f)},Op=(s,a,h)=>Up(s,a,h),th=()=>2147483648,kp=()=>th(),Bp=(s,a)=>(R(a,"alignment argument is required"),Math.ceil(s/a)*a),zp=s=>{var a=vt.buffer,h=(s-a.byteLength+65535)/65536|0;try{return vt.grow(h),Ze(),1}catch(f){L(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},Hp=s=>{var a=Qe.length;s>>>=0,R(s>a);var h=th();if(s>h)return L(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${h} bytes!`),!1;for(var f=1;f<=4;f*=2){var g=a*(1+.2/f);g=Math.min(g,s+100663296);var S=Math.min(h,Bp(Math.max(s,g),65536)),b=zp(S);if(b)return!0}return L(`Failed to grow the heap from ${a} bytes to ${S} bytes, not enough memory!`),!1},Wa={},Gp=()=>u||"./this.program",Vr=()=>{if(!Vr.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Gp()};for(var h in Wa)Wa[h]===void 0?delete a[h]:a[h]=Wa[h];var f=[];for(var h in a)f.push(`${h}=${a[h]}`);Vr.strings=f}return Vr.strings},Vp=(s,a)=>{var h=0,f=0;for(var g of Vr()){var S=a+h;xe[s+f>>2]=S,h+=Li(g,S,1/0)+1,f+=4}return 0},Wp=(s,a)=>{var h=Vr();xe[s>>2]=h.length;var f=0;for(var g of h)f+=q(g)+1;return xe[a>>2]=f,0},nh=0,ih=()=>be||nh>0,Xp=s=>{ih()||(t.onExit?.(s),N=!0),d(s,new qe(s))},jp=(s,a)=>{if(cg(),ih()&&!a){var h=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${nh}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;it?.(h),L(h)}Xp(s)},$p=jp;function qp(s){try{var a=ut.getStreamFromFD(s);return w.close(a),0}catch(h){if(typeof w>"u"||h.name!=="ErrnoError")throw h;return h.errno}}var Yp=(s,a,h,f)=>{for(var g=0,S=0;S<h;S++){var b=xe[a>>2],C=xe[a+4>>2];a+=8;var O=w.read(s,tt,b,C,f);if(O<0)return-1;if(g+=O,O<C)break}return g};function Kp(s,a,h,f){try{var g=ut.getStreamFromFD(s),S=Yp(g,a,h);return xe[f>>2]=S,0}catch(b){if(typeof w>"u"||b.name!=="ErrnoError")throw b;return b.errno}}function Jp(s,a,h,f){a=Zl(a);try{if(isNaN(a))return 61;var g=ut.getStreamFromFD(s);return w.llseek(g,a,h),Dt[f>>3]=BigInt(g.position),g.getdents&&a===0&&h===0&&(g.getdents=null),0}catch(S){if(typeof w>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Zp=(s,a,h,f)=>{for(var g=0,S=0;S<h;S++){var b=xe[a>>2],C=xe[a+4>>2];a+=8;var O=w.write(s,tt,b,C,f);if(O<0)return-1;if(g+=O,O<C)break}return g};function Qp(s,a,h,f){try{var g=ut.getStreamFromFD(s),S=Zp(g,a,h);return xe[f>>2]=S,0}catch(b){if(typeof w>"u"||b.name!=="ErrnoError")throw b;return b.errno}}var em=s=>s,tm=s=>{var a=t["_"+s];return R(a,"Cannot call unknown function "+s+", make sure it is exported"),a},nm=(s,a)=>{R(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),tt.set(s,a)},Os=s=>dh(s),im=s=>{var a=q(s)+1,h=Os(a);return Li(s,h,a),h},rh=(s,a,h,f,g)=>{var S={string:pe=>{var Xe=0;return pe!=null&&pe!==0&&(Xe=im(pe)),Xe},array:pe=>{var Xe=Os(pe.length);return nm(pe,Xe),Xe}};function b(pe){return a==="string"?st(pe):a==="boolean"?!!pe:pe}var C=tm(s),O=[],j=0;if(R(a!=="array",'Return type should not be "array".'),f)for(var J=0;J<f.length;J++){var ne=S[h[J]];ne?(j===0&&(j=V()),O[J]=ne(f[J])):O[J]=f[J]}var ue=C(...O);function se(pe){return j!==0&&X(j),b(pe)}return ue=se(ue),ue},rm=(s,a,h,f)=>(...g)=>rh(s,a,h,g),sm=(...s)=>w.createPath(...s),om=(...s)=>w.unlink(...s),am=(...s)=>w.createLazyFile(...s),cm=(...s)=>w.createDevice(...s),lm=s=>ks(s),hm=s=>qa(s),um=s=>{var a=V(),h=Os(4),f=Os(4);ph(s,h,f);var g=xe[h>>2],S=xe[f>>2],b=st(g);Hn(g);var C;return S&&(C=st(S),Hn(S)),X(a),[b,C]},sh=s=>um(s);w.createPreloadedFile=Mt,w.staticInit(),Sf(),Cf(),R(zn.length===10),t.noExitRuntime&&(be=t.noExitRuntime),t.preloadPlugins&&(kt=t.preloadPlugins),t.print&&(P=t.print),t.printErr&&(L=t.printErr),t.wasmBinary&&(A=t.wasmBinary),pm(),t.arguments&&t.arguments,t.thisProgram&&(u=t.thisProgram),R(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),R(typeof t.read>"u","Module.read option was removed"),R(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),R(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),R(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),R(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),R(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),R(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),R(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),R(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=k,t.removeRunDependency=D,t.ccall=rh,t.cwrap=rm,t.FS_createPreloadedFile=Mt,t.FS_unlink=om,t.FS_createPath=sm,t.FS_createDevice=cm,t.FS=w,t.FS_createDataFile=ct,t.FS_createLazyFile=am,t.MEMFS=Se;var dm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];dm.forEach(Te);var fm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];fm.forEach(Fe),t.incrementExceptionRefcount=lm,t.decrementExceptionRefcount=hm,t.getExceptionMessage=sh;function pm(){oe("fetchSettings")}var oh={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(a){},enumerable:!0,configurable:!0})})}},ah=Q("___getTypeName"),Xa=Q("_malloc"),ja=Q("_fflush"),Hn=Q("_free"),$a=Q("_emscripten_stack_get_end"),ch=Q("_strerror"),me=Q("_setThrew"),lh=Q("__emscripten_tempret_set"),hh=Q("_emscripten_stack_init"),uh=Q("__emscripten_stack_restore"),dh=Q("__emscripten_stack_alloc"),fh=Q("_emscripten_stack_get_current"),qa=Q("___cxa_decrement_exception_refcount"),ks=Q("___cxa_increment_exception_refcount"),ph=Q("___get_exception_message"),mh=Q("___cxa_can_catch"),_h=Q("___cxa_get_exception_ptr");function mm(s){ah=ie("__getTypeName",1),Xa=ie("malloc",1),ja=ie("fflush",1),Hn=ie("free",1),$a=s.emscripten_stack_get_end,s.emscripten_stack_get_base,ch=ie("strerror",1),me=ie("setThrew",2),lh=ie("_emscripten_tempret_set",1),hh=s.emscripten_stack_init,s.emscripten_stack_get_free,uh=s._emscripten_stack_restore,dh=s._emscripten_stack_alloc,fh=s.emscripten_stack_get_current,qa=ie("__cxa_decrement_exception_refcount",1),ks=ie("__cxa_increment_exception_refcount",1),ph=ie("__get_exception_message",3),mh=ie("__cxa_can_catch",3),_h=ie("__cxa_get_exception_ptr",1)}var gh={__assert_fail:Tn,__cxa_begin_catch:jn,__cxa_current_primary_exception:kr,__cxa_end_catch:xs,__cxa_find_matching_catch_2:Ss,__cxa_find_matching_catch_3:Ms,__cxa_rethrow:Es,__cxa_rethrow_primary_exception:La,__cxa_throw:Fa,__cxa_uncaught_exceptions:Ia,__resumeException:Na,__syscall_dup3:Ri,__syscall_fcntl64:pn,__syscall_fstat64:Zt,__syscall_ioctl:en,__syscall_lstat64:Br,__syscall_newfstatat:qn,__syscall_openat:lf,__syscall_stat64:hf,_abort_js:uf,_embind_register_bigint:ff,_embind_register_bool:pf,_embind_register_class:Df,_embind_register_class_class_function:Nf,_embind_register_class_constructor:Uf,_embind_register_class_function:Of,_embind_register_class_property:kf,_embind_register_constant:Bf,_embind_register_emval:$l,_embind_register_enum:Hf,_embind_register_enum_value:Gf,_embind_register_float:Wf,_embind_register_function:Xf,_embind_register_integer:jf,_embind_register_memory_view:$f,_embind_register_optional:Yf,_embind_register_std_string:Kf,_embind_register_std_wstring:ip,_embind_register_user_type:rp,_embind_register_void:sp,_emscripten_throw_longjmp:op,_emval_as:ap,_emval_as_int64:cp,_emval_call:lp,_emval_call_method:up,_emval_decref:Ga,_emval_get_global:dp,_emval_get_method_caller:mp,_emval_get_property:_p,_emval_incref:gp,_emval_is_number:vp,_emval_is_string:yp,_emval_new_array:xp,_emval_new_cstring:Sp,_emval_run_destructors:Mp,_emval_take_value:Ep,_emval_throw:wp,_localtime_js:Pp,_mktime_js:Dp,_tzset_js:Lp,clock_time_get:Ip,emscripten_asm_const_int:Op,emscripten_date_now:eh,emscripten_get_heap_max:kp,emscripten_get_now:Ql,emscripten_resize_heap:Hp,environ_get:Vp,environ_sizes_get:Wp,exit:$p,fd_close:qp,fd_read:Kp,fd_seek:Jp,fd_write:Qp,invoke_ddd:K_,invoke_dddi:o_,invoke_dddidi:a_,invoke_ddidi:s_,invoke_di:c_,invoke_didd:B_,invoke_dii:Km,invoke_diii:Pm,invoke_diiii:r_,invoke_diiiidd:n_,invoke_diiiidi:Fm,invoke_diiiii:wm,invoke_diiiiii:Bm,invoke_diiiiiii:l_,invoke_diiiiiiiii:Om,invoke_diiiiiiiiiiii:km,invoke_fiii:rg,invoke_i:bm,invoke_id:M_,invoke_ii:vm,invoke_iid:y_,invoke_iidiii:$m,invoke_iidiiid:Xm,invoke_iidiiiiidi:qm,invoke_iii:_m,invoke_iiid:Ym,invoke_iiididdddddd:jm,invoke_iiidiiiiiiii:Wm,invoke_iiii:Sm,invoke_iiiidddiiiii:u_,invoke_iiiii:Cm,invoke_iiiiid:U_,invoke_iiiiii:A_,invoke_iiiiiii:S_,invoke_iiiiiiii:v_,invoke_iiiiiiiidd:O_,invoke_iiiiiiiii:t_,invoke_iiiiiiiiid:Y_,invoke_iiiiiiiiii:b_,invoke_iiiiiiiiiidddiiiiiiiii:Vm,invoke_iiiiiiiiiii:E_,invoke_iiiiiiiiiiii:sg,invoke_iiiiiiiiiiiii:z_,invoke_iiij:T_,invoke_iiji:w_,invoke_j:ng,invoke_ji:$_,invoke_jiiii:R_,invoke_jij:H_,invoke_v:xm,invoke_vi:ym,invoke_vid:x_,invoke_viddd:P_,invoke_vidddd:D_,invoke_vidi:i_,invoke_vidiii:Hm,invoke_vif:Q_,invoke_vii:Em,invoke_viid:Qm,invoke_viiddi:N_,invoke_viiddidi:I_,invoke_viiddii:h_,invoke_viidi:Zm,invoke_viidii:Lm,invoke_viidiii:__,invoke_viidiiid:p_,invoke_viidiiiii:Gm,invoke_viidiiiiidi:g_,invoke_viidiiiiiiii:zm,invoke_viii:gm,invoke_viiid:Nm,invoke_viiidd:F_,invoke_viiidi:Jm,invoke_viiididdddddd:m_,invoke_viiidiiiiiiii:f_,invoke_viiii:Am,invoke_viiiiddd:L_,invoke_viiiidi:J_,invoke_viiiifi:Z_,invoke_viiiii:Mm,invoke_viiiiid:Im,invoke_viiiiii:Tm,invoke_viiiiiii:Dm,invoke_viiiiiiii:e_,invoke_viiiiiiiii:k_,invoke_viiiiiiiiii:X_,invoke_viiiiiiiiiidddiiiiiiiii:d_,invoke_viiiiiiiiiii:q_,invoke_viiiiiiiiiiid:Um,invoke_viiiiiiiiiiiii:V_,invoke_viiiiiiiiiiiiii:W_,invoke_viiiiiiiiiiiiiii:og,invoke_viiiiiiiiiiiiiiiiii:j_,invoke_viiiij:eg,invoke_viiij:Rm,invoke_viij:tg,invoke_viijii:ig,invoke_vij:G_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:C_,llvm_eh_typeid_for:em},Fi=await De();function _m(s,a,h){var f=V();try{return _e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function gm(s,a,h,f){var g=V();try{_e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function vm(s,a){var h=V();try{return _e(s)(a)}catch(f){if(X(h),!(f instanceof M))throw f;me(1,0)}}function ym(s,a){var h=V();try{_e(s)(a)}catch(f){if(X(h),!(f instanceof M))throw f;me(1,0)}}function xm(s){var a=V();try{_e(s)()}catch(h){if(X(a),!(h instanceof M))throw h;me(1,0)}}function Sm(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function Mm(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function Em(s,a,h){var f=V();try{_e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function wm(s,a,h,f,g,S){var b=V();try{return _e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function bm(s){var a=V();try{return _e(s)()}catch(h){if(X(a),!(h instanceof M))throw h;me(1,0)}}function Tm(s,a,h,f,g,S,b){var C=V();try{_e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function Am(s,a,h,f,g){var S=V();try{_e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function Rm(s,a,h,f,g){var S=V();try{_e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function Cm(s,a,h,f,g){var S=V();try{return _e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function Pm(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function Dm(s,a,h,f,g,S,b,C){var O=V();try{_e(s)(a,h,f,g,S,b,C)}catch(j){if(X(O),!(j instanceof M))throw j;me(1,0)}}function Lm(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function Fm(s,a,h,f,g,S,b){var C=V();try{return _e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function Im(s,a,h,f,g,S,b){var C=V();try{_e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function Nm(s,a,h,f,g){var S=V();try{_e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function Um(s,a,h,f,g,S,b,C,O,j,J,ne,ue){var se=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue)}catch(pe){if(X(se),!(pe instanceof M))throw pe;me(1,0)}}function Om(s,a,h,f,g,S,b,C,O,j){var J=V();try{return _e(s)(a,h,f,g,S,b,C,O,j)}catch(ne){if(X(J),!(ne instanceof M))throw ne;me(1,0)}}function km(s,a,h,f,g,S,b,C,O,j,J,ne,ue){var se=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue)}catch(pe){if(X(se),!(pe instanceof M))throw pe;me(1,0)}}function Bm(s,a,h,f,g,S,b){var C=V();try{return _e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function zm(s,a,h,f,g,S,b,C,O,j,J,ne){var ue=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne)}catch(se){if(X(ue),!(se instanceof M))throw se;me(1,0)}}function Hm(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function Gm(s,a,h,f,g,S,b,C,O){var j=V();try{_e(s)(a,h,f,g,S,b,C,O)}catch(J){if(X(j),!(J instanceof M))throw J;me(1,0)}}function Vm(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt,_t,tn,jt){var cn=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt,_t,tn,jt)}catch(Tt){if(X(cn),!(Tt instanceof M))throw Tt;me(1,0)}}function Wm(s,a,h,f,g,S,b,C,O,j,J,ne){var ue=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne)}catch(se){if(X(ue),!(se instanceof M))throw se;me(1,0)}}function Xm(s,a,h,f,g,S,b){var C=V();try{return _e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function jm(s,a,h,f,g,S,b,C,O,j,J,ne){var ue=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne)}catch(se){if(X(ue),!(se instanceof M))throw se;me(1,0)}}function $m(s,a,h,f,g,S){var b=V();try{return _e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function qm(s,a,h,f,g,S,b,C,O,j){var J=V();try{return _e(s)(a,h,f,g,S,b,C,O,j)}catch(ne){if(X(J),!(ne instanceof M))throw ne;me(1,0)}}function Ym(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function Km(s,a,h){var f=V();try{return _e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function Jm(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function Zm(s,a,h,f,g){var S=V();try{_e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function Qm(s,a,h,f){var g=V();try{_e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function e_(s,a,h,f,g,S,b,C,O){var j=V();try{_e(s)(a,h,f,g,S,b,C,O)}catch(J){if(X(j),!(J instanceof M))throw J;me(1,0)}}function t_(s,a,h,f,g,S,b,C,O){var j=V();try{return _e(s)(a,h,f,g,S,b,C,O)}catch(J){if(X(j),!(J instanceof M))throw J;me(1,0)}}function n_(s,a,h,f,g,S,b){var C=V();try{return _e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function i_(s,a,h,f){var g=V();try{_e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function r_(s,a,h,f,g){var S=V();try{return _e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function s_(s,a,h,f,g){var S=V();try{return _e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function o_(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function a_(s,a,h,f,g,S){var b=V();try{return _e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function c_(s,a){var h=V();try{return _e(s)(a)}catch(f){if(X(h),!(f instanceof M))throw f;me(1,0)}}function l_(s,a,h,f,g,S,b,C){var O=V();try{return _e(s)(a,h,f,g,S,b,C)}catch(j){if(X(O),!(j instanceof M))throw j;me(1,0)}}function h_(s,a,h,f,g,S,b){var C=V();try{_e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function u_(s,a,h,f,g,S,b,C,O,j,J,ne){var ue=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne)}catch(se){if(X(ue),!(se instanceof M))throw se;me(1,0)}}function d_(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt,_t,tn,jt,cn){var Tt=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt,_t,tn,jt,cn)}catch(Ii){if(X(Tt),!(Ii instanceof M))throw Ii;me(1,0)}}function f_(s,a,h,f,g,S,b,C,O,j,J,ne,ue){var se=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue)}catch(pe){if(X(se),!(pe instanceof M))throw pe;me(1,0)}}function p_(s,a,h,f,g,S,b,C){var O=V();try{_e(s)(a,h,f,g,S,b,C)}catch(j){if(X(O),!(j instanceof M))throw j;me(1,0)}}function m_(s,a,h,f,g,S,b,C,O,j,J,ne,ue){var se=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue)}catch(pe){if(X(se),!(pe instanceof M))throw pe;me(1,0)}}function __(s,a,h,f,g,S,b){var C=V();try{_e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function g_(s,a,h,f,g,S,b,C,O,j,J){var ne=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J)}catch(ue){if(X(ne),!(ue instanceof M))throw ue;me(1,0)}}function v_(s,a,h,f,g,S,b,C){var O=V();try{return _e(s)(a,h,f,g,S,b,C)}catch(j){if(X(O),!(j instanceof M))throw j;me(1,0)}}function y_(s,a,h){var f=V();try{return _e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function x_(s,a,h){var f=V();try{_e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function S_(s,a,h,f,g,S,b){var C=V();try{return _e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function M_(s,a){var h=V();try{return _e(s)(a)}catch(f){if(X(h),!(f instanceof M))throw f;me(1,0)}}function E_(s,a,h,f,g,S,b,C,O,j,J){var ne=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J)}catch(ue){if(X(ne),!(ue instanceof M))throw ue;me(1,0)}}function w_(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function b_(s,a,h,f,g,S,b,C,O,j){var J=V();try{return _e(s)(a,h,f,g,S,b,C,O,j)}catch(ne){if(X(J),!(ne instanceof M))throw ne;me(1,0)}}function T_(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function A_(s,a,h,f,g,S){var b=V();try{return _e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function R_(s,a,h,f,g){var S=V();try{return _e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;return me(1,0),0n}}function C_(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt,_t,tn,jt,cn,Tt,Ii,hg,ug,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,wg,bg,Tg,Ag,Rg,Cg,Pg,Dg,Lg,Fg,Ig,Ng,Ug,Og,kg,Bg,zg,Hg,Gg,Vg,Wg,Xg,jg,$g,qg,Yg,Kg,Jg,Zg,Qg,ev,tv,nv,iv,rv,sv,ov,av,cv,lv,hv,uv,dv,fv,pv,mv,_v){var gv=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt,_t,tn,jt,cn,Tt,Ii,hg,ug,dg,fg,pg,mg,_g,gg,vg,yg,xg,Sg,Mg,Eg,wg,bg,Tg,Ag,Rg,Cg,Pg,Dg,Lg,Fg,Ig,Ng,Ug,Og,kg,Bg,zg,Hg,Gg,Vg,Wg,Xg,jg,$g,qg,Yg,Kg,Jg,Zg,Qg,ev,tv,nv,iv,rv,sv,ov,av,cv,lv,hv,uv,dv,fv,pv,mv,_v)}catch(yh){if(X(gv),!(yh instanceof M))throw yh;me(1,0)}}function P_(s,a,h,f,g){var S=V();try{_e(s)(a,h,f,g)}catch(b){if(X(S),!(b instanceof M))throw b;me(1,0)}}function D_(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function L_(s,a,h,f,g,S,b,C){var O=V();try{_e(s)(a,h,f,g,S,b,C)}catch(j){if(X(O),!(j instanceof M))throw j;me(1,0)}}function F_(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function I_(s,a,h,f,g,S,b,C){var O=V();try{_e(s)(a,h,f,g,S,b,C)}catch(j){if(X(O),!(j instanceof M))throw j;me(1,0)}}function N_(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function U_(s,a,h,f,g,S){var b=V();try{return _e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function O_(s,a,h,f,g,S,b,C,O,j){var J=V();try{return _e(s)(a,h,f,g,S,b,C,O,j)}catch(ne){if(X(J),!(ne instanceof M))throw ne;me(1,0)}}function k_(s,a,h,f,g,S,b,C,O,j){var J=V();try{_e(s)(a,h,f,g,S,b,C,O,j)}catch(ne){if(X(J),!(ne instanceof M))throw ne;me(1,0)}}function B_(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function z_(s,a,h,f,g,S,b,C,O,j,J,ne,ue){var se=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue)}catch(pe){if(X(se),!(pe instanceof M))throw pe;me(1,0)}}function H_(s,a,h){var f=V();try{return _e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;return me(1,0),0n}}function G_(s,a,h){var f=V();try{_e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function V_(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se){var pe=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se)}catch(Xe){if(X(pe),!(Xe instanceof M))throw Xe;me(1,0)}}function W_(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe){var Xe=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe)}catch(lt){if(X(Xe),!(lt instanceof M))throw lt;me(1,0)}}function X_(s,a,h,f,g,S,b,C,O,j,J){var ne=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J)}catch(ue){if(X(ne),!(ue instanceof M))throw ue;me(1,0)}}function j_(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt){var _t=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe,lt,ot,Nt)}catch(tn){if(X(_t),!(tn instanceof M))throw tn;me(1,0)}}function $_(s,a){var h=V();try{return _e(s)(a)}catch(f){if(X(h),!(f instanceof M))throw f;return me(1,0),0n}}function q_(s,a,h,f,g,S,b,C,O,j,J,ne){var ue=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne)}catch(se){if(X(ue),!(se instanceof M))throw se;me(1,0)}}function Y_(s,a,h,f,g,S,b,C,O,j){var J=V();try{return _e(s)(a,h,f,g,S,b,C,O,j)}catch(ne){if(X(J),!(ne instanceof M))throw ne;me(1,0)}}function K_(s,a,h){var f=V();try{return _e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function J_(s,a,h,f,g,S,b){var C=V();try{_e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function Z_(s,a,h,f,g,S,b){var C=V();try{_e(s)(a,h,f,g,S,b)}catch(O){if(X(C),!(O instanceof M))throw O;me(1,0)}}function Q_(s,a,h){var f=V();try{_e(s)(a,h)}catch(g){if(X(f),!(g instanceof M))throw g;me(1,0)}}function eg(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function tg(s,a,h,f){var g=V();try{_e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function ng(s){var a=V();try{return _e(s)()}catch(h){if(X(a),!(h instanceof M))throw h;return me(1,0),0n}}function ig(s,a,h,f,g,S){var b=V();try{_e(s)(a,h,f,g,S)}catch(C){if(X(b),!(C instanceof M))throw C;me(1,0)}}function rg(s,a,h,f){var g=V();try{return _e(s)(a,h,f)}catch(S){if(X(g),!(S instanceof M))throw S;me(1,0)}}function sg(s,a,h,f,g,S,b,C,O,j,J,ne){var ue=V();try{return _e(s)(a,h,f,g,S,b,C,O,j,J,ne)}catch(se){if(X(ue),!(se instanceof M))throw se;me(1,0)}}function og(s,a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe){var lt=V();try{_e(s)(a,h,f,g,S,b,C,O,j,J,ne,ue,se,pe,Xe)}catch(ot){if(X(lt),!(ot instanceof M))throw ot;me(1,0)}}var vh;function ag(){hh(),B()}function Ya(){if(Ne>0){Ke=Ya;return}if(ag(),Ye(),Ne>0){Ke=Ya;return}function s(){R(!vh),vh=!0,t.calledRun=!0,!N&&(Oe(),Ve?.(t),t.onRuntimeInitialized?.(),Z("onRuntimeInitialized"),R(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),It())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),F()}function cg(){var s=P,a=L,h=!1;P=L=f=>{h=!0};try{ja(0),["stdout","stderr"].forEach(f=>{var g=w.analyzePath("/dev/"+f);if(g){var S=g.object,b=S.rdev,C=Pe.ttys[b];C?.output?.length&&(h=!0)}})}catch{}P=s,L=a,h&&Ie("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function lg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Z("preInit")}lg(),Ya(),yt?e=t:e=new Promise((s,a)=>{Ve=s,it=a});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){Y(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const YM=""+new URL("assets/mujoco-CGsuVDfV.wasm",import.meta.url).href;function Eu(i,e,t){return Math.max(e,Math.min(t,i))}function cs(i){if(!i||i.dtype!=="float32-le"||!Array.isArray(i.shape)||typeof i.data_b64!="string")throw new Error("Invalid float32 blob");const e=atob(i.data_b64),t=new Uint8Array(e.length);for(let o=0;o<e.length;o++)t[o]=e.charCodeAt(o);const n=i.shape.reduce((o,c)=>o*c,1);if(t.byteLength!==n*4)throw new Error(`Float blob byte size mismatch: got ${t.byteLength}, expected ${n*4}`);const r=new Float32Array(t.buffer);return new Float32Array(r)}class KM{constructor(e){if(this.w=cs(e.w),this.b=cs(e.b),this.inDim=e.w.shape[0],this.outDim=e.w.shape[1],this.w.length!==this.inDim*this.outDim||this.b.length!==this.outDim)throw new Error("Dense layer shape mismatch");this.out=new Float32Array(this.outDim)}forward(e,t=!1){const n=this.out,r=this.w,o=this.b,c=this.inDim,l=this.outDim;for(let u=0;u<l;u++)n[u]=o[u];for(let u=0;u<c;u++){const d=e[u],m=u*l;for(let p=0;p<l;p++)n[p]+=d*r[m+p]}if(t)for(let u=0;u<l;u++)n[u]=Math.tanh(n[u]);return n}}class wu{constructor(e){if(this.bundle=e,this.obsDim=e.policy.obs_dim,this.actionDim=e.policy.action_dim,this.mean=cs(e.observation.mean),this.std=cs(e.observation.std),this.mask=cs(e.observation.normalize_mask),this.layers=e.policy.layers.map(t=>new KM(t)),this.normalized=new Float32Array(this.obsDim),this.action=new Float32Array(this.actionDim),this.mean.length!==this.obsDim||this.std.length!==this.obsDim||this.mask.length!==this.obsDim)throw new Error("Observation normalizer length mismatch")}infer(e){if(e.length!==this.obsDim)throw new Error(`Observation length ${e.length} != ${this.obsDim}`);const t=this.normalized;for(let c=0;c<this.obsDim;c++)this.mask[c]>.5?t[c]=Eu((e[c]-this.mean[c])/Math.max(this.std[c],1e-8),-10,10):t[c]=e[c];const n=this.layers[0].forward(t,!0),r=this.layers[1].forward(n,!0),o=this.layers[2].forward(r,!1);for(let c=0;c<this.actionDim;c++)this.action[c]=Eu(o[c],-1,1);return this.action}}const Lr=.035,Fr=.6,ef=[[.035,-.05,-.025],[.035,.05,-.025],[-.04,0,-.025]],Mi=(i,e,t)=>Math.min(t,Math.max(e,i)),sn=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],ls=i=>Math.sqrt(sn(i,i)),qc=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],br=i=>{const e=Math.max(1e-8,ls(i));return i.map(t=>t/e)},yo=(i,e)=>i.map((t,n)=>t-e[n]),Xi=(i,e)=>i.map(t=>t*e);function ua(i,e){return[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]]}function Yc(i,e,t){const n=c=>i[2]+e[2]*c-t(i[0]+e[0]*c,i[1]+e[1]*c);if(e[2]>-.3||n(Lr)<0||n(Fr)>0)return 0;let r=Lr,o=Fr;for(let c=0;c<19;c++){const l=(r+o)/2;n(l)>0?r=l:o=l}return(r+o)/2}function JM(i,e){const t={valid:!1,depth:0,forward:0,side:0,confidence:0};if(i.some(y=>!Number.isFinite(y)||y<Lr||y>Fr))return t;const n=ef.map((y,E)=>[y[0],y[1],y[2]-i[E]]),r=qc(yo(n[1],n[0]),yo(n[2],n[0])),o=.5*ls(r);if(o<1e-4||ls(e)<.1)return t;const c=Xi(br(e),-1);let l=br(r);sn(l,c)<0&&(l=Xi(l,-1));const u=sn(l,c);let d=yo([1,0,0],Xi(c,c[0]));if(ls(d)<.5||u<=.1)return t;d=br(d);const p=qc(c,d),_=-sn(l,n[0])/(Math.abs(l[2])>.1?l[2]:1);return!Number.isFinite(_)||_<Lr||_>Fr?t:{valid:!0,depth:_,forward:Math.atan2(-sn(l,d),u),side:Math.atan2(-sn(l,p),u),confidence:Mi(o/.00375,0,1)*Mi(u/.6,0,1)}}function Wn(){return Math.sqrt(-2*Math.log(Math.max(1e-8,Math.random())))*Math.cos(2*Math.PI*Math.random())}class ZM{constructor(e){if(!["sim2real_232","terrain_360"].includes(e?.schema))throw new Error("Sensor contract missing");this.settings=e.settings,this.ring=[],this.frame=0,this.bias=[0,0,0]}synth(e,t=!0){const n=this.settings,r=t?n.sensor_noise_scale:0,o=ua(e.R,[0,0,-1]),c=ef.map(p=>{const _=ua(e.R,p),y=e.torso.map((x,v)=>x+_[v]),E=Yc(y,o,e.heightAt);if(!E)return 0;const T=E+Wn()*r*.0015;return T>=Lr&&T<=Fr?T:0}),l=Yc(e.torso,o,e.heightAt),u=e.gyro.map((p,_)=>p+this.bias[_]+Wn()*r*.025),d=l>=Lr&&l<=Fr,m=d?[-e.vbody[0]/l+e.gyro[1]+Wn()*r*.035,-e.vbody[1]/l-e.gyro[0]+Wn()*r*.035]:[0,0];return{ranges:c,beams:c.map(p=>p!==0),flow:m,flowValid:d,flowGyro:u,imuGyro:u,tofAge:0,flowAge:0}}reset(e,t=!0){this.frame=0,this.bias=t?this.bias.map(()=>Wn()*this.settings.gyro_bias_std_rad_s):[0,0,0];const n=this.synth(e,t);this.ring=Array.from({length:4},()=>({...n,ranges:n.ranges.slice(),beams:n.beams.slice(),flow:n.flow.slice(),flowGyro:n.flowGyro.slice(),imuGyro:n.imuGyro.slice()}))}advance(e,t=!0){this.frame++;const n=this.settings,r=this.synth(e,t),o=this.ring[3],c=this.frame%n.tof_period_frames===0,l=this.frame%n.flow_period_frames===0,u=t&&Math.random()<n.tof_dropout_prob,d=t&&Math.random()<n.flow_dropout_prob,m={ranges:c?u?[0,0,0]:r.ranges:o.ranges.slice(),beams:c?u?[!1,!1,!1]:r.beams:o.beams.slice(),flow:l?d?[0,0]:r.flow:o.flow.slice(),flowValid:l?r.flowValid&&!d:o.flowValid,flowGyro:l?r.flowGyro:o.flowGyro.slice(),imuGyro:r.imuGyro,tofAge:c?0:o.tofAge+1,flowAge:l?0:o.flowAge+1};this.ring.shift(),this.ring.push(m)}read(e){const t=this.settings,n=this.ring[3-t.tof_delay_frames],r=this.ring[3-t.flow_delay_frames],o=JM(n.ranges,e),c=o.valid&&n.beams.every(Boolean),l=c&&r.flowValid,u=c?o.depth:0,d=l?[-u*(r.flow[0]-r.flowGyro[1]),-u*(r.flow[1]+r.flowGyro[0])]:[0,0],m=Mi(1-.25*(n.tofAge/t.tof_period_frames+r.flowAge/t.flow_period_frames),.25,1),p=Mi(1-.25*n.tofAge/t.tof_period_frames,.25,1);return{gyro:this.ring[3].imuGyro,velocity:d,depth:u,velocityConfidence:l?m:0,forwardGrade:c?o.forward:0,sideGrade:c?o.side:0,groundConfidence:c?o.confidence*p:0}}}const QM=45,Lc=1.5,Mr=Math.tan(QM*Math.PI/360),eE=[[0,0],[-1,-1],[-1,1],[1,-1],[1,1]];function tf(i,e,t,n){const r=e*Math.PI/180,o=Math.cos(r),c=Math.sin(r),l=1/Math.hypot(1,t,n),u=(o+c*n)*l,d=t*l,m=(-c+o*n)*l;return[i[0]*u+i[1]*d+i[2]*m,i[3]*u+i[4]*d+i[5]*m,i[6]*u+i[7]*d+i[8]*m]}function tE(i,e,{forward:t=0,tilt:n=70,height:r=-.04}={}){if(![t,n,r].every(Number.isFinite)||t<0||t>.2||n<0||n>90)throw new Error("Depth mount must be forward 0–200 mm, tilt 0–90°");const o=[e[0]*t+e[1]*0+e[2]*r,e[3]*t+e[4]*0+e[5]*r,e[6]*t+e[7]*0+e[8]*r],c=i.map((u,d)=>u+o[d]),l=[];for(let u=0;u<4;u++)for(let d=0;d<4;d++){const m=[],p=(d-1.5)*Mr/2,_=(1.5-u)*Mr/2;for(const[y,E]of eE)m.push(tf(e,n,p+y*Mr/8,_+E*Mr/8));l.push(m)}return{origin:c,directions:l}}function nE(i,{tilt:e=70}={}){if(!Number.isFinite(e)||e<0||e>90)throw new Error("Depth grid tilt must be 0–90°");return Array.from({length:25},(t,n)=>{const r=Math.floor(n/5),c=(n%5/2-1)*Mr,l=(1-r/2)*Mr;return tf(i,e,c,l)})}function iE(i,e,{subrays:t=4,noise:n=0,dropout:r=0}={}){if(![1,4,5].includes(t))throw new Error("Expected 1, 4 or 5 depth rays per zone");const o=t===1?[0]:t===4?[1,2,3,4]:[0,1,2,3,4],c=[],l=[],u=[],d=[],m=[];for(const p of i.directions){const _=[];for(const A of o){const N=e(i.origin,p[A],Lc),R=Number(typeof N=="number"?N:N?.distance);Number.isFinite(R)&&R>=.02&&R<=Lc&&_.push({distance:R,kind:N?.kind||"terrain",surface:N?.surface??null,ray:p[A]})}_.sort((A,N)=>A.distance-N.distance);let E=_.length/o.length>=.6;const T=E?_[Math.floor((_.length-1)/2)]:null;let x=T?T.distance:0;E&&n&&(x+=n*(Math.random()-.5)*2),E=E&&x>=.02&&x<=Lc&&Math.random()>=r,c.push(E?x:0),l.push(E),d.push(E&&_.some(A=>A.kind==="self"));const v=new Set(_.map(A=>A.surface??A.kind));m.push(E&&v.size>1);const P=E?T.ray:p[0],L=E?T.distance:.55;u.push(i.origin.map((A,N)=>A+L*P[N]))}return{ranges:c,valid:l,origin:i.origin,hitPoints:u,selfOccluded:d,mixed:m}}function nf(i){const e=[];for(const t of[40,60,80,100])for(const n of[-22.5,-7.5,7.5,22.5]){const r=t*Math.PI/180,o=n*Math.PI/180;e.push(ua(i,[Math.cos(r)*Math.cos(o),Math.cos(r)*Math.sin(o),-Math.sin(r)]))}return e}function rf(i,e,t,n,r,o=null){let c=1/0;const l=n.geom_xpos,u=n.geom_xmat,d=t.geom_type,m=t.geom_size,p=t.geom_bodyid;for(let y=0;y<Number(t.ngeom);y++){if(Number(p[y])!==0)continue;const E=Number(d[y]),T=3*y,x=9*y,v=[i[0]-l[T],i[1]-l[T+1],i[2]-l[T+2]];if(E===0){const P=[u[x+2],u[x+5],u[x+8]],L=sn(e,P);if(L<-1e-6){const A=-sn(v,P)/L;A>0&&(c=Math.min(c,A))}}else if(E===6){let P=-1/0,L=1/0;for(let A=0;A<3;A++){const N=[u[x+A],u[x+3+A],u[x+6+A]],R=sn(v,N),U=sn(e,N),B=m[T+A];if(Math.abs(U)<1e-7){if(Math.abs(R)>B){L=-1/0;break}}else{const F=(-B-R)/U,M=(B-R)/U;P=Math.max(P,Math.min(F,M)),L=Math.min(L,Math.max(F,M))}}if(L>=Math.max(P,0)){const A=P>0?P:L;A>0&&(c=Math.min(c,A))}}}if(o){const y=Yc(i,e,o);y>0&&(c=Math.min(c,y))}let _=1/0;for(const y of r){const E=y*3,T=[i[0]-l[E],i[1]-l[E+1],i[2]-l[E+2]],x=sn(e,T),v=sn(T,T)-m[E]*m[E],P=x*x-v;if(P<0)continue;const L=-x-Math.sqrt(P),A=-x+Math.sqrt(P),N=L>1e-6?L:A;N>1e-6&&(_=Math.min(_,N))}return _>=c&&c>=.04&&c<=1.5?c:0}class rE{constructor(e){if(e?.schema!=="terrain_360")throw new Error("Schema-9 terrain contract required");this.settings=e.settings,this.frame=0,this.ring=[]}sample(e,t,n,r,o=!0){const c=o?this.settings.sensor_noise_scale:0,l=e.terrainHeightAt||null,u=nf(e.R).map(d=>{const m=rf(e.torso,d,t,n,r,l);return m?Mi(m+c*.002*Wn(),.04,1.5):0});return{ranges:u,valid:u.map(d=>d>0)}}reset(e,t,n,r,o=!0){this.frame=0;const c=this.sample(e,t,n,r,o);this.ring=Array.from({length:4},()=>({ranges:c.ranges.slice(),valid:c.valid.slice()}))}advance(e,t,n,r,o=!0){this.frame++;const c=this.ring[3],l=this.settings,u=this.frame%l.tof_period_frames===0,d=o&&Math.random()<l.tof_dropout_prob,m=u?this.sample(e,t,n,r,o):c,p={ranges:u?d?Array(16).fill(0):m.ranges.slice():c.ranges.slice(),valid:u?d?Array(16).fill(!1):m.valid.slice():c.valid.slice()};this.ring.shift(),this.ring.push(p)}read(){const e=this.ring[3-this.settings.tof_delay_frames];return{ranges:e.ranges,valid:e.valid}}}function sE(i,e,t){const n={valid:!1,depth:0,forward:0,side:0,confidence:0,residual:1/0,count:0},r=nf([1,0,0,0,1,0,0,0,1]),o=[[5e-5,0,0],[0,5e-5,0],[0,0,1e-7]],c=[0,0,0];let l=0;const u=[];for(let M=0;M<16;M++){const H=i[M];if(!e[M]||!Number.isFinite(H)||H<.04||H>1.5)continue;const K=Xi(r[M],H),Z=[K[0],K[1],1];u.push(K),l++;for(let Q=0;Q<3;Q++){c[Q]+=Z[Q]*K[2];for(let oe=0;oe<3;oe++)o[Q][oe]+=Z[Q]*Z[oe]}}if(l<6||ls(t)<.1)return{...n,count:l};const d=o.map((M,H)=>[...M,c[H]]);for(let M=0;M<3;M++){let H=M;for(let Z=M+1;Z<3;Z++)Math.abs(d[Z][M])>Math.abs(d[H][M])&&(H=Z);if(Math.abs(d[H][M])<1e-9)return{...n,count:l};[d[H],d[M]]=[d[M],d[H]];const K=d[M][M];for(let Z=M;Z<4;Z++)d[M][Z]/=K;for(let Z=0;Z<3;Z++){if(Z===M)continue;const Q=d[Z][M];for(let oe=M;oe<4;oe++)d[Z][oe]-=Q*d[M][oe]}}const[m,p,_]=d.map(M=>M[3]),y=Math.sqrt(u.reduce((M,H)=>M+(m*H[0]+p*H[1]+_-H[2])**2,0)/l),E=Xi(br(t),-1);let T=br([-m,-p,1]);sn(T,E)<0&&(T=Xi(T,-1));const x=sn(T,E),v=br(yo([1,0,0],Xi(E,E[0]))),P=qc(E,v),L=-_,A=y<.008&&x>.25&&L>=.035&&L<=.6&&Number.isFinite(L),N=[9,10,13,14],R=[];for(const M of N)e[M]&&Number.isFinite(i[M])&&i[M]>=.04&&R.push(i[M]*-r[M][2]);const U=R.length>=2?R.reduce((M,H)=>M+H,0)/R.length:0,B=A?L:U,F=A||R.length>=2&&B>=.035&&B<=.6;return{valid:A,depthValid:F,depth:F?B:0,forward:A?Math.atan2(-sn(T,v),x):0,side:A?Math.atan2(-sn(T,P),x):0,confidence:A?Mi(l/12,0,1)*Mi(1-y/.008,0,1):0,residual:y,count:l}}class oE{constructor(e){if(e?.sensor_model_revision!=="forward_tof4x4_array_plane_fit_no_tripod_2")throw new Error("Expected array-only terrain sensor");this.settings=e.settings,this.ring=[],this.frame=0,this.bias=[0,0,0]}synth(e,t,n,r=!0){const o=this.settings,c=r?o.sensor_noise_scale:0,l=ua(e.R,[0,0,-1]),u=rf(e.torso,l,t,n,[],e.terrainHeightAt||null),d=e.gyro.map((_,y)=>_+this.bias[y]+Wn()*c*.025),m=u>=.035&&u<=.6,p=m?[-e.vbody[0]/u+e.gyro[1]+Wn()*c*.035,-e.vbody[1]/u-e.gyro[0]+Wn()*c*.035]:[0,0];return{gyro:d,flow:p,flowGyro:d.slice(),flowValid:m,flowAge:0}}reset(e,t,n,r=!0){this.frame=0,this.bias=r?this.bias.map(()=>Wn()*this.settings.gyro_bias_std_rad_s):[0,0,0];const o=this.synth(e,t,n,r);this.ring=Array.from({length:4},()=>({...o,gyro:o.gyro.slice(),flow:o.flow.slice(),flowGyro:o.flowGyro.slice()}))}advance(e,t,n,r=!0){this.frame++;const o=this.settings,c=this.ring[3],l=this.synth(e,t,n,r),u=this.frame%o.flow_period_frames===0,d=r&&Math.random()<o.flow_dropout_prob,m={gyro:l.gyro,flow:u?d?[0,0]:l.flow:c.flow.slice(),flowGyro:u?l.flowGyro:c.flowGyro.slice(),flowValid:u?l.flowValid&&!d:c.flowValid,flowAge:u?0:c.flowAge+1};this.ring.shift(),this.ring.push(m)}read(e,t){const n=this.settings,r=this.ring[3-n.flow_delay_frames],o=sE(t.ranges,t.valid,e),c=o.depthValid&&r.flowValid,l=o.valid?o.depth:0,u=c?[-l*(r.flow[0]-r.flowGyro[1]),-l*(r.flow[1]+r.flowGyro[0])]:[0,0],d=Mi(1-.25*(r.flowAge/n.flow_period_frames),.25,1);return{gyro:this.ring[3].gyro,velocity:u,velocityConfidence:c?d:0,depth:l,forwardGrade:o.forward,sideGrade:o.side,groundConfidence:o.confidence}}}const bu=.85,aE=.44,Tu=.24;function Fc(i,e){if(!Number.isFinite(i)||!Number.isFinite(e))throw new Error("Invalid camera timing");return 1-Math.exp(-Math.max(0,Math.min(i,.1))*Math.max(0,e))}function cE(i,e,t){if(![i,e,t].every(Number.isFinite))throw new Error("Invalid camera heading");const n=Math.atan2(Math.sin(e-i),Math.cos(e-i)),r=i+n*Math.max(0,Math.min(1,t));return Math.atan2(Math.sin(r),Math.cos(r))}function lE(i,e,t=()=>0){if(i.length!==3||!i.every(Number.isFinite)||!Number.isFinite(e))throw new Error("Invalid chase camera pose");const n=Math.cos(e),r=Math.sin(e),o=i[0]-bu*n,c=i[1]-bu*r,l=Number(t(o,c))||0,u=Number(t(i[0],i[1]))||0;return{position:[o,c,Math.max(i[2]+aE,l+.43)],target:[i[0]+Tu*n,i[1]+Tu*r,Math.max(i[2]+.015,u+.17)]}}function hE({vx:i,vy:e},t,n=Math.random){const r=.85+.35*n(),o=Math.max(.05,Number(t.phase_speed_reference_mps??.6)),c=Math.hypot(Number(i)||0,Number(e)||0),l=Math.max(0,Math.min(1.5,c/o));return Math.min(Number(t.phase_rate_max_hz??2.6),r+Number(t.phase_speed_gain??.75)*l)}const vi=(i,e,t)=>Math.max(e,Math.min(t,i));function uE(i,e,t,n,r){const o=e>=0?e*r.vx_max:-e*r.vx_min,c=-i*r.vy_abs,l=-vi(t,-1,1)*r.yaw_abs,u=-n*r.pitch_abs_rad;return{vx:o,vy:c,yaw:l,pitch:u}}const ts=i=>Math.atan2(Math.sin(i),Math.cos(i)),da=1;function dE(i,e,t,n,r){if(!Number.isFinite(t)||!Number.isFinite(e))return vi(i,-r,r);const o=vi(ts(e-t),-da,da);return vi(n*o,-r,r)}function fE(i,e,t,n,r,o,c,l){const u=Math.max(0,4*Math.min(Math.max(r,0),.1)),d=e-i,m=vi(o?e:i+vi(d,-u,u),-l,l);if(!o||!Number.isFinite(n))return{requestedYaw:m,appliedYaw:m,headingTarget:Number.isFinite(n)?ts(n):t};const p=ts(t+m*Math.max(0,r)),_=vi(ts(p-n),-da,da),y=ts(n+_);return{requestedYaw:m,headingTarget:y,appliedYaw:dE(m,y,n,c,l)}}function pE(i,e,t,n){if(i.length!==9)throw new Error("expected MuJoCo 3x3 torso rotation");const[r,o,c]=e,l=(t[0]+n[0])/2,u=(t[1]+n[1])/2,d=(t[2]+n[2])/2,m=r-l,p=o-u,_=c-d,y=i[0],E=i[3],T=Math.hypot(y,E),x=T>1e-6?(m*y+p*E)/T:0,v=Math.atan2(x,_),P=Math.atan2(-i[6],i[8]);return{robotLean:v,chassisPitch:P}}const Au=.85,ps=4.2,Pl=10,mE=11,_E=129,sf=Object.freeze({gentle:Object.freeze({up:1.2,down:1.5,crest:1.5,log:1.5,ridge:.9,banks:.7,camber:.9,ripple:.6}),balanced:Object.freeze({up:2,down:2.5,crest:2.5,log:2.4,ridge:1.5,banks:1.4,camber:1.5,ripple:1.2}),stretch:Object.freeze({up:3,down:3.5,crest:5,log:4,ridge:3,banks:2.5,camber:3,ripple:2.4})}),ms=(i,e,t)=>Math.max(e,Math.min(t,i)),qt=i=>Number(i.toFixed(6)),gE=`
  <geom name="viewer_ramp_up" type="box" pos="1.25 0 0.0005"
        size="0.4 0.44 0.008" euler="0 -1 0" friction="1.5 0.005 0.0001" rgba="0.23 0.50 0.47 1" />
  <geom name="viewer_ramp_top" type="box" pos="1.91 0 0.0075"
        size="0.26 0.44 0.008" friction="1.5 0.005 0.0001" rgba="0.28 0.56 0.51 1" />
  <geom name="viewer_ramp_down" type="box" pos="2.57 0 0.0005"
        size="0.4 0.44 0.008" euler="0 1 0" friction="1.5 0.005 0.0001" rgba="0.23 0.50 0.47 1" />
`;function Kc(i,e=Pl){return ms(i-ps+1,0,ms(e,1,20))}const vE=i=>(i=ms(i,0,1),i*i*(3-2*i));function yE(i){let e=i|0||1;return()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296)}function xE(i,e,t=Pl,n=733){const r=Math.hypot(i,e);if(r<=ps)return 0;const o=Kc(r,t),c=vE((r-ps)/1.8),l=n*.00713,u=.36*Math.sin(i*.9+l)*Math.cos(e*.8-l)+.27*Math.sin(1.8*i+.7*e+l*1.2)+.19*Math.cos(2.4*e-.8*i-l*.5)+.13*Math.sin(i*3.3+e*2.1+l*1.9);return Math.max(0,c*.027*o*(.85+u))}function of({maxDegrees:i=Pl,seed:e=733,radius:t=mE,resolution:n=_E,trees:r=!0,features:o=!0,challengeLevel:c="balanced"}={}){if(!Object.prototype.hasOwnProperty.call(sf,c))throw new Error("Unknown park challenge level");if(!Number.isFinite(i)||i<1||i>20)throw new Error("Terrain maximum must be 1–20 degrees");if(!Number.isInteger(n)||n<17||n>257||n%2!==1)throw new Error("Terrain resolution must be odd, 17–257");const l=2*t/(n-1),u=new Float32Array(n*n),d=(x,v)=>v*n+x,m=x=>-t+x*l;for(let x=0;x<n;x++)for(let v=0;v<n;v++)u[d(v,x)]=xE(m(v),m(x),i,e);const p=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]];for(let x=0;x<35;x++){let v=!1;for(let P=0;P<n;P++)for(let L=0;L<n;L++){const A=d(L,P),N=Math.hypot(m(L),m(P));if(N<=ps){u[A]=0;continue}let R=u[A];for(const[U,B]of p){const F=L+U,M=P+B;if(F<0||M<0||F>=n||M>=n)continue;const H=Math.hypot(m(F),m(M)),K=Math.min(Kc(N,i),Kc(H,i)),Z=u[d(F,M)]+Math.tan(K*Math.PI/180)*l*Math.hypot(U,B)*.55;R=Math.min(R,Z)}R<u[A]-1e-7&&(u[A]=R,v=!0)}if(!v)break}const _=Math.max(.001,...u),y=(x,v)=>{const P=ms((x+t)/l,0,n-1.00001),L=ms((v+t)/l,0,n-1.00001),A=Math.floor(P),N=Math.floor(L),R=P-A,U=L-N,B=u[d(A,N)],F=u[d(A+1,N)],M=u[d(A,N+1)],H=u[d(A+1,N+1)];return B*(1-R)*(1-U)+F*R*(1-U)+M*(1-R)*U+H*R*U},E=[];if(r){const x=yE(e+9041);for(let v=0;v<650&&E.length<17;v++){const P=x()*Math.PI*2,L=5.4+Math.sqrt(x())*(t-6),A=Math.cos(P)*L,N=Math.sin(P)*L;if(E.some(U=>Math.hypot(A-U.x,N-U.y)<1.55))continue;const R=1.05+x()*.85;E.push({x:A,y:N,z:y(A,N),trunkHeight:R,trunkRadius:.065+x()*.045,canopyRadius:.41+x()*.28,shade:x()})}}const T=o?SE(c):[];return{radius:t,resolution:n,cell:l,heights:u,maxHeight:_,trees:E,features:T,challengeLevel:c,sampleHeight:y,maxDegrees:i,flatRadius:ps,seed:e}}function SE(i="balanced"){const e=sf[i];if(!e)throw new Error("Unknown park challenge level");const t=x=>x/100,n=x=>x.toFixed(1)+" cm",r=(x,v,P,L,A,N,R,U="0.47 0.59 0.40 1",B=0)=>'<geom name="park_feature_'+x+'" type="box" pos="'+[v,P,L].map(qt).join(" ")+'" size="'+[A,N,R].map(qt).join(" ")+'" euler="0 0 '+B+'" friction="1.5 .005 .0001" rgba="'+U+'"/>',o=(x,v,P,L,A,N=0,R=.34)=>{const U=Math.atan2(A-L,P-v),B=.18,F=(v+P)/2+B*Math.sin(U),M=(L+A)/2-B*Math.cos(U);return'<geom name="park_feature_'+x+'" type="box" pos="'+[F,N,M].map(qt).join(" ")+'" size="'+[(P-v)/(2*Math.cos(U)),R,B].map(qt).join(" ")+'" euler="0 '+qt(-U*180/Math.PI)+' 0" friction="1.5 .005 .0001" rgba="0.36 0.61 0.53 1"/>'},c=(x,v,P,L,A,N)=>{const R=Math.atan2(N-A,L-P),U=.18,B=(P+L)/2,F=(A+N)/2,M=B+U*Math.sin(R),H=F-U*Math.cos(R),K=Math.cos(R/2),Z=Math.sin(R/2),Q=Math.SQRT1_2,oe=[Q*K,Q*Z,-Q*Z,Q*K];return'<geom name="park_feature_'+x+'" type="box" pos="'+[v,M,H].map(qt).join(" ")+'" size="'+[(L-P)/(2*Math.cos(R)),.34,U].map(qt).join(" ")+'" quat="'+oe.map(qt).join(" ")+'" friction="1.5 .005 .0001" rgba="0.36 0.61 0.53 1"/>'},l=(x,v,P,L,A,N,R)=>({id:x,label:v,x:P,y:L,radius:A,challenge:N,geoms:R}),u=t(e.up),d=t(e.down),m=t(e.crest),p=t(e.log),_=t(e.ridge),y=t(e.banks),E=t(e.camber),T=t(e.ripple);return[l("step-up","Step up",2.8,0,.58,n(e.up)+" raised support, then step down",r("step_up",2.8,0,u/2,.42,.33,u/2)),l("camber","Changing camber",2.1,2.16,.66,n(e.camber)+" gentle cross-grade ridge",[c("camber_in",2.1,1.78,2.16,0,E),c("camber_out",2.1,2.16,2.54,E,0)].join(`
`)),l("crest","Rounded crest",0,2.85,.78,n(e.crest)+" flat-to-incline-to-flat-to-descent",[c("crest_rise",0,2.2,2.64,0,m),r("crest_top",0,2.83,m/2,.195,.34,m/2,"0.36 0.61 0.53 1",90),c("crest_fall",0,3.02,3.46,m,0)].join(`
`)),l("angled","Diagonal ridge",-2.12,2.11,.56,n(e.ridge)+" support lip at 29 degrees",r("angled_ridge",-2.12,2.11,_/2,.045,.4,_/2,"0.64 0.50 0.31 1",29)),l("step-down","Gentle approach, step down",-2.7,0,.9,"Walk up a ramp, then drop "+n(e.down),[o("drop_entry",-2.39,-1.98,d,0),r("drop_plateau",-2.63,0,d/2,.245,.33,d/2,"0.53 0.48 0.35 1")].join(`
`)),l("ripple","Rolling ripples",-2.1,-2.15,.72,"Two shallow "+n(e.ripple)+" humps",[c("ripple_a_up",-2.1,-2.68,-2.44,0,T),c("ripple_a_down",-2.1,-2.44,-2.2,T,0),c("ripple_b_up",-2.1,-2.2,-1.96,0,T*.8),c("ripple_b_down",-2.1,-1.96,-1.72,T*.8,0)].join(`
`)),l("log","Low round log",0,-2.8,.58,n(e.log)+" rounded obstacle (full diameter)",'<geom name="park_feature_log" type="cylinder" pos="0 -2.80 '+qt(p/2)+'" size="'+[qt(p/2),.47].join(" ")+'" euler="90 0 0" friction="1.5 .005 .0001" rgba=".58 .40 .24 1"/>'),l("trough","Double-bank valley",2.08,-2.15,.86,"Two "+n(e.banks)+" banks with a level middle",r("trough_near",1.7,-2.15,y/2,.16,.38,y/2,"0.50 0.55 0.40 1")+`
`+r("trough_far",2.48,-2.15,y/2,.16,.38,y/2,"0.50 0.55 0.40 1"))]}function ME(i){const{resolution:e,radius:t,maxHeight:n,heights:r,trees:o,features:c=[]}=i,l=[];for(let _=e-1;_>=0;_--)for(let y=0;y<e;y++)l.push(qt(r[_*e+y]/n));const u=`<hfield name="viewer_park_hfield" nrow="${e}" ncol="${e}"
    size="${t} ${t} ${qt(n)} 0.20"
    elevation="${l.join(" ")}" />`,d='<geom name="viewer_park_ground" type="hfield" hfield="viewer_park_hfield" pos="0 0 '+qt(i.zOffset||0)+'" friction="1.5 0.005 0.0001" rgba="0.31 0.53 0.25 1" />',m=o.map((_,y)=>`<geom name="viewer_tree_trunk_${y}" type="cylinder"
    pos="${qt(_.x)} ${qt(_.y)} ${qt(_.z+_.trunkHeight/2)}"
    size="${qt(_.trunkRadius)} ${qt(_.trunkHeight/2)}"
    friction="1.5 0.005 0.0001" rgba="0.29 0.18 0.10 1" />`).join(`
`),p=c.map(_=>_.geoms).join(`
`);return{asset:u,geometry:d+`
`+m+`
`+p}}const EE=Object.freeze([["flat","Flat reference"],["step-up-1cm","1 cm training step up"],["step-up-2cm","2 cm training step up"],["step-up","5 cm step up"],["step-down","5 cm step down"],["crest","Hill crest"],["trough","Hill trough"],["log","Half-round log"],["angled","Angled ridge"],["lab-uphill","Custom uphill"],["lab-downhill","Custom downhill"],["lab-camber-left","Custom left camber"],["lab-camber-right","Custom right camber"],["lab-step-up","Custom step up"],["lab-step-down","Custom step down"]]),af=new Set(["lab-uphill","lab-downhill","lab-camber-left","lab-camber-right"]);function Dl(i,e=3){if(!af.has(i))return null;if(!Number.isFinite(e)||e<.5||e>12)throw new Error("Surface lab incline must be 0.5–12 degrees");const t=Math.tan(e*Math.PI/180);return{gx:i==="lab-uphill"?t:i==="lab-downhill"?-t:0,gy:i==="lab-camber-left"?t:i==="lab-camber-right"?-t:0}}function wE(i,e){const{gx:t,gy:n}=Dl(i,e),r=.25,o=e*Math.PI/180,c=t+n<0?-1:1,l=t!==0,u=l?r*Math.sin(o)*c:0,d=l?0:r*Math.sin(o)*c,m=-r*Math.cos(o),p=l?"0 "+-c*e+" 0":c*e+" 0 0";return'<geom name="surface_lab_plane" type="box" pos="'+[u,d,m].map(qt).join(" ")+'" size="6 2.5 '+r+'" euler="'+p+'" friction="1.5 .005 .0001" rgba=".30 .56 .50 1"/>'}function bE(i,{slopeDegrees:e=3,stepHeightCm:t=2}={}){if(!EE.some(([o])=>o===i))throw new Error("Unknown depth lab obstacle");const n=(o,c,l,u,d)=>{const m=Math.atan2(d-u,l-c),p=.25,_=(c+l)/2,y=(u+d)/2,E=_+p*Math.sin(m),T=y-p*Math.cos(m);return'<geom name="depth_'+o+'" type="box" pos="'+E+" 0 "+T+'" size="'+(l-c)/(2*Math.cos(m))+" 1.3 "+p+'" euler="0 '+-m*180/Math.PI+' 0" friction="1.5 0.005 0.0001" rgba="0.35 0.58 0.51 1"/>'};if(af.has(i))return{removeFloor:!0,geoms:wE(i,e)};if(["lab-step-up","lab-step-down"].includes(i)){const o=Number(t);if(!Number.isFinite(o)||o<.1||o>6)throw new Error("Surface lab step must be 0.1–6 cm");const c=(i==="lab-step-up"?1:-1)*o/100;return{removeFloor:!0,geoms:[n("approach",-4,.65,0,0),n("landing",.65,5,c,c)].join(`
`)}}if(i==="flat")return{removeFloor:!1,geoms:""};if(i==="log")return{removeFloor:!1,geoms:'<geom name="depth_log" type="cylinder" pos=".83 0 .025" size=".055 .52" euler="90 0 0" friction="1.5 .005 .0001" rgba=".61 .43 .29 1"/>'};if(i==="angled")return{removeFloor:!1,geoms:'<geom name="depth_angled_ridge" type="box" pos=".85 0 .03" size=".052 .52 .03" euler="0 0 22" friction="1.5 .005 .0001" rgba=".67 .50 .29 1"/>'};if(["step-up","step-down","step-up-1cm","step-up-2cm"].includes(i)){const o=i==="step-up-1cm"?.01:i==="step-up-2cm"?.02:i==="step-up"?.05:-.05,c=i==="step-up-1cm"||i==="step-up-2cm"?.25:.65;return{removeFloor:!0,geoms:[n("approach",-4,c,0,0),n("landing",c,5,o,o)].join(`
`)}}const r=i==="crest"?.065:-.065;return{removeFloor:!0,geoms:[n("approach",-4,.65,0,0),n("rise",.65,1.2,0,r),n("top",1.2,1.55,r,r),n("exit",1.55,2.1,r,0),n("after",2.1,5,0,0)].join(`
`)}}function TE(i,e="flat",t={}){if(typeof i!="string"||!i.includes("</worldbody>"))throw new Error("Cannot locate worldbody in policy robot XML");if(/viewer_ramp_up|viewer_park_hfield|viewer_tree_trunk_|surface_lab_plane|depth_(?:approach|log|rise|landing|angled_ridge)/.test(i))throw new Error("Viewer terrain already inserted");if(e==="flat")return i;if(e==="sensor"){const l=bE(t.obstacle||"flat",t);let u=i;if(l.removeFloor&&(u=u.replace(/<geom\s+name="floor"[^>]*\/>/,""),u===i))throw new Error("Sensor course requires named floor");return u.replace("</worldbody>",l.geoms+`
</worldbody>`)}if(e==="ramp")return i.replace("</worldbody>",gE+`
</worldbody>`);if(e!=="park")throw new Error("Unknown terrain mode");const n=t.park||of(t),{asset:r,geometry:o}=ME(n);let c=i.replace(/<geom\s+name="floor"[^>]*\/>/,"");if(c===i)throw new Error("Expected the named MuJoCo floor plane");return c.includes("</asset>")?c=c.replace("</asset>",r+`
</asset>`):c=c.replace("<worldbody>","<asset>"+r+`</asset>
<worldbody>`),c.replace("</worldbody>",o+`
</worldbody>`)}function AE(i,e,t,n,r=0,o=null){if(![t,n,r].every(Number.isFinite))return{supported:!1,degrees:0,arrowDegrees:0};let c=0,l=0;if(i==="park"){if(!e||Math.abs(t)>=e.radius||Math.abs(n)>=e.radius)return{supported:!1,degrees:0,arrowDegrees:0};const p=Math.max(e.cell*.5,.05),_=Math.max(-e.radius,t-p),y=Math.min(e.radius,t+p),E=Math.max(-e.radius,n-p),T=Math.min(e.radius,n+p);c=(e.sampleHeight(y,n)-e.sampleHeight(_,n))/(y-_),l=(e.sampleHeight(t,T)-e.sampleHeight(t,E))/(T-E)}else if(i==="ramp")Math.abs(n)<.44&&t>=Au&&t<=Au+.8?c=Math.tan(Math.PI/180):Math.abs(n)<.44&&t>=2.17&&t<=2.97&&(c=-Math.tan(Math.PI/180));else if(i==="sensor"){const p=o&&Dl(o.obstacle,o.slopeDegrees);if(!p)return{supported:!1,degrees:0,arrowDegrees:0,flat:!1};c=p.gx,l=p.gy}else if(i!=="flat")throw new Error("Unknown terrain mode");const u=Math.hypot(c,l),d=Math.atan(u)*180/Math.PI,m=Math.atan2(Math.sin(Math.atan2(l,c)-r),Math.cos(Math.atan2(l,c)-r));return{supported:!0,degrees:d,arrowDegrees:-m*180/Math.PI,flat:d<.05}}const fa=1,pa=40,RE=180;function Ru(i){if(!Number.isFinite(i))throw new Error("invalid floor position");return Math.round(i/fa)*fa||0}class CE{constructor(e=RE,t=.035){if(!Number.isInteger(e)||e<2||!(t>0))throw new Error("invalid trail configuration");this.maxPoints=e,this.spacingSq=t*t,this.coords=new Float32Array(e*3),this.count=0}clear(){this.count=0}add(e,t){if(!Number.isFinite(e)||!Number.isFinite(t))return!1;if(this.count){const r=(this.count-1)*3,o=e-this.coords[r],c=t-this.coords[r+1];if(o*o+c*c<this.spacingSq)return!1}this.count===this.maxPoints&&(this.coords.copyWithin(0,3),this.count--);const n=this.count*3;return this.coords[n]=e,this.coords[n+1]=t,this.coords[n+2]=.006,this.count++,!0}}function PE(i){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");if(!n)throw new Error("2D canvas unavailable for floor texture");n.fillStyle="#354451",n.fillRect(0,0,512,512);for(let o=0;o<10;o++)for(let c=0;c<10;c++)(c+o)%2===0&&(n.fillStyle="rgba(255,255,255,0.018)",n.fillRect(c*512/10,o*512/10,512/10,512/10));for(let o=0;o<=10;o++){const c=o===0||o===10,l=o===5;n.beginPath(),n.strokeStyle=c?"rgba(177,202,215,0.57)":l?"rgba(170,194,211,0.38)":"rgba(143,174,194,0.24)",n.lineWidth=c?2.8:l?1.7:1;const u=o*512/10;n.moveTo(u,0),n.lineTo(u,512),n.moveTo(0,u),n.lineTo(512,u),n.stroke()}const r=new i.CanvasTexture(t);return r.colorSpace=i.SRGBColorSpace,r.wrapS=r.wrapT=i.RepeatWrapping,r.repeat.set(pa/fa,pa/fa),r.anisotropy=4,r}function DE(i,e=!1){const n=document.createElement("canvas");n.width=n.height=512;const r=n.getContext("2d");if(!r)throw new Error("No 2D canvas for grass");r.fillStyle="#729b50",r.fillRect(0,0,512,512);let o=733;const c=()=>(o=Math.imul(o,1664525)+1013904223|0,(o>>>0)/4294967296);for(let u=0;u<5700;u++){const d=c()*512,m=c()*512,p=1+c()*5,_=c()>.5;r.strokeStyle=_?"rgba(188,214,123,0.22)":"rgba(29,91,27,0.15)",r.lineWidth=.6+c()*.8,r.beginPath(),r.moveTo(d,m),r.lineTo(d+(c()-.5)*3,m-p),r.stroke()}if(e)for(let u=0;u<=10;u++){const d=u*512/10;r.strokeStyle=u===0||u===10?"rgba(245,255,225,0.35)":"rgba(236,251,203,0.16)",r.lineWidth=u===0||u===10?1.7:.8,r.beginPath(),r.moveTo(d,0),r.lineTo(d,512),r.moveTo(0,d),r.lineTo(512,d),r.stroke()}const l=new i.CanvasTexture(n);return l.colorSpace=i.SRGBColorSpace,l.wrapS=l.wrapT=i.RepeatWrapping,l.anisotropy=4,l}function LE(i){const t=document.createElement("canvas");t.width=t.height=512;const n=t.getContext("2d");if(!n)throw new Error("No 2D canvas for terrain grid");n.clearRect(0,0,512,512);for(let o=0;o<=10;o++){const c=o*512/10,l=o===0||o===10;n.beginPath(),n.strokeStyle=l?"rgba(16,35,29,0.82)":"rgba(14,44,39,0.60)",n.lineWidth=l?4.5:2.4,n.moveTo(c,0),n.lineTo(c,512),n.moveTo(0,c),n.lineTo(512,c),n.stroke(),n.beginPath(),n.strokeStyle=l?"rgba(255,249,218,0.92)":"rgba(243,252,219,0.72)",n.lineWidth=l?2.2:1,n.moveTo(c,0),n.lineTo(c,512),n.moveTo(0,c),n.lineTo(512,c),n.stroke()}const r=new i.CanvasTexture(t);return r.colorSpace=i.SRGBColorSpace,r.wrapS=r.wrapT=i.RepeatWrapping,r.anisotropy=4,r}function FE(i,e,t){const n=e.resolution,r=e.radius,o=e.cell,c=new Float32Array(n*n*3),l=new Float32Array(n*n*2),u=[];for(let p=0;p<n;p++)for(let _=0;_<n;_++){const y=p*n+_,E=-r+_*o,T=-r+p*o;if(c[y*3]=E,c[y*3+1]=T,c[y*3+2]=e.heights[y],l[y*2]=E,l[y*2+1]=T,_<n-1&&p<n-1){const x=y,v=y+1,P=y+n+1,L=y+n;u.push(x,v,P,x,P,L)}}const d=new i.BufferGeometry;d.setAttribute("position",new i.BufferAttribute(c,3)),d.setAttribute("uv",new i.BufferAttribute(l,2)),d.setIndex(u),d.computeVertexNormals();const m=new i.Mesh(d,new i.MeshStandardMaterial({map:t,color:16777215,roughness:1,metalness:0,side:i.DoubleSide}));return m.receiveShadow=!0,m.castShadow=!1,m}function IE(i,e){const t=new i.Group,n=new i.IcosahedronGeometry(1,1),o=[4685112,5672514,7710029,6524227,4158264].map(c=>new i.MeshStandardMaterial({color:c,roughness:.96,metalness:0,flatShading:!0}));return e.forEach((c,l)=>{const u=c.z+c.trunkHeight+.11,d=c.canopyRadius,m=[[0,0,0,d,d*.84,d*.88],[d*.49,.02,d*.06,d*.7,d*.65,d*.68],[-d*.44,-d*.11,d*.13,d*.65,d*.64,d*.67],[0,d*.34,d*.22,d*.66,d*.66,d*.71]];for(let p=0;p<m.length;p++){const[_,y,E,T,x,v]=m[p],P=new i.Mesh(n,o[(l+p)%o.length]);P.position.set(c.x+_,c.y+y,u+E),P.scale.set(T,x,v),P.castShadow=!1,P.receiveShadow=!1,t.add(P)}}),t.userData.sharedGeometry=n,t.userData.sharedMaterials=o,t}function NE(i){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");if(!t)throw new Error("2D canvas unavailable for sky");const n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#3888d5"),n.addColorStop(.46,"#7db9e6"),n.addColorStop(.76,"#bfdfee"),n.addColorStop(1,"#d9e7d0"),t.fillStyle=n,t.fillRect(0,0,512,256);for(const[o,c,l]of[[75,65,1],[295,91,.8],[440,47,1.3],[194,135,.6]]){const u=t.createRadialGradient(o,c,2,o,c,55*l);u.addColorStop(0,"rgba(255,255,255,0.38)"),u.addColorStop(.47,"rgba(255,255,255,0.21)"),u.addColorStop(1,"rgba(255,255,255,0)"),t.save(),t.translate(o,c),t.scale(1.7,.43),t.translate(-o,-c),t.fillStyle=u,t.fillRect(o-60*l,c-60*l,120*l,120*l),t.restore()}const r=new i.CanvasTexture(e);return r.colorSpace=i.SRGBColorSpace,r}const Cu=Math.PI*2;let Ic=null;function pi(i,e,t){return Math.max(e,Math.min(t,i))}function yr(i,e,t){const n=e-i;return Math.abs(n)<=t?e:i+Math.sign(n)*t}class UE extends Ut{constructor(e=1,t=1,n=8,r=12){super();const o=new kd;o.absarc(0,-t/2,e,Math.PI*1.5,0,!1),o.absarc(0,t/2,e,0,Math.PI*.5,!1);const c=new Ca(o.getPoints(n),r);this.setIndex(c.getIndex()),this.setAttribute("position",c.getAttribute("position")),this.setAttribute("normal",c.getAttribute("normal")),this.setAttribute("uv",c.getAttribute("uv")),c.dispose()}}class Ll{static async create(e,t){Ic||(Ic=qM({locateFile:o=>o.endsWith(".wasm")?YM:o}));const n=await Ic,r=new Ll(e,t,n);return r.loadModel(),r}constructor(e,t,n){this.canvas=e,this.bundle=t,this.mujoco=n,this.policy=new wu(t),this.model=null,this.data=null,this.mjvOption=new n.MjvOption,this.mjvPerturb=new n.MjvPerturb,this.mjvCamera=new n.MjvCamera,this.mjvScene=null,this.maxGeoms=2048,this.scene=new Td,this.skyTexture=NE(vr),this.scene.background=this.skyTexture,this.scene.fog=new wa(12244962,15,49),this.renderer=new Zd({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zc,this.renderer.outputColorSpace=un,this.renderer.toneMapping=el,this.renderer.toneMappingExposure=1.15,this.gridTexture=PE(vr),this.grassTexture=DE(vr),this.parkGridTexture=LE(vr),this.parkSurface=null,this.parkGridOverlay=null,this.treeCrowns=null,this.park=null,this.parkMarkers=null,this.showGrid=!0,this.showTrail=!0,this.showShadows=!0,this.createWorldGuides(),this.createNavigationGuides(),this.camera=new yn(48,1,.01,50),this.camera.up.set(0,0,1),this.camera.position.set(-.72,-.78,.52),this.controls=new LM(this.camera,e),this.controls.enableDamping=!0,this.controls.target.set(0,0,.18),this.controls.minDistance=.25,this.controls.maxDistance=11,this.cameraMode="orbit",this.chaseReady=!1,this.chaseHeading=0,this.chaseTarget=new z,this.orbitPosition=this.camera.position.clone(),this.orbitTarget=this.controls.target.clone(),this.levelPoseValid=!1,this.levelQuaternion=new In,this.cameraMount=new z(.089,0,.02),this.cameraBasis=new In().setFromRotationMatrix(new Ct().makeBasis(new z(0,-1,0),new z(0,0,1),new z(-1,0,0))),this.terrainMode="flat",this.terrainMaxDegrees=10,this.parkChallengeLevel="balanced",this.sensorObstacle="flat",this.surfaceSlopeDegrees=3,this.surfaceStepHeightCm=2,this.depthConfig={enabled:!0,forward:0,tilt:70,showRays:!0,showFootprint:!0,subrays:"auto"},this.depthReading=null,this.depthLastMs=0,this.depthRaycaster=new Vd,this.depthLinePositions=new Float32Array(96),this.depthLineColors=new Float32Array(96);const r=new Ut;r.setAttribute("position",new on(this.depthLinePositions,3).setUsage(Qr)),r.setAttribute("color",new on(this.depthLineColors,3).setUsage(Qr)),this.depthLines=new go(r,new ti({vertexColors:!0,transparent:!0,opacity:.72,depthTest:!0})),this.depthLines.frustumCulled=!1,this.depthLines.visible=!1,this.scene.add(this.depthLines);const o=new Ut;this.depthFootprintPositions=new Float32Array(240),o.setAttribute("position",new on(this.depthFootprintPositions,3).setUsage(Qr)),o.setDrawRange(0,0),this.depthFootprint=new go(o,new ti({color:6745562,transparent:!0,opacity:.9,depthTest:!0})),this.depthFootprint.frustumCulled=!1,this.depthFootprint.visible=!1,this.scene.add(this.depthFootprint),this.depthMountMarker=new dn(new wr(.01,10,8),new qi({color:16764032,depthTest:!0})),this.depthMountMarker.visible=!1,this.scene.add(this.depthMountMarker),this.parkTreesEnabled=!0,this.parkFeaturesEnabled=!0,this.headingHold=!0,this.headingKp=2.2,this.headingTarget=0,this.requestedYaw=0,this.navPresentationActive=!1,this.meshes=[],this.geometryCache=new Map,this.follow=!0,this.followTarget=new z,this.paused=!1,this.autoReset=!1,this.sensorNoise=!0,this.arraySensor=t.schema===3&&t.observation.sensor_contract?.sensor_model_revision==="forward_tof4x4_array_plane_fit_no_tripod_2"?new oE(t.observation.sensor_contract):null,this.sensorObserver=[2,3].includes(t.schema)&&!this.arraySensor?new ZM(t.observation.sensor_contract):null,this.terrainObserver=t.schema===3?new rE(t.observation.sensor_contract):null,this.fallenFor=0,this.controlFrames=0,this.motorTravelRad=0,this.commandTarget={vx:0,vy:0,yaw:0,height:0,pitch:0,roll:0,step_height:.012},this.command={...this.commandTarget},this.episodePhaseHz=1.025,this.phase=0,this.prevAction=new Float32Array(6),this.prevRawTarget=new Float32Array(6),this.deliveredCtrl=new Float32Array(6),this.baseObsDim=t.policy.base_obs_dim,this.history=Array.from({length:4},()=>new Float32Array(this.baseObsDim)),this.obs=new Float32Array(t.policy.obs_dim),this.actQpos=[],this.actQvel=[],this.shinQpos=[],this.shinQvel=[],this.torsoId=-1,this.footIds=[],this.controlAccumulator=0,this.lastWall=performance.now()/1e3,this.addLights(),this.resize()}addLights(){const e=new Hd(13230331,3425104,1.15);this.scene.add(e);const t=new Vc(10208475,.5);t.position.set(2,2.5,2.2),this.scene.add(t),this.keyLight=new Vc(16773083,2.05),this.keyLight.position.set(-1.8,-2.4,3.5),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(1024,1024),this.keyLight.shadow.camera.left=-2.4,this.keyLight.shadow.camera.right=2.4,this.keyLight.shadow.camera.top=2.4,this.keyLight.shadow.camera.bottom=-2.4,this.keyLight.shadow.camera.near=.15,this.keyLight.shadow.camera.far=12,this.keyLight.shadow.camera.updateProjectionMatrix(),this.keyLight.shadow.bias=-15e-5,this.keyLight.shadow.normalBias=.008,this.keyLight.target.position.set(0,0,.08),this.scene.add(this.keyLight,this.keyLight.target)}createWorldGuides(){const e=new CE;this.pathTrail=e;const t=new Ut;t.setAttribute("position",new on(e.coords,3).setUsage(Qr)),t.setDrawRange(0,0),this.trailLine=new Dr(t,new ti({color:8443602,transparent:!0,opacity:.78,depthWrite:!1})),this.trailLine.frustumCulled=!1,this.scene.add(this.trailLine);const n=new Ut;n.setAttribute("position",new Pt([-1.5,0,.009,1.5,0,.009,0,-1.5,.009,0,1.5,.009],3)),n.setAttribute("color",new Pt([.94,.62,.32,.94,.62,.32,.35,.8,.91,.35,.8,.91],3)),this.worldAxes=new go(n,new ti({vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1})),this.scene.add(this.worldAxes)}setAppearance({grid:e,trail:t,shadows:n}={}){if(typeof e=="boolean"&&e!==this.showGrid){this.showGrid=e;for(const r of this.meshes)r.userData.floor&&(r.material.map=e?this.gridTexture:null,r.material.color.setHex(e?16777215:4215134),r.material.needsUpdate=!0);this.worldAxes.visible=e,this.parkGridOverlay&&(this.parkGridOverlay.visible=e)}typeof t=="boolean"&&(this.showTrail=t,this.trailLine.visible=t),typeof n=="boolean"&&n!==this.showShadows&&(this.showShadows=n,this.keyLight.castShadow=n,this.renderer.shadowMap.enabled=n,this.renderer.shadowMap.needsUpdate=!0)}disposeModel(){if(this.parkGridOverlay&&(this.scene.remove(this.parkGridOverlay),this.parkGridOverlay.material.dispose(),this.parkGridOverlay=null),this.parkSurface&&(this.scene.remove(this.parkSurface),this.parkSurface.geometry.dispose(),this.parkSurface.material.dispose(),this.parkSurface=null),this.treeCrowns){this.scene.remove(this.treeCrowns),this.treeCrowns.userData.sharedGeometry.dispose();for(const e of this.treeCrowns.userData.sharedMaterials)e.dispose();this.treeCrowns=null}if(this.parkMarkers){this.scene.remove(this.parkMarkers);for(const e of this.parkMarkers.children)e.material.map?.dispose(),e.material.dispose();this.parkMarkers=null}this.park=null,this.depthReading=null,this.depthLastMs=0,this.navGoalSeen=null,this.navRouteSeen=null;for(const e of this.meshes)this.scene.remove(e),e.material&&e.material.dispose();this.meshes.length=0;for(const e of this.geometryCache.values())e.dispose();this.geometryCache.clear(),this.mjvScene&&(this.mjvScene.delete(),this.mjvScene=null),this.data&&(this.data.delete(),this.data=null),this.model&&(this.model.delete(),this.model=null)}dispose(){this.disposeModel(),this.depthLines.geometry.dispose(),this.depthLines.material.dispose(),this.depthFootprint.geometry.dispose(),this.depthFootprint.material.dispose(),this.depthMountMarker.geometry.dispose(),this.depthMountMarker.material.dispose(),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.targetRing.geometry.dispose(),this.targetRing.material.dispose();for(const e of[this.targetArrow.line,this.targetArrow.cone])e.geometry.dispose(),e.material.dispose();this.arenaCircle.geometry.dispose(),this.arenaCircle.material.dispose(),this.skyTexture.dispose(),this.gridTexture.dispose(),this.grassTexture.dispose(),this.parkGridTexture.dispose(),this.trailLine.geometry.dispose(),this.trailLine.material.dispose(),this.worldAxes.geometry.dispose(),this.worldAxes.material.dispose(),this.mjvCamera?.delete(),this.mjvPerturb?.delete(),this.mjvOption?.delete(),this.controls?.dispose(),this.renderer?.dispose()}setCameraMode(e){if(!["orbit","chase","raw","level"].includes(e))throw new Error(`Unknown camera mode: ${e}`);e!==this.cameraMode&&(this.cameraMode==="orbit"&&(this.orbitPosition.copy(this.camera.position),this.orbitTarget.copy(this.controls.target)),this.cameraMode=e,this.controls.enabled=e==="orbit",this.levelPoseValid=!1,this.chaseReady=!1,e==="orbit"&&(this.camera.position.copy(this.orbitPosition),this.controls.target.copy(this.orbitTarget),this.camera.up.set(0,0,1),this.controls.update()))}setTerrainMode(e,t=this.terrainMaxDegrees){if(!["flat","ramp","park","sensor"].includes(e))throw new Error("Unknown terrain");const n=Number(t);if(!Number.isFinite(n)||n<1||n>20)throw new Error("Terrain angle must be 1–20°");e===this.terrainMode&&n===this.terrainMaxDegrees||(this.terrainMode=e,this.terrainMaxDegrees=n,this.loadModel())}setTerrainEnabled(e){this.setTerrainMode(e?"ramp":"flat")}setSensorObstacle(e){if(!["flat","step-up","step-up-1cm","step-up-2cm","step-down","crest","trough","log","angled","lab-uphill","lab-downhill","lab-camber-left","lab-camber-right","lab-step-up","lab-step-down"].includes(e))throw new Error("Unknown sensor course");e!==this.sensorObstacle&&(this.sensorObstacle=e,this.terrainMode==="sensor"&&this.loadModel())}setSurfaceLab({slopeDegrees:e=this.surfaceSlopeDegrees,stepHeightCm:t=this.surfaceStepHeightCm}={}){if(!Number.isFinite(e)||e<.5||e>12)throw new Error("Incline must be 0.5–12 degrees");if(!Number.isFinite(t)||t<.1||t>6)throw new Error("Step must be 0.1–6 cm");e===this.surfaceSlopeDegrees&&t===this.surfaceStepHeightCm||(this.surfaceSlopeDegrees=e,this.surfaceStepHeightCm=t,this.terrainMode==="sensor"&&this.loadModel())}setDepthInspector({enabled:e,forward:t,tilt:n,showRays:r,showFootprint:o=!0,subrays:c="auto"}){const l={enabled:!!e,forward:Number(t),tilt:Number(n),showRays:!!r,showFootprint:!!o,subrays:c};if(!["auto",1,4,5].includes(c))throw new Error("Depth samples must be auto, 1, 4 or 5");if(l.forward<0||l.forward>.2||l.tilt<0||l.tilt>90)throw new Error("Invalid depth mount");this.depthConfig=l,this.depthLastMs=0}setParkChallengeLevel(e){if(!["gentle","balanced","stretch"].includes(e))throw new Error("Unknown park challenge level");e!==this.parkChallengeLevel&&(this.parkChallengeLevel=e,this.terrainMode==="park"&&this.loadModel())}setParkFeaturesEnabled(e){const t=!!e;t!==this.parkFeaturesEnabled&&(this.parkFeaturesEnabled=t,this.terrainMode==="park"&&this.loadModel())}setTreesEnabled(e){const t=!!e;t!==this.parkTreesEnabled&&(this.parkTreesEnabled=t,this.terrainMode==="park"&&this.loadModel())}setHeadingHold(e){this.headingHold=!!e,this.headingTarget=this.actualHeading()}setHeadingGain(e){if(!Number.isFinite(e)||e<.3||e>5)throw new Error("Heading P gain must be between 0.3 and 5");this.headingKp=e}manualCommandLimits(){return this.bundle.control.command_limits}actualHeading(){if(!this.data||!this.model)return 0;const e=this.bodyRotation();return Math.atan2(e[3],e[0])}loadModel(){this.disposeModel(),this.park=this.terrainMode==="park"?this.meadowPark||of({maxDegrees:this.terrainMaxDegrees,trees:this.parkTreesEnabled,features:this.parkFeaturesEnabled,challengeLevel:this.parkChallengeLevel}):null;const e=TE(this.bundle.robot_xml,this.terrainMode,{park:this.park,obstacle:this.sensorObstacle,slopeDegrees:this.surfaceSlopeDegrees,stepHeightCm:this.surfaceStepHeightCm});if(this.model=this.mujoco.MjModel.from_xml_string(e),!this.model)throw new Error("MuJoCo could not load robot XML");this.data=new this.mujoco.MjData(this.model),this.mjvScene=new this.mujoco.MjvScene(this.model,this.maxGeoms),this.resolveIds(),this.park&&(this.parkSurface=FE(vr,this.park,this.grassTexture),this.scene.add(this.parkSurface),this.parkGridOverlay=new dn(this.parkSurface.geometry,new qi({map:this.parkGridTexture,transparent:!0,opacity:1,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2,side:_n,toneMapped:!1})),this.parkGridOverlay.renderOrder=3,this.parkGridOverlay.visible=this.showGrid,this.parkGridOverlay.frustumCulled=!1,this.scene.add(this.parkGridOverlay),this.treeCrowns=IE(vr,this.park.trees),this.scene.add(this.treeCrowns),this.createParkMarkers());const t=this.bundle.control.default_commands||{};this.commandTarget={vx:Number(t.vx??.04),vy:Number(t.vy??0),yaw:Number(t.yaw??0),height:Number(t.height??0),pitch:Number(t.pitch??0),roll:Number(t.roll??0),step_height:Number(t.step_height??.012)},this.command={...this.commandTarget},this.requestedYaw=this.commandTarget.yaw,this.reset()}name2id(e,t){const n=Number(this.mujoco.mj_name2id(this.model,e.value,t));if(n<0)throw new Error(`robot.xml is missing ${t}`);return n}resolveIds(){const e=this.mujoco,n=this.bundle.control.actuated_joints.map(o=>this.name2id(e.mjtObj.mjOBJ_JOINT,o));this.actQpos=n.map(o=>Number(this.model.jnt_qposadr[o])),this.actQvel=n.map(o=>Number(this.model.jnt_dofadr[o]));const r=["r_shin_flex","l_shin_flex"].map(o=>this.name2id(e.mjtObj.mjOBJ_JOINT,o));this.shinQpos=r.map(o=>Number(this.model.jnt_qposadr[o])),this.shinQvel=r.map(o=>Number(this.model.jnt_dofadr[o])),this.torsoId=this.name2id(e.mjtObj.mjOBJ_BODY,"torso"),this.footIds=["r_foot","l_foot"].map(o=>this.name2id(e.mjtObj.mjOBJ_BODY,o)),this.footGeomIds=["r_foot_ball","l_foot_ball"].map(o=>this.name2id(e.mjtObj.mjOBJ_GEOM,o))}createParkMarkers(){if(!this.park?.features.length)return;const e=new xr;this.park.features.forEach((t,n)=>{const r=document.createElement("canvas");r.width=384,r.height=80;const o=r.getContext("2d");if(!o)return;o.fillStyle="rgba(12,29,34,0.86)",o.beginPath(),o.roundRect(4,5,376,70,15),o.fill(),o.strokeStyle="rgba(110,231,206,0.78)",o.lineWidth=3,o.stroke(),o.fillStyle="#e9fff7",o.font="600 28px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(n+1+". "+t.label,192,40,360);const c=new Dd(r);c.colorSpace=un;const l=new gl({map:c,transparent:!0,depthTest:!0,depthWrite:!1}),u=new Cd(l);u.position.set(t.x,t.y,this.park.sampleHeight(t.x,t.y)+.2),u.scale.set(.9,.19,1),e.add(u)}),this.parkMarkers=e,this.scene.add(e)}reset(){this.resetGeneration=(this.resetGeneration||0)+1;const e=this.mujoco;e.mj_resetData(this.model,this.data),this.data.ctrl.fill(0),this.data.qvel.fill(0),this.data.qvel[0]=this.command.vx,this.data.qvel[1]=this.command.vy,this.requestedYaw=this.commandTarget.yaw,this.command.yaw=this.requestedYaw,this.data.qvel[5]=this.command.yaw,e.mj_forward(this.model,this.data),this.headingTarget=this.actualHeading(),this.episodePhaseHz=hE(this.command,this.bundle.control),this.phase=0,this.prevAction.fill(0),this.prevRawTarget.fill(0),this.deliveredCtrl.fill(0),this.sensorObserver&&this.sensorObserver.reset(this.sensorPose(),this.sensorNoise),this.terrainObserver&&this.terrainObserver.reset(this.terrainActorPose(),this.model,this.data,this.footGeomIds,this.sensorNoise),this.arraySensor&&this.arraySensor.reset(this.sensorPose(),this.model,this.data,this.sensorNoise);const t=this.buildBaseObs();for(let n=0;n<4;n++)this.history[n].set(t);this.flattenHistory(),this.controlAccumulator=0,this.fallenFor=0,this.pathTrail.clear(),this.levelPoseValid=!1,this.chaseReady=!1,this.trailLine.geometry.setDrawRange(0,0),this.depthLastMs=0,this.refreshScene()}setJoystickTargets(e,t,n,r){Object.assign(this.commandTarget,uE(e,t,n,r,this.manualCommandLimits()))}setDemoCommands({vx:e,vy:t,yaw:n,pitch:r}){const o=this.bundle.control.command_limits;this.commandTarget.vx=pi(Number(e),o.vx_min,o.vx_max),this.commandTarget.vy=pi(Number(t),-o.vy_abs,o.vy_abs),this.commandTarget.yaw=pi(Number(n),-o.yaw_abs,o.yaw_abs),this.commandTarget.pitch=pi(Number(r),-o.pitch_abs_rad,o.pitch_abs_rad)}navigationPose(){const e=this.torsoId*3,t=this.actualHeading(),n=Math.cos(t),r=Math.sin(t),o=Number(this.data.qvel[0]),c=Number(this.data.qvel[1]),l=this.bodyRotation(),u=this.data.qvel,d=l[0]*u[3]+l[1]*u[4]+l[2]*u[5],m=l[3]*u[3]+l[4]*u[4]+l[5]*u[5],p=l[6]*u[3]+l[7]*u[4]+l[8]*u[5],_=Math.max(.01,l[0]*l[0]+l[3]*l[3]),y=p-l[6]*(l[0]*d+l[3]*m)/_;return{x:Number(this.data.xpos[e]),y:Number(this.data.xpos[e+1]),heading:t,vx:n*o+r*c,vy:-r*o+n*c,yawRate:y,fallen:this.isFallen()}}navigationTrees(){return this.terrainMode!=="park"||!this.park?[]:[...this.parkTreesEnabled?this.park.trees:[],...this.parkFeaturesEnabled?this.park.features.flatMap(e=>{const t=Math.max(0,e.radius-.34);return[{x:e.x,y:e.y},{x:e.x+t,y:e.y},{x:e.x-t,y:e.y},{x:e.x,y:e.y+t},{x:e.x,y:e.y-t}]}):[]]}setNavigationPresentation(e){const t=this.navPresentationActive;if(this.navPresentationActive=!!e,e&&!t&&this.cameraMode==="orbit"){this.navSavedOrbit={position:this.camera.position.clone(),target:this.controls.target.clone()};const n=this.navigationPose();this.controls.target.set(n.x,n.y,.12),this.camera.position.set(n.x-3.4,n.y-4,3.8),this.controls.update()}else!e&&t&&this.navSavedOrbit&&(this.cameraMode==="orbit"&&(this.camera.position.copy(this.navSavedOrbit.position),this.controls.target.copy(this.navSavedOrbit.target),this.controls.update()),this.navSavedOrbit=null);e||this.clearNavigationOverlay()}terrainHeightAt(e,t){return this.terrainMode==="park"&&this.park?this.park.sampleHeight(e,t):0}createNavigationGuides(){const e=new qi({color:16573323,side:_n,depthWrite:!1,depthTest:!0});this.targetRing=new dn(new Pa(.16,.205,40),e),this.targetRing.renderOrder=9,this.scene.add(this.targetRing),this.targetArrow=new Wd(new z(1,0,0),new z(0,0,.06),.5,16767342,.15,.075),this.targetArrow.renderOrder=9,this.scene.add(this.targetArrow),this.routeLine=new Dr(new Ut,new ti({color:5568730,depthTest:!0,depthWrite:!1,transparent:!0,opacity:.95})),this.routeLine.renderOrder=8,this.scene.add(this.routeLine),this.arenaCircle=new Pd(new Ut,new ti({color:8304895,transparent:!0,opacity:.46,depthWrite:!1})),this.arenaCircle.renderOrder=7,this.scene.add(this.arenaCircle),this.navGoalSeen=null,this.navRouteSeen=null,this.clearNavigationOverlay()}clearNavigationOverlay(){this.targetRing.visible=!1,this.targetArrow.visible=!1,this.routeLine.visible=!1,this.arenaCircle.visible=!1,this.navGoalSeen=null,this.navRouteSeen=null}setNavigationOverlay(e,t){if(!e||!t){this.clearNavigationOverlay();return}if(this.navGoalSeen===e&&this.navRouteSeen===t)return;const n=this.terrainHeightAt(e.x,e.y);this.targetRing.position.set(e.x,e.y,n+.03),this.targetArrow.position.set(e.x,e.y,n+.045),this.targetArrow.setDirection(new z(Math.cos(e.heading),Math.sin(e.heading),0));const r=this.navigationPose(),o=[new z(r.x,r.y,this.terrainHeightAt(r.x,r.y)+.038),...t.steps.map(l=>new z(l.x,l.y,this.terrainHeightAt(l.x,l.y)+.038))];this.routeLine.geometry.dispose(),this.routeLine.geometry=new Ut().setFromPoints(o);const c=[];for(let l=0;l<128;l++){const u=2*Math.PI*l/128,d=4*Math.cos(u),m=4*Math.sin(u);c.push(new z(d,m,this.terrainHeightAt(d,m)+.032))}this.arenaCircle.geometry.dispose(),this.arenaCircle.geometry=new Ut().setFromPoints(c);for(const l of[this.targetRing,this.targetArrow,this.routeLine,this.arenaCircle])l.visible=!0;this.navGoalSeen=e,this.navRouteSeen=t}canSwapPolicy(e){const t=this.bundle,n=["sim_dt","control_substeps","control_dt","actuated_joints","target_span_rad","one_control_frame_actuation_delay","phase_base_hz","phase_rate_max_hz","phase_speed_gain","phase_speed_reference_mps"];return e.robot_xml===t.robot_xml&&n.every(r=>JSON.stringify(e.control[r])===JSON.stringify(t.control[r]))&&JSON.stringify(e.observation.base_fields)===JSON.stringify(t.observation.base_fields)&&JSON.stringify(e.observation.sensor_contract)===JSON.stringify(t.observation.sensor_contract)&&e.policy.obs_dim===t.policy.obs_dim}replacePolicy(e){if(!this.canSwapPolicy(e))throw new Error("Model/control contract changed; reload simulation");const t=new wu(e);this.bundle=e,this.policy=t,this.reset()}smoothCommands(e){this.command.vx=yr(this.command.vx,this.commandTarget.vx,1.1*e),this.command.vy=yr(this.command.vy,this.commandTarget.vy,.9*e),this.command.pitch=yr(this.command.pitch,this.commandTarget.pitch,.7*e),this.command.height=yr(this.command.height,this.commandTarget.height,.045*e),this.command.roll=yr(this.command.roll,this.commandTarget.roll,.55*e),this.command.step_height=yr(this.command.step_height,this.commandTarget.step_height,.05*e)}phaseRate(){return this.episodePhaseHz}stepControl(){const e=Number(this.bundle.control.control_dt||.02);this.smoothCommands(e);const t=fE(this.requestedYaw,this.commandTarget.yaw,this.headingTarget,this.actualHeading(),e,this.headingHold,this.headingKp,Number(this.bundle.control.command_limits.yaw_abs));this.requestedYaw=t.requestedYaw,this.headingTarget=t.headingTarget,this.command.yaw=t.appliedYaw;const n=this.policy.infer(this.obs);this.controlFrames++;const r=this.bundle.control.target_span_rad;for(let u=0;u<6;u++)this.deliveredCtrl[u]=this.prevRawTarget[u],this.data.ctrl[u]=this.deliveredCtrl[u];const o=Number(this.bundle.control.control_substeps||4),c=this.actQpos.map(u=>Number(this.data.qpos[u]));for(let u=0;u<o;u++)this.mujoco.mj_step(this.model,this.data);for(let u=0;u<this.actQpos.length;u++)this.motorTravelRad+=Math.abs(Number(this.data.qpos[this.actQpos[u]])-c[u]);for(let u=0;u<6;u++){const d=pi(n[u]*r[u],-r[u],r[u]);this.prevRawTarget[u]=d,this.prevAction[u]=n[u]}this.phase=(this.phase+e*this.phaseRate()*Cu)%Cu,this.sensorObserver&&this.sensorObserver.advance(this.sensorPose(),this.sensorNoise),this.terrainObserver&&this.terrainObserver.advance(this.terrainActorPose(),this.model,this.data,this.footGeomIds,this.sensorNoise),this.arraySensor&&this.arraySensor.advance(this.sensorPose(),this.model,this.data,this.sensorNoise);const l=this.buildBaseObs();this.history[0].set(this.history[1]),this.history[1].set(this.history[2]),this.history[2].set(this.history[3]),this.history[3].set(l),this.flattenHistory(),this.isFallen()?this.fallenFor+=e:this.fallenFor=0,this.autoReset&&this.fallenFor>.8&&this.reset()}flattenHistory(){for(let e=0;e<4;e++)this.obs.set(this.history[e],e*this.baseObsDim)}bodyRotation(){const e=this.torsoId*9,t=this.data.xmat;return[t[e],t[e+1],t[e+2],t[e+3],t[e+4],t[e+5],t[e+6],t[e+7],t[e+8]]}worldToBody(e,t,n,r){return[e[0]*t+e[3]*n+e[6]*r,e[1]*t+e[4]*n+e[7]*r,e[2]*t+e[5]*n+e[8]*r]}sensorPose(){const e=this.bodyRotation(),t=this.torsoId*3,n=Array.from(this.data.xpos.slice(t,t+3)),r=this.worldToBody(e,this.data.qvel[0],this.data.qvel[1],this.data.qvel[2]),o=Array.from(this.data.qvel.slice(3,6)),c=(u,d)=>{if(this.terrainMode==="park"&&this.park)return this.park.sampleHeight(u,d);if(this.terrainMode==="ramp"&&Math.abs(d)<.44){if(u>=.85&&u<=1.65)return .008+(u-.85)*Math.tan(Math.PI/180);if(u>1.65&&u<2.17)return .015;if(u>=2.17&&u<=2.97)return .015-(u-2.17)*Math.tan(Math.PI/180)}return 0},l=this.terrainMode==="park"&&this.park?(u,d)=>this.park.sampleHeight(u,d):null;return{R:e,torso:n,vbody:r,gyro:o,heightAt:c,terrainHeightAt:l}}terrainActorPose(){const e=this.bodyRotation(),t=this.torsoId*3;return{R:e,torso:Array.from(this.data.xpos.slice(t,t+3)),terrainHeightAt:this.terrainMode==="park"&&this.park?(n,r)=>this.park.sampleHeight(n,r):null}}buildBaseObs(){const e=this.data.qpos,t=this.data.qvel,n=this.data.xpos,r=this.bodyRotation(),o=this.worldToBody(r,0,0,-1),c=this.worldToBody(r,t[0],t[1],t[2]),l=this.worldToBody(r,t[3],t[4],t[5]),u=this.sensorNoise?Number(this.bundle.control.sensor_noise_scale??1.5):0,d=Math.sin(1.73*this.phase),m=Math.sin(2.31*this.phase+.7),p=new Float32Array(this.baseObsDim);let _=0;p[_++]=o[0]+u*.008*d,p[_++]=o[1]+u*.008*m,p[_++]=o[2]-u*.004*d,p[_++]=l[0]+u*.025*m,p[_++]=l[1]+u*.025*d,p[_++]=l[2]-u*.025*m;const y=[o[0]+u*.008*d,o[1]+u*.008*m,o[2]-u*.004*d],E=this.arraySensor?this.arraySensor.read(y,this.terrainObserver.read()):this.sensorObserver?.read(y);E&&(p[3]=E.gyro[0],p[4]=E.gyro[1],p[5]=E.gyro[2]);for(let U=0;U<6;U++)p[_++]=e[this.actQpos[U]]+u*.0015*d;for(let U=0;U<6;U++)p[_++]=t[this.actQvel[U]]+u*.015*m;for(let U=0;U<6;U++)p[_++]=this.prevAction[U];for(let U=0;U<6;U++)p[_++]=this.deliveredCtrl[U];const T=this.torsoId*3,x=n[T],v=n[T+1],P=n[T+2];for(const U of this.footIds){const B=U*3,F=this.worldToBody(r,n[B]-x,n[B+1]-v,n[B+2]-P);p[_++]=F[0],p[_++]=F[1],p[_++]=F[2]}p[_++]=E?E.velocity[0]:c[0]+u*.018*d,p[_++]=E?E.velocity[1]:c[1]+u*.018*m,p[_++]=E?E.depth:P+u*.0025*m,p[_++]=E?E.velocityConfidence:pi(1-.18*u,.2,1),p[_++]=this.command.vx,p[_++]=this.command.vy,p[_++]=this.command.yaw,p[_++]=this.command.height,p[_++]=this.command.pitch,p[_++]=this.command.roll,p[_++]=this.command.step_height,p[_++]=Math.sin(this.phase),p[_++]=Math.cos(this.phase);const L=e[this.shinQpos[0]]+u*.001*d,A=e[this.shinQpos[1]]+u*.001*m,N=t[this.shinQvel[0]]+u*.01*m,R=t[this.shinQvel[1]]+u*.01*d;if(p[_++]=L,p[_++]=A,p[_++]=N,p[_++]=R,p[_++]=pi(Math.abs(L)/.1,0,1.5),p[_++]=pi(Math.abs(A)/.1,0,1.5),E&&(p[_++]=E.forwardGrade,p[_++]=E.sideGrade,p[_++]=E.groundConfidence),this.terrainObserver){const U=this.terrainObserver.read();for(const B of U.ranges)p[_++]=B;for(const B of U.valid)p[_++]=B?1:0}if(_!==this.baseObsDim)throw new Error(`Internal observation builder produced ${_} fields instead of ${this.baseObsDim}`);return p}isFallen(){const e=this.bodyRotation(),t=-this.worldToBody(e,0,0,-1)[2],n=this.terrainMode==="sensor"?Dl(this.sensorObstacle,this.surfaceSlopeDegrees):null,r=this.data.qpos,o=n?n.gx*r[0]+n.gy*r[1]:0;return this.heightM()-o<.145||t<.35}heightM(){return Number(this.data.xpos[this.torsoId*3+2])}telemetry(){const e=this.bodyRotation(),t=this.worldToBody(e,this.data.qvel[0],this.data.qvel[1],this.data.qvel[2]),n=this.worldToBody(e,this.data.qvel[3],this.data.qvel[4],this.data.qvel[5]),r=d=>[this.data.xpos[d*3],this.data.xpos[d*3+1],this.data.xpos[d*3+2]],o=r(this.torsoId),c=this.footIds.map(r),{chassisPitch:l,robotLean:u}=pE(e,o,c[0],c[1]);return{height:this.heightM(),vx:t[0],vy:t[1],yaw:n[2],pitch:l,chassisPitch:l,robotLean:u,cmd:{...this.command},requestedYaw:this.requestedYaw,headingHold:this.headingHold,headingActual:this.actualHeading(),headingTarget:this.headingTarget,slope:AE(this.terrainMode,this.park,(c[0][0]+c[1][0])/2,(c[0][1]+c[1][1])/2,this.actualHeading(),{obstacle:this.sensorObstacle,slopeDegrees:this.surfaceSlopeDegrees}),fallen:this.isFallen(),phaseRate:this.phaseRate()}}advance(e){if(this.paused)return;const t=Number(this.bundle.control.control_dt||.02);this.controlAccumulator+=Math.min(e,.08);let n=0;for(;this.controlAccumulator>=t&&n++<6;)this.stepControl(),this.controlAccumulator-=t}geometryFor(e){const t=this.mujoco,n=Number(e.type),r=Number(e.dataid),o=Array.from(e.size,Number),c=JSON.stringify([n,o,r]);if(this.geometryCache.has(c))return this.geometryCache.get(c);let l;return n===t.mjtGeom.mjGEOM_PLANE.value?l=new Ur(pa,pa):n===t.mjtGeom.mjGEOM_SPHERE.value?l=new wr(o[0],24,16):n===t.mjtGeom.mjGEOM_CAPSULE.value?(l=new UE(o[0],2*o[2],16,12),l.rotateX(Math.PI/2)):n===t.mjtGeom.mjGEOM_BOX.value?l=new Qi(2*o[0],2*o[1],2*o[2]):n===t.mjtGeom.mjGEOM_CYLINDER.value?(l=new ys(o[0],o[0],2*o[2],20),l.rotateX(Math.PI/2)):n===t.mjtGeom.mjGEOM_ELLIPSOID.value?(l=new wr(1,20,14),l.scale(o[0],o[1],o[2])):l=new Ut,this.geometryCache.set(c,l),l}refreshScene(){if(!this.model||!this.data)return;const e=this.mujoco;e.mjv_updateScene(this.model,this.data,this.mjvOption,this.mjvPerturb,this.mjvCamera,e.mjtCatBit.mjCAT_ALL.value,this.mjvScene);const t=this.mjvScene.geoms,n=Number(t.size());for(let l=0;l<n;l++){const u=t.get(l),d=Array.from(u.rgba,Number),m=Array.from(u.mat,Number),p=Array.from(u.pos,Number);let _=this.meshes[l];if(!_){const E=Number(u.type)===e.mjtGeom.mjGEOM_PLANE.value,T=Number(u.type)===e.mjtGeom.mjGEOM_HFIELD.value,x=E?new Gc({map:this.showGrid?this.gridTexture:null,roughness:.98,metalness:0,color:this.showGrid?16777215:4215134,side:_n}):new Gc({roughness:.68,metalness:.06,side:_n});_=new dn(this.geometryFor(u),x),_.userData.floor=E,_.userData.parkHeightfield=T,_.castShadow=!E,_.receiveShadow=E,_.matrixAutoUpdate=!1,this.meshes.push(_),this.scene.add(_)}const y=Number(u.objid);if(_.userData.robotPart=Number(u.objtype)===Number(e.mjtObj.mjOBJ_GEOM.value)&&Number.isInteger(y)&&y>=0&&y<Number(this.model.ngeom)&&Number(this.model.geom_bodyid[y])>0,_.visible=!_.userData.parkHeightfield,_.userData.floor||_.material.color.setRGB(d[0],d[1],d[2]),_.material.opacity=d[3],_.material.transparent=d[3]<.999,_.matrix.set(m[0],m[1],m[2],p[0],m[3],m[4],m[5],p[1],m[6],m[7],m[8],p[2],0,0,0,1),_.userData.floor){const E=this.torsoId*3;_.matrix.elements[12]+=Ru(Number(this.data.xpos[E])),_.matrix.elements[13]+=Ru(Number(this.data.xpos[E+1]))}_.matrixWorldNeedsUpdate=!0,u.delete()}for(let l=n;l<this.meshes.length;l++)this.meshes[l].visible=!1;t.delete();const r=this.torsoId*3,o=Number(this.data.xpos[r]),c=Number(this.data.xpos[r+1]);if(this.keyLight.position.set(o-1.8,c-2.4,3.5),this.keyLight.target.position.set(o,c,.08),this.pathTrail.add(o,c)&&(this.trailLine.geometry.attributes.position.needsUpdate=!0,this.trailLine.geometry.setDrawRange(0,this.pathTrail.count)),this.follow&&this.cameraMode==="orbit"){const l=this.torsoId*3;this.followTarget.set(this.data.xpos[l],this.data.xpos[l+1],Math.max(.12,this.data.xpos[l+2]-.04));const u=this.followTarget.clone().sub(this.controls.target).multiplyScalar(.12);this.controls.target.add(u),this.camera.position.add(u)}}updateChaseCamera(e=1/60){const t=this.actualHeading(),n=!this.chaseReady,r=this.torsoId*3,o=[Number(this.data.xpos[r]),Number(this.data.xpos[r+1]),Number(this.data.xpos[r+2])];this.chaseHeading=n?t:cE(this.chaseHeading,t,Fc(e,6));const c=(p,_)=>this.terrainMode==="park"&&this.park?this.park.sampleHeight(p,_):0,l=lE(o,this.chaseHeading,c),u=new z(...l.position),d=new z(...l.target),m=!n&&this.camera.position.distanceToSquared(u)>4;n||m?(this.camera.position.copy(u),this.chaseTarget.copy(d)):(this.camera.position.lerp(u,Fc(e,5)),this.chaseTarget.lerp(d,Fc(e,7))),this.chaseReady=!0,this.camera.up.set(0,0,1),this.camera.lookAt(this.chaseTarget)}updateFirstPersonCamera(){const e=this.bodyRotation(),t=new Ct().set(e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1),n=new In().setFromRotationMatrix(t),r=this.torsoId*3;this.camera.position.set(this.data.xpos[r],this.data.xpos[r+1],this.data.xpos[r+2]),this.camera.position.add(this.cameraMount.clone().applyQuaternion(n));const o=n.multiply(this.cameraBasis);if(this.cameraMode==="raw")this.camera.quaternion.copy(o);else{const c=new z(0,0,-1).applyQuaternion(o);this.camera.up.set(0,0,1),this.camera.lookAt(this.camera.position.clone().add(c)),this.levelPoseValid?this.levelQuaternion.slerp(this.camera.quaternion,.1):this.levelQuaternion.copy(this.camera.quaternion),this.camera.quaternion.copy(this.levelQuaternion),this.levelPoseValid=!0}}updateDepthInspector(e){if(!this.depthConfig.enabled||!this.data){this.depthLines.visible=!1,this.depthFootprint.visible=!1,this.depthMountMarker.visible=!1,this.depthReading=null;return}const t=this.depthReading?.costMs||0,n=Math.max(75,Math.min(350,t*3));if(this.depthLastMs&&e-this.depthLastMs<n)return;this.depthLastMs=e;const r=performance.now(),o=this.torsoId*3,c=Array.from(this.data.xpos.slice(o,o+3)),l=this.bodyRotation(),u=tE(c,l,this.depthConfig),d=this.meshes.filter(P=>P.visible);this.parkSurface&&d.push(this.parkSurface);for(const P of d)P.updateMatrixWorld(!0);const m=this.depthRaycaster;m.near=.018;const p=new z(...u.origin),_=new z,y=this.depthConfig.subrays,E=y==="auto"?this.terrainMode==="park"?1:4:y,T=iE(u,(P,L,A)=>{m.set(p,_.set(...L).normalize()),m.far=A;const N=m.intersectObjects(d,!1)[0];return N?{distance:N.distance,kind:N.object.userData.robotPart?"self":"terrain",surface:N.object.uuid}:1/0},{subrays:E,noise:this.sensorNoise?.001:0,dropout:0}),x=this.depthLinePositions,v=this.depthLineColors;for(let P=0;P<16;P++){const L=T.hitPoints[P],A=T.selfOccluded[P]?[1,.63,.24]:T.mixed[P]?[1,.87,.4]:T.valid[P]?[.31,.95,.65]:[1,.38,.4];for(let N=0;N<3;N++)x[P*6+N]=u.origin[N],x[P*6+3+N]=L[N],v[P*6+N]=v[P*6+3+N]=A[N]}if(this.depthLines.geometry.attributes.position.needsUpdate=!0,this.depthLines.geometry.attributes.color.needsUpdate=!0,this.depthLines.visible=this.depthConfig.showRays,this.depthConfig.showFootprint){const L=nE(l,this.depthConfig).map(R=>{m.set(p,_.set(...R).normalize()),m.far=1.5;const U=m.intersectObjects(d,!1)[0];return U&&!U.object.userData.robotPart?U.point:null});let A=0;const N=(R,U)=>{if(!(!L[R]||!L[U]))for(const B of[L[R],L[U]])this.depthFootprintPositions[A++]=B.x,this.depthFootprintPositions[A++]=B.y,this.depthFootprintPositions[A++]=B.z+.004};for(let R=0;R<5;R++)for(let U=0;U<5;U++){const B=R*5+U;U<4&&N(B,B+1),R<4&&N(B,B+5)}this.depthFootprint.geometry.attributes.position.needsUpdate=!0,this.depthFootprint.geometry.setDrawRange(0,A/3),this.depthFootprint.visible=A>0}else this.depthFootprint.visible=!1;this.depthReading={...T,updatedMs:e,subrays:E,footprintRays:this.depthConfig.showFootprint?25:0,costMs:performance.now()-r},this.depthMountMarker.position.copy(p),this.depthMountMarker.visible=!0}render(e=1/60){this.refreshScene(),this.updateDepthInspector(performance.now()),this.cameraMode==="orbit"?this.controls.update():this.cameraMode==="chase"?this.updateChaseCamera(e):this.updateFirstPersonCamera(),this.renderer.render(this.scene,this.camera)}resize(){const e=Math.max(1,this.canvas.clientWidth||window.innerWidth),t=Math.max(1,this.canvas.clientHeight||window.innerHeight),n=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}const ma=(i,e,t)=>Math.max(e,Math.min(t,i)),OE=i=>Math.atan2(Math.sin(i),Math.cos(i)),kE=["torso","r_hip","r_shin","r_shin_lower","r_foot","l_hip","l_shin","l_shin_lower","l_foot"],BE=15.5,zE=257;function HE(i,e){return[i.x-e[1],i.height+e[2],i.z+e[0]]}function GE(i,e){const t=BE,n=zE,r=2*t/(n-1),o=new Float64Array(n*n);let c=1/0,l=-1/0;const u=i(e.x,e.z);for(let p=0;p<n;p++)for(let _=0;_<n;_++){const y=-t+_*r,E=-t+p*r,T=i(e.x-E,e.z+y)-u;o[p*n+_]=T,c=Math.min(c,T),l=Math.max(l,T)}const d=new Float32Array(o.length);for(let p=0;p<o.length;p++)d[p]=o[p]-c;const m=(p,_)=>{const y=ma((p+t)/r,0,n-1.00001),E=ma((_+t)/r,0,n-1.00001),T=Math.floor(y),x=Math.floor(E),v=y-T,P=E-x,L=x*n+T;return d[L]*(1-v)*(1-P)+d[L+1]*v*(1-P)+d[L+n]*(1-v)*P+d[L+n+1]*v*P+c};return{radius:t,resolution:n,cell:r,heights:d,zOffset:c,maxHeight:Math.max(.001,l-c),trees:[],features:[],flatRadius:0,challengeLevel:"meadow",maxDegrees:20,sampleHeight:m}}class cf{static async create(e,t,n={x:8,z:9.1}){const r=document.createElement("canvas");r.width=2,r.height=2;const o=await Ll.create(r,e),c={x:n.x,z:n.z,height:t(n.x,n.z)};return o.meadowPark=GE(t,c),o.terrainMode="park",o.loadModel(),o.autoReset=!0,o.setHeadingHold(!0),o.setDemoCommands({vx:0,vy:0,yaw:0,pitch:0}),new cf(o,c)}constructor(e,t){this.sim=e,this.origin=t,this.elapsed=0,this.falls=0,this.lastGeneration=e.resetGeneration,this.bodyIDs=Object.fromEntries(kE.map(n=>[n,e.name2id(e.mujoco.mjtObj.mjOBJ_BODY,n)]))}locationOf(e){const t=this.bodyIDs[e],n=t*3;return HE(this.origin,Array.from(this.sim.data.xpos.slice(n,n+3)))}get pose(){const e=this.sim,t=e.navigationPose(),n=e.telemetry();return{x:this.origin.x-t.y,z:this.origin.z+t.x,y:this.origin.height+e.heightM(),heading:-t.heading,vx:n.vx,vy:n.vy,frames:e.controlFrames,falls:this.falls,fallen:n.fallen,motorTravelRad:e.motorTravelRad,physics:"MuJoCo WASM",actor:"v5032 Pinnacle 260M"}}get x(){return this.pose.x}get z(){return this.pose.z}get y(){return this.pose.y}get heading(){return this.pose.heading}get vx(){return this.pose.vx}get head(){const e=this.locationOf("torso"),t=this.sim.bodyRotation();return[e[0]-t[5]*.055,e[1]+t[8]*.055,e[2]+t[2]*.055]}get limbs(){const e=[];for(const t of["r","l"])e.push([this.locationOf(t+"_hip"),this.locationOf(t+"_shin"),this.locationOf(t+"_shin_lower"),this.locationOf(t+"_foot")]);return e}get torso(){const e=this.sim,t=e.bodyRotation(),n=this.locationOf("torso"),r=(d,m,p)=>[n[0]-t[3]*d-t[4]*m-t[5]*p,n[1]+t[6]*d+t[7]*m+t[8]*p,n[2]+t[0]*d+t[1]*m+t[2]*p],o=-.024,c=.076,l=.09,u=.025;return[r(o,-l,-u),r(c,-l,-u),r(c,l,-u),r(o,l,-u),r(o,-l,u),r(c,-l,u),r(c,l,u),r(o,l,u)]}autopilot(e){if(!e)return{vx:.08,vy:0,yaw:0};const t=this.pose,n=e.x-t.x,r=e.z-t.z,o=Math.hypot(n,r),c=OE(Math.atan2(n,r)-t.heading);return{vx:Math.abs(c)>1.35?.04:ma((o-1)*.16,0,.24),vy:0,yaw:-ma(c*1.3,-.85,.85)}}advance(e,t){this.elapsed+=e,this.sim.setDemoCommands({vx:Number(t?.vx)||0,vy:Number(t?.vy)||0,yaw:Number(t?.yaw)||0,pitch:0}),this.sim.advance(e),this.sim.resetGeneration!==this.lastGeneration&&(this.falls+=this.sim.resetGeneration-this.lastGeneration,this.lastGeneration=this.sim.resetGeneration)}dispose(){this.sim.dispose()}}const VE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{cf as PhysicalMeadowEmu,GE as sampleMeadowPark};
