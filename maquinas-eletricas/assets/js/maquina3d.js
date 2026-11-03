var wi=2463534242,Ue=()=>(wi^=wi<<13,wi^=wi>>>17,wi^=wi<<5,(wi>>>0)/4294967296);var Kc="170",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Tl=1,Cu=2;var Hh=1,jc=2,$n=3,_i=0,$e=1,yn=2,Be=0,ms=1,wl=2,Al=3,Rl=4,Qc=5,Mn=100,Pu=101,Iu=102,Du=103,Lu=104,Is=200,Uu=201,Nu=202,Ou=203,Ca=204,Pa=205,Lo=206,Fu=207,Uo=208,zu=209,Bu=210,Hu=211,Vu=212,ku=213,Gu=214,Ia=0,Da=1,La=2,vs=3,Ua=4,Na=5,Oa=6,Fa=7,Vh=0,Wu=1,Xu=2,mi=0,qu=1,Yu=2,Zu=3,$u=4,Ju=5,Ku=6,tl=7;var kh=300,ys=301,Ms=302,za=303,Ba=304,No=306,jn=1e3,Ni=1001,Ha=1002,Je=1003,ju=1004;var br=1005;var Fn=1006,Jo=1007;var Oi=1008;var gn=1009,Gh=1010,Wh=1011,er=1012,el=1013,Fi=1014,zn=1015,Vn=1016,nl=1017,il=1018,xi=1020,Xh=35902,qh=1021,Yh=1022,mn=1023,Zh=1024,$h=1025,gs=1026,vi=1027,sl=1028,rl=1029,Jh=1030,ol=1031;var al=1033,to=33776,eo=33777,no=33778,io=33779,Va=35840,ka=35841,Ga=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,Za=37808,$a=37809,Ja=37810,Ka=37811,ja=37812,Qa=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,so=36492,cc=36494,lc=36495,Kh=36283,hc=36284,uc=36285,dc=36286;var ro=2300,fc=2301,Ko=2302,Cl=2400,Pl=2401,Il=2402;var Qu=3200,td=3201;var cl=0,ed=1,fi="",tn="srgb",Ds="srgb-linear",Oo="linear",Me="srgb";var Zi=7680;var Dl=519,nd=512,id=513,sd=514,jh=515,rd=516,od=517,ad=518,cd=519,pc=35044;var Ll="300 es",Jn=2e3,oo=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ul=1234567,Js=Math.PI/180,nr=180/Math.PI;function Bn(){let i=Ue()*4294967295|0,t=Ue()*4294967295|0,e=Ue()*4294967295|0,n=Ue()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function ll(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ks(i,t,e){return(1-e)*i+e*t}function ud(i,t,e,n){return Ks(i,t,1-Math.exp(-e*n))}function dd(i,t=1){return t-Math.abs(ll(i,t*2)-t)}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function md(i,t){return i+Math.floor(Ue()*(t-i+1))}function gd(i,t){return i+Ue()*(t-i)}function _d(i){return i*(.5-Ue())}function xd(i){i!==void 0&&(Ul=i);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vd(i){return i*Js}function yd(i){return i*nr}function Md(i){return(i&i-1)===0&&i!==0}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*u,c*d,a*h);break;case"YZY":i.set(c*d,a*l,c*u,a*h);break;case"ZXZ":i.set(c*u,c*d,a*l,a*h);break;case"XZX":i.set(a*l,c*g,c*f,a*h);break;case"YXY":i.set(c*f,a*l,c*g,a*h);break;case"ZYZ":i.set(c*g,c*f,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qh={DEG2RAD:Js,RAD2DEG:nr,generateUUID:Bn,clamp:ze,euclideanModulo:ll,mapLinear:ld,inverseLerp:hd,lerp:Ks,damp:ud,pingpong:dd,smoothstep:fd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:xd,degToRad:vd,radToDeg:yd,isPowerOfTwo:Md,ceilPowerOfTwo:Sd,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Ed,normalize:ve,denormalize:In},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Ue(),this.y=Ue(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class i{constructor(t,e,n,s,r,o,a,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],b=s[4],y=s[7],z=s[2],A=s[5],P=s[8];return r[0]=o*x+a*T+c*z,r[3]=o*m+a*b+c*A,r[6]=o*p+a*y+c*P,r[1]=h*x+l*T+u*z,r[4]=h*m+l*b+u*A,r[7]=h*p+l*y+u*P,r[2]=d*x+f*T+g*z,r[5]=d*m+f*b+g*A,r[8]=d*p+f*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=l*o-a*h,d=a*c-l*r,f=h*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*h-l*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(l*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new re;function tu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=ao("canvas");return i.style.display="block",i}var Nl={};function Zs(i){i in Nl||(Nl[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ad(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ol=[.64,.33,.3,.6,.15,.06],Fl=[.2126,.7152,.0722],zl=[.3127,.329],Bl=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[Ds]:{primaries:Ol,whitePoint:zl,transfer:Oo,toXYZ:Bl,fromXYZ:Hl,luminanceCoefficients:Fl,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Ol,whitePoint:zl,transfer:Me,toXYZ:Bl,fromXYZ:Hl,luminanceCoefficients:Fl,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var $i,mc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=ao("canvas")),$i.width=t.width,$i.height=t.height;let n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,co=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qo(s[o].image)):r.push(Qo(s[o]))}else r=Qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pd=0,on=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=Fn,o=Oi,a=mn,c=gn,h=i.DEFAULT_ANISOTROPY,l=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Bn(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=kh;on.DEFAULT_ANISOTROPY=1;var Le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,y=(f+1)/2,z=(p+1)/2,A=(l+d)/4,P=(u+x)/4,D=(g+m)/4;return b>y&&b>z?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=P/n):y>z?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=P/r,s=D/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-l)*(d-l));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-l)/T,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Ue(),this.y=Ue(),this.z=Ue(),this.w=Ue(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new co(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lo=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||h!==f||l!==g){let m=1-a,p=c*d+h*f+l*g+u*x,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let z=Math.sqrt(b),A=Math.atan2(z,p*T);m=Math.sin(m*A)/z,a=Math.sin(a*A)/z}let y=a*T;if(c=c*m+d*y,h=h*m+f*y,l=l*m+g*y,u=u*m+x*y,m===1-a){let z=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=z,h*=z,l*=z,u*=z}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+l*u+c*f-h*d,t[e+1]=c*g+l*d+h*u-a*f,t[e+2]=h*g+l*f+a*d-c*u,t[e+3]=l*g-a*u-c*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"YZX":this._x=d*l*u+h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u-d*f*g;break;case"XZY":this._x=d*l*u-h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-s*a,this._w=o*l-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Ue(),e=2*Math.PI*Ue(),n=Ue(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),l=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*h+o*u-a*l,this.y=n+c*l+a*h-r*u,this.z=s+c*u+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Ue(),this.y=Ue(),this.z=Ue(),this}randomDirection(){let t=Ue()*Math.PI*2,e=Ue()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new w,Vl=new nn,ti=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Tr.subVectors(this.max,Bs),Ji.subVectors(t.a,Bs),Ki.subVectors(t.b,Bs),ji.subVectors(t.c,Bs),ai.subVectors(Ki,Ji),ci.subVectors(ji,Ki),Ai.subVectors(Ji,ji);let e=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Ai.z,Ai.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Ai.z,0,-Ai.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Ai.y,Ai.x,0];return!ea(e,Ji,Ki,ji,Tr)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Ji,Ki,ji,Tr))?!1:(wr.crossVectors(ai,ci),e=[wr.x,wr.y,wr.z],ea(e,Ji,Ki,ji,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new w,new w,new w,new w,new w,new w,new w,new w],Rn=new w,Er=new ti,Ji=new w,Ki=new w,ji=new w,ai=new w,ci=new w,Ai=new w,Bs=new w,Tr=new w,wr=new w,Ri=new w;function ea(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ri.fromArray(i,r);let a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=t.dot(Ri),h=e.dot(Ri),l=n.dot(Ri);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Id=new ti,Hs=new w,na=new w,yi=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);let e=Hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(na)),this.expandByPoint(Hs.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new w,ia=new w,Ar=new w,li=new w,sa=new w,Rr=new w,ra=new w,zi=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),li.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ar),a=li.dot(this.direction),c=-li.dot(Ar),h=li.lengthSq(),l=Math.abs(1-o*o),u,d,f,g;if(l>0)if(u=o*c-a,d=o*a-c,g=r*l,u>=0)if(d>=-g)if(d<=g){let x=1/l;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(Ar,d),f}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),Rr.subVectors(n,t),ra.crossVectors(sa,Rr);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);let c=a*this.direction.dot(Rr.crossVectors(li,Rr));if(c<0)return null;let h=a*this.direction.dot(sa.cross(li));if(h<0||c+h>o)return null;let l=-a*li.dot(ra);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,c,h,l,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,l,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,c,h,l,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*l,f=o*u,g=a*l,x=a*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=f+g*h,e[5]=d-x*h,e[9]=-a*c,e[2]=x-d*h,e[6]=g+f*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,f=c*u,g=h*l,x=h*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,f=c*u,g=h*l,x=h*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*l,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,f=o*u,g=a*l,x=a*u;e[0]=c*l,e[4]=g*h-f,e[8]=d*h+x,e[1]=c*u,e[5]=x*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=d*u+x,e[5]=o*l,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*l,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Ld)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),hi.crossVectors(n,dn),hi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),hi.crossVectors(n,dn)),hi.normalize(),Cr.crossVectors(dn,hi),s[0]=hi.x,s[4]=Cr.x,s[8]=dn.x,s[1]=hi.y,s[5]=Cr.y,s[9]=dn.y,s[2]=hi.z,s[6]=Cr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],b=n[7],y=n[11],z=n[15],A=s[0],P=s[4],D=s[8],S=s[12],M=s[1],C=s[5],Y=s[9],X=s[13],K=s[2],ut=s[6],j=s[10],pt=s[14],tt=s[3],G=s[7],xt=s[11],vt=s[15];return r[0]=o*A+a*M+c*K+h*tt,r[4]=o*P+a*C+c*ut+h*G,r[8]=o*D+a*Y+c*j+h*xt,r[12]=o*S+a*X+c*pt+h*vt,r[1]=l*A+u*M+d*K+f*tt,r[5]=l*P+u*C+d*ut+f*G,r[9]=l*D+u*Y+d*j+f*xt,r[13]=l*S+u*X+d*pt+f*vt,r[2]=g*A+x*M+m*K+p*tt,r[6]=g*P+x*C+m*ut+p*G,r[10]=g*D+x*Y+m*j+p*xt,r[14]=g*S+x*X+m*pt+p*vt,r[3]=T*A+b*M+y*K+z*tt,r[7]=T*P+b*C+y*ut+z*G,r[11]=T*D+b*Y+y*j+z*xt,r[15]=T*S+b*X+y*pt+z*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*h*u-r*a*d+n*h*d+s*a*f-n*c*f)+x*(+e*c*f-e*h*d+r*o*d-s*o*f+s*h*l-r*c*l)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*l-n*h*l)+p*(-s*a*l-e*c*u+e*a*d+s*o*u-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=u*m*h-x*d*h+x*c*f-a*m*f-u*c*p+a*d*p,b=g*d*h-l*m*h-g*c*f+o*m*f+l*c*p-o*d*p,y=l*x*h-g*u*h+g*a*f-o*x*f-l*a*p+o*u*p,z=g*u*c-l*x*c-g*a*d+o*x*d+l*a*m-o*u*m,A=e*T+n*b+s*y+r*z;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=T*P,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*P,t[2]=(a*m*r-x*c*r+x*s*h-n*m*h-a*s*p+n*c*p)*P,t[3]=(u*c*r-a*d*r-u*s*h+n*d*h+a*s*f-n*c*f)*P,t[4]=b*P,t[5]=(l*m*r-g*d*r+g*s*f-e*m*f-l*s*p+e*d*p)*P,t[6]=(g*c*r-o*m*r-g*s*h+e*m*h+o*s*p-e*c*p)*P,t[7]=(o*d*r-l*c*r+l*s*h-e*d*h-o*s*f+e*c*f)*P,t[8]=y*P,t[9]=(g*u*r-l*x*r-g*n*f+e*x*f+l*n*p-e*u*p)*P,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*P,t[11]=(l*a*r-o*u*r-l*n*h+e*u*h+o*n*f-e*a*f)*P,t[12]=z*P,t[13]=(l*x*s-g*u*s+g*n*d-e*x*d-l*n*m+e*u*m)*P,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*P,t[15]=(o*u*s-l*a*s+l*n*c-e*u*c-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,u=a+a,d=r*h,f=r*l,g=r*u,x=o*l,m=o*u,p=a*u,T=c*h,b=c*l,y=c*u,z=n.x,A=n.y,P=n.z;return s[0]=(1-(x+p))*z,s[1]=(f+y)*z,s[2]=(g-b)*z,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+b)*P,s[9]=(m-T)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let h=1/r,l=1/o,u=1/a;return Cn.elements[0]*=h,Cn.elements[1]*=h,Cn.elements[2]*=h,Cn.elements[4]*=l,Cn.elements[5]*=l,Cn.elements[6]*=l,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let c=this.elements,h=2*r/(e-t),l=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Jn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let c=this.elements,h=1/(e-t),l=1/(n-s),u=1/(o-r),d=(e+t)*h,f=(n+s)*l,g,x;if(a===Jn)g=(o+r)*u,x=-2*u;else if(a===oo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new w,Cn=new ae,Dd=new w(0,0,0),Ld=new w(1,1,1),hi=new w,Cr=new w,dn=new w,kl=new ae,Gl=new nn,Hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ud=0,Wl=new w,ts=new nn,qn=new ae,Pr=new w,Vs=new w,Nd=new w,Od=new nn,Xl=new w(1,0,0),ql=new w(0,1,0),Yl=new w(0,0,1),Zl={type:"added"},Fd={type:"removed"},es={type:"childadded",child:null},oa={type:"childremoved",child:null},Ke=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new w,e=new Hn,n=new nn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new re}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Vs,Pr,this.up):qn.lookAt(Pr,Vs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(qn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ke.DEFAULT_UP=new w(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new w,Yn=new w,aa=new w,Zn=new w,ns=new w,is=new w,$l=new w,ca=new w,la=new w,ha=new w,ua=new Le,da=new Le,fa=new Le,pi=class i{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),Yn.subVectors(n,e),aa.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(Yn),c=Pn.dot(aa),h=Yn.dot(Yn),l=Yn.dot(aa),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(da,r.y),o.addScaledVector(fa,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),Yn.subVectors(t,e),Pn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Pn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),ca.subVectors(t,n);let c=ns.dot(ca),h=is.dot(ca);if(c<=0&&h<=0)return e.copy(n);la.subVectors(t,s);let l=ns.dot(la),u=is.dot(la);if(l>=0&&u<=l)return e.copy(s);let d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(ns,o);ha.subVectors(t,r);let f=ns.dot(ha),g=is.dot(ha);if(g>=0&&f<=g)return e.copy(r);let x=f*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(is,a);let m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return $l.subVectors(r,s),a=(u-l)/(u-l+(f-g)),e.copy(s).addScaledVector($l,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=ll(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pa(o,r,t+1/3),this.g=pa(o,r,t),this.b=pa(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return he.fromWorkingColorSpace(Ze.copy(this),t),Math.round(ze(Ze.r*255,0,255))*65536+Math.round(ze(Ze.g*255,0,255))*256+Math.round(ze(Ze.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=tn){he.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Ir);let n=Ks(ui.h,Ir.h,e),s=Ks(ui.s,Ir.s,e),r=Ks(ui.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Yt;Yt.NAMES=eu;var zd=0,Dn=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Bn(),this.name="",this.blending=ms,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==Mn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new w,Dr=new lt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pc&&(t.usage=this.usage),t}};var ho=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=0,vn=new ae,ma=new Ke,ss=new w,fn=new ti,ks=new ti,Xe=new w,Te=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?uo:ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(fn.min,ks.min),fn.expandByPoint(Xe),Xe.addVectors(fn.max,ks.max),fn.expandByPoint(Xe)):(fn.expandByPoint(ks.min),fn.expandByPoint(ks.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Xe.fromBufferAttribute(a,h),c&&(ss.fromBufferAttribute(t,h),Xe.add(ss)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new w,c[D]=new w;let h=new w,l=new w,u=new w,d=new lt,f=new lt,g=new lt,x=new w,m=new w;function p(D,S,M){h.fromBufferAttribute(n,D),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),l.sub(h),u.sub(h),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(C),a[D].add(x),a[S].add(x),a[M].add(x),c[D].add(m),c[S].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,S=T.length;D<S;++D){let M=T[D],C=M.start,Y=M.count;for(let X=C,K=C+Y;X<K;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let b=new w,y=new w,z=new w,A=new w;function P(D){z.fromBufferAttribute(s,D),A.copy(z);let S=a[D];b.copy(S),b.sub(z.multiplyScalar(z.dot(S))).normalize(),y.crossVectors(A,S);let C=y.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,C)}for(let D=0,S=T.length;D<S;++D){let M=T[D],C=M.start,Y=M.count;for(let X=C,K=C+Y;X<K;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,h=new w,l=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,u=a.normalized,d=new h.constructor(c.length*l),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*l;for(let p=0;p<l;p++)d[g++]=h[f++]}return new Ie(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){let d=h[l],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jl=new ae,Ci=new zi,Lr=new yi,Kl=new w,Ur=new w,Nr=new w,Or=new w,ga=new w,Fr=new w,jl=new w,zr=new w,Ee=class extends Ke{constructor(t=new Te,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],u=r[c];l!==0&&(ga.fromBufferAttribute(u,t),o?Fr.addScaledVector(ga,l):Fr.addScaledVector(ga.sub(e),l))}e.add(Fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Lr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Lr,Kl)===null||Ci.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,z=b;y<z;y+=3){let A=a.getX(y),P=a.getX(y+1),D=a.getX(y+2);s=Br(this,p,t,n,h,l,u,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=Br(this,o,t,n,h,l,u,T,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,z=b;y<z;y+=3){let A=y,P=y+1,D=y+2;s=Br(this,p,t,n,h,l,u,A,P,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=m,b=m+1,y=m+2;s=Br(this,o,t,n,h,l,u,T,b,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Hd(i,t,e,n,s,r,o,a){let c;if(t.side===$e?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===_i,a),c===null)return null;zr.copy(a),zr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(zr);return h<e.near||h>e.far?null:{distance:h,point:zr.clone(),object:i}}function Br(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,Ur),i.getVertexPosition(c,Nr),i.getVertexPosition(h,Or);let l=Hd(i,t,e,n,Ur,Nr,Or,jl);if(l){let u=new w;pi.getBarycoord(jl,Ur,Nr,Or,u),s&&(l.uv=pi.getInterpolatedAttribute(s,a,c,h,u,new lt)),r&&(l.uv1=pi.getInterpolatedAttribute(r,a,c,h,u,new lt)),o&&(l.normal=pi.getInterpolatedAttribute(o,a,c,h,u,new w),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new w,materialIndex:0};pi.getNormal(Ur,Nr,Or,d.normal),l.face=d,l.barycoord=u}return l}var ei=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(h,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(u,2));function g(x,m,p,T,b,y,z,A,P,D,S){let M=y/P,C=z/D,Y=y/2,X=z/2,K=A/2,ut=P+1,j=D+1,pt=0,tt=0,G=new w;for(let xt=0;xt<j;xt++){let vt=xt*C-X;for(let Ht=0;Ht<ut;Ht++){let te=Ht*M-Y;G[x]=te*T,G[m]=vt*b,G[p]=K,h.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[p]=A>0?1:-1,l.push(G.x,G.y,G.z),u.push(Ht/P),u.push(1-xt/D),pt+=1}}for(let xt=0;xt<D;xt++)for(let vt=0;vt<P;vt++){let Ht=d+vt+ut*xt,te=d+vt+ut*(xt+1),it=d+(vt+1)+ut*(xt+1),gt=d+(vt+1)+ut*xt;c.push(Ht,te,gt),c.push(te,it,gt),tt+=6}a.addGroup(f,tt,S),f+=tt,d+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var qi={clone:Ss,merge:Qe},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fo=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new w,Ql=new lt,th=new lt,en=class extends fo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,th),e.subVectors(th,Ql)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,os=1,xc=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(rs,os,t,e);s.layers=this.layers,this.add(s);let r=new en(rs,os,t,e);r.layers=this.layers,this.add(r);let o=new en(rs,os,t,e);o.layers=this.layers,this.add(o);let a=new en(rs,os,t,e);a.layers=this.layers,this.add(a);let c=new en(rs,os,t,e);c.layers=this.layers,this.add(c);let h=new en(rs,os,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends on{constructor(t,e,n,s,r,o,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vc=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Be});r.uniforms.tEquirect.value=e;let o=new Ee(s,r),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Fn),new xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_a=new w,Wd=new w,Xd=new re,pn=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_a.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pi=new yi,Hr=new w,sr=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,o=new pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],b=s[14],y=s[15];if(n[0].setComponents(c-r,d-h,m-f,y-p).normalize(),n[1].setComponents(c+r,d+h,m+f,y+p).normalize(),n[2].setComponents(c+o,d+l,m+g,y+T).normalize(),n[3].setComponents(c-o,d-l,m-g,y-T).normalize(),n[4].setComponents(c-a,d-u,m-x,y-b).normalize(),e===Jn)n[5].setComponents(c+a,d+u,m+x,y+b).normalize();else if(e===oo)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function iu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qd(i){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,l),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,h){let l=c.array,u=c.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,l);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var Mi=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,u=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<l;p++){let T=p*d-o;for(let b=0;b<h;b++){let y=b*u-r;g.push(y,-T,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let b=T+h*p,y=T+h*(p+1),z=T+1+h*(p+1),A=T+1+h*p;f.push(b,y,A),f.push(y,z,A)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,tf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,cf=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xf=`PhysicalMaterial material;
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
#endif`,qf=`struct PhysicalMaterial {
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
}`,Yf=`
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,tm=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,xm=`#define STANDARD
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
}`,vm=`#define TOON
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
}`,ym=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:$d,alphamap_pars_fragment:Jd,alphatest_fragment:Kd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:cf,clipping_planes_fragment:lf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:xf,defaultnormal_vertex:vf,displacementmap_pars_vertex:yf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:Tf,envmap_fragment:wf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Df,fog_fragment:Lf,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Of,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:zf,lights_pars_begin:Bf,lights_toon_fragment:Vf,lights_toon_pars_fragment:kf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:$f,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Dp,skinbase_vertex:Lp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Op,specularmap_fragment:Fp,specularmap_pars_fragment:zp,tonemapping_fragment:Bp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:kp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:cm,meshlambert_vert:lm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:ym,points_vert:Mm,points_frag:Sm,shadow_vert:bm,shadow_frag:Em,sprite_vert:Tm,sprite_frag:wm},Dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},On={basic:{uniforms:Qe([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Qe([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Qe([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Qe([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Qe([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Qe([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Qe([Dt.points,Dt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Qe([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Qe([Dt.common,Dt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Qe([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Qe([Dt.sprite,Dt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Qe([Dt.common,Dt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Qe([Dt.lights,Dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};On.physical={uniforms:Qe([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Vr={r:0,b:0,g:0},Ii=new Hn,Am=new ae;function Rm(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,h,l,u=null,d=0,f=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?e:t).get(b)),b}function x(T){let b=!1,y=g(T);y===null?p(a,c):y&&y.isColor&&(p(y,1),b=!0);let z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===No)?(l===void 0&&(l=new Ee(new ei(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:Ss(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(z,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ii.copy(b.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Ii)),l.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Ee(new Mi(2,2),new He({name:"BackgroundMaterial",uniforms:Ss(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=he.getTransfer(y.colorSpace)!==Me,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,b){T.getRGB(Vr,nu(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:x,addToRenderList:m}}function Cm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,C,Y,X,K){let ut=!1,j=u(X,Y,C);r!==j&&(r=j,h(r.object)),ut=f(M,X,Y,K),ut&&g(M,X,Y,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ut||o)&&(o=!1,y(M,C,Y,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function h(M){return i.bindVertexArray(M)}function l(M){return i.deleteVertexArray(M)}function u(M,C,Y){let X=Y.wireframe===!0,K=n[M.id];K===void 0&&(K={},n[M.id]=K);let ut=K[C.id];ut===void 0&&(ut={},K[C.id]=ut);let j=ut[X];return j===void 0&&(j=d(c()),ut[X]=j),j}function d(M){let C=[],Y=[],X=[];for(let K=0;K<e;K++)C[K]=0,Y[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:X,object:M,attributes:{},index:null}}function f(M,C,Y,X){let K=r.attributes,ut=C.attributes,j=0,pt=Y.getAttributes();for(let tt in pt)if(pt[tt].location>=0){let xt=K[tt],vt=ut[tt];if(vt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),xt===void 0||xt.attribute!==vt||vt&&xt.data!==vt.data)return!0;j++}return r.attributesNum!==j||r.index!==X}function g(M,C,Y,X){let K={},ut=C.attributes,j=0,pt=Y.getAttributes();for(let tt in pt)if(pt[tt].location>=0){let xt=ut[tt];xt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));let vt={};vt.attribute=xt,xt&&xt.data&&(vt.data=xt.data),K[tt]=vt,j++}r.attributes=K,r.attributesNum=j,r.index=X}function x(){let M=r.newAttributes;for(let C=0,Y=M.length;C<Y;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let Y=r.newAttributes,X=r.enabledAttributes,K=r.attributeDivisors;Y[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),K[M]!==C&&(i.vertexAttribDivisor(M,C),K[M]=C)}function T(){let M=r.newAttributes,C=r.enabledAttributes;for(let Y=0,X=C.length;Y<X;Y++)C[Y]!==M[Y]&&(i.disableVertexAttribArray(Y),C[Y]=0)}function b(M,C,Y,X,K,ut,j){j===!0?i.vertexAttribIPointer(M,C,Y,K,ut):i.vertexAttribPointer(M,C,Y,X,K,ut)}function y(M,C,Y,X){x();let K=X.attributes,ut=Y.getAttributes(),j=C.defaultAttributeValues;for(let pt in ut){let tt=ut[pt];if(tt.location>=0){let G=K[pt];if(G===void 0&&(pt==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),pt==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){let xt=G.normalized,vt=G.itemSize,Ht=t.get(G);if(Ht===void 0)continue;let te=Ht.buffer,it=Ht.type,gt=Ht.bytesPerElement,mt=it===i.INT||it===i.UNSIGNED_INT||G.gpuType===el;if(G.isInterleavedBufferAttribute){let st=G.data,Ot=st.stride,Ft=G.offset;if(st.isInstancedInterleavedBuffer){for(let Lt=0;Lt<tt.locationSize;Lt++)p(tt.location+Lt,st.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<tt.locationSize;Lt++)m(tt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Lt=0;Lt<tt.locationSize;Lt++)b(tt.location+Lt,vt/tt.locationSize,it,xt,Ot*gt,(Ft+vt/tt.locationSize*Lt)*gt,mt)}else{if(G.isInstancedBufferAttribute){for(let st=0;st<tt.locationSize;st++)p(tt.location+st,G.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let st=0;st<tt.locationSize;st++)m(tt.location+st);i.bindBuffer(i.ARRAY_BUFFER,te);for(let st=0;st<tt.locationSize;st++)b(tt.location+st,vt/tt.locationSize,it,xt,vt*gt,vt/tt.locationSize*st*gt,mt)}}else if(j!==void 0){let xt=j[pt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(tt.location,xt);break;case 3:i.vertexAttrib3fv(tt.location,xt);break;case 4:i.vertexAttrib4fv(tt.location,xt);break;default:i.vertexAttrib1fv(tt.location,xt)}}}}T()}function z(){D();for(let M in n){let C=n[M];for(let Y in C){let X=C[Y];for(let K in X)l(X[K].object),delete X[K];delete C[Y]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let Y in C){let X=C[Y];for(let K in X)l(X[K].object),delete X[K];delete C[Y]}delete n[M.id]}function P(M){for(let C in n){let Y=n[C];if(Y[M.id]===void 0)continue;let X=Y[M.id];for(let K in X)l(X[K].object),delete X[K];delete Y[M.id]}}function D(){S(),o=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:z,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Pm(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function a(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];e.update(f,n,1)}function c(h,l,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=l[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let D=P===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!D)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:z,maxSamples:A}}function Dm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new pn,a=new re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{let T=r?0:n,b=T*4,y=p.clippingState||null;c.value=y,y=l(g,d,b,f);for(let z=0;z!==b;++z)y[z]=e[z];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Lm(i){let t=new WeakMap;function e(o,a){return a===za?o.mapping=ys:a===Ba&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===Ba)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new vc(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bs=class extends fo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,eh=[.125,.215,.35,.446,.526,.582],Ui=20,xa=new bs,nh=new Yt,va=null,ya=0,Ma=0,Sa=!1,Li=(1+Math.sqrt(5))/2,as=1/Li,ih=[new w(-Li,as,0),new w(Li,as,0),new w(-as,0,Li),new w(as,0,Li),new w(0,Li,-as),new w(0,Li,as),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,ya,Ma),this._renderer.xr.enabled=Sa,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Vn,format:mn,colorSpace:Ds,depthBuffer:!1},s=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,t,e)}return s}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,s){let a=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(nh),l.toneMapping=mi,l.autoClear=!1;let f=new cn({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new Ee(new ei,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(nh),x=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));let b=this._cubeSize;kr(s,T*b,p>2?b:0,b,b),l.setRenderTarget(s),x&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ih[(s-r-1)%ih.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new Ee(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let p=[],T=0;for(let P=0;P<Ui;++P){let D=P/x,S=Math.exp(-D*D/2);p.push(S),P===0?T+=S:P<m&&(T+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],z=3*y*(s>b-fs?s-b+fs:0),A=4*(this._cubeSize-y);kr(e,z,A,3*y,2*y),c.setRenderTarget(e),c.render(u,xa)}};function Um(i){let t=[],e=[],n=[],s=i,r=i-fs+1+eh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fs?c=eh[o-i+fs-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let P=A%3*2/3-1,D=A>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];T.set(S,x*g*A),b.set(d,m*g*A);let M=[A,A,A,A,A,A];y.set(M,p*g*A)}let z=new Te;z.setAttribute("position",new Ie(T,x)),z.setAttribute("uv",new Ie(b,m)),z.setAttribute("faceIndex",new Ie(y,p)),t.push(z),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(i,t,e){let n=new an(i,t,e);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nm(i,t,e){let n=new Float32Array(Ui),s=new w(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function rh(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Be,depthTest:!1,depthWrite:!1})}function oh(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Be,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Om(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===za||c===Ba,l=c===ys||c===Ms;if(h||l){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Es(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||l&&f&&s(f)?(e===null&&(e=new Es(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let T=f.array;x=f.version;for(let b=0,y=T.length;b<y;b+=3){let z=T[b+0],A=T[b+1],P=T[b+2];d.push(z,A,A,P,P,z)}}else if(g!==void 0){let T=g.array;x=g.version;for(let b=0,y=T.length/3-1;b<y;b+=3){let z=b+0,A=b+1,P=b+2;d.push(z,A,A,P,P,z)}}else return;let m=new(tu(d)?uo:ho)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function l(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function Bm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function l(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*x[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Hm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vm(i,t,e){let n=new WeakMap,s=new Le;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,z=1;y>t.maxTextureSize&&(z=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*z*4*u),P=new lo(A,y,z,u);P.type=zn,P.needsUpdate=!0;let D=b*4;for(let M=0;M<u;M++){let C=m[M],Y=p[M],X=T[M],K=y*z*4*M;for(let ut=0;ut<C.count;ut++){let j=ut*D;f===!0&&(s.fromBufferAttribute(C,ut),A[K+j+0]=s.x,A[K+j+1]=s.y,A[K+j+2]=s.z,A[K+j+3]=0),g===!0&&(s.fromBufferAttribute(Y,ut),A[K+j+4]=s.x,A[K+j+5]=s.y,A[K+j+6]=s.z,A[K+j+7]=0),x===!0&&(s.fromBufferAttribute(X,ut),A[K+j+8]=s.x,A[K+j+9]=s.y,A[K+j+10]=s.z,A[K+j+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new lt(y,z)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Si=class extends on{constructor(t,e,n,s,r,o,a,c,h,l=gs){if(l!==gs&&l!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===gs&&(n=Fi),n===void 0&&l===vi&&(n=xi),super(null,s,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},su=new on,ah=new Si(1,1),ru=new lo,ou=new _c,au=new po,ch=[],lh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fo(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),ke(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),ke(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ve(e,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),ke(e,n)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ah.compareFunction=jh,r=ah):r=su,e.setTexture2D(t||r,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ou,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||au,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ru,s)}function c0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(i,t){i.uniform1fv(this.addr,t)}function h0(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function u0(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function f0(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function _0(i,t){i.uniform2iv(this.addr,t)}function x0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function y0(i,t){i.uniform1uiv(this.addr,t)}function M0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){let n=this.cache,s=t.length,r=Fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||su,r[o])}function T0(i,t,e){let n=this.cache,s=t.length,r=Fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ou,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=Fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||au,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=Fo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ru,r[o])}function R0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}var yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}},Mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}},Sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ba=/(\w+)(\])?(\[|\.)?/g;function fh(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){let n=i.name,s=n.length;for(ba.lastIndex=0;;){let r=ba.exec(n),o=ba.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){fh(e,h===void 0?new yc(a,i,t):new Mc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sc(a),fh(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ph(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var P0=37297,I0=0;function D0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var mh=new re;function L0(i){he._getMatrix(mh,he.workingColorSpace,i);let t=`mat3( ${mh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Oo:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D0(i.getShaderSource(t),o)}else return s}function U0(i,t){let e=L0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,t){let e;switch(t){case qu:e="Linear";break;case Yu:e="Reinhard";break;case Zu:e="Cineon";break;case $u:e="ACESFilmic";break;case Ku:e="AgX";break;case tl:e="Neutral";break;case Ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gr=new w;function O0(){he.getLuminanceCoefficients(Gr);let i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function z0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $s(i){return i!==""}function _h(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(H0,k0)}var V0=new Map;function k0(i,t){let e=oe[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(G0,W0)}function W0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case Ms:t="ENVMAP_TYPE_CUBE";break;case No:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Xu:t="ENVMAP_BLENDING_ADD";break}return t}function $0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=X0(e),h=q0(e),l=Y0(e),u=Z0(e),d=$0(e),f=F0(e),g=z0(r),x=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?oe.tonemapping_pars_fragment:"",e.toneMapping!==mi?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=bc(o),o=_h(o,e),o=xh(o,e),a=bc(a),a=_h(a,e),a=xh(a,e),o=vh(o),a=vh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=T+m+o,y=T+p+a,z=ph(s,s.VERTEX_SHADER,b),A=ph(s,s.FRAGMENT_SHADER,y);s.attachShader(x,z),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(z).trim(),K=s.getShaderInfoLog(A).trim(),ut=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,z,A);else{let pt=gh(s,z,"vertex"),tt=gh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+pt+`
`+tt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||K==="")&&(j=!1);j&&(C.diagnostics={runnable:ut,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(z),s.deleteShader(A),D=new xs(s,x),S=B0(s,x)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,P0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=A,this}var K0=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tc(t),e.set(t,n)),n}},Tc=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function j0(i,t,e,n,s,r,o){let a=new ir,c=new Ec,h=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,Y,X){let K=Y.fog,ut=X.geometry,j=S.isMeshStandardMaterial?Y.environment:null,pt=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),tt=pt&&pt.mapping===No?pt.image.height:null,G=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,vt=xt!==void 0?xt.length:0,Ht=0;ut.morphAttributes.position!==void 0&&(Ht=1),ut.morphAttributes.normal!==void 0&&(Ht=2),ut.morphAttributes.color!==void 0&&(Ht=3);let te,it,gt,mt;if(G){let ee=On[G];te=ee.vertexShader,it=ee.fragmentShader}else te=S.vertexShader,it=S.fragmentShader,c.update(S),gt=c.getVertexShaderID(S),mt=c.getFragmentShaderID(S);let st=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Ft=X.isInstancedMesh===!0,Lt=X.isBatchedMesh===!0,Zt=!!S.map,ot=!!S.matcap,yt=!!pt,R=!!S.aoMap,q=!!S.lightMap,I=!!S.bumpMap,O=!!S.normalMap,U=!!S.displacementMap,nt=!!S.emissiveMap,H=!!S.metalnessMap,v=!!S.roughnessMap,_=S.anisotropy>0,L=S.clearcoat>0,W=S.dispersion>0,F=S.iridescence>0,k=S.sheen>0,et=S.transmission>0,at=_&&!!S.anisotropyMap,ft=L&&!!S.clearcoatMap,It=L&&!!S.clearcoatNormalMap,rt=L&&!!S.clearcoatRoughnessMap,_t=F&&!!S.iridescenceMap,St=F&&!!S.iridescenceThicknessMap,wt=k&&!!S.sheenColorMap,dt=k&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,zt=!!S.specularColorMap,Qt=!!S.specularIntensityMap,N=et&&!!S.transmissionMap,Mt=et&&!!S.thicknessMap,Q=!!S.gradientMap,ct=!!S.alphaMap,Et=S.alphaTest>0,Ct=!!S.alphaHash,$t=!!S.extensions,bt=mi;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(bt=i.toneMapping);let Bt={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:it,defines:S.defines,customVertexShaderID:gt,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&X._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&X.instanceColor!==null,instancingMorph:Ft&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ds,alphaToCoverage:!!S.alphaToCoverage,map:Zt,matcap:ot,envMap:yt,envMapMode:yt&&pt.mapping,envMapCubeUVHeight:tt,aoMap:R,lightMap:q,bumpMap:I,normalMap:O,displacementMap:d&&U,emissiveMap:nt,normalMapObjectSpace:O&&S.normalMapType===ed,normalMapTangentSpace:O&&S.normalMapType===cl,metalnessMap:H,roughnessMap:v,anisotropy:_,anisotropyMap:at,clearcoat:L,clearcoatMap:ft,clearcoatNormalMap:It,clearcoatRoughnessMap:rt,dispersion:W,iridescence:F,iridescenceMap:_t,iridescenceThicknessMap:St,sheen:k,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:Kt,specularColorMap:zt,specularIntensityMap:Qt,transmission:et,transmissionMap:N,thicknessMap:Mt,gradientMap:Q,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:ct,alphaTest:Et,alphaHash:Ct,combine:S.combine,mapUv:Zt&&x(S.map.channel),aoMapUv:R&&x(S.aoMap.channel),lightMapUv:q&&x(S.lightMap.channel),bumpMapUv:I&&x(S.bumpMap.channel),normalMapUv:O&&x(S.normalMap.channel),displacementMapUv:U&&x(S.displacementMap.channel),emissiveMapUv:nt&&x(S.emissiveMap.channel),metalnessMapUv:H&&x(S.metalnessMap.channel),roughnessMapUv:v&&x(S.roughnessMap.channel),anisotropyMapUv:at&&x(S.anisotropyMap.channel),clearcoatMapUv:ft&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:St&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(S.sheenRoughnessMap.channel),specularMapUv:Kt&&x(S.specularMap.channel),specularColorMapUv:zt&&x(S.specularColorMap.channel),specularIntensityMapUv:Qt&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:Mt&&x(S.thicknessMap.channel),alphaMapUv:ct&&x(S.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(O||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ut.attributes.uv&&(Zt||ct),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:X.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:Zt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===Me,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===Me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===$e,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$t&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&S.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Bt.vertexUv1s=h.has(1),Bt.vertexUv2s=h.has(2),Bt.vertexUv3s=h.has(3),h.clear(),Bt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(T(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=g[S.type],C;if(M){let Y=On[M];C=qi.clone(Y.uniforms)}else C=S.uniforms;return C}function z(S,M){let C;for(let Y=0,X=l.length;Y<X;Y++){let K=l[Y];if(K.cacheKey===M){C=K,++C.usedTimes;break}}return C===void 0&&(C=new J0(i,M,S,r),l.push(C)),C}function A(S){if(--S.usedTimes===0){let M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:z,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:D}}function Q0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||tg),n.length>1&&n.sort(d||Mh),s.length>1&&s.sort(d||Mh)}function l(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function eg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Sh,i.set(n,[o])):s>=r.length?(o=new Sh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Yt};break;case"SpotLight":e={position:new w,direction:new w,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){let t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new w);let s=new w,r=new ae,o=new ae;function a(h){let l=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,b=0,y=0,z=0,A=0,P=0;h.sort(rg);for(let S=0,M=h.length;S<M;S++){let C=h[S],Y=C.color,X=C.intensity,K=C.distance,ut=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)l+=Y.r*X,u+=Y.g*X,d+=Y.b*X;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],X);P++}else if(C.isDirectionalLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let pt=C.shadow,tt=e.get(C);tt.shadowIntensity=pt.intensity,tt.shadowBias=pt.bias,tt.shadowNormalBias=pt.normalBias,tt.shadowRadius=pt.radius,tt.shadowMapSize=pt.mapSize,n.directionalShadow[f]=tt,n.directionalShadowMap[f]=ut,n.directionalShadowMatrix[f]=C.shadow.matrix,T++}n.directional[f]=j,f++}else if(C.isSpotLight){let j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(Y).multiplyScalar(X),j.distance=K,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[x]=j;let pt=C.shadow;if(C.map&&(n.spotLightMap[z]=C.map,z++,pt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=pt.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=pt.intensity,tt.shadowBias=pt.bias,tt.shadowNormalBias=pt.normalBias,tt.shadowRadius=pt.radius,tt.shadowMapSize=pt.mapSize,n.spotShadow[x]=tt,n.spotShadowMap[x]=ut,y++}x++}else if(C.isRectAreaLight){let j=t.get(C);j.color.copy(Y).multiplyScalar(X),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=j,m++}else if(C.isPointLight){let j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){let pt=C.shadow,tt=e.get(C);tt.shadowIntensity=pt.intensity,tt.shadowBias=pt.bias,tt.shadowNormalBias=pt.normalBias,tt.shadowRadius=pt.radius,tt.shadowMapSize=pt.mapSize,tt.shadowCameraNear=pt.camera.near,tt.shadowCameraFar=pt.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=ut,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=j,g++}else if(C.isHemisphereLight){let j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(X),j.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==b||D.numSpotShadows!==y||D.numSpotMaps!==z||D.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+z-A,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=b,D.numSpotShadows=y,D.numSpotMaps=z,D.numLightProbes=P,n.version=sg++)}function c(h,l){let u=0,d=0,f=0,g=0,x=0,m=l.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){let b=h[p];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function bh(i){let t=new og(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ag(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new bh(i),t.set(s,[a])):r>=o.length?(a=new bh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wc=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ac=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function hg(i,t,e){let n=new sr,s=new lt,r=new lt,o=new Le,a=new wc({depthPacking:td}),c=new Ac,h={},l=e.maxTextureSize,u={[_i]:$e,[$e]:_i,[yn]:yn},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:cg,fragmentShader:lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let p=this.type;this.render=function(A,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Be),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let X=p!==$n&&this.type===$n,K=p===$n&&this.type!==$n;for(let ut=0,j=A.length;ut<j;ut++){let pt=A[ut],tt=pt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let G=tt.getFrameExtents();if(s.multiply(G),r.copy(tt.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/G.x),s.x=r.x*G.x,tt.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/G.y),s.y=r.y*G.y,tt.mapSize.y=r.y)),tt.map===null||X===!0||K===!0){let vt=this.type!==$n?{minFilter:Je,magFilter:Je}:{};tt.map!==null&&tt.map.dispose(),tt.map=new an(s.x,s.y,vt),tt.map.texture.name=pt.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let xt=tt.getViewportCount();for(let vt=0;vt<xt;vt++){let Ht=tt.getViewport(vt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),Y.viewport(o),tt.updateMatrices(pt,vt),n=tt.getFrustum(),y(P,D,tt.camera,pt,this.type)}tt.isPointLightShadow!==!0&&this.type===$n&&T(tt,D),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,C)};function T(A,P){let D=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new an(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,D,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,D,f,x,null)}function b(A,P,D,S){let M=null,C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let Y=M.uuid,X=P.uuid,K=h[Y];K===void 0&&(K={},h[Y]=K);let ut=K[X];ut===void 0&&(ut=M.clone(),K[X]=ut,P.addEventListener("dispose",z)),M=ut}if(M.visible=P.visible,M.wireframe=P.wireframe,S===$n?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Y=i.properties.get(M);Y.light=D}return M}function y(A,P,D,S,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===$n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let X=t.update(A),K=A.material;if(Array.isArray(K)){let ut=X.groups;for(let j=0,pt=ut.length;j<pt;j++){let tt=ut[j],G=K[tt.materialIndex];if(G&&G.visible){let xt=b(A,G,S,M);A.onBeforeShadow(i,A,P,D,X,xt,tt),i.renderBufferDirect(D,null,X,xt,A,tt),A.onAfterShadow(i,A,P,D,X,xt,tt)}}}else if(K.visible){let ut=b(A,K,S,M);A.onBeforeShadow(i,A,P,D,X,ut,null),i.renderBufferDirect(D,null,X,ut,A,null),A.onAfterShadow(i,A,P,D,X,ut,null)}}let Y=A.children;for(let X=0,K=Y.length;X<K;X++)y(Y[X],P,D,S,M)}function z(A){A.target.removeEventListener("dispose",z);for(let D in h){let S=h[D],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var ug={[Ia]:Da,[La]:Oa,[Ua]:Fa,[vs]:Na,[Da]:Ia,[Oa]:La,[Fa]:Ua,[Na]:vs};function dg(i,t){function e(){let N=!1,Mt=new Le,Q=null,ct=new Le(0,0,0,0);return{setMask:function(Et){Q!==Et&&!N&&(i.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){N=Et},setClear:function(Et,Ct,$t,bt,Bt){Bt===!0&&(Et*=bt,Ct*=bt,$t*=bt),Mt.set(Et,Ct,$t,bt),ct.equals(Mt)===!1&&(i.clearColor(Et,Ct,$t,bt),ct.copy(Mt))},reset:function(){N=!1,Q=null,ct.set(-1,0,0,0)}}}function n(){let N=!1,Mt=!1,Q=null,ct=null,Et=null;return{setReversed:function(Ct){if(Mt!==Ct){let $t=t.get("EXT_clip_control");Mt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let bt=Et;Et=null,this.setClear(bt)}Mt=Ct},getReversed:function(){return Mt},setTest:function(Ct){Ct?st(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(Ct){Q!==Ct&&!N&&(i.depthMask(Ct),Q=Ct)},setFunc:function(Ct){if(Mt&&(Ct=ug[Ct]),ct!==Ct){switch(Ct){case Ia:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Ct}},setLocked:function(Ct){N=Ct},setClear:function(Ct){Et!==Ct&&(Mt&&(Ct=1-Ct),i.clearDepth(Ct),Et=Ct)},reset:function(){N=!1,Q=null,ct=null,Et=null,Mt=!1}}}function s(){let N=!1,Mt=null,Q=null,ct=null,Et=null,Ct=null,$t=null,bt=null,Bt=null;return{setTest:function(ee){N||(ee?st(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ee){Mt!==ee&&!N&&(i.stencilMask(ee),Mt=ee)},setFunc:function(ee,xe,pe){(Q!==ee||ct!==xe||Et!==pe)&&(i.stencilFunc(ee,xe,pe),Q=ee,ct=xe,Et=pe)},setOp:function(ee,xe,pe){(Ct!==ee||$t!==xe||bt!==pe)&&(i.stencilOp(ee,xe,pe),Ct=ee,$t=xe,bt=pe)},setLocked:function(ee){N=ee},setClear:function(ee){Bt!==ee&&(i.clearStencil(ee),Bt=ee)},reset:function(){N=!1,Mt=null,Q=null,ct=null,Et=null,Ct=null,$t=null,bt=null,Bt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap,l={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,b=null,y=null,z=null,A=null,P=new Yt(0,0,0),D=0,S=!1,M=null,C=null,Y=null,X=null,K=null,ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,pt=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(tt)[1]),j=pt>=1):tt.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),j=pt>=2);let G=null,xt={},vt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),te=new Le().fromArray(vt),it=new Le().fromArray(Ht);function gt(N,Mt,Q,ct){let Et=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(N,Ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<Q;$t++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Mt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Ct}let mt={};mt[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(vs),I(!1),O(Tl),st(i.CULL_FACE),R(Be);function st(N){l[N]!==!0&&(i.enable(N),l[N]=!0)}function Ot(N){l[N]!==!1&&(i.disable(N),l[N]=!1)}function Ft(N,Mt){return u[N]!==Mt?(i.bindFramebuffer(N,Mt),u[N]=Mt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Lt(N,Mt){let Q=f,ct=!1;if(N){Q=d.get(Mt),Q===void 0&&(Q=[],d.set(Mt,Q));let Et=N.textures;if(Q.length!==Et.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,$t=Et.length;Ct<$t;Ct++)Q[Ct]=i.COLOR_ATTACHMENT0+Ct;Q.length=Et.length,ct=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ct=!0);ct&&i.drawBuffers(Q)}function Zt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let ot={[Mn]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};ot[Du]=i.MIN,ot[Lu]=i.MAX;let yt={[Is]:i.ZERO,[Uu]:i.ONE,[Nu]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Uo]:i.DST_COLOR,[Lo]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,Mt,Q,ct,Et,Ct,$t,bt,Bt,ee){if(N===Be){x===!0&&(Ot(i.BLEND),x=!1);return}if(x===!1&&(st(i.BLEND),x=!0),N!==Qc){if(N!==m||ee!==S){if((p!==Mn||y!==Mn)&&(i.blendEquation(i.FUNC_ADD),p=Mn,y=Mn),ee)switch(N){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,b=null,z=null,A=null,P.set(0,0,0),D=0,m=N,S=ee}return}Et=Et||Mt,Ct=Ct||Q,$t=$t||ct,(Mt!==p||Et!==y)&&(i.blendEquationSeparate(ot[Mt],ot[Et]),p=Mt,y=Et),(Q!==T||ct!==b||Ct!==z||$t!==A)&&(i.blendFuncSeparate(yt[Q],yt[ct],yt[Ct],yt[$t]),T=Q,b=ct,z=Ct,A=$t),(bt.equals(P)===!1||Bt!==D)&&(i.blendColor(bt.r,bt.g,bt.b,Bt),P.copy(bt),D=Bt),m=N,S=!1}function q(N,Mt){N.side===yn?Ot(i.CULL_FACE):st(i.CULL_FACE);let Q=N.side===$e;Mt&&(Q=!Q),I(Q),N.blending===ms&&N.transparent===!1?R(Be):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ct=N.stencilWrite;a.setTest(ct),ct&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function I(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function O(N){N!==Ru?(st(i.CULL_FACE),N!==C&&(N===Tl?i.cullFace(i.BACK):N===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),C=N}function U(N){N!==Y&&(j&&i.lineWidth(N),Y=N)}function nt(N,Mt,Q){N?(st(i.POLYGON_OFFSET_FILL),(X!==Mt||K!==Q)&&(i.polygonOffset(Mt,Q),X=Mt,K=Q)):Ot(i.POLYGON_OFFSET_FILL)}function H(N){N?st(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function v(N){N===void 0&&(N=i.TEXTURE0+ut-1),G!==N&&(i.activeTexture(N),G=N)}function _(N,Mt,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+ut-1:Q=G);let ct=xt[Q];ct===void 0&&(ct={type:void 0,texture:void 0},xt[Q]=ct),(ct.type!==N||ct.texture!==Mt)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(N,Mt||mt[N]),ct.type=N,ct.texture=Mt)}function L(){let N=xt[G];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(N){te.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function dt(N){it.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),it.copy(N))}function Kt(N,Mt){let Q=h.get(Mt);Q===void 0&&(Q=new WeakMap,h.set(Mt,Q));let ct=Q.get(N);ct===void 0&&(ct=i.getUniformBlockIndex(Mt,N.name),Q.set(N,ct))}function zt(N,Mt){let ct=h.get(Mt).get(N);c.get(Mt)!==ct&&(i.uniformBlockBinding(Mt,ct,N.__bindingPointIndex),c.set(Mt,ct))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,xt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,b=null,y=null,z=null,A=null,P=new Yt(0,0,0),D=0,S=!1,M=null,C=null,Y=null,X=null,K=null,te.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Ot,bindFramebuffer:Ft,drawBuffers:Lt,useProgram:Zt,setBlending:R,setMaterial:q,setFlipSided:I,setCullFace:O,setLineWidth:U,setPolygonOffset:nt,setScissorTest:H,activeTexture:v,bindTexture:_,unbindTexture:L,compressedTexImage2D:W,compressedTexImage3D:F,texImage2D:_t,texImage3D:St,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:It,texStorage3D:rt,texSubImage2D:k,texSubImage3D:et,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:wt,viewport:dt,reset:Qt}}function Eh(i,t,e,n){let s=fg(n);switch(e){case qh:return i*t;case Zh:return i*t;case $h:return i*t*2;case sl:return i*t/s.components*s.byteLength;case rl:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case Yh:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case al:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kh:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case gn:case Gh:return{byteLength:1,components:1};case er:case Wh:case Vn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Fi:case el:case zn:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new lt,l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,_){return f?new OffscreenCanvas(v,_):ao("canvas")}function x(v,_,L){let W=1,F=H(v);if((F.width>L||F.height>L)&&(W=L/Math.max(F.width,F.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){let k=Math.floor(W*F.width),et=Math.floor(W*F.height);u===void 0&&(u=g(k,et));let at=_?g(k,et):u;return at.width=k,at.height=et,at.getContext("2d").drawImage(v,0,0,k,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+k+"x"+et+")."),at}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),v;return v}function m(v){return v.generateMipmaps}function p(v){i.generateMipmap(v)}function T(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(v,_,L,W,F=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=_;if(_===i.RED&&(L===i.FLOAT&&(k=i.R32F),L===i.HALF_FLOAT&&(k=i.R16F),L===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.R8UI),L===i.UNSIGNED_SHORT&&(k=i.R16UI),L===i.UNSIGNED_INT&&(k=i.R32UI),L===i.BYTE&&(k=i.R8I),L===i.SHORT&&(k=i.R16I),L===i.INT&&(k=i.R32I)),_===i.RG&&(L===i.FLOAT&&(k=i.RG32F),L===i.HALF_FLOAT&&(k=i.RG16F),L===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.RG8UI),L===i.UNSIGNED_SHORT&&(k=i.RG16UI),L===i.UNSIGNED_INT&&(k=i.RG32UI),L===i.BYTE&&(k=i.RG8I),L===i.SHORT&&(k=i.RG16I),L===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.RGB8UI),L===i.UNSIGNED_SHORT&&(k=i.RGB16UI),L===i.UNSIGNED_INT&&(k=i.RGB32UI),L===i.BYTE&&(k=i.RGB8I),L===i.SHORT&&(k=i.RGB16I),L===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),L===i.UNSIGNED_INT&&(k=i.RGBA32UI),L===i.BYTE&&(k=i.RGBA8I),L===i.SHORT&&(k=i.RGBA16I),L===i.INT&&(k=i.RGBA32I)),_===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),_===i.RGBA){let et=F?Oo:he.getTransfer(W);L===i.FLOAT&&(k=i.RGBA32F),L===i.HALF_FLOAT&&(k=i.RGBA16F),L===i.UNSIGNED_BYTE&&(k=et===Me?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function y(v,_){let L;return v?_===null||_===Fi||_===xi?L=i.DEPTH24_STENCIL8:_===zn?L=i.DEPTH32F_STENCIL8:_===er&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===xi?L=i.DEPTH_COMPONENT24:_===zn?L=i.DEPTH_COMPONENT32F:_===er&&(L=i.DEPTH_COMPONENT16),L}function z(v,_){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Je&&v.minFilter!==Fn?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function A(v){let _=v.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&l.delete(_)}function P(v){let _=v.target;_.removeEventListener("dispose",P),M(_)}function D(v){let _=n.get(v);if(_.__webglInit===void 0)return;let L=v.source,W=d.get(L);if(W){let F=W[_.__cacheKey];F.usedTimes--,F.usedTimes===0&&S(v),Object.keys(W).length===0&&d.delete(L)}n.remove(v)}function S(v){let _=n.get(v);i.deleteTexture(_.__webglTexture);let L=v.source,W=d.get(L);delete W[_.__cacheKey],o.memory.textures--}function M(v){let _=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let F=0;F<_.__webglFramebuffer[W].length;F++)i.deleteFramebuffer(_.__webglFramebuffer[W][F]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let L=v.textures;for(let W=0,F=L.length;W<F;W++){let k=n.get(L[W]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),n.remove(L[W])}n.remove(v)}let C=0;function Y(){C=0}function X(){let v=C;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),C+=1,v}function K(v){let _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function ut(v,_){let L=n.get(v);if(v.isVideoTexture&&U(v),v.isRenderTargetTexture===!1&&v.version>0&&L.__version!==v.version){let W=v.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(L,v,_);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function j(v,_){let L=n.get(v);if(v.version>0&&L.__version!==v.version){it(L,v,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function pt(v,_){let L=n.get(v);if(v.version>0&&L.__version!==v.version){it(L,v,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function tt(v,_){let L=n.get(v);if(v.version>0&&L.__version!==v.version){gt(L,v,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}let G={[jn]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},xt={[Je]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},vt={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[jh]:i.LEQUAL,[sd]:i.EQUAL,[ad]:i.GEQUAL,[rd]:i.GREATER,[od]:i.NOTEQUAL};function Ht(v,_){if(_.type===zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Fn||_.magFilter===Jo||_.magFilter===br||_.magFilter===Oi||_.minFilter===Fn||_.minFilter===Jo||_.minFilter===br||_.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,G[_.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,G[_.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,G[_.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,xt[_.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,xt[_.minFilter]),_.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==br&&_.minFilter!==Oi||_.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(v,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(v,_){let L=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",A));let W=_.source,F=d.get(W);F===void 0&&(F={},d.set(W,F));let k=K(_);if(k!==v.__cacheKey){F[k]===void 0&&(F[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),F[k].usedTimes++;let et=F[v.__cacheKey];et!==void 0&&(F[v.__cacheKey].usedTimes--,et.usedTimes===0&&S(_)),v.__cacheKey=k,v.__webglTexture=F[k].texture}return L}function it(v,_,L){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let F=te(v,_),k=_.source;e.bindTexture(W,v.__webglTexture,i.TEXTURE0+L);let et=n.get(k);if(k.version!==et.__version||F===!0){e.activeTexture(i.TEXTURE0+L);let at=he.getPrimaries(he.workingColorSpace),ft=_.colorSpace===fi?null:he.getPrimaries(_.colorSpace),It=_.colorSpace===fi||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let rt=x(_.image,!1,s.maxTextureSize);rt=nt(_,rt);let _t=r.convert(_.format,_.colorSpace),St=r.convert(_.type),wt=b(_.internalFormat,_t,St,_.colorSpace,_.isVideoTexture);Ht(W,_);let dt,Kt=_.mipmaps,zt=_.isVideoTexture!==!0,Qt=et.__version===void 0||F===!0,N=k.dataReady,Mt=z(_,rt);if(_.isDepthTexture)wt=y(_.format===vi,_.type),Qt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,_t,St,null));else if(_.isDataTexture)if(Kt.length>0){zt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,Kt[0].width,Kt[0].height);for(let Q=0,ct=Kt.length;Q<ct;Q++)dt=Kt[Q],zt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,_t,St,dt.data):e.texImage2D(i.TEXTURE_2D,Q,wt,dt.width,dt.height,0,_t,St,dt.data);_.generateMipmaps=!1}else zt?(Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,rt.width,rt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,_t,St,rt.data)):e.texImage2D(i.TEXTURE_2D,0,wt,rt.width,rt.height,0,_t,St,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,wt,Kt[0].width,Kt[0].height,rt.depth);for(let Q=0,ct=Kt.length;Q<ct;Q++)if(dt=Kt[Q],_.format!==mn)if(_t!==null)if(zt){if(N)if(_.layerUpdates.size>0){let Et=Eh(dt.width,dt.height,_.format,_.type);for(let Ct of _.layerUpdates){let $t=dt.data.subarray(Ct*Et/dt.data.BYTES_PER_ELEMENT,(Ct+1)*Et/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Ct,dt.width,dt.height,1,_t,$t)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,rt.depth,_t,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,wt,dt.width,dt.height,rt.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,dt.width,dt.height,rt.depth,_t,St,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,wt,dt.width,dt.height,rt.depth,0,_t,St,dt.data)}else{zt&&Qt&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,Kt[0].width,Kt[0].height);for(let Q=0,ct=Kt.length;Q<ct;Q++)dt=Kt[Q],_.format!==mn?_t!==null?zt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,dt.width,dt.height,_t,St,dt.data):e.texImage2D(i.TEXTURE_2D,Q,wt,dt.width,dt.height,0,_t,St,dt.data)}else if(_.isDataArrayTexture)if(zt){if(Qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,wt,rt.width,rt.height,rt.depth),N)if(_.layerUpdates.size>0){let Q=Eh(rt.width,rt.height,_.format,_.type);for(let ct of _.layerUpdates){let Et=rt.data.subarray(ct*Q/rt.data.BYTES_PER_ELEMENT,(ct+1)*Q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,rt.width,rt.height,1,_t,St,Et)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,_t,St,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,_t,St,rt.data);else if(_.isData3DTexture)zt?(Qt&&e.texStorage3D(i.TEXTURE_3D,Mt,wt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,_t,St,rt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,_t,St,rt.data);else if(_.isFramebufferTexture){if(Qt)if(zt)e.texStorage2D(i.TEXTURE_2D,Mt,wt,rt.width,rt.height);else{let Q=rt.width,ct=rt.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,wt,Q,ct,0,_t,St,null),Q>>=1,ct>>=1}}else if(Kt.length>0){if(zt&&Qt){let Q=H(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,wt,Q.width,Q.height)}for(let Q=0,ct=Kt.length;Q<ct;Q++)dt=Kt[Q],zt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,_t,St,dt):e.texImage2D(i.TEXTURE_2D,Q,wt,_t,St,dt);_.generateMipmaps=!1}else if(zt){if(Qt){let Q=H(rt);e.texStorage2D(i.TEXTURE_2D,Mt,wt,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,St,rt)}else e.texImage2D(i.TEXTURE_2D,0,wt,_t,St,rt);m(_)&&p(W),et.__version=k.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function gt(v,_,L){if(_.image.length!==6)return;let W=te(v,_),F=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+L);let k=n.get(F);if(F.version!==k.__version||W===!0){e.activeTexture(i.TEXTURE0+L);let et=he.getPrimaries(he.workingColorSpace),at=_.colorSpace===fi?null:he.getPrimaries(_.colorSpace),ft=_.colorSpace===fi||et===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let It=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let ct=0;ct<6;ct++)!It&&!rt?_t[ct]=x(_.image[ct],!0,s.maxCubemapSize):_t[ct]=rt?_.image[ct].image:_.image[ct],_t[ct]=nt(_,_t[ct]);let St=_t[0],wt=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),Kt=b(_.internalFormat,wt,dt,_.colorSpace),zt=_.isVideoTexture!==!0,Qt=k.__version===void 0||W===!0,N=F.dataReady,Mt=z(_,St);Ht(i.TEXTURE_CUBE_MAP,_);let Q;if(It){zt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Kt,St.width,St.height);for(let ct=0;ct<6;ct++){Q=_t[ct].mipmaps;for(let Et=0;Et<Q.length;Et++){let Ct=Q[Et];_.format!==mn?wt!==null?zt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,0,0,Ct.width,Ct.height,wt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,Kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,0,0,Ct.width,Ct.height,wt,dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,Kt,Ct.width,Ct.height,0,wt,dt,Ct.data)}}}else{if(Q=_.mipmaps,zt&&Qt){Q.length>0&&Mt++;let ct=H(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Kt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(rt){zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,_t[ct].width,_t[ct].height,wt,dt,_t[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Kt,_t[ct].width,_t[ct].height,0,wt,dt,_t[ct].data);for(let Et=0;Et<Q.length;Et++){let $t=Q[Et].image[ct].image;zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,0,0,$t.width,$t.height,wt,dt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,Kt,$t.width,$t.height,0,wt,dt,$t.data)}}else{zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,wt,dt,_t[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Kt,wt,dt,_t[ct]);for(let Et=0;Et<Q.length;Et++){let Ct=Q[Et];zt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,0,0,wt,dt,Ct.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,Kt,wt,dt,Ct.image[ct])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),k.__version=F.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function mt(v,_,L,W,F,k){let et=r.convert(L.format,L.colorSpace),at=r.convert(L.type),ft=b(L.internalFormat,et,at,L.colorSpace),It=n.get(_),rt=n.get(L);if(rt.__renderTarget=_,!It.__hasExternalTextures){let _t=Math.max(1,_.width>>k),St=Math.max(1,_.height>>k);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?e.texImage3D(F,k,ft,_t,St,_.depth,0,et,at,null):e.texImage2D(F,k,ft,_t,St,0,et,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,v),O(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,F,rt.__webglTexture,0,I(_)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,F,rt.__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(v,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,v),_.depthBuffer){let W=_.depthTexture,F=W&&W.isDepthTexture?W.type:null,k=y(_.stencilBuffer,F),et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=I(_);O(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,k,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,v)}else{let W=_.textures;for(let F=0;F<W.length;F++){let k=W[F],et=r.convert(k.format,k.colorSpace),at=r.convert(k.type),ft=b(k.internalFormat,et,at,k.colorSpace),It=I(_);L&&O(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,ft,_.width,_.height):O(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,ft,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ft,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ut(_.depthTexture,0);let F=W.__webglTexture,k=I(_);if(_.depthTexture.format===gs)O(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(_.depthTexture.format===vi)O(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ft(v){let _=n.get(v),L=v.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==v.depthTexture){let W=v.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let F=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",F)};W.addEventListener("dispose",F),_.__depthDisposeCallback=F}_.__boundDepthTexture=W}if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Ot(_.__webglFramebuffer,v)}else if(L){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),st(_.__webglDepthbuffer[W],v,!1);else{let F=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,k)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),st(_.__webglDepthbuffer,v,!1);else{let W=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,F)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(v,_,L){let W=n.get(v);_!==void 0&&mt(W.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ft(v)}function Zt(v){let _=v.texture,L=n.get(v),W=n.get(_);v.addEventListener("dispose",P);let F=v.textures,k=v.isWebGLCubeRenderTarget===!0,et=F.length>1;if(et||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[at]=[];for(let ft=0;ft<_.mipmaps.length;ft++)L.__webglFramebuffer[at][ft]=i.createFramebuffer()}else L.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)L.__webglFramebuffer[at]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(et)for(let at=0,ft=F.length;at<ft;at++){let It=n.get(F[at]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(v.samples>0&&O(v)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let at=0;at<F.length;at++){let ft=F[at];L.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[at]);let It=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),_t=b(ft.internalFormat,It,rt,ft.colorSpace,v.isXRRenderTarget===!0),St=I(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,_t,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,L.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),st(L.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)mt(L.__webglFramebuffer[at][ft],v,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else mt(L.__webglFramebuffer[at],v,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){for(let at=0,ft=F.length;at<ft;at++){let It=F[at],rt=n.get(It);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ht(i.TEXTURE_2D,It),mt(L.__webglFramebuffer,v,It,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(It)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(at=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,W.__webglTexture),Ht(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)mt(L.__webglFramebuffer[ft],v,_,i.COLOR_ATTACHMENT0,at,ft);else mt(L.__webglFramebuffer,v,_,i.COLOR_ATTACHMENT0,at,0);m(_)&&p(at),e.unbindTexture()}v.depthBuffer&&Ft(v)}function ot(v){let _=v.textures;for(let L=0,W=_.length;L<W;L++){let F=_[L];if(m(F)){let k=T(v),et=n.get(F).__webglTexture;e.bindTexture(k,et),p(k),e.unbindTexture()}}}let yt=[],R=[];function q(v){if(v.samples>0){if(O(v)===!1){let _=v.textures,L=v.width,W=v.height,F=i.COLOR_BUFFER_BIT,k=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=n.get(v),at=_.length>1;if(at)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[ft]);let It=n.get(_[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,L,W,0,0,L,W,F,i.NEAREST),c===!0&&(yt.length=0,R.length=0,yt.push(i.COLOR_ATTACHMENT0+ft),v.depthBuffer&&v.resolveDepthBuffer===!1&&(yt.push(k),R.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,et.__webglColorRenderbuffer[ft]);let It=n.get(_[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){let _=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(v){return Math.min(s.maxSamples,v.samples)}function O(v){let _=n.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(v){let _=o.render.frame;l.get(v)!==_&&(l.set(v,_),v.update())}function nt(v,_){let L=v.colorSpace,W=v.format,F=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||L!==Ds&&L!==fi&&(he.getTransfer(L)===Me?(W!==mn||F!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function H(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(h.width=v.naturalWidth||v.width,h.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(h.width=v.displayWidth,h.height=v.displayHeight):(h.width=v.width,h.height=v.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=Y,this.setTexture2D=ut,this.setTexture2DArray=j,this.setTexture3D=pt,this.setTextureCube=tt,this.rebindTextures=Lt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=O}function mg(i,t){function e(n,s=fi){let r,o=he.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===mn)return i.RGBA;if(n===Zh)return i.LUMINANCE;if(n===$h)return i.LUMINANCE_ALPHA;if(n===gs)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===ka||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===qa)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===cc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===hc||n===uc||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Rc=class extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},rn=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new He({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,g=null,x=new Cc,m=e.getContextAttributes(),p=null,T=null,b=[],y=[],z=new lt,A=null,P=new en;P.viewport=new Le;let D=new en;D.viewport=new Le;let S=[P,D],M=new Rc,C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let gt=b[it];return gt===void 0&&(gt=new js,b[it]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(it){let gt=b[it];return gt===void 0&&(gt=new js,b[it]=gt),gt.getGripSpace()},this.getHand=function(it){let gt=b[it];return gt===void 0&&(gt=new js,b[it]=gt),gt.getHandSpace()};function X(it){let gt=y.indexOf(it.inputSource);if(gt===-1)return;let mt=b[gt];mt!==void 0&&(mt.update(it.inputSource,it.frame,h||o),mt.dispatchEvent({type:it.type,data:it.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ut);for(let it=0;it<b.length;it++){let gt=y[it];gt!==null&&(y[it]=null,b[it].disconnect(gt))}C=null,Y=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(it){h=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ut),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){let gt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new an(f.framebufferWidth,f.framebufferHeight,{format:mn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let gt=null,mt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=m.stencil?vi:gs,mt=m.stencil?xi:Fi);let Ot={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new an(d.textureWidth,d.textureHeight,{format:mn,type:gn,depthTexture:new Si(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ut(it){for(let gt=0;gt<it.removed.length;gt++){let mt=it.removed[gt],st=y.indexOf(mt);st>=0&&(y[st]=null,b[st].disconnect(mt))}for(let gt=0;gt<it.added.length;gt++){let mt=it.added[gt],st=y.indexOf(mt);if(st===-1){for(let Ft=0;Ft<b.length;Ft++)if(Ft>=y.length){y.push(mt),st=Ft;break}else if(y[Ft]===null){y[Ft]=mt,st=Ft;break}if(st===-1)break}let Ot=b[st];Ot&&Ot.connect(mt)}}let j=new w,pt=new w;function tt(it,gt,mt){j.setFromMatrixPosition(gt.matrixWorld),pt.setFromMatrixPosition(mt.matrixWorld);let st=j.distanceTo(pt),Ot=gt.projectionMatrix.elements,Ft=mt.projectionMatrix.elements,Lt=Ot[14]/(Ot[10]-1),Zt=Ot[14]/(Ot[10]+1),ot=(Ot[9]+1)/Ot[5],yt=(Ot[9]-1)/Ot[5],R=(Ot[8]-1)/Ot[0],q=(Ft[8]+1)/Ft[0],I=Lt*R,O=Lt*q,U=st/(-R+q),nt=U*-R;if(gt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(nt),it.translateZ(U),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ot[10]===-1)it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let H=Lt+U,v=Zt+U,_=I-nt,L=O+(st-nt),W=ot*Zt/v*H,F=yt*Zt/v*H;it.projectionMatrix.makePerspective(_,L,W,F,H,v),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function G(it,gt){gt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(gt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let gt=it.near,mt=it.far;x.texture!==null&&(x.depthNear>0&&(gt=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),M.near=D.near=P.near=gt,M.far=D.far=P.far=mt,(C!==M.near||Y!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,Y=M.far),P.layers.mask=it.layers.mask|2,D.layers.mask=it.layers.mask|4,M.layers.mask=P.layers.mask|D.layers.mask;let st=it.parent,Ot=M.cameras;G(M,st);for(let Ft=0;Ft<Ot.length;Ft++)G(Ot[Ft],st);Ot.length===2?tt(M,P,D):M.projectionMatrix.copy(P.projectionMatrix),xt(it,M,st)};function xt(it,gt,mt){mt===null?it.matrix.copy(gt.matrixWorld):(it.matrix.copy(mt.matrixWorld),it.matrix.invert(),it.matrix.multiply(gt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=nr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let vt=null;function Ht(it,gt){if(l=gt.getViewerPose(h||o),g=gt,l!==null){let mt=l.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let st=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Ft=0;Ft<mt.length;Ft++){let Lt=mt[Ft],Zt=null;if(f!==null)Zt=f.getViewport(Lt);else{let yt=u.getViewSubImage(d,Lt);Zt=yt.viewport,Ft===0&&(t.setRenderTargetTextures(T,yt.colorTexture,d.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(T))}let ot=S[Ft];ot===void 0&&(ot=new en,ot.layers.enable(Ft),ot.viewport=new Le,S[Ft]=ot),ot.matrix.fromArray(Lt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Lt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Ft===0&&(M.matrix.copy(ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(ot)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Ft=u.getDepthInformation(mt[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(t,Ft,s.renderState)}}for(let mt=0;mt<b.length;mt++){let st=y[mt],Ot=b[mt];st!==null&&Ot!==void 0&&Ot.update(st,gt,h||o)}vt&&vt(it,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),g=null}let te=new iu;te.setAnimationLoop(Ht),this.setAnimationLoop=function(it){vt=it},this.dispose=function(){}}},Di=new Hn,vg=new ae;function yg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),b=T.envMap,y=T.envMapRotation;b&&(m.envMap.value=b,Di.copy(y),Di.x*=-1,Di.y*=-1,Di.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Di)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){let y=b.program;n.uniformBlockBinding(T,y)}function h(T,b){let y=s[T.id];y===void 0&&(g(T),y=l(T),s[T.id]=y,T.addEventListener("dispose",m));let z=b.program;n.updateUBOMapping(T,z);let A=t.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function l(T){let b=u();T.__bindingPointIndex=b;let y=i.createBuffer(),z=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,z,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=s[T.id],y=T.uniforms,z=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,P=y.length;A<P;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=D.length;S<M;S++){let C=D[S];if(f(C,A,S,z)===!0){let Y=C.__offset,X=Array.isArray(C.value)?C.value:[C.value],K=0;for(let ut=0;ut<X.length;ut++){let j=X[ut],pt=x(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,Y+K,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,K),K+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,b,y,z){let A=T.value,P=b+"_"+y;if(z[P]===void 0)return typeof A=="number"||typeof A=="boolean"?z[P]=A:z[P]=A.clone(),!0;{let D=z[P];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return z[P]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(T){let b=T.uniforms,y=0,z=16;for(let P=0,D=b.length;P<D;P++){let S=Array.isArray(b[P])?b[P]:[b[P]];for(let M=0,C=S.length;M<C;M++){let Y=S[M],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,ut=X.length;K<ut;K++){let j=X[K],pt=x(j),tt=y%z,G=tt%pt.boundary,xt=tt+G;y+=G,xt!==0&&z-xt<pt.storage&&(y+=z-xt),Y.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=pt.storage}}}let A=y%z;return A>0&&(y+=z-A),T.__size=y,T.__cache={},this}function x(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:h,dispose:p}}var mo=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=mi,this.toneMappingExposure=1;let y=this,z=!1,A=0,P=0,D=null,S=-1,M=null,C=new Le,Y=new Le,X=null,K=new Yt(0),ut=0,j=e.width,pt=e.height,tt=1,G=null,xt=null,vt=new Le(0,0,j,pt),Ht=new Le(0,0,j,pt),te=!1,it=new sr,gt=!1,mt=!1,st=new ae,Ot=new ae,Ft=new w,Lt=new Le,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function yt(){return D===null?tt:1}let R=n;function q(E,B){return e.getContext(E,B)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),R===null){let B="webgl2";if(R=q(B,E),R===null)throw q(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let I,O,U,nt,H,v,_,L,W,F,k,et,at,ft,It,rt,_t,St,wt,dt,Kt,zt,Qt,N;function Mt(){I=new Fm(R),I.init(),zt=new mg(R,I),O=new Im(R,I,t,zt),U=new dg(R,I),O.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),nt=new Hm(R),H=new Q0,v=new pg(R,I,U,H,O,zt,nt),_=new Lm(y),L=new Om(y),W=new qd(R),Qt=new Cm(R,W),F=new zm(R,W,nt,Qt),k=new km(R,F,W,nt),wt=new Vm(R,O,v),rt=new Dm(H),et=new j0(y,_,L,I,O,Qt,rt),at=new yg(y,H),ft=new eg,It=new ag(I),St=new Rm(y,_,L,U,k,f,c),_t=new hg(y,k,O),N=new Mg(R,nt,O,U),dt=new Pm(R,I,nt),Kt=new Bm(R,I,nt),nt.programs=et.programs,y.capabilities=O,y.extensions=I,y.properties=H,y.renderLists=ft,y.shadowMap=_t,y.state=U,y.info=nt}Mt();let Q=new Pc(y,R);this.xr=Q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let E=I.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=I.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(j,pt,!1))},this.getSize=function(E){return E.set(j,pt)},this.setSize=function(E,B,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,pt=B,e.width=Math.floor(E*tt),e.height=Math.floor(B*tt),$===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(j*tt,pt*tt).floor()},this.setDrawingBufferSize=function(E,B,$){j=E,pt=B,tt=$,e.width=Math.floor(E*$),e.height=Math.floor(B*$),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,B,$,Z){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,B,$,Z),U.viewport(C.copy(vt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,B,$,Z){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,B,$,Z),U.scissor(Y.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){U.setScissorTest(te=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(E=!0,B=!0,$=!0){let Z=0;if(E){let V=!1;if(D!==null){let Tt=D.texture.format;V=Tt===al||Tt===ol||Tt===rl}if(V){let Tt=D.texture.type,Nt=Tt===gn||Tt===Fi||Tt===er||Tt===xi||Tt===nl||Tt===il,kt=St.getClearColor(),Gt=St.getClearAlpha(),ne=kt.r,se=kt.g,Wt=kt.b;Nt?(g[0]=ne,g[1]=se,g[2]=Wt,g[3]=Gt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=ne,x[1]=se,x[2]=Wt,x[3]=Gt,R.clearBufferiv(R.COLOR,0,x))}else Z|=R.COLOR_BUFFER_BIT}B&&(Z|=R.DEPTH_BUFFER_BIT),$&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),ft.dispose(),It.dispose(),H.dispose(),_.dispose(),L.dispose(),k.dispose(),Qt.dispose(),N.dispose(),et.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",we),Q.removeEventListener("sessionend",At),Ut.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let E=nt.autoReset,B=_t.enabled,$=_t.autoUpdate,Z=_t.needsUpdate,V=_t.type;Mt(),nt.autoReset=E,_t.enabled=B,_t.autoUpdate=$,_t.needsUpdate=Z,_t.type=V}function Ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){let B=E.target;B.removeEventListener("dispose",$t),bt(B)}function bt(E){Bt(E),H.remove(E)}function Bt(E){let B=H.get(E).programs;B!==void 0&&(B.forEach(function($){et.releaseProgram($)}),E.isShaderMaterial&&et.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,$,Z,V,Tt){B===null&&(B=Zt);let Nt=V.isMesh&&V.matrixWorld.determinant()<0,kt=Jt(E,B,$,Z,V);U.setMaterial(Z,Nt);let Gt=$.index,ne=1;if(Z.wireframe===!0){if(Gt=F.getWireframeAttribute($),Gt===void 0)return;ne=2}let se=$.drawRange,Wt=$.attributes.position,de=se.start*ne,be=(se.start+se.count)*ne;Tt!==null&&(de=Math.max(de,Tt.start*ne),be=Math.min(be,(Tt.start+Tt.count)*ne)),Gt!==null?(de=Math.max(de,0),be=Math.min(be,Gt.count)):Wt!=null&&(de=Math.max(de,0),be=Math.min(be,Wt.count));let Ae=be-de;if(Ae<0||Ae===1/0)return;Qt.setup(V,Z,kt,$,Gt);let sn,me=dt;if(Gt!==null&&(sn=W.get(Gt),me=Kt,me.setIndex(sn)),V.isMesh)Z.wireframe===!0?(U.setLineWidth(Z.wireframeLinewidth*yt()),me.setMode(R.LINES)):me.setMode(R.TRIANGLES);else if(V.isLine){let Xt=Z.linewidth;Xt===void 0&&(Xt=1),U.setLineWidth(Xt*yt()),V.isLineSegments?me.setMode(R.LINES):V.isLineLoop?me.setMode(R.LINE_LOOP):me.setMode(R.LINE_STRIP)}else V.isPoints?me.setMode(R.POINTS):V.isSprite&&me.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)me.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(I.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xt=V._multiDrawStarts,Gn=V._multiDrawCounts,ge=V._multiDrawCount,An=Gt?W.get(Gt).bytesPerElement:1,Yi=H.get(Z).currentProgram.getUniforms();for(let un=0;un<ge;un++)Yi.setValue(R,"_gl_DrawID",un),me.render(Xt[un]/An,Gn[un])}else if(V.isInstancedMesh)me.renderInstances(de,Ae,V.count);else if($.isInstancedBufferGeometry){let Xt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Gn=Math.min($.instanceCount,Xt);me.renderInstances(de,Ae,Gn)}else me.render(de,Ae)};function ee(E,B,$){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=$e,E.needsUpdate=!0,ht(E,B,$),E.side=_i,E.needsUpdate=!0,ht(E,B,$),E.side=yn):ht(E,B,$)}this.compile=function(E,B,$=null){$===null&&($=E),p=It.get($),p.init(B),b.push(p),$.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==$&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let Z=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Tt=V.material;if(Tt)if(Array.isArray(Tt))for(let Nt=0;Nt<Tt.length;Nt++){let kt=Tt[Nt];ee(kt,$,V),Z.add(kt)}else ee(Tt,$,V),Z.add(Tt)}),b.pop(),p=null,Z},this.compileAsync=function(E,B,$=null){let Z=this.compile(E,B,$);return new Promise(V=>{function Tt(){if(Z.forEach(function(Nt){H.get(Nt).currentProgram.isReady()&&Z.delete(Nt)}),Z.size===0){V(E);return}setTimeout(Tt,10)}I.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let xe=null;function pe(E){xe&&xe(E)}function we(){Ut.stop()}function At(){Ut.start()}let Ut=new iu;Ut.setAnimationLoop(pe),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(E){xe=E,Q.setAnimationLoop(E),E===null?Ut.stop():Ut.start()},Q.addEventListener("sessionstart",we),Q.addEventListener("sessionend",At),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,B,D),p=It.get(E,b.length),p.init(B),b.push(p),Ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(Ot),mt=this.localClippingEnabled,gt=rt.init(this.clippingPlanes,mt),m=ft.get(E,T.length),m.init(),T.push(m),Q.enabled===!0&&Q.isPresenting===!0){let Tt=y.xr.getDepthSensingMesh();Tt!==null&&ue(Tt,B,-1/0,y.sortObjects)}ue(E,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,xt),ot=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ot&&St.addToRenderList(m,E),this.info.render.frame++,gt===!0&&rt.beginShadows();let $=p.state.shadowsArray;_t.render($,E,B),gt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,V=m.transmissive;if(p.setupLights(),B.isArrayCamera){let Tt=B.cameras;if(V.length>0)for(let Nt=0,kt=Tt.length;Nt<kt;Nt++){let Gt=Tt[Nt];qe(Z,V,E,Gt)}ot&&St.render(E);for(let Nt=0,kt=Tt.length;Nt<kt;Nt++){let Gt=Tt[Nt];De(m,E,Gt,Gt.viewport)}}else V.length>0&&qe(Z,V,E,B),ot&&St.render(E),De(m,E,B);D!==null&&(v.updateMultisampleRenderTarget(D),v.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,B),Qt.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],gt===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ue(E,B,$,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){Z&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ot);let Nt=k.update(E),kt=E.material;kt.visible&&m.push(E,Nt,kt,$,Lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){let Nt=k.update(E),kt=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Lt.copy(Nt.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(Ot)),Array.isArray(kt)){let Gt=Nt.groups;for(let ne=0,se=Gt.length;ne<se;ne++){let Wt=Gt[ne],de=kt[Wt.materialIndex];de&&de.visible&&m.push(E,Nt,de,$,Lt.z,Wt)}}else kt.visible&&m.push(E,Nt,kt,$,Lt.z,null)}}let Tt=E.children;for(let Nt=0,kt=Tt.length;Nt<kt;Nt++)ue(Tt[Nt],B,$,Z)}function De(E,B,$,Z){let V=E.opaque,Tt=E.transmissive,Nt=E.transparent;p.setupLightsView($),gt===!0&&rt.setGlobalState(y.clippingPlanes,$),Z&&U.viewport(C.copy(Z)),V.length>0&&kn(V,B,$),Tt.length>0&&kn(Tt,B,$),Nt.length>0&&kn(Nt,B,$),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function qe(E,B,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new an(1,1,{generateMipmaps:!0,type:I.has("EXT_color_buffer_half_float")||I.has("EXT_color_buffer_float")?Vn:gn,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let Tt=p.state.transmissionRenderTarget[Z.id],Nt=Z.viewport||C;Tt.setSize(Nt.z,Nt.w);let kt=y.getRenderTarget();y.setRenderTarget(Tt),y.getClearColor(K),ut=y.getClearAlpha(),ut<1&&y.setClearColor(16777215,.5),y.clear(),ot&&St.render($);let Gt=y.toneMapping;y.toneMapping=mi;let ne=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),gt===!0&&rt.setGlobalState(y.clippingPlanes,Z),kn(E,$,Z),v.updateMultisampleRenderTarget(Tt),v.updateRenderTargetMipmap(Tt),I.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Wt=0,de=B.length;Wt<de;Wt++){let be=B[Wt],Ae=be.object,sn=be.geometry,me=be.material,Xt=be.group;if(me.side===yn&&Ae.layers.test(Z.layers)){let Gn=me.side;me.side=$e,me.needsUpdate=!0,J(Ae,$,Z,sn,me,Xt),me.side=Gn,me.needsUpdate=!0,se=!0}}se===!0&&(v.updateMultisampleRenderTarget(Tt),v.updateRenderTargetMipmap(Tt))}y.setRenderTarget(kt),y.setClearColor(K,ut),ne!==void 0&&(Z.viewport=ne),y.toneMapping=Gt}function kn(E,B,$){let Z=B.isScene===!0?B.overrideMaterial:null;for(let V=0,Tt=E.length;V<Tt;V++){let Nt=E[V],kt=Nt.object,Gt=Nt.geometry,ne=Z===null?Nt.material:Z,se=Nt.group;kt.layers.test($.layers)&&J(kt,B,$,Gt,ne,se)}}function J(E,B,$,Z,V,Tt){E.onBeforeRender(y,B,$,Z,V,Tt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(y,B,$,Z,E,Tt),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=$e,V.needsUpdate=!0,y.renderBufferDirect($,B,Z,V,E,Tt),V.side=_i,V.needsUpdate=!0,y.renderBufferDirect($,B,Z,V,E,Tt),V.side=yn):y.renderBufferDirect($,B,Z,V,E,Tt),E.onAfterRender(y,B,$,Z,V,Tt)}function ht(E,B,$){B.isScene!==!0&&(B=Zt);let Z=H.get(E),V=p.state.lights,Tt=p.state.shadowsArray,Nt=V.state.version,kt=et.getParameters(E,V.state,Tt,B,$),Gt=et.getProgramCacheKey(kt),ne=Z.programs;Z.environment=E.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(E.isMeshStandardMaterial?L:_).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ne===void 0&&(E.addEventListener("dispose",$t),ne=new Map,Z.programs=ne);let se=ne.get(Gt);if(se!==void 0){if(Z.currentProgram===se&&Z.lightsStateVersion===Nt)return qt(E,kt),se}else kt.uniforms=et.getUniforms(E),E.onBeforeCompile(kt,y),se=et.acquireProgram(kt,Gt),ne.set(Gt,se),Z.uniforms=kt.uniforms;let Wt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=rt.uniform),qt(E,kt),Z.needsLights=Oe(E),Z.lightsStateVersion=Nt,Z.needsLights&&(Wt.ambientLightColor.value=V.state.ambient,Wt.lightProbe.value=V.state.probe,Wt.directionalLights.value=V.state.directional,Wt.directionalLightShadows.value=V.state.directionalShadow,Wt.spotLights.value=V.state.spot,Wt.spotLightShadows.value=V.state.spotShadow,Wt.rectAreaLights.value=V.state.rectArea,Wt.ltc_1.value=V.state.rectAreaLTC1,Wt.ltc_2.value=V.state.rectAreaLTC2,Wt.pointLights.value=V.state.point,Wt.pointLightShadows.value=V.state.pointShadow,Wt.hemisphereLights.value=V.state.hemi,Wt.directionalShadowMap.value=V.state.directionalShadowMap,Wt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Wt.spotShadowMap.value=V.state.spotShadowMap,Wt.spotLightMatrix.value=V.state.spotLightMatrix,Wt.spotLightMap.value=V.state.spotLightMap,Wt.pointShadowMap.value=V.state.pointShadowMap,Wt.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=se,Z.uniformsList=null,se}function Pt(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function qt(E,B){let $=H.get(E);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Jt(E,B,$,Z,V){B.isScene!==!0&&(B=Zt),v.resetTextureUnits();let Tt=B.fog,Nt=Z.isMeshStandardMaterial?B.environment:null,kt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ds,Gt=(Z.isMeshStandardMaterial?L:_).get(Z.envMap||Nt),ne=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,se=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Wt=!!$.morphAttributes.position,de=!!$.morphAttributes.normal,be=!!$.morphAttributes.color,Ae=mi;Z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ae=y.toneMapping);let sn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=sn!==void 0?sn.length:0,Xt=H.get(Z),Gn=p.state.lights;if(gt===!0&&(mt===!0||E!==M)){let xn=E===M&&Z.id===S;rt.setState(Z,E,xn)}let ge=!1;Z.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Gn.state.version||Xt.outputColorSpace!==kt||V.isBatchedMesh&&Xt.batching===!1||!V.isBatchedMesh&&Xt.batching===!0||V.isBatchedMesh&&Xt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Xt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Xt.instancing===!1||!V.isInstancedMesh&&Xt.instancing===!0||V.isSkinnedMesh&&Xt.skinning===!1||!V.isSkinnedMesh&&Xt.skinning===!0||V.isInstancedMesh&&Xt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Xt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Xt.instancingMorph===!1&&V.morphTexture!==null||Xt.envMap!==Gt||Z.fog===!0&&Xt.fog!==Tt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==rt.numPlanes||Xt.numIntersection!==rt.numIntersection)||Xt.vertexAlphas!==ne||Xt.vertexTangents!==se||Xt.morphTargets!==Wt||Xt.morphNormals!==de||Xt.morphColors!==be||Xt.toneMapping!==Ae||Xt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Xt.__version=Z.version);let An=Xt.currentProgram;ge===!0&&(An=ht(Z,B,V));let Yi=!1,un=!1,Fs=!1,Re=An.getUniforms(),Nn=Xt.uniforms;if(U.useProgram(An.program)&&(Yi=!0,un=!0,Fs=!0),Z.id!==S&&(S=Z.id,un=!0),Yi||M!==E){U.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),Ad(st),Rd(st),Re.setValue(R,"projectionMatrix",st)):Re.setValue(R,"projectionMatrix",E.projectionMatrix),Re.setValue(R,"viewMatrix",E.matrixWorldInverse);let ri=Re.map.cameraPosition;ri!==void 0&&ri.setValue(R,Ft.setFromMatrixPosition(E.matrixWorld)),O.logarithmicDepthBuffer&&Re.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Re.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,un=!0,Fs=!0)}if(V.isSkinnedMesh){Re.setOptional(R,V,"bindMatrix"),Re.setOptional(R,V,"bindMatrixInverse");let xn=V.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Re.setValue(R,"boneTexture",xn.boneTexture,v))}V.isBatchedMesh&&(Re.setOptional(R,V,"batchingTexture"),Re.setValue(R,"batchingTexture",V._matricesTexture,v),Re.setOptional(R,V,"batchingIdTexture"),Re.setValue(R,"batchingIdTexture",V._indirectTexture,v),Re.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Re.setValue(R,"batchingColorTexture",V._colorsTexture,v));let zs=$.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0)&&wt.update(V,$,An),(un||Xt.receiveShadow!==V.receiveShadow)&&(Xt.receiveShadow=V.receiveShadow,Re.setValue(R,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Nn.envMap.value=Gt,Nn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Nn.envMapIntensity.value=B.environmentIntensity),un&&(Re.setValue(R,"toneMappingExposure",y.toneMappingExposure),Xt.needsLights&&ie(Nn,Fs),Tt&&Z.fog===!0&&at.refreshFogUniforms(Nn,Tt),at.refreshMaterialUniforms(Nn,Z,tt,pt,p.state.transmissionRenderTarget[E.id]),xs.upload(R,Pt(Xt),Nn,v)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(xs.upload(R,Pt(Xt),Nn,v),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Re.setValue(R,"center",V.center),Re.setValue(R,"modelViewMatrix",V.modelViewMatrix),Re.setValue(R,"normalMatrix",V.normalMatrix),Re.setValue(R,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let xn=Z.uniformsGroups;for(let ri=0,oi=xn.length;ri<oi;ri++){let El=xn[ri];N.update(El,An),N.bind(El,An)}}return An}function ie(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Oe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,B,$){H.get(E.texture).__webglTexture=B,H.get(E.depthTexture).__webglTexture=$;let Z=H.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||I.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){let $=H.get(E);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,$=0){D=E,A=B,P=$;let Z=!0,V=null,Tt=!1,Nt=!1;if(E){let Gt=H.get(E);if(Gt.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(Gt.__webglFramebuffer===void 0)v.setupRenderTarget(E);else if(Gt.__hasExternalTextures)v.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Wt=E.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&H.has(Wt)&&(E.width!==Wt.image.width||E.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(E)}}let ne=E.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Nt=!0);let se=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(se[B])?V=se[B][$]:V=se[B],Tt=!0):E.samples>0&&v.useMultisampledRTT(E)===!1?V=H.get(E).__webglMultisampledFramebuffer:Array.isArray(se)?V=se[$]:V=se,C.copy(E.viewport),Y.copy(E.scissor),X=E.scissorTest}else C.copy(vt).multiplyScalar(tt).floor(),Y.copy(Ht).multiplyScalar(tt).floor(),X=te;if(U.bindFramebuffer(R.FRAMEBUFFER,V)&&Z&&U.drawBuffers(E,V),U.viewport(C),U.scissor(Y),U.setScissorTest(X),Tt){let Gt=H.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Gt.__webglTexture,$)}else if(Nt){let Gt=H.get(E.texture),ne=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gt.__webglTexture,$||0,ne)}S=-1},this.readRenderTargetPixels=function(E,B,$,Z,V,Tt,Nt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){U.bindFramebuffer(R.FRAMEBUFFER,kt);try{let Gt=E.texture,ne=Gt.format,se=Gt.type;if(!O.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&$>=0&&$<=E.height-V&&R.readPixels(B,$,Z,V,zt.convert(ne),zt.convert(se),Tt)}finally{let Gt=D!==null?H.get(D).__webglFramebuffer:null;U.bindFramebuffer(R.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,B,$,Z,V,Tt,Nt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(kt=kt[Nt]),kt){let Gt=E.texture,ne=Gt.format,se=Gt.type;if(!O.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Z&&$>=0&&$<=E.height-V){U.bindFramebuffer(R.FRAMEBUFFER,kt);let Wt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Wt),R.bufferData(R.PIXEL_PACK_BUFFER,Tt.byteLength,R.STREAM_READ),R.readPixels(B,$,Z,V,zt.convert(ne),zt.convert(se),0);let de=D!==null?H.get(D).__webglFramebuffer:null;U.bindFramebuffer(R.FRAMEBUFFER,de);let be=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await wd(R,be,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Wt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Tt),R.deleteBuffer(Wt),R.deleteSync(be),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,$=0){E.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);let Z=Math.pow(2,-$),V=Math.floor(E.image.width*Z),Tt=Math.floor(E.image.height*Z),Nt=B!==null?B.x:0,kt=B!==null?B.y:0;v.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,Nt,kt,V,Tt),U.unbindTexture()},this.copyTextureToTexture=function(E,B,$=null,Z=null,V=0){E.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],B=arguments[2],V=arguments[3]||0,$=null);let Tt,Nt,kt,Gt,ne,se,Wt,de,be,Ae=E.isCompressedTexture?E.mipmaps[V]:E.image;$!==null?(Tt=$.max.x-$.min.x,Nt=$.max.y-$.min.y,kt=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,ne=$.min.y,se=$.isBox3?$.min.z:0):(Tt=Ae.width,Nt=Ae.height,kt=Ae.depth||1,Gt=0,ne=0,se=0),Z!==null?(Wt=Z.x,de=Z.y,be=Z.z):(Wt=0,de=0,be=0);let sn=zt.convert(B.format),me=zt.convert(B.type),Xt;B.isData3DTexture?(v.setTexture3D(B,0),Xt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(v.setTexture2DArray(B,0),Xt=R.TEXTURE_2D_ARRAY):(v.setTexture2D(B,0),Xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let Gn=R.getParameter(R.UNPACK_ROW_LENGTH),ge=R.getParameter(R.UNPACK_IMAGE_HEIGHT),An=R.getParameter(R.UNPACK_SKIP_PIXELS),Yi=R.getParameter(R.UNPACK_SKIP_ROWS),un=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ne),R.pixelStorei(R.UNPACK_SKIP_IMAGES,se);let Fs=E.isDataArrayTexture||E.isData3DTexture,Re=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Nn=H.get(E),zs=H.get(B),xn=H.get(Nn.__renderTarget),ri=H.get(zs.__renderTarget);U.bindFramebuffer(R.READ_FRAMEBUFFER,xn.__webglFramebuffer),U.bindFramebuffer(R.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let oi=0;oi<kt;oi++)Fs&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(E).__webglTexture,V,se+oi),E.isDepthTexture?(Re&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(B).__webglTexture,V,be+oi),R.blitFramebuffer(Gt,ne,Tt,Nt,Wt,de,Tt,Nt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Re?R.copyTexSubImage3D(Xt,V,Wt,de,be+oi,Gt,ne,Tt,Nt):R.copyTexSubImage2D(Xt,V,Wt,de,be+oi,Gt,ne,Tt,Nt);U.bindFramebuffer(R.READ_FRAMEBUFFER,null),U.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Xt,V,Wt,de,be,Tt,Nt,kt,sn,me,Ae.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Xt,V,Wt,de,be,Tt,Nt,kt,sn,Ae.data):R.texSubImage3D(Xt,V,Wt,de,be,Tt,Nt,kt,sn,me,Ae):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,V,Wt,de,Tt,Nt,sn,me,Ae.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,V,Wt,de,Ae.width,Ae.height,sn,Ae.data):R.texSubImage2D(R.TEXTURE_2D,V,Wt,de,Tt,Nt,sn,me,Ae);R.pixelStorei(R.UNPACK_ROW_LENGTH,Gn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ge),R.pixelStorei(R.UNPACK_SKIP_PIXELS,An),R.pixelStorei(R.UNPACK_SKIP_ROWS,Yi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,un),V===0&&B.generateMipmaps&&R.generateMipmap(Xt),U.unbindTexture()},this.copyTextureToTexture3D=function(E,B,$=null,Z=null,V=0){return E.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],B=arguments[3],V=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,$,Z,V)},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&v.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?v.setTextureCube(E,0):E.isData3DTexture?v.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?v.setTexture2DArray(E,0):v.setTexture2D(E,0),U.unbindTexture()},this.resetState=function(){A=0,P=0,D=null,U.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var rr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new w,or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ar=class extends Dn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cs,Gs=new w,ls=new w,hs=new w,us=new lt,Ws=new lt,cu=new ae,Wr=new w,Xs=new w,Xr=new w,Th=new lt,Ea=new lt,wh=new lt,_o=class extends Ke{constructor(t=new ar){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new go(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new or(n,3,0,!1)),cs.setAttribute("uv",new or(n,2,3,!1))}this.geometry=cs,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),cu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-hs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;qr(Wr.set(-.5,-.5,0),hs,o,ls,s,r),qr(Xs.set(.5,-.5,0),hs,o,ls,s,r),qr(Xr.set(.5,.5,0),hs,o,ls,s,r),Th.set(0,0),Ea.set(1,0),wh.set(1,1);let a=t.ray.intersectTriangle(Wr,Xs,Xr,!1,Gs);if(a===null&&(qr(Xs.set(-.5,.5,0),hs,o,ls,s,r),Ea.set(0,1),a=t.ray.intersectTriangle(Wr,Xr,Xs,!1,Gs),a===null))return;let c=t.ray.origin.distanceTo(Gs);c<t.near||c>t.far||e.push({distance:c,point:Gs.clone(),uv:pi.getInterpolation(Gs,Wr,Xs,Xr,Th,Ea,wh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function qr(i,t,e,n,s,r){us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ws.x=r*us.x-s*us.y,Ws.y=s*us.x+r*us.y):Ws.copy(us),i.copy(t),i.x+=Ws.x,i.y+=Ws.y,i.applyMatrix4(cu)}var Bi=class extends on{constructor(t=null,e=1,n=1,s,r,o,a,c,h=Je,l=Je,u,d){super(null,o,a,c,h,l,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new ae,Ah=new ae,Yr=[],Rh=new ti,Sg=new ae,qs=new Ee,Ys=new yi,xo=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Rh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ys.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Ah.multiplyMatrices(n,ds),qs.matrixWorld=Ah,qs.raycast(t,Yr);for(let o=0,a=Yr.length;o<a;o++){let c=Yr[o];c.instanceId=r,c.object=this,e.push(c)}Yr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bi(new Float32Array(s*this.count),s,this.count,sl,zn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Hi=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ch=new ae,Ic=new zi,Zr=new yi,$r=new w,Ts=class extends Ke{constructor(t=new Te,e=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Ch.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(Ch);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=h.getX(g);$r.fromBufferAttribute(u,m),Ph($r,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)$r.fromBufferAttribute(u,g),Ph($r,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ph(i,t,e,n,s,r,o){let a=Ic.distanceSqToPoint(i);if(a<e){let c=new w;Ic.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ws=class extends on{constructor(t,e,n,s,r,o,a,c,h){super(t,e,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let l=n[s],d=n[s+1]-l,f=(o-l)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new w,s=[],r=[],o=[],a=new w,c=new ae;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let h=Number.MAX_VALUE,l=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=h-this.aY;c=d*l-f*u+this.aX,h=d*u+f*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dc=class extends lr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ul(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,u){let d=(o-r)/h-(a-r)/(h+l)+(a-o)/l,f=(a-o)/l-(c-o)/(l+u)+(c-a)/u;d*=l,f*=l,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Jr=new w,Ta=new ul,wa=new ul,Aa=new ul,bn=class extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=s[(a-1)%r]:(Jr.subVectors(s[0],s[1]).add(s[0]),h=Jr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(Jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(l),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ta.initNonuniformCatmullRom(h.x,u.x,d.x,l.x,g,x,m),wa.initNonuniformCatmullRom(h.y,u.y,d.y,l.y,g,x,m),Aa.initNonuniformCatmullRom(h.z,u.z,d.z,l.z,g,x,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(h.x,u.x,d.x,l.x,this.tension),wa.initCatmullRom(h.y,u.y,d.y,l.y,this.tension),Aa.initCatmullRom(h.z,u.z,d.z,l.z,this.tension));return n.set(Ta.calc(c),wa.calc(c),Aa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ih(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function bg(i,t){let e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function Tg(i,t){return i*i*t}function Qs(i,t,e,n){return bg(i,t)+Eg(i,e)+Tg(i,n)}function wg(i,t){let e=1-i;return e*e*e*t}function Ag(i,t){let e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function tr(i,t,e,n,s){return wg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}var vo=class extends Sn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends Sn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,s.x,r.x,o.x,a.x),tr(t,s.y,r.y,o.y,a.y),tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends Sn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends Sn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends Sn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends Sn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qs(t,s.x,r.x,o.x),Qs(t,s.y,r.y,o.y),Qs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],h=s[o],l=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ih(a,c.x,h.x,l.x,u.x),Ih(a,c.y,h.y,l.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Eo=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:bn,CubicBezierCurve:vo,CubicBezierCurve3:Lc,EllipseCurve:lr,LineCurve:yo,LineCurve3:hr,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:So,SplineCurve:bo}),ur=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Eo[s.type]().fromJSON(s))}return this}},bi=class extends ur{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yo(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mo(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new vo(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let h=new lr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ei=class i extends Te{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,u=new w,d=new lt,f=new w,g=new w,x=new w,m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let T=0;T<=e;T++){let b=n+T*l*s,y=Math.sin(b),z=Math.cos(b);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*z,o.push(u.x,u.y,u.z),d.x=T/e,d.y=A/(t.length-1),a.push(d.x,d.y);let P=c[3*A+0]*y,D=c[3*A+1],S=c[3*A+0]*z;h.push(P,D,S)}}for(let T=0;T<e;T++)for(let b=0;b<t.length-1;b++){let y=b+T*t.length,z=y,A=y+t.length,P=y+t.length+1,D=y+1;r.push(z,A,D),r.push(P,D,A)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var fe=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function T(){let y=new w,z=new w,A=0,P=(e-t)/n;for(let D=0;D<=r;D++){let S=[],M=D/r,C=M*(e-t)+t;for(let Y=0;Y<=s;Y++){let X=Y/s,K=X*c+a,ut=Math.sin(K),j=Math.cos(K);z.x=C*ut,z.y=-M*n+m,z.z=C*j,u.push(z.x,z.y,z.z),y.set(ut,P,j).normalize(),d.push(y.x,y.y,y.z),f.push(X,1-M),S.push(g++)}x.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let M=x[S][D],C=x[S+1][D],Y=x[S+1][D+1],X=x[S][D+1];(t>0||S!==0)&&(l.push(M,C,X),A+=3),(e>0||S!==r-1)&&(l.push(C,Y,X),A+=3)}h.addGroup(p,A,0),p+=A}function b(y){let z=g,A=new lt,P=new w,D=0,S=y===!0?t:e,M=y===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let Y=0;Y<=s;Y++){let K=Y/s*c+a,ut=Math.cos(K),j=Math.sin(K);P.x=S*j,P.y=m*M,P.z=S*ut,u.push(P.x,P.y,P.z),d.push(0,M,0),A.x=ut*.5+.5,A.y=j*.5*M+.5,f.push(A.x,A.y),g++}for(let Y=0;Y<s;Y++){let X=z+Y,K=C+Y;y===!0?l.push(K,K+1,X):l.push(K+1,K,X),D+=3}h.addGroup(p,D,y===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},As=class i extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var En=class extends bi{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new bi().fromJSON(s))}return this}},Pg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=lu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h,l,u,d,f;if(n&&(r=Ng(i,t,r,e)),i.length>80*e){a=h=i[0],c=l=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>h&&(h=u),d>l&&(l=d);f=Math.max(h-a,l-c),f=f!==0?32767/f:0}return dr(r,o,e,a,c,f,0),o}};function lu(i,t,e,n,s){let r,o;if(s===qg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Dh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Dh(r,i[r],i[r+1],o);return o&&zo(o,o.next)&&(pr(o),o=o.next),o}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zo(e,e.next)||Pe(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hg(i,n,s,r);let a=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Dg(i,n,s,r):Ig(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),pr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Lg(Vi(i),t,e),dr(i,t,e,n,s,r,2)):o===2&&Ug(i,t,e,n,s,r):dr(Vi(i),t,e,n,s,r,1);break}}}function Ig(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,l=s<r?s<o?s:o:r<o?r:o,u=a<c?a<h?a:h:c<h?c:h,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>h?a:h:c>h?c:h,g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=d&&g.y>=u&&g.y<=f&&ps(s,a,r,c,o,h,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;let a=s.x,c=r.x,h=o.x,l=s.y,u=r.y,d=o.y,f=a<c?a<h?a:h:c<h?c:h,g=l<u?l<d?l:d:u<d?u:d,x=a>c?a>h?a:h:c>h?c:h,m=l>u?l>d?l:d:u>d?u:d,p=Uc(f,g,t,e,n),T=Uc(x,m,t,e,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=T;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ps(a,l,c,u,h,d,b.x,b.y)&&Pe(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ps(a,l,c,u,h,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&ps(a,l,c,u,h,d,b.x,b.y)&&Pe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=T;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ps(a,l,c,u,h,d,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Lg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!zo(s,r)&&hu(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Vi(n)}function Ug(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gg(o,a)){let c=uu(o,a);o=Vi(o,o.next),c=Vi(c,c.next),dr(o,t,e,n,s,r,0),dr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ng(i,t,e,n){let s=[],r,o,a,c,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=lu(i,a,c,n,!1),h===h.next&&(h.steiner=!0),s.push(kg(h));for(s.sort(Og),r=0;r<s.length;r++)e=Fg(s[r],e);return e}function Og(i,t){return i.x-t.x}function Fg(i,t){let e=zg(i,t);if(!e)return t;let n=uu(e,i);return Vi(n,n.next),Vi(e,e.next)}function zg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,h=s.y,l=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ps(o<h?r:n,o,c,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),fr(e,i)&&(u<l||u===l&&(e.x>s.x||e.x===s.x&&Bg(s,e)))&&(s=e,l=u)),e=e.next;while(e!==a);return s}function Bg(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Hg(i,t,e,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vg(s)}function Vg(i){let t,e,n,s,r,o,a,c,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function Uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ps(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wg(i,t)&&(fr(i,t)&&fr(t,i)&&Xg(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||zo(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zo(i,t){return i.x===t.x&&i.y===t.y}function hu(i,t,e,n){let s=jr(Pe(i,t,e)),r=jr(Pe(i,t,n)),o=jr(Pe(e,n,i)),a=jr(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&Kr(i,e,t)||r===0&&Kr(i,n,t)||o===0&&Kr(e,i,n)||a===0&&Kr(e,t,n))}function Kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jr(i){return i>0?1:i<0?-1:0}function Wg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fr(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Xg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uu(i,t){let e=new Nc(i.i,i.x,i.y),n=new Nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dh(i,t,e,n){let s=new Nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lh(t),Uh(n,t);let o=t.length;e.forEach(Lh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Uh(n,e[c]);let a=Pg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ni=class i extends Te{constructor(t=new En([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Yg,b,y=!1,z,A,P,D;p&&(b=p.getSpacedPoints(l),y=!0,d=!1,z=p.computeFrenetFrames(l,!1),A=new w,P=new w,D=new w),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(h),M=S.shape,C=S.holes;if(!gi.isClockWise(M)){M=M.reverse();for(let ot=0,yt=C.length;ot<yt;ot++){let R=C[ot];gi.isClockWise(R)&&(C[ot]=R.reverse())}}let X=gi.triangulateShape(M,C),K=M;for(let ot=0,yt=C.length;ot<yt;ot++){let R=C[ot];M=M.concat(R)}function ut(ot,yt,R){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(yt,R)}let j=M.length,pt=X.length;function tt(ot,yt,R){let q,I,O,U=ot.x-yt.x,nt=ot.y-yt.y,H=R.x-ot.x,v=R.y-ot.y,_=U*U+nt*nt,L=U*v-nt*H;if(Math.abs(L)>Number.EPSILON){let W=Math.sqrt(_),F=Math.sqrt(H*H+v*v),k=yt.x-nt/W,et=yt.y+U/W,at=R.x-v/F,ft=R.y+H/F,It=((at-k)*v-(ft-et)*H)/(U*v-nt*H);q=k+U*It-ot.x,I=et+nt*It-ot.y;let rt=q*q+I*I;if(rt<=2)return new lt(q,I);O=Math.sqrt(rt/2)}else{let W=!1;U>Number.EPSILON?H>Number.EPSILON&&(W=!0):U<-Number.EPSILON?H<-Number.EPSILON&&(W=!0):Math.sign(nt)===Math.sign(v)&&(W=!0),W?(q=-nt,I=U,O=Math.sqrt(_)):(q=U,I=nt,O=Math.sqrt(_/2))}return new lt(q/O,I/O)}let G=[];for(let ot=0,yt=K.length,R=yt-1,q=ot+1;ot<yt;ot++,R++,q++)R===yt&&(R=0),q===yt&&(q=0),G[ot]=tt(K[ot],K[R],K[q]);let xt=[],vt,Ht=G.concat();for(let ot=0,yt=C.length;ot<yt;ot++){let R=C[ot];vt=[];for(let q=0,I=R.length,O=I-1,U=q+1;q<I;q++,O++,U++)O===I&&(O=0),U===I&&(U=0),vt[q]=tt(R[q],R[O],R[U]);xt.push(vt),Ht=Ht.concat(vt)}for(let ot=0;ot<m;ot++){let yt=ot/m,R=f*Math.cos(yt*Math.PI/2),q=g*Math.sin(yt*Math.PI/2)+x;for(let I=0,O=K.length;I<O;I++){let U=ut(K[I],G[I],q);st(U.x,U.y,-R)}for(let I=0,O=C.length;I<O;I++){let U=C[I];vt=xt[I];for(let nt=0,H=U.length;nt<H;nt++){let v=ut(U[nt],vt[nt],q);st(v.x,v.y,-R)}}}let te=g+x;for(let ot=0;ot<j;ot++){let yt=d?ut(M[ot],Ht[ot],te):M[ot];y?(P.copy(z.normals[0]).multiplyScalar(yt.x),A.copy(z.binormals[0]).multiplyScalar(yt.y),D.copy(b[0]).add(P).add(A),st(D.x,D.y,D.z)):st(yt.x,yt.y,0)}for(let ot=1;ot<=l;ot++)for(let yt=0;yt<j;yt++){let R=d?ut(M[yt],Ht[yt],te):M[yt];y?(P.copy(z.normals[ot]).multiplyScalar(R.x),A.copy(z.binormals[ot]).multiplyScalar(R.y),D.copy(b[ot]).add(P).add(A),st(D.x,D.y,D.z)):st(R.x,R.y,u/l*ot)}for(let ot=m-1;ot>=0;ot--){let yt=ot/m,R=f*Math.cos(yt*Math.PI/2),q=g*Math.sin(yt*Math.PI/2)+x;for(let I=0,O=K.length;I<O;I++){let U=ut(K[I],G[I],q);st(U.x,U.y,u+R)}for(let I=0,O=C.length;I<O;I++){let U=C[I];vt=xt[I];for(let nt=0,H=U.length;nt<H;nt++){let v=ut(U[nt],vt[nt],q);y?st(v.x,v.y+b[l-1].y,b[l-1].x+R):st(v.x,v.y,u+R)}}}it(),gt();function it(){let ot=s.length/3;if(d){let yt=0,R=j*yt;for(let q=0;q<pt;q++){let I=X[q];Ot(I[2]+R,I[1]+R,I[0]+R)}yt=l+m*2,R=j*yt;for(let q=0;q<pt;q++){let I=X[q];Ot(I[0]+R,I[1]+R,I[2]+R)}}else{for(let yt=0;yt<pt;yt++){let R=X[yt];Ot(R[2],R[1],R[0])}for(let yt=0;yt<pt;yt++){let R=X[yt];Ot(R[0]+j*l,R[1]+j*l,R[2]+j*l)}}n.addGroup(ot,s.length/3-ot,0)}function gt(){let ot=s.length/3,yt=0;mt(K,yt),yt+=K.length;for(let R=0,q=C.length;R<q;R++){let I=C[R];mt(I,yt),yt+=I.length}n.addGroup(ot,s.length/3-ot,1)}function mt(ot,yt){let R=ot.length;for(;--R>=0;){let q=R,I=R-1;I<0&&(I=ot.length-1);for(let O=0,U=l+m*2;O<U;O++){let nt=j*O,H=j*(O+1),v=yt+q+nt,_=yt+I+nt,L=yt+I+H,W=yt+q+H;Ft(v,_,L,W)}}}function st(ot,yt,R){c.push(ot),c.push(yt),c.push(R)}function Ot(ot,yt,R){Lt(ot),Lt(yt),Lt(R);let q=s.length/3,I=T.generateTopUV(n,s,q-3,q-2,q-1);Zt(I[0]),Zt(I[1]),Zt(I[2])}function Ft(ot,yt,R,q){Lt(ot),Lt(yt),Lt(q),Lt(yt),Lt(R),Lt(q);let I=s.length/3,O=T.generateSideWallUV(n,s,I-6,I-3,I-2,I-1);Zt(O[0]),Zt(O[1]),Zt(O[3]),Zt(O[1]),Zt(O[2]),Zt(O[3])}function Lt(ot){s.push(c[ot*3+0]),s.push(c[ot*3+1]),s.push(c[ot*3+2])}function Zt(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Eo[s.type]().fromJSON(s)),new i(n,t.options)}},Yg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],l=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(h,l)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new lt(o,1-c),new lt(h,1-u),new lt(d,1-g),new lt(x,1-p)]:[new lt(a,1-c),new lt(l,1-u),new lt(f,1-g),new lt(m,1-p)]}};function Zg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mr=class i extends Te{constructor(t=new En([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let l=0;l<t.length;l++)h(t[l]),this.addGroup(a,c,l),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function h(l){let u=s.length/3,d=l.extractPoints(e),f=d.shape,g=d.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];gi.isClockWise(T)===!0&&(g[m]=T.reverse())}let x=gi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=x.length;m<p;m++){let T=x[m],b=T[0]+u,y=T[1]+u,z=T[2]+u;n.push(b,y,z),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $g(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function $g(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Rs=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],u=new w,d=new w,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let T=[],b=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let z=0;z<=e;z++){let A=z/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-b),T.push(h++)}l.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let b=l[p][T+1],y=l[p][T],z=l[p+1][T],A=l[p+1][T+1];(p!==0||o>0)&&f.push(b,y,A),(p!==n-1||c<Math.PI)&&f.push(y,z,A)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var To=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],h=[],l=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),d.subVectors(u,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;o.push(x,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ii=class i extends Te{constructor(t=new So(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,h=new lt,l=new w,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),T(),p()}function m(b){l=t.getPointAt(b/e,l);let y=o.normals[b],z=o.binormals[b];for(let A=0;A<=s;A++){let P=A/s*Math.PI*2,D=Math.sin(P),S=-Math.cos(P);c.x=S*y.x+D*z.x,c.y=S*y.y+D*z.y,c.z=S*y.z+D*z.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=l.x+n*c.x,a.y=l.y+n*c.y,a.z=l.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){let z=(s+1)*(b-1)+(y-1),A=(s+1)*b+(y-1),P=(s+1)*b+y,D=(s+1)*(b-1)+y;g.push(z,A,D),g.push(A,P,D)}}function T(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)h.x=b/e,h.y=y/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Eo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var wo=class extends Dn{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Oc=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends Oc{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ro=class extends Dn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function Qr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Cs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cl,endingEnd:Cl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,a=2*e-n;break;case Il:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pl:o=t,c=2*n-e;break;case Il:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let z=0;z!==a;++z)r[z]=p*o[l+z]+T*o[h+z]+b*o[c+z]+y*o[u+z];return r}},zc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(s-e),u=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[c+d]*l;return r}},Bc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case fc:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Jg(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ko,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=fc;var ki=class extends Ln{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ro;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Ln{};Hc.prototype.ValueTypeName="color";var Vc=class extends Ln{};Vc.prototype.ValueTypeName="number";var kc=class extends Cs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),h=t*a;for(let l=h+a;h!==l;h+=4)nn.slerpFlat(r,0,o,h-a,o,h,c);return r}},Co=class extends Ln{InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}};Co.prototype.ValueTypeName="quaternion";Co.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Ln{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ro;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Ln{};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null}}},Kg=new Wc,Xc=class{constructor(t){this.manager=t!==void 0?t:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var qc=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ra=new ae,Nh=new w,Oh=new w,Yc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zc=class extends Yc{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends qc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Po=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fh(){return performance.now()}var dl="\\[\\]\\.:\\/",jg=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",Qg="[^"+dl.replace("\\.","")+"]",t_=/((?:WC+[\/:])*)/.source.replace("WC",fl),e_=/(WCOD+)?/.source.replace("WCOD",Qg),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),i_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),s_=new RegExp("^"+t_+e_+n_+i_+"$"),r_=["material","materials","bones","map"],$c=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=s_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);r_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=$c;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);var zh=new ae,Io=class{constructor(t,e,n=0,s=1/0){this.ray=new zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,n=[]){return Jc(t,this,n,e),n.sort(Bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,n,e);return n.sort(Bh),n}};function Bh(i,t){return i.distance-t.distance}function Jc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Jc(r[o],t,e,!0)}}var gr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Do=class extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var du={type:"change"},gl={type:"start"},pu={type:"end"},Bo=new zi,fu=new pn,o_=Math.cos(70*Qh.DEG2RAD),Ge=new w,ln=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6,Ho=class extends Do{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new nn,this._lastTargetPosition=new w,this._quat=new nn().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gr,this._sphericalDelta=new gr,this._scale=1,this._panOffset=new w,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new w,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=a_.bind(this),this._onPointerUp=l_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=f_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=h_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=__.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=Se.NONE}update(t=null){let e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ge.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new w(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<o_?this.object.lookAt(this.target):(fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(fu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ln/60*this.autoRotateSpeed*t:ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ln*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function a_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function l_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=Se.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function h_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Se.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(gl)}function u_(i){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function d_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(i.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pu))}function f_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function p_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Se.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Se.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(gl)}function m_(i){switch(this._trackPointer(i),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Se.NONE}}function g_(i){this.enabled!==!1&&i.preventDefault()}function __(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vo=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v_=new bs(-1,1,1,-1,0,1),_l=class extends Te{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}},y_=new _l,Us=class{constructor(t){this._mesh=new Ee(y_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,v_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var _r={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ae},cameraProjectionMatrixInverse:{value:new ae},cameraWorldMatrix:{value:new ae},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new w(-1,-1,-1)},sceneBoxMax:{value:new w(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},xr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ko={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function mu(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=M_(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],c=2*Math.PI*a/n,h=new w(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(h.x*.5+.5)*255,s[o*4+1]=(h.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Bi(s,t,t);return r.wrapS=jn,r.wrapT=jn,r.needsUpdate=!0,r}function M_(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var vr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:xl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraProjectionMatrixInverse:{value:new ae},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function xl(i,t,e){let n=S_(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function S_(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new w(Math.cos(r),Math.sin(r),o))}return n}var Go={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Wo=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),h=Math.floor(e+a),l=(3-Math.sqrt(3))/6,u=(c+h)*l,d=c-u,f=h-u,g=t-d,x=e-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let T=g-m+l,b=x-p+l,y=g-1+2*l,z=x-1+2*l,A=c&255,P=h&255,D=this.perm[A+this.perm[P]]%12,S=this.perm[A+m+this.perm[P+p]]%12,M=this.perm[A+1+this.perm[P+1]]%12,C=.5-g*g-x*x;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[D],g,x));let Y=.5-T*T-b*b;Y<0?s=0:(Y*=Y,s=Y*Y*this.dot(this.grad3[S],T,b));let X=.5-y*y-z*z;return X<0?r=0:(X*=X,r=X*X*this.dot(this.grad3[M],y,z)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,h=(t+e+n)*.3333333333333333,l=Math.floor(t+h),u=Math.floor(e+h),d=Math.floor(n+h),f=1/6,g=(l+u+d)*f,x=l-g,m=u-g,p=d-g,T=t-x,b=e-m,y=n-p,z,A,P,D,S,M;T>=b?b>=y?(z=1,A=0,P=0,D=1,S=1,M=0):T>=y?(z=1,A=0,P=0,D=1,S=0,M=1):(z=0,A=0,P=1,D=1,S=0,M=1):b<y?(z=0,A=0,P=1,D=0,S=1,M=1):T<y?(z=0,A=1,P=0,D=0,S=1,M=1):(z=0,A=1,P=0,D=1,S=1,M=0);let C=T-z+f,Y=b-A+f,X=y-P+f,K=T-D+2*f,ut=b-S+2*f,j=y-M+2*f,pt=T-1+3*f,tt=b-1+3*f,G=y-1+3*f,xt=l&255,vt=u&255,Ht=d&255,te=this.perm[xt+this.perm[vt+this.perm[Ht]]]%12,it=this.perm[xt+z+this.perm[vt+A+this.perm[Ht+P]]]%12,gt=this.perm[xt+D+this.perm[vt+S+this.perm[Ht+M]]]%12,mt=this.perm[xt+1+this.perm[vt+1+this.perm[Ht+1]]]%12,st=.6-T*T-b*b-y*y;st<0?s=0:(st*=st,s=st*st*this.dot3(this.grad3[te],T,b,y));let Ot=.6-C*C-Y*Y-X*X;Ot<0?r=0:(Ot*=Ot,r=Ot*Ot*this.dot3(this.grad3[it],C,Y,X));let Ft=.6-K*K-ut*ut-j*j;Ft<0?o=0:(Ft*=Ft,o=Ft*Ft*this.dot3(this.grad3[gt],K,ut,j));let Lt=.6-pt*pt-tt*tt-G*G;return Lt<0?a=0:(Lt*=Lt,a=Lt*Lt*this.dot3(this.grad3[mt],pt,tt,G)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,l,u,d,f,g,x=(t+e+n+s)*c,m=Math.floor(t+x),p=Math.floor(e+x),T=Math.floor(n+x),b=Math.floor(s+x),y=(m+p+T+b)*h,z=m-y,A=p-y,P=T-y,D=b-y,S=t-z,M=e-A,C=n-P,Y=s-D,X=S>M?32:0,K=S>C?16:0,ut=M>C?8:0,j=S>Y?4:0,pt=M>Y?2:0,tt=C>Y?1:0,G=X+K+ut+j+pt+tt,xt=o[G][0]>=3?1:0,vt=o[G][1]>=3?1:0,Ht=o[G][2]>=3?1:0,te=o[G][3]>=3?1:0,it=o[G][0]>=2?1:0,gt=o[G][1]>=2?1:0,mt=o[G][2]>=2?1:0,st=o[G][3]>=2?1:0,Ot=o[G][0]>=1?1:0,Ft=o[G][1]>=1?1:0,Lt=o[G][2]>=1?1:0,Zt=o[G][3]>=1?1:0,ot=S-xt+h,yt=M-vt+h,R=C-Ht+h,q=Y-te+h,I=S-it+2*h,O=M-gt+2*h,U=C-mt+2*h,nt=Y-st+2*h,H=S-Ot+3*h,v=M-Ft+3*h,_=C-Lt+3*h,L=Y-Zt+3*h,W=S-1+4*h,F=M-1+4*h,k=C-1+4*h,et=Y-1+4*h,at=m&255,ft=p&255,It=T&255,rt=b&255,_t=a[at+a[ft+a[It+a[rt]]]]%32,St=a[at+xt+a[ft+vt+a[It+Ht+a[rt+te]]]]%32,wt=a[at+it+a[ft+gt+a[It+mt+a[rt+st]]]]%32,dt=a[at+Ot+a[ft+Ft+a[It+Lt+a[rt+Zt]]]]%32,Kt=a[at+1+a[ft+1+a[It+1+a[rt+1]]]]%32,zt=.6-S*S-M*M-C*C-Y*Y;zt<0?l=0:(zt*=zt,l=zt*zt*this.dot4(r[_t],S,M,C,Y));let Qt=.6-ot*ot-yt*yt-R*R-q*q;Qt<0?u=0:(Qt*=Qt,u=Qt*Qt*this.dot4(r[St],ot,yt,R,q));let N=.6-I*I-O*O-U*U-nt*nt;N<0?d=0:(N*=N,d=N*N*this.dot4(r[wt],I,O,U,nt));let Mt=.6-H*H-v*v-_*_-L*L;Mt<0?f=0:(Mt*=Mt,f=Mt*Mt*this.dot4(r[dt],H,v,_,L));let Q=.6-W*W-F*F-k*k-et*et;return Q<0?g=0:(Q*=Q,g=Q*Q*this.dot4(r[Kt],W,F,k,et)),27*(l+u+d+f+g)}};var Ns=class i extends Vo{constructor(t,e,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=mu(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new an(this.width,this.height,{type:Vn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new He({defines:Object.assign({},_r.defines),uniforms:qi.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ro,this.normalMaterial.blending=Be,this.pdMaterial=new He({defines:Object.assign({},vr.defines),uniforms:qi.clone(vr.uniforms),vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new He({defines:Object.assign({},xr.defines),uniforms:qi.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,blending:Be}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new He({uniforms:qi.clone(Go.uniforms),vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Uo,blendDst:Is,blendEquation:Mn,blendSrcAlpha:Lo,blendDstAlpha:Is,blendEquationAlpha:Mn}),this.blendMaterial=new He({uniforms:qi.clone(ko.uniforms),vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Qc,blendSrc:Uo,blendDst:Is,blendEquation:Mn,blendSrcAlpha:Lo,blendDstAlpha:Is,blendEquationAlpha:Mn}),this.fsQuad=new Us(null),this.originalClearColor=new Yt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=vi,this.depthTexture.type=xi,this.normalRenderTarget=new an(this.width,this.height,{minFilter:Je,magFilter:Je,type:Vn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Be,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new Wo,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let c=o,h=a;s[(o*t+a)*4]=(e.noise(c,h)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(c+t,h)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(c,h+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(c+t,h+t)*.5+.5)*255}let r=new Bi(s,t,t,mn,gn);return r.wrapS=jn,r.wrapT=jn,r.needsUpdate=!0,r}};Ns.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function Xo(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Te,h=0;for(let l=0;l<i.length;++l){let u=i[l],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(e){let l=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+l);l+=i[d].attributes.position.count}c.setIndex(u)}for(let l in r){let u=gu(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(let l in o){let u=o[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[l].length;++x)f.push(o[l][x][d]);let g=gu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function gu(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let l=i[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new Ie(o,e,n),c=0;for(let h=0;h<i.length;++h){let l=i[h];if(l.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=l.count;d<f;d++)for(let g=0;g<e;g++){let x=l.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(l.array,c);c+=l.count*e}return s!==void 0&&(a.gpuType=s),a}var yr=new w;function Tn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;yr.copy(t),yr[n]=0,yr.normalize();let h=.5*o/(o+a),l=1-yr.angleTo(i)/c;return Math.sign(yr[e])===1?l*h:a/(o+a)+h+h*(1-l)}var qo=class extends ei{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new w,c=new w,h=new w(t,e,n).divideScalar(2).subScalar(r),l=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=l.length/6,g=new w,x=.5/s;for(let m=0,p=0;m<l.length;m+=3,p+=2)switch(a.fromArray(l,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),l[m+0]=h.x*Math.sign(a.x)+c.x*r,l[m+1]=h.y*Math.sign(a.y)+c.y*r,l[m+2]=h.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Tn(g,c,"z","y",r,n),d[p+1]=1-Tn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Tn(g,c,"z","y",r,n),d[p+1]=1-Tn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Tn(g,c,"x","z",r,t),d[p+1]=Tn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Tn(g,c,"x","z",r,t),d[p+1]=1-Tn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Tn(g,c,"x","y",r,t),d[p+1]=1-Tn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Tn(g,c,"x","y",r,t),d[p+1]=1-Tn(g,c,"y","x",r,e);break}}};var _e={L:4054,centro:1996.85,secs:[[0,102,180],[102,218,178],[218,320,180],[320,491,220],[491,653.1,279.9],[653.1,666.8,345],[666.8,879.65,279.7],[879.65,893.35,345],[893.35,1215.8,279.9],[1215.8,1295.2,374.7],[1295.2,1368.2,377.9],[1368.2,1542.4,394],[1542.4,1866.7,394],[1866.7,2139.8,395],[2139.8,2416,397],[2416,2638.2,406.4],[2638.2,2711.2,377.9],[2711.2,2790.3,374.7],[2790.3,3203.9,279.9],[3203.9,3217.6,345],[3217.6,3430.38,279.7],[3430.38,3444.08,345],[3444.08,3584,279.9],[3584,4054,280.8]],mLOA:773.2,mLA:3324,pacote:[1368.2,2625.5],ventLA:[2638.2,2711.2],ventLOA:[1295.2,1368.2],excit:[218,491],diodos:[0,218]},xu=1.35,le=i=>(i-_e.centro)/1e3*xu,Rt={polos:4,ranhuras:72,bore:.665,rExt:.97,nucleo:le(_e.pacote[1])-le(_e.pacote[0]),pacotes:7,duto:.014,rotorR:.648,aranhaR:.36,polCorpo:.3,polAlt:.17,sapata:.07,frame:{x0:-1.62,x1:1.62,z:1.13,y0:-1.07,y1:1.07},cooler:{y0:1.07,y1:1.89},base:-1.32};var _u=1.24,vl=1.32,Un=Rt.frame.x1+.05+.03,jt={rD:.38,yS:-.56,zS:.335,rF:.56,rC:.42,hb:.21,eF:.04},yl=i=>i>0?Math.max(Math.abs(le(_e.mLA)),Un+.04):Math.max(Math.abs(le(_e.mLOA)),Un+.03);function vu(){let i=(t,e,n,s={})=>new Ao({color:t,metalness:e,roughness:n,...s});return{chapa:i(5792363,.8,.36),chapaFace:i(7108480,.8,.3),cobre:i(12087356,1,.26),bobina:i(7024413,.05,.42,{clearcoat:.8,clearcoatRoughness:.25}),campo:i(12745542,1,.3),isol:i(2828067,0,.7),eixo:i(8358031,1,.34,{anisotropy:.35}),eixoFosco:i(9278875,1,.36),aco:i(10134184,1,.3),pintura:i(8889271,0,.42,{clearcoat:.55,clearcoatRoughness:.3}),pinturaEsc:i(7705513,0,.45,{clearcoat:.45,clearcoatRoughness:.34}),mancal:i(8231857,0,.4,{clearcoat:.55,clearcoatRoughness:.3}),base:i(3818314,.7,.45),ferroFundido:i(7173498,.6,.55),patente:i(14341574,1,.22),oleo:i(14194218,0,.12,{transparent:!0,opacity:.86}),inox:i(11976387,1,.24),aluminio:i(13489111,1,.3),latao:i(13148234,1,.26),diodo:i(2237736,.3,.45),dissip:i(11910595,1,.3),aguaFria:i(3112912,0,.35,{clearcoat:.6}),aguaQuente:i(13124910,0,.35,{clearcoat:.6}),caboPos:i(12986408,0,.45),caboNeg:i(1842204,0,.45),trancado:i(12173508,1,.42),vidro:i(14019829,0,.04,{transparent:!0,opacity:.45}),aletas:i(13883869,1,.32),caixaAgua:i(5993351,0,.42,{clearcoat:.5,clearcoatRoughness:.3}),oleoTubo:i(12683818,.1,.4,{clearcoat:.6,clearcoatRoughness:.3}),amarelo:new cn({color:15909376}),preto:new cn({color:1382426}),faseU:i(12597547,.1,.42,{clearcoat:.5}),faseV:i(13935130,.1,.42,{clearcoat:.5}),faseW:i(2912191,.1,.42,{clearcoat:.5}),norte:i(13780271,.2,.4,{emissive:4852998,emissiveIntensity:.4}),sul:i(3108816,.2,.4,{emissive:532554,emissiveIntensity:.4})}}var b_=i=>(i.rotateZ(-Math.PI/2),i),Vt=(i,t,e,n=.008)=>new qo(i,t,e,2,Math.max(4e-4,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4)));function hn(i,t,e=.004,n=48){let s=Math.min(e,t/4),r=new ni(i,{depth:Math.max(1e-4,t-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelOffset:-s,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(t-2*s)/2),r.rotateY(Math.PI/2),r}var wn=(i,t=!1,e=0,n=0)=>{let s=t?new bi:new En;return s.absarc(e,n,i,0,Math.PI*2,t),s};function ye(i,t,e,n=96,s=.003){let r=wn(t);return r.holes.push(wn(i,!0)),hn(r,e,Math.min(s,(t-i)/4),n)}var Yo=(i,t,e=48)=>b_(new fe(i,i,t,e)),_n=(i,...t)=>{let e=new En;return i.forEach(([n,s],r)=>r?e.lineTo(n,s):e.moveTo(n,s)),e.closePath(),e.holes.push(...t),e},Ml=i=>{let t=new bi;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t};function Zo(i,t,e,n,s,r=6){let o=[],a=[[e-s,t+s,-Math.PI/2],[e-s,n-s,0],[i+s,n-s,Math.PI/2],[i+s,t+s,Math.PI]];for(let[c,h,l]of a)for(let u=0;u<=r;u++){let d=l+u/r*Math.PI/2;o.push([c+s*Math.cos(d),h+s*Math.sin(d)])}return o}function Mr(i=0){let t=jt.rD+i,e=jt.yS-i,n=jt.zS+i,s=.06+i*.5,r=[];for(let o=0;o<=40;o++){let a=o/40*Math.PI,c=t*Math.cos(a);r.push([(Math.max(-n,Math.min(n,c))===c,c),t*Math.sin(a)])}r.push([-n,0]);for(let o=0;o<=6;o++){let a=Math.PI+o/6*Math.PI/2;r.push([-n+s+s*Math.cos(a),e+s+s*Math.sin(a)])}for(let o=0;o<=6;o++){let a=1.5*Math.PI+o/6*Math.PI/2;r.push([n-s+s*Math.cos(a),e+s+s*Math.sin(a)])}return r.push([n,0]),r}function Sl(i=.012){let t=new fe(i*1.75,i*1.75,i*1.15,6);t.translate(0,i*.3+i*.575,0);let e=new fe(i*2.2,i*2.2,i*.3,20);e.translate(0,i*.15,0);let n=new fe(i*1.2,i*1.2,i*.12,16);return n.translate(0,i*1.51,0),Xo([t,e,n])}var E_=new w(0,1,0);function T_(i,t,e,n){let s=Math.min(e,n)*.38,r=[[e/2,n/2-s],[e/2-s,n/2],[-e/2+s,n/2],[-e/2,n/2-s],[-e/2,-n/2+s],[-e/2+s,-n/2],[e/2-s,-n/2],[e/2,-n/2+s]],o=r.length,a=[],c=[],h=[],l=new w,u=new w,d=new w,f=new w;for(let x=0;x<=t;x++){i.getPoint(x/t,l),i.getTangent(x/t,u),d.set(0,l.y,l.z).normalize(),d.addScaledVector(u,-d.dot(u)).normalize(),f.crossVectors(u,d).normalize();for(let[m,p]of r)a.push(l.x+d.x*m+f.x*p,l.y+d.y*m+f.y*p,l.z+d.z*m+f.z*p),c.push(x/t,0)}for(let x=0;x<t;x++)for(let m=0;m<o;m++){let p=x*o+m,T=x*o+(m+1)%o,b=p+o,y=T+o;h.push(p,T,b,T,y,b)}let g=new Te;return g.setAttribute("position",new ce(a,3)),g.setAttribute("uv",new ce(c,2)),g.setIndex(h),g.computeVertexNormals(),g}function Ne(i,t,e,n){let s=new Ee(i,t);return s.castShadow=s.receiveShadow=!0,e&&(s.userData.parte=e),n&&(s.name=n),s}function yu(i,{leve:t}){let e=new rn,n={},s={},r=(q,I=e)=>{let O=new rn;return O.name=q,O.userData.parte=q,I.add(O),n[q]=O,O},o=[],a=q=>{let I=q.clone();return o.push(I),I},c=new Map,h=q=>(c.has(q)||c.set(q,a(q)),c.get(q)),l=(q,I,O,U=0,nt=0,H=0,v=q.userData.parte)=>{let _=Ne(I,O,v);return _.position.set(U,nt,H),q.add(_),_},u=new nn,d=Sl(.012),f=Sl(.009),g=Sl(.016),x=(q,I,O,U,nt,H,v=d)=>{let _=Ne(v,I,q.userData.parte);return _.position.set(O,U,nt),_.quaternion.copy(u.setFromUnitVectors(E_,H)),q.add(_),_},m=q=>new w(q,0,0),p=q=>new w(0,0,q),T=new w(0,1,0),b=new rn;b.name="giro",e.add(b);let y=r("eixo",b),z=.032,A=-Rt.nucleo/2+.07;{let q=[new lt(0,A),new lt(z,A),new lt(z,le(0))];for(let[O,U,nt]of _e.secs){let H=nt/2e3,v=Math.min(.003,(U-O)/4e3);q.push(new lt(H-v,le(O)),new lt(H,le(O)+v),new lt(H,le(U)-v),new lt(H-v,le(U)))}q.push(new lt(0,le(_e.L)));let I=new Ei(q,96);I.rotateZ(-Math.PI/2),I.computeVertexNormals(),y.add(Ne(I,a(i.eixo),"eixo"));for(let[O,U,nt,H]of[[2638.2,73,377.9,25],[1295.2,73,377.9,25],[223,92,180,20]])l(y,Vt(U/1e3,.014,H/1e3,.003),h(i.isol),le(O+U/2),nt/2e3-.003,0)}let P=r("rotor",b),D=r("campo",b),S=Rt.nucleo,M=Rt.rotorR;P.add(Ne(ye(.205,Rt.aranhaR,S),i.chapa,"rotor"));for(let q=0;q<Rt.polos;q++){let I=q*2*Math.PI/Rt.polos,O=new rn;O.rotation.x=I,P.add(O);let U=Ne(Vt(S*.97,Rt.polAlt+.02,Rt.polCorpo,.006),i.chapa,"rotor");U.position.y=Rt.aranhaR+Rt.polAlt/2-.01,O.add(U);let nt=new En,H=.62*Math.PI/Rt.polos,v=Rt.aranhaR+Rt.polAlt;nt.moveTo(v*Math.sin(-H*.92),v*Math.cos(-H*.92));for(let rt=0;rt<=28;rt++){let _t=-H+2*H*rt/28,St=M-.018*Math.pow(Math.abs(_t/H),2);nt.lineTo(St*Math.sin(_t),St*Math.cos(_t))}nt.lineTo(v*Math.sin(H*.92),v*Math.cos(H*.92)),nt.closePath();let _=hn(nt,S,.005,4),L=Ne(_,i.chapaFace,"rotor");L.userData.polo=q,L.userData.manter=!0,O.add(L);let W=Rt.polCorpo+.07,F=S*.97+.07,et=_n(Zo(-F/2,-W/2,F/2,W/2,.05,5),Ml(Zo(-(S*.97+.006)/2,-(Rt.polCorpo+.006)/2,(S*.97+.006)/2,(Rt.polCorpo+.006)/2,.004,1).reverse())),at=new ni(et,{depth:Rt.polAlt-.035,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:6});at.rotateX(-Math.PI/2);let ft=Ne(at,i.campo,"campo");ft.position.y=Rt.aranhaR+.012,ft.userData.polo=q,ft.userData.manter=!0,O.add(ft);let It=Ne(Vt(F,.006,W,.002),i.isol,"campo");It.position.y=Rt.aranhaR+Rt.polAlt-.018,O.add(It);for(let rt=0;rt<7;rt++){let _t=-H*.8+2*H*.8*rt/6,St=M-.03,wt=Ne(Yo(.008,S+.06,12),i.latao,"amortecedor");wt.position.set(0,St*Math.cos(_t),St*Math.sin(_t)),O.add(wt)}}for(let q of[-1,1]){let I=Ne(ye(M-.05,M-.012,.018,96),i.latao,"amortecedor");I.position.x=q*(S/2+.03),P.add(I)}let C=(()=>{let q=[];for(let H=0;H<=14;H++){let v=.225+.32700000000000007*H/14,_=.55*((v-.225)/(.552-.225))**1.3;q.push([v*Math.sin(_),v*Math.cos(_)])}for(let H=14;H>=0;H--){let v=.225+.32700000000000007*H/14,_=.55*((v-.225)/(.552-.225))**1.3+.011/v;q.push([v*Math.sin(_),v*Math.cos(_)])}return hn(_n(q),.1,.002,4)})(),Y=(q,I)=>{let O=r(I,b),U=16;O.add(Ne(ye(.1405,.2,.13,64,.006),i.aco,I)),O.add(Ne(ye(.2,.565,.012,96).translate(-.056,0,0),i.aluminio,I)),O.add(Ne(ye(.43,.565,.01,96).translate(.055,0,0),i.aluminio,I));for(let nt=0;nt<U;nt++){let H=Ne(C,i.aluminio,I);H.rotation.x=nt*2*Math.PI/U,O.add(H)}for(let nt=0;nt<8;nt++){let H=nt*Math.PI/4,v=Ne(Yo(.011,.15,10),i.eixoFosco,I);v.position.set(0,.17*Math.cos(H),.17*Math.sin(H)),O.add(v)}return O.position.x=q,O};Y(vl,"ventLA"),Y(-vl,"ventLOA").scale.x=-1;let X=r("excitatriz",b);{let q=(le(_e.excit[0])+le(_e.excit[1]))/2,I=le(_e.excit[1])-le(_e.excit[0]);l(X,ye(.11,.25,I*.9),i.chapa,q);for(let nt of[-1,1])l(X,ye(.2,.256,.045),i.cobre,q+nt*I*.48);let O=(le(_e.diodos[0])+le(_e.diodos[1]))/2,U=r("diodos",b);l(U,ye(.095,.3,.035),i.dissip,O);for(let nt=0;nt<18;nt++){let H=nt*Math.PI/9,v=l(U,Vt(.09,.06,.006,.002),i.dissip,O+.045,.24*Math.cos(H),.24*Math.sin(H));v.rotation.x=-H}for(let nt=0;nt<6;nt++){let H=nt*Math.PI/3+Math.PI/6,v=l(U,new fe(.024,.024,.032,20),i.diodo,O-.035,.2*Math.cos(H),.2*Math.sin(H));v.rotation.z=Math.PI/2}l(U,Vt(.03,.05,.09,.006),i.aguaFria,O-.035,0,.16)}{let q=[],I=[],O=le(0)-.03,U=A-.03;for(let[nt,H]of[[q,.013],[I,-.013]]){let v=Math.sign(H);nt.push(new w(le(_e.diodos[0])+.05,v*.2,0),new w(O-.02,v*.08,0),new w(O+.03,H,0));for(let _ of[le(_e.excit[1]),le(_e.mLOA),le(1215),-S/2])nt.push(new w(_,H,0));nt.push(new w(U,H*1.2,0),new w(U+.01,v*.1,0),new w(U+.01,v*(Rt.aranhaR-.04),0),new w(-S/2-.035,v*(Rt.aranhaR+.015),0),new w(-S/2-.04,v*(Rt.aranhaR+.06),v*.05))}for(let[nt,H]of[[q,i.caboPos],[I,i.caboNeg]]){let v=new bn(nt,!1,"centripetal"),_=Ne(new ii(v,160,.009,10,!1),H,"cabos");_.userData.manter=!0,D.add(_),(s.cabos=s.cabos||[]).push(v)}}let K=r("estator"),ut=r("enrolamento"),j=Rt.ranhuras,pt=.13,tt=.024;{let q=wn(Rt.rExt),I=new bi;for(let v=0;v<j;v++){let _=v*2*Math.PI/j,L=tt/Rt.bore/2,W=_+Math.PI/j,F=(et,at)=>[et*Math.cos(at),et*Math.sin(at)];[F(Rt.bore,_),F(Rt.bore,W-L),F(Rt.bore+pt,W-L),F(Rt.bore+pt,W+L),F(Rt.bore,W+L)].forEach(([et,at],ft)=>v===0&&ft===0?I.moveTo(et,at):I.lineTo(et,at))}I.closePath(),q.holes.push(I);let O=(S-(Rt.pacotes-1)*Rt.duto)/Rt.pacotes,U=hn(q,O,.0025,72),nt=a(i.chapa);for(let v=0;v<Rt.pacotes;v++)l(K,U,nt,-S/2+O/2+v*(O+Rt.duto));for(let v=1;v<Rt.pacotes;v++)for(let _=0;_<24;_++){let L=_*Math.PI/12+.05,W=-S/2+v*(O+Rt.duto)-Rt.duto/2,F=(Rt.bore+pt+Rt.rExt)/2,k=l(K,Vt(Rt.duto,.2,.008,.002),nt,W,F*Math.cos(L),F*Math.sin(L));k.rotation.x=L}let H=a(i.pinturaEsc);for(let v of[-1,1])l(K,ye(Rt.bore+pt+.02,Rt.rExt-.01,.03),H,v*(S/2+.015));for(let v=0;v<12;v++){let _=v*Math.PI/6,L=l(K,Vt(S+.1,.05,.05,.006),H,0,(Rt.rExt+.02)*Math.cos(_),(Rt.rExt+.02)*Math.sin(_));L.rotation.x=_}}{let I=v=>Math.floor(v%18/6)%3,O=[[],[],[]];for(let v=0;v<j;v++){let _=(v+.5)*2*Math.PI/j,L=(v+15+.5)*2*Math.PI/j,W=Rt.bore+pt*.72,F=Rt.bore+pt*.3;for(let[k,et]of[[_,W],[L,F]]){let at=Vt(S+.02,pt*.38,tt*.8,.004);at.rotateX(k-Math.PI/2),at.translate(0,et*Math.sin(k),-et*Math.cos(k)),O[I(v)].push(at)}for(let k of[-1,1]){let et=[];for(let ft=0;ft<=12;ft++){let It=ft/12,rt=_+(L-_)*It,_t=W+(F-W)*It+.05*Math.sin(Math.PI*It),St=k*(S/2+.01+.26*Math.sin(Math.PI*It)*.9+.02*(1-Math.cos(Math.PI*It)));et.push(new w(St,_t*Math.sin(rt),-_t*Math.cos(rt)))}O[I(v)].push(T_(new bn(et),22,.036,.015).toNonIndexed())}}let nt=a(i.bobina);s.fases=[];for(let v=0;v<3;v++){O[v].forEach(L=>{for(let W of Object.keys(L.attributes))["position","normal","uv"].includes(W)||L.deleteAttribute(W)});let _=Ne(Xo(O[v]),nt,"enrolamento");_.userData.fase=v,_.userData.manter=!0,ut.add(_),s.fases.push(_)}let H=a(i.isol);for(let v of[-1,1])for(let _ of[.12,.2])l(ut,ye(Rt.bore+.2,Rt.bore+.226,.026),H,v*(S/2+_));s.saidas=[];for(let v=0;v<3;v++){let _=[new w(-(S/2+.2),(Rt.bore+.2)*.3,(Rt.bore+.2)*.95),new w(-(S/2+.22),.3,1),new w(-1.26,.05,1.14),new w(-1.36+v*.1,-.12,Rt.frame.z+.1)],L=Ne(new ii(new bn(_),48,.02,12,!1),a([i.faseU,i.faseV,i.faseW][v]),"terminais");L.userData.manter=!0,ut.add(L),s.saidas.push(L)}}let G=Rt.frame,xt=G.x1-G.x0,vt=.03,Ht=.05,te=G.y0+.3,it=G.z-.14,gt=Rt.base+.05,mt=r("carcaca"),st=r("trocador"),Ot=r("base"),Ft=r("terminais"),Lt=a(i.pintura),Zt=a(i.pinturaEsc),ot=a(i.eixoFosco),yt=a(i.inox);{for(let F of[-1,1]){l(mt,Vt(xt,G.y1-te,vt,.006),Lt,0,(G.y1+te)/2,F*(G.z-vt/2)),l(mt,Vt(xt,te-G.y0+vt,vt,.006),Zt,0,(G.y0+te)/2,F*(it-vt/2)),l(mt,Vt(xt,vt,G.z-it,.006),Lt,0,te+vt/2,F*(it+G.z)/2),l(mt,Vt(xt+.02,.05,.05,.01),Zt,0,G.y1-.025,F*(G.z+.012));for(let k=0;k<9;k++)x(mt,ot,G.x0+.14+k*(xt-.28)/8,G.y1-.025,F*(G.z+.037),p(F),f);l(mt,Vt(1.5,.8,.022,.014),Lt,-.05,-.22,F*(G.z+.011));for(let k=0;k<9;k++)for(let et of[-.58,.14])x(mt,ot,-.75+k*.175,et,F*(G.z+.022),p(F),f);for(let k of[-.75,.65])for(let et of[-.34,-.1])x(mt,ot,k,et,F*(G.z+.022),p(F),f)}l(mt,Vt(xt,vt,2*it,.006),Zt,0,G.y0+vt/2,0);for(let F of[-1,1])l(mt,Vt(xt,vt,.24,.006),Lt,0,G.y1-vt/2,F*(G.z-.12)),l(mt,Vt(.06,vt,2*G.z-.48,.006),Lt,F*_u,G.y1-vt/2,0);let q=G.z+.04,I=new En,O=G.y1-.13,U=.09;I.moveTo(-q,gt+.05),I.lineTo(q,gt+.05),I.lineTo(q,O-.2),I.lineTo(q+.07,O-U),I.absarc(q+.07,O,U,-Math.PI/2,Math.PI/2,!1),I.lineTo(q,G.y1),I.lineTo(-q,G.y1),I.lineTo(-q-.07,O+U),I.absarc(-q-.07,O,U,Math.PI/2,1.5*Math.PI,!1),I.lineTo(-q,O-.2),I.closePath(),I.holes.push(wn(jt.rC+.03,!0),wn(.04,!0,q+.07,O),wn(.04,!0,-q-.07,O));let nt=hn(I,Ht,.006,32),H=_n(Array.from({length:97},(F,k)=>[.98*Math.cos(k/96*2*Math.PI),.98*Math.sin(k/96*2*Math.PI)]).slice(0,96),wn(jt.rC+.03,!0)),v=hn(H,.03,.005,96);for(let F of[-1,1]){l(mt,nt,Lt,F*(G.x1+Ht/2)),l(mt,v,Zt,F*(G.x1+Ht+.015)),l(mt,ye(.9,.98,.02,96,.004),Lt,F*(Un+.01));for(let It=0;It<20;It++){let rt=It*Math.PI/10+Math.PI/20;x(mt,ot,F*(Un+.02),.94*Math.sin(rt),.94*Math.cos(rt),m(F))}let k=yl(F)-jt.eF/2-Un,et=[[jt.rC+.03,0],[jt.rC+.03,k],[jt.rF+.07,k],[jt.rF+.09,k-.008],[.9,.036],[.91,.03],[.91,0]].map(([It,rt])=>new lt(It,rt)),at=new Ei(et,128);at.rotateZ(-Math.PI/2*F),at.computeVertexNormals(),l(mt,at,Zt,F*Un);let ft=new ni(_n([[.655,0],[.9,0],[.9,.05],[.655,.12]]),{depth:.036,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelOffset:-.004,bevelSegments:2});ft.translate(0,0,-.018);for(let It=0;It<12;It++){let rt=It*Math.PI/6,_t=new w(0,Math.cos(rt),Math.sin(rt)),St=new w(F,0,0),wt=new w().crossVectors(_t,St),dt=ft.clone().applyMatrix4(new ae().makeBasis(_t,St,wt));l(mt,dt,Zt,F*Un)}l(mt,Vt(.26,.16,.1,.014),Zt,F*(G.x1+Ht+.05),.98*0+G.y1-.1,-.55),l(mt,Vt(.02,.13,.23,.006),Lt,F*(G.x1+Ht+.105),G.y1-.1,-.55)}let _=_n(Zo(-(G.z-.035),G.y0+.035,G.z-.035,G.y1-.035,.02,2),wn(Rt.rExt+.04,!0),...[[1,1],[1,-1],[-1,1],[-1,-1]].map(([F,k])=>wn(.09,!0,F*(G.z-.2),k*(G.y1-.2)))),L=hn(_,.025,.003,72);for(let F of[-.6,0,.6])l(mt,L,Zt,F);{let F=_u,k=vl+.075,et=.59,at=.075,ft=h(i.inox),It=_n(Zo(-(G.z-vt),G.y0+vt,G.z-vt,G.y1-vt,.02,2),wn(et+.012,!0)),rt=hn(It,.012,.003,72),_t=[];for(let wt=0;wt<=14;wt++){let dt=wt/14*Math.PI/2;_t.push([et+at*(1-Math.cos(dt)),at*Math.sin(dt)])}let St=[..._t.map(([wt,dt])=>new lt(wt,dt)),..._t.slice().reverse().map(([wt,dt],Kt,zt)=>{let Qt=(zt.length-1-Kt)/(zt.length-1)*Math.PI/2;return new lt(wt+.01*Math.cos(Qt),dt-.01*Math.sin(Qt))})];for(let wt of[-1,1]){l(mt,rt,ft,wt*F,0,0,"defletor"),l(mt,ye(et+.012,et+.07,.025,96,.003),ft,wt*(F-.019),0,0,"defletor"),l(mt,ye(et,et+.01,k-F,96,.002),ft,wt*(F+k)/2,0,0,"defletor");let dt=new Ei(St,96);dt.rotateZ(-Math.PI/2*wt),dt.computeVertexNormals(),l(mt,dt,ft,wt*k,0,0,"defletor");for(let Kt=0;Kt<16;Kt++){let zt=Kt*Math.PI/8+Math.PI/16;x(mt,ot,wt*(F-.031),(et+.045)*Math.sin(zt),(et+.045)*Math.cos(zt),m(-wt),f)}for(let Kt of[-1,1])l(mt,Vt(.06,G.y1-G.y0-.1,.012,.004),ft,wt*(F-.03),0,Kt*(G.z-vt-.006),"defletor");l(mt,Vt(.06,.012,2*G.z-.1,.004),ft,wt*(F-.03),G.y0+vt+.006,0,"defletor")}}let W=new En;W.moveTo(0,0),W.lineTo(.11,0),W.lineTo(0,.22),W.closePath();for(let F of[-1,1])for(let k of[G.x0+.3,-.5,.55,G.x1-.3]){l(mt,Vt(.46,te-gt,G.z-it,.01),Lt,k,(te+gt)/2-.01,F*(it+G.z)/2),l(mt,Vt(.6,.05,.46,.01),Zt,k,gt+.025,F*(G.z-.09));for(let et of[-.2,.2]){let at=new ni(W,{depth:.024,bevelEnabled:!1});at.translate(0,0,-.012),at.rotateY(-F*Math.PI/2),l(mt,at,Lt,k+et,gt+.05,F*G.z)}for(let et of[-.26,.26])l(mt,new fe(.016,.016,.09,12),ot,k+et,gt+.09,F*(G.z+.075)),x(mt,ot,k+et,gt+.05,F*(G.z+.075),T,g)}for(let F of[-.35,.05])l(mt,Vt(.32,.2,.14,.012),Zt,F,G.y1-.2,G.z+.07),l(mt,Vt(.34,.022,.16,.008),Lt,F,G.y1-.09,G.z+.07),l(mt,Vt(.12,.05,.004,.002),h(i.preto),F,G.y1-.2,G.z+.142);l(mt,Vt(.22,.3,.006,.003),h(i.inox),1.05,-.18,G.z+.004),l(mt,Vt(.1,.07,.025,.006),h(i.latao),.9,te-.1,it+.012)}{let q=Rt.cooler,I=G.z+.02,O=xt-.56,U=q.y0+.3,nt=.17,H=q.y1-nt,v=O/2-.28,_=h(i.pintura),L=h(i.pinturaEsc),W=h(i.cobre),F=h(i.aletas),k=h(i.caixaAgua),et=h(i.aguaFria),at=h(i.aguaQuente),ft=h(i.aco);for(let bt of[-1,1]){l(st,Vt(xt-.02,H-q.y0,.02,.006),_,0,(q.y0+H)/2,bt*(I-.01));for(let Bt of[q.y0+.035,H-.03])l(st,Vt(xt-.06,.05,.035,.012),L,0,Bt,bt*(I+.016));for(let Bt of[-xt/2+.12,xt/2-.12])l(st,Vt(.06,H-q.y0-.12,.035,.012),L,Bt,(q.y0+H)/2,bt*(I+.016))}let It=[[-I,H-.02],[I,H-.02],[I,H],[I-nt,q.y1],[-I+nt,q.y1],[-I,H]],rt=[[I,H-.02],[I,H],[I-nt,q.y1],[-I+nt,q.y1],[-I,H],[-I,H-.02],[-I+.02,H-.02],[-I+.02,H-.008],[-I+nt+.008,q.y1-.02],[I-nt-.008,q.y1-.02],[I-.02,H-.008],[I-.02,H-.02]];l(st,hn(_n(rt),xt,.004,4),_,0,0,0);for(let bt of[-1,1])l(st,Vt(.02,H-q.y0,2*I,.006),_,bt*(xt/2-.01),(q.y0+H)/2,0),l(st,hn(_n(It),.02,.004,4),_,bt*(xt/2-.01),0,0);for(let bt of[-.75,.75]){l(st,Vt(.9,.02,2*(I-nt)-.14,.012),L,bt,q.y1+.01,0);for(let Bt=0;Bt<6;Bt++)for(let ee of[-1,1])x(st,ot,bt-.4+Bt*.16,q.y1+.02,ee*(I-nt-.1),T,f)}let _t=new En;_t.moveTo(-.075,0),_t.lineTo(.075,0),_t.lineTo(.05,.07),_t.absarc(0,.07,.05,0,Math.PI,!1),_t.closePath(),_t.holes.push(wn(.024,!0,0,.07));let St=new ni(_t,{depth:.025,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelOffset:-.003,bevelSegments:2,curveSegments:16});St.translate(0,0,-.0125);for(let bt of[-xt/2+.2,xt/2-.2])for(let Bt of[-1,1])l(st,St,L,bt,q.y1-.005,Bt*(I-nt-.03));let wt=I-.05,dt=t?26:44,Kt=O/dt,zt=2*wt;for(let bt of[-1,1])l(st,Vt(O+.08,.34,.03,.006),ft,0,U,bt*wt);let Qt=new fe(.0095,.0095,zt,12);Qt.rotateX(Math.PI/2);let N=[-.105,-.035,.035,.105];for(let bt=0;bt<4;bt++)for(let Bt=0;Bt<dt-bt%2;Bt++)l(st,Qt,W,-O/2+Kt/2+Bt*Kt+bt%2*Kt/2,U+N[bt],0);let Mt=new ei(O,.26,.0016),Q=t?28:52;for(let bt=0;bt<Q;bt++)l(st,Mt,F,0,U,-wt+.04+bt*(2*wt-.08)/(Q-1));l(st,Vt(O+.08,.012,zt,.004),ft,0,U-.155,0);for(let bt of[-1,1])l(st,Vt(.012,U+.155-q.y0,2*I-.04,.004),L,bt*(O/2+.05),(q.y0+U+.155)/2,0);l(st,Vt(O+.1,.015,2*I-.06,.004),L,0,U-.22,0);for(let bt of[-1,1])l(st,Vt(O+.1,.05,.012,.004),L,0,U-.2,bt*(I-.036));l(st,Vt(.12,.08,.08,.012),h(i.preto),-O/2+.1,U-.18,-(I-.1));for(let bt of[-1,1]){l(st,Vt(O+.16,.4,.03,.01),k,0,U,bt*(I+.015));for(let Bt of[-.15,.15])l(st,Vt(O+.04,.02,.14,.006),k,0,U+Bt,bt*(I+.1));for(let Bt of[-1,1])l(st,Vt(.02,.32,.14,.006),k,Bt*(O/2+.01),U,bt*(I+.1));l(st,Vt(O+.04,.32,.02,.01),k,0,U,bt*(I+.16)),bt<0&&l(st,Vt(O+.02,.014,.14,.004),k,0,U,bt*(I+.1)),l(st,Vt(O+.12,.38,.022,.01),k,0,U,bt*(I+.181));for(let Bt=0;Bt<15;Bt++)for(let ee of[-.16,.16]){let xe=-O/2-.02+Bt*(O+.04)/14;x(st,ot,xe,U+ee,bt*(I+.03),p(bt),f),x(st,ot,xe,U+ee,bt*(I+.192),p(bt),f)}}for(let[bt,Bt]of[[U+.13,.022],[U-.13,.022]])l(st,new fe(Bt,Bt,.03,6).rotateX(Math.PI/2),h(i.inox),O/2-.1,bt,I+.207);s.agua=[];let ct=-O/2+.22,Et=O/2-.22,Ct=-(I+.42),$t=-(I+.42);for(let[bt,Bt,ee,xe]of[[-.08,et,.42,ct-v],[.08,at,.42,Et-v]]){let pe=U+bt,we=-(I+.192),At=v+xe;l(st,Yo(.06,.16).rotateY(Math.PI/2),Bt,At,pe,we-.08,"agua");for(let qe of[we-.16,we-.2])l(st,Yo(.085,.025).rotateY(Math.PI/2),Bt,At,pe,qe,"agua");for(let qe=0;qe<8;qe++){let kn=qe*Math.PI/4;x(st,ot,At+.068*Math.cos(kn),pe+.068*Math.sin(kn),we-.1725,p(1),f)}let Ut=-(I+ee),ue=[new w(At,pe,we-.21),new w(At,pe,Ut+.14),new w(At,pe-.035,Ut+.035),new w(At,pe-.14,Ut),new w(At,Rt.base+.02,Ut)];l(st,new ii(new bn(ue,!1,"catmullrom",.5),96,.055,24,!1),Bt,0,0,0,"agua");let De=.55+bt*2;l(st,new fe(.1,.1,.025,32),Bt,At,De-.045,Ut,"agua"),l(st,new fe(.1,.1,.025,32),Bt,At,De+.045,Ut,"agua"),l(st,new fe(.078,.078,.065,32),h(i.ferroFundido),At,De,Ut,"agua"),l(st,Vt(.04,.04,.05,.008),h(i.ferroFundido),At,De,Ut-.1,"agua"),l(st,Vt(.03,.02,.24,.006),h(i.amarelo),At,De+.03,Ut-.2,"agua"),l(st,new fe(.012,.012,.1,12).rotateX(Math.PI/2),h(i.inox),At+.06,pe+.03,Ut+.08,"agua"),l(st,new fe(.1,.1,.02,32),Bt,At,Rt.base+.01,Ut,"agua"),l(st,Vt(.08,.5,.06,.01),L,At+.12,Rt.base+.25,Ut,"agua")}{let bt=(we,At,Ut)=>new w(we,At,Ut),Bt=-(I+.1),ee=I+.1,xe=U-.08,pe=U+.08;for(let we of[-1.05,-.55,-.05,.45,.95]){let At=[bt(ct,Rt.base+.05,Ct),bt(ct,xe-.14,Ct),bt(ct,xe,Ct+.14),bt(ct,xe,Bt),bt(we,U-.07,Bt),bt(we,U-.07,ee),bt(we,U+.07,ee),bt(we,U+.07,Bt),bt(Et,pe,Bt),bt(Et,pe,$t+.14),bt(Et,pe-.14,$t),bt(Et,Rt.base+.05,$t)],Ut=new ur;for(let ue=1;ue<At.length;ue++)Ut.add(new hr(At[ue-1],At[ue]));s.agua.push(Ut)}}}{let q=a(i.pintura),I=-1.32,O=G.z+.36,U=_n([[0,.3],[.36,.3],[.36,-.52],[0,-.24]]),nt=new ni(U,{depth:.4,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelOffset:-.008,bevelSegments:2});nt.translate(0,0,-.2),nt.rotateY(-Math.PI/2),l(Ft,nt,q,I+.02,0,G.z),l(Ft,Vt(.66,1.04,.26,.018),q,I-.03,-.09,O+.13),l(Ft,Vt(.6,.98,.022,.012),h(i.pinturaEsc),I-.03,-.09,O+.27);for(let v of[-.27,.21])for(let _=0;_<6;_++)x(Ft,h(i.eixoFosco),I+v,-.53+_*.176,O+.281,p(1),f);let H=new En;H.moveTo(-.06,-.045),H.lineTo(.06,-.045),H.lineTo(0,.06),H.closePath(),l(Ft,new mr(H).scale(1.18,1.18,1),h(i.preto),I-.03,.22,O+.282),l(Ft,new mr(H),h(i.amarelo),I-.03,.22,O+.283);for(let v=0;v<3;v++)l(Ft,new fe(.03,.036,.09,20),h(i.isol),I-.21+v*.18,-.65,O+.13),l(Ft,new fe(.042,.042,.02,6),h(i.eixoFosco),I-.21+v*.18,-.615,O+.13)}let R=(q,I,O)=>{let U=r(I),nt=le(q),H=O*yl(O),v=jt.hb,_=H+O*v,L=H-O*v,W=.025,F=a(i.mancal),k=a(i.pinturaEsc),et=a(i.inox),at=a(i.patente),ft=a(i.aco),It=a(i.oleo),rt=a(i.latao),_t=a(i.eixoFosco),St=(At,Ut)=>(At+Ut)/2,wt=Mr(-.025).reverse();l(U,hn(_n(Mr(0),Ml(wt)),v-W,.004,48),F,St(H,_-O*W)),l(U,hn(_n(Mr(0),wn(.165,!0)),W,.004,48),F,_-O*W/2),l(U,ye(jt.rC-.025,jt.rC,v-W,96,.003),F,St(H,L+O*W)),l(U,ye(.165,jt.rC,W,96,.003),F,L+O*W/2),l(U,ye(jt.rC,jt.rF,jt.eF,128,.006),F,H),l(U,ye(jt.rC,jt.rF-.06,.02,96,.003),F,H-O*(jt.eF/2+.01));for(let At=0;At<12;At++){let Ut=At*Math.PI/6+Math.PI/12;x(U,_t,H+O*jt.eF/2,(jt.rF-.035)*Math.sin(Ut),(jt.rF-.035)*Math.cos(Ut),m(O),g)}for(let At of[-1,1]){l(U,Vt(v-.03,.05,.1,.01),k,St(H+O*jt.eF/2,_),0,At*(jt.zS+.04));for(let Ut of[0,1,2])x(U,_t,H+O*(jt.eF/2+.035+Ut*(v-.1)/2),.025,At*(jt.zS+.055),T,g)}let dt=9;for(let At=0;At<dt;At++){let Ut=-jt.zS+.045+At*(2*jt.zS-.09)/(dt-1);l(U,Vt(.05,-jt.yS-.08,.012,.004),F,_+O*.025,(jt.yS+.03)/2-.02,Ut)}let Kt=hn(_n(Mr(.045),Ml(Mr(-.003).reverse())),.012,.002,40),zt=5;for(let At=0;At<zt;At++)l(U,Kt,F,H+O*(jt.eF/2+.035+At*(v-jt.eF/2-.06)/(zt-1)));for(let At=0;At<5;At++){let Ut=-.1+At*.05;l(U,Vt(v-.05,.07,.012,.004),F,St(H+O*jt.eF/2,_),jt.rD+.02,Ut)}for(let At of[-.19,.19]){let Ut=Math.sqrt(jt.rD**2-At**2);l(U,new fe(.035,.045,.05,24),F,St(H,_),Ut+.015,At);let ue=l(U,new To(.042,.012,12,32),et,St(H,_),Ut+.1,At);ue.rotation.y=Math.PI/2,l(U,new fe(.013,.013,.05,12),et,St(H,_),Ut+.05,At)}for(let[At,Ut]of[[_,1],[L,-1]]){let ue=O*Ut;l(U,ye(.1415,.24,.03,96,.003),et,At+ue*.015),l(U,ye(.1415,.175,.03,72,.002),_t,At+ue*.045);for(let De of[.15,.16])l(U,ye(De,De+.004,.012,72,.001),_t,At+ue*.066);for(let De=0;De<8;De++){let qe=De*Math.PI/4+Math.PI/8;x(U,_t,At+ue*.03,.21*Math.sin(qe),.21*Math.cos(qe),m(ue),f)}}for(let At of[-1,1])l(U,ye(.2,jt.rD-.025,.05,96,.003),F,nt+At*.095);let Qt=[];for(let At=0;At<=12;At++){let Ut=-1+2*At/12;Qt.push(new lt(.2-.012*Ut*Ut,Ut*.0425))}let N=[new lt(.151,-.0425),...Qt,new lt(.151,.0425)];for(let At of[-1,1]){let Ut=new Ei(N,96);Ut.rotateZ(-Math.PI/2),Ut.computeVertexNormals(),l(U,Ut,ft,nt+At*.0575),l(U,ye(.1405,.151,.085,96,.001),at,nt+At*.0575)}let Mt=.21,Q=Ne(ye(Mt,Mt+.016,.026,96,.002),rt,I);Q.position.set(nt,.1405-Mt,0),Q.userData.manter=!0,U.add(Q),(s.aneis=s.aneis||[]).push(Q);let ct=new Rs(.0085,12,8);for(let At=0;At<14;At++){let Ut=At/14*Math.PI*2,ue=Ne(ct,It,I);ue.position.set(At%2?.006:-.006,(Mt-.007)*Math.cos(Ut),(Mt-.007)*Math.sin(Ut)),ue.scale.set(1,1.6,1),ue.rotation.x=-Ut,Q.add(ue)}l(U,ye(Mt-.003,Mt,.02,96,.001),It,nt,.1405-Mt,0);let Et=-.3;l(U,Vt(v-W-.005,Et-jt.yS-.03,2*jt.zS-.055,.02),It,St(H,_-O*W),(Et+jt.yS+.025)/2,0);{let At=[],Ut=jt.rC-.027,ue=Math.asin(-Et/Ut);for(let De=0;De<=24;De++){let qe=-Math.PI/2-(Math.PI/2-ue)+De/24*2*(Math.PI/2-ue);At.push([Ut*Math.cos(qe),Ut*Math.sin(qe)])}l(U,hn(_n(At),v-W-.005,.002,24),It,St(H,L+O*W))}let Ct=.55,$t=jt.rD*Math.cos(Ct),bt=-jt.rD*Math.sin(Ct);{let At=l(U,new fe(.022,.022,.07,6),et,St(H,_)+O*.03,$t+.02,bt-.015);At.rotation.x=Ct}let Bt=new bn([new w(St(H,_)+O*.03,$t+.06,bt-.04),new w(St(H,_)+O*.02,$t+.16,bt-.1),new w(O*(Un+.12),.74,-.42),new w(O*(Un+.08),.88,-.52),new w(O*(G.x1+Ht+.05),G.y1-.18,-.55)],!1,"centripetal");l(U,new ii(Bt,64,.011,10,!1),h(i.trancado));let ee=St(H+O*jt.eF/2,_);l(U,new fe(.055,.055,.02,32).rotateX(Math.PI/2),et,ee,Et,jt.zS+.055),l(U,new fe(.04,.04,.022,32).rotateX(Math.PI/2),h(i.vidro),ee,Et,jt.zS+.058),l(U,Vt(.06,.04,.008,.004),It,ee,Et-.02,jt.zS+.052);for(let At of[-1,1])for(let[Ut,ue]of[[-.12,.026],[-.47,.03]])l(U,new fe(ue,ue,.03,6).rotateX(Math.PI/2),et,ee+O*(At>0?-.07:0),Ut,At*(jt.zS+.06));let xe=ee,pe=-.15,we=jt.yS;return l(U,new fe(.024,.024,we-Rt.base,24),h(i.oleoTubo),xe,(we+Rt.base)/2,pe),l(U,new fe(.04,.04,.02,24),h(i.oleoTubo),xe,we-.01,pe),l(U,Vt(.07,.09,.07,.01),h(i.oleoTubo),xe,(we+Rt.base)/2,pe),l(U,new fe(.008,.008,.1,12).rotateZ(Math.PI/2),_t,xe+O*.06,(we+Rt.base)/2,pe),l(U,new fe(.06,.06,.015,24),h(i.oleoTubo),xe,Rt.base+.008,pe),U};R(_e.mLA,"mancalLA",1),R(_e.mLOA,"mancalLOA",-1);{let q=(le(_e.excit[0])+le(_e.excit[1]))/2,I=le(_e.excit[1])-le(_e.excit[0]),O=n.excitatriz,U=r("excitatrizFixa");U.userData.parte="excitatriz";let nt=a(i.pintura),H=a(i.chapa),v=a(i.cobre);l(U,ye(.265,.36,I*.85),H,q,0,0,"excitatriz");for(let et of[-1,1])l(U,ye(.29,.35,.03),v,q+et*I*.46,0,0,"excitatriz");let _=-(yl(-1)+jt.hb+.1),L=le(0)-.05,W=(_+L)/2;l(U,ye(.47,.5,_-L,96,.004),nt,W,0,0,"excitatriz"),l(U,ye(.3,.66,.035,96,.005),nt,_+.0175,0,0,"excitatriz");for(let et=0;et<16;et++){let at=et*Math.PI/8;x(U,ot,_+0,.6*Math.sin(at),.6*Math.cos(at),m(-1),f)}let F=[];for(let et=0;et<=16;et++){let at=.5*et/16;F.push(new lt(at,L-.06*(1-(at/.5)**2)))}for(let et=16;et>=0;et--){let at=.485*et/16;F.push(new lt(at,L+.012-.06*(1-(at/.485)**2)))}let k=new Ei(F,96);k.rotateZ(-Math.PI/2),k.computeVertexNormals(),l(U,k,nt,0,0,0,"excitatriz"),l(U,ye(.47,.54,.03,96,.004),nt,L+.01,0,0,"excitatriz");for(let et=0;et<16;et++){let at=et*Math.PI/8+.1;x(U,ot,L-.005,.515*Math.sin(at),.515*Math.cos(at),m(-1),f)}for(let et of[.7,-.7,1.85,-1.85]){let at=l(U,Vt(-_-Un+.01,.09,.11,.02),nt,(_-Un)/2,.63*Math.cos(et),.63*Math.sin(et),"excitatriz");at.rotation.x=et}l(U,Vt(.32,.025,.22,.01),nt,W,.5,0,"excitatriz");for(let[et,at]of[[-.13,-.08],[.13,-.08],[-.13,.08],[.13,.08]])x(U,ot,W+et,.512,at,T,f)}{let q=r("acoplamento",b),I=le(3619),O=le(4019),U=.2808/2,nt=.063,H=.04,v=O-I;l(q,Vt(v,H,nt,.006),h(i.aco),(I+O)/2,U+H/2-.022,0)}for(let q of[-1,1])for(let I of[G.x0+.3,-.5,.55,G.x1-.3])l(Ot,Vt(.68,.05,.52,.006),h(i.base),I,Rt.base+.025,q*(G.z-.09));return w_(e),{raiz:e,giro:b,partes:n,corte:o,anim:s,G:Rt}}function w_(i){i.updateMatrixWorld(!0);let t=r=>{let o=r.parent;for(;o&&o!==i&&!o.userData.parte;)o=o.parent;return o||i},e=new Map,n=new ae,s=new ae;i.traverse(r=>{if(!r.isMesh||r.userData.manter||r.isInstancedMesh)return;let o=t(r),a=`${o.uuid}|${r.userData.parte}|${r.material.uuid}|${r.castShadow}`;e.has(a)||e.set(a,{g:o,lista:[]}),e.get(a).lista.push(r)});for(let{g:r,lista:o}of e.values()){if(o.length<2)continue;n.copy(r.matrixWorld).invert();let a=o.map(u=>{let d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(let f of Object.keys(d.attributes))["position","normal","uv"].includes(f)||d.deleteAttribute(f);if(d.attributes.uv||d.setAttribute("uv",new ce(new Float32Array(d.attributes.position.count*2),2)),s.multiplyMatrices(n,u.matrixWorld),d.applyMatrix4(s),s.determinant()<0){let f=d.attributes.position,g=d.attributes.normal;for(let x=0;x<f.count;x+=3)for(let m of[f,g,d.attributes.uv]){let p=[];for(let T=0;T<m.itemSize;T++)p.push(m.getComponent(x+1,T));for(let T=0;T<m.itemSize;T++)m.setComponent(x+1,T,m.getComponent(x+2,T)),m.setComponent(x+2,T,p[T])}}return d}),c=Xo(a);if(!c)continue;let h=o[0],l=Ne(c,h.material,h.userData.parte);l.castShadow=h.castShadow,r.add(l);for(let u of o)u.parent.remove(u)}}function Mu(i){let t=i*1e3/xu+_e.centro,e=_e.secs.find(([n,s])=>t>=n&&t<=s);return e?e[2]/2e3:.14}var si=(i,t,e)=>Math.max(t,Math.min(e,i)),bl=(i,t,e)=>i+(t-i)*e;var Su=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;var bu=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t});function Eu(i=1234567){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Sr=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Tu=i=>i*Math.PI/180;function wu(i,t){let e=new w;function n(){let c=e.copy(i.position).sub(t.target),h=Math.max(.2,c.length());return{alvo:t.target.clone(),dist:h,az:Math.atan2(c.z,c.x)*180/Math.PI,el:Math.asin(si(c.y/h,-1,1))*180/Math.PI}}let s=c=>{let h=Tu(c.az),l=Tu(c.el);return new w(c.alvo.x+c.dist*Math.cos(l)*Math.cos(h),c.alvo.y+c.dist*Math.sin(l),c.alvo.z+c.dist*Math.cos(l)*Math.sin(h))},r=c=>typeof c=="function"?c():Array.isArray(c)?new w(...c):c;function o(c){t.target.copy(r(c.alvo)),i.position.copy(s({...c,alvo:r(c.alvo)}))}function a(c,h,l){let u=h.az-c.az;for(;u>180;)u-=360;for(;u<-180;)u+=360;return{alvo:r(c.alvo).clone().lerp(r(h.alvo),l),dist:Math.exp(bl(Math.log(c.dist),Math.log(h.dist),l)),az:c.az+u*l,el:bl(c.el,h.el,l)}}return{estado:n,aplicar:o,misturar:a}}function Au(i,{reduce:t}){let e=[],n=0,s=!1,r=!1,o=null,a=0,c=-1;function h(u,d){let f=i.estado();e=[],u.forEach((g,x)=>e.push({...g,de:x===0?f:u[x-1].para})),t&&(e=e.map(g=>({...g,corte:!0}))),a=e.reduce((g,x)=>g+x.dur,0),n=0,s=!0,r=!1,o=d||null,c=-1}function l(u){if(!s||r)return null;n+=u;let d=0;for(let x=0;x<e.length;x++){let m=e[x];if(n<d+m.dur){x!==c&&(c=x,m.ini&&m.ini());let p=si((n-d)/m.dur,0,1),T=m.corte?1:Su(p);return i.aplicar(i.misturar(m.de,m.para,T)),{k:n/a}}d+=m.dur}let f=e[e.length-1];f&&i.aplicar(i.misturar(f.de,f.para,1)),s=!1;let g=o;return o=null,g&&g(),{k:1}}return{tocar:h,atualizar:l,parar(){s=!1,o=null},pausar(){s&&(r=!0)},continuar(){r=!1},get ativo(){return s},get pausado(){return r},get t(){return n},get dur(){return a}}}var $o=Eu(97531),We=i=>document.getElementById(i),Ti=We("m3-stage"),Os=We("m3-canvas"),A_=()=>{try{return!!(window.WebGL2RenderingContext&&document.createElement("canvas").getContext("webgl2"))}catch{return!1}};if(Ti&&Os)if(!A_())We("tour-3d")?.setAttribute("hidden","");else try{C_()}catch(i){console.error(i),We("tour-3d")?.setAttribute("hidden","")}function R_(){let i={type:"generator",voltage:13800,frequency:60,poles:4};return i.rpm=120*i.frequency/i.poles,i.ger=i.type!=="motor",i}function C_(){let i=new URLSearchParams(location.search).get("m3"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=i==="leve"?!0:i==="alta"?!1:matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||8)<=4,n=new mo({canvas:Os,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),n.outputColorSpace=tn,n.toneMapping=tl,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=jc,n.localClippingEnabled=!0,n.setClearColor(0,0);let s=new rr;s.environment=P_(n),s.environmentIntensity=1;let r=new en(32,1,.05,80),o=new Ps(16774374,2.1);o.position.set(3.2,8,5.6),o.castShadow=!0,Object.assign(o.shadow.camera,{left:-3.8,right:3.8,top:3.8,bottom:-3.8,near:2,far:20}),o.shadow.mapSize.set(e?1024:4096,e?1024:4096),o.shadow.bias=-25e-5,o.shadow.normalBias=.012,s.add(o);let a=new Ps(14411519,.55);a.position.set(-6,2.5,4),s.add(a);let c=new Ps(16777215,.9);c.position.set(-2.5,4.5,-7),s.add(c);{let J=new Ee(new Mi(60,60),new wo({color:727074,opacity:.28}));J.rotation.x=-Math.PI/2,J.position.y=Rt.base,J.receiveShadow=!0,J.name="chao",s.add(J);let ht=document.createElement("canvas");ht.width=ht.height=256;let Pt=ht.getContext("2d"),qt=Pt.createRadialGradient(128,128,0,128,128,128);qt.addColorStop(0,"rgba(0,0,0,.6)"),qt.addColorStop(.5,"rgba(0,0,0,.28)"),qt.addColorStop(1,"rgba(0,0,0,0)"),Pt.fillStyle=qt,Pt.fillRect(0,0,256,256);let Jt=new Ee(new Mi(5.4,4.2),new cn({map:new ws(ht),transparent:!0,depthWrite:!1,opacity:.75}));Jt.rotation.x=-Math.PI/2,Jt.position.set(-.15,Rt.base+.003,0),Jt.renderOrder=-1,s.add(Jt)}let h=vu(),l=yu(h,{leve:e});s.add(l.raiz);let u=R_(),d=new pn(new w(0,0,-1),0),f={value:0};for(let J of l.corte)J.side=yn,J.clippingPlanes=[],J.onBeforeCompile=ht=>{ht.uniforms.uCorte=f,ht.fragmentShader=`uniform float uCorte;
`+ht.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        bool tampa = uCorte > .5 && !gl_FrontFacing;
        if (tampa) { float hh = step(.78, fract((gl_FragCoord.x - gl_FragCoord.y) * .08)); diffuseColor.rgb *= mix(.93, .66, hh); }`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        if (tampa) { normal = normalize((viewMatrix * vec4(0., 0., 1., 0.)).xyz); nonPerturbedNormal = normal; }`)},J.customProgramCacheKey=()=>"tampa-corte";let g=!1,x=new He({uniforms:{cor:{value:new Yt(9415101)}},transparent:!0,depthWrite:!1,clipping:!0,vertexShader:`#include <common>
      #include <clipping_planes_pars_vertex>
      varying vec3 vN; varying vec3 vV;
      void main() { vec4 mvPosition = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mvPosition.xyz; gl_Position = projectionMatrix * mvPosition;
      #include <clipping_planes_vertex>
      }`,fragmentShader:`#include <common>
      #include <clipping_planes_pars_fragment>
      uniform vec3 cor; varying vec3 vN; varying vec3 vV;
      void main() {
      #include <clipping_planes_fragment>
        float f = 1. - abs(dot(normalize(vN), normalize(vV))); f = f * f * f;
        gl_FragColor = vec4(cor, .012 + .3 * f);
      }`}),m=J=>{g=J,f.value=J?1:0;for(let ht of[...l.corte,x,D.material])ht.clippingPlanes=J?[d]:[],ht.needsUpdate=!0;N.corte?.setAttribute("aria-pressed",String(J))},p=[];l.raiz.traverse(J=>{J.isMesh&&J.name!=="chao"&&(J.userData.mat0=J.material,p.push(J))});let T=J=>{for(;J&&!J.userData.parte;)J=J.parent;return J?J.userData.parte:null};function b(J){for(let ht of p){let Pt=ht.userData.parte||T(ht),qt=ht.userData.matCap||ht.userData.mat0,Jt=!J||J.includes(Pt);ht.material=Jt?qt:x,ht.castShadow=Jt,ht.userData.miudo===void 0&&(ht.geometry.computeBoundingSphere(),ht.userData.miudo=ht.geometry.boundingSphere.radius*Math.max(ht.scale.x,ht.scale.y,ht.scale.z)<.06),ht.userData.miudo&&(ht.visible=Jt)}}function y(J){l.anim.fases.forEach(ht=>{ht.userData.matCap=J?[h.faseU,h.faseV,h.faseW][ht.userData.fase]:null})}function z(J){l.giro.traverse(ht=>{ht.isMesh&&ht.userData.polo!==void 0&&ht.userData.parte==="rotor"&&(ht.userData.matCap=J?ht.userData.polo%2?h.sul:h.norte:null)})}let A=72,P=new As(.024,.12,12);P.rotateZ(-Math.PI/2);let D=new xo(P,new cn({toneMapped:!1,depthTest:!1,transparent:!0,opacity:.95}),A*3);D.visible=!1,D.renderOrder=9,s.add(D);let S=new Yt,M=new ae,C=new nn,Y=new w,X=new w;function K(J){let ht=0;for(let Pt of[-.5,0,.5])for(let qt=0;qt<A;qt++){let Jt=qt*2*Math.PI/A,ie=Math.cos(Rt.polos/2*(Jt-J)),Oe=Rt.bore-.008,E=Y.set(0,Math.cos(Jt),Math.sin(Jt));C.setFromUnitVectors(new w(1,0,0),ie>=0?E:E.clone().negate());let B=.35+.9*Math.abs(ie);X.set(B,B,B),M.compose(new w(Pt,Oe*Math.cos(Jt),Oe*Math.sin(Jt)),C,X),D.setMatrixAt(ht,M),S.setRGB(ie>=0?.95:.18,ie>=0?.3+.2*(1-ie):.45,ie>=0?.2:.95),D.setColorAt(ht,S),ht++}D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0)}let ut=Rt.nucleo,j=[];{let J=(ut-(Rt.pacotes-1)*Rt.duto)/Rt.pacotes;for(let ht=1;ht<Rt.pacotes;ht++)j.push(-ut/2+ht*J+(ht-.5)*Rt.duto)}let pt=[];for(let J of[-1,1])for(let ht of[0,1,2]){let Pt=J*Math.abs(j[ht<1?2:ht<2?1:0]||.1),qt=[[J*.95,1.66],[J*1.5,1.58],[J*1.52,1],[J*1.5,.62],[J*1.45,.45],[J*1.38,.4],[J*1.32,.45],[J*1.27,.56],[J*1.12,.72],[J*.85,.7],[Pt,.68],[Pt,.86],[Pt,1],[Pt*.5,1.14],[J*.4,1.3],[J*.5,1.6],[J*.95,1.66]];pt.push({c:new bn(qt.map(([Jt,ie])=>new w(Jt,ie,0)),!0,"catmullrom",.3),quente:[10/17,13/17]})}let tt=e?1200:3200,G=new Te,xt=new Float32Array(tt*3),vt=new Float32Array(tt*3),Ht=[];for(let J=0;J<tt;J++)Ht.push({c:J%pt.length,u:$o(),z:-(.08+$o()*.95),sp:.05+$o()*.03,dy:($o()-.5)*.05});G.setAttribute("position",new Ie(xt,3)),G.setAttribute("color",new Ie(vt,3));let te=(()=>{let J=document.createElement("canvas");J.width=J.height=64;let ht=J.getContext("2d"),Pt=ht.createRadialGradient(32,32,0,32,32,32);Pt.addColorStop(0,"rgba(255,255,255,1)"),Pt.addColorStop(.35,"rgba(255,255,255,.9)"),Pt.addColorStop(1,"rgba(255,255,255,0)"),ht.fillStyle=Pt,ht.fillRect(0,0,64,64);let qt=new ws(J);return qt.colorSpace=tn,qt})(),it=new Ts(G,new Hi({size:.055,map:te,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,toneMapped:!1}));it.visible=!1,s.add(it);let gt=new Yt(4170495),mt=new Yt(16734774);function st(J){for(let ht=0;ht<tt;ht++){let Pt=Ht[ht],qt=pt[Pt.c];Pt.u=(Pt.u+J*Pt.sp)%1;let Jt=qt.c.getPointAt(Pt.u,Y);xt[ht*3]=Jt.x,xt[ht*3+1]=Jt.y+Pt.dy,xt[ht*3+2]=Pt.z;let ie=Pt.u,[Oe,E]=qt.quente,B=ie<Oe?0:ie<E?(ie-Oe)/(E-Oe):1;ie>.8&&(B=Math.max(0,1-(ie-.8)/.1)),S.copy(gt).lerp(mt,si(B,0,1)),vt[ht*3]=S.r,vt[ht*3+1]=S.g,vt[ht*3+2]=S.b}G.attributes.position.needsUpdate=!0,G.attributes.color.needsUpdate=!0}let Ot=40,Ft=new Te,Lt=new Float32Array(Ot*2*3),Zt=new Float32Array(Ot*2*3);Ft.setAttribute("position",new Ie(Lt,3)),Ft.setAttribute("color",new Ie(Zt,3));let ot=new Ts(Ft,new Hi({size:.045,map:te,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1}));ot.visible=!1,l.giro.add(ot);let yt=0;function R(J){yt+=J*.18;for(let ht=0;ht<2;ht++)for(let Pt=0;Pt<Ot;Pt++){let qt=(Pt/Ot+yt)%1,Jt=ht?1-qt:qt,ie=l.anim.cabos[ht].getPointAt(Jt,Y),Oe=(ht*Ot+Pt)*3;Lt[Oe]=ie.x,Lt[Oe+1]=ie.y,Lt[Oe+2]=ie.z;let E=ht?[1,.85,.35]:[1,.35,.25];Zt[Oe]=E[0],Zt[Oe+1]=E[1],Zt[Oe+2]=E[2]}Ft.attributes.position.needsUpdate=!0,Ft.attributes.color.needsUpdate=!0}let q=110,I=l.anim.agua.length,O=new Te,U=new Float32Array(q*I*3),nt=new Float32Array(q*I*3);O.setAttribute("position",new Ie(U,3)),O.setAttribute("color",new Ie(nt,3));let H=new Ts(O,new Hi({size:.05,map:te,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));H.visible=!1,H.renderOrder=8,s.add(H);let v=new Yt(3116287),_=new Yt(16730666),L=0;function W(J){L+=J*.05;for(let ht=0;ht<I;ht++)for(let Pt=0;Pt<q;Pt++){let qt=(Pt/q+L+ht*.13)%1,Jt=l.anim.agua[ht].getPointAt(qt,Y),ie=(ht*q+Pt)*3;U[ie]=Jt.x,U[ie+1]=Jt.y,U[ie+2]=Jt.z,S.copy(v).lerp(_,si((qt-.3)/.4,0,1)),nt[ie]=S.r,nt[ie+1]=S.g,nt[ie+2]=S.b}O.attributes.position.needsUpdate=!0,O.attributes.color.needsUpdate=!0}let F=new rn;F.visible=!1,s.add(F);let k=(J,ht,Pt)=>{let qt=document.createElement("canvas");qt.width=256,qt.height=96;let Jt=qt.getContext("2d");Jt.fillStyle="rgba(10,22,32,.82)",Jt.beginPath(),Jt.roundRect(4,14,248,68,34),Jt.fill(),Jt.fillStyle="#"+new Yt(Pt).getHexString(),Jt.font="700 38px Inter, system-ui, sans-serif",Jt.textAlign="center",Jt.textBaseline="middle",Jt.fillText(J,128,49);let ie=new _o(new ar({map:new ws(qt),depthTest:!1,transparent:!0,toneMapped:!1}));ie.scale.set(.42,.158,1),ie.position.copy(ht),ie.renderOrder=11,F.add(ie)},et=(J,ht,Pt,qt,Jt)=>{let ie=ht.clone().normalize(),Oe=new cn({color:qt,toneMapped:!1,depthTest:!1,transparent:!0}),E=Math.min(.16,Pt*.32),B=new Ee(new fe(.018,.018,Pt-E,12),Oe),$=new Ee(new As(.055,E,16),Oe);B.position.y=(Pt-E)/2,$.position.y=Pt-E/2;let Z=new rn;return Z.add(B,$),Z.position.copy(J),Z.quaternion.setFromUnitVectors(new w(0,1,0),ie),B.renderOrder=$.renderOrder=10,F.add(Z),Jt&&k(Jt,J.clone().add(ie.clone().multiplyScalar(ie.y<0?-.12:-.14)),qt),Z};et(new w(-.25,1.25,0),new w(0,-1,0),.62,16757575,"peso"),et(new w(.25,1.1,0),new w(0,-1,0),.45,12950527,"magn\xE9tica"),et(new w(le(_e.mLA),-1,0),new w(0,1,0),.62,7329999,"rea\xE7\xE3o A"),et(new w(le(_e.mLOA),-1,0),new w(0,1,0),.6,7329999,"rea\xE7\xE3o B");{let J=[];for(let qt=0;qt<=40;qt++){let Jt=-.3+qt/40*Math.PI*1.4;J.push(new w(le(_e.L)+.14,.5*Math.cos(Jt),.5*Math.sin(Jt)))}let ht=new Ee(new ii(new bn(J),40,.02,8),new cn({color:16765286,toneMapped:!1,depthTest:!1,transparent:!0}));ht.renderOrder=10,F.add(ht),k("torque",J[20].clone().add(new w(0,.16,0)),16765286);let Pt=new Ee(new As(.06,.14,12),ht.material);Pt.renderOrder=10,Pt.position.copy(J[40]),Pt.lookAt(J[40].clone().add(J[40].clone().sub(J[38]))),Pt.rotateX(Math.PI/2),F.add(Pt)}let at={estator:["N\xFAcleo do estator","Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre os pacotes, por onde o ar sai quente.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],enrolamento:["Enrolamento da armadura","Bobinas de dupla camada nas ranhuras, ligadas em tr\xEAs fases. As cabe\xE7as ficam fora do n\xFAcleo, amarradas em an\xE9is.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],terminais:["Sa\xEDdas e caixa de liga\xE7\xE3o","Os tr\xEAs cabos das fases saem das cabe\xE7as de bobina e chegam aos isoladores da caixa de liga\xE7\xE3o, na lateral.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],rotor:["Rotor de polos salientes","Coroa laminada com os polos e as sapatas. A sapata tem o arco exc\xEAntrico que deixa o entreferro maior nas pontas e a tens\xE3o mais senoidal.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],campo:["Bobinas de campo","Cobre de chapa em volta do corpo de cada polo, em corrente cont\xEDnua; ligadas em s\xE9rie, com a polaridade alternando de polo para polo.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],amortecedor:["Gaiola amortecedora","Barras na sapata ligadas por an\xE9is nas pontas: amortecem oscila\xE7\xF5es e ajudam na partida e nos transit\xF3rios.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],excitatriz:["Excitatriz sem escovas","\xDAltima pe\xE7a do rotor na ponta oposta: estator de campo fixo e armadura girante, que gera a corrente alternada da excita\xE7\xE3o.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],diodos:["Ponte de diodos girante","Retifica a corrente da armadura da excitatriz e entrega corrente cont\xEDnua ao campo; o varistor protege os diodos.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],cabos:["Cabos do campo","Dois cabos, + e \u2212, saem da ponte de diodos, entram pelo furo central na ponta do eixo, correm por dentro dele e sobem por um furo radial no pacote at\xE9 o come\xE7o e o fim da s\xE9rie de bobinas.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],eixo:["Eixo do rotor","Perfil escalonado: assentos do pacote e da excitatriz, colos dos mancais e ponta acoplada.","04-eixos.html","04 \xB7 Eixos"],acoplamento:["Ponta de eixo e chaveta","Ponta LA com a chaveta no rasgo: \xE9 por ela que o acoplamento da m\xE1quina acionadora transmite o torque.","02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],mancalLA:["Mancal LA","Mancal de deslizamento com flange no meio da caixa, preso no escudo: metade de dentro entra na m\xE1quina, metade de fora com domo e c\xE1rter aletados. Dentro, casquilho de assento esf\xE9rico com metal patente, anel de \xF3leo solto, veda\xE7\xF5es de labirinto, visor de n\xEDvel e sensor de temperatura.","02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],mancalLOA:["Mancal LOA","Igual ao LA, isolado da funda\xE7\xE3o para cortar a corrente de eixo; fica entre o ventilador LOA e a excitatriz.","02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],ventLA:["Ventilador LA","Radial, no eixo logo depois das cabe\xE7as de bobina, dentro do anel guia do defletor: puxa o ar frio da c\xE2mara de entrada e o empurra pelas cabe\xE7as, pelo entreferro e pelo rotor.","03-termica.html","03 \xB7 T\xE9rmica"],ventLOA:["Ventilador LOA","Igual ao LA, na ponta oposta; os dois juntos d\xE3o a vaz\xE3o do circuito de ar.","03-termica.html","03 \xB7 T\xE9rmica"],trocador:["Trocador ar\u2013\xE1gua","Uma unidade sobre a carca\xE7a, com tubos aletados transversais ao eixo: o ar quente sobe, atravessa o feixe e volta frio pelas pontas.","03-termica.html","03 \xB7 T\xE9rmica"],agua:["\xC1gua de resfriamento","Entra fria pelo bocal de baixo, na ponta LOA, passa pelas fileiras de baixo, volta na caixa de retorno e sai quente pelas de cima e pelo bocal de cima, na ponta LA.","03-termica.html","03 \xB7 T\xE9rmica"],defletor:["Defletor","Anel guia em volta das pontas das p\xE1s, com bocal de entrada, e a chapa que sobe at\xE9 a carca\xE7a: separa a c\xE2mara de entrada do ar frio, junto da tampa, da c\xE2mara das cabe\xE7as de bobina.","03-termica.html","03 \xB7 T\xE9rmica"],carcaca:["Carca\xE7a","Estrutura soldada que segura o n\xFAcleo pelos an\xE9is de apoio, leva o torque de rea\xE7\xE3o para a funda\xE7\xE3o e fecha o circuito de ar.",null,null],base:["Funda\xE7\xE3o","Bloco de concreto com chapas de assentamento niveladas sob os p\xE9s da carca\xE7a.",null,null]},ft=new Ho(r,Os);ft.enableDamping=!t,ft.dampingFactor=.08,ft.minDistance=.6,ft.maxDistance=22,ft.maxPolarAngle=Math.PI*.58,ft.screenSpacePanning=!0;let It=wu(r,ft),rt=Au(It,{reduce:t}),_t=(J=40,ht=16,Pt=10)=>({alvo:new w(-.1,.28,0),dist:Pt*Math.max(1,1.45/Math.max(.4,r.aspect)),az:J,el:ht});It.aplicar(_t());let St=J=>bu(J,0),wt={eletrica:[{id:"maq",t:"Gerador s\xEDncrono",txt:()=>`${u.ger?"Gerador":"Motor"} de ${St(u.voltage)} V e ${St(u.frequency)} Hz, com ${u.poles} polos: ${St(u.rpm)} rpm. Rotor de polos salientes, excita\xE7\xE3o sem escovas e refrigera\xE7\xE3o em circuito fechado com trocador ar\u2013\xE1gua (IC81W).`,estado:{},tomadas:()=>[{dur:3,para:_t(28,17)},{dur:10,para:_t(52,13)}]},{id:"nucleo",t:"N\xFAcleo do estator",txt:()=>"Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre eles. As chapas finas e isoladas cortam as correntes parasitas; o n\xFAcleo \xE9 preso na carca\xE7a pelas barras de dorso.",estado:{corte:!0,foco:["estator","enrolamento","carcaca"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(0,.55,0),dist:3.4,az:88,el:14}},{dur:6,para:{alvo:new w(.2,.55,0),dist:2.7,az:100,el:24}}]},{id:"enr",t:"Enrolamento trif\xE1sico",txt:()=>`Bobinas de dupla camada, com passo encurtado, formam as fases U, V e W. A tens\xE3o de ${St(u.voltage)} V nasce nos lados de bobina dentro das ranhuras; as cabe\xE7as s\xF3 ligam um lado ao outro. As sa\xEDdas v\xE3o \xE0 caixa de liga\xE7\xE3o.`,estado:{corte:!0,fases:!0,foco:["enrolamento","terminais","estator"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(1,.45,-.1),dist:2.6,az:40,el:16}},{dur:5,para:{alvo:new w(1.25,.15,-.1),dist:3.4,az:28,el:24}}]},{id:"rotor",t:"Rotor de polos salientes",txt:()=>`${u.poles} polos com bobinas de campo em corrente cont\xEDnua, alternando norte e sul. As barras de lat\xE3o na sapata e os an\xE9is das pontas formam a gaiola amortecedora.`,estado:{corte:!0,ns:!0,giro:.05,foco:["rotor","campo","amortecedor","eixo"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(0,0,0),dist:3,az:115,el:24}},{dur:6,para:{alvo:new w(.2,.05,0),dist:3,az:58,el:26}}]},{id:"exc",t:"Excitatriz e ponte de diodos",txt:()=>"Na ponta LOA, depois do mancal, a excitatriz gera corrente alternada na armadura que gira com o eixo. A ponte de diodos girante retifica, e os dois cabos (+ e \u2212) levam a corrente cont\xEDnua por dentro do furo central do eixo at\xE9 as bobinas de campo, sem escovas nem an\xE9is.",estado:{corte:!0,corrente:!0,giro:.04,foco:["excitatriz","diodos","cabos","eixo","campo","mancalLOA"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(-2.35,.05,0),dist:1.9,az:118,el:20}},{dur:6,para:{alvo:new w(-1.5,.15,0),dist:2.9,az:96,el:24}}]},{id:"girante",t:"Campo girante e tens\xE3o",txt:()=>`Com o rotor a ${St(u.rpm)} rpm, o campo dos polos passa pelas ranhuras e induz a tens\xE3o nas fases: f = P\xB7n/120 = ${u.poles} \xD7 ${St(u.rpm)} / 120 = ${St(u.frequency)} Hz. As setas mostram o fluxo no entreferro, para fora no norte e para dentro no sul.`,estado:{corte:!0,ns:!0,fases:!0,fluxo:!0,giro:.22,foco:["rotor","campo","estator","eixo"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(0,.1,0),dist:3.4,az:120,el:16}},{dur:8,para:{alvo:new w(.3,0,-.2),dist:3.4,az:18,el:14}}]}],mecanica:[{id:"eixo",t:"Eixo e ponta de eixo",txt:()=>"O eixo leva o pacote do rotor nos assentos centrais, os ventiladores junto dos defletores e a excitatriz na ponta, e passa pelos colos dos mancais. Na ponta LA, a chaveta no rasgo transmite o torque da m\xE1quina acionadora.",estado:{corte:!0,giro:.03,foco:["eixo","acoplamento","rotor","ventLA","ventLOA","defletor","excitatriz","diodos","mancalLA","mancalLOA","cabos"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(2.4,0,0),dist:1.9,az:58,el:16}},{dur:6.5,para:{alvo:new w(0,0,0),dist:6.2,az:92,el:10}}]},{id:"mancais",t:"Mancais de deslizamento",txt:()=>"Em cada escudo, o mancal de flange central, com a caixa aletada resfriada pelo ar ambiente, recebe o colo do eixo, que gira dentro do casquilho de metal patente sobre uma cunha de \xF3leo. O anel solto no rasgo do casquilho, pendurado no colo, mergulha no \xF3leo do c\xE1rter e o leva para cima; o visor mostra o n\xEDvel, a linha de \xF3leo desce ao piso e o sensor mede a temperatura do metal. O mancal LOA \xE9 isolado contra corrente de eixo.",estado:{corte:!0,giro:.06,foco:["mancalLA","mancalLOA","eixo","acoplamento"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(le(_e.mLOA)-.05,-.05,0),dist:2.1,az:128,el:18}},{dur:5,para:{alvo:new w(le(_e.mLA)+.05,-.05,0),dist:2.1,az:48,el:20}}]},{id:"ar",t:"Ventila\xE7\xE3o IC81W",txt:()=>"O ar n\xE3o sai da m\xE1quina: volta frio do trocador pelas pontas, entra na c\xE2mara entre a tampa e o defletor, passa pelo bocal e \xE9 soprado pelos ventiladores nas cabe\xE7as de bobina, no entreferro e no rotor; sai quente pelos dutos do n\xFAcleo e sobe ao trocador.",estado:{corte:!0,ar:!0,giro:.12,foco:["estator","rotor","campo","ventLA","ventLOA","defletor","trocador","carcaca","enrolamento","eixo"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(0,.7,0),dist:4.6,az:90,el:7}},{dur:7,para:{alvo:new w(1.1,.45,0),dist:3.3,az:72,el:10}}]},{id:"troc",t:"Trocador ar\u2013\xE1gua",txt:()=>"Uma unidade sobre a carca\xE7a: tubos de cobre aletados entre dois espelhos, em duas passagens. A \xE1gua entra fria pelo bocal de baixo, na ponta LOA da caixa de entrada, atravessa as fileiras de baixo, faz a volta na caixa de retorno, do outro lado, e sai quente pelas fileiras de cima e pelo bocal de cima, na ponta LA, que tamb\xE9m purga o ar. As chicanas obrigam o ar quente a passar pelo feixe, e a bandeja embaixo recolhe qualquer vazamento.",estado:{corte:!0,ar:!0,agua:!0,foco:["trocador","agua","carcaca"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(0,1.45,-.3),dist:5.4,az:72,el:26}},{dur:5,para:{alvo:new w(.35,1.05,-.5),dist:5.4,az:58,el:24}}]},{id:"cargas",t:"Cargas no eixo e nos mancais",txt:()=>"O peso do rotor e a atra\xE7\xE3o magn\xE9tica desequilibrada fletem o eixo entre os mancais, e os escudos reagem nos dois mancais. O torque nominal entra pela ponta de eixo e pela chaveta.",estado:{cargas:!0,giro:.04,foco:["eixo","rotor","acoplamento","mancalLA","mancalLOA","campo","base"]},tomadas:()=>[{dur:3.4,para:{alvo:new w(0,0,0),dist:6.6,az:90,el:10}},{dur:6,para:{alvo:new w(.5,.05,0),dist:8.2,az:62,el:12}}]}]},dt={trilha:"eletrica",cap:0,tocando:!1,giro:.02,girarLivre:!0},Kt=We("m3-card"),zt=We("m3-caps"),Qt=We("m3-tip"),N={play:We("m3-play"),corte:We("m3-corte"),giro:We("m3-giro"),full:We("m3-full"),prev:We("m3-prev"),next:We("m3-next")};function Mt(J){m(!!J.corte),y(!!J.fases),z(!!J.ns),b(J.foco||null),D.visible=!!J.fluxo,it.visible=!!J.ar,H.visible=!!J.agua,ot.visible=!!J.corrente,F.visible=!!J.cargas,dt.giro=J.giro??.02}function Q(){let J=wt[dt.trilha];zt.innerHTML=J.map((ht,Pt)=>`<button type="button" role="tab" data-i="${Pt}" aria-selected="${Pt===dt.cap}"><span>${String(Pt+1).padStart(2,"0")}</span>${Sr(ht.t)}</button>`).join(""),document.querySelectorAll("[data-trilha]").forEach(ht=>ht.setAttribute("aria-pressed",String(ht.dataset.trilha===dt.trilha)))}function ct(J,{tocar:ht=!0}={}){let Pt=wt[dt.trilha];dt.cap=si(J,0,Pt.length-1);let qt=Pt[dt.cap];We("m3-count").textContent=`${String(dt.cap+1).padStart(2,"0")} / ${String(Pt.length).padStart(2,"0")}`,We("m3-step-title").textContent=qt.t,We("m3-step-text").textContent=qt.txt(),We("m3-trilha-rot").textContent=dt.trilha==="eletrica"?"El\xE9trica":"Mec\xE2nica",Mt(qt.estado),Q(),xe(),ht&&rt.tocar(qt.tomadas(),()=>{dt.tocando&&(dt.cap<Pt.length-1?setTimeout(()=>dt.tocando&&ct(dt.cap+1),t?2500:900):Et())})}function Et(){dt.tocando=!1,N.play.setAttribute("aria-pressed","false"),N.play.querySelector("span").textContent="Tour guiado"}function Ct(){dt.tocando=!0,N.play.setAttribute("aria-pressed","true"),N.play.querySelector("span").textContent="Pausar tour",ct(dt.cap)}N.play.addEventListener("click",()=>{dt.tocando?(Et(),rt.parar()):Ct()}),N.prev.addEventListener("click",()=>ct(dt.cap-1)),N.next.addEventListener("click",()=>ct(dt.cap+1)),zt.addEventListener("click",J=>{let ht=J.target.closest("[data-i]");ht&&ct(+ht.dataset.i)}),document.querySelectorAll("[data-trilha]").forEach(J=>J.addEventListener("click",()=>{dt.trilha!==J.dataset.trilha&&(dt.trilha=J.dataset.trilha,dt.cap=0,ct(0))})),N.corte.addEventListener("click",()=>m(!g)),N.giro.addEventListener("click",()=>{dt.girarLivre=!dt.girarLivre,N.giro.setAttribute("aria-pressed",String(dt.girarLivre))}),N.full?.addEventListener("click",()=>{let J=We("tour-3d");document.fullscreenElement?document.exitFullscreen():J.requestFullscreen?.()}),ft.addEventListener("start",()=>{rt.ativo&&(rt.parar(),Et())});let $t=new Io,bt=new lt,Bt=null;Os.addEventListener("pointerdown",J=>{Bt=[J.clientX,J.clientY]}),Os.addEventListener("pointerup",J=>{if(!Bt||Math.hypot(J.clientX-Bt[0],J.clientY-Bt[1])>5)return;Bt=null;let ht=Os.getBoundingClientRect();bt.set((J.clientX-ht.left)/ht.width*2-1,-(J.clientY-ht.top)/ht.height*2+1),$t.setFromCamera(bt,r);let Pt=$t.intersectObjects(p,!1).filter(Jt=>Jt.object.material!==x&&(!g||!l.corte.includes(Jt.object.material)||Jt.point.z<=.001)),qt=Pt.length?Pt[0].object.userData.parte||T(Pt[0].object):null;qt&&at[qt]?ee(qt,J.clientX-ht.left,J.clientY-ht.top):xe()});function ee(J,ht,Pt){let[qt,Jt,ie,Oe]=at[J];Qt.innerHTML=`<b>${Sr(qt)}</b><p>${Sr(Jt)}</p>${ie?`<a href="${ie}">Abrir ${Sr(Oe)} \u2192</a>`:""}`,Qt.hidden=!1;let E=Qt.offsetWidth,B=Qt.offsetHeight,$=Ti.clientWidth,Z=Ti.clientHeight;Qt.style.left=si(ht+14,8,$-E-8)+"px",Qt.style.top=si(Pt+14,8,Z-B-8)+"px"}function xe(){Qt.hidden=!0}let pe=new Po,we=0,At=!0;new IntersectionObserver(J=>{At=J[0].isIntersecting}).observe(Ti);let Ut=null;if(!e)try{Ut=I_(n,s,r)}catch(J){console.warn(J),Ut=null}function ue(){let J=Ti.clientWidth,ht=Ti.clientHeight;if(!(!J||!ht)&&(n.setSize(J,ht,!1),r.aspect=J/ht,J>720?r.setViewOffset(J,ht,-J*.14,-ht*.02,J,ht):r.clearViewOffset(),r.updateProjectionMatrix(),Ut)){let Pt=n.getPixelRatio(),qt=Math.round(J*Pt),Jt=Math.round(ht*Pt),ie=Pt>1.2?.5:1;Ut.rt.setSize(qt,Jt),Ut.ao.setSize(Math.round(qt*ie),Math.round(Jt*ie))}}function De(){if(!Ut){n.render(s,r);return}n.setRenderTarget(Ut.rt),n.clear(),n.render(s,r),Ut.ao.render(n,null,Ut.rt),n.setRenderTarget(null),Ut.quad.render(n)}new ResizeObserver(ue).observe(Ti),ue();function qe(){requestAnimationFrame(qe);let J=Math.min(.05,pe.getDelta());if(!At||document.hidden)return;let ht=rt.atualizar(J);ht&&(We("m3-prog").style.width=(ht.k*100).toFixed(1)+"%");let Pt=(dt.girarLivre||rt.ativo?dt.giro:0)*2*Math.PI*(t?.3:1);we+=Pt*J,l.giro.rotation.x=we;for(let qt of l.anim.aneis||[])qt.rotation.x+=Pt*J*.35;D.visible&&K(we),it.visible&&st(J),ot.visible&&R(J),H.visible&&W(J),ft.update(),De()}ct(0,{tocar:!1}),rt.tocar(wt.eletrica[0].tomadas()),Ti.classList.add("m3-pronto"),qe();let kn=(J,ht)=>{dt.trilha=J,ct(ht,{tocar:!1});let Pt=wt[J][ht].tomadas();rt.parar(),It.aplicar(Pt[Pt.length-1].para),ft.update()};window.__m3={scene:s,camera:r,controls:ft,Q:l,mostrarCap:ct,ui:dt,setCorte:m,rEixo:Mu,irPara:kn,renderer:n,pos:()=>!!Ut,desenhar:De}}function P_(i){let t=new rr,e=30,n=new Rs(e,64,32),s=n.attributes.position,r=[],o=new Yt,a=new Yt(.16,.17,.18),c=new Yt(.5,.53,.56),h=new Yt(.78,.8,.83);for(let f=0;f<s.count;f++){let g=s.getY(f)/e;g<0?o.copy(c).lerp(a,Math.min(1,-g*2.2)):o.copy(c).lerp(h,Math.min(1,g*1.4)),r.push(o.r,o.g,o.b)}n.setAttribute("color",new ce(r,3)),t.add(new Ee(n,new cn({vertexColors:!0,side:$e})));let l=(f,g,x,m,p,T,b=16777215)=>{let y=new Ee(new Mi(f,g),new cn({color:new Yt(b).multiplyScalar(T),side:yn}));y.position.set(x,m,p),y.lookAt(0,0,0),t.add(y)};l(16,9,3,19,7,5),l(5,16,-19,6,7,2.4),l(5,16,17,6,-8,1.8,14871551),l(22,3.5,0,5,-21,1.4),l(12,3,5,1.5,21,.9);let u=new Es(i),d=u.fromScene(t,.03).texture;return u.dispose(),d}function I_(i,t,e){let n=i.getContext(),s=!!i.extensions.get("EXT_color_buffer_float")||!!n.getExtension("EXT_color_buffer_float"),r=new an(4,4,{type:s?Vn:gn,samples:4,depthTexture:new Si(4,4)}),o=new Ns(t,e,4,4);o.setGBuffer(r.depthTexture),o.updateGtaoMaterial({radius:.3,distanceExponent:1.6,thickness:1.4,scale:1.15,samples:16,distanceFallOff:1}),o.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),o.output=Ns.OUTPUT.Off;let a=new Us(new He({uniforms:{tCor:{value:r.texture},tAO:{value:o.pdRenderTarget.texture},forca:{value:.95}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`uniform sampler2D tCor; uniform sampler2D tAO; uniform float forca; varying vec2 vUv;
      void main() { vec4 c = texture2D(tCor, vUv); float a = texture2D(tAO, vUv).r; c.rgb *= mix(1., a, forca); gl_FragColor = c;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1,blending:Be}));return{rt:r,ao:o,quad:a}}
