var zi=2463534242,Fe=()=>(zi^=zi<<13,zi^=zi>>>17,zi^=zi<<5,(zi>>>0)/4294967296);var nl="170",ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ku=0,Al=1,Vu=2;var kh=1,il=2,ci=3,wi=0,an=1,Tn=2,Ge=0,Ps=1,ua=2,Rl=3,Cl=4,sl=5,In=100,Hu=101,Gu=102,Wu=103,Xu=104,Gs=200,qu=201,Yu=202,Zu=203,No=204,Oo=205,Fa=206,$u=207,za=208,Ju=209,Ku=210,ju=211,Qu=212,td=213,ed=214,Fo=0,zo=1,Bo=2,Us=3,ko=4,Vo=5,Ho=6,Go=7,Vh=0,nd=1,id=2,Ti=0,sd=1,rd=2,ad=3,od=4,cd=5,ld=6,rl=7;var Hh=300,Ns=301,Os=302,Wo=303,Xo=304,Ba=306,ui=1e3,Zi=1001,qo=1002,on=1003,hd=1004;var Dr=1005;var $n=1006,no=1007;var $i=1008;var An=1009,Gh=1010,Wh=1011,hr=1012,al=1013,Ji=1014,Jn=1015,ei=1016,ol=1017,cl=1018,Ai=1020,Xh=35902,qh=1021,Yh=1022,wn=1023,Zh=1024,$h=1025,Is=1026,Ri=1027,ll=1028,hl=1029,Jh=1030,ul=1031;var dl=1033,aa=33776,oa=33777,ca=33778,la=33779,Yo=35840,Zo=35841,$o=35842,Jo=35843,Ko=36196,jo=37492,Qo=37496,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,ac=37814,oc=37815,cc=37816,lc=37817,hc=37818,uc=37819,dc=37820,fc=37821,ha=36492,pc=36494,mc=36495,Kh=36283,gc=36284,xc=36285,_c=36286;var da=2300,vc=2301,io=2302,Pl=2400,Il=2401,Dl=2402;var ud=3200,dd=3201;var fl=0,fd=1,Ei="",Ke="srgb",Li="srgb-linear",ka="linear",Ae="srgb";var ds=7680;var Ll=519,pd=512,md=513,gd=514,jh=515,xd=516,_d=517,vd=518,yd=519,Ul=35044;var Nl="300 es",li=2e3,fa=2001,di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=1234567,sr=Math.PI/180,ur=180/Math.PI;function as(){let i=Fe()*4294967295|0,t=Fe()*4294967295|0,e=Fe()*4294967295|0,n=Fe()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function pl(i,t){return(i%t+t)%t}function Md(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bd(i,t,e){return i!==t?(e-i)/(t-i):0}function rr(i,t,e){return(1-e)*i+e*t}function Sd(i,t,e,n){return rr(i,t,1-Math.exp(-e*n))}function Ed(i,t=1){return t-Math.abs(pl(i,t*2)-t)}function Td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ad(i,t){return i+Math.floor(Fe()*(t-i+1))}function Rd(i,t){return i+Fe()*(t-i)}function Cd(i){return i*(.5-Fe())}function Pd(i){i!==void 0&&(Ol=i);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(i){return i*sr}function Dd(i){return i*ur}function Ld(i){return(i&i-1)===0&&i!==0}function Ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Od(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function As(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qh={DEG2RAD:sr,RAD2DEG:ur,generateUUID:as,clamp:Be,euclideanModulo:pl,mapLinear:Md,inverseLerp:bd,lerp:rr,damp:Sd,pingpong:Ed,smoothstep:Td,smootherstep:wd,randInt:Ad,randFloat:Rd,randFloatSpread:Cd,seededRandom:Pd,degToRad:Id,radToDeg:Dd,isPowerOfTwo:Ld,ceilPowerOfTwo:Ud,floorPowerOfTwo:Nd,setQuaternionFromProperEuler:Od,normalize:hn,denormalize:As},yt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Fe(),this.y=Fe(),this}*[Symbol.iterator](){yield this.x,yield this.y}},de=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],E=s[1],S=s[4],v=s[7],V=s[2],y=s[5],A=s[8];return r[0]=a*x+o*E+c*V,r[3]=a*m+o*S+c*y,r[6]=a*p+o*v+c*A,r[1]=l*x+u*E+d*V,r[4]=l*m+u*S+d*y,r[7]=l*p+u*v+d*A,r[2]=h*x+f*E+g*V,r[5]=h*m+f*S+g*y,r[8]=h*p+f*v+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(o*n-s*a)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(so.makeScale(t,e)),this}rotate(t){return this.premultiply(so.makeRotation(-t)),this}translate(t,e){return this.premultiply(so.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},so=new de;function tu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){let i=pa("canvas");return i.style.display="block",i}var Fl={};function nr(i){i in Fl||(Fl[i]=!0,console.warn(i))}function zd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Bd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ge={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],kl=[.3127,.329],Vl=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ge.define({[Li]:{primaries:zl,whitePoint:kl,transfer:ka,toXYZ:Vl,fromXYZ:Hl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:zl,whitePoint:kl,transfer:Ae,toXYZ:Vl,fromXYZ:Hl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});var fs,yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fs===void 0&&(fs=pa("canvas")),fs.width=t.width,fs.height=t.height;let n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,ma=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ro(s[a].image)):r.push(ro(s[a]))}else r=ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hd=0,vn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zi,s=Zi,r=$n,a=$i,o=wn,c=An,l=i.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=as(),this.name="",this.source=new ma(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Hh;vn.DEFAULT_ANISOTROPY=1;var Ne=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,v=(f+1)/2,V=(p+1)/2,y=(u+h)/4,A=(d+x)/4,w=(g+m)/4;return S>v&&S>V?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=y/n,r=A/n):v>V?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=w/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=A/r,s=w/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(h-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Fe(),this.y=Fe(),this.z=Fe(),this.w=Fe(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ma(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ga=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bc=class extends vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=1-o,p=c*h+l*f+u*g+d*x,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let V=Math.sqrt(S),y=Math.atan2(V,p*E);m=Math.sin(m*y)/V,o=Math.sin(o*y)/V}let v=o*E;if(c=c*m+h*v,l=l*m+f*v,u=u*m+g*v,d=d*m+x*v,m===1-o){let V=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=V,l*=V,u*=V,d*=V}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Fe(),e=2*Math.PI*Fe(),n=Fe(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Fe(),this.y=Fe(),this.z=Fe(),this}randomDirection(){let t=Fe()*Math.PI*2,e=Fe()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ao=new L,Gl=new tn,pn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Ur.subVectors(this.max,Js),ps.subVectors(t.a,Js),ms.subVectors(t.b,Js),gs.subVectors(t.c,Js),_i.subVectors(ms,ps),vi.subVectors(gs,ms),Bi.subVectors(ps,gs);let e=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Bi.y,Bi.x,0];return!oo(e,ps,ms,gs,Ur)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,ps,ms,gs,Ur))?!1:(Nr.crossVectors(_i,vi),e=[Nr.x,Nr.y,Nr.z],oo(e,ps,ms,gs,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ii=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,Lr=new pn,ps=new L,ms=new L,gs=new L,_i=new L,vi=new L,Bi=new L,Js=new L,Ur=new L,Nr=new L,ki=new L;function oo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Gd=new pn,Ks=new L,co=new L,Ci=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(co)),this.expandByPoint(Ks.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new L,lo=new L,Or=new L,yi=new L,ho=new L,Fr=new L,uo=new L,Ki=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lo.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(lo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=yi.dot(this.direction),c=-yi.dot(Or),l=yi.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lo).addScaledVector(Or,h),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,s,r){ho.subVectors(e,t),Fr.subVectors(n,t),uo.crossVectors(ho,Fr);let a=this.direction.dot(uo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,t);let c=o*this.direction.dot(Fr.crossVectors(yi,Fr));if(c<0)return null;let l=o*this.direction.dot(ho.cross(yi));if(l<0||c+l>a)return null;let u=-o*yi.dot(uo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fe=class i{constructor(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m)}set(t,e,n,s,r,a,o,c,l,u,d,h,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-o*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=x+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=x-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){let h=a*c,f=a*l,g=o*c,x=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wd,t,Xd)}lookAt(t,e,n){let s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Mi.crossVectors(n,Sn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Mi.crossVectors(n,Sn)),Mi.normalize(),zr.crossVectors(Sn,Mi),s[0]=Mi.x,s[4]=zr.x,s[8]=Sn.x,s[1]=Mi.y,s[5]=zr.y,s[9]=Sn.y,s[2]=Mi.z,s[6]=zr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],S=n[7],v=n[11],V=n[15],y=s[0],A=s[4],w=s[8],T=s[12],_=s[1],D=s[5],q=s[9],F=s[13],U=s[2],O=s[6],z=s[10],nt=s[14],$=s[3],st=s[7],At=s[11],It=s[15];return r[0]=a*y+o*_+c*U+l*$,r[4]=a*A+o*D+c*O+l*st,r[8]=a*w+o*q+c*z+l*At,r[12]=a*T+o*F+c*nt+l*It,r[1]=u*y+d*_+h*U+f*$,r[5]=u*A+d*D+h*O+f*st,r[9]=u*w+d*q+h*z+f*At,r[13]=u*T+d*F+h*nt+f*It,r[2]=g*y+x*_+m*U+p*$,r[6]=g*A+x*D+m*O+p*st,r[10]=g*w+x*q+m*z+p*At,r[14]=g*T+x*F+m*nt+p*It,r[3]=E*y+S*_+v*U+V*$,r[7]=E*A+S*D+v*O+V*st,r[11]=E*w+S*q+v*z+V*At,r[15]=E*T+S*F+v*nt+V*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*o*h+n*l*h+s*o*f-n*c*f)+x*(+e*c*f-e*l*h+r*a*h-s*a*f+s*l*u-r*c*u)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-e*c*d+e*o*h+s*a*d-n*a*h+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=d*m*l-x*h*l+x*c*f-o*m*f-d*c*p+o*h*p,S=g*h*l-u*m*l-g*c*f+a*m*f+u*c*p-a*h*p,v=u*x*l-g*d*l+g*o*f-a*x*f-u*o*p+a*d*p,V=g*d*c-u*x*c-g*o*h+a*x*h+u*o*m-a*d*m,y=e*E+n*S+s*v+r*V;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/y;return t[0]=E*A,t[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*A,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*A,t[3]=(d*c*r-o*h*r-d*s*l+n*h*l+o*s*f-n*c*f)*A,t[4]=S*A,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*A,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*A,t[7]=(a*h*r-u*c*r+u*s*l-e*h*l-a*s*f+e*c*f)*A,t[8]=v*A,t[9]=(g*d*r-u*x*r-g*n*f+e*x*f+u*n*p-e*d*p)*A,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*A,t[11]=(u*o*r-a*d*r-u*n*l+e*d*l+a*n*f-e*o*f)*A,t[12]=V*A,t[13]=(u*x*s-g*d*s+g*n*h-e*x*h-u*n*m+e*d*m)*A,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*A,t[15]=(a*d*s-u*o*s+u*n*c-e*d*c-a*n*h+e*o*h)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,x=a*u,m=a*d,p=o*d,E=c*l,S=c*u,v=c*d,V=n.x,y=n.y,A=n.z;return s[0]=(1-(x+p))*V,s[1]=(f+v)*V,s[2]=(g-S)*V,s[3]=0,s[4]=(f-v)*y,s[5]=(1-(h+p))*y,s[6]=(m+E)*y,s[7]=0,s[8]=(g+S)*A,s[9]=(m-E)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xs.set(s[0],s[1],s[2]).length(),a=xs.set(s[4],s[5],s[6]).length(),o=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Vn.copy(this);let l=1/r,u=1/a,d=1/o;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,e.setFromRotationMatrix(Vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=li){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s),f,g;if(o===li)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===fa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=li){let c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(a-r),h=(e+t)*l,f=(n+s)*u,g,x;if(o===li)g=(a+r)*d,x=-2*d;else if(o===fa)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xs=new L,Vn=new fe,Wd=new L(0,0,0),Xd=new L(1,1,1),Mi=new L,zr=new L,Sn=new L,Wl=new fe,Xl=new tn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qd=0,ql=new L,_s=new tn,ri=new fe,Br=new L,js=new L,Yd=new L,Zd=new tn,Yl=new L(1,0,0),Zl=new L(0,1,0),$l=new L(0,0,1),Jl={type:"added"},$d={type:"removed"},vs={type:"childadded",child:null},fo={type:"childremoved",child:null},mn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Kn,n=new tn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new de}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(js,Br,this.up):ri.lookAt(Br,js,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ri),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jl),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d),fo.child=t,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jl),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,Yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};mn.DEFAULT_UP=new L(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new L,ai=new L,po=new L,oi=new L,ys=new L,Ms=new L,Kl=new L,mo=new L,go=new L,xo=new L,_o=new Ne,vo=new Ne,yo=new Ne,qi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),ai.subVectors(n,e),po.subVectors(t,e);let a=Hn.dot(Hn),o=Hn.dot(ai),c=Hn.dot(po),l=ai.dot(ai),u=ai.dot(po),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return _o.setScalar(0),vo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),yo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),ai.subVectors(t,e),Hn.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Hn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),Ms.subVectors(r,n),mo.subVectors(t,n);let c=ys.dot(mo),l=Ms.dot(mo);if(c<=0&&l<=0)return e.copy(n);go.subVectors(t,s);let u=ys.dot(go),d=Ms.dot(go);if(u>=0&&d<=u)return e.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ys,a);xo.subVectors(t,r);let f=ys.dot(xo),g=Ms.dot(xo);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ms,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Kl.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Kl,o);let p=1/(m+x+h);return a=x*p,o=h*p,e.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=pl(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mo(a,r,t+1/3),this.g=Mo(a,r,t),this.b=Mo(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ge.fromWorkingColorSpace(rn.copy(this),t),Math.round(Be(rn.r*255,0,255))*65536+Math.round(Be(rn.g*255,0,255))*256+Math.round(Be(rn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ke){ge.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(kr);let n=rr(bi.h,kr.h,e),s=rr(bi.s,kr.s,e),r=rr(bi.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ee;ee.NAMES=eu;var Jd=0,jn=class extends di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=as(),this.name="",this.blending=Ps,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Oo,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},cn=class extends jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new L,Vr=new yt,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}};var xa=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _a=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kd=0,Pn=new fe,bo=new mn,bs=new L,En=new pn,Qs=new pn,Je=new L,Oe=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?_a:xa)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new de().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Je.addVectors(En.min,Qs.min),En.expandByPoint(Je),Je.addVectors(En.max,Qs.max),En.expandByPoint(Je)):(En.expandByPoint(Qs.min),En.expandByPoint(Qs.max))}En.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Je.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(t,l),Je.add(bs)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new L,c[w]=new L;let l=new L,u=new L,d=new L,h=new yt,f=new yt,g=new yt,x=new L,m=new L;function p(w,T,_){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,_),h.fromBufferAttribute(r,w),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,_),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[w].add(x),o[T].add(x),o[_].add(x),c[w].add(m),c[T].add(m),c[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,T=E.length;w<T;++w){let _=E[w],D=_.start,q=_.count;for(let F=D,U=D+q;F<U;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let S=new L,v=new L,V=new L,y=new L;function A(w){V.fromBufferAttribute(s,w),y.copy(V);let T=o[w];S.copy(T),S.sub(V.multiplyScalar(V.dot(T))).normalize(),v.crossVectors(y,T);let D=v.dot(c[w])<0?-1:1;a.setXYZW(w,S.x,S.y,S.z,D)}for(let w=0,T=E.length;w<T;++w){let _=E[w],D=_.start,q=_.count;for(let F=D,U=D+q;F<U;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,d=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Qe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new fe,Vi=new Ki,Hr=new Ci,Ql=new L,Gr=new L,Wr=new L,Xr=new L,So=new L,qr=new L,th=new L,Yr=new L,Re=class extends mn{constructor(t=new Oe,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(So.fromBufferAttribute(d,t),a?qr.addScaledVector(So,u):qr.addScaledVector(So.sub(e),u))}e.add(qr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Hr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Hr,Ql)===null||Vi.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(jl.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,V=S;v<V;v+=3){let y=o.getX(v),A=o.getX(v+1),w=o.getX(v+2);s=Zr(this,p,t,n,l,u,d,y,A,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=Zr(this,a,t,n,l,u,d,E,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,V=S;v<V;v+=3){let y=v,A=v+1,w=v+2;s=Zr(this,p,t,n,l,u,d,y,A,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,S=m+1,v=m+2;s=Zr(this,a,t,n,l,u,d,E,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jd(i,t,e,n,s,r,a,o){let c;if(t.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===wi,o),c===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Yr);return l<e.near||l>e.far?null:{distance:l,point:Yr.clone(),object:i}}function Zr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Gr),i.getVertexPosition(c,Wr),i.getVertexPosition(l,Xr);let u=jd(i,t,e,n,Gr,Wr,Xr,th);if(u){let d=new L;qi.getBarycoord(th,Gr,Wr,Xr,d),s&&(u.uv=qi.getInterpolatedAttribute(s,o,c,l,d,new yt)),r&&(u.uv1=qi.getInterpolatedAttribute(r,o,c,l,d,new yt)),a&&(u.normal=qi.getInterpolatedAttribute(a,o,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new L,materialIndex:0};qi.getNormal(Gr,Wr,Xr,h.normal),u.face=h,u.barycoord=d}return u}var fi=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function g(x,m,p,E,S,v,V,y,A,w,T){let _=v/A,D=V/w,q=v/2,F=V/2,U=y/2,O=A+1,z=w+1,nt=0,$=0,st=new L;for(let At=0;At<z;At++){let It=At*D-F;for(let Et=0;Et<O;Et++){let qt=Et*_-q;st[x]=qt*E,st[m]=It*S,st[p]=U,l.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=y>0?1:-1,u.push(st.x,st.y,st.z),d.push(Et/A),d.push(1-At/w),nt+=1}}for(let At=0;At<w;At++)for(let It=0;It<A;It++){let Et=h+It+O*At,qt=h+It+O*(At+1),rt=h+(It+1)+O*(At+1),mt=h+(It+1)+O*At;c.push(Et,qt,mt),c.push(qt,rt,mt),$+=6}o.addGroup(f,$,T),f+=$,h+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var os={clone:Fs,merge:un},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},va=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new L,eh=new yt,nh=new yt,dn=class extends va{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ss=-90,Es=1,Sc=class extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Ss,Es,t,e);s.layers=this.layers,this.add(s);let r=new dn(Ss,Es,t,e);r.layers=this.layers,this.add(r);let a=new dn(Ss,Es,t,e);a.layers=this.layers,this.add(a);let o=new dn(Ss,Es,t,e);o.layers=this.layers,this.add(o);let c=new dn(Ss,Es,t,e);c.layers=this.layers,this.add(c);let l=new dn(Ss,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends vn{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ec=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Ge});r.uniforms.tEquirect.value=e;let a=new Re(s,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=$n),new Sc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Eo=new L,nf=new L,sf=new de,je=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Eo.subVectors(n,e).cross(nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sf.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Ci,$r=new L,fr=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],E=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,h-l,m-f,v-p).normalize(),n[1].setComponents(c+r,h+l,m+f,v+p).normalize(),n[2].setComponents(c+a,h+u,m+g,v+E).normalize(),n[3].setComponents(c-a,h-u,m-g,v-E).normalize(),n[4].setComponents(c-o,h-d,m-x,v-S).normalize(),e===li)n[5].setComponents(c+o,h+d,m+x,v+S).normalize();else if(e===fa)n[5].setComponents(o,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($r.x=s.normal.x>0?t.max.x:t.min.x,$r.y=s.normal.y>0?t.max.y:t.min.y,$r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function iu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rf(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Qn=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let E=p*h-a;for(let S=0;S<l;S++){let v=S*d-r;g.push(v,-E,0),x.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let S=E+l*p,v=E+l*(p+1),V=E+1+l*(p+1),y=E+1+l*p;f.push(S,v,y),f.push(v,V,y)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,sp=`struct PhysicalMaterial {
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
}`,rp=`
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,dm=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,ym=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Lm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:cf,alphamap_pars_fragment:lf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:df,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:xf,bsdfs:_f,iridescence_fragment:vf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:wf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:If,displacementmap_pars_vertex:Df,displacementmap_vertex:Lf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Of,colorspace_pars_fragment:Ff,envmap_fragment:zf,envmap_common_pars_fragment:Bf,envmap_pars_fragment:kf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:jf,envmap_vertex:Hf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Jf,lights_pars_begin:Kf,lights_toon_fragment:Qf,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:xp,morphinstance_vertex:_p,morphcolor_vertex:vp,morphnormal_vertex:yp,morphtarget_pars_vertex:Mp,morphtarget_vertex:bp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:Tp,normal_pars_vertex:wp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Dp,opaque_fragment:Lp,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Op,dithering_fragment:Fp,dithering_pars_fragment:zp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:$p,specularmap_pars_fragment:Jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:Qp,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:cm,cube_vert:lm,cube_frag:hm,depth_vert:um,depth_frag:dm,distanceRGBA_vert:fm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:ym,meshlambert_vert:Mm,meshlambert_frag:bm,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:Tm,meshnormal_frag:wm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Im,meshtoon_frag:Dm,points_vert:Lm,points_frag:Um,shadow_vert:Nm,shadow_frag:Om,sprite_vert:Fm,sprite_frag:zm},Gt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Zn={basic:{uniforms:un([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:un([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ee(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:un([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:un([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:un([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ee(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:un([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:un([Gt.points,Gt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:un([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:un([Gt.common,Gt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:un([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:un([Gt.sprite,Gt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:un([Gt.common,Gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:un([Gt.lights,Gt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Zn.physical={uniforms:un([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Jr={r:0,b:0,g:0},Gi=new Kn,Bm=new fe;function km(i,t,e,n,s,r,a){let o=new ee(0),c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1,v=g(E);v===null?p(o,c):v&&v.isColor&&(p(v,1),S=!0);let V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let v=g(S);v&&(v.isCubeTexture||v.mapping===Ba)?(u===void 0&&(u=new Re(new fi(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Fs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gi.copy(S.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(Gi)),u.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ae,(d!==v||h!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Re(new Qn(2,2),new ke({name:"BackgroundMaterial",uniforms:Fs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ge.getTransfer(v.colorSpace)!==Ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,h=v.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(Jr,nu(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:x,addToRenderList:m}}function Vm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(_,D,q,F,U){let O=!1,z=d(F,q,D);r!==z&&(r=z,l(r.object)),O=f(_,F,q,U),O&&g(_,F,q,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,v(_,D,q,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,D,q){let F=q.wireframe===!0,U=n[_.id];U===void 0&&(U={},n[_.id]=U);let O=U[D.id];O===void 0&&(O={},U[D.id]=O);let z=O[F];return z===void 0&&(z=h(c()),O[F]=z),z}function h(_){let D=[],q=[],F=[];for(let U=0;U<e;U++)D[U]=0,q[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,D,q,F){let U=r.attributes,O=D.attributes,z=0,nt=q.getAttributes();for(let $ in nt)if(nt[$].location>=0){let At=U[$],It=O[$];if(It===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(It=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(It=_.instanceColor)),At===void 0||At.attribute!==It||It&&At.data!==It.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function g(_,D,q,F){let U={},O=D.attributes,z=0,nt=q.getAttributes();for(let $ in nt)if(nt[$].location>=0){let At=O[$];At===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(At=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(At=_.instanceColor));let It={};It.attribute=At,At&&At.data&&(It.data=At.data),U[$]=It,z++}r.attributes=U,r.attributesNum=z,r.index=F}function x(){let _=r.newAttributes;for(let D=0,q=_.length;D<q;D++)_[D]=0}function m(_){p(_,0)}function p(_,D){let q=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;q[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),U[_]!==D&&(i.vertexAttribDivisor(_,D),U[_]=D)}function E(){let _=r.newAttributes,D=r.enabledAttributes;for(let q=0,F=D.length;q<F;q++)D[q]!==_[q]&&(i.disableVertexAttribArray(q),D[q]=0)}function S(_,D,q,F,U,O,z){z===!0?i.vertexAttribIPointer(_,D,q,U,O):i.vertexAttribPointer(_,D,q,F,U,O)}function v(_,D,q,F){x();let U=F.attributes,O=q.getAttributes(),z=D.defaultAttributeValues;for(let nt in O){let $=O[nt];if($.location>=0){let st=U[nt];if(st===void 0&&(nt==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),nt==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){let At=st.normalized,It=st.itemSize,Et=t.get(st);if(Et===void 0)continue;let qt=Et.buffer,rt=Et.type,mt=Et.bytesPerElement,Ft=rt===i.INT||rt===i.UNSIGNED_INT||st.gpuType===al;if(st.isInterleavedBufferAttribute){let ft=st.data,Nt=ft.stride,Wt=st.offset;if(ft.isInstancedInterleavedBuffer){for(let Mt=0;Mt<$.locationSize;Mt++)p($.location+Mt,ft.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Mt=0;Mt<$.locationSize;Mt++)m($.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Mt=0;Mt<$.locationSize;Mt++)S($.location+Mt,It/$.locationSize,rt,At,Nt*mt,(Wt+It/$.locationSize*Mt)*mt,Ft)}else{if(st.isInstancedBufferAttribute){for(let ft=0;ft<$.locationSize;ft++)p($.location+ft,st.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<$.locationSize;ft++)m($.location+ft);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ft=0;ft<$.locationSize;ft++)S($.location+ft,It/$.locationSize,rt,At,It*mt,It/$.locationSize*ft*mt,Ft)}}else if(z!==void 0){let At=z[nt];if(At!==void 0)switch(At.length){case 2:i.vertexAttrib2fv($.location,At);break;case 3:i.vertexAttrib3fv($.location,At);break;case 4:i.vertexAttrib4fv($.location,At);break;default:i.vertexAttrib1fv($.location,At)}}}}E()}function V(){w();for(let _ in n){let D=n[_];for(let q in D){let F=D[q];for(let U in F)u(F[U].object),delete F[U];delete D[q]}delete n[_]}}function y(_){if(n[_.id]===void 0)return;let D=n[_.id];for(let q in D){let F=D[q];for(let U in F)u(F[U].object),delete F[U];delete D[q]}delete n[_.id]}function A(_){for(let D in n){let q=n[D];if(q[_.id]===void 0)continue;let F=q[_.id];for(let U in F)u(F[U].object),delete F[U];delete q[_.id]}}function w(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:T,dispose:V,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Hm(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Gm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let w=A===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Jn&&!w)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:V,maxSamples:y}}function Wm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new de,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let E=r?0:n,S=E*4,v=p.clippingState||null;c.value=v,v=u(g,h,S,f);for(let V=0;V!==S;++V)v[V]=e[V];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xm(i){let t=new WeakMap;function e(a,o){return o===Wo?a.mapping=Ns:o===Xo&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wo||o===Xo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ec(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=class extends va{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,ih=[.125,.215,.35,.446,.526,.582],Yi=20,To=new zs,sh=new ee,wo=null,Ao=0,Ro=0,Co=!1,Xi=(1+Math.sqrt(5))/2,Ts=1/Xi,rh=[new L(-Xi,Ts,0),new L(Xi,Ts,0),new L(-Ts,0,Xi),new L(Ts,0,Xi),new L(0,Xi,-Ts),new L(0,Xi,Ts),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,Ao,Ro),this._renderer.xr.enabled=Co,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ei,format:wn,colorSpace:Li,depthBuffer:!1},s=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=Ym(r,t,e)}return s}_compileMaterial(t){let e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,s){let o=new dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(sh),u.toneMapping=Ti,u.autoClear=!1;let f=new cn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Re(new fi,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(sh),x=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let S=this._cubeSize;Kr(s,E*S,p>2?S:0,S,S),u.setRenderTarget(s),x&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ns||t.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;Kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,To)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rh[(s-r-1)%rh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Re(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let p=[],E=0;for(let A=0;A<Yi;++A){let w=A/x,T=Math.exp(-w*w/2);p.push(T),A===0?E+=T:A<m&&(E+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;let v=this._sizeLods[s],V=3*v*(s>S-Rs?s-S+Rs:0),y=4*(this._cubeSize-v);Kr(e,V,y,3*v,2*v),c.setRenderTarget(e),c.render(d,To)}};function qm(i){let t=[],e=[],n=[],s=i,r=i-Rs+1+ih.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Rs?c=ih[a-i+Rs-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let y=0;y<f;y++){let A=y%3*2/3-1,w=y>2?0:-1,T=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];E.set(T,x*g*y),S.set(h,m*g*y);let _=[y,y,y,y,y,y];v.set(_,p*g*y)}let V=new Oe;V.setAttribute("position",new Qe(E,x)),V.setAttribute("uv",new Qe(S,m)),V.setAttribute("faceIndex",new Qe(v,p)),t.push(V),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ah(i,t,e){let n=new fn(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ym(i,t,e){let n=new Float32Array(Yi),s=new L(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Ge,depthTest:!1,depthWrite:!1})}function oh(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Ge,depthTest:!1,depthWrite:!1})}function ch(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ge,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function Zm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Wo||c===Xo,u=c===Ns||c===Os;if(l||u){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Bs(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Bs(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $m(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);for(let g in h.morphAttributes){let x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let S=0,v=E.length;S<v;S+=3){let V=E[S+0],y=E[S+1],A=E[S+2];h.push(V,y,y,A,A,V)}}else if(g!==void 0){let E=g.array;x=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){let V=S+0,y=S+1,A=S+2;h.push(V,y,y,A,A,V)}}else return;let m=new(tu(h)?_a:xa)(h,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Km(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*x[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function jm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,t,e){let n=new WeakMap,s=new Ne;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,V=1;v>t.maxTextureSize&&(V=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let y=new Float32Array(v*V*4*d),A=new ga(y,v,V,d);A.type=Jn,A.needsUpdate=!0;let w=S*4;for(let _=0;_<d;_++){let D=m[_],q=p[_],F=E[_],U=v*V*4*_;for(let O=0;O<D.count;O++){let z=O*w;f===!0&&(s.fromBufferAttribute(D,O),y[U+z+0]=s.x,y[U+z+1]=s.y,y[U+z+2]=s.z,y[U+z+3]=0),g===!0&&(s.fromBufferAttribute(q,O),y[U+z+4]=s.x,y[U+z+5]=s.y,y[U+z+6]=s.z,y[U+z+7]=0),x===!0&&(s.fromBufferAttribute(F,O),y[U+z+8]=s.x,y[U+z+9]=s.y,y[U+z+10]=s.z,y[U+z+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new yt(v,V)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function t0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Pi=class extends vn{constructor(t,e,n,s,r,a,o,c,l,u=Is){if(u!==Is&&u!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=Ji),n===void 0&&u===Ri&&(n=Ai),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},su=new vn,lh=new Pi(1,1),ru=new ga,au=new bc,ou=new ya,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Xe(e,n)}}function a0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Xe(e,n)}}function o0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),Xe(e,n)}}function c0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function d0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=jh,r=lh):r=su,e.setTexture2D(t||r,s)}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||au,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ou,s)}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ru,s)}function y0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return c0;case 35667:case 35671:return l0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function M0(i,t){i.uniform1fv(this.addr,t)}function b0(i,t){let e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){let e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function E0(i,t){let e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function T0(i,t){let e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){let e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){let e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function P0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function L0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||su,r[a])}function F0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||au,r[a])}function z0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ou,r[a])}function B0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ru,r[a])}function k0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return S0;case 35666:return E0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return L0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return B0}}var Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y0(e.type)}},wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Po=/(\w+)(\])?(\[|\.)?/g;function mh(i,t){i.seq.push(t),i.map[t.id]=t}function V0(i,t,e){let n=i.name,s=n.length;for(Po.lastIndex=0;;){let r=Po.exec(n),a=Po.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){mh(e,l===void 0?new Tc(o,i,t):new wc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Ac(o),mh(e,d)),e=d}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);V0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var H0=37297,G0=0;function W0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xh=new de;function X0(i){ge._getMatrix(xh,ge.workingColorSpace,i);let t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case ka:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _h(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+W0(i.getShaderSource(t),a)}else return s}function q0(i,t){let e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y0(i,t){let e;switch(t){case sd:e="Linear";break;case rd:e="Reinhard";break;case ad:e="Cineon";break;case od:e="ACESFilmic";break;case ld:e="AgX";break;case rl:e="Neutral";break;case cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jr=new L;function Z0(){ge.getLuminanceCoefficients(jr);let i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function J0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(i){return i.replace(j0,tg)}var Q0=new Map;function tg(i,t){let e=he[t];if(e===void 0){let n=Q0.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(eg,ng)}function ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ig(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===il?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:t="ENVMAP_MODE_REFRACTION";break}return t}function ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case nd:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function og(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ig(e),l=sg(e),u=rg(e),d=ag(e),h=og(e),f=$0(e),g=J0(r),x=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?he.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,q0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=Rc(a),a=vh(a,e),a=yh(a,e),o=Rc(o),o=vh(o,e),o=yh(o,e),a=Mh(a),o=Mh(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=E+m+a,v=E+p+o,V=gh(s,s.VERTEX_SHADER,S),y=gh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,V),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(V).trim(),U=s.getShaderInfoLog(y).trim(),O=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,V,y);else{let nt=_h(s,V,"vertex"),$=_h(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+nt+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(F===""||U==="")&&(z=!1);z&&(D.diagnostics={runnable:O,programLog:q,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(V),s.deleteShader(y),w=new Ls(s,x),T=K0(s,x)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,H0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=V,this.fragmentShader=y,this}var lg=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pc(t),e.set(t,n)),n}},Pc=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function hg(i,t,e,n,s,r,a){let o=new dr,c=new Cc,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,_,D,q,F){let U=q.fog,O=F.geometry,z=T.isMeshStandardMaterial?q.environment:null,nt=(T.isMeshStandardMaterial?e:t).get(T.envMap||z),$=nt&&nt.mapping===Ba?nt.image.height:null,st=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let At=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=At!==void 0?At.length:0,Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let qt,rt,mt,Ft;if(st){let Ct=Zn[st];qt=Ct.vertexShader,rt=Ct.fragmentShader}else qt=T.vertexShader,rt=T.fragmentShader,c.update(T),mt=c.getVertexShaderID(T),Ft=c.getFragmentShaderID(T);let ft=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Wt=F.isInstancedMesh===!0,Mt=F.isBatchedMesh===!0,Tt=!!T.map,j=!!T.matcap,at=!!nt,P=!!T.aoMap,gt=!!T.lightMap,lt=!!T.bumpMap,dt=!!T.normalMap,vt=!!T.displacementMap,Vt=!!T.emissiveMap,ut=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,K=T.clearcoat>0,ct=T.dispersion>0,pt=T.iridescence>0,ot=T.sheen>0,Ht=T.transmission>0,Ot=M&&!!T.anisotropyMap,kt=K&&!!T.clearcoatMap,oe=K&&!!T.clearcoatNormalMap,bt=K&&!!T.clearcoatRoughnessMap,Dt=pt&&!!T.iridescenceMap,Lt=pt&&!!T.iridescenceThicknessMap,Jt=ot&&!!T.sheenColorMap,H=ot&&!!T.sheenRoughnessMap,X=!!T.specularMap,Y=!!T.specularColorMap,tt=!!T.specularIntensityMap,C=Ht&&!!T.transmissionMap,W=Ht&&!!T.thicknessMap,B=!!T.gradientMap,N=!!T.alphaMap,it=T.alphaTest>0,J=!!T.alphaHash,ht=!!T.extensions,_t=Ti;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(_t=i.toneMapping);let xt={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:qt,fragmentShader:rt,defines:T.defines,customVertexShaderID:mt,customFragmentShaderID:Ft,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&F._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&F.instanceColor!==null,instancingMorph:Wt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Li,alphaToCoverage:!!T.alphaToCoverage,map:Tt,matcap:j,envMap:at,envMapMode:at&&nt.mapping,envMapCubeUVHeight:$,aoMap:P,lightMap:gt,bumpMap:lt,normalMap:dt,displacementMap:h&&vt,emissiveMap:Vt,normalMapObjectSpace:dt&&T.normalMapType===fd,normalMapTangentSpace:dt&&T.normalMapType===fl,metalnessMap:ut,roughnessMap:R,anisotropy:M,anisotropyMap:Ot,clearcoat:K,clearcoatMap:kt,clearcoatNormalMap:oe,clearcoatRoughnessMap:bt,dispersion:ct,iridescence:pt,iridescenceMap:Dt,iridescenceThicknessMap:Lt,sheen:ot,sheenColorMap:Jt,sheenRoughnessMap:H,specularMap:X,specularColorMap:Y,specularIntensityMap:tt,transmission:Ht,transmissionMap:C,thicknessMap:W,gradientMap:B,opaque:T.transparent===!1&&T.blending===Ps&&T.alphaToCoverage===!1,alphaMap:N,alphaTest:it,alphaHash:J,combine:T.combine,mapUv:Tt&&x(T.map.channel),aoMapUv:P&&x(T.aoMap.channel),lightMapUv:gt&&x(T.lightMap.channel),bumpMapUv:lt&&x(T.bumpMap.channel),normalMapUv:dt&&x(T.normalMap.channel),displacementMapUv:vt&&x(T.displacementMap.channel),emissiveMapUv:Vt&&x(T.emissiveMap.channel),metalnessMapUv:ut&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:Ot&&x(T.anisotropyMap.channel),clearcoatMapUv:kt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:H&&x(T.sheenRoughnessMap.channel),specularMapUv:X&&x(T.specularMap.channel),specularColorMapUv:Y&&x(T.specularColorMap.channel),specularIntensityMapUv:tt&&x(T.specularIntensityMap.channel),transmissionMapUv:C&&x(T.transmissionMap.channel),thicknessMapUv:W&&x(T.thicknessMap.channel),alphaMapUv:N&&x(T.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Tt||N),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Et,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:Tt&&T.map.isVideoTexture===!0&&ge.getTransfer(T.map.colorSpace)===Ae,decodeVideoTextureEmissive:Vt&&T.emissiveMap.isVideoTexture===!0&&ge.getTransfer(T.emissiveMap.colorSpace)===Ae,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Tn,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ht&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&T.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(T){let _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(let D in T.defines)_.push(D),_.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(E(_,T),S(_,T),_.push(i.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function E(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function S(T,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){let _=g[T.type],D;if(_){let q=Zn[_];D=os.clone(q.uniforms)}else D=T.uniforms;return D}function V(T,_){let D;for(let q=0,F=u.length;q<F;q++){let U=u[q];if(U.cacheKey===_){D=U,++D.usedTimes;break}}return D===void 0&&(D=new cg(i,_,T,r),u.push(D)),D}function y(T){if(--T.usedTimes===0){let _=u.indexOf(T);u[_]=u[u.length-1],u.pop(),T.destroy()}}function A(T){c.remove(T)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:V,releaseProgram:y,releaseShaderCache:A,programs:u,dispose:w}}function ug(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,h,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function o(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||dg),n.length>1&&n.sort(h||Sh),s.length>1&&s.sort(h||Sh)}function u(){for(let d=t,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function fg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Eh,i.set(n,[a])):s>=r.length?(a=new Eh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function pg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ee};break;case"SpotLight":e={position:new L,direction:new L,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gg=0;function xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _g(i){let t=new pg,e=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new fe,a=new fe;function o(l){let u=0,d=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,S=0,v=0,V=0,y=0,A=0;l.sort(xg);for(let T=0,_=l.length;T<_;T++){let D=l[T],q=D.color,F=D.intensity,U=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=q.r*F,d+=q.g*F,h+=q.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],F);A++}else if(D.isDirectionalLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,$=e.get(D);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=z,f++}else if(D.isSpotLight){let z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(q).multiplyScalar(F),z.distance=U,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[x]=z;let nt=D.shadow;if(D.map&&(n.spotLightMap[V]=D.map,V++,nt.updateMatrices(D),D.castShadow&&y++),n.spotLightMatrix[x]=nt.matrix,D.castShadow){let $=e.get(D);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=O,v++}x++}else if(D.isRectAreaLight){let z=t.get(D);z.color.copy(q).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){let z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let nt=D.shadow,$=e.get(D);$.shadowIntensity=nt.intensity,$.shadowBias=nt.bias,$.shadowNormalBias=nt.normalBias,$.shadowRadius=nt.radius,$.shadowMapSize=nt.mapSize,$.shadowCameraNear=nt.camera.near,$.shadowCameraFar=nt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=z,g++}else if(D.isHemisphereLight){let z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==E||w.numPointShadows!==S||w.numSpotShadows!==v||w.numSpotMaps!==V||w.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+V-y,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,w.directionalLength=f,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=E,w.numPointShadows=S,w.numSpotShadows=v,w.numSpotMaps=V,w.numLightProbes=A,n.version=gg++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let S=l[p];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Th(i){let t=new _g(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function vg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Th(i),t.set(s,[o])):r>=a.length?(o=new Th(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ic=class extends jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dc=class extends jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`;function bg(i,t,e){let n=new fr,s=new yt,r=new yt,a=new Ne,o=new Ic({depthPacking:dd}),c=new Dc,l={},u=e.maxTextureSize,d={[wi]:an,[an]:wi,[Tn]:Tn},h=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:yg,fragmentShader:Mg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(y,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let T=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ge),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let F=p!==ci&&this.type===ci,U=p===ci&&this.type!==ci;for(let O=0,z=y.length;O<z;O++){let nt=y[O],$=nt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let st=$.getFrameExtents();if(s.multiply(st),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,$.mapSize.y=r.y)),$.map===null||F===!0||U===!0){let It=this.type!==ci?{minFilter:on,magFilter:on}:{};$.map!==null&&$.map.dispose(),$.map=new fn(s.x,s.y,It),$.map.texture.name=nt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let At=$.getViewportCount();for(let It=0;It<At;It++){let Et=$.getViewport(It);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),q.viewport(a),$.updateMatrices(nt,It),n=$.getFrustum(),v(A,w,$.camera,nt,this.type)}$.isPointLightShadow!==!0&&this.type===ci&&E($,w),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,_,D)};function E(y,A){let w=t.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new fn(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(A,null,w,h,x,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(A,null,w,f,x,null)}function S(y,A,w,T){let _=null,D=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)_=D;else if(_=w.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=_.uuid,F=A.uuid,U=l[q];U===void 0&&(U={},l[q]=U);let O=U[F];O===void 0&&(O=_.clone(),U[F]=O,A.addEventListener("dispose",V)),_=O}if(_.visible=A.visible,_.wireframe=A.wireframe,T===ci?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let q=i.properties.get(_);q.light=w}return _}function v(y,A,w,T,_){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===ci)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);let F=t.update(y),U=y.material;if(Array.isArray(U)){let O=F.groups;for(let z=0,nt=O.length;z<nt;z++){let $=O[z],st=U[$.materialIndex];if(st&&st.visible){let At=S(y,st,T,_);y.onBeforeShadow(i,y,A,w,F,At,$),i.renderBufferDirect(w,null,F,At,y,$),y.onAfterShadow(i,y,A,w,F,At,$)}}}else if(U.visible){let O=S(y,U,T,_);y.onBeforeShadow(i,y,A,w,F,O,null),i.renderBufferDirect(w,null,F,O,y,null),y.onAfterShadow(i,y,A,w,F,O,null)}}let q=y.children;for(let F=0,U=q.length;F<U;F++)v(q[F],A,w,T,_)}function V(y){y.target.removeEventListener("dispose",V);for(let w in l){let T=l[w],_=y.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}var Sg={[Fo]:zo,[Bo]:Ho,[ko]:Go,[Us]:Vo,[zo]:Fo,[Ho]:Bo,[Go]:ko,[Vo]:Us};function Eg(i,t){function e(){let C=!1,W=new Ne,B=null,N=new Ne(0,0,0,0);return{setMask:function(it){B!==it&&!C&&(i.colorMask(it,it,it,it),B=it)},setLocked:function(it){C=it},setClear:function(it,J,ht,_t,xt){xt===!0&&(it*=_t,J*=_t,ht*=_t),W.set(it,J,ht,_t),N.equals(W)===!1&&(i.clearColor(it,J,ht,_t),N.copy(W))},reset:function(){C=!1,B=null,N.set(-1,0,0,0)}}}function n(){let C=!1,W=!1,B=null,N=null,it=null;return{setReversed:function(J){if(W!==J){let ht=t.get("EXT_clip_control");W?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);let _t=it;it=null,this.setClear(_t)}W=J},getReversed:function(){return W},setTest:function(J){J?ft(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(J){B!==J&&!C&&(i.depthMask(J),B=J)},setFunc:function(J){if(W&&(J=Sg[J]),N!==J){switch(J){case Fo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}N=J}},setLocked:function(J){C=J},setClear:function(J){it!==J&&(W&&(J=1-J),i.clearDepth(J),it=J)},reset:function(){C=!1,B=null,N=null,it=null,W=!1}}}function s(){let C=!1,W=null,B=null,N=null,it=null,J=null,ht=null,_t=null,xt=null;return{setTest:function(Ct){C||(Ct?ft(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(Ct){W!==Ct&&!C&&(i.stencilMask(Ct),W=Ct)},setFunc:function(Ct,Xt,Pt){(B!==Ct||N!==Xt||it!==Pt)&&(i.stencilFunc(Ct,Xt,Pt),B=Ct,N=Xt,it=Pt)},setOp:function(Ct,Xt,Pt){(J!==Ct||ht!==Xt||_t!==Pt)&&(i.stencilOp(Ct,Xt,Pt),J=Ct,ht=Xt,_t=Pt)},setLocked:function(Ct){C=Ct},setClear:function(Ct){xt!==Ct&&(i.clearStencil(Ct),xt=Ct)},reset:function(){C=!1,W=null,B=null,N=null,it=null,J=null,ht=null,_t=null,xt=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,S=null,v=null,V=null,y=null,A=new ee(0,0,0),w=0,T=!1,_=null,D=null,q=null,F=null,U=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,nt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec($)[1]),z=nt>=1):$.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=nt>=2);let st=null,At={},It=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),qt=new Ne().fromArray(It),rt=new Ne().fromArray(Et);function mt(C,W,B,N){let it=new Uint8Array(4),J=i.createTexture();i.bindTexture(C,J),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<B;ht++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(W,0,i.RGBA,1,1,N,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(W+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return J}let Ft={};Ft[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(Us),lt(!1),dt(Al),ft(i.CULL_FACE),P(Ge);function ft(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Nt(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Wt(C,W){return d[C]!==W?(i.bindFramebuffer(C,W),d[C]=W,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=W),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=W),!0):!1}function Mt(C,W){let B=f,N=!1;if(C){B=h.get(W),B===void 0&&(B=[],h.set(W,B));let it=C.textures;if(B.length!==it.length||B[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ht=it.length;J<ht;J++)B[J]=i.COLOR_ATTACHMENT0+J;B.length=it.length,N=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,N=!0);N&&i.drawBuffers(B)}function Tt(C){return g!==C?(i.useProgram(C),g=C,!0):!1}let j={[In]:i.FUNC_ADD,[Hu]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};j[Wu]=i.MIN,j[Xu]=i.MAX;let at={[Gs]:i.ZERO,[qu]:i.ONE,[Yu]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[za]:i.DST_COLOR,[Fa]:i.DST_ALPHA,[Zu]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[$u]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function P(C,W,B,N,it,J,ht,_t,xt,Ct){if(C===Ge){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),C!==sl){if(C!==m||Ct!==T){if((p!==In||v!==In)&&(i.blendEquation(i.FUNC_ADD),p=In,v=In),Ct)switch(C){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ua:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ua:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,S=null,V=null,y=null,A.set(0,0,0),w=0,m=C,T=Ct}return}it=it||W,J=J||B,ht=ht||N,(W!==p||it!==v)&&(i.blendEquationSeparate(j[W],j[it]),p=W,v=it),(B!==E||N!==S||J!==V||ht!==y)&&(i.blendFuncSeparate(at[B],at[N],at[J],at[ht]),E=B,S=N,V=J,y=ht),(_t.equals(A)===!1||xt!==w)&&(i.blendColor(_t.r,_t.g,_t.b,xt),A.copy(_t),w=xt),m=C,T=!1}function gt(C,W){C.side===Tn?Nt(i.CULL_FACE):ft(i.CULL_FACE);let B=C.side===an;W&&(B=!B),lt(B),C.blending===Ps&&C.transparent===!1?P(Ge):P(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let N=C.stencilWrite;o.setTest(N),N&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Vt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(C){_!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),_=C)}function dt(C){C!==ku?(ft(i.CULL_FACE),C!==D&&(C===Al?i.cullFace(i.BACK):C===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),D=C}function vt(C){C!==q&&(z&&i.lineWidth(C),q=C)}function Vt(C,W,B){C?(ft(i.POLYGON_OFFSET_FILL),(F!==W||U!==B)&&(i.polygonOffset(W,B),F=W,U=B)):Nt(i.POLYGON_OFFSET_FILL)}function ut(C){C?ft(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function R(C){C===void 0&&(C=i.TEXTURE0+O-1),st!==C&&(i.activeTexture(C),st=C)}function M(C,W,B){B===void 0&&(st===null?B=i.TEXTURE0+O-1:B=st);let N=At[B];N===void 0&&(N={type:void 0,texture:void 0},At[B]=N),(N.type!==C||N.texture!==W)&&(st!==B&&(i.activeTexture(B),st=B),i.bindTexture(C,W||Ft[C]),N.type=C,N.texture=W)}function K(){let C=At[st];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Jt(C){qt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),qt.copy(C))}function H(C){rt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),rt.copy(C))}function X(C,W){let B=l.get(W);B===void 0&&(B=new WeakMap,l.set(W,B));let N=B.get(C);N===void 0&&(N=i.getUniformBlockIndex(W,C.name),B.set(C,N))}function Y(C,W){let N=l.get(W).get(C);c.get(W)!==N&&(i.uniformBlockBinding(W,N,C.__bindingPointIndex),c.set(W,N))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,At={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,S=null,v=null,V=null,y=null,A=new ee(0,0,0),w=0,T=!1,_=null,D=null,q=null,F=null,U=null,qt.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:Nt,bindFramebuffer:Wt,drawBuffers:Mt,useProgram:Tt,setBlending:P,setMaterial:gt,setFlipSided:lt,setCullFace:dt,setLineWidth:vt,setPolygonOffset:Vt,setScissorTest:ut,activeTexture:R,bindTexture:M,unbindTexture:K,compressedTexImage2D:ct,compressedTexImage3D:pt,texImage2D:Dt,texImage3D:Lt,updateUBOMapping:X,uniformBlockBinding:Y,texStorage2D:oe,texStorage3D:bt,texSubImage2D:ot,texSubImage3D:Ht,compressedTexSubImage2D:Ot,compressedTexSubImage3D:kt,scissor:Jt,viewport:H,reset:tt}}function wh(i,t,e,n){let s=Tg(n);switch(e){case qh:return i*t;case Zh:return i*t;case $h:return i*t*2;case ll:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case Yh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:case Jo:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case Ko:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ha:case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kh:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tg(i){switch(i){case An:case Gh:return{byteLength:1,components:1};case hr:case Wh:case ei:return{byteLength:2,components:1};case ol:case cl:return{byteLength:2,components:4};case Ji:case al:case Jn:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function wg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):pa("canvas")}function x(R,M,K){let ct=1,pt=ut(R);if((pt.width>K||pt.height>K)&&(ct=K/Math.max(pt.width,pt.height)),ct<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ot=Math.floor(ct*pt.width),Ht=Math.floor(ct*pt.height);d===void 0&&(d=g(ot,Ht));let Ot=M?g(ot,Ht):d;return Ot.width=ot,Ot.height=Ht,Ot.getContext("2d").drawImage(R,0,0,ot,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ot+"x"+Ht+")."),Ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,M,K,ct,pt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ot=M;if(M===i.RED&&(K===i.FLOAT&&(ot=i.R32F),K===i.HALF_FLOAT&&(ot=i.R16F),K===i.UNSIGNED_BYTE&&(ot=i.R8)),M===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.R8UI),K===i.UNSIGNED_SHORT&&(ot=i.R16UI),K===i.UNSIGNED_INT&&(ot=i.R32UI),K===i.BYTE&&(ot=i.R8I),K===i.SHORT&&(ot=i.R16I),K===i.INT&&(ot=i.R32I)),M===i.RG&&(K===i.FLOAT&&(ot=i.RG32F),K===i.HALF_FLOAT&&(ot=i.RG16F),K===i.UNSIGNED_BYTE&&(ot=i.RG8)),M===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RG8UI),K===i.UNSIGNED_SHORT&&(ot=i.RG16UI),K===i.UNSIGNED_INT&&(ot=i.RG32UI),K===i.BYTE&&(ot=i.RG8I),K===i.SHORT&&(ot=i.RG16I),K===i.INT&&(ot=i.RG32I)),M===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),K===i.UNSIGNED_INT&&(ot=i.RGB32UI),K===i.BYTE&&(ot=i.RGB8I),K===i.SHORT&&(ot=i.RGB16I),K===i.INT&&(ot=i.RGB32I)),M===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),K===i.UNSIGNED_INT&&(ot=i.RGBA32UI),K===i.BYTE&&(ot=i.RGBA8I),K===i.SHORT&&(ot=i.RGBA16I),K===i.INT&&(ot=i.RGBA32I)),M===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),M===i.RGBA){let Ht=pt?ka:ge.getTransfer(ct);K===i.FLOAT&&(ot=i.RGBA32F),K===i.HALF_FLOAT&&(ot=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ot=Ht===Ae?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(R,M){let K;return R?M===null||M===Ji||M===Ai?K=i.DEPTH24_STENCIL8:M===Jn?K=i.DEPTH32F_STENCIL8:M===hr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ji||M===Ai?K=i.DEPTH_COMPONENT24:M===Jn?K=i.DEPTH_COMPONENT32F:M===hr&&(K=i.DEPTH_COMPONENT16),K}function V(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==$n?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function y(R){let M=R.target;M.removeEventListener("dispose",y),w(M),M.isVideoTexture&&u.delete(M)}function A(R){let M=R.target;M.removeEventListener("dispose",A),_(M)}function w(R){let M=n.get(R);if(M.__webglInit===void 0)return;let K=R.source,ct=h.get(K);if(ct){let pt=ct[M.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&T(R),Object.keys(ct).length===0&&h.delete(K)}n.remove(R)}function T(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let K=R.source,ct=h.get(K);delete ct[M.__cacheKey],a.memory.textures--}function _(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(M.__webglFramebuffer[ct]))for(let pt=0;pt<M.__webglFramebuffer[ct].length;pt++)i.deleteFramebuffer(M.__webglFramebuffer[ct][pt]);else i.deleteFramebuffer(M.__webglFramebuffer[ct]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ct])}else{if(Array.isArray(M.__webglFramebuffer))for(let ct=0;ct<M.__webglFramebuffer.length;ct++)i.deleteFramebuffer(M.__webglFramebuffer[ct]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ct=0;ct<M.__webglColorRenderbuffer.length;ct++)M.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ct]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let K=R.textures;for(let ct=0,pt=K.length;ct<pt;ct++){let ot=n.get(K[ct]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(K[ct])}n.remove(R)}let D=0;function q(){D=0}function F(){let R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function U(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function O(R,M){let K=n.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,R,M);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+M)}function z(R,M){let K=n.get(R);if(R.version>0&&K.__version!==R.version){rt(K,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+M)}function nt(R,M){let K=n.get(R);if(R.version>0&&K.__version!==R.version){rt(K,R,M);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+M)}function $(R,M){let K=n.get(R);if(R.version>0&&K.__version!==R.version){mt(K,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+M)}let st={[ui]:i.REPEAT,[Zi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},At={[on]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},It={[pd]:i.NEVER,[yd]:i.ALWAYS,[md]:i.LESS,[jh]:i.LEQUAL,[gd]:i.EQUAL,[vd]:i.GEQUAL,[xd]:i.GREATER,[_d]:i.NOTEQUAL};function Et(R,M){if(M.type===Jn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===$n||M.magFilter===no||M.magFilter===Dr||M.magFilter===$i||M.minFilter===$n||M.minFilter===no||M.minFilter===Dr||M.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,st[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,st[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,st[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,At[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,At[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,It[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Dr&&M.minFilter!==$i||M.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qt(R,M){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",y));let ct=M.source,pt=h.get(ct);pt===void 0&&(pt={},h.set(ct,pt));let ot=U(M);if(ot!==R.__cacheKey){pt[ot]===void 0&&(pt[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),pt[ot].usedTimes++;let Ht=pt[R.__cacheKey];Ht!==void 0&&(pt[R.__cacheKey].usedTimes--,Ht.usedTimes===0&&T(M)),R.__cacheKey=ot,R.__webglTexture=pt[ot].texture}return K}function rt(R,M,K){let ct=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ct=i.TEXTURE_3D);let pt=qt(R,M),ot=M.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+K);let Ht=n.get(ot);if(ot.version!==Ht.__version||pt===!0){e.activeTexture(i.TEXTURE0+K);let Ot=ge.getPrimaries(ge.workingColorSpace),kt=M.colorSpace===Ei?null:ge.getPrimaries(M.colorSpace),oe=M.colorSpace===Ei||Ot===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let bt=x(M.image,!1,s.maxTextureSize);bt=Vt(M,bt);let Dt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),Jt=S(M.internalFormat,Dt,Lt,M.colorSpace,M.isVideoTexture);Et(ct,M);let H,X=M.mipmaps,Y=M.isVideoTexture!==!0,tt=Ht.__version===void 0||pt===!0,C=ot.dataReady,W=V(M,bt);if(M.isDepthTexture)Jt=v(M.format===Ri,M.type),tt&&(Y?e.texStorage2D(i.TEXTURE_2D,1,Jt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,Jt,bt.width,bt.height,0,Dt,Lt,null));else if(M.isDataTexture)if(X.length>0){Y&&tt&&e.texStorage2D(i.TEXTURE_2D,W,Jt,X[0].width,X[0].height);for(let B=0,N=X.length;B<N;B++)H=X[B],Y?C&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,H.width,H.height,Dt,Lt,H.data):e.texImage2D(i.TEXTURE_2D,B,Jt,H.width,H.height,0,Dt,Lt,H.data);M.generateMipmaps=!1}else Y?(tt&&e.texStorage2D(i.TEXTURE_2D,W,Jt,bt.width,bt.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Dt,Lt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,bt.width,bt.height,0,Dt,Lt,bt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Y&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,Jt,X[0].width,X[0].height,bt.depth);for(let B=0,N=X.length;B<N;B++)if(H=X[B],M.format!==wn)if(Dt!==null)if(Y){if(C)if(M.layerUpdates.size>0){let it=wh(H.width,H.height,M.format,M.type);for(let J of M.layerUpdates){let ht=H.data.subarray(J*it/H.data.BYTES_PER_ELEMENT,(J+1)*it/H.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,J,H.width,H.height,1,Dt,ht)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,H.width,H.height,bt.depth,Dt,H.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Jt,H.width,H.height,bt.depth,0,H.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,H.width,H.height,bt.depth,Dt,Lt,H.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,Jt,H.width,H.height,bt.depth,0,Dt,Lt,H.data)}else{Y&&tt&&e.texStorage2D(i.TEXTURE_2D,W,Jt,X[0].width,X[0].height);for(let B=0,N=X.length;B<N;B++)H=X[B],M.format!==wn?Dt!==null?Y?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,H.width,H.height,Dt,H.data):e.compressedTexImage2D(i.TEXTURE_2D,B,Jt,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?C&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,H.width,H.height,Dt,Lt,H.data):e.texImage2D(i.TEXTURE_2D,B,Jt,H.width,H.height,0,Dt,Lt,H.data)}else if(M.isDataArrayTexture)if(Y){if(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,W,Jt,bt.width,bt.height,bt.depth),C)if(M.layerUpdates.size>0){let B=wh(bt.width,bt.height,M.format,M.type);for(let N of M.layerUpdates){let it=bt.data.subarray(N*B/bt.data.BYTES_PER_ELEMENT,(N+1)*B/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,N,bt.width,bt.height,1,Dt,Lt,it)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Dt,Lt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,bt.width,bt.height,bt.depth,0,Dt,Lt,bt.data);else if(M.isData3DTexture)Y?(tt&&e.texStorage3D(i.TEXTURE_3D,W,Jt,bt.width,bt.height,bt.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Dt,Lt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,bt.width,bt.height,bt.depth,0,Dt,Lt,bt.data);else if(M.isFramebufferTexture){if(tt)if(Y)e.texStorage2D(i.TEXTURE_2D,W,Jt,bt.width,bt.height);else{let B=bt.width,N=bt.height;for(let it=0;it<W;it++)e.texImage2D(i.TEXTURE_2D,it,Jt,B,N,0,Dt,Lt,null),B>>=1,N>>=1}}else if(X.length>0){if(Y&&tt){let B=ut(X[0]);e.texStorage2D(i.TEXTURE_2D,W,Jt,B.width,B.height)}for(let B=0,N=X.length;B<N;B++)H=X[B],Y?C&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Dt,Lt,H):e.texImage2D(i.TEXTURE_2D,B,Jt,Dt,Lt,H);M.generateMipmaps=!1}else if(Y){if(tt){let B=ut(bt);e.texStorage2D(i.TEXTURE_2D,W,Jt,B.width,B.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Lt,bt)}else e.texImage2D(i.TEXTURE_2D,0,Jt,Dt,Lt,bt);m(M)&&p(ct),Ht.__version=ot.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function mt(R,M,K){if(M.image.length!==6)return;let ct=qt(R,M),pt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+K);let ot=n.get(pt);if(pt.version!==ot.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);let Ht=ge.getPrimaries(ge.workingColorSpace),Ot=M.colorSpace===Ei?null:ge.getPrimaries(M.colorSpace),kt=M.colorSpace===Ei||Ht===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let oe=M.isCompressedTexture||M.image[0].isCompressedTexture,bt=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let N=0;N<6;N++)!oe&&!bt?Dt[N]=x(M.image[N],!0,s.maxCubemapSize):Dt[N]=bt?M.image[N].image:M.image[N],Dt[N]=Vt(M,Dt[N]);let Lt=Dt[0],Jt=r.convert(M.format,M.colorSpace),H=r.convert(M.type),X=S(M.internalFormat,Jt,H,M.colorSpace),Y=M.isVideoTexture!==!0,tt=ot.__version===void 0||ct===!0,C=pt.dataReady,W=V(M,Lt);Et(i.TEXTURE_CUBE_MAP,M);let B;if(oe){Y&&tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,W,X,Lt.width,Lt.height);for(let N=0;N<6;N++){B=Dt[N].mipmaps;for(let it=0;it<B.length;it++){let J=B[it];M.format!==wn?Jt!==null?Y?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,J.width,J.height,Jt,J.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,X,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,0,0,J.width,J.height,Jt,H,J.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it,X,J.width,J.height,0,Jt,H,J.data)}}}else{if(B=M.mipmaps,Y&&tt){B.length>0&&W++;let N=ut(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,W,X,N.width,N.height)}for(let N=0;N<6;N++)if(bt){Y?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Dt[N].width,Dt[N].height,Jt,H,Dt[N].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,X,Dt[N].width,Dt[N].height,0,Jt,H,Dt[N].data);for(let it=0;it<B.length;it++){let ht=B[it].image[N].image;Y?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,ht.width,ht.height,Jt,H,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,X,ht.width,ht.height,0,Jt,H,ht.data)}}else{Y?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Jt,H,Dt[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,X,Jt,H,Dt[N]);for(let it=0;it<B.length;it++){let J=B[it];Y?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,0,0,Jt,H,J.image[N]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+N,it+1,X,Jt,H,J.image[N])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),ot.__version=pt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ft(R,M,K,ct,pt,ot){let Ht=r.convert(K.format,K.colorSpace),Ot=r.convert(K.type),kt=S(K.internalFormat,Ht,Ot,K.colorSpace),oe=n.get(M),bt=n.get(K);if(bt.__renderTarget=M,!oe.__hasExternalTextures){let Dt=Math.max(1,M.width>>ot),Lt=Math.max(1,M.height>>ot);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,ot,kt,Dt,Lt,M.depth,0,Ht,Ot,null):e.texImage2D(pt,ot,kt,Dt,Lt,0,Ht,Ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),dt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,pt,bt.__webglTexture,0,lt(M)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,pt,bt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(R,M,K){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let ct=M.depthTexture,pt=ct&&ct.isDepthTexture?ct.type:null,ot=v(M.stencilBuffer,pt),Ht=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=lt(M);dt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,ot,M.width,M.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ot,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,R)}else{let ct=M.textures;for(let pt=0;pt<ct.length;pt++){let ot=ct[pt],Ht=r.convert(ot.format,ot.colorSpace),Ot=r.convert(ot.type),kt=S(ot.internalFormat,Ht,Ot,ot.colorSpace),oe=lt(M);K&&dt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,kt,M.width,M.height):dt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,kt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,kt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=n.get(M.depthTexture);ct.__renderTarget=M,(!ct.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);let pt=ct.__webglTexture,ot=lt(M);if(M.depthTexture.format===Is)dt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(M.depthTexture.format===Ri)dt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function Wt(R){let M=n.get(R),K=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let ct=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ct){let pt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ct.removeEventListener("dispose",pt)};ct.addEventListener("dispose",pt),M.__depthDisposeCallback=pt}M.__boundDepthTexture=ct}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,R)}else if(K){M.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ct]),M.__webglDepthbuffer[ct]===void 0)M.__webglDepthbuffer[ct]=i.createRenderbuffer(),ft(M.__webglDepthbuffer[ct],R,!1);else{let pt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ft(M.__webglDepthbuffer,R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(R,M,K){let ct=n.get(R);M!==void 0&&Ft(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Wt(R)}function Tt(R){let M=R.texture,K=n.get(R),ct=n.get(M);R.addEventListener("dispose",A);let pt=R.textures,ot=R.isWebGLCubeRenderTarget===!0,Ht=pt.length>1;if(Ht||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=M.version,a.memory.textures++),ot){K.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Ot]=[];for(let kt=0;kt<M.mipmaps.length;kt++)K.__webglFramebuffer[Ot][kt]=i.createFramebuffer()}else K.__webglFramebuffer[Ot]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ot=0;Ot<M.mipmaps.length;Ot++)K.__webglFramebuffer[Ot]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let Ot=0,kt=pt.length;Ot<kt;Ot++){let oe=n.get(pt[Ot]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&dt(R)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ot=0;Ot<pt.length;Ot++){let kt=pt[Ot];K.__webglColorRenderbuffer[Ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ot]);let oe=r.convert(kt.format,kt.colorSpace),bt=r.convert(kt.type),Dt=S(kt.internalFormat,oe,bt,kt.colorSpace,R.isXRRenderTarget===!0),Lt=lt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(K.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Et(i.TEXTURE_CUBE_MAP,M);for(let Ot=0;Ot<6;Ot++)if(M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Ft(K.__webglFramebuffer[Ot][kt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,kt);else Ft(K.__webglFramebuffer[Ot],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Ot=0,kt=pt.length;Ot<kt;Ot++){let oe=pt[Ot],bt=n.get(oe);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Et(i.TEXTURE_2D,oe),Ft(K.__webglFramebuffer,R,oe,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,0),m(oe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Ot=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,ct.__webglTexture),Et(Ot,M),M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Ft(K.__webglFramebuffer[kt],R,M,i.COLOR_ATTACHMENT0,Ot,kt);else Ft(K.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,Ot,0);m(M)&&p(Ot),e.unbindTexture()}R.depthBuffer&&Wt(R)}function j(R){let M=R.textures;for(let K=0,ct=M.length;K<ct;K++){let pt=M[K];if(m(pt)){let ot=E(R),Ht=n.get(pt).__webglTexture;e.bindTexture(ot,Ht),p(ot),e.unbindTexture()}}}let at=[],P=[];function gt(R){if(R.samples>0){if(dt(R)===!1){let M=R.textures,K=R.width,ct=R.height,pt=i.COLOR_BUFFER_BIT,ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(R),Ot=M.length>1;if(Ot)for(let kt=0;kt<M.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let kt=0;kt<M.length;kt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),Ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let oe=n.get(M[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,K,ct,0,0,K,ct,pt,i.NEAREST),c===!0&&(at.length=0,P.length=0,at.push(i.COLOR_ATTACHMENT0+kt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(ot),P.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ot)for(let kt=0;kt<M.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let oe=n.get(M[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function lt(R){return Math.min(s.maxSamples,R.samples)}function dt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(R){let M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Vt(R,M){let K=R.colorSpace,ct=R.format,pt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==Li&&K!==Ei&&(ge.getTransfer(K)===Ae?(ct!==wn||pt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=q,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=nt,this.setTextureCube=$,this.rebindTextures=Mt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=dt}function Ag(i,t){function e(n,s=Ei){let r,a=ge.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===wn)return i.RGBA;if(n===Zh)return i.LUMINANCE;if(n===$h)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===aa||n===oa||n===ca||n===la)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===$o||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===jo)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===lc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===pc||n===mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===gc||n===xc||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Lc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},_n=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new vn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:Cg,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends di{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=new Uc,m=e.getContextAttributes(),p=null,E=null,S=[],v=[],V=new yt,y=null,A=new dn;A.viewport=new Ne;let w=new dn;w.viewport=new Ne;let T=[A,w],_=new Lc,D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let mt=S[rt];return mt===void 0&&(mt=new ar,S[rt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(rt){let mt=S[rt];return mt===void 0&&(mt=new ar,S[rt]=mt),mt.getGripSpace()},this.getHand=function(rt){let mt=S[rt];return mt===void 0&&(mt=new ar,S[rt]=mt),mt.getHandSpace()};function F(rt){let mt=v.indexOf(rt.inputSource);if(mt===-1)return;let Ft=S[mt];Ft!==void 0&&(Ft.update(rt.inputSource,rt.frame,l||a),Ft.dispatchEvent({type:rt.type,data:rt.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let rt=0;rt<S.length;rt++){let mt=v[rt];mt!==null&&(v[rt]=null,S[rt].disconnect(mt))}D=null,q=null,x.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){o=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new fn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let mt=null,Ft=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?Ri:Is,Ft=m.stencil?Ai:Ji);let Nt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(Nt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new fn(h.textureWidth,h.textureHeight,{format:wn,type:An,depthTexture:new Pi(h.textureWidth,h.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(rt){for(let mt=0;mt<rt.removed.length;mt++){let Ft=rt.removed[mt],ft=v.indexOf(Ft);ft>=0&&(v[ft]=null,S[ft].disconnect(Ft))}for(let mt=0;mt<rt.added.length;mt++){let Ft=rt.added[mt],ft=v.indexOf(Ft);if(ft===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=v.length){v.push(Ft),ft=Wt;break}else if(v[Wt]===null){v[Wt]=Ft,ft=Wt;break}if(ft===-1)break}let Nt=S[ft];Nt&&Nt.connect(Ft)}}let z=new L,nt=new L;function $(rt,mt,Ft){z.setFromMatrixPosition(mt.matrixWorld),nt.setFromMatrixPosition(Ft.matrixWorld);let ft=z.distanceTo(nt),Nt=mt.projectionMatrix.elements,Wt=Ft.projectionMatrix.elements,Mt=Nt[14]/(Nt[10]-1),Tt=Nt[14]/(Nt[10]+1),j=(Nt[9]+1)/Nt[5],at=(Nt[9]-1)/Nt[5],P=(Nt[8]-1)/Nt[0],gt=(Wt[8]+1)/Wt[0],lt=Mt*P,dt=Mt*gt,vt=ft/(-P+gt),Vt=vt*-P;if(mt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Vt),rt.translateZ(vt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Nt[10]===-1)rt.projectionMatrix.copy(mt.projectionMatrix),rt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let ut=Mt+vt,R=Tt+vt,M=lt-Vt,K=dt+(ft-Vt),ct=j*Tt/R*ut,pt=at*Tt/R*ut;rt.projectionMatrix.makePerspective(M,K,ct,pt,ut,R),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function st(rt,mt){mt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(mt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let mt=rt.near,Ft=rt.far;x.texture!==null&&(x.depthNear>0&&(mt=x.depthNear),x.depthFar>0&&(Ft=x.depthFar)),_.near=w.near=A.near=mt,_.far=w.far=A.far=Ft,(D!==_.near||q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,q=_.far),A.layers.mask=rt.layers.mask|2,w.layers.mask=rt.layers.mask|4,_.layers.mask=A.layers.mask|w.layers.mask;let ft=rt.parent,Nt=_.cameras;st(_,ft);for(let Wt=0;Wt<Nt.length;Wt++)st(Nt[Wt],ft);Nt.length===2?$(_,A,w):_.projectionMatrix.copy(A.projectionMatrix),At(rt,_,ft)};function At(rt,mt,Ft){Ft===null?rt.matrix.copy(mt.matrixWorld):(rt.matrix.copy(Ft.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(mt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(mt.projectionMatrix),rt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=ur*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(rt){c=rt,h!==null&&(h.fixedFoveation=rt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let It=null;function Et(rt,mt){if(u=mt.getViewerPose(l||a),g=mt,u!==null){let Ft=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ft=!1;Ft.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let Wt=0;Wt<Ft.length;Wt++){let Mt=Ft[Wt],Tt=null;if(f!==null)Tt=f.getViewport(Mt);else{let at=d.getViewSubImage(h,Mt);Tt=at.viewport,Wt===0&&(t.setRenderTargetTextures(E,at.colorTexture,h.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(E))}let j=T[Wt];j===void 0&&(j=new dn,j.layers.enable(Wt),j.viewport=new Ne,T[Wt]=j),j.matrix.fromArray(Mt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Mt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Wt===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push(j)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Wt=d.getDepthInformation(Ft[0]);Wt&&Wt.isValid&&Wt.texture&&x.init(t,Wt,s.renderState)}}for(let Ft=0;Ft<S.length;Ft++){let ft=v[Ft],Nt=S[Ft];ft!==null&&Nt!==void 0&&Nt.update(ft,mt,l||a)}It&&It(rt,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let qt=new iu;qt.setAnimationLoop(Et),this.setAnimationLoop=function(rt){It=rt},this.dispose=function(){}}},Wi=new Kn,Ig=new fe;function Dg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,Wi.copy(v),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Wi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let v=S.program;n.uniformBlockBinding(E,v)}function l(E,S){let v=s[E.id];v===void 0&&(g(E),v=u(E),s[E.id]=v,E.addEventListener("dispose",m));let V=S.program;n.updateUBOMapping(E,V);let y=t.render.frame;r[E.id]!==y&&(h(E),r[E.id]=y)}function u(E){let S=d();E.__bindingPointIndex=S;let v=i.createBuffer(),V=E.__size,y=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,V,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let S=s[E.id],v=E.uniforms,V=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,A=v.length;y<A;y++){let w=Array.isArray(v[y])?v[y]:[v[y]];for(let T=0,_=w.length;T<_;T++){let D=w[T];if(f(D,y,T,V)===!0){let q=D.__offset,F=Array.isArray(D.value)?D.value:[D.value],U=0;for(let O=0;O<F.length;O++){let z=F[O],nt=x(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,q+U,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,U),U+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,S,v,V){let y=E.value,A=S+"_"+v;if(V[A]===void 0)return typeof y=="number"||typeof y=="boolean"?V[A]=y:V[A]=y.clone(),!0;{let w=V[A];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return V[A]=y,!0}else if(w.equals(y)===!1)return w.copy(y),!0}return!1}function g(E){let S=E.uniforms,v=0,V=16;for(let A=0,w=S.length;A<w;A++){let T=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,D=T.length;_<D;_++){let q=T[_],F=Array.isArray(q.value)?q.value:[q.value];for(let U=0,O=F.length;U<O;U++){let z=F[U],nt=x(z),$=v%V,st=$%nt.boundary,At=$+st;v+=st,At!==0&&V-At<nt.storage&&(v+=V-At),q.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=nt.storage}}}let y=v%V;return y>0&&(v+=V-y),E.__size=v,E.__cache={},this}function x(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){let S=E.target;S.removeEventListener("dispose",m);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ma=class{constructor(t={}){let{canvas:e=Fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Ti,this.toneMappingExposure=1;let v=this,V=!1,y=0,A=0,w=null,T=-1,_=null,D=new Ne,q=new Ne,F=null,U=new ee(0),O=0,z=e.width,nt=e.height,$=1,st=null,At=null,It=new Ne(0,0,z,nt),Et=new Ne(0,0,z,nt),qt=!1,rt=new fr,mt=!1,Ft=!1,ft=new fe,Nt=new fe,Wt=new L,Mt=new Ne,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function at(){return w===null?$:1}let P=n;function gt(b,G){return e.getContext(b,G)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",N,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",J,!1),P===null){let G="webgl2";if(P=gt(G,b),P===null)throw gt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let lt,dt,vt,Vt,ut,R,M,K,ct,pt,ot,Ht,Ot,kt,oe,bt,Dt,Lt,Jt,H,X,Y,tt,C;function W(){lt=new $m(P),lt.init(),Y=new Ag(P,lt),dt=new Gm(P,lt,t,Y),vt=new Eg(P,lt),dt.reverseDepthBuffer&&h&&vt.buffers.depth.setReversed(!0),Vt=new jm(P),ut=new ug,R=new wg(P,lt,vt,ut,dt,Y,Vt),M=new Xm(v),K=new Zm(v),ct=new rf(P),tt=new Vm(P,ct),pt=new Jm(P,ct,Vt,tt),ot=new t0(P,pt,ct,Vt),Jt=new Qm(P,dt,R),bt=new Wm(ut),Ht=new hg(v,M,K,lt,dt,tt,bt),Ot=new Dg(v,ut),kt=new fg,oe=new vg(lt),Lt=new km(v,M,K,vt,ot,f,c),Dt=new bg(v,ot,dt),C=new Lg(P,Vt,dt,vt),H=new Hm(P,lt,Vt),X=new Km(P,lt,Vt),Vt.programs=Ht.programs,v.capabilities=dt,v.extensions=lt,v.properties=ut,v.renderLists=kt,v.shadowMap=Dt,v.state=vt,v.info=Vt}W();let B=new Nc(v,P);this.xr=B,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=lt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=lt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(z,nt,!1))},this.getSize=function(b){return b.set(z,nt)},this.setSize=function(b,G,Q=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,nt=G,e.width=Math.floor(b*$),e.height=Math.floor(G*$),Q===!0&&(e.style.width=b+"px",e.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(z*$,nt*$).floor()},this.setDrawingBufferSize=function(b,G,Q){z=b,nt=G,$=Q,e.width=Math.floor(b*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(It)},this.setViewport=function(b,G,Q,et){b.isVector4?It.set(b.x,b.y,b.z,b.w):It.set(b,G,Q,et),vt.viewport(D.copy(It).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(Et)},this.setScissor=function(b,G,Q,et){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,G,Q,et),vt.scissor(q.copy(Et).multiplyScalar($).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){vt.setScissorTest(qt=b)},this.setOpaqueSort=function(b){st=b},this.setTransparentSort=function(b){At=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,G=!0,Q=!0){let et=0;if(b){let Z=!1;if(w!==null){let Rt=w.texture.format;Z=Rt===dl||Rt===ul||Rt===hl}if(Z){let Rt=w.texture.type,Bt=Rt===An||Rt===Ji||Rt===hr||Rt===Ai||Rt===ol||Rt===cl,$t=Lt.getClearColor(),Qt=Lt.getClearAlpha(),ae=$t.r,ie=$t.g,Kt=$t.b;Bt?(g[0]=ae,g[1]=ie,g[2]=Kt,g[3]=Qt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=ae,x[1]=ie,x[2]=Kt,x[3]=Qt,P.clearBufferiv(P.COLOR,0,x))}else et|=P.COLOR_BUFFER_BIT}G&&(et|=P.DEPTH_BUFFER_BIT),Q&&(et|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",N,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",J,!1),kt.dispose(),oe.dispose(),ut.dispose(),M.dispose(),K.dispose(),ot.dispose(),tt.dispose(),C.dispose(),Ht.dispose(),B.dispose(),B.removeEventListener("sessionstart",ue),B.removeEventListener("sessionend",Zt),_e.stop()};function N(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let b=Vt.autoReset,G=Dt.enabled,Q=Dt.autoUpdate,et=Dt.needsUpdate,Z=Dt.type;W(),Vt.autoReset=b,Dt.enabled=G,Dt.autoUpdate=Q,Dt.needsUpdate=et,Dt.type=Z}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){let G=b.target;G.removeEventListener("dispose",ht),_t(G)}function _t(b){xt(b),ut.remove(b)}function xt(b){let G=ut.get(b).programs;G!==void 0&&(G.forEach(function(Q){Ht.releaseProgram(Q)}),b.isShaderMaterial&&Ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,Q,et,Z,Rt){G===null&&(G=Tt);let Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,$t=re(b,G,Q,et,Z);vt.setMaterial(et,Bt);let Qt=Q.index,ae=1;if(et.wireframe===!0){if(Qt=pt.getWireframeAttribute(Q),Qt===void 0)return;ae=2}let ie=Q.drawRange,Kt=Q.attributes.position,me=ie.start*ae,Pe=(ie.start+ie.count)*ae;Rt!==null&&(me=Math.max(me,Rt.start*ae),Pe=Math.min(Pe,(Rt.start+Rt.count)*ae)),Qt!==null?(me=Math.max(me,0),Pe=Math.min(Pe,Qt.count)):Kt!=null&&(me=Math.max(me,0),Pe=Math.min(Pe,Kt.count));let Te=Pe-me;if(Te<0||Te===1/0)return;tt.setup(Z,et,$t,Q,Qt);let nn,I=H;if(Qt!==null&&(nn=ct.get(Qt),I=X,I.setIndex(nn)),Z.isMesh)et.wireframe===!0?(vt.setLineWidth(et.wireframeLinewidth*at()),I.setMode(P.LINES)):I.setMode(P.TRIANGLES);else if(Z.isLine){let k=et.linewidth;k===void 0&&(k=1),vt.setLineWidth(k*at()),Z.isLineSegments?I.setMode(P.LINES):Z.isLineLoop?I.setMode(P.LINE_LOOP):I.setMode(P.LINE_STRIP)}else Z.isPoints?I.setMode(P.POINTS):Z.isSprite&&I.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)I.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))I.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let k=Z._multiDrawStarts,wt=Z._multiDrawCounts,St=Z._multiDrawCount,zt=Qt?ct.get(Qt).bytesPerElement:1,se=ut.get(et).currentProgram.getUniforms();for(let ce=0;ce<St;ce++)se.setValue(P,"_gl_DrawID",ce),I.render(k[ce]/zt,wt[ce])}else if(Z.isInstancedMesh)I.renderInstances(me,Te,Z.count);else if(Q.isInstancedBufferGeometry){let k=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,wt=Math.min(Q.instanceCount,k);I.renderInstances(me,Te,wt)}else I.render(me,Te)};function Ct(b,G,Q){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,Bn(b,G,Q),b.side=wi,b.needsUpdate=!0,Bn(b,G,Q),b.side=Tn):Bn(b,G,Q)}this.compile=function(b,G,Q=null){Q===null&&(Q=b),p=oe.get(Q),p.init(G),S.push(p),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),b!==Q&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();let et=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){let $t=Rt[Bt];Ct($t,Q,Z),et.add($t)}else Ct(Rt,Q,Z),et.add(Rt)}),S.pop(),p=null,et},this.compileAsync=function(b,G,Q=null){let et=this.compile(b,G,Q);return new Promise(Z=>{function Rt(){if(et.forEach(function(Bt){ut.get(Bt).currentProgram.isReady()&&et.delete(Bt)}),et.size===0){Z(b);return}setTimeout(Rt,10)}lt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Xt=null;function Pt(b){Xt&&Xt(b)}function ue(){_e.stop()}function Zt(){_e.start()}let _e=new iu;_e.setAnimationLoop(Pt),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(b){Xt=b,B.setAnimationLoop(b),b===null?_e.stop():_e.start()},B.addEventListener("sessionstart",ue),B.addEventListener("sessionend",Zt),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(G),G=B.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,G,w),p=oe.get(b,S.length),p.init(G),S.push(p),Nt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),rt.setFromProjectionMatrix(Nt),Ft=this.localClippingEnabled,mt=bt.init(this.clippingPlanes,Ft),m=kt.get(b,E.length),m.init(),E.push(m),B.enabled===!0&&B.isPresenting===!0){let Rt=v.xr.getDepthSensingMesh();Rt!==null&&Ve(Rt,G,-1/0,v.sortObjects)}Ve(b,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,At),j=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,j&&Lt.addToRenderList(m,b),this.info.render.frame++,mt===!0&&bt.beginShadows();let Q=p.state.shadowsArray;Dt.render(Q,b,G),mt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();let et=m.opaque,Z=m.transmissive;if(p.setupLights(),G.isArrayCamera){let Rt=G.cameras;if(Z.length>0)for(let Bt=0,$t=Rt.length;Bt<$t;Bt++){let Qt=Rt[Bt];zn(et,Z,b,Qt)}j&&Lt.render(b);for(let Bt=0,$t=Rt.length;Bt<$t;Bt++){let Qt=Rt[Bt];Me(m,b,Qt,Qt.viewport)}}else Z.length>0&&zn(et,Z,b,G),j&&Lt.render(b),Me(m,b,G);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,G),tt.resetDefaultState(),T=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],mt===!0&&bt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ve(b,G,Q,et){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){et&&Mt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);let Bt=ot.update(b),$t=b.material;$t.visible&&m.push(b,Bt,$t,Q,Mt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){let Bt=ot.update(b),$t=b.material;if(et&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Mt.copy(b.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Mt.copy(Bt.boundingSphere.center)),Mt.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray($t)){let Qt=Bt.groups;for(let ae=0,ie=Qt.length;ae<ie;ae++){let Kt=Qt[ae],me=$t[Kt.materialIndex];me&&me.visible&&m.push(b,Bt,me,Q,Mt.z,Kt)}}else $t.visible&&m.push(b,Bt,$t,Q,Mt.z,null)}}let Rt=b.children;for(let Bt=0,$t=Rt.length;Bt<$t;Bt++)Ve(Rt[Bt],G,Q,et)}function Me(b,G,Q,et){let Z=b.opaque,Rt=b.transmissive,Bt=b.transparent;p.setupLightsView(Q),mt===!0&&bt.setGlobalState(v.clippingPlanes,Q),et&&vt.viewport(D.copy(et)),Z.length>0&&ve(Z,G,Q),Rt.length>0&&ve(Rt,G,Q),Bt.length>0&&ve(Bt,G,Q),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function zn(b,G,Q,et){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new fn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?ei:An,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));let Rt=p.state.transmissionRenderTarget[et.id],Bt=et.viewport||D;Rt.setSize(Bt.z,Bt.w);let $t=v.getRenderTarget();v.setRenderTarget(Rt),v.getClearColor(U),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),j&&Lt.render(Q);let Qt=v.toneMapping;v.toneMapping=Ti;let ae=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),mt===!0&&bt.setGlobalState(v.clippingPlanes,et),ve(b,Q,et),R.updateMultisampleRenderTarget(Rt),R.updateRenderTargetMipmap(Rt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Kt=0,me=G.length;Kt<me;Kt++){let Pe=G[Kt],Te=Pe.object,nn=Pe.geometry,I=Pe.material,k=Pe.group;if(I.side===Tn&&Te.layers.test(et.layers)){let wt=I.side;I.side=an,I.needsUpdate=!0,be(Te,Q,et,nn,I,k),I.side=wt,I.needsUpdate=!0,ie=!0}}ie===!0&&(R.updateMultisampleRenderTarget(Rt),R.updateRenderTargetMipmap(Rt))}v.setRenderTarget($t),v.setClearColor(U,O),ae!==void 0&&(et.viewport=ae),v.toneMapping=Qt}function ve(b,G,Q){let et=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Rt=b.length;Z<Rt;Z++){let Bt=b[Z],$t=Bt.object,Qt=Bt.geometry,ae=et===null?Bt.material:et,ie=Bt.group;$t.layers.test(Q.layers)&&be($t,G,Q,Qt,ae,ie)}}function be(b,G,Q,et,Z,Rt){b.onBeforeRender(v,G,Q,et,Z,Rt),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(v,G,Q,et,b,Rt),Z.transparent===!0&&Z.side===Tn&&Z.forceSinglePass===!1?(Z.side=an,Z.needsUpdate=!0,v.renderBufferDirect(Q,G,et,Z,b,Rt),Z.side=wi,Z.needsUpdate=!0,v.renderBufferDirect(Q,G,et,Z,b,Rt),Z.side=Tn):v.renderBufferDirect(Q,G,et,Z,b,Rt),b.onAfterRender(v,G,Q,et,Z,Rt)}function Bn(b,G,Q){G.isScene!==!0&&(G=Tt);let et=ut.get(b),Z=p.state.lights,Rt=p.state.shadowsArray,Bt=Z.state.version,$t=Ht.getParameters(b,Z.state,Rt,G,Q),Qt=Ht.getProgramCacheKey($t),ae=et.programs;et.environment=b.isMeshStandardMaterial?G.environment:null,et.fog=G.fog,et.envMap=(b.isMeshStandardMaterial?K:M).get(b.envMap||et.environment),et.envMapRotation=et.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,ae===void 0&&(b.addEventListener("dispose",ht),ae=new Map,et.programs=ae);let ie=ae.get(Qt);if(ie!==void 0){if(et.currentProgram===ie&&et.lightsStateVersion===Bt)return te(b,$t),ie}else $t.uniforms=Ht.getUniforms(b),b.onBeforeCompile($t,v),ie=Ht.acquireProgram($t,Qt),ae.set(Qt,ie),et.uniforms=$t.uniforms;let Kt=et.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Kt.clippingPlanes=bt.uniform),te(b,$t),et.needsLights=Yt(b),et.lightsStateVersion=Bt,et.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=ie,et.uniformsList=null,ie}function en(b){if(b.uniformsList===null){let G=b.currentProgram.getUniforms();b.uniformsList=Ls.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function te(b,G){let Q=ut.get(b);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function re(b,G,Q,et,Z){G.isScene!==!0&&(G=Tt),R.resetTextureUnits();let Rt=G.fog,Bt=et.isMeshStandardMaterial?G.environment:null,$t=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Li,Qt=(et.isMeshStandardMaterial?K:M).get(et.envMap||Bt),ae=et.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ie=!!Q.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Kt=!!Q.morphAttributes.position,me=!!Q.morphAttributes.normal,Pe=!!Q.morphAttributes.color,Te=Ti;et.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Te=v.toneMapping);let nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,I=nn!==void 0?nn.length:0,k=ut.get(et),wt=p.state.lights;if(mt===!0&&(Ft===!0||b!==_)){let $e=b===_&&et.id===T;bt.setState(et,b,$e)}let St=!1;et.version===k.__version?(k.needsLights&&k.lightsStateVersion!==wt.state.version||k.outputColorSpace!==$t||Z.isBatchedMesh&&k.batching===!1||!Z.isBatchedMesh&&k.batching===!0||Z.isBatchedMesh&&k.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&k.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&k.instancing===!1||!Z.isInstancedMesh&&k.instancing===!0||Z.isSkinnedMesh&&k.skinning===!1||!Z.isSkinnedMesh&&k.skinning===!0||Z.isInstancedMesh&&k.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&k.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&k.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&k.instancingMorph===!1&&Z.morphTexture!==null||k.envMap!==Qt||et.fog===!0&&k.fog!==Rt||k.numClippingPlanes!==void 0&&(k.numClippingPlanes!==bt.numPlanes||k.numIntersection!==bt.numIntersection)||k.vertexAlphas!==ae||k.vertexTangents!==ie||k.morphTargets!==Kt||k.morphNormals!==me||k.morphColors!==Pe||k.toneMapping!==Te||k.morphTargetsCount!==I)&&(St=!0):(St=!0,k.__version=et.version);let zt=k.currentProgram;St===!0&&(zt=Bn(et,G,Z));let se=!1,ce=!1,He=!1,Ee=zt.getUniforms(),we=k.uniforms;if(vt.useProgram(zt.program)&&(se=!0,ce=!0,He=!0),et.id!==T&&(T=et.id,ce=!0),se||_!==b){vt.buffers.depth.getReversed()?(ft.copy(b.projectionMatrix),Bd(ft),kd(ft),Ee.setValue(P,"projectionMatrix",ft)):Ee.setValue(P,"projectionMatrix",b.projectionMatrix),Ee.setValue(P,"viewMatrix",b.matrixWorldInverse);let gi=Ee.map.cameraPosition;gi!==void 0&&gi.setValue(P,Wt.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,ce=!0,He=!0)}if(Z.isSkinnedMesh){Ee.setOptional(P,Z,"bindMatrix"),Ee.setOptional(P,Z,"bindMatrixInverse");let $e=Z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ee.setValue(P,"boneTexture",$e.boneTexture,R))}Z.isBatchedMesh&&(Ee.setOptional(P,Z,"batchingTexture"),Ee.setValue(P,"batchingTexture",Z._matricesTexture,R),Ee.setOptional(P,Z,"batchingIdTexture"),Ee.setValue(P,"batchingIdTexture",Z._indirectTexture,R),Ee.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ee.setValue(P,"batchingColorTexture",Z._colorsTexture,R));let ye=Q.morphAttributes;if((ye.position!==void 0||ye.normal!==void 0||ye.color!==void 0)&&Jt.update(Z,Q,zt),(ce||k.receiveShadow!==Z.receiveShadow)&&(k.receiveShadow=Z.receiveShadow,Ee.setValue(P,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(we.envMap.value=Qt,we.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&G.environment!==null&&(we.envMapIntensity.value=G.environmentIntensity),ce&&(Ee.setValue(P,"toneMappingExposure",v.toneMappingExposure),k.needsLights&&le(we,He),Rt&&et.fog===!0&&Ot.refreshFogUniforms(we,Rt),Ot.refreshMaterialUniforms(we,et,$,nt,p.state.transmissionRenderTarget[b.id]),Ls.upload(P,en(k),we,R)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ls.upload(P,en(k),we,R),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ee.setValue(P,"center",Z.center),Ee.setValue(P,"modelViewMatrix",Z.modelViewMatrix),Ee.setValue(P,"normalMatrix",Z.normalMatrix),Ee.setValue(P,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let $e=et.uniformsGroups;for(let gi=0,xi=$e.length;gi<xi;gi++){let wl=$e[gi];C.update(wl,zt),C.bind(wl,zt)}}return zt}function le(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Yt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,G,Q){ut.get(b.texture).__webglTexture=G,ut.get(b.depthTexture).__webglTexture=Q;let et=ut.get(b);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=Q===void 0,et.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){let Q=ut.get(b);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,Q=0){w=b,y=G,A=Q;let et=!0,Z=null,Rt=!1,Bt=!1;if(b){let Qt=ut.get(b);if(Qt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(P.FRAMEBUFFER,null),et=!1;else if(Qt.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Qt.__hasExternalTextures)R.rebindTextures(b,ut.get(b.texture).__webglTexture,ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Kt=b.depthTexture;if(Qt.__boundDepthTexture!==Kt){if(Kt!==null&&ut.has(Kt)&&(b.width!==Kt.image.width||b.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}let ae=b.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Bt=!0);let ie=ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ie[G])?Z=ie[G][Q]:Z=ie[G],Rt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?Z=ut.get(b).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[Q]:Z=ie,D.copy(b.viewport),q.copy(b.scissor),F=b.scissorTest}else D.copy(It).multiplyScalar($).floor(),q.copy(Et).multiplyScalar($).floor(),F=qt;if(vt.bindFramebuffer(P.FRAMEBUFFER,Z)&&et&&vt.drawBuffers(b,Z),vt.viewport(D),vt.scissor(q),vt.setScissorTest(F),Rt){let Qt=ut.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+G,Qt.__webglTexture,Q)}else if(Bt){let Qt=ut.get(b.texture),ae=G||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qt.__webglTexture,Q||0,ae)}T=-1},this.readRenderTargetPixels=function(b,G,Q,et,Z,Rt,Bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Bt!==void 0&&($t=$t[Bt]),$t){vt.bindFramebuffer(P.FRAMEBUFFER,$t);try{let Qt=b.texture,ae=Qt.format,ie=Qt.type;if(!dt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-et&&Q>=0&&Q<=b.height-Z&&P.readPixels(G,Q,et,Z,Y.convert(ae),Y.convert(ie),Rt)}finally{let Qt=w!==null?ut.get(w).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(b,G,Q,et,Z,Rt,Bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Bt!==void 0&&($t=$t[Bt]),$t){let Qt=b.texture,ae=Qt.format,ie=Qt.type;if(!dt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-et&&Q>=0&&Q<=b.height-Z){vt.bindFramebuffer(P.FRAMEBUFFER,$t);let Kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Kt),P.bufferData(P.PIXEL_PACK_BUFFER,Rt.byteLength,P.STREAM_READ),P.readPixels(G,Q,et,Z,Y.convert(ae),Y.convert(ie),0);let me=w!==null?ut.get(w).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,me);let Pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await zd(P,Pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Rt),P.deleteBuffer(Kt),P.deleteSync(Pe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,Q=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);let et=Math.pow(2,-Q),Z=Math.floor(b.image.width*et),Rt=Math.floor(b.image.height*et),Bt=G!==null?G.x:0,$t=G!==null?G.y:0;R.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,Bt,$t,Z,Rt),vt.unbindTexture()},this.copyTextureToTexture=function(b,G,Q=null,et=null,Z=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,b=arguments[1],G=arguments[2],Z=arguments[3]||0,Q=null);let Rt,Bt,$t,Qt,ae,ie,Kt,me,Pe,Te=b.isCompressedTexture?b.mipmaps[Z]:b.image;Q!==null?(Rt=Q.max.x-Q.min.x,Bt=Q.max.y-Q.min.y,$t=Q.isBox3?Q.max.z-Q.min.z:1,Qt=Q.min.x,ae=Q.min.y,ie=Q.isBox3?Q.min.z:0):(Rt=Te.width,Bt=Te.height,$t=Te.depth||1,Qt=0,ae=0,ie=0),et!==null?(Kt=et.x,me=et.y,Pe=et.z):(Kt=0,me=0,Pe=0);let nn=Y.convert(G.format),I=Y.convert(G.type),k;G.isData3DTexture?(R.setTexture3D(G,0),k=P.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(R.setTexture2DArray(G,0),k=P.TEXTURE_2D_ARRAY):(R.setTexture2D(G,0),k=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);let wt=P.getParameter(P.UNPACK_ROW_LENGTH),St=P.getParameter(P.UNPACK_IMAGE_HEIGHT),zt=P.getParameter(P.UNPACK_SKIP_PIXELS),se=P.getParameter(P.UNPACK_SKIP_ROWS),ce=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ie);let He=b.isDataArrayTexture||b.isData3DTexture,Ee=G.isDataArrayTexture||G.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let we=ut.get(b),ye=ut.get(G),$e=ut.get(we.__renderTarget),gi=ut.get(ye.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,$e.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let xi=0;xi<$t;xi++)He&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ut.get(b).__webglTexture,Z,ie+xi),b.isDepthTexture?(Ee&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ut.get(G).__webglTexture,Z,Pe+xi),P.blitFramebuffer(Qt,ae,Rt,Bt,Kt,me,Rt,Bt,P.DEPTH_BUFFER_BIT,P.NEAREST)):Ee?P.copyTexSubImage3D(k,Z,Kt,me,Pe+xi,Qt,ae,Rt,Bt):P.copyTexSubImage2D(k,Z,Kt,me,Pe+xi,Qt,ae,Rt,Bt);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ee?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(k,Z,Kt,me,Pe,Rt,Bt,$t,nn,I,Te.data):G.isCompressedArrayTexture?P.compressedTexSubImage3D(k,Z,Kt,me,Pe,Rt,Bt,$t,nn,Te.data):P.texSubImage3D(k,Z,Kt,me,Pe,Rt,Bt,$t,nn,I,Te):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Z,Kt,me,Rt,Bt,nn,I,Te.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Z,Kt,me,Te.width,Te.height,nn,Te.data):P.texSubImage2D(P.TEXTURE_2D,Z,Kt,me,Rt,Bt,nn,I,Te);P.pixelStorei(P.UNPACK_ROW_LENGTH,wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,St),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,se),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ce),Z===0&&G.generateMipmaps&&P.generateMipmap(k),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,G,Q=null,et=null,Z=0){return b.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,et=arguments[1]||null,b=arguments[2],G=arguments[3],Z=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,Q,et,Z)},this.initRenderTarget=function(b){ut.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){y=0,A=0,w=null,vt.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var pr=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ji=class extends vn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=on,u=on,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=class extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new fe,Ah=new fe,Qr=[],Rh=new pn,Ug=new fe,tr=new Re,er=new Ci,ba=class extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new mr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Rh.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),er.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Ah.multiplyMatrices(n,ws),tr.matrixWorld=Ah,tr.raycast(t,Qr);for(let a=0,o=Qr.length;a<o;a++){let c=Qr[a];c.instanceId=r,c.object=this,e.push(c)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(s*this.count),s,this.count,ll,Jn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var gr=class extends jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ch=new fe,Oc=new Ki,ta=new Ci,ea=new L,Sa=class extends mn{constructor(t=new Oe,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;Ch.copy(s).invert(),Oc.copy(t.ray).applyMatrix4(Ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,x=f;g<x;g++){let m=l.getX(g);ea.fromBufferAttribute(d,m),Ph(ea,m,c,s,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,x=f;g<x;g++)ea.fromBufferAttribute(d,g),Ph(ea,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ph(i,t,e,n,s,r,a){let o=Oc.distanceSqToPoint(i);if(o<e){let c=new L;Oc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ii=class extends vn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new yt:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],a=[],o=new L,c=new fe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new yt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fc=class extends xr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var na=new L,Io=new gl,Do=new gl,Lo=new gl,ln=class extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(na.subVectors(s[0],s[1]).add(s[0]),l=na);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(na.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Io.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,m),Do.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,m),Lo.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Do.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Lo.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Io.calc(c),Do.calc(c),Lo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ih(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ng(i,t){let e=1-i;return e*e*t}function Og(i,t){return 2*(1-i)*i*t}function Fg(i,t){return i*i*t}function or(i,t,e,n){return Ng(i,t)+Og(i,e)+Fg(i,n)}function zg(i,t){let e=1-i;return e*e*e*t}function Bg(i,t){let e=1-i;return 3*e*e*i*t}function kg(i,t){return 3*(1-i)*i*i*t}function Vg(i,t){return i*i*i*t}function cr(i,t,e,n,s){return zg(i,t)+Bg(i,e)+kg(i,n)+Vg(i,s)}var Ea=class extends Dn{constructor(t=new yt,e=new yt,n=new yt,s=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,s.x,r.x,a.x,o.x),cr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zc=class extends Dn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(t,s.x,r.x,a.x,o.x),cr(t,s.y,r.y,a.y,o.y),cr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ta=class extends Dn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends Dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Dn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ih(o,c.x,l.x,u.x,d.x),Ih(o,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new yt().fromArray(s))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:ln,CubicBezierCurve:Ea,CubicBezierCurve3:zc,EllipseCurve:xr,LineCurve:Ta,LineCurve3:_r,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Aa,SplineCurve:Ra}),vr=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ca[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ca[s.type]().fromJSON(s))}return this}},Di=class extends vr{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ta(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new wa(this.currentPoint.clone(),new yt(t,e),new yt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ea(this.currentPoint.clone(),new yt(t,e),new yt(n,s),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ra(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new xr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qi=class i extends Oe{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/e,d=new L,h=new yt,f=new L,g=new L,x=new L,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let E=0;E<=e;E++){let S=n+E*u*s,v=Math.sin(S),V=Math.cos(S);for(let y=0;y<=t.length-1;y++){d.x=t[y].x*v,d.y=t[y].y,d.z=t[y].x*V,a.push(d.x,d.y,d.z),h.x=E/e,h.y=y/(t.length-1),o.push(h.x,h.y);let A=c[3*y+0]*v,w=c[3*y+1],T=c[3*y+0]*V;l.push(A,w,T)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){let v=S+E*t.length,V=v,y=v+t.length,A=v+t.length+1,w=v+1;r.push(V,y,w),r.push(A,w,y)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var xe=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],m=n/2,p=0;E(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function E(){let v=new L,V=new L,y=0,A=(e-t)/n;for(let w=0;w<=r;w++){let T=[],_=w/r,D=_*(e-t)+t;for(let q=0;q<=s;q++){let F=q/s,U=F*c+o,O=Math.sin(U),z=Math.cos(U);V.x=D*O,V.y=-_*n+m,V.z=D*z,d.push(V.x,V.y,V.z),v.set(O,A,z).normalize(),h.push(v.x,v.y,v.z),f.push(F,1-_),T.push(g++)}x.push(T)}for(let w=0;w<s;w++)for(let T=0;T<r;T++){let _=x[T][w],D=x[T+1][w],q=x[T+1][w+1],F=x[T][w+1];(t>0||T!==0)&&(u.push(_,D,F),y+=3),(e>0||T!==r-1)&&(u.push(D,q,F),y+=3)}l.addGroup(p,y,0),p+=y}function S(v){let V=g,y=new yt,A=new L,w=0,T=v===!0?t:e,_=v===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*_,0),h.push(0,_,0),f.push(.5,.5),g++;let D=g;for(let q=0;q<=s;q++){let U=q/s*c+o,O=Math.cos(U),z=Math.sin(U);A.x=T*z,A.y=m*_,A.z=T*O,d.push(A.x,A.y,A.z),h.push(0,_,0),y.x=O*.5+.5,y.y=z*.5*_+.5,f.push(y.x,y.y),g++}for(let q=0;q<s;q++){let F=V+q,U=D+q;v===!0?u.push(U,U+1,F):u.push(U+1,U,F),w+=3}l.addGroup(p,w,v===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class i extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ti=class extends Di{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Di().fromJSON(s))}return this}},Hg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,d,h,f;if(n&&(r=Yg(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)d=i[g],h=i[g+1],d<o&&(o=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-o,u-c),f=f!==0?32767/f:0}return yr(r,a,e,o,c,f,0),a}};function cu(i,t,e,n,s){let r,a;if(s===sx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Dh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Dh(r,i[r],i[r+1],a);return a&&Ha(a,a.next)&&(br(a),a=a.next),a}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ha(e,e.next)||Ue(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&jg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Wg(i,n,s,r):Gg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),br(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Xg(ts(i),t,e),yr(i,t,e,n,s,r,2)):a===2&&qg(i,t,e,n,s,r):yr(ts(i),t,e,n,s,r,1);break}}}function Gg(i){let t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<c?o<l?o:l:c<l?c:l,h=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Cs(s,o,r,c,a,l,g.x,g.y)&&Ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ue(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=o<c?o<l?o:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,x=o>c?o>l?o:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=Bc(f,g,t,e,n),E=Bc(x,m,t,e,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=E;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Cs(o,u,c,d,l,h,S.x,S.y)&&Ue(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Cs(o,u,c,d,l,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Cs(o,u,c,d,l,h,S.x,S.y)&&Ue(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Cs(o,u,c,d,l,h,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ha(s,r)&&lu(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return ts(n)}function qg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ex(a,o)){let c=hu(a,o);a=ts(a,a.next),c=ts(c,c.next),yr(a,t,e,n,s,r,0),yr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yg(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=cu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tx(l));for(s.sort(Zg),r=0;r<s.length;r++)e=$g(s[r],e);return e}function Zg(i,t){return i.x-t.x}function $g(i,t){let e=Jg(i,t);if(!e)return t;let n=hu(e,i);return ts(n,n.next),ts(e,e.next)}function Jg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,u=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Cs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Mr(e,i)&&(d<u||d===u&&(e.x>s.x||e.x===s.x&&Kg(s,e)))&&(s=e,u=d)),e=e.next;while(e!==o);return s}function Kg(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function jg(i,t,e,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ex(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nx(i,t)&&(Mr(i,t)&&Mr(t,i)&&ix(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||Ha(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ha(i,t){return i.x===t.x&&i.y===t.y}function lu(i,t,e,n){let s=sa(Ue(i,t,e)),r=sa(Ue(i,t,n)),a=sa(Ue(e,n,i)),o=sa(Ue(e,n,t));return!!(s!==r&&a!==o||s===0&&ia(i,e,t)||r===0&&ia(i,n,t)||a===0&&ia(e,i,n)||o===0&&ia(e,t,n))}function ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function sa(i){return i>0?1:i<0?-1:0}function nx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Mr(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function ix(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hu(i,t){let e=new kc(i.i,i.x,i.y),n=new kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Dh(i,t,e,n){let s=new kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var lr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lh(t),Uh(n,t);let a=t.length;e.forEach(Lh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Uh(n,e[c]);let o=Hg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var pi=class i extends Oe{constructor(t=new ti([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:rx,S,v=!1,V,y,A,w;p&&(S=p.getSpacedPoints(u),v=!0,h=!1,V=p.computeFrenetFrames(u,!1),y=new L,A=new L,w=new L),h||(m=0,f=0,g=0,x=0);let T=o.extractPoints(l),_=T.shape,D=T.holes;if(!lr.isClockWise(_)){_=_.reverse();for(let j=0,at=D.length;j<at;j++){let P=D[j];lr.isClockWise(P)&&(D[j]=P.reverse())}}let F=lr.triangulateShape(_,D),U=_;for(let j=0,at=D.length;j<at;j++){let P=D[j];_=_.concat(P)}function O(j,at,P){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(at,P)}let z=_.length,nt=F.length;function $(j,at,P){let gt,lt,dt,vt=j.x-at.x,Vt=j.y-at.y,ut=P.x-j.x,R=P.y-j.y,M=vt*vt+Vt*Vt,K=vt*R-Vt*ut;if(Math.abs(K)>Number.EPSILON){let ct=Math.sqrt(M),pt=Math.sqrt(ut*ut+R*R),ot=at.x-Vt/ct,Ht=at.y+vt/ct,Ot=P.x-R/pt,kt=P.y+ut/pt,oe=((Ot-ot)*R-(kt-Ht)*ut)/(vt*R-Vt*ut);gt=ot+vt*oe-j.x,lt=Ht+Vt*oe-j.y;let bt=gt*gt+lt*lt;if(bt<=2)return new yt(gt,lt);dt=Math.sqrt(bt/2)}else{let ct=!1;vt>Number.EPSILON?ut>Number.EPSILON&&(ct=!0):vt<-Number.EPSILON?ut<-Number.EPSILON&&(ct=!0):Math.sign(Vt)===Math.sign(R)&&(ct=!0),ct?(gt=-Vt,lt=vt,dt=Math.sqrt(M)):(gt=vt,lt=Vt,dt=Math.sqrt(M/2))}return new yt(gt/dt,lt/dt)}let st=[];for(let j=0,at=U.length,P=at-1,gt=j+1;j<at;j++,P++,gt++)P===at&&(P=0),gt===at&&(gt=0),st[j]=$(U[j],U[P],U[gt]);let At=[],It,Et=st.concat();for(let j=0,at=D.length;j<at;j++){let P=D[j];It=[];for(let gt=0,lt=P.length,dt=lt-1,vt=gt+1;gt<lt;gt++,dt++,vt++)dt===lt&&(dt=0),vt===lt&&(vt=0),It[gt]=$(P[gt],P[dt],P[vt]);At.push(It),Et=Et.concat(It)}for(let j=0;j<m;j++){let at=j/m,P=f*Math.cos(at*Math.PI/2),gt=g*Math.sin(at*Math.PI/2)+x;for(let lt=0,dt=U.length;lt<dt;lt++){let vt=O(U[lt],st[lt],gt);ft(vt.x,vt.y,-P)}for(let lt=0,dt=D.length;lt<dt;lt++){let vt=D[lt];It=At[lt];for(let Vt=0,ut=vt.length;Vt<ut;Vt++){let R=O(vt[Vt],It[Vt],gt);ft(R.x,R.y,-P)}}}let qt=g+x;for(let j=0;j<z;j++){let at=h?O(_[j],Et[j],qt):_[j];v?(A.copy(V.normals[0]).multiplyScalar(at.x),y.copy(V.binormals[0]).multiplyScalar(at.y),w.copy(S[0]).add(A).add(y),ft(w.x,w.y,w.z)):ft(at.x,at.y,0)}for(let j=1;j<=u;j++)for(let at=0;at<z;at++){let P=h?O(_[at],Et[at],qt):_[at];v?(A.copy(V.normals[j]).multiplyScalar(P.x),y.copy(V.binormals[j]).multiplyScalar(P.y),w.copy(S[j]).add(A).add(y),ft(w.x,w.y,w.z)):ft(P.x,P.y,d/u*j)}for(let j=m-1;j>=0;j--){let at=j/m,P=f*Math.cos(at*Math.PI/2),gt=g*Math.sin(at*Math.PI/2)+x;for(let lt=0,dt=U.length;lt<dt;lt++){let vt=O(U[lt],st[lt],gt);ft(vt.x,vt.y,d+P)}for(let lt=0,dt=D.length;lt<dt;lt++){let vt=D[lt];It=At[lt];for(let Vt=0,ut=vt.length;Vt<ut;Vt++){let R=O(vt[Vt],It[Vt],gt);v?ft(R.x,R.y+S[u-1].y,S[u-1].x+P):ft(R.x,R.y,d+P)}}}rt(),mt();function rt(){let j=s.length/3;if(h){let at=0,P=z*at;for(let gt=0;gt<nt;gt++){let lt=F[gt];Nt(lt[2]+P,lt[1]+P,lt[0]+P)}at=u+m*2,P=z*at;for(let gt=0;gt<nt;gt++){let lt=F[gt];Nt(lt[0]+P,lt[1]+P,lt[2]+P)}}else{for(let at=0;at<nt;at++){let P=F[at];Nt(P[2],P[1],P[0])}for(let at=0;at<nt;at++){let P=F[at];Nt(P[0]+z*u,P[1]+z*u,P[2]+z*u)}}n.addGroup(j,s.length/3-j,0)}function mt(){let j=s.length/3,at=0;Ft(U,at),at+=U.length;for(let P=0,gt=D.length;P<gt;P++){let lt=D[P];Ft(lt,at),at+=lt.length}n.addGroup(j,s.length/3-j,1)}function Ft(j,at){let P=j.length;for(;--P>=0;){let gt=P,lt=P-1;lt<0&&(lt=j.length-1);for(let dt=0,vt=u+m*2;dt<vt;dt++){let Vt=z*dt,ut=z*(dt+1),R=at+gt+Vt,M=at+lt+Vt,K=at+lt+ut,ct=at+gt+ut;Wt(R,M,K,ct)}}}function ft(j,at,P){c.push(j),c.push(at),c.push(P)}function Nt(j,at,P){Mt(j),Mt(at),Mt(P);let gt=s.length/3,lt=E.generateTopUV(n,s,gt-3,gt-2,gt-1);Tt(lt[0]),Tt(lt[1]),Tt(lt[2])}function Wt(j,at,P,gt){Mt(j),Mt(at),Mt(gt),Mt(at),Mt(P),Mt(gt);let lt=s.length/3,dt=E.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);Tt(dt[0]),Tt(dt[1]),Tt(dt[3]),Tt(dt[1]),Tt(dt[2]),Tt(dt[3])}function Mt(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Tt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ax(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ca[s.type]().fromJSON(s)),new i(n,t.options)}},rx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new yt(r,a),new yt(o,c),new yt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new yt(a,1-c),new yt(l,1-d),new yt(h,1-g),new yt(x,1-p)]:[new yt(o,1-c),new yt(u,1-d),new yt(f,1-g),new yt(m,1-p)]}};function ax(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var es=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new L,h=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let E=[],S=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let V=0;V<=e;V++){let y=V/e;d.x=-t*Math.cos(s+y*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+y*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(y+v,1-S),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let S=u[p][E+1],v=u[p][E],V=u[p+1][E],y=u[p+1][E+1];(p!==0||a>0)&&f.push(S,v,y),(p!==n-1||c<Math.PI)&&f.push(v,V,y)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pa=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new L,d=new L,h=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(x,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Rn=class i extends Oe{constructor(t=new Aa(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,c=new L,l=new yt,u=new L,d=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),E(),p()}function m(S){u=t.getPointAt(S/e,u);let v=a.normals[S],V=a.binormals[S];for(let y=0;y<=s;y++){let A=y/s*Math.PI*2,w=Math.sin(A),T=-Math.cos(A);c.x=T*v.x+w*V.x,c.y=T*v.y+w*V.y,c.z=T*v.z+w*V.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let v=1;v<=s;v++){let V=(s+1)*(S-1)+(v-1),y=(s+1)*S+(v-1),A=(s+1)*S+v,w=(s+1)*(S-1)+v;g.push(V,y,w),g.push(y,A,w)}}function E(){for(let S=0;S<=e;S++)for(let v=0;v<=s;v++)l.x=S/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ia=class extends jn{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new ee(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Vc=class extends jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Sr=class extends Vc{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Da=class extends jn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function ra(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ox(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=t,o=2*e-n;break;case Dl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,c=2*n-e;break;case Dl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,E=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let V=0;V!==o;++V)r[V]=p*a[u+V]+E*a[l+V]+S*a[c+V]+v*a[d+V];return r}},Gc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},Wc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case da:e=this.InterpolantFactoryMethodDiscrete;break;case vc:e=this.InterpolantFactoryMethodLinear;break;case io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return vc;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ox(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[h+g]||x!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=vc;var ns=class extends Gn{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=da;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Gn{};Xc.prototype.ValueTypeName="color";var qc=class extends Gn{};qc.prototype.ValueTypeName="number";var Yc=class extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},La=class extends Gn{InterpolantFactoryMethodLinear(t){return new Yc(this.times,this.values,this.getValueSize(),t)}};La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Gn{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=da;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Zc=class extends Gn{};Zc.prototype.ValueTypeName="vector";var $c=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},cx=new $c,Jc=class{constructor(t){this.manager=t!==void 0?t:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kc=class extends mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Uo=new fe,Nh=new L,Oh=new L,jc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qc=class extends jc{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Kc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ua=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Fh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Fh(){return performance.now()}var xl="\\[\\]\\.:\\/",lx=new RegExp("["+xl+"]","g"),_l="[^"+xl+"]",hx="[^"+xl.replace("\\.","")+"]",ux=/((?:WC+[\/:])*)/.source.replace("WC",_l),dx=/(WCOD+)?/.source.replace("WCOD",hx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),mx=new RegExp("^"+ux+dx+fx+px+"$"),gx=["material","materials","bones","map"],tl=class{constructor(t,e,n){let s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(t){let e=mx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=tl;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=new Float32Array(1);var zh=new fe,Na=class{constructor(t,e,n=0,s=1/0){this.ray=new Ki(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return zh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(t,e=!0,n=[]){return el(t,this,n,e),n.sort(Bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)el(t[s],this,n,e);return n.sort(Bh),n}};function Bh(i,t){return i.distance-t.distance}function el(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)el(r[a],t,e,!0)}}var Er=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Oa=class extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);var uu={type:"change"},yl={type:"start"},fu={type:"end"},Ga=new Ki,du=new je,xx=Math.cos(70*Qh.DEG2RAD),qe=new L,yn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vl=1e-6,Wa=class extends Oa{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new tn,this._lastTargetPosition=new L,this._quat=new tn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Er,this._sphericalDelta=new Er,this._scale=1,this._panOffset=new L,this._rotateStart=new yt,this._rotateEnd=new yt,this._rotateDelta=new yt,this._panStart=new yt,this._panEnd=new yt,this._panDelta=new yt,this._dollyStart=new yt,this._dollyEnd=new yt,this._dollyDelta=new yt,this._dollyDirection=new L,this._mouse=new yt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vx.bind(this),this._onPointerDown=_x.bind(this),this._onPointerUp=yx.bind(this),this._onContextMenu=Ax.bind(this),this._onMouseWheel=Sx.bind(this),this._onKeyDown=Ex.bind(this),this._onTouchStart=Tx.bind(this),this._onTouchMove=wx.bind(this),this._onMouseDown=Mx.bind(this),this._onMouseMove=bx.bind(this),this._interceptControlDown=Rx.bind(this),this._interceptControlUp=Cx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=Ce.NONE}update(t=null){let e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),s<-Math.PI?s+=yn:s>Math.PI&&(s-=yn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<xx?this.object.lookAt(this.target):(du.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(du,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vl||this._lastTargetPosition.distanceToSquared(this.target)>vl?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qe.copy(s).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-yn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new yt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function _x(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function vx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function yx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fu),this.state=Ce.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Mx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(yl)}function bx(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Sx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(yl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fu))}function Ex(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Tx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(yl)}function wx(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function Ax(i){this.enabled!==!1&&i.preventDefault()}function Rx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xa=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Px=new zs(-1,1,1,-1,0,1),Ml=class extends Oe{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}},Ix=new Ml,Xs=class{constructor(t){this._mesh=new Re(Ix,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Px)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Tr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new yt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new fe},cameraProjectionMatrixInverse:{value:new fe},cameraWorldMatrix:{value:new fe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},wr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},qa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function pu(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=Dx(t),n=e.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=e[a],c=2*Math.PI*o/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ji(s,t,t);return r.wrapS=ui,r.wrapT=ui,r.needsUpdate=!0,r}function Dx(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let a=1;a<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=a++;r++,s--}return n}var Ar={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:bl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new yt},cameraProjectionMatrixInverse:{value:new fe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function bl(i,t,e){let n=Lx(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Lx(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,a=Math.pow(s/(i-1),e);n.push(new L(Math.cos(r),Math.sin(r),a))}return n}var Ya={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Za=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(t+e)*a,c=Math.floor(t+o),l=Math.floor(e+o),u=(3-Math.sqrt(3))/6,d=(c+l)*u,h=c-d,f=l-d,g=t-h,x=e-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let E=g-m+u,S=x-p+u,v=g-1+2*u,V=x-1+2*u,y=c&255,A=l&255,w=this.perm[y+this.perm[A]]%12,T=this.perm[y+m+this.perm[A+p]]%12,_=this.perm[y+1+this.perm[A+1]]%12,D=.5-g*g-x*x;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[w],g,x));let q=.5-E*E-S*S;q<0?s=0:(q*=q,s=q*q*this.dot(this.grad3[T],E,S));let F=.5-v*v-V*V;return F<0?r=0:(F*=F,r=F*F*this.dot(this.grad3[_],v,V)),70*(n+s+r)}noise3d(t,e,n){let s,r,a,o,l=(t+e+n)*.3333333333333333,u=Math.floor(t+l),d=Math.floor(e+l),h=Math.floor(n+l),f=1/6,g=(u+d+h)*f,x=u-g,m=d-g,p=h-g,E=t-x,S=e-m,v=n-p,V,y,A,w,T,_;E>=S?S>=v?(V=1,y=0,A=0,w=1,T=1,_=0):E>=v?(V=1,y=0,A=0,w=1,T=0,_=1):(V=0,y=0,A=1,w=1,T=0,_=1):S<v?(V=0,y=0,A=1,w=0,T=1,_=1):E<v?(V=0,y=1,A=0,w=0,T=1,_=1):(V=0,y=1,A=0,w=1,T=1,_=0);let D=E-V+f,q=S-y+f,F=v-A+f,U=E-w+2*f,O=S-T+2*f,z=v-_+2*f,nt=E-1+3*f,$=S-1+3*f,st=v-1+3*f,At=u&255,It=d&255,Et=h&255,qt=this.perm[At+this.perm[It+this.perm[Et]]]%12,rt=this.perm[At+V+this.perm[It+y+this.perm[Et+A]]]%12,mt=this.perm[At+w+this.perm[It+T+this.perm[Et+_]]]%12,Ft=this.perm[At+1+this.perm[It+1+this.perm[Et+1]]]%12,ft=.6-E*E-S*S-v*v;ft<0?s=0:(ft*=ft,s=ft*ft*this.dot3(this.grad3[qt],E,S,v));let Nt=.6-D*D-q*q-F*F;Nt<0?r=0:(Nt*=Nt,r=Nt*Nt*this.dot3(this.grad3[rt],D,q,F));let Wt=.6-U*U-O*O-z*z;Wt<0?a=0:(Wt*=Wt,a=Wt*Wt*this.dot3(this.grad3[mt],U,O,z));let Mt=.6-nt*nt-$*$-st*st;return Mt<0?o=0:(Mt*=Mt,o=Mt*Mt*this.dot3(this.grad3[Ft],nt,$,st)),32*(s+r+a+o)}noise4d(t,e,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,d,h,f,g,x=(t+e+n+s)*c,m=Math.floor(t+x),p=Math.floor(e+x),E=Math.floor(n+x),S=Math.floor(s+x),v=(m+p+E+S)*l,V=m-v,y=p-v,A=E-v,w=S-v,T=t-V,_=e-y,D=n-A,q=s-w,F=T>_?32:0,U=T>D?16:0,O=_>D?8:0,z=T>q?4:0,nt=_>q?2:0,$=D>q?1:0,st=F+U+O+z+nt+$,At=a[st][0]>=3?1:0,It=a[st][1]>=3?1:0,Et=a[st][2]>=3?1:0,qt=a[st][3]>=3?1:0,rt=a[st][0]>=2?1:0,mt=a[st][1]>=2?1:0,Ft=a[st][2]>=2?1:0,ft=a[st][3]>=2?1:0,Nt=a[st][0]>=1?1:0,Wt=a[st][1]>=1?1:0,Mt=a[st][2]>=1?1:0,Tt=a[st][3]>=1?1:0,j=T-At+l,at=_-It+l,P=D-Et+l,gt=q-qt+l,lt=T-rt+2*l,dt=_-mt+2*l,vt=D-Ft+2*l,Vt=q-ft+2*l,ut=T-Nt+3*l,R=_-Wt+3*l,M=D-Mt+3*l,K=q-Tt+3*l,ct=T-1+4*l,pt=_-1+4*l,ot=D-1+4*l,Ht=q-1+4*l,Ot=m&255,kt=p&255,oe=E&255,bt=S&255,Dt=o[Ot+o[kt+o[oe+o[bt]]]]%32,Lt=o[Ot+At+o[kt+It+o[oe+Et+o[bt+qt]]]]%32,Jt=o[Ot+rt+o[kt+mt+o[oe+Ft+o[bt+ft]]]]%32,H=o[Ot+Nt+o[kt+Wt+o[oe+Mt+o[bt+Tt]]]]%32,X=o[Ot+1+o[kt+1+o[oe+1+o[bt+1]]]]%32,Y=.6-T*T-_*_-D*D-q*q;Y<0?u=0:(Y*=Y,u=Y*Y*this.dot4(r[Dt],T,_,D,q));let tt=.6-j*j-at*at-P*P-gt*gt;tt<0?d=0:(tt*=tt,d=tt*tt*this.dot4(r[Lt],j,at,P,gt));let C=.6-lt*lt-dt*dt-vt*vt-Vt*Vt;C<0?h=0:(C*=C,h=C*C*this.dot4(r[Jt],lt,dt,vt,Vt));let W=.6-ut*ut-R*R-M*M-K*K;W<0?f=0:(W*=W,f=W*W*this.dot4(r[H],ut,R,M,K));let B=.6-ct*ct-pt*pt-ot*ot-Ht*Ht;return B<0?g=0:(B*=B,g=B*B*this.dot4(r[X],ct,pt,ot,Ht)),27*(u+d+h+f+g)}};var qs=class i extends Xa{constructor(t,e,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=pu(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new fn(this.width,this.height,{type:ei}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ke({defines:Object.assign({},Tr.defines),uniforms:os.clone(Tr.uniforms),vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader,blending:Ge,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Da,this.normalMaterial.blending=Ge,this.pdMaterial=new ke({defines:Object.assign({},Ar.defines),uniforms:os.clone(Ar.uniforms),vertexShader:Ar.vertexShader,fragmentShader:Ar.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ke({defines:Object.assign({},wr.defines),uniforms:os.clone(wr.uniforms),vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,blending:Ge}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ke({uniforms:os.clone(Ya.uniforms),vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:za,blendDst:Gs,blendEquation:In,blendSrcAlpha:Fa,blendDstAlpha:Gs,blendEquationAlpha:In}),this.blendMaterial=new ke({uniforms:os.clone(qa.uniforms),vertexShader:qa.vertexShader,fragmentShader:qa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:sl,blendSrc:za,blendDst:Gs,blendEquation:In,blendSrcAlpha:Fa,blendDstAlpha:Gs,blendEquationAlpha:In}),this.fsQuad=new Xs(null),this.originalClearColor=new ee,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Pi,this.depthTexture.format=Ri,this.depthTexture.type=Ai,this.normalRenderTarget=new fn(this.width,this.height,{minFilter:on,magFilter:on,type:ei,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=bl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ge,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ge,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ge,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ge,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ge,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this.originalClearColor),t.setClearAlpha(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new Za,n=t*t*4,s=new Uint8Array(n);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let c=a,l=o;s[(a*t+o)*4]=(e.noise(c,l)*.5+.5)*255,s[(a*t+o)*4+1]=(e.noise(c+t,l)*.5+.5)*255,s[(a*t+o)*4+2]=(e.noise(c,l+t)*.5+.5)*255,s[(a*t+o)*4+3]=(e.noise(c+t,l+t)*.5+.5)*255}let r=new ji(s,t,t,wn,An);return r.wrapS=ui,r.wrapT=ui,r.needsUpdate=!0,r}};qs.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function $a(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Oe,l=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(let u in r){let d=mu(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][h]);let g=mu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function mu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new Qe(a,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let d=c/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let x=u.getComponent(h,g);o.setComponent(h+d,g,x)}}else a.set(u.array,c);c+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Rr=new L;function Ln(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Rr.copy(t),Rr[n]=0,Rr.normalize();let l=.5*a/(a+o),u=1-Rr.angleTo(i)/c;return Math.sign(Rr[e])===1?u*l:o/(a+o)+l+l*(1-u)}var Ja=class extends fi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new L,c=new L,l=new L(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,f=u.length/6,g=new L,x=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*r,u[m+1]=l.y*Math.sign(o.y)+c.y*r,u[m+2]=l.z*Math.sign(o.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),h[p+0]=Ln(g,c,"z","y",r,n),h[p+1]=1-Ln(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),h[p+0]=1-Ln(g,c,"z","y",r,n),h[p+1]=1-Ln(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),h[p+0]=1-Ln(g,c,"x","z",r,t),h[p+1]=Ln(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),h[p+0]=1-Ln(g,c,"x","z",r,t),h[p+1]=1-Ln(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),h[p+0]=1-Ln(g,c,"x","y",r,t),h[p+1]=1-Ln(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),h[p+0]=Ln(g,c,"x","y",r,t),h[p+1]=1-Ln(g,c,"y","x",r,e);break}}};var On={L:4054,secs:[[0,102,180],[102,218,178],[218,320,180],[320,491,220],[491,653.1,279.9],[653.1,666.8,345],[666.8,879.65,279.7],[879.65,893.35,345],[893.35,1215.8,279.9],[1215.8,1295.2,374.7],[1295.2,1368.2,377.9],[1368.2,1542.4,394],[1542.4,1866.7,394],[1866.7,2139.8,395],[2139.8,2416,397],[2416,2638.2,406.4],[2638.2,2711.2,377.9],[2711.2,2790.3,374.7],[2790.3,3203.9,279.9],[3203.9,3217.6,345],[3217.6,3430.38,279.7],[3430.38,3444.08,345],[3444.08,3584,279.9],[3584,4054,280.8]],mLOA:773.2,mLA:3324,pacote:[1368.2,2625.5],excit:[218,491],diodos:[0,218]},Ui=[[0,-3.4111],[218,-3.1931],[491,-2.9201],[653.1,-2.7201],[666.8,-2.7064],[879.65,-2.4936],[893.35,-2.4799],[1215.8,-1.693],[1295.2,-1.62],[1368.2,-1.15],[2625.5,1.15],[2711.2,1.62],[2790.3,1.693],[3203.9,2.4799],[3217.6,2.4936],[3430.38,2.7064],[3444.08,2.7201],[4054,3.33]],Se=i=>{let t=1;for(;t<Ui.length-1&&i>Ui[t][0];)t++;let[e,n]=Ui[t-1],[s,r]=Ui[t];return n+(i-e)/(s-e)*(r-n)},Ux=i=>{let t=1;for(;t<Ui.length-1&&i>Ui[t][1];)t++;let[e,n]=Ui[t-1],[s,r]=Ui[t];return e+(i-n)/(r-n)*(s-e)};function yu(i){let t=Ux(i),e=On.secs.find(([n,s])=>t>=n&&t<=s);return e?e[2]/2e3:.14}var Ut={polos:4,ranhuras:72,bore:.665,rExt:.97,nucleo:2.3,pacotes:15,duto:.012,rotorR:.648,aranhaR:.36,polCorpo:.3,polAlt:.17,frame:{x0:-2.43,x1:2.43,z:1.15,y0:-1.08,y1:1.12},cooler:{y0:1.12,y1:1.96},base:-1.32,ext:.37},mi=(Se(2711.2)+Se(2790.3))/2,Mn=mi-.075,$s=mi+.07,Wn=.05,gn=2.3,ne={rF:.56,rCap:.415,rC:.335,yS:-.56,wF:.05,wC:.3,wE:.48,rEsp:.5,parede:.04,nivel:-.22},Oi=i=>i*(gn+ne.wC),Ni={rCubo:.66,eCubo:.04,rAnel:.93,xAnel:Ut.frame.x1+Wn},Nx=(Ni.xAnel+.01-gn)/(Ni.rAnel-Ni.rCubo+.04),Ys=i=>gn+(i-(Ni.rCubo-.02))*Nx,to=[{id:"carcaca",nome:"Carca\xE7a e escudos",sub:"estrutura soldada, escudos e funda\xE7\xE3o",cor:"#8fb6d2",partes:["carcaca","escudoLA","escudoLOA","base"]},{id:"trocador",nome:"Trocador ar\u2013\xE1gua",sub:"feixe aletado, caixas e tubos de \xE1gua",cor:"#4fc3f7",partes:["trocador","agua"]},{id:"estator",nome:"Estator",sub:"n\xFAcleo, enrolamento e caixa de liga\xE7\xE3o",cor:"#ff8a65",partes:["estator","enrolamento","saidas","terminais"]},{id:"rotor",nome:"Rotor e campo",sub:"polos, bobinas de campo e gaiola",cor:"#ffc15e",partes:["rotor","campo","amortecedor"]},{id:"eixo",nome:"Eixo e ventiladores",sub:"eixo, ponta de eixo e ventiladores",cor:"#c3ced6",partes:["eixo","acoplamento","ventLA","ventLOA"]},{id:"mancais",nome:"Mancais",sub:"deslizamento, de flange, no escudo",cor:"#7fd48a",partes:["mancalLA","mancalLOA"]},{id:"excitatriz",nome:"Excitatriz e diodos",sub:"sem escovas, com os cabos do campo",cor:"#c792ea",partes:["excitatriz","diodos","cabos"]},{id:"defletor",nome:"Defletores",sub:"guias de ar dos ventiladores",cor:"#e6e9ec",partes:["defletor"]}],us={trocador:[0,1.15,0],agua:[0,1.15,0],escudoLA:[.8,0,0],mancalLA:[1.35,0,0],escudoLOA:[-.8,0,0],mancalLOA:[-1.35,0,0],excitatrizFixa:[-1.85,0,0],terminais:[0,0,.65]};function Mu(){let i=(e,n,s,r={})=>new Sr({color:e,metalness:n,roughness:s,...r}),t=(e,n,s,r,a={})=>(e.userData.relevo={t:n,e:s,f:r,...a},e);return{chapa:t(i(5792363,.8,.36),"lamina",.0045,45e-5,{cor:.08,rug:.1}),chapaFace:t(i(7108480,.8,.3),"lamina",.0045,4e-4,{cor:.08,rug:.1}),cobre:i(12087356,1,.26),bobina:i(7024413,.05,.42,{clearcoat:.8,clearcoatRoughness:.25}),campo:t(i(12745542,1,.3),"camadas",.006,45e-5,{cor:.1,rug:.1}),isol:i(2828067,0,.7),eixo:t(i(9081754,1,.3,{anisotropy:.35}),"torno",.0012,6e-5,{cor:.04,rug:.08}),eixoFosco:t(i(9278875,1,.36),"tinta",220,4e-5,{cor:.06,rug:.14}),aco:t(i(10134184,1,.3),"tinta",220,4e-5,{cor:.05,rug:.14}),pintura:t(i(8889271,0,.42,{clearcoat:.55,clearcoatRoughness:.3}),"tinta",140,12e-5,{cor:.045,rug:.1}),pinturaEsc:t(i(7705513,0,.45,{clearcoat:.45,clearcoatRoughness:.34}),"tinta",140,12e-5,{cor:.045,rug:.1}),pinturaInt:i(12175055,0,.6),mancal:t(i(6260390,0,.48,{clearcoat:.35,clearcoatRoughness:.45}),"fundido",60,35e-5,{cor:.07,rug:.16}),base:i(3818314,.7,.45),ferroFundido:t(i(7173498,.6,.55),"fundido",60,35e-5,{cor:.08,rug:.18}),patente:i(14341574,1,.22),oleo:Object.assign(i(13931818,0,.08,{transparent:!0,opacity:.84,clearcoat:1,clearcoatRoughness:.04}),{userData:{liquido:!0}}),inox:i(11976387,1,.24),aluminio:i(13489111,1,.3),latao:i(13148234,1,.26),diodo:i(2237736,.3,.45),dissip:i(11910595,1,.3),aguaFria:i(3112912,0,.35,{clearcoat:.6}),aguaQuente:i(13124910,0,.35,{clearcoat:.6}),caboPos:i(12986408,0,.45),caboNeg:i(1842204,0,.45),caboAT:i(1513755,0,.55,{clearcoat:.2}),trancado:i(12173508,1,.42),vidro:i(14019829,0,.04,{transparent:!0,opacity:.45}),aletas:i(13883869,1,.32),caixaAgua:t(i(7178912,0,.42,{clearcoat:.5,clearcoatRoughness:.3}),"tinta",140,12e-5,{cor:.045,rug:.1}),solda:t(i(8231341,.1,.55),"fundido",900,.0012,{cor:.12,rug:.2}),amarelo:new cn({color:15909376}),preto:new cn({color:1382426}),faseU:i(12597547,.1,.42,{clearcoat:.5}),faseV:i(13935130,.1,.42,{clearcoat:.5}),faseW:i(2912191,.1,.42,{clearcoat:.5}),norte:i(13780271,.2,.4,{emissive:4852998,emissiveIntensity:.4}),sul:i(3108816,.2,.4,{emissive:532554,emissiveIntensity:.4})}}var Ox=i=>(i.rotateZ(-Math.PI/2),i),jt=(i,t,e,n=.008)=>new Ja(i,t,e,2,Math.max(4e-4,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4)));function Cn(i,t,e=.004,n=48){let s=Math.min(e,t/4),r=new pi(i,{depth:Math.max(1e-4,t-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelOffset:-s,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(t-2*s)/2),r.rotateY(Math.PI/2),r}var Nn=(i,t=!1,e=0,n=0)=>{let s=t?new Di:new ti;return s.absarc(e,n,i,0,Math.PI*2,t),s};function Ie(i,t,e,n=96,s=.003){let r=Nn(t);return r.holes.push(Nn(i,!0)),Cn(r,e,Math.min(s,(t-i)/4),n)}var Zs=(i,t,e=48)=>Ox(new xe(i,i,t,e)),Un=(i,...t)=>{let e=new ti;return i.forEach(([n,s],r)=>r?e.lineTo(n,s):e.moveTo(n,s)),e.closePath(),e.holes.push(...t),e},gu=i=>{let t=new Di;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t};function Ka(i,t,e,n,s,r=6){let a=[],o=[[e-s,t+s,-Math.PI/2],[e-s,n-s,0],[i+s,n-s,Math.PI/2],[i+s,t+s,Math.PI]];for(let[c,l,u]of o)for(let d=0;d<=r;d++){let h=u+d/r*Math.PI/2;a.push([c+s*Math.cos(h),l+s*Math.sin(h)])}return a}function Fx(i,t=96){let e=[i[0]];for(let s=1;s<i.length;s++)e.push(i[s],i[s]);e.push(i[0]);let n=new Qi(e.map(([s,r])=>new yt(s,r)),t);return n.rotateZ(-Math.PI/2),n}function Sl(i=0){let t=ne.rC+i,e=ne.yS-i,n=Math.max(.02,.06+i*.5),s=[];for(let r=0;r<=48;r++){let a=r/48*Math.PI;s.push([t*Math.cos(a),t*Math.sin(a)])}for(let r=0;r<=6;r++){let a=Math.PI+r/6*Math.PI/2;s.push([-t+n+n*Math.cos(a),e+n+n*Math.sin(a)])}for(let r=0;r<=6;r++){let a=1.5*Math.PI+r/6*Math.PI/2;s.push([t-n+n*Math.cos(a),e+n+n*Math.sin(a)])}return s}function zx(){let i=[];for(let t=0;t<=40;t++){let e=t/40*Math.PI;i.push([ne.rCap*Math.cos(e),ne.rCap*Math.sin(e)])}for(let t=0;t<=56;t++){let e=Math.PI+t/56*Math.PI;i.push([ne.rF*Math.cos(e),ne.rF*Math.sin(e)])}return i}function ja(i=.012){let t=new xe(i*1.75,i*1.75,i*1.15,6);t.translate(0,i*.3+i*.575,0);let e=new xe(i*2.2,i*2.2,i*.3,20);e.translate(0,i*.15,0);let n=new xe(i*1.2,i*1.2,i*.12,16);return n.translate(0,i*1.51,0),$a([t,e,n])}var xu=new L(0,1,0);function Bx(i,t,e,n){let s=Math.min(e,n)*.38,r=[[e/2,n/2-s],[e/2-s,n/2],[-e/2+s,n/2],[-e/2,n/2-s],[-e/2,-n/2+s],[-e/2+s,-n/2],[e/2-s,-n/2],[e/2,-n/2+s]],a=r.length,o=[],c=[],l=[],u=new L,d=new L,h=new L,f=new L;for(let x=0;x<=t;x++){i.getPoint(x/t,u),i.getTangent(x/t,d),h.set(0,u.y,u.z).normalize(),h.addScaledVector(d,-h.dot(d)).normalize(),f.crossVectors(d,h).normalize();for(let[m,p]of r)o.push(u.x+h.x*m+f.x*p,u.y+h.y*m+f.y*p,u.z+h.z*m+f.z*p),c.push(x/t,0)}for(let x=0;x<t;x++)for(let m=0;m<a;m++){let p=x*a+m,E=x*a+(m+1)%a,S=p+a,v=E+a;l.push(p,E,S,E,v,S)}let g=new Oe;return g.setAttribute("position",new pe(o,3)),g.setAttribute("uv",new pe(c,2)),g.setIndex(l),g.computeVertexNormals(),g}function Qa(i,t,e,{metal:n=.2,rug:s=.45,px:r=900}={}){let a=document.createElement("canvas");a.width=r,a.height=Math.round(r*t/i);let o=a.getContext("2d");e(o,a.width,a.height);let c=new Ii(a);return c.colorSpace=Ke,c.anisotropy=8,{geo:new Qn(i,t),mat:new Sr({map:c,metalness:n,roughness:s,clearcoat:.3})}}var _u="Inter, Helvetica, Arial, sans-serif";function ls(i,t,e,n,s,r,a=700){let o=r;for(i.font=`${a} ${o}px ${_u}`;i.measureText(t).width>s&&o>6;)o*=.94,i.font=`${a} ${o}px ${_u}`;i.fillText(t,e,n)}var hs=917,vu=()=>(hs^=hs<<13,hs^=hs>>>17,hs^=hs<<5,(hs>>>0)/4294967296);function De(i,t,e,n){let s=new Re(i,t);return s.castShadow=s.receiveShadow=!0,e&&(s.userData.parte=e),n&&(s.name=n),s}function bu(i,{leve:t}){let e=new _n,n={},s={},r={},a=(H,X=e)=>{let Y=new _n;return Y.name=H,Y.userData.parte=H,X.add(Y),n[H]=Y,Y},o=[],c=[],l=(H,X=o)=>{let Y=H.clone();return Y.userData={...H.userData},X.push(Y),Y},u=new Map,d=H=>(u.has(H)||u.set(H,l(H)),u.get(H)),h=(H,X,Y,tt=0,C=0,W=0,B=H.userData.parte)=>{let N=De(X,Y,B);return N.position.set(tt,C,W),H.add(N),N},f=new tn,g=ja(.012),x=ja(.009),m=ja(.016),p=ja(.02),E=(H,X,Y,tt,C,W,B=g)=>{let N=De(B,X,H.userData.parte);return N.position.set(Y,tt,C),N.quaternion.copy(f.setFromUnitVectors(xu,W)),H.add(N),N},S=H=>new L(H,0,0),v=H=>new L(0,0,H),V=new L(0,1,0),y=(H,X,Y)=>new L(H,X,Y),A=(H,X,Y,tt=!1)=>{r[H]={p:X,g:Y,gira:tt}},w=Ut.frame,T=w.x1-w.x0,_=Ut.nucleo,D=Ut.rotorR,q=.03,F=new _n;F.name="giro",e.add(F);let U=a("eixo",F),O=.032,z=-_/2+.07,nt=l(i.eixo,c);{let H=[new yt(0,z),new yt(O,z),new yt(O,Se(0))];for(let[tt,C,W]of On.secs){let B=W/2e3,N=Math.min(.003,(Se(C)-Se(tt))/4);H.push(new yt(B-N,Se(tt)),new yt(B,Se(tt)+N),new yt(B,Se(C)-N),new yt(B-N,Se(C)))}H.push(new yt(0,Se(On.L)));let X=new Qi(H,112);X.rotateZ(-Math.PI/2),X.computeVertexNormals();let Y=De(X,nt,"eixo");Y.userData.manter=!0,U.add(Y),h(U,jt(Se(315)-Se(223),.014,.02,.003),l(i.isol,c),(Se(223)+Se(315))/2,.09-.003,0)}A("eixo",y(-0,.2,.02),"eixo"),A("coloLA",y(Oi(1)-.16,.16,.02),"eixo"),A("coloLOA",y(Oi(-1)+.16,.16,.02),"eixo"),A("assento",y(1.4,.19,.03),"eixo");{let H=a("acoplamento",F),X=Se(3619),Y=Se(4019),tt=.2808/2;h(H,jt(Y-X,.04,.063,.006),d(i.aco),(X+Y)/2,tt+.02-.022,0),A("ponta",y((X+Y)/2+.08,tt+.03,0),"acoplamento")}let $=a("rotor",F),st=a("campo",F);$.add(De(Ie(.205,Ut.aranhaR,_),i.chapa,"rotor"));for(let H=0;H<Ut.polos;H++){let X=H*2*Math.PI/Ut.polos,Y=new _n;Y.rotation.x=X,$.add(Y);let tt=De(jt(_*.97,Ut.polAlt+.02,Ut.polCorpo,.006),i.chapa,"rotor");tt.position.y=Ut.aranhaR+Ut.polAlt/2-.01,Y.add(tt);let C=new ti,W=.62*Math.PI/Ut.polos,B=Ut.aranhaR+Ut.polAlt;C.moveTo(B*Math.sin(-W*.92),B*Math.cos(-W*.92));for(let Xt=0;Xt<=72;Xt++){let Pt=-W+2*W*Xt/72,ue=D-.018*Math.pow(Math.abs(Pt/W),2);C.lineTo(ue*Math.sin(Pt),ue*Math.cos(Pt))}C.lineTo(B*Math.sin(W*.92),B*Math.cos(W*.92)),C.closePath();let N=De(Cn(C,_,.005,4),i.chapaFace,"rotor");N.userData.polo=H,N.userData.manter=!0,Y.add(N);let it=Ut.polCorpo+.07,J=_*.97+.07,_t=Un(Ka(-J/2,-it/2,J/2,it/2,.05,5),gu(Ka(-(_*.97+.006)/2,-(Ut.polCorpo+.006)/2,(_*.97+.006)/2,(Ut.polCorpo+.006)/2,.004,1).reverse())),xt=new pi(_t,{depth:Ut.polAlt-.035,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:6});xt.rotateX(-Math.PI/2);let Ct=De(xt,i.campo,"campo");Ct.position.y=Ut.aranhaR+.012,Ct.userData.polo=H,Ct.userData.manter=!0,Y.add(Ct);{let Xt=De(jt(J,.006,it,.002),i.isol,"campo");Xt.position.set(0,Ut.aranhaR+Ut.polAlt-.018,0),Y.add(Xt)}for(let Xt=0;Xt<7;Xt++){let Pt=-W*.8+2*W*.8*Xt/6,ue=D-.03,Zt=De(Zs(.008,_+.06,12),i.latao,"amortecedor");Zt.position.set(0,ue*Math.cos(Pt),ue*Math.sin(Pt)),Y.add(Zt)}}for(let H of[-1,1]){let X=De(Ie(D-.05,D-.012,.018,96),i.latao,"amortecedor");X.position.x=H*(_/2+.03),$.add(X)}A("polo",y(.45,D+.005,.1),"rotor",!0),A("campo",y(-.7,Ut.aranhaR+.1,Ut.polCorpo/2+.035),"campo",!0),A("sapata",y(.9,D-.004,-.16),"rotor",!0),A("amortecedor",y(_/2+.03,D-.03,.12),"rotor",!0),A("rotorPonta",y(_/2+.03,(D-.03)*.7071,(D-.03)*.7071),"rotor");let At=.3747/2,It=(()=>{let H=[];for(let W=0;W<=14;W++){let B=.26+.29200000000000004*W/14,N=.55*((B-.26)/(.552-.26))**1.3;H.push([B*Math.sin(N),B*Math.cos(N)])}for(let W=14;W>=0;W--){let B=.26+.29200000000000004*W/14,N=.55*((B-.26)/(.552-.26))**1.3+.011/B;H.push([B*Math.sin(N),B*Math.cos(N)])}return Cn(Un(H),.062,.002,4)})(),Et=(H,X)=>{let Y=a(X,F),tt=16;Y.add(De(Ie(At+5e-4,.262,Se(2790.3)-Se(2711.2),72,.005),i.aco,X)),Y.add(De(Ie(.24,.565,.012,96).translate(-.031,0,0),i.aluminio,X)),Y.add(De(Ie(.43,.565,.01,96).translate(.031,0,0),i.aluminio,X));for(let C=0;C<tt;C++){let W=De(It,i.aluminio,X);W.rotation.x=C*2*Math.PI/tt,Y.add(W)}for(let C=0;C<8;C++){let W=C*Math.PI/4,B=De(Zs(.011,.09,10),i.eixoFosco,X);B.position.set(0,.225*Math.cos(W),.225*Math.sin(W)),Y.add(B)}return Y.position.x=H,Y};Et(mi,"ventLA"),Et(-mi,"ventLOA").scale.x=-1,A("ventLA",y(mi,.5,.12),"ventLA"),A("ventLOA",y(-mi,.5,.12),"ventLOA");let qt=a("excitatriz",F),rt=a("diodos",F),mt=(Se(On.excit[0])+Se(On.excit[1]))/2,Ft=Se(On.excit[1])-Se(On.excit[0]),ft=(Se(On.diodos[0])+Se(On.diodos[1]))/2;{h(qt,Ie(.11,.25,Ft*.9),i.chapa,mt);for(let tt of[-1,1])h(qt,Ie(.2,.256,.045),i.cobre,mt+tt*Ft*.48);h(rt,Ie(.095,.3,.035),i.dissip,ft);for(let tt=0;tt<18;tt++){let C=tt*Math.PI/9,W=h(rt,jt(.09,.06,.006,.002),i.dissip,ft+.045,.24*Math.cos(C),.24*Math.sin(C));W.rotation.x=-C}for(let tt=0;tt<6;tt++){let C=tt*Math.PI/3+Math.PI/6,W=h(rt,new xe(.024,.024,.032,20),i.diodo,ft-.035,.2*Math.cos(C),.2*Math.sin(C));W.rotation.z=Math.PI/2}h(rt,jt(.03,.05,.09,.006),i.aguaFria,ft-.035,0,.16);let H=mt-Ft*.48-.02,X=ft+.02,Y=[i.faseU,i.faseV,i.faseW];for(let tt=0;tt<3;tt++){let C=-Math.PI/2+.5+(tt-1)*.14,W=(it,J)=>y(it,J*Math.cos(C),J*Math.sin(C)),B=new ln([W(H,.228),W(H-.03,.262),W((H+X)/2,.27),W(X+.03,.25),W(X,.222)],!1,"centripetal"),N=De(new Rn(B,40,.009,10,!1),Y[tt],"diodos");N.userData.manter=!0,rt.add(N),h(rt,new xe(.013,.013,.025,6).rotateZ(Math.PI/2),i.latao,X+.005,.222*Math.cos(C),.222*Math.sin(C))}}A("armadura",y(mt+.04,.18,.18),"excitatriz"),A("diodos",y(ft+.02,.19,.19),"diodos"),A("excFora",y(mt,.45*Math.cos(.55),.45*Math.sin(.55)),"excitatrizFixa");{let H=[],X=[],Y=Se(0)-.03,tt=z-.03,C=ft-.05;for(let[W,B]of[[H,.014],[X,-.014]]){W.push(y(C,.16,B*1.6),y(C-.03,.11,B*1.3),y(Y-.02,.045,B),y(Y+.02,.004,B));for(let N of[Se(On.excit[1]),Oi(-1),Se(1215),-_/2])W.push(y(N,0,B));W.push(y(tt-.03,.004,B),y(tt+.005,.06,B),y(tt+.01,Ut.aranhaR-.04,B),y(-_/2-.035,Ut.aranhaR+.015,B*2),y(-_/2-.04,Ut.aranhaR+.06,B*4))}for(let W of[.022,-.022])h(st,new xe(.012,.012,.03,6).rotateZ(Math.PI/2),i.latao,C+.012,.16,W);for(let[W,B]of[[H,i.caboPos],[X,i.caboNeg]]){let N=new ln(W,!1,"centripetal"),it=De(new Rn(N,200,.009,10,!1),B,"cabos");it.userData.manter=!0,st.add(it),(s.cabos=s.cabos||[]).push(N)}}A("cabos",y(-1.9,0,.02),"cabos");let Nt=a("estator"),Wt=a("enrolamento"),Mt=Ut.ranhuras,Tt=.13,j=.024;{let H=Nn(Ut.rExt),X=new Di;for(let N=0;N<Mt;N++){let it=N*2*Math.PI/Mt,J=j/Ut.bore/2,ht=(_t,xt)=>[_t*Math.cos(xt),_t*Math.sin(xt)];[ht(Ut.bore,it-Math.PI/Mt),ht(Ut.bore,it-J),ht(Ut.bore+Tt,it-J),ht(Ut.bore+Tt,it+J),ht(Ut.bore,it+J)].forEach(([_t,xt],Ct)=>N===0&&Ct===0?X.moveTo(_t,xt):X.lineTo(_t,xt))}X.closePath(),H.holes.push(X);let Y=(_-(Ut.pacotes-1)*Ut.duto)/Ut.pacotes,tt=Cn(H,Y,.0025,72),C=l(i.chapa);for(let N=0;N<Ut.pacotes;N++)h(Nt,tt,C,-_/2+Y/2+N*(Y+Ut.duto));for(let N=1;N<Ut.pacotes;N++)for(let it=0;it<24;it++){let J=it*Math.PI/12+.05,ht=-_/2+N*(Y+Ut.duto)-Ut.duto/2,_t=(Ut.bore+Tt+Ut.rExt)/2,xt=h(Nt,jt(Ut.duto,.2,.008,.002),C,ht,_t*Math.cos(J),_t*Math.sin(J));xt.rotation.x=J}let W=l(i.pinturaEsc);for(let N of[-1,1])h(Nt,Ie(Ut.bore+Tt+.02,Ut.rExt-.01,.035),W,N*(_/2+.0175));for(let N=0;N<12;N++){let it=N*Math.PI/6,J=h(Nt,jt(_+.1,.05,.05,.006),W,0,(Ut.rExt+.02)*Math.cos(it),(Ut.rExt+.02)*Math.sin(it));J.rotation.x=it}let B=-_/2+7*(Y+Ut.duto)-Ut.duto/2;A("nucleo",y(-.45,.88,0),"estator"),A("dutos",y(B,.84,0),"estator"),A("ranhuras",y(.62,Ut.bore+.02,0),"estator"),A("placaPressao",y(_/2+.02,.9,0),"estator"),A("dorso",y(-.8,Ut.rExt+.02,0),"estator")}let at=Ut.bore+Tt*.72,P=Ut.bore+Tt*.3,gt=Ut.ext,lt=H=>({x:_/2+.01+gt*Math.sin(Math.PI*H)*.9+.02*(1-Math.cos(Math.PI*H)),r:at+(P-at)*H+.07*Math.sin(Math.PI*H)});{let X=N=>Math.floor(N%18/6)%3,Y=[[],[],[]];for(let N=0;N<Mt;N++){let it=N*2*Math.PI/Mt,J=(N+15)*2*Math.PI/Mt;for(let[ht,_t]of[[it,at],[J,P]]){let xt=jt(_+.02,Tt*.38,j*.8,.004);xt.rotateX(ht-Math.PI/2),xt.translate(0,_t*Math.sin(ht),-_t*Math.cos(ht)),Y[X(N)].push(xt)}for(let ht of[-1,1]){let _t=[];for(let xt=0;xt<=12;xt++){let Ct=xt/12,Xt=it+(J-it)*Ct,Pt=lt(Ct);_t.push(y(ht*Pt.x,Pt.r*Math.sin(Xt),-Pt.r*Math.cos(Xt)))}Y[X(N)].push(Bx(new ln(_t),22,.036,.015).toNonIndexed())}}let tt=l(i.bobina);s.fases=[];for(let N=0;N<3;N++){Y[N].forEach(J=>{for(let ht of Object.keys(J.attributes))["position","normal","uv"].includes(ht)||J.deleteAttribute(ht)});let it=De($a(Y[N]),tt,"enrolamento");it.userData.fase=N,it.userData.manter=!0,Wt.add(it),s.fases.push(it)}let C=l(i.isol),W=N=>{let it=0,J=.5;for(let ht=0;ht<30;ht++){let _t=(it+J)/2;lt(_t).x-_/2<N?it=_t:J=_t}return lt(it).r+.02};for(let N of[-1,1])for(let it of[.14,.26]){let J=W(it);h(Wt,Ie(J,J+.026,.026),C,N*(_/2+it))}A("amarracao",y(_/2+.26,W(.26)+.013,0),"enrolamento"),s.saidas=[];let B=-1.85;for(let N=0;N<3;N++){let it=[y(-(_/2+.14+N*.06),-.04-N*.03,.78),y(-(_/2+.3+N*.05),-.09-N*.02,.95),y(B+(N-1)*.12,-.13,1.07),y(B+(N-1)*.12,-.15,w.z+.22)],J=De(new Rn(new ln(it,!1,"centripetal"),48,.02,12,!1),[i.faseU,i.faseV,i.faseW][N],"saidas");J.userData.manter=!0,Wt.add(J),s.saidas.push(J)}A("saidas",y(-(_/2+.38),-.11,1),"enrolamento")}{let H=lt(.22);A("cabecas",y(H.x,H.r,0),"enrolamento"),A("cabecasLOA",y(-H.x,H.r,0),"enrolamento")}A("ladoBobina",y(.25,at,0),"enrolamento");let dt=w.y0+.3,vt=w.z-.14,Vt=Ut.base+.05,ut=a("carcaca"),R=a("base"),M=a("terminais"),K=l(i.pintura),ct=l(i.pinturaEsc),pt=l(i.pinturaInt),ot=l(i.eixoFosco),Ht=l(i.inox),Ot=[-1.22,0,1.22],kt=[-1.85,-.6,.6,1.85],oe=.9,bt=-1.85;{for(let J of[-1,1]){h(ut,jt(T,w.y1-dt,q,.006),K,0,(w.y1+dt)/2,J*(w.z-q/2)),h(ut,jt(T,dt-w.y0+q,q,.006),ct,0,(w.y0+dt)/2,J*(vt-q/2)),h(ut,jt(T,q,w.z-vt,.006),K,0,dt+q/2,J*(vt+w.z)/2),h(ut,jt(T+.04,.06,.055,.012),ct,0,w.y1-.03,J*(w.z+.016));for(let ht=0;ht<19;ht++)E(ut,ot,w.x0+.12+ht*(T-.24)/18,w.y1-.03,J*(w.z+.044),v(J),x);for(let ht of Ot)h(ut,jt(.03,w.y1-dt-.1,.07,.01),K,ht,(w.y1+dt)/2-.02,J*(w.z+.035)),h(ut,jt(.12,.03,.09,.008),ct,ht,dt+.035,J*(w.z+.03));for(let ht of kt)if(!(J>0&&ht===bt)){h(ut,jt(oe,.86,.022,.016),K,ht,-.16,J*(w.z+.011));for(let _t=0;_t<7;_t++)for(let xt of[-.56,.24])E(ut,ot,ht-.4+_t*.1333,xt,J*(w.z+.022),v(J),x);for(let _t of[ht-.42,ht+.42])for(let xt of[-.3,0])E(ut,ot,_t,xt,J*(w.z+.022),v(J),x)}}h(ut,jt(T,q,2*vt,.006),ct,0,w.y0+q/2,0);for(let J of[-1,1])h(ut,jt(T,q,.26,.006),K,0,w.y1-q/2,J*(w.z-.13)),h(ut,jt(.06,q,2*w.z-.52,.006),K,J*Mn,w.y1-q/2,0);let H=w.z+.04,X=new ti,Y=w.y1-.14,tt=.1;X.moveTo(-H,Vt+.05),X.lineTo(H,Vt+.05),X.lineTo(H,Y-.22),X.lineTo(H+.08,Y-tt),X.absarc(H+.08,Y,tt,-Math.PI/2,Math.PI/2,!1),X.lineTo(H,w.y1),X.lineTo(-H,w.y1),X.lineTo(-H-.08,Y+tt),X.absarc(-H-.08,Y,tt,Math.PI/2,1.5*Math.PI,!1),X.lineTo(-H,Y-.22),X.closePath(),X.holes.push(Nn(.96,!0),Nn(.045,!0,H+.08,Y),Nn(.045,!0,-H-.08,Y));let C=Cn(X,Wn,.006,48);for(let J of[-1,1]){h(ut,C,K,J*(w.x1+Wn/2)),h(ut,Ie(.96,1.06,.02,96,.004),ct,J*(w.x1-.01));for(let[ht,_t]of[[.62,-.86],[.74,-.72]])h(ut,Zs(.03,.05,24),Ht,J*(w.x1+Wn+.025),ht,_t),h(ut,Zs(.042,.022,6),Ht,J*(w.x1+Wn+.011),ht,_t)}A("olhal",y(w.x1+Wn/2,Y+.06,-(H+.13)),"carcaca"),A("placaPonta",y(w.x1+Wn,-.78,.85),"carcaca");let W=Un(Ka(-(w.z-.035),w.y0+.035,w.z-.035,w.y1-.035,.02,2),Nn(Ut.rExt+.04,!0),...[[1,1],[1,-1],[-1,1],[-1,-1]].map(([J,ht])=>Nn(.09,!0,J*(w.z-.2),ht*(w.y1-.2)))),B=Cn(W,.025,.003,72);for(let J of[-_/2-.03,_/2+.03])h(ut,B,pt,J);A("alma",y(_/2+.03,Ut.rExt+.075,0),"carcaca");{let _t=d(i.inox),xt=Cn(Un(Ka(-(w.z-q),w.y0+q,w.z-q,w.y1-q,.02,2),Nn(.59+.012,!0)),.012,.003,72),Ct=[];for(let Pt=0;Pt<=14;Pt++){let ue=Pt/14*Math.PI/2;Ct.push([.59+.075*(1-Math.cos(ue)),.075*Math.sin(ue)])}let Xt=[...Ct.map(([Pt,ue])=>new yt(Pt,ue)),...Ct.slice().reverse().map(([Pt,ue],Zt,_e)=>{let Ve=(_e.length-1-Zt)/(_e.length-1)*Math.PI/2;return new yt(Pt+.01*Math.cos(Ve),ue-.01*Math.sin(Ve))})];for(let Pt of[-1,1]){h(ut,xt,_t,Pt*Mn,0,0,"defletor"),h(ut,Ie(.59+.012,.59+.07,.025,96,.003),_t,Pt*(Mn-.019),0,0,"defletor"),h(ut,Ie(.59,.59+.01,$s-Mn,96,.002),_t,Pt*(Mn+$s)/2,0,0,"defletor");let ue=new Qi(Xt,96);ue.rotateZ(-Math.PI/2*Pt),ue.computeVertexNormals(),h(ut,ue,_t,Pt*$s,0,0,"defletor");for(let Zt=0;Zt<16;Zt++){let _e=Zt*Math.PI/8+Math.PI/16;E(ut,ot,Pt*(Mn-.031),(.59+.045)*Math.sin(_e),(.59+.045)*Math.cos(_e),S(-Pt),x)}for(let Zt of[-1,1])h(ut,jt(.06,w.y1-w.y0-.1,.012,.004),_t,Pt*(Mn-.03),0,Zt*(w.z-q-.006),"defletor");h(ut,jt(.06,.012,2*w.z-.1,.004),_t,Pt*(Mn-.03),w.y0+q+.006,0,"defletor")}A("defletor",y(Mn,.86,0),"carcaca"),A("bocal",y($s+.03,.59+.05,0),"carcaca")}let N=new ti;N.moveTo(0,0),N.lineTo(.12,0),N.lineTo(0,.26),N.closePath();for(let J of[-1,1])for(let ht of[w.x0+.34,w.x1-.34]){h(ut,jt(.56,dt-Vt,w.z-vt+.04,.012),K,ht,(dt+Vt)/2-.01,J*(vt+w.z+.04)/2),h(ut,jt(.72,.06,.5,.012),ct,ht,Vt+.03,J*(w.z-.07));for(let _t of[-.24,.24]){let xt=new pi(N,{depth:.026,bevelEnabled:!1});xt.translate(0,0,-.013),xt.rotateY(-J*Math.PI/2),h(ut,xt,K,ht+_t,Vt+.06,J*(w.z+.04))}for(let _t of[-.3,.3])h(ut,new xe(.018,.018,.1,12),ot,ht+_t,Vt+.1,J*(w.z+.1)),E(ut,ot,ht+_t,Vt+.06,J*(w.z+.1),V,p)}A("pe",y(w.x1-.34,Vt+.16,w.z+.06),"carcaca");{let J=d(i.solda),ht=(_t,xt)=>{let Ct=xt.clone().sub(_t),Xt=De(new xe(.009,.009,Ct.length(),8,1),J,"carcaca");Xt.position.copy(_t).addScaledVector(Ct,.5),Xt.quaternion.setFromUnitVectors(xu,Ct.normalize()),ut.add(Xt)};for(let _t of[-1,1])for(let xt of[-1,1])ht(y(xt*(w.x1-.002),dt+.01,_t*(w.z+.003)),y(xt*(w.x1-.002),w.y1-.06,_t*(w.z+.003)));for(let _t of[-1,1])ht(y(w.x0+.02,dt+q+.004,_t*(w.z+.002)),y(w.x1-.02,dt+q+.004,_t*(w.z+.002)))}let it=(J,ht,_t,xt,Ct=0)=>{let Xt=De(J.geo,l(J.mat),"carcaca");return Xt.position.set(ht,_t,xt),Xt.rotation.y=Ct,Xt.userData.manter=!0,ut.add(Xt),Xt};for(let[J,ht]of[[-.8,"AQUECIMENTO 230 V"],[-.38,"SENSORES PT100"]]){h(ut,jt(.34,.24,.14,.014),ct,J,w.y1-.25,w.z+.07),h(ut,jt(.31,.21,.018,.008),K,J,w.y1-.25,w.z+.148);for(let[_t,xt]of[[-.135,-.085],[.135,-.085],[-.135,.085],[.135,.085]])E(ut,ot,J+_t,w.y1-.25+xt,w.z+.157,v(1),x);it(Qa(.2,.05,(_t,xt,Ct)=>{_t.fillStyle="#e9ecee",_t.fillRect(0,0,xt,Ct),_t.strokeStyle="#2a3036",_t.lineWidth=6,_t.strokeRect(3,3,xt-6,Ct-6),_t.fillStyle="#1b1f23",_t.textAlign="center",_t.textBaseline="middle",ls(_t,ht,xt/2,Ct/2+2,xt*.86,Ct*.5)},{px:600}),J,w.y1-.22,w.z+.158);for(let _t of[-.07,.07])h(ut,new xe(.022,.022,.04,6),Ht,J+_t,w.y1-.39,w.z+.07),h(ut,new xe(.016,.016,.03,16),d(i.preto),J+_t,w.y1-.42,w.z+.07)}{let J=Qa(.36,.24,(xt,Ct,Xt)=>{let Pt=xt.createLinearGradient(0,0,Ct,Xt);Pt.addColorStop(0,"#d9dde0"),Pt.addColorStop(.5,"#c4c9cd"),Pt.addColorStop(1,"#d5d9dc"),xt.fillStyle=Pt,xt.fillRect(0,0,Ct,Xt);for(let Zt=0;Zt<900;Zt++)xt.fillStyle=`rgba(255,255,255,${vu()*.06})`,xt.fillRect(0,vu()*Xt,Ct,1);xt.strokeStyle="#3a4046",xt.lineWidth=5,xt.strokeRect(14,14,Ct-28,Xt-28),xt.fillStyle="#20262b",xt.textBaseline="top",ls(xt,"GERADOR S\xCDNCRONO TRIF\xC1SICO",Ct*.075,Xt*.06,Ct*.85,Xt*.085,800),[["Tens\xE3o","13 800 V"],["Frequ\xEAncia","60 Hz"],["Rota\xE7\xE3o","1 800 rpm"],["Polos","4"],["Liga\xE7\xE3o","Y"],["Excita\xE7\xE3o","sem escovas"],["Refrigera\xE7\xE3o","IC81W"],["Prote\xE7\xE3o","IP55"],["Isola\xE7\xE3o","classe F"],["Regime","S1"]].forEach(([Zt,_e],Ve)=>{let Me=Ve%2,zn=Math.floor(Ve/2),ve=34+Me*Ct*.48,be=Xt*.24+zn*Xt*.135;xt.fillStyle="#4b535a",ls(xt,Zt,ve,be,Ct*.19,Xt*.052,500),xt.fillStyle="#15191d",ls(xt,_e,ve+Ct*.2,be,Ct*.22,Xt*.052,700),xt.strokeStyle="rgba(40,46,52,.35)",xt.lineWidth=2,xt.beginPath(),xt.moveTo(ve,be+Xt*.075),xt.lineTo(ve+Ct*.43,be+Xt*.075),xt.stroke()})},{metal:.85,rug:.3,px:1400}),ht=1,_t=.62;it(J,ht,_t,w.z+.004);for(let[xt,Ct]of[[-.168,-.108],[.168,-.108],[-.168,.108],[.168,.108]])h(ut,new es(.006,10,6,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),Ht,ht+xt,_t+Ct,w.z+.005);A("placa",y(ht,_t+.02,w.z+.01),"carcaca")}h(ut,jt(.12,.08,.03,.006),d(i.latao),1.2,dt-.1,vt+.015);for(let J of[-.03,.03])E(ut,d(i.latao),1.2+J,dt-.1,vt+.03,v(1),g);h(ut,new Rn(new ln([y(1.2,dt-.13,vt+.04),y(1.22,dt-.2,vt+.06),y(1.25,Ut.base+.08,vt+.05),y(1.28,Ut.base+.01,vt+.02)]),32,.012,8),d(i.cobre));{let J=Qa(.26,.11,(ht,_t,xt)=>{ht.clearRect(0,0,_t,xt),ht.fillStyle="#c0392b",ht.beginPath(),ht.moveTo(_t*.08,xt*.38),ht.lineTo(_t*.7,xt*.38),ht.lineTo(_t*.7,xt*.15),ht.lineTo(_t*.94,xt*.5),ht.lineTo(_t*.7,xt*.85),ht.lineTo(_t*.7,xt*.62),ht.lineTo(_t*.08,xt*.62),ht.closePath(),ht.fill()},{px:400});J.mat.transparent=!0,it(J,w.x1+Wn+.002,w.y1-.32,.62,Math.PI/2)}A("tampa",y(kt[2],-.42,w.z+.025),"carcaca"),A("nervura",y(Ot[2],-.45,w.z+.07),"carcaca"),A("carcaca",y(-1.2,-.5,w.z+.02),"carcaca"),A("auxiliares",y(-.59,w.y1-.2,w.z+.16),"carcaca")}for(let H of[-1,1]){let X=H>0?"escudoLA":"escudoLOA",Y=a(X),tt=l(i.pinturaEsc),C=l(i.pintura),W=l(i.eixoFosco),B=Ni.xAnel,N=gn-Ni.eCubo,it=Ni.rCubo,J=Ni.rAnel,ht=(Pt,ue)=>Fx(H>0?Pt:Pt.map(([Zt,_e])=>[Zt,-_e]).reverse(),ue);h(Y,ht([[J,B],[1,B],[1,B+.03],[J,B+.03]],128),C);for(let Pt=0;Pt<24;Pt++){let ue=Pt*Math.PI/12+Math.PI/24;E(Y,W,H*(B+.03),.965*Math.sin(ue),.965*Math.cos(ue),S(H))}h(Y,ht([[it-.02,N],[J+.02,B-.03],[J+.02,B+.01],[it-.02,gn]],128),tt),h(Y,ht([[ne.rEsp,N],[it,N],[it,gn],[ne.rEsp,gn]],128),tt);let _t=it-.01,xt=J-.005,Ct=new pi(Un([[_t,Ys(_t)-gn-.004],[xt,Ys(xt)-gn-.004],[xt,Ys(xt)-gn+.05],[_t,Ys(_t)-gn+.075]]),{depth:.026,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelOffset:-.004,bevelSegments:2});Ct.translate(0,0,-.013);for(let Pt=0;Pt<12;Pt++){let ue=Pt*Math.PI/6+Math.PI/12,Zt=y(0,Math.cos(ue),Math.sin(ue)),_e=y(H,0,0),Ve=new L().crossVectors(Zt,_e);h(Y,Ct.clone().applyMatrix4(new fe().makeBasis(Zt,_e,Ve)),tt,H*gn)}let Xt=(it+J)/2;A(X,y(H*(Ys(Xt)+.004),Xt*Math.cos(.5),Xt*Math.sin(.5)),X)}let Dt=H=>{let X=H>0?"mancalLA":"mancalLOA",Y=a(X),tt=te=>H*(gn+te),C=tt(ne.wC),W=l(i.mancal),B=l(i.pinturaEsc),N=l(i.inox),it=l(i.patente),J=l(i.aco),ht=l(i.oleo),_t=l(i.latao),xt=l(i.eixoFosco),Ct=ne.wE,Xt=ne.parede;h(Y,Cn(Un(zx(),Nn(.17,!0)),ne.wF,.006,64),W,tt(ne.wF/2));for(let te of[-12,-32,-50,192,212,230]){let re=te*Math.PI/180;E(Y,xt,tt(ne.wF),.52*Math.sin(re),.52*Math.cos(re),S(H),m)}for(let te of[22,54,126,158]){let re=te*Math.PI/180;E(Y,xt,tt(ne.wF),.382*Math.sin(re),.382*Math.cos(re),S(H),g)}h(Y,Ie(.43,ne.rEsp-.004,.07,96,.004),W,tt(-.035)),h(Y,Ie(.1415,.24,.045,96,.003),N,tt(-.095));for(let te of[.15,.16])h(Y,Ie(te,te+.004,.012,72,.001),xt,tt(-.122));h(Y,Cn(Un(Sl(0),gu(Sl(-Xt).reverse())),Ct-ne.wF-Xt,.004,48),W,tt((ne.wF+Ct-Xt)/2)),h(Y,Cn(Un(Sl(0),Nn(.165,!0)),Xt,.004,48),W,tt(Ct-Xt/2));for(let te of[-1,1]){h(Y,jt(Ct-ne.wF-.02,.05,.085,.01),B,tt((ne.wF+Ct)/2),0,te*(ne.rC+.04));for(let re of[0,1,2])E(Y,xt,tt(ne.wF+.07+re*.15),.025,te*(ne.rC+.045),V,m)}for(let te of[70,80,100,110]){let re=te*Math.PI/180,le=ne.rC+.028,Yt=h(Y,jt(Ct-ne.wF-.06,.056,.016,.005),W,tt((ne.wF+Ct)/2),le*Math.sin(re),le*Math.cos(re));Yt.rotation.x=Math.PI/2-re}for(let te of[58,122]){let re=te*Math.PI/180,le=ne.rC,Yt=le*Math.sin(re),b=le*Math.cos(re);h(Y,new xe(.04,.05,.05,24),W,C,Yt+.015,b);let G=h(Y,new Pa(.046,.013,12,32),N,C,Yt+.115,b);G.rotation.y=Math.PI/2,h(Y,new xe(.014,.014,.06,12),N,C,Yt+.06,b)}for(let te=0;te<=10;te++){let re=-.3+te*.06,le=Math.abs(re)<.25?-Math.sqrt(.25*.25-re*re)-.02:-.035,Yt=ne.yS+.02;h(Y,jt(.05,le-Yt,.014,.004),W,tt(Ct+.025),(le+Yt)/2,re)}for(let te of[-1,1])for(let re of[.12,.2,.34,.42])h(Y,jt(.014,-.05-(ne.yS+.03),.045,.004),W,tt(re),(-.05+ne.yS+.03)/2,te*(ne.rC+.0225));h(Y,Ie(.1415,.24,.03,96,.003),N,tt(Ct+.015)),h(Y,Ie(.1415,.175,.03,72,.002),xt,tt(Ct+.045));for(let te of[.15,.16])h(Y,Ie(te,te+.004,.012,72,.001),xt,tt(Ct+.066));for(let te=0;te<8;te++){let re=te*Math.PI/4+Math.PI/8;E(Y,xt,tt(Ct+.03),.21*Math.sin(re),.21*Math.cos(re),S(H),x)}{let te=[],le=ne.rC-Xt+.004;for(let b=0;b<=32;b++){let G=b/32*Math.PI;te.push([le*Math.cos(G),le*Math.sin(G)])}for(let b=32;b>=0;b--){let G=b/32*Math.PI;te.push([.2*Math.cos(G),.2*Math.sin(G)])}let Yt=Cn(Un(te),.05,.003,32);for(let b of[-1,1])h(Y,Yt,W,C+b*.095),h(Y,jt(.05,.06,.12,.008),W,C+b*.095,-.23,0)}let Pt=[];for(let te=0;te<=12;te++){let re=-1+2*te/12;Pt.push(new yt(.2-.012*re*re,re*.0425))}let ue=[new yt(.151,-.0425),...Pt,new yt(.151,.0425)];for(let te of[-1,1]){let re=new Qi(ue,96);re.rotateZ(-Math.PI/2),re.computeVertexNormals(),h(Y,re,J,C+te*.0575),h(Y,Ie(.1405,.151,.085,96,.001),it,C+te*.0575)}let Zt=.215,_e=De(Ie(Zt,Zt+.016,.026,96,.002),_t,X);_e.position.set(C,.1405-Zt,0),_e.userData.manter=!0,Y.add(_e),(s.aneis=s.aneis||[]).push(_e);let Ve=new es(.0085,12,8);for(let te=0;te<14;te++){let re=te/14*Math.PI*2,le=De(Ve,ht,X);le.position.set(te%2?.006:-.006,(Zt-.007)*Math.cos(re),(Zt-.007)*Math.sin(re)),le.scale.set(1,1.6,1),le.rotation.x=-re,_e.add(le)}h(Y,Ie(Zt-.003,Zt,.02,96,.001),ht,C,.1405-Zt,0);let Me=ne.yS+Xt+.002,zn=ne.rC-Xt-.003;h(Y,jt(Ct-ne.wF-Xt-.008,ne.nivel-Me,2*zn,.015),ht,tt((ne.wF+Ct-Xt)/2),(ne.nivel+Me)/2,0);let ve=tt(.2);h(Y,jt(.12,.05,.09,.012),W,ve,ne.rC+.015,0),h(Y,new xe(.022,.022,.06,6),N,ve,ne.rC+.07,0),h(Y,new xe(.03,.03,.03,24),N,ve,ne.rC+.115,0);let be=tt(.19);h(Y,new xe(.055,.055,.02,32).rotateX(Math.PI/2),N,be,ne.nivel,ne.rC+.01),h(Y,new xe(.04,.04,.022,32).rotateX(Math.PI/2),d(i.vidro),be,ne.nivel,ne.rC+.013),h(Y,jt(.06,.036,.008,.004),ht,be,ne.nivel-.02,ne.rC+.006);for(let[te,re,le]of[[.12,-.1,.026],[.4,-.45,.03]])h(Y,new xe(le,le,.03,6).rotateX(Math.PI/2),N,tt(te),re,ne.rC+.015);h(Y,new xe(.03,.03,.035,6),N,tt(.3),ne.yS-.015,-.15);let Bn=H*(w.x1+Wn+.05),en=new ln([y(ve,ne.rC+.13,-.02),y(ve,ne.rC+.2,-.12),y(tt(.08),.52,-.52),y(H*(gn-.02),.44,-.76),y(Bn+H*.04,.56,-.86),y(Bn,.62,-.86)],!1,"centripetal");return h(Y,new Rn(en,64,.011,10,!1),d(i.trancado)),A(X,y(C-H*.08,ne.rC*.89,ne.rC*.45),X),A(X+".casquilho",y(C+H*.07,.17,0),X),A(X+".anel",y(C+H*.001,.1405-Zt,Zt+.008),X),A(X+".oleo",y(C+H*.001,-.4,.16),X),A(X+".visor",y(be,ne.nivel,ne.rC+.02),X),A(X+".labirinto",y(tt(Ct+.035),.2,0),X),A(X+".flange",y(tt(.03),-.4,.37),X),A(X+".aletas",y(tt(Ct+.05),-.45,-.18),X),A(X+".termometro",y(ve,ne.rC+.13,0),X),Y};Dt(1),Dt(-1);{let H=a("excitatrizFixa");H.userData.parte="excitatriz";let X=l(i.pintura),Y=l(i.chapa),tt=l(i.cobre);h(H,Ie(.265,.36,Ft*.85),Y,mt,0,0,"excitatriz");for(let it of[-1,1])h(H,Ie(.29,.35,.03),tt,mt+it*Ft*.46,0,0,"excitatriz");let C=mt+Ft*.43,W=mt-Ft*.43;h(H,Ie(.36,.4,Ft*.86,96,.004),X,mt,0,0,"excitatriz");for(let it of[C,W])h(H,Ie(.36,.45,.025,96,.004),X,it,0,0,"excitatriz");for(let it=0;it<12;it++){let J=it*Math.PI/6;h(H,jt(Ft*.86,.02,.03,.005),X,mt,.41*Math.cos(J),.41*Math.sin(J),"excitatriz").rotation.x=J}let B=.7,N=-(Ys(B)+.01);for(let it of[.7,-.7,2.25,-2.25]){let J=h(H,jt(Math.abs(C-N),.08,.1,.02),X,(C+N)/2,B*Math.cos(it),B*Math.sin(it),"excitatriz");J.rotation.x=it;let ht=h(H,jt(.05,.3,.1,.015),X,C,.55*Math.cos(it),.55*Math.sin(it),"excitatriz");ht.rotation.x=it,E(H,ot,N-.005,(B+.04)*Math.cos(it),(B+.04)*Math.sin(it),S(-1),m)}h(H,new Rn(new ln([y(mt,.4,-.1),y(mt+.02,.47,-.3),y(mt+.12,.52,-.55),y(-gn-.28,.6,-.7),y(-(w.x1+Wn+.1),.7,-.72),y(-(w.x1+Wn+.05),.74,-.72)],!1,"centripetal"),64,.012,10,!1),d(i.trancado),0,0,0,"excitatriz"),A("estatorExc",y(mt-.03,.4,0),"excitatrizFixa"),A("bracos",y((C+N)/2,B*Math.cos(-.7)+.05,B*Math.sin(-.7)),"excitatrizFixa")}let Lt=a("trocador"),Jt=a("agua");{let H=Ut.cooler,X=w.z+.02,Y=2*Mn+.3,tt=H.y0+.3,C=.17,W=H.y1-C,B=d(i.pintura),N=d(i.pinturaEsc),it=d(i.cobre),J=d(i.aletas),ht=d(i.caixaAgua),_t=d(i.aguaFria),xt=d(i.aguaQuente),Ct=d(i.aco);for(let Yt of[-1,1]){h(Lt,jt(T-.02,W-H.y0,.02,.006),B,0,(H.y0+W)/2,Yt*(X-.01));for(let b of[H.y0+.035,W-.03])h(Lt,jt(T-.06,.05,.035,.012),N,0,b,Yt*(X+.016));for(let b of[-T/2+.12,-T/4,0,T/4,T/2-.12])h(Lt,jt(.06,W-H.y0-.12,.035,.012),N,b,(H.y0+W)/2,Yt*(X+.016))}let Xt=[[-X,W-.02],[X,W-.02],[X,W],[X-C,H.y1],[-X+C,H.y1],[-X,W]],Pt=[[X,W-.02],[X,W],[X-C,H.y1],[-X+C,H.y1],[-X,W],[-X,W-.02],[-X+.02,W-.02],[-X+.02,W-.008],[-X+C+.008,H.y1-.02],[X-C-.008,H.y1-.02],[X-.02,W-.008],[X-.02,W-.02]];h(Lt,Cn(Un(Pt),T,.004,4),B,0,0,0);for(let Yt of[-1,1])h(Lt,jt(.02,W-H.y0,2*X,.006),B,Yt*(T/2-.01),(H.y0+W)/2,0),h(Lt,Cn(Un(Xt),.02,.004,4),B,Yt*(T/2-.01),0,0);for(let Yt of[-1.86,-.62,.62,1.86]){h(Lt,jt(1.1,.02,2*(X-C)-.14,.012),N,Yt,H.y1+.01,0);for(let b=0;b<7;b++)for(let G of[-1,1])E(Lt,ot,Yt-.5+b*.1667,H.y1+.02,G*(X-C-.1),V,x)}let ue=new ti;ue.moveTo(-.075,0),ue.lineTo(.075,0),ue.lineTo(.05,.07),ue.absarc(0,.07,.05,0,Math.PI,!1),ue.closePath(),ue.holes.push(Nn(.024,!0,0,.07));let Zt=new pi(ue,{depth:.025,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelOffset:-.003,bevelSegments:2,curveSegments:16});Zt.translate(0,0,-.0125);for(let Yt of[-T/2+.2,T/2-.2])for(let b of[-1,1])h(Lt,Zt,N,Yt,H.y1-.005,b*(X-C-.03));let _e=X-.05,Ve=t?30:54,Me=Y/Ve,zn=2*_e;for(let Yt of[-1,1])h(Lt,jt(Y+.08,.34,.03,.006),Ct,0,tt,Yt*_e);let ve=new xe(.0095,.0095,zn,12);ve.rotateX(Math.PI/2);let be=[-.105,-.035,.035,.105];for(let Yt=0;Yt<4;Yt++)for(let b=0;b<Ve-Yt%2;b++)h(Lt,ve,it,-Y/2+Me/2+b*Me+Yt%2*Me/2,tt+be[Yt],0);let Bn=new fi(Y,.26,.0016),en=t?28:56;for(let Yt=0;Yt<en;Yt++)h(Lt,Bn,J,0,tt,-_e+.04+Yt*(2*_e-.08)/(en-1));h(Lt,jt(Y+.08,.012,zn,.004),Ct,0,tt-.155,0);for(let Yt of[-1,1])h(Lt,jt(.012,tt+.155-H.y0,2*X-.04,.004),N,Yt*(Y/2+.05),(H.y0+tt+.155)/2,0);h(Lt,jt(Y+.1,.015,2*X-.06,.004),N,0,tt-.22,0);for(let Yt of[-1,1])h(Lt,jt(Y+.1,.05,.012,.004),N,0,tt-.2,Yt*(X-.036));h(Lt,jt(.12,.08,.08,.012),d(i.preto),-Y/2+.1,tt-.18,-(X-.1));for(let Yt of[-1,1]){h(Lt,jt(Y+.16,.4,.03,.01),ht,0,tt,Yt*(X+.015));for(let b of[-.15,.15])h(Lt,jt(Y+.04,.02,.14,.006),ht,0,tt+b,Yt*(X+.1));for(let b of[-1,1])h(Lt,jt(.02,.32,.14,.006),ht,b*(Y/2+.01),tt,Yt*(X+.1));h(Lt,jt(Y+.04,.32,.02,.01),ht,0,tt,Yt*(X+.16)),Yt<0&&h(Lt,jt(Y+.02,.014,.14,.004),ht,0,tt,Yt*(X+.1)),h(Lt,jt(Y+.12,.38,.022,.01),ht,0,tt,Yt*(X+.181));for(let b=0;b<23;b++)for(let G of[-.16,.16]){let Q=-Y/2-.02+b*(Y+.04)/22;E(Lt,ot,Q,tt+G,Yt*(X+.03),v(Yt),x),E(Lt,ot,Q,tt+G,Yt*(X+.192),v(Yt),x)}}for(let Yt of[tt+.13,tt-.13])h(Lt,new xe(.022,.022,.03,6).rotateX(Math.PI/2),d(i.inox),Y/2-.1,Yt,X+.207);s.agua=[];let te=-Y/2+.25,re=Y/2-.25,le=-(X+.42);for(let[Yt,b,G]of[[-.08,_t,te],[.08,xt,re]]){let Q=tt+Yt,et=-(X+.192);h(Jt,Zs(.06,.16).rotateY(Math.PI/2),b,G,Q,et-.08);for(let Rt of[et-.16,et-.2])h(Jt,Zs(.085,.025).rotateY(Math.PI/2),b,G,Q,Rt);for(let Rt=0;Rt<8;Rt++){let Bt=Rt*Math.PI/4;E(Jt,ot,G+.068*Math.cos(Bt),Q+.068*Math.sin(Bt),et-.1725,v(1),x)}h(Jt,new Rn(new ln([y(G,Q,et-.21),y(G,Q,le+.14),y(G,Q-.035,le+.035),y(G,Q-.14,le),y(G,Ut.base+.02,le)],!1,"catmullrom",.5),96,.055,24,!1),b);let Z=.55+Yt*2;h(Jt,new xe(.1,.1,.025,32),b,G,Z-.045,le),h(Jt,new xe(.1,.1,.025,32),b,G,Z+.045,le),h(Jt,new xe(.078,.078,.065,32),d(i.ferroFundido),G,Z,le),h(Jt,jt(.04,.04,.05,.008),d(i.ferroFundido),G,Z,le-.1),h(Jt,jt(.03,.02,.24,.006),d(i.amarelo),G,Z+.03,le-.2),h(Jt,new xe(.1,.1,.02,32),b,G,Ut.base+.01,le),h(Jt,jt(.08,.5,.06,.01),N,G+.12,Ut.base+.25,le)}{let Yt=-(X+.1),b=X+.1,G=tt-.08,Q=tt+.08;for(let et of[-1.4,-.7,0,.7,1.4]){let Z=[y(te,Ut.base+.05,le),y(te,G-.14,le),y(te,G,le+.14),y(te,G,Yt),y(et,tt-.07,Yt),y(et,tt-.07,b),y(et,tt+.07,b),y(et,tt+.07,Yt),y(re,Q,Yt),y(re,Q,le+.14),y(re,Q-.14,le),y(re,Ut.base+.05,le)],Rt=new vr;for(let Bt=1;Bt<Z.length;Bt++)Rt.add(new _r(Z[Bt-1],Z[Bt]));s.agua.push(Rt)}}s.trocador={gx:Y,yb:tt,W:X},A("trocador",y(-1.1,H.y1-.04,0),"trocador"),A("tubos",y(-.35,tt+.105,0),"trocador"),A("aletasTroc",y(.55,tt-.05,0),"trocador"),A("caixaRetorno",y(-.9,tt+.1,X+.19),"trocador"),A("caixaEntrada",y(-.4,tt,-(X+.19)),"trocador"),A("entradaAgua",y(te,.55,le-.1),"agua"),A("saidaAgua",y(re,.71,le-.1),"agua"),A("bandeja",y(-Y/2+.4,tt-.21,0),"trocador"),A("chicana",y(Y/2+.05,H.y0+.2,0),"trocador")}{let H=l(i.pintura),X=w.z+.36,Y=new pi(Un([[0,.3],[.36,.3],[.36,-.52],[0,-.24]]),{depth:.4,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelOffset:-.008,bevelSegments:2});Y.translate(0,0,-.2),Y.rotateY(-Math.PI/2),h(M,Y,H,bt+.02,0,w.z),h(M,jt(.62,1.04,.26,.018),H,bt-.03,-.09,X+.13),h(M,jt(.56,.98,.022,.012),d(i.pinturaEsc),bt-.03,-.09,X+.27);for(let tt of[-.25,.19])for(let C=0;C<6;C++)E(M,d(i.eixoFosco),bt+tt,-.53+C*.176,X+.281,v(1),x);{let tt=Qa(.2,.13,(W,B,N)=>{W.fillStyle="#f2c200",W.fillRect(0,0,B,N),W.fillStyle="#111",W.fillRect(0,0,B,N*.06),W.fillRect(0,N*.94,B,N*.06),W.beginPath(),W.moveTo(B*.2,N*.62),W.lineTo(B*.31,N*.18),W.lineTo(B*.42,N*.62),W.closePath(),W.lineWidth=N*.05,W.strokeStyle="#111",W.stroke(),W.beginPath(),W.moveTo(B*.32,N*.25),W.lineTo(B*.27,N*.42),W.lineTo(B*.33,N*.42),W.lineTo(B*.29,N*.57),W.lineWidth=N*.035,W.stroke(),W.fillStyle="#111",W.textBaseline="middle",ls(W,"PERIGO",B*.5,N*.3,B*.45,N*.16,800),ls(W,"13,8 kV",B*.5,N*.52,B*.45,N*.12),ls(W,"Desligue antes de abrir",B*.08,N*.8,B*.84,N*.085,600)},{px:700}),C=De(tt.geo,l(tt.mat),"terminais");C.position.set(bt-.03,.2,X+.2825),C.userData.manter=!0,M.add(C)}h(M,jt(.56,.025,.22,.008),d(i.pinturaEsc),bt-.03,-.62,X+.13);for(let tt=0;tt<3;tt++){let C=bt-.2+tt*.17;h(M,new xe(.045,.045,.03,6),d(i.inox),C,-.645,X+.13),h(M,new xe(.036,.04,.06,20),d(i.inox),C,-.69,X+.13),h(M,new Rn(new ln([y(C,-.715,X+.13),y(C,-.9,X+.13),y(C+.02,-1.15,X+.1+tt*.02),y(C+.04,Ut.base+.02,X+.05+tt*.03)],!1,"centripetal"),48,.026,14),d(i.caboAT))}h(M,jt(.7,.02,.32,.004),d(i.base),bt-.02,Ut.base+.01,X+.1),A("caixa",y(bt-.03,-.22,X+.29),"terminais"),A("caboAT",y(bt-.2,-1,X+.14),"terminais")}for(let H of[-1,1])for(let X of[w.x0+.34,w.x1-.34])h(R,jt(.82,.05,.58,.006),d(i.base),X,Ut.base+.025,H*(w.z-.07));return kx(e),{raiz:e,giro:F,partes:n,corte:o,corteEixo:c,anim:s,ancoras:r,G:Ut,xa:mt,xd:ft,XF:z}}function kx(i){i.updateMatrixWorld(!0);let t=r=>{let a=r.parent;for(;a&&a!==i&&!a.userData.parte;)a=a.parent;return a||i},e=new Map,n=new fe,s=new fe;i.traverse(r=>{if(!r.isMesh||r.userData.manter||r.isInstancedMesh)return;let a=t(r),o=`${a.uuid}|${r.userData.parte}|${r.material.uuid}|${r.castShadow}`;e.has(o)||e.set(o,{g:a,lista:[]}),e.get(o).lista.push(r)});for(let{g:r,lista:a}of e.values()){if(a.length<2)continue;n.copy(r.matrixWorld).invert();let o=a.map(d=>{let h=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone();for(let f of Object.keys(h.attributes))["position","normal","uv"].includes(f)||h.deleteAttribute(f);if(h.attributes.uv||h.setAttribute("uv",new pe(new Float32Array(h.attributes.position.count*2),2)),s.multiplyMatrices(n,d.matrixWorld),h.applyMatrix4(s),s.determinant()<0){let f=h.attributes.position,g=h.attributes.normal;for(let x=0;x<f.count;x+=3)for(let m of[f,g,h.attributes.uv]){let p=[];for(let E=0;E<m.itemSize;E++)p.push(m.getComponent(x+1,E));for(let E=0;E<m.itemSize;E++)m.setComponent(x+1,E,m.getComponent(x+2,E)),m.setComponent(x+2,E,p[E])}}return h}),c=$a(o);if(!c)continue;let l=a[0],u=De(c,l.material,l.userData.parte);u.castShadow=l.castShadow,r.add(u);for(let d of a)d.parent.remove(d)}}var Xn=(i,t,e)=>Math.max(t,Math.min(e,i)),Cr=(i,t,e)=>i+(t-i)*e;var Su=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;var eo=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t});function Eu(i=1234567){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var xn=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Tu=i=>i*Math.PI/180;function wu(i,t,e){let n=new L;function s(){let l=n.copy(i.position).sub(t.target),u=Math.max(.2,l.length());return{alvo:t.target.clone(),dist:u,az:Math.atan2(l.z,l.x)*180/Math.PI,el:Math.asin(Xn(l.y/u,-1,1))*180/Math.PI,c:e.get()}}let r=l=>{let u=Tu(l.az),d=Tu(l.el);return new L(l.alvo.x+l.dist*Math.cos(d)*Math.cos(u),l.alvo.y+l.dist*Math.sin(d),l.alvo.z+l.dist*Math.cos(d)*Math.sin(u))},a=l=>typeof l=="function"?l():Array.isArray(l)?new L(...l):l;function o(l){t.target.copy(a(l.alvo)),i.position.copy(r({...l,alvo:a(l.alvo)})),l.c&&e.set(l.c[0],l.c[1])}function c(l,u,d){let h=u.az-l.az;for(;h>180;)h-=360;for(;h<-180;)h+=360;let f=l.c||e.get(),g=u.c||f;return{alvo:a(l.alvo).clone().lerp(a(u.alvo),d),dist:Math.exp(Cr(Math.log(l.dist),Math.log(u.dist),d)),az:l.az+h*d,el:Cr(l.el,u.el,d),c:[Cr(f[0],g[0],d),Cr(f[1],g[1],d)]}}return{estado:s,aplicar:o,misturar:c}}function Au(i,{reduce:t,resolver:e}){let n=[],s=0,r=!1,a=!1,o=null,c=0,l=-1;function u(h,f){let g=i.estado();n=[];let x=g;for(let m of h){let p=m.para||e(m.vista);n.push({...m,para:p,de:x}),x=p}t&&(n=n.map(m=>({...m,corte:!0}))),c=n.reduce((m,p)=>m+p.dur,0),s=0,r=!0,a=!1,o=f||null,l=-1}function d(h){if(!r||a)return null;s+=h;let f=0;for(let m=0;m<n.length;m++){let p=n[m];if(s<f+p.dur){m!==l&&(l=m,p.ini&&p.ini());let E=Xn((s-f)/p.dur,0,1),S=p.corte?1:p.suave===!1?E:Su(E);return i.aplicar(i.misturar(p.de,p.para,S)),{k:s/c,i:m}}f+=p.dur}let g=n[n.length-1];g&&i.aplicar(i.misturar(g.de,g.para,1)),r=!1;let x=o;return o=null,x&&x(),{k:1,i:n.length-1}}return{tocar:u,atualizar:d,parar(){r=!1,o=null},pausar(){r&&(a=!0)},continuar(){a=!1},get ativo(){return r},get pausado(){return a},get t(){return s},get dur(){return c},get idx(){return l}}}var Vx=`
varying vec3 vRelP;
float relHash(vec3 p) { p = fract(p * .3183099 + .1); p *= 17.; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float relRuido(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3. - 2. * f);
  return mix(mix(mix(relHash(i), relHash(i + vec3(1, 0, 0)), f.x), mix(relHash(i + vec3(0, 1, 0)), relHash(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(relHash(i + vec3(0, 0, 1)), relHash(i + vec3(1, 0, 1)), f.x), mix(relHash(i + vec3(0, 1, 1)), relHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
// sulco na divisa de cada per\xEDodo; some quando o per\xEDodo fica menor que o pixel (sem serrilhado)
float relFaixa(float c, float p, float larg) {
  float w = fwidth(c) / p, u = fract(c / p), d = min(u, 1. - u);
  return (1. - smoothstep(0., larg + w, d)) * (1. - smoothstep(.04, .16, w));
}
vec3 relNormal(vec3 n, float h, float faceDir) {
  vec3 dx = dFdx(-vViewPosition), dy = dFdy(-vViewPosition);
  vec3 sx = cross(dy, n), sy = cross(n, dx);
  float det = dot(dx, sx) * faceDir;
  vec3 g = sign(det) * (dFdx(h) * sx + dFdy(h) * sy);
  return normalize(abs(det) * n - g);
}
`,Hx={tinta:"float q = relRuido(P * E) * .65 + relRuido(P * E * 2.7) * .35; float h = F * q;",fundido:"float q = relRuido(P * E) * .55 + relRuido(P * E * 3.1) * .3 + relRuido(P * E * 9.3) * .15; float h = F * q;",lamina:"float q = relRuido(vec3(P.x * 45., P.y * 7., P.z * 7.)); float h = -F * relFaixa(P.x, E, .14);",camadas:"float r = length(P.yz); float q = relRuido(vec3(P.x * 4., r * 300., 0.)); float h = -F * relFaixa(r, E, .16);",torno:"float q = relRuido(vec3(P.x * 120., 0., 0.)); float h = -F * relFaixa(P.x, E, .35);"},Gx=`
uniform float uCorte;
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
#endif
`,Wx=`
  bool tampa = false; vec3 nTampaV = vec3(0., 0., 1.); vec3 pTampaV = vec3(0.);
  #if NUM_CLIPPING_PLANES > 0
  pTampaV = -vClipPosition;
  if (uCorte > .5 && !gl_FrontFacing) {
    vec3 Pv = -vClipPosition; float t0 = 0., t1 = 1.; int k = -1; bool vale = true;
    for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {
      vec4 pl = clippingPlanes[i]; float dc = pl.w, dp = dot(Pv, pl.xyz) + pl.w;
      if (dc >= 0. && dp >= 0.) vale = false;
      else if (dc < 0. && dp >= 0.) { float tt = dc / (dc - dp); if (tt < t1) { t1 = tt; k = i; } }
      else if (dc >= 0. && dp < 0.) t0 = max(t0, dc / (dc - dp));
    }
    if (vale && k >= 0 && t0 <= t1) {
      tampa = true; pTampaV = Pv * t1;
      for (int i = 0; i < NUM_CLIPPING_PLANES; i++) if (i == k) nTampaV = -clippingPlanes[i].xyz;
    }
  }
  #endif
  vec3 pTampaW = cameraPosition + (vec4(pTampaV, 0.) * viewMatrix).xyz;
  vec3 nTampaW = normalize((vec4(nTampaV, 0.) * viewMatrix).xyz);
  // hachura a 45\xB0 no pr\xF3prio plano, em metros (n\xE3o escorrega quando a c\xE2mera anda)
  float hU = dot(pTampaW, normalize(vec3(1.) - abs(nTampaW) + 1e-4)) / .028, hW = fwidth(hU);
  float hD = .5 - abs(fract(hU) - .5), hL = (1. - smoothstep(.11 - hW, .11 + hW, hD)) * (1. - smoothstep(.22, .45, hW));
`;function Ru(i,{corte:t,uCorte:e}){let n=i.userData&&i.userData.relevo;if(!n&&!t)return;let s=i.onBeforeCompile;i.onBeforeCompile=(a,o)=>{if(s&&s!==i.onBeforeCompile&&s(a,o),n&&(a.vertexShader=`varying vec3 vRelP;
`+a.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vRelP = (modelMatrix * vec4(transformed, 1.)).xyz;`),a.fragmentShader=a.fragmentShader.replace("void main() {",Vx+`
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 P = vRelP; const float E = ${n.e.toFixed(5)}, F = ${n.f.toExponential(4)};
        ${Hx[n.t]}
        diffuseColor.rgb *= 1. + (q - .5) * ${(n.cor??.05).toFixed(3)};`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = clamp(roughnessFactor + (q - .5) * ${(n.rug??.12).toFixed(3)}, .04, 1.);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (gl_FrontFacing) normal = relNormal(normal, h, 1.);`)),t){a.uniforms.uCorte=e;let c=he.lights_fragment_begin.replace("vDirectionalShadowCoord[ i ]","( tampa ? directionalShadowMatrix[ i ] * vec4( pTampaW + nTampaW * directionalLightShadows[ i ].shadowNormalBias, 1. ) : vDirectionalShadowCoord[ i ] )");a.fragmentShader=Gx+a.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+Wx).replace("#include <color_fragment>",`#include <color_fragment>
        if (tampa) diffuseColor.rgb *= ${i.userData.liquido?"1.08":"mix(.94, .64, hL)"};`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        if (tampa) { normal = normalize(nTampaV); nonPerturbedNormal = normal; }`).replace("#include <lights_fragment_begin>",c).replace("#include <opaque_fragment>",`#include <opaque_fragment>
  if (tampa) gl_FragColor.a = .995;`)}};let r=(n?`rel-${n.t}-${n.e}-${n.f}-${n.cor??""}-${n.rug??""}`:"")+(t?"-corte3"+(i.userData.liquido?"l":""):"");i.customProgramCacheKey=()=>r}function Cu(i,t,{leve:e,planos:n}){let s=Eu(97531),r=new L,a=new ee,o=(()=>{let Mt=document.createElement("canvas");Mt.width=Mt.height=64;let Tt=Mt.getContext("2d"),j=Tt.createRadialGradient(32,32,0,32,32,32);j.addColorStop(0,"rgba(255,255,255,1)"),j.addColorStop(.35,"rgba(255,255,255,.9)"),j.addColorStop(1,"rgba(255,255,255,0)"),Tt.fillStyle=j,Tt.fillRect(0,0,64,64);let at=new Ii(Mt);return at.colorSpace=Ke,at})(),c=(Mt,Tt,j,at)=>{let P=new Oe,gt=new Float32Array(Mt*3),lt=new Float32Array(Mt*3);P.setAttribute("position",new Qe(gt,3)),P.setAttribute("color",new Qe(lt,3));let dt=new gr({size:Tt,map:o,vertexColors:!0,transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1,toneMapped:!1});at&&(dt.clippingPlanes=n,dt.clipIntersection=!0);let vt=new Sa(P,dt);return vt.renderOrder=j,vt.visible=!1,vt.frustumCulled=!1,{o:vt,pos:gt,cr:lt,geo:P}},l=Ut.frame,u=Ut.nucleo,d=t.anim.trocador,h=[];{let Mt=(u-(Ut.pacotes-1)*Ut.duto)/Ut.pacotes;for(let Tt=1;Tt<Ut.pacotes;Tt++)h.push(-u/2+Tt*(Mt+Ut.duto)-Ut.duto/2)}let f=(Mt,Tt,j)=>new L(Mt,Tt*Math.cos(j),Tt*Math.sin(j)),g=[],x=e?56:130;for(let Mt=0;Mt<x;Mt++){let Tt=h[Math.floor(s()*h.length)]+(s()-.5)*.008,j=Math.abs(Tt)<.05?s()<.5?-1:1:Math.sign(Tt),at=s()*Math.PI*2,P=Math.cos(at),gt=Math.sin(at),lt=l.z-.08,dt=l.y0+.08,vt=Math.sign(gt)||1,Vt=Math.min(Math.abs(gt)>.001?lt/Math.abs(gt):9,P<0?-dt/-P:(l.y1-.06)/Math.max(P,.001)),ut=Xn(Tt*1.06+(s()-.5)*.14,-(Mn-.16),Mn-.16),R=[f(Tt,Ut.bore+.06,at),f(Tt,Ut.rExt+.05,at),f(Tt*1.02,Vt*.95,at)];P<.55&&(P<-.4&&R.push(new L(ut,dt+.05,vt*(lt-.1))),R.push(new L(ut,Math.max(-.2,Vt*P)+.25,vt*lt),new L(ut,.78,vt*(lt-.02))));let M=vt*Math.min(Math.abs(Vt*gt),l.z-.32)*(.45+.55*s());R.push(new L(ut,l.y1-.02,M),new L(ut*.97,l.y1+.14,M*.8),new L(ut*.95,d.yb,M*.7));let K=R.length-1,ct=j*(d.gx/2+.2+s()*.12),pt=at+(s()-.5)*.3;R.push(new L(ut*.95+j*.12,d.yb+.22,M*.7),new L(ct,d.yb+.24,M*.8),new L(ct+j*.04,l.y1+.04,M*.9),new L(ct+j*.06,.96,M),f(j*2.04,.82,pt),f(j*1.96,.6,pt),f(j*($s+.1),.44,pt),f(j*(mi+.012),.34,pt),f(j*(mi-.02),.56,pt),f(j*(Mn-.03),.585,pt),f(j*(u/2+.3),.77,pt),f(j*(u/2+.04),.7,pt),f(j*(u/2-.12),.657,pt),f((Tt+j*(u/2-.12))/2,.661,at));let ot=new ln(R,!0,"centripetal"),Ht=R.length;g.push({c:ot,a:(K-.2)/Ht,b:(K+.8)/Ht,h0:(Ht-4)/Ht})}let m=e?3600:1e4,p=c(m,.068,7,!0),E=[];for(let Mt=0;Mt<m;Mt++)E.push({c:Mt%g.length,u:s(),sp:.03+s()*.022,j:new L(s()-.5,s()-.5,s()-.5).multiplyScalar(.04)});i.add(p.o);let S=new ee(2854143),v=new ee(16726815);function V(Mt){for(let Tt=0;Tt<m;Tt++){let j=E[Tt],at=g[j.c];j.u=(j.u+Mt*j.sp)%1;let P=at.c.getPoint(j.u,r).add(j.j);p.pos[Tt*3]=P.x,p.pos[Tt*3+1]=P.y,p.pos[Tt*3+2]=P.z;let gt=j.u,lt=gt<at.a?1:gt<at.b?1-(gt-at.a)/(at.b-at.a):gt>at.h0?.6*(gt-at.h0)/(1-at.h0):0;a.copy(S).lerp(v,Xn(lt,0,1)),p.cr[Tt*3]=a.r,p.cr[Tt*3+1]=a.g,p.cr[Tt*3+2]=a.b}p.geo.attributes.position.needsUpdate=!0,p.geo.attributes.color.needsUpdate=!0}let y=170,A=t.anim.agua.length,w=c(y*A,.072,8,!1);i.add(w.o);let T=new ee(3116287),_=new ee(16730666),D=0;function q(Mt){D+=Mt*.045;for(let Tt=0;Tt<A;Tt++)for(let j=0;j<y;j++){let at=(j/y+D+Tt*.13)%1,P=t.anim.agua[Tt].getPointAt(at,r),gt=(Tt*y+j)*3;w.pos[gt]=P.x+t.partes.agua.position.x,w.pos[gt+1]=P.y+t.partes.agua.position.y,w.pos[gt+2]=P.z+t.partes.agua.position.z,a.copy(T).lerp(_,Xn((at-.3)/.4,0,1)),w.cr[gt]=a.r,w.cr[gt+1]=a.g,w.cr[gt+2]=a.b}w.geo.attributes.position.needsUpdate=!0,w.geo.attributes.color.needsUpdate=!0}let F=46,U=c(F*2,.042,8,!1);t.giro.add(U.o);let O=0;function z(Mt){O+=Mt*.16;for(let Tt=0;Tt<2;Tt++)for(let j=0;j<F;j++){let at=(j/F+O)%1,P=Tt?1-at:at,gt=t.anim.cabos[Tt].getPointAt(P,r),lt=(Tt*F+j)*3;U.pos[lt]=gt.x,U.pos[lt+1]=gt.y,U.pos[lt+2]=gt.z;let dt=Tt?[1,.85,.35]:[1,.35,.25];U.cr[lt]=dt[0],U.cr[lt+1]=dt[1],U.cr[lt+2]=dt[2]}U.geo.attributes.position.needsUpdate=!0,U.geo.attributes.color.needsUpdate=!0}let nt=72,$=new ks(.024,.12,12);$.rotateZ(-Math.PI/2);let st=new ba($,new cn({toneMapped:!1,depthTest:!1,transparent:!0,opacity:.95}),nt*3);st.material.clippingPlanes=n,st.material.clipIntersection=!0,st.visible=!1,st.renderOrder=9,st.frustumCulled=!1,i.add(st);let At=new fe,It=new tn,Et=new L,qt=new L(1,0,0),rt=new L,mt=new L;function Ft(Mt){let Tt=0;for(let j of[-.75,0,.75])for(let at=0;at<nt;at++){let P=at*2*Math.PI/nt,gt=Math.cos(Ut.polos/2*(P-Mt)),lt=Ut.bore-.008;rt.set(0,Math.cos(P),Math.sin(P)),gt<0&&rt.negate(),It.setFromUnitVectors(qt,rt);let dt=.35+.9*Math.abs(gt);Et.set(dt,dt,dt),At.compose(mt.set(j,lt*Math.cos(P),lt*Math.sin(P)),It,Et),st.setMatrixAt(Tt,At),a.setRGB(gt>=0?.95:.18,gt>=0?.3+.2*(1-gt):.45,gt>=0?.2:.95),st.setColorAt(Tt,a),Tt++}st.instanceMatrix.needsUpdate=!0,st.instanceColor&&(st.instanceColor.needsUpdate=!0)}let ft=new _n;ft.visible=!1,i.add(ft);let Nt=[],Wt=(Mt,Tt,j,at,P)=>{let gt=Tt.clone().normalize(),lt=new cn({color:at,toneMapped:!1,depthTest:!1,transparent:!0}),dt=Math.min(.16,j*.32),vt=new Re(new xe(.018,.018,j-dt,12),lt),Vt=new Re(new ks(.055,dt,16),lt);vt.position.y=(j-dt)/2,Vt.position.y=j-dt/2;let ut=new _n;return ut.add(vt,Vt),ut.position.copy(Mt),ut.quaternion.setFromUnitVectors(new L(0,1,0),gt),vt.renderOrder=Vt.renderOrder=10,ft.add(ut),P&&Nt.push({p:Mt.clone(),texto:P,cor:"#"+new ee(at).getHexString()}),ut};Wt(new L(-.3,1.4,0),new L(0,-1,0),.66,16757575,"Peso do rotor"),Wt(new L(.35,1.22,0),new L(0,-1,0),.48,12950527,"Atra\xE7\xE3o magn\xE9tica"),Wt(new L(Oi(1),-1.02,0),new L(0,1,0),.62,7329999,"Rea\xE7\xE3o no mancal LA"),Wt(new L(Oi(-1),-1.02,0),new L(0,1,0),.6,7329999,"Rea\xE7\xE3o no mancal LOA");{let Mt=[];for(let at=0;at<=40;at++){let P=-.3+at/40*Math.PI*1.4;Mt.push(new L(Se(On.L)+.14,.5*Math.cos(P),.5*Math.sin(P)))}let Tt=new Re(new Rn(new ln(Mt),40,.02,8),new cn({color:16765286,toneMapped:!1,depthTest:!1,transparent:!0}));Tt.renderOrder=10,ft.add(Tt),Nt.push({p:Mt[20].clone(),texto:"Torque na ponta de eixo",cor:"#ffd166"});let j=new Re(new ks(.06,.14,12),Tt.material);j.renderOrder=10,j.position.copy(Mt[40]),j.lookAt(Mt[40].clone().add(Mt[40].clone().sub(Mt[38]))),j.rotateX(Math.PI/2),ft.add(j)}return{ar:p.o,agua:w.o,corrente:U.o,fluxo:st,cargas:ft,rotulosCargas:Nt,atualizar(Mt,Tt){p.o.visible&&V(Mt),w.o.visible&&q(Mt),U.o.visible&&z(Mt),st.visible&&Ft(Tt)}}}var El=i=>i*Math.PI/180;function Pu(i){i.raiz.updateMatrixWorld(!0);let t=new Map,e=new L,n=s=>{let r=null,a=!1,o=s.userData.parte;for(let c=s;c;c=c.parent)!o&&c.userData.parte&&(o=c.userData.parte),!r&&us[c.name]&&(r=c.name),c===i.giro&&(a=!0);return{g:r,gira:a,parte:o}};return i.raiz.traverse(s=>{if(!s.isMesh||s.userData.sobre)return;let{g:r,gira:a,parte:o}=n(s);if(!o)return;let c=new pn,l=s.geometry.attributes.position,u=0,d=Math.max(1,Math.floor(l.count/4e3));for(let g=0;g<l.count;g+=d)e.fromBufferAttribute(l,g).applyMatrix4(s.matrixWorld),c.expandByPoint(e),a&&(u=Math.max(u,Math.hypot(e.y,e.z)));a&&(c.min.y=c.min.z=-u,c.max.y=c.max.z=u);let h=`${o==="excitatrizFixa"?"excitatriz":o}|${r||""}`;t.has(h)||t.set(h,{parte:o==="excitatrizFixa"?"excitatriz":o,g:r,caixa:new pn,pts:[]});let f=t.get(h);if(f.caixa.union(c),c.getSize(e).length()>.15)for(let g=0;g<8;g++)f.pts.push(new L(g&1?c.max.x:c.min.x,g&2?c.max.y:c.min.y,g&4?c.max.z:c.min.z));else f.pts.push(c.getCenter(new L))}),[...t.values()]}function Iu(i,t,e=0){let n=[],s=new L;for(let r of i)if(!(t&&!t.includes(r.parte))){r.g&&e?s.fromArray(us[r.g]).multiplyScalar(e):s.set(0,0,0);for(let a of r.pts)n.push(a.clone().add(s))}return n}function Du(i,t,e){let s=e.direita??i,r=e.card,a=e.meta,o=(a?a.y+a.h:0)+18*.6,c=[];return r?(c.push({x:r.x+r.w+18,y:18,w:s-18-(r.x+r.w+18),h:t-2*18}),c.push({x:18,y:o,w:s-2*18,h:r.y-18-o})):c.push({x:18,y:o,w:s-2*18,h:t-18-o}),c.filter(l=>l.w>120&&l.h>120)}function Xx(i,{az:t=40,el:e=18,folga:n=1.12},s,r,a,o){let c=El(s.fov),l=Math.tan(c/2)*o.h/a,u=Math.tan(c/2)*o.w/a,d=El(t),h=El(e),f=new L(Math.cos(h)*Math.cos(d),Math.sin(h),Math.cos(h)*Math.sin(d)),g=f.clone().negate(),x=new L().crossVectors(g,new L(0,1,0)).normalize(),m=new L().crossVectors(x,g),p=new pn().setFromPoints(i).getCenter(new L),E=new L,S=1;for(let v=0;v<5;v++){S=.5;for(let T of i){E.subVectors(T,p);let _=E.dot(x),D=E.dot(m),q=E.dot(f);S=Math.max(S,q+Math.abs(_)*n/u,q+Math.abs(D)*n/l)}let V=1/0,y=-1/0,A=1/0,w=-1/0;for(let T of i){E.subVectors(T,p);let _=Math.max(.1,S-E.dot(f)),D=E.dot(x)/_,q=E.dot(m)/_;V=Math.min(V,D),y=Math.max(y,D),A=Math.min(A,q),w=Math.max(w,q)}p.addScaledVector(x,(V+y)/2*S*.9).addScaledVector(m,(A+w)/2*S*.9)}return{alvo:p,dist:S,az:t,el:e,c:[(o.x+o.w/2)/r,(o.y+o.h/2)/a]}}function Lu(i,t,e,n,s,r){let a=null;for(let o of r){let c=Xx(i,t,e,n,s,o);(!a||c.dist<a.dist)&&(a=c,a.area=o)}return a}var Uu='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',Nu='"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',Ou=(i,t)=>{let e=new ee(i);return`rgba(${Math.round(e.r*255)},${Math.round(e.g*255)},${Math.round(e.b*255)},${t})`},Tl=(i,t,e,n,s,r=6)=>i<s.x+s.w+r&&i+e+r>s.x&&t<s.y+s.h+r&&t+n+r>s.y;function Fu(i,{reduce:t}){let e=i.getContext("2d"),n=new Map,s=new L,r=1,a=1,o=1,c=performance.now(),l=!1;function u(x,m){o=Math.min(devicePixelRatio||1,2),r=x,a=m,i.width=Math.round(x*o),i.height=Math.round(m*o),i.style.width=x+"px",i.style.height=m+"px"}function d(x,m,p,E,S,v,V,y,A){e.globalAlpha=v,e.fillStyle=A?"rgba(4,16,24,.94)":"rgba(6,20,30,.86)",e.beginPath(),e.roundRect?e.roundRect(x,m,p,E,7):e.rect(x,m,p,E),e.fill(),e.strokeStyle=Ou(S,A?.8:.45),e.lineWidth=1,e.stroke(),e.fillStyle=S,e.fillRect(x+7,m+7,3,E-14),e.fillStyle="#eaf3f5",e.font=`600 ${A?12.5:11.8}px ${Uu}`,e.fillText(V,x+16,m+(y?15.5:E/2+4)),y&&(e.fillStyle="rgba(200,220,226,.78)",e.font=`500 10px ${Nu}`,e.fillText(y,x+16,m+30)),e.globalAlpha=1}function h(x,m){let{L:p,x0:E,y0:S,x:v,y:V,tw:y,th:A}=x,w=n.get(p.chave)??0,T=t||l?1:Math.min(1,w+m);n.set(p.chave,T);let _=T*(p.visivel??1);if(_<.02)return;let D=v+y/2>=E,q=D?v:v+y,F=V+A/2,U=q+(D?-12:12);e.globalAlpha=_;for(let[O,z]of[["rgba(4,14,22,.45)",3],[Ou(p.cor,.95),1.2]])e.strokeStyle=O,e.lineWidth=z,e.beginPath(),e.moveTo(E,S),e.lineTo(U,F),e.lineTo(q,F),e.stroke();e.beginPath(),e.arc(E,S,4.6,0,6.283),e.fillStyle="rgba(4,14,22,.8)",e.fill(),e.beginPath(),e.arc(E,S,2.8,0,6.283),e.fillStyle=p.cor,e.fill(),e.globalAlpha=1,d(v,V,y,A,p.cor,_,p.texto,p.sub,p.forte)}function f(x,m,p,E,{limite:S=12,direita:v=r}={}){let V=performance.now(),y=Math.min(1,(V-c)/260);c=V,e.setTransform(o,0,0,o,0,0),e.clearRect(0,0,r,a),e.textBaseline="alphabetic";let A=new Set,w=[];for(let U of x){if(s.copy(U.pos).project(m),s.z>1||s.z<-1)continue;let O=(s.x+1)/2*r,z=(1-s.y)/2*a;if(O<4||z<4||O>r-4||z>a-4)continue;e.font=`600 ${U.forte?12.5:11.8}px ${Uu}`;let nt=e.measureText(U.texto).width;U.sub&&(e.font=`500 10px ${Nu}`,nt=Math.max(nt,e.measureText(U.sub).width)),w.push({L:U,x0:O,y0:z,tw:nt+26,th:U.sub?38:25})}let T=[],_=(U,O,z,nt)=>U<8||O<8||U+z>r-8||O+nt>a-8||p.some($=>Tl(U,O,z,nt,$))||T.some($=>Tl(U,O,z,nt,$,5)),D=U=>{T.push({x:U.x,y:U.y,w:U.tw,h:U.th}),A.add(U.L.chave),h(U,y)},q=U=>{let{x0:O,y0:z,tw:nt,th:$}=U,st=O>=E[0]?1:-1,At=z<=E[1]?-1:1,It=(qt,rt)=>qt>0?rt:-nt-rt,Et=(qt,rt)=>qt<0?-$-rt:rt;for(let[qt,rt]of[[It(st,26),Et(At,26)],[It(st,44),Et(At,62)],[It(st,30),-$/2],[It(-st,26),Et(At,26)],[It(st,26),Et(-At,18)],[-nt/2,Et(At,60)],[It(-st,44),Et(At,62)],[It(st,110),Et(At,40)]])if(!_(O+qt,z+rt,nt,$))return U.x=O+qt,U.y=z+rt,!0;return!1};for(let U of w.filter(O=>O.L.forte))q(U)&&D(U);let F=w.filter(U=>!U.L.forte).slice(0,S);for(let U of[1,-1]){let O=F.filter(Et=>Et.x0>=E[0]==U>0).sort((Et,qt)=>Et.y0-qt.y0);if(!O.length)continue;let z=Math.max(...O.map(Et=>Et.tw)),nt=O.map(Et=>Et.x0),$=Math.min(r,v)-10,st=U>0?Math.max(...nt)+38:Math.min(...nt)-38-z;st+z>$&&(st=Math.min(...nt)-38-z),st<10&&(st=Math.max(...nt)+38),st=Math.max(10,Math.min($-z,st));let At=-1e9;for(let Et of O){let qt=Math.max(Et.y0-Et.th/2,At+7,10);for(let rt=0;rt<6;rt++){let mt=p.find(Ft=>Tl(st,qt,z,Et.th,Ft,4));if(!mt)break;qt=mt.y+mt.h+8}Et.y=qt,At=qt+Et.th}let It=a-10;for(let Et=O.length-1;Et>=0;Et--){let qt=O[Et];qt.y+qt.th>It&&(qt.y=It-qt.th),It=qt.y-7}for(let Et of O)Et.x=st+(st+z/2<Et.x0?z-Et.tw:0),(!_(Et.x,Et.y,Et.tw,Et.th)||q(Et))&&D(Et)}for(let U of[...n.keys()])A.has(U)||n.delete(U)}function g(){e.setTransform(o,0,0,o,0,0),e.clearRect(0,0,r,a),n.clear()}return{medir:u,desenhar:f,limpar:g,set instantaneo(x){l=x}}}var qx={sistemas:'<path d="M8 2 2 5l6 3 6-3-6-3Z"/><path d="m2 8 6 3 6-3"/><path d="m2 11 6 3 6-3"/>',pecas:'<path d="M6 4h8M6 8h8M6 12h8"/><path d="M2.4 4h.2M2.4 8h.2M2.4 12h.2"/>',corte:'<circle cx="4" cy="12" r="2"/><circle cx="4" cy="4" r="2"/><path d="M5.6 5.3 14 12M5.6 10.7 14 4"/>',vistas:'<path d="M2 5.2h2.6L6 3.6h4l1.4 1.6H14V13H2Z"/><circle cx="8" cy="8.9" r="2.3"/>',ajuda:'<circle cx="8" cy="8" r="6"/><path d="M6.3 6.3a1.8 1.8 0 1 1 2.6 1.6c-.6.3-.9.7-.9 1.3v.3"/><path d="M8 11.5v.2"/>',fechar:'<path d="m4 4 8 8M12 4l-8 8"/>',alvo:'<circle cx="8" cy="8" r="5.2"/><circle cx="8" cy="8" r="1.6"/>',olho:'<path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8Z"/><circle cx="8" cy="8" r="1.9"/>',busca:'<circle cx="7" cy="7" r="4.4"/><path d="m10.4 10.4 3.4 3.4"/>',seta:'<path d="m6 3.5 4.5 4.5L6 12.5"/>',zoom:'<circle cx="7" cy="7" r="4.6"/><path d="M7 5v4M5 7h4M10.4 10.4l3.4 3.4"/>'},qn=i=>`<svg viewBox="0 0 16 16" aria-hidden="true">${qx[i]}</svg>`,zu=[["sistemas","Sistemas"],["pecas","Pe\xE7as"],["corte","Corte e fluxos"],["vistas","Vistas"],["ajuda","Ajuda"]],Yx=[["geral","Geral","tr\xEAs quartos, lado LA"],["frente","Lateral","face da caixa de liga\xE7\xE3o"],["la","Ponta LA","ponta de eixo e mancal"],["loa","Ponta LOA","excitatriz e mancal"],["cima","De cima","trocador e carca\xE7a"],["tras","Lado da \xE1gua","bocais e tubos do trocador"],["mancal","Mancal LA","de perto"],["excitatriz","Excitatriz","de perto"]];function Bu(i,t){let{SISTEMAS:e,PARTES:n,api:s,movel:r}=t,a=(F,U,O)=>{let z=document.createElement(F);return U&&(z.className=U),O!=null&&(z.innerHTML=O),z},o=a("div","m3-meta",`<p class="m3-kicker">Gerador s\xEDncrono \xB7 modelo de refer\xEAncia</p>
    <dl><div><dt>Polos</dt><dd>4</dd></div><div><dt>Rota\xE7\xE3o</dt><dd>1.800<small>rpm</small></dd></div><div><dt>Tens\xE3o</dt><dd>13,8<small>kV</small></dd></div><div><dt>Frequ\xEAncia</dt><dd>60<small>Hz</small></dd></div></dl>`);o.setAttribute("aria-hidden","true");let c=a("div","m3-trilho");c.setAttribute("role","toolbar"),c.setAttribute("aria-label","Explorar o gerador"),c.innerHTML=zu.map(([F,U])=>`<button type="button" data-painel="${F}" aria-pressed="false" aria-label="${U}" title="${U}">${qn(F)}<span>${U}</span></button>`).join("");let l=a("section","m3-gaveta");l.hidden=!0,l.setAttribute("aria-label","Painel"),l.innerHTML=`<div class="m3-g-topo"><p class="m3-g-tit"></p><button type="button" class="m3-g-x" aria-label="Fechar painel">${qn("fechar")}</button></div><div class="m3-g-corpo"></div>`;let u=l.querySelector(".m3-g-tit"),d=l.querySelector(".m3-g-corpo"),h=a("div","m3-legenda");h.hidden=!0,h.setAttribute("aria-hidden","true");let f=a("div","m3-escala","<i></i><span></span>");f.setAttribute("aria-hidden","true");let g=a("p","m3-aviso");g.hidden=!0,g.setAttribute("aria-live","polite");let x=a("button","m3-explorar",`${qn("sistemas")}<span>Explorar</span>`);x.type="button";let m=i.querySelector("#m3-tip");i.append(o,c,l,h,f,g,x);let p=null,E=null,S=0,v=F=>'<span class="m3-sw" aria-hidden="true"></span>',V=(F,U,O,z)=>`<button type="button" class="m3-opcao" data-op="${F}" aria-pressed="${z}"><span class="m3-txt"><b>${U}</b>${O?`<small>${O}</small>`:""}</span>${v(z)}</button>`;function y(F){let U=s.estado();return F==="sistemas"?`<div class="m3-camadas">${e.map(O=>`<div class="m3-sis-l"><button type="button" class="m3-sis" data-sis="${O.id}" aria-pressed="${s.sistemaVisivel(O.id)}"><i style="--c:${O.cor}"></i><span class="m3-txt"><b>${xn(O.nome)}</b><small>${xn(O.sub)}</small></span>${v()}</button><button type="button" class="m3-iso${s.isolado()===O.id?" on":""}" data-iso="${O.id}" aria-label="Isolar ${xn(O.nome)}" title="Isolar">${qn("alvo")}</button></div>`).join("")}</div>
      <div class="m3-acoes-g"><button type="button" data-ac="tudo">${qn("olho")}Mostrar todos os sistemas</button><button type="button" data-ac="explodir" aria-pressed="${U.explodir>.5}">${qn("zoom")}${U.explodir>.5?"Montar de novo":"Vista explodida"}</button></div>`:F==="pecas"?`<label class="m3-busca">${qn("busca")}<input type="search" placeholder="Procurar pe\xE7a" aria-label="Procurar pe\xE7a"></label><div class="m3-lista">${e.map(O=>{let z=O.partes.filter(nt=>n[nt]);return`<p class="m3-grupo" style="--c:${O.cor}">${xn(O.nome)}</p>${z.map(nt=>`<button type="button" data-peca="${nt}" data-busca="${xn((n[nt][0]+" "+O.nome).toLowerCase())}"><i style="--c:${O.cor}"></i><span>${xn(n[nt][0])}${n[nt][3]?`<small>${xn(n[nt][3])}</small>`:""}</span>${qn("seta")}</button>`).join("")}`}).join("")}</div>`:F==="corte"?`<p class="m3-grupo">Corte das partes fixas</p><div class="m3-segc" role="group" aria-label="Corte">${[["nenhum","Sem corte"],["meio","Meio"],["quarto","Um quarto"]].map(([O,z])=>`<button type="button" data-corte="${O}" aria-pressed="${U.corte===O}">${z}</button>`).join("")}</div>
      ${V("janela","Janela no eixo","mostra os cabos do campo no furo central",U.janela)}
      <p class="m3-grupo">Fluxos</p>${V("ar","Ar de refrigera\xE7\xE3o","circuito fechado com o trocador",U.ar)}${V("agua","\xC1gua do trocador","entrada fria, sa\xEDda quente",U.agua)}${V("corrente","Corrente do campo","da ponte de diodos \xE0s bobinas",U.corrente)}${V("fluxo","Fluxo no entreferro","norte para fora, sul para dentro",U.fluxo)}${V("cargas","Cargas no eixo","peso, atra\xE7\xE3o, rea\xE7\xF5es e torque",U.cargas)}
      <p class="m3-grupo">Cores e r\xF3tulos</p>${V("fases","Fases U, V e W","enrolamento da armadura",U.fases)}${V("ns","Polos norte e sul","bobinas de campo",U.ns)}${V("rotulos","R\xF3tulos","nomes das pe\xE7as na cena",s.rotulos())}`:F==="vistas"?`<div class="m3-vistas">${Yx.map(([O,z,nt])=>`<button type="button" data-vista="${O}"><b>${z}</b><small>${nt}</small></button>`).join("")}</div>`:F==="ajuda"?`<div class="m3-ajuda"><b>Mouse</b><p>Arraste para girar, bot\xE3o direito ou Shift + arraste para deslocar e <kbd>Ctrl</kbd> + rolagem para aproximar (ou clique na cena e role). Clique numa pe\xE7a para abrir a ficha dela; duplo clique aproxima.</p>
      <b>Teclado</b><p><kbd>1</kbd>\u2013<kbd>8</kbd> cap\xEDtulos \xB7 <kbd>\u2190</kbd> <kbd>\u2192</kbd> anterior e pr\xF3ximo \xB7 <kbd>Espa\xE7o</kbd> tour \xB7 <kbd>X</kbd> corte \xB7 <kbd>E</kbd> vista explodida \xB7 <kbd>L</kbd> r\xF3tulos \xB7 <kbd>F</kbd> tela cheia \xB7 <kbd>Esc</kbd> fecha o painel</p>
      <b>Tour e explora\xE7\xE3o</b><p>O tour escolhe o corte, os fluxos e o enquadramento de cada cap\xEDtulo. Ao mexer na cena ou no painel, o tour para e o que voc\xEA ligar fica valendo at\xE9 o pr\xF3ximo cap\xEDtulo.</p></div>`:""}function A(F){let[U,O,z,nt]=n[F],$=e.find(st=>st.partes.includes(F));return`<div class="m3-insp"><header><i style="--c:${$?$.cor:"#fff"}"></i><div><small>${xn($?$.nome:"")}</small><h4>${xn(U)}</h4></div></header><p>${xn(O)}</p>
      <div class="m3-insp-acoes"><button type="button" class="m3-focar" data-ac="aproximar">${qn("zoom")}Aproximar</button><button type="button" class="m3-sec" data-ac="isolar">${qn("alvo")}Isolar</button><button type="button" class="m3-sec" data-ac="ocultar">${qn("olho")}Ocultar</button></div>
      ${z?`<a class="m3-modulo" href="${z}">Abrir ${xn(nt)} \u2192</a>`:""}</div>`}function w(F,{foco:U=!1}={}){p=F,E=null,c.querySelectorAll("[data-painel]").forEach(O=>O.setAttribute("aria-pressed",String(O.dataset.painel===F))),u.textContent=(zu.find(O=>O[0]===F)||[0,""])[1],d.innerHTML=y(F),l.hidden=!1,requestAnimationFrame(()=>l.classList.add("on")),i.classList.add("m3-gaveta-on"),U&&l.querySelector("input,button:not(.m3-g-x)")?.focus(),t.aoMudarLayout?.()}function T(F){n[F]&&(p="insp",E=F,c.querySelectorAll("[data-painel]").forEach(U=>U.setAttribute("aria-pressed","false")),u.textContent="Pe\xE7a",d.innerHTML=A(F),l.hidden=!1,requestAnimationFrame(()=>l.classList.add("on")),i.classList.add("m3-gaveta-on"),t.aoMudarLayout?.())}function _(){p&&(p=null,E=null,l.classList.remove("on"),l.hidden=!0,i.classList.remove("m3-gaveta-on"),c.querySelectorAll("[data-painel]").forEach(F=>F.setAttribute("aria-pressed","false")),t.aoFechar?.(),t.aoMudarLayout?.())}function D(){if(p&&p!=="insp"&&p!=="pecas"){let F=d.scrollTop;d.innerHTML=y(p),d.scrollTop=F}q()}function q(){let F=s.estado();c.querySelector('[data-painel="sistemas"]').classList.toggle("ativo",!!s.isolado()||e.some(U=>!s.sistemaVisivel(U.id))||F.explodir>.5),c.querySelector('[data-painel="corte"]').classList.toggle("ativo",F.corte!=="nenhum"||F.ar||F.agua||F.corrente||F.fluxo||F.cargas)}return c.addEventListener("click",F=>{let U=F.target.closest("[data-painel]");U&&(p===U.dataset.painel?_():w(U.dataset.painel))}),x.addEventListener("click",()=>p?_():w("sistemas")),l.querySelector(".m3-g-x").addEventListener("click",_),d.addEventListener("input",F=>{if(F.target.type!=="search")return;let U=F.target.value.trim().toLowerCase();d.querySelectorAll("[data-peca]").forEach(O=>{O.hidden=!!U&&!O.dataset.busca.includes(U)}),d.querySelectorAll(".m3-grupo").forEach(O=>{let z=O.nextElementSibling,nt=!1;for(;z&&!z.classList.contains("m3-grupo");)z.hidden||(nt=!0),z=z.nextElementSibling;O.hidden=!nt})}),d.addEventListener("click",F=>{let U=F.target.closest("button");if(!U)return;if(U.dataset.sis){s.alternarSistema(U.dataset.sis),D();return}if(U.dataset.iso){s.isolarSistema(s.isolado()===U.dataset.iso?null:U.dataset.iso),D();return}if(U.dataset.peca){s.selecionarParte(U.dataset.peca,{voar:!0});return}if(U.dataset.corte){s.setCorte(U.dataset.corte),D();return}if(U.dataset.op){let z=U.dataset.op,nt=U.getAttribute("aria-pressed")!=="true";z==="rotulos"?s.setRotulos(nt):z==="janela"?s.setJanela(nt):s.setFlag(z,nt),D();return}if(U.dataset.vista){s.irVista(U.dataset.vista),r()&&_();return}let O=U.dataset.ac;O&&(O==="tudo"?(s.mostrarTudo(),D()):O==="explodir"?(s.explodir(s.estado().explodir<.5),D()):E&&O==="aproximar"?s.aproximar(E):E&&O==="isolar"?s.isolarParte(E):E&&O==="ocultar"&&(s.ocultarParte(E),_()))}),{abrir:w,abrirInspetor:T,fechar:_,sincronizar:D,get painel(){return p},get selecionada(){return E},blocos(){let F=i.getBoundingClientRect(),U=Et=>{if(!Et||Et.hidden||!Et.offsetParent&&getComputedStyle(Et).position!=="fixed")return null;let qt=Et.getBoundingClientRect();return qt.width&&qt.height?{x:qt.left-F.left,y:qt.top-F.top,w:qt.width,h:qt.height}:null},O=U(i.querySelector("#m3-card")),z=U(o),nt=U(c),$=p?U(l):null,st=U(h),At=U(f),It=U(x);return{card:O,meta:z,trilho:nt,gaveta:$,direita:$?$.x-10:nt?nt.x-6:F.width,lista:[O,z,nt,$,st,At,It].filter(Boolean)}},legenda(F){h.hidden=!F.length,h.innerHTML=F.map(([U,O])=>`<span><i style="background:${O}"></i>${xn(U)}</span>`).join("")},escala(F,U){f.querySelector("i").style.width=F.toFixed(0)+"px",f.querySelector("span").textContent=U},dica(F,U,O,z,nt){m.innerHTML=`<i style="--c:${nt}"></i><b>${xn(F)}</b>${U?`<small>${xn(U)}</small>`:""}`,m.hidden=!1;let $=m.offsetWidth,st=m.offsetHeight,At=i.clientWidth,It=i.clientHeight;m.style.left=Math.max(8,Math.min(At-$-8,O+16))+"px",m.style.top=Math.max(8,Math.min(It-st-8,z+18))+"px"},semDica(){m.hidden=!0},aviso(F,U=1600){g.textContent=F,g.hidden=!1,g.classList.add("on"),clearTimeout(S),S=setTimeout(()=>{g.classList.remove("on"),setTimeout(()=>{g.hidden=!0},250)},U)},ativos:q}}var ni=["01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],Pr=["02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],Ir=["03-termica.html","03 \xB7 T\xE9rmica"],Zx=["04-eixos.html","04 \xB7 Eixos"],Fi={carcaca:["Carca\xE7a","Estrutura soldada em chapa: paredes com nervuras e tampas de inspe\xE7\xE3o, placas das pontas com olhais de i\xE7amento e almas internas que seguram o n\xFAcleo. Os quatro p\xE9s levam o peso e o torque de rea\xE7\xE3o para a funda\xE7\xE3o.",null,null],escudoLA:["Escudo LA","Disco abaulado aparafusado na placa da ponta, com nervuras radiais. O cubo rebaixado recebe o flange do mancal e deixa o mancal mais perto do n\xFAcleo.",...Pr],escudoLOA:["Escudo LOA","Igual ao LA; al\xE9m do mancal, segura o estator da excitatriz pelos quatro bra\xE7os.",...Pr],base:["Chapas de assentamento","Chapas niveladas sob os p\xE9s, chumbadas na funda\xE7\xE3o de concreto.",null,null],defletor:["Defletor","Anel guia em volta das pontas das p\xE1s, com bocal de entrada, e a chapa que sobe at\xE9 a carca\xE7a: separa a c\xE2mara de entrada do ar frio, junto do escudo, da c\xE2mara das cabe\xE7as de bobina.",...Ir],trocador:["Trocador ar\u2013\xE1gua","Uma unidade sobre a carca\xE7a, com tubos aletados transversais ao eixo: o ar quente sobe pelo meio, atravessa o feixe e volta frio pelas pontas.",...Ir],agua:["\xC1gua de resfriamento","Entra fria pelo bocal de baixo, na ponta LOA, passa pelas fileiras de baixo, volta na caixa de retorno e sai quente pelas de cima e pelo bocal de cima, na ponta LA.",...Ir],estator:["N\xFAcleo do estator","Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre os pacotes, por onde o ar sai quente.",...ni],enrolamento:["Enrolamento da armadura","Bobinas de dupla camada nas ranhuras, ligadas em tr\xEAs fases. As cabe\xE7as ficam fora do n\xFAcleo, amarradas em an\xE9is.",...ni],saidas:["Sa\xEDdas das fases","Os tr\xEAs cabos das fases U, V e W deixam as cabe\xE7as de bobina da ponta LOA por baixo e entram na caixa de liga\xE7\xE3o, na lateral.",...ni],terminais:["Caixa de liga\xE7\xE3o","Recebe os tr\xEAs cabos das fases nos isoladores e os cabos de alta tens\xE3o que descem para a instala\xE7\xE3o, com a placa de perigo na tampa.",...ni],rotor:["Rotor de polos salientes","Coroa laminada com os polos e as sapatas. A sapata tem o arco exc\xEAntrico que deixa o entreferro maior nas pontas e a tens\xE3o mais senoidal.",...ni],campo:["Bobinas de campo","Cobre de chapa em volta do corpo de cada polo, em corrente cont\xEDnua; ligadas em s\xE9rie, com a polaridade alternando de polo para polo.",...ni],amortecedor:["Gaiola amortecedora","Barras de lat\xE3o na sapata ligadas por an\xE9is nas pontas: amortecem oscila\xE7\xF5es e ajudam nos transit\xF3rios.",...ni],eixo:["Eixo do rotor","Perfil escalonado: assentos do pacote, dos ventiladores e da excitatriz, colos dos mancais e ponta acoplada, com furo central para os cabos do campo.",...Zx],acoplamento:["Ponta de eixo e chaveta","Ponta LA com a chaveta no rasgo: \xE9 por ela que o acoplamento da m\xE1quina acionadora transmite o torque.",...Pr],ventLA:["Ventilador LA","Radial, no assento logo depois das cabe\xE7as de bobina, dentro do anel guia do defletor: puxa o ar frio da c\xE2mara de entrada e o empurra pelas cabe\xE7as, pelo entreferro e entre os polos.",...Ir],ventLOA:["Ventilador LOA","Igual ao LA, na ponta oposta; os dois juntos d\xE3o a vaz\xE3o do circuito de ar.",...Ir],mancalLA:["Mancal LA","Mancal de deslizamento de flange, preso no cubo do escudo: caixa bipartida de ferro fundido com domo e c\xE1rter aletados, casquilho de assento esf\xE9rico com metal patente, anel de \xF3leo solto, veda\xE7\xF5es de labirinto, visor de n\xEDvel e sensor de temperatura.",...Pr],mancalLOA:["Mancal LOA","Igual ao LA, isolado do escudo para cortar a corrente de eixo; fica entre o ventilador LOA e a excitatriz.",...Pr],excitatriz:["Excitatriz sem escovas","\xDAltima pe\xE7a do rotor na ponta LOA, \xE0 mostra: estator de campo fixo, preso no escudo por quatro bra\xE7os, e armadura girante, que gera a corrente alternada da excita\xE7\xE3o.",...ni],diodos:["Ponte de diodos girante","Recebe as tr\xEAs fases da armadura da excitatriz, retifica e entrega corrente cont\xEDnua ao campo pelos dois cabos, + e \u2212; o varistor protege os diodos.",...ni],cabos:["Cabos do campo","Dois cabos de corrente cont\xEDnua, + e \u2212, saem lado a lado da ponte de diodos, entram pelo furo central na ponta do eixo, correm por dentro dele e sobem por um furo radial no pacote at\xE9 as bobinas de campo.",...ni]};var Ze=i=>document.getElementById(i),Ye=Ze("m3-stage"),bn=Ze("m3-canvas"),$x=()=>{try{return!!(window.WebGL2RenderingContext&&document.createElement("canvas").getContext("webgl2"))}catch{return!1}},Fn={voltage:13800,frequency:60,poles:4,rpm:1800},Yn=(i,t,e)=>new L(i,t,e);function Jx(){let i=new URLSearchParams(location.search).get("m3"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=i==="leve"?!0:i==="alta"?!1:matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||8)<=4,n=()=>matchMedia("(max-width: 720px)").matches,s=new Ma({canvas:bn,antialias:!0,alpha:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),s.outputColorSpace=Ke,s.toneMapping=rl,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=il,s.localClippingEnabled=!0,s.setClearColor(0,0);let r=new pr;r.environment=Kx(s),r.environmentIntensity=1;let a=new dn(30,1,.05,120),o=new Hs(16774374,2.1);o.position.set(3.4,8.5,6),o.castShadow=!0,Object.assign(o.shadow.camera,{left:-5.6,right:5.6,top:5,bottom:-5,near:2,far:24}),o.shadow.mapSize.set(e?1024:4096,e?1024:4096),o.shadow.bias=-25e-5,o.shadow.normalBias=.014,r.add(o);let c=new Hs(14411519,.55);c.position.set(-6,2.5,4),r.add(c);let l=new Hs(16777215,.9);l.position.set(-2.5,4.5,-7),r.add(l);let u=new Re(new Qn(80,80),new Ia({color:727074,opacity:.28}));u.rotation.x=-Math.PI/2,u.position.y=Ut.base,u.receiveShadow=!0,r.add(u);let d=(()=>{let I=document.createElement("canvas");I.width=I.height=256;let k=I.getContext("2d"),wt=k.createRadialGradient(128,128,0,128,128,128);wt.addColorStop(0,"rgba(0,0,0,.6)"),wt.addColorStop(.5,"rgba(0,0,0,.28)"),wt.addColorStop(1,"rgba(0,0,0,0)"),k.fillStyle=wt,k.fillRect(0,0,256,256);let St=new Re(new Qn(8.6,4.4),new cn({map:new Ii(I),transparent:!0,depthWrite:!1,opacity:.75}));return St.rotation.x=-Math.PI/2,St.position.set(0,Ut.base+.003,0),St.renderOrder=-1,r.add(St),St})(),h=Mu(),f=bu(h,{leve:e});r.add(f.raiz);let g=[new je(Yn(0,0,-1),1e3),new je(Yn(0,-1,0),-1e3)],x=[new je(Yn(0,0,-1),1e3),new je(Yn(0,-1,0),0),new je(Yn(-1,0,0),0),new je(Yn(1,0,0),0)],m={value:0},p=(I,k)=>{I.side=Tn,I.clippingPlanes=k,I.clipIntersection=!0,I.clipShadows=!0},E=[h.faseU,h.faseV,h.faseW].map(I=>{let k=I.clone();return f.corte.push(k),k});for(let I of f.corte)p(I,g);for(let I of f.corteEixo)p(I,x);let S=I=>f.corte.includes(I)?1:f.corteEixo.includes(I)?2:0;{let I=new Set,k=wt=>{I.has(wt)||(I.add(wt),Ru(wt,{corte:S(wt)>0,uCorte:m}))};f.raiz.traverse(wt=>{wt.isMesh&&[].concat(wt.material).forEach(k)}),[...E,h.faseU,h.faseV,h.faseW,h.norte,h.sul].forEach(k)}let v=`#include <clipping_planes_pars_vertex>
    varying vec3 vN; varying vec3 vV;
    void main() { vec4 mvPosition = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mvPosition.xyz; gl_Position = projectionMatrix * mvPosition;
    #include <clipping_planes_vertex>
    }`,V=new ke({uniforms:{cor:{value:new ee(8230826)}},transparent:!0,depthWrite:!1,clipping:!0,clippingPlanes:g,clipIntersection:!0,vertexShader:`#include <common>
`+v,fragmentShader:`#include <common>
      #include <clipping_planes_pars_fragment>
      uniform vec3 cor; varying vec3 vN; varying vec3 vV;
      void main() {
      #include <clipping_planes_fragment>
        float f = 1. - abs(dot(normalize(vN), normalize(vV))); f = f * f * f;
        gl_FragColor = vec4(cor, .005 + .13 * f);
      }`}),y={},A=(I,k)=>{let wt=I+k;if(y[wt])return y[wt];let St=I==="sel",zt=new ke({uniforms:{cor:{value:new ee(St?16757575:10478591)},base:{value:St?.1:.05},borda:{value:St?.9:.55}},transparent:!0,depthWrite:!1,blending:ua,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,toneMapped:!1,clipping:k>0,vertexShader:`#include <common>
`+v,fragmentShader:`#include <common>
        #include <clipping_planes_pars_fragment>
        uniform vec3 cor; uniform float base; uniform float borda; varying vec3 vN; varying vec3 vV;
        void main() {
        #include <clipping_planes_fragment>
          float f = 1. - abs(dot(normalize(vN), normalize(vV))); f = f * f;
          gl_FragColor = vec4(cor * (base + borda * f), 1.);
        }`});return k&&(zt.clippingPlanes=k===1?g:x,zt.clipIntersection=!0),y[wt]=zt},w=I=>{for(;I&&!I.userData.parte;)I=I.parent;return I?I.userData.parte:null},T=I=>I==="excitatrizFixa"?"excitatriz":I,_=[];f.raiz.traverse(I=>{I.isMesh&&(I.userData.mat0=I.material,I.userData.cfg=S(I.material),I.userData.parteR=T(I.userData.parte||w(I)),I.userData.sombra0=I.castShadow,_.push(I))});for(let I of _)I.geometry.computeBoundingSphere(),I.userData.miudo=I.geometry.boundingSphere.radius*Math.max(I.scale.x,I.scale.y,I.scale.z)<.06;let D=new Map;for(let I of _){let k=I.userData.parteR;D.has(k)||D.set(k,[]),D.get(k).push(I)}let q=I=>to.find(k=>k.partes.includes(I)),F=I=>(q(T(I))||{cor:"#dfe7ea"}).cor,U=[...D.keys()].filter(Boolean),O={corte:"nenhum",lado:"auto",janela:!1,foco:null,ar:!1,agua:!1,corrente:!1,fluxo:!1,cargas:!1,fases:!1,ns:!1,giro:.02,explodir:0,th:null},z={ocultos:new Set,ocultas:new Set,isolado:null,isoladoParte:null,rotulos:!0,girarLivre:!0},nt=1,$=0,st=Cu(r,f,{leve:e,planos:g});function At(){let[I,k]=g,wt=O.corte==="nenhum";wt?(I.normal.set(0,0,-1),I.constant=1e3,k.normal.set(0,-1,0),k.constant=-1e3):(I.normal.set(0,0,-nt),I.constant=0,O.corte==="meio"?(k.normal.set(0,-1,0),k.constant=-1e3):O.corte==="quarto"?(k.normal.set(0,-1,0),k.constant=0):O.corte==="mancal"&&(k.normal.set(-1,0,0),k.constant=Oi(1)+f.partes.mancalLA.position.x));let[St,zt,se,ce]=x;O.janela?(St.normal.set(0,0,-nt),St.constant=0,zt.normal.set(0,-1,0),zt.constant=0,se.normal.set(-1,0,0),se.constant=Se(0)-.06,ce.normal.set(1,0,0),ce.constant=Ut.nucleo/2-.03):(St.normal.set(0,0,-1),St.constant=1e3),m.value=wt&&!O.janela?0:1}function It(){return z.isoladoParte?[z.isoladoParte]:z.isolado?to.find(I=>I.id===z.isolado).partes:O.foco}function Et(){let I=It();for(let k of _){let wt=k.userData.parteR,St=q(wt),zt=!(St&&z.ocultos.has(St.id))&&!z.ocultas.has(wt),se=!I||I.includes(wt),ce=k.userData.matCap||k.userData.mat0;k.material=se?ce:V,k.castShadow=se&&zt&&k.userData.sombra0,k.visible=zt&&(se||!k.userData.miudo)}Dt&&!qt(Dt.parte)&&Y()}let qt=I=>(D.get(I)||[]).some(k=>k.visible&&k.material!==V);function rt(I){f.anim.fases.forEach(k=>{k.userData.matCap=I?E[k.userData.fase]:null})}function mt(I){f.giro.traverse(k=>{k.isMesh&&k.userData.polo!==void 0&&k.userData.parteR==="rotor"&&(k.userData.matCap=I?k.userData.polo%2?h.sul:h.norte:null)})}function Ft(){At(),rt(O.fases),mt(O.ns),Et(),st.ar.visible=O.ar,st.agua.visible=O.agua,st.corrente.visible=O.corrente,st.fluxo.visible=O.fluxo,st.cargas.visible=O.cargas,oe(),Pt&&Pt.ativos()}let ft=new Wa(a,bn);ft.enableDamping=!t,ft.dampingFactor=.08,ft.minDistance=.5,ft.maxDistance=30,ft.maxPolarAngle=Math.PI*.58,ft.screenSpacePanning=!0;let Nt=[.5,.5],Wt=null,Mt=()=>{let I=Ye.clientWidth,k=Ye.clientHeight;!I||!k||(a.aspect=I/k,a.setViewOffset(I,k,I/2-Nt[0]*I,k/2-Nt[1]*k,I,k),a.updateProjectionMatrix())},Tt=wu(a,ft,{get:()=>Nt.slice(),set:(I,k)=>{Nt=[I,k],Wt=null,Mt()}}),j=Pu(f),at=null;function P(I){let k=Ye.clientWidth,wt=Ye.clientHeight,St=Pt.blocos(),zt=Iu(j,I.partes==="tudo"||!I.partes?null:I.partes,O.explodir);if(I.extra)for(let ce of I.extra)zt.push(Yn(...ce));let se=Du(k,wt,St);return at=I,Lu(zt,I,a,k,wt,se.length?se:[{x:0,y:0,w:k,h:wt}])}let gt=Au(Tt,{reduce:t,resolver:P}),lt=I=>eo(I,0),dt="tudo",vt=["eixo","acoplamento","rotor","campo","amortecedor","ventLA","ventLOA","excitatriz","diodos","cabos"],Vt={mecanica:[{id:"geral",t:"O gerador montado",txt:()=>`Carca\xE7a soldada sobre chapas de assentamento, com o trocador ar\u2013\xE1gua em cima, um mancal de deslizamento de flange em cada escudo e a excitatriz \xE0 mostra na ponta LOA. ${Fn.poles} polos a ${lt(Fn.rpm)} rpm.`,estado:{giro:.02},rotulos:[["trocador","Trocador ar\u2013\xE1gua"],["mancalLA","Mancal LA"],["caixa","Caixa de liga\xE7\xE3o"],["ponta","Ponta de eixo"],["placa","Placa de identifica\xE7\xE3o"],["pe","P\xE9"]],tomadas:[{dur:3.2,vista:{partes:dt,az:30,el:18,folga:1.05}},{dur:10,vista:{partes:dt,az:50,el:13,folga:1.05}}]},{id:"carcaca",t:"Carca\xE7a e escudos",txt:()=>"Estrutura soldada em chapa. As almas internas seguram o n\xFAcleo nas duas pontas do pacote; as paredes t\xEAm nervuras e tampas de inspe\xE7\xE3o, e as placas das pontas, olhais de i\xE7amento. Os escudos abaulados entram na m\xE1quina e levam os mancais no cubo, perto do n\xFAcleo; os quatro p\xE9s descarregam o peso e o torque de rea\xE7\xE3o na funda\xE7\xE3o.",estado:{corte:"quarto",foco:["carcaca","escudoLA","escudoLOA","base","defletor","mancalLA","mancalLOA","terminais","trocador","agua"]},rotulos:[["alma","Alma que segura o n\xFAcleo"],["defletor","Defletor"],["tampa","Tampa de inspe\xE7\xE3o"],["pe","P\xE9 sobre a chapa de assentamento"],["escudoLA","Escudo abaulado"],["olhal","Olhal de i\xE7amento"]],tomadas:[{dur:3.4,vista:{partes:dt,az:34,el:24,folga:1.05}},{dur:8,vista:{partes:dt,az:54,el:18,folga:1.05}}]},{id:"eixo",t:"Eixo e ponta de eixo",txt:()=>"O eixo leva o pacote do rotor nos assentos centrais, os ventiladores nos assentos logo depois das cabe\xE7as de bobina e a excitatriz na ponta, e passa pelos colos dos mancais. Na ponta LA, a chaveta no rasgo transmite o torque da m\xE1quina acionadora.",estado:{corte:"quarto",giro:.03,foco:[...vt,"mancalLA","mancalLOA"]},rotulos:[["ponta","Ponta de eixo e chaveta"],["coloLA","Colo do mancal LA"],["ventLA","Ventilador no assento"],["assento","Eixo sob as cabe\xE7as de bobina"],["armadura","Excitatriz na ponta LOA"]],tomadas:[{dur:3.4,vista:{partes:["eixo","acoplamento"],az:60,el:15,folga:1.04}},{dur:7,vista:{partes:["eixo","acoplamento"],az:76,el:11,folga:1.04}}]},{id:"mancais",t:"Mancais de deslizamento",txt:()=>"Em cada escudo, um mancal de flange com a caixa aletada, resfriada pelo ar ambiente. O colo gira dentro do casquilho de metal patente sobre uma cunha de \xF3leo; o anel solto, pendurado no colo, mergulha no c\xE1rter e leva o \xF3leo para cima. O visor mostra o n\xEDvel e o sensor mede a temperatura do metal. O mancal LOA \xE9 isolado contra corrente de eixo.",estado:{corte:"mancal",lado:1,giro:.05,foco:["mancalLA","eixo","acoplamento","escudoLA"]},rotulos:[["mancalLA.casquilho","Casquilho de metal patente"],["mancalLA.anel","Anel de \xF3leo"],["mancalLA.oleo","\xD3leo no c\xE1rter"],["mancalLA.visor","Visor de n\xEDvel"],["mancalLA.labirinto","Veda\xE7\xE3o de labirinto"],["mancalLA.flange","Flange no cubo do escudo"]],tomadas:[{dur:3.6,vista:{partes:["mancalLA"],az:50,el:18,folga:1.5}},{dur:7,vista:{partes:["mancalLA"],az:34,el:24,folga:1.5}}]},{id:"ar",t:"Ventila\xE7\xE3o IC81W",txt:()=>"O ar n\xE3o sai da m\xE1quina: volta frio do trocador pelas pontas, desce na c\xE2mara entre o escudo e o defletor, passa pelo bocal e \xE9 soprado pelo ventilador nas cabe\xE7as de bobina, no entreferro e entre os polos; sai quente pelos dutos do n\xFAcleo, contorna o n\xFAcleo por cima, pelos lados e por baixo e sobe ao trocador.",estado:{corte:"quarto",ar:!0,giro:.12},rotulos:[["trocador","Trocador: o ar esfria"],["dutos","Dutos: sai o ar quente"],["ventLA","Ventilador"],["defletor","Defletor"]],tomadas:[{dur:3.4,vista:{partes:dt,az:68,el:16,folga:1.03}},{dur:8,vista:{partes:dt,az:84,el:10,folga:1.03}}]},{id:"troc",t:"Trocador ar\u2013\xE1gua",txt:()=>"Uma unidade sobre a carca\xE7a: tubos de cobre aletados entre dois espelhos, em duas passagens. A \xE1gua entra fria pelo bocal de baixo, na ponta LOA da caixa de entrada, atravessa as fileiras de baixo, faz a volta na caixa de retorno, do outro lado, e sai quente pelas fileiras de cima e pelo bocal de cima, na ponta LA. As chicanas obrigam o ar quente a passar pelo feixe, e a bandeja embaixo recolhe qualquer vazamento.",estado:{corte:"quarto",lado:1,ar:!0,agua:!0,foco:["trocador","agua","carcaca","escudoLA","escudoLOA","base"]},tomadas:[{dur:3.6,vista:{partes:["trocador"],az:62,el:30,folga:1.08},rotulos:[["tubos","Tubos de cobre"],["aletasTroc","Aletas de alum\xEDnio"],["chicana","Chicana"],["bandeja","Bandeja de vazamento"]]},{dur:6.5,estado:{ar:!1},vista:{partes:["trocador","agua"],az:-60,el:22,folga:1.06},rotulos:[["entradaAgua","Entrada de \xE1gua fria"],["saidaAgua","Sa\xEDda de \xE1gua quente"],["caixaEntrada","Caixa de entrada e sa\xEDda"]]}]},{id:"cargas",t:"Cargas no eixo e nos mancais",txt:()=>"O peso do rotor e a atra\xE7\xE3o magn\xE9tica desequilibrada fletem o eixo entre os mancais, e os escudos reagem nos dois mancais. O torque nominal entra pela ponta de eixo e pela chaveta.",estado:{cargas:!0,giro:.04,foco:[...vt,"mancalLA","mancalLOA"]},tomadas:[{dur:3.4,vista:{partes:["eixo","acoplamento","mancalLA","mancalLOA"],az:90,el:8,folga:1.08,extra:[[0,1.45,0],[0,-1.05,0],[3.5,.55,0]]}},{dur:6,vista:{partes:["eixo","acoplamento","mancalLA","mancalLOA"],az:66,el:12,folga:1.08,extra:[[0,1.45,0],[0,-1.05,0],[3.5,.55,0]]}}]},{id:"montagem",t:"Vista explodida",txt:()=>"Trocador erguido, escudos e mancais afastados ao longo do eixo e o estator da excitatriz recuado: \xE9 a ordem de desmontagem para inspe\xE7\xE3o. Com um escudo e o mancal fora, o rotor sai axialmente pelo furo do estator.",estado:{explodir:1,giro:.02},rotulos:[["trocador","Trocador erguido"],["escudoLA","Escudo LA"],["mancalLA","Mancal LA"],["excFora","Estator da excitatriz"],["caixa","Caixa de liga\xE7\xE3o"]],tomadas:[{dur:3.8,vista:{partes:dt,az:30,el:20,folga:1.04}},{dur:9,vista:{partes:dt,az:50,el:15,folga:1.04}}]}],eletrica:[{id:"maq",t:"Gerador s\xEDncrono",txt:()=>`Gerador de ${lt(Fn.voltage)} V e ${lt(Fn.frequency)} Hz, com ${Fn.poles} polos: ${lt(Fn.rpm)} rpm. Rotor de polos salientes, excita\xE7\xE3o sem escovas e refrigera\xE7\xE3o em circuito fechado com trocador ar\u2013\xE1gua (IC81W).`,estado:{corte:"quarto",giro:.05},rotulos:[["nucleo","Estator"],["rotorPonta","Rotor de polos salientes"],["excFora","Excitatriz sem escovas"],["caixa","Caixa de liga\xE7\xE3o"],["trocador","Trocador ar\u2013\xE1gua"]],tomadas:[{dur:3.2,vista:{partes:dt,az:34,el:20,folga:1.05}},{dur:10,vista:{partes:dt,az:54,el:15,folga:1.05}}]},{id:"nucleo",t:"N\xFAcleo do estator",txt:()=>"Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre eles. As chapas finas e isoladas cortam as correntes parasitas; o n\xFAcleo \xE9 preso na carca\xE7a pelas barras de dorso e pelas almas.",estado:{corte:"quarto",foco:["estator","enrolamento","carcaca"]},rotulos:[["nucleo","Pacotes de chapas"],["dutos","Dutos radiais"],["ranhuras","Ranhuras"],["placaPressao","Placa de press\xE3o"],["dorso","Barras de dorso"]],tomadas:[{dur:3.4,vista:{partes:["estator"],az:46,el:24,folga:1.3}},{dur:6,vista:{partes:["estator"],az:60,el:30,folga:1.32}}]},{id:"enr",t:"Enrolamento trif\xE1sico",txt:()=>`Bobinas de dupla camada, com passo encurtado, formam as fases U, V e W. A tens\xE3o de ${lt(Fn.voltage)} V nasce nos lados de bobina dentro das ranhuras; as cabe\xE7as s\xF3 ligam um lado ao outro. As sa\xEDdas v\xE3o \xE0 caixa de liga\xE7\xE3o.`,estado:{corte:"quarto",fases:!0,foco:["enrolamento","terminais","estator"]},rotulos:[["cabecas","Cabe\xE7as de bobina"],["ladoBobina","Lados de bobina nas ranhuras"],["amarracao","An\xE9is de amarra\xE7\xE3o"],["saidas","Sa\xEDdas das fases"],["caixa","Caixa de liga\xE7\xE3o"]],tomadas:[{dur:3.4,vista:{partes:["enrolamento"],az:40,el:20,folga:1.1}},{dur:6,vista:{partes:["enrolamento","terminais"],az:64,el:24,folga:1.08}}]},{id:"rotor",t:"Rotor de polos salientes",txt:()=>`${Fn.poles} polos com bobinas de campo em corrente cont\xEDnua, alternando norte e sul. As barras de lat\xE3o na sapata e os an\xE9is das pontas formam a gaiola amortecedora.`,estado:{corte:"quarto",ns:!0,giro:0,th:.87,foco:["rotor","campo","amortecedor","eixo"]},rotulos:[["polo","Polo"],["campo","Bobina de campo"],["sapata","Sapata polar"],["amortecedor","Gaiola amortecedora"]],tomadas:[{dur:3.4,vista:{partes:["rotor","campo"],az:62,el:22,folga:1.32}},{dur:6,vista:{partes:["rotor","campo"],az:44,el:28,folga:1.32}}]},{id:"exc",t:"Excitatriz e ponte de diodos",txt:()=>"Na ponta LOA, depois do mancal, a excitatriz gera corrente alternada trif\xE1sica na armadura que gira com o eixo; as tr\xEAs fases v\xE3o \xE0 ponte de diodos girante, que retifica, e os dois cabos (+ e \u2212) levam a corrente cont\xEDnua por dentro do furo central do eixo at\xE9 as bobinas de campo, sem escovas nem an\xE9is.",estado:{corte:"quarto",janela:!0,corrente:!0,giro:.04,foco:["excitatriz","diodos","cabos","eixo","mancalLOA","escudoLOA"]},rotulos:[["estatorExc","Estator da excitatriz"],["armadura","Armadura girante"],["diodos","Ponte de diodos"],["cabos","Cabos + e \u2212 no furo do eixo"]],tomadas:[{dur:3.4,vista:{partes:["excitatriz","diodos","mancalLOA"],az:126,el:22,folga:1.15}},{dur:7,vista:{partes:["excitatriz","diodos","mancalLOA","cabos"],az:106,el:20,folga:1.06}}]},{id:"girante",t:"Campo girante e tens\xE3o",txt:()=>`Com o rotor a ${lt(Fn.rpm)} rpm, o campo dos polos passa pelas ranhuras e induz a tens\xE3o nas fases: f = P\xB7n/120 = ${Fn.poles} \xD7 ${lt(Fn.rpm)} / 120 = ${lt(Fn.frequency)} Hz. As setas mostram o fluxo no entreferro, para fora no norte e para dentro no sul.`,estado:{corte:"quarto",ns:!0,fases:!0,fluxo:!0,giro:.22,foco:["rotor","campo","estator","eixo","enrolamento"]},tomadas:[{dur:3.4,vista:{partes:["estator"],az:118,el:16,folga:1.1}},{dur:8,vista:{partes:["estator"],az:26,el:14,folga:1.1}}]}]},ut={corte:"nenhum",lado:"auto",janela:!1,foco:null,ar:!1,agua:!1,corrente:!1,fluxo:!1,cargas:!1,fases:!1,ns:!1,giro:.02,explodir:0,th:null},R=document.createElement("canvas");R.className="m3-ov",R.setAttribute("aria-hidden","true"),bn.after(R);let M=Fu(R,{reduce:t}),K=[],ct=new tn,pt=Yn(1,0,0),ot=Yn(0,0,0),Ht=Yn(0,0,0);function Ot(I){let k=f.ancoras[I];if(!k)return null;let wt=k.p.clone();k.gira&&wt.applyQuaternion(ct.setFromAxisAngle(pt,f.giro.rotation.x));let St=k.g&&f.partes[k.g];return St&&us[k.g]&&wt.add(St.position),{p:wt,gira:k.gira,parte:T(k.g)}}function kt(){let I=[];if(z.rotulos&&!Dt)for(let[k,wt,St]of K){let zt=Ot(k);if(!zt)continue;let se=k.includes(".")?k.split(".")[0]:zt.parte;if(se&&!qt(se))continue;let ce=((D.get(se)||[])[0]||{userData:{}}).userData.cfg;if(ce&&!zt.gira&&ht(zt.p,ce))continue;let He=1;zt.gira&&(Ht.set(0,zt.p.y,zt.p.z).normalize(),ot.subVectors(a.position,zt.p).normalize(),He=Xn(Ht.dot(ot)*4+.3,0,1)),I.push({chave:k,pos:zt.p,texto:wt,sub:St,cor:F(se||"carcaca"),visivel:He})}if(O.cargas)for(let k of st.rotulosCargas)I.push({chave:"c"+k.texto,pos:k.p,texto:k.texto,cor:k.cor});if(Dt){let k=Dt.mesh.localToWorld(Dt.local.clone()),wt=q(Dt.parte);I.push({chave:"sel",pos:k,texto:Fi[Dt.parte][0],sub:wt?wt.nome:"",cor:F(Dt.parte),forte:!0})}return I}function oe(){if(!Pt)return;let I=[];O.ar&&I.push(["Ar frio","#2b8cff"],["Ar quente","#ff3b1f"]),O.agua&&I.push(["\xC1gua fria","#2f8cff"],["\xC1gua quente","#ff4a2a"]),O.corrente&&I.push(["Campo +","#ff5a40"],["Campo \u2212","#ffd966"]),O.fluxo&&I.push(["Fluxo norte","#f24d33"],["Fluxo sul","#2e73f2"]),O.fases&&I.push(["Fase U","#c0392b"],["Fase V","#d4a21a"],["Fase W","#2c6fbf"]),O.ns&&!O.fluxo&&I.push(["Polo norte","#d2452f"],["Polo sul","#2f6fd0"]),O.cargas&&I.push(["Peso","#ffb347"],["Atra\xE7\xE3o magn\xE9tica","#c59bff"],["Rea\xE7\xF5es","#6fd8cf"],["Torque","#ffd166"]),Pt.legenda(I)}function bt(){let I=Ye.clientHeight,k=a.position.distanceTo(ft.target),wt=I/(2*Math.tan(a.fov*Math.PI/360))/k,St=[.1,.2,.25,.5,1,2,5].find(zt=>zt*wt>=70)||5;Pt.escala(St*wt,St<1?`${eo(St*1e3,0)} mm`:`${eo(St,0)} m`)}let Dt=null,Lt=null,Jt=new Map;function H(I,k,wt){let St=k+"|"+I;if(wt&&!Jt.has(St)){let se=[];for(let ce of D.get(I)||[]){let He=new Re(ce.geometry,A(k,ce.userData.cfg));He.userData.sobre=!0,He.renderOrder=6,He.raycast=()=>{},ce.add(He),se.push(He)}Jt.set(St,se)}let zt=Jt.get(St);if(zt)for(let se of zt)se.visible=wt&&se.parent.material!==V}function X(I,k,wt){if(!Fi[I])return;Dt&&H(Dt.parte,"sel",!1);let St=wt||(D.get(I)||[]).find(se=>se.visible)||D.get(I)[0],zt=k||new pn().setFromObject(St).getCenter(Yn(0,0,0));Dt={parte:I,mesh:St,local:St.worldToLocal(zt.clone())},H(I,"sel",!0),Lt===I&&H(I,"hover",!1),Pt.abrirInspetor(I)}function Y(){Dt&&(H(Dt.parte,"sel",!1),Dt=null,Pt.painel==="insp"&&Pt.fechar())}let tt=new fn(1,1),C=new Uint8Array(4),W=new Map,B=I=>{let k=U.indexOf(I.userData.parteR)+1,wt=I.userData.cfg,St=wt+"|"+k;if(!W.has(St)){let zt=new cn({color:new ee().setRGB((k&255)/255,(k>>8&255)/255,0,Li),toneMapped:!1});wt&&(zt.side=Tn,zt.clippingPlanes=wt===1?g:x,zt.clipIntersection=!0),W.set(St,zt)}return W.get(St)};function N(I,k){let wt=Ye.clientWidth,St=Ye.clientHeight,zt=[],se=[];for(let ye of _)if(ye.visible){if(ye.material===V){ye.visible=!1,se.push(ye);continue}zt.push([ye,ye.material]),ye.material=B(ye)}r.traverse(ye=>{ye.visible&&(ye.userData.sobre||ye.isPoints||ye.isInstancedMesh||ye===u||ye===d||ye===st.cargas)&&(ye.visible=!1,se.push(ye))});let ce=s.shadowMap.autoUpdate;s.shadowMap.autoUpdate=!1;let He=wt/2-Nt[0]*wt,Ee=St/2-Nt[1]*St;a.setViewOffset(wt,St,He+I,Ee+k,1,1),a.updateProjectionMatrix(),s.setRenderTarget(tt),s.setClearColor(0,0),s.clear(),s.render(r,a),s.readRenderTargetPixels(tt,0,0,1,1,C),s.setRenderTarget(null),Mt(),s.shadowMap.autoUpdate=ce;for(let[ye,$e]of zt)ye.material=$e;for(let ye of se)ye.visible=!0;let we=C[0]+C[1]*256;return we?U[we-1]:null}let it=new Na,J=new yt,ht=(I,k)=>{let wt=k===1?g:k===2?x:null;return wt?wt.every(St=>St.distanceToPoint(I)<0):!1};function _t(I,k,wt){let St=Ye.clientWidth,zt=Ye.clientHeight;J.set(k/St*2-1,-(wt/zt)*2+1),it.setFromCamera(J,a);let se=(D.get(I)||[]).filter(ce=>ce.visible&&ce.material!==V);for(let ce of it.intersectObjects(se,!1))if(!(ce.object.userData.cfg&&ht(ce.point,ce.object.userData.cfg)))return ce;return null}let xt={estado:()=>({...O}),sistemaVisivel:I=>!z.ocultos.has(I),isolado:()=>z.isolado,rotulos:()=>z.rotulos,alternarSistema(I){be(),z.ocultos.has(I)?z.ocultos.delete(I):z.ocultos.add(I),z.isoladoParte=null,Et(),Pt.ativos()},isolarSistema(I){be(),z.isolado=I,z.isoladoParte=null,I&&z.ocultos.delete(I),Et(),Pt.ativos()},mostrarTudo(){z.ocultos.clear(),z.ocultas.clear(),z.isolado=null,z.isoladoParte=null,Et(),Pt.ativos()},selecionarParte(I,{voar:k}={}){be(),z.ocultas.delete(I);let wt=q(I);wt&&z.ocultos.delete(wt.id),Et(),X(I),k&&xt.aproximar(I)},setCorte(I){be(),O.corte=I,O.lado="auto",At(),Pt.sincronizar()},setJanela(I){be(),O.janela=I,At(),Pt.sincronizar()},setFlag(I,k){be(),O[I]=k,Ft(),Pt.sincronizar()},setRotulos(I){z.rotulos=I},explodir(I){be(),O.explodir=I?1:0,Me.exp?.setAttribute("aria-pressed",String(I)),Pt.sincronizar()},irVista(I){be(),Xt(Ct[I])},aproximar(I){be(),Xt({partes:[I],az:Tt.estado().az,el:Xn(Tt.estado().el,8,40),folga:I==="carcaca"||I==="trocador"?1.06:1.45})},isolarParte(I){be(),z.isoladoParte=z.isoladoParte===I?null:I,Et()},ocultarParte(I){be(),z.ocultas.add(I),Y(),Et(),Pt.ativos()}},Ct={geral:{partes:dt,az:36,el:18,folga:1.05},frente:{partes:dt,az:90,el:6,folga:1.04},la:{partes:dt,az:4,el:10,folga:1.1},loa:{partes:dt,az:176,el:10,folga:1.1},cima:{partes:dt,az:90,el:72,folga:1.04},tras:{partes:dt,az:-64,el:18,folga:1.05},mancal:{partes:["mancalLA"],az:44,el:20,folga:1.5},excitatriz:{partes:["excitatriz","diodos"],az:132,el:20,folga:1.35}};function Xt(I){gt.tocar([{dur:t?.01:1.3,vista:I}])}let Pt=Bu(Ye,{SISTEMAS:to,PARTES:Fi,api:xt,movel:n,aoFechar:()=>{Dt&&(H(Dt.parte,"sel",!1),Dt=null)},aoMudarLayout:()=>requestAnimationFrame(ue)});function ue(){if(gt.ativo||!at)return;Wt=P(at).c}let Zt={trilha:"mecanica",cap:0,tocando:!1},_e=Ze("m3-card"),Ve=Ze("m3-caps"),Me={play:Ze("m3-play"),giro:Ze("m3-giro"),exp:Ze("m3-explodir"),centro:Ze("m3-centro"),full:Ze("m3-full"),prev:Ze("m3-prev"),next:Ze("m3-next")};function zn(){let I=Vt[Zt.trilha];Ve.innerHTML=I.map((k,wt)=>`<button type="button" role="tab" data-i="${wt}" aria-selected="${wt===Zt.cap}"><span>${String(wt+1).padStart(2,"0")}</span>${k.t}</button>`).join(""),document.querySelectorAll("[data-trilha]").forEach(k=>k.setAttribute("aria-pressed",String(k.dataset.trilha===Zt.trilha)))}function ve(I,{tocar:k=!0}={}){let wt=Vt[Zt.trilha];Zt.cap=Xn(I,0,wt.length-1);let St=wt[Zt.cap];Ze("m3-count").textContent=`${String(Zt.cap+1).padStart(2,"0")} / ${String(wt.length).padStart(2,"0")}`,Ze("m3-step-title").textContent=St.t,Ze("m3-step-text").textContent=St.txt(),Ze("m3-trilha-rot").textContent=Zt.trilha==="eletrica"?"El\xE9trica":"Mec\xE2nica",Object.assign(O,ut,St.estado),z.ocultos.clear(),z.ocultas.clear(),z.isolado=null,z.isoladoParte=null,Dt&&Y(),Pt.painel&&Pt.painel!=="insp"?Pt.sincronizar():Pt.fechar(),Ft(),zn(),K=St.rotulos||[],Me.exp?.setAttribute("aria-pressed",String(O.explodir>.5));let zt=St.tomadas.map(se=>({...se,ini:()=>{K=se.rotulos||St.rotulos||[],se.estado&&(Object.assign(O,se.estado),Ft())}}));return k&&gt.tocar(zt,()=>{Zt.tocando&&(Zt.cap<wt.length-1?setTimeout(()=>Zt.tocando&&ve(Zt.cap+1),t?2500:1100):be())}),zt}function be(){gt.ativo&&Zt.tocando&&gt.parar(),Zt.tocando=!1,Me.play.setAttribute("aria-pressed","false"),Me.play.querySelector("span").textContent="Tour guiado"}function Bn(){Zt.tocando=!0,Me.play.setAttribute("aria-pressed","true"),Me.play.querySelector("span").textContent="Pausar tour",ve(Zt.cap)}Me.play.addEventListener("click",()=>{Zt.tocando?(be(),gt.parar()):Bn()}),Me.prev.addEventListener("click",()=>ve(Zt.cap-1)),Me.next.addEventListener("click",()=>ve(Zt.cap+1)),Ve.addEventListener("click",I=>{let k=I.target.closest("[data-i]");k&&ve(+k.dataset.i)}),document.querySelectorAll("[data-trilha]").forEach(I=>I.addEventListener("click",()=>{Zt.trilha!==I.dataset.trilha&&(Zt.trilha=I.dataset.trilha,Zt.cap=0,ve(0))})),Me.giro?.addEventListener("click",()=>{z.girarLivre=!z.girarLivre,Me.giro.setAttribute("aria-pressed",String(z.girarLivre))}),Me.exp?.addEventListener("click",()=>{xt.explodir(O.explodir<.5),Me.exp.setAttribute("aria-pressed",String(O.explodir>.5)),Pt.sincronizar(),gt.ativo||Xt({...at||Ct.geral})}),Me.centro?.addEventListener("click",()=>{if(be(),Dt)xt.aproximar(Dt.parte);else{let I=Vt[Zt.trilha][Zt.cap];Xt(I.tomadas[I.tomadas.length-1].vista)}});let en=Ze("tour-3d"),te=()=>document.fullscreenElement||document.webkitFullscreenElement,re=()=>!!te()||en.classList.contains("m3-cheia"),le=I=>{Me.full?.setAttribute("aria-pressed",String(I)),Me.full?.setAttribute("aria-label",I?"Sair da tela cheia":"Tela cheia")};function Yt(I){en.classList.toggle("m3-cheia",I),document.documentElement.classList.toggle("m3-travado",I),le(I),requestAnimationFrame(Kt)}function b(){if(en.classList.contains("m3-cheia"))return Yt(!1);if(te()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let I=en.requestFullscreen||en.webkitRequestFullscreen,k=matchMedia("(pointer: coarse)").matches;if(I&&!k)try{let wt=I.call(en);wt&&wt.catch&&wt.catch(()=>Yt(!0))}catch{Yt(!0)}else Yt(!0)}Me.full?.addEventListener("click",b);for(let I of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(I,()=>{le(!!te()),requestAnimationFrame(Kt)});document.addEventListener("keydown",I=>{I.key==="Escape"&&en.classList.contains("m3-cheia")&&Yt(!1)}),en.addEventListener("keydown",I=>{if(I.target.closest("input, textarea")||I.altKey||I.ctrlKey||I.metaKey)return;let k=I.key.toLowerCase(),wt=Vt[Zt.trilha].length;if(/^[1-9]$/.test(k)&&+k<=wt)ve(+k-1),I.preventDefault();else if(k==="arrowright")ve(Zt.cap+1),I.preventDefault();else if(k==="arrowleft")ve(Zt.cap-1),I.preventDefault();else if(k===" "&&!I.target.closest("button"))Me.play.click(),I.preventDefault();else if(k==="x"){let St=["nenhum","meio","quarto"],zt=St.indexOf(O.corte);xt.setCorte(St[(zt+1)%3]),Pt.sincronizar()}else k==="e"?Me.exp?.click():k==="l"?(z.rotulos=!z.rotulos,Pt.sincronizar()):k==="f"?b():k==="escape"&&(Pt.painel?Pt.fechar():Y())}),ft.addEventListener("start",()=>{gt.ativo&&(gt.parar(),be()),Wt=null});let G=!1;bn.addEventListener("wheel",I=>{let k=G||I.ctrlKey||I.metaKey||re();ft.enableZoom=k,k||Pt.aviso("Use Ctrl + rolagem para aproximar, ou clique na cena antes")},{capture:!0,passive:!0}),Ye.addEventListener("pointerleave",()=>{G=!1});let Q=null,et=null,Z=0;bn.addEventListener("pointerdown",I=>{Q=[I.clientX,I.clientY,performance.now()],G=!0,ft.enableZoom=!0,Pt.semDica()}),bn.addEventListener("pointerup",I=>{if(!Q||Math.hypot(I.clientX-Q[0],I.clientY-Q[1])>5||performance.now()-Q[2]>600){Q=null;return}Q=null;let k=bn.getBoundingClientRect(),wt=I.clientX-k.left,St=I.clientY-k.top,zt=N(wt,St);if(zt&&Fi[zt]){gt.ativo&&(gt.parar(),be());let se=_t(zt,wt,St);X(zt,se?se.point:null,se?se.object:null)}else Y()}),bn.addEventListener("dblclick",I=>{let k=bn.getBoundingClientRect(),wt=N(I.clientX-k.left,I.clientY-k.top);wt&&Fi[wt]&&xt.aproximar(wt)}),bn.addEventListener("pointermove",I=>{if(I.pointerType!=="mouse"||I.buttons){Lt&&(H(Lt,"hover",!1),Lt=null,Pt.semDica());return}let k=bn.getBoundingClientRect();et=[I.clientX-k.left,I.clientY-k.top]}),bn.addEventListener("pointerleave",()=>{et=null,Lt&&(H(Lt,"hover",!1),Lt=null),Pt.semDica()});function Rt(I){if(!et||I-Z<90)return;Z=I;let[k,wt]=et;et=null;let St=N(k,wt),zt=St&&Fi[St]?St:null;if(zt!==Lt&&(Lt&&Lt!==Dt?.parte&&H(Lt,"hover",!1),Lt=zt,zt&&zt!==Dt?.parte&&H(zt,"hover",!0),bn.style.cursor=zt?"pointer":""),zt){let se=q(zt);Pt.dica(Fi[zt][0],se?se.nome:"",k,wt,F(zt))}else Pt.semDica()}let Bt=new Ua,$t=0,Qt=!0,ae=0;new IntersectionObserver(I=>{Qt=I[0].isIntersecting}).observe(Ye);let ie=null;if(!e)try{ie=jx(s,r,a)}catch(I){console.warn(I),ie=null}function Kt(){let I=Ye.clientWidth,k=Ye.clientHeight;if(!(!I||!k)){if(s.setSize(I,k,!1),Mt(),M.medir(I,k),ie){let wt=s.getPixelRatio(),St=Math.round(I*wt),zt=Math.round(k*wt),se=wt>1.2?.5:1;ie.rt.setSize(St,zt),ie.ao.setSize(Math.round(St*se),Math.round(zt*se)),ie.quad.material.uniforms.uTexel.value.set(1/St,1/zt)}!gt.ativo&&at&&requestAnimationFrame(ue)}}function me(){if(!ie){s.render(r,a);return}ie.quad.material.uniforms.uNear.value=a.near,ie.quad.material.uniforms.uFar.value=a.far,s.setRenderTarget(ie.rt),s.clear(),s.render(r,a),ie.ao.render(s,null,ie.rt),s.setRenderTarget(null),ie.quad.render(s)}new ResizeObserver(Kt).observe(Ye),Kt();let Pe=new tn;function Te(I){requestAnimationFrame(Te);let k=Math.min(.05,Bt.getDelta());if(!Qt||document.hidden)return;ae++;let wt=gt.atualizar(k);if(wt&&(Ze("m3-prog").style.width=(wt.k*100).toFixed(1)+"%"),Wt&&!gt.ativo){let we=Math.min(1,k*6);Nt=[Nt[0]+(Wt[0]-Nt[0])*we,Nt[1]+(Wt[1]-Nt[1])*we],Mt(),Math.abs(Nt[0]-Wt[0])+Math.abs(Nt[1]-Wt[1])<1e-4&&(Wt=null)}let St=a.position.z-ft.target.z,zt=a.position.distanceTo(ft.target),se=nt;O.lado===1||O.lado===-1?nt=O.lado:St>.12*zt?nt=1:St<-.12*zt&&(nt=-1);let ce=O.explodir,He=$;if($+=(ce-$)*Math.min(1,k*(t?30:3.2)),Math.abs(ce-$)<1e-4&&($=ce),$!==He){let we=$*$*(3-2*$);for(let[ye,$e]of Object.entries(us))f.partes[ye]?.position.set($e[0]*we,$e[1]*we,$e[2]*we)}(nt!==se||$!==He)&&At();let Ee=(z.girarLivre||gt.ativo?O.giro:0)*2*Math.PI*(t?.3:1);if($t+=Ee*k,!O.giro&&O.th!=null){let we=Math.PI/2,ye=O.th+Math.round(($t-O.th)/we)*we;$t+=(ye-$t)*Math.min(1,k*2.5)}f.giro.rotation.x=$t;for(let we of f.anim.aneis||[])we.rotation.x+=Ee*k*.35;st.atualizar(k,$t),Rt(I||performance.now()),ft.update(),me();{let we=Pt.blocos();M.desenhar(kt(),a,we.lista,[Nt[0]*Ye.clientWidth,Nt[1]*Ye.clientHeight],{limite:n()?4:9,direita:we.direita})}ae%12===1&&bt()}ve(0,{tocar:!1}),gt.tocar(Vt.mecanica[0].tomadas.map(I=>({...I}))),Ye.classList.add("m3-pronto"),requestAnimationFrame(Te);let nn=(I,k,wt)=>{Zt.trilha=I;let St=ve(k,{tocar:!1}),zt=St[wt??St.length-1];zt.ini(),gt.parar(),$=O.explodir;for(let[se,ce]of Object.entries(us))f.partes[se]?.position.set(ce[0]*$,ce[1]*$,ce[2]*$);Tt.aplicar(P(zt.vista)),ft.update(),At()};window.__m3={rot:M,scene:r,camera:a,controls:ft,Q:f,mostrarCap:ve,tour:Zt,est:O,usu:z,api:xt,ui:Pt,rEixo:yu,irPara:nn,renderer:s,pos:()=>!!ie,desenhar:me,escolher:N,selecionar:X,planos:g,planosE:x,aplicarPlanos:At}}function Kx(i){let t=new pr,e=30,n=new es(e,64,32),s=n.attributes.position,r=[],a=new ee,o=new ee(.16,.17,.18),c=new ee(.5,.53,.56),l=new ee(.78,.8,.83);for(let f=0;f<s.count;f++){let g=s.getY(f)/e;g<0?a.copy(c).lerp(o,Math.min(1,-g*2.2)):a.copy(c).lerp(l,Math.min(1,g*1.4)),r.push(a.r,a.g,a.b)}n.setAttribute("color",new pe(r,3)),t.add(new Re(n,new cn({vertexColors:!0,side:an})));let u=(f,g,x,m,p,E,S=16777215)=>{let v=new Re(new Qn(f,g),new cn({color:new ee(S).multiplyScalar(E),side:Tn}));v.position.set(x,m,p),v.lookAt(0,0,0),t.add(v)};u(16,9,3,19,7,5),u(5,16,-19,6,7,2.4),u(5,16,17,6,-8,1.8,14871551),u(22,3.5,0,5,-21,1.4),u(12,3,5,1.5,21,.9);let d=new Bs(i),h=d.fromScene(t,.03).texture;return d.dispose(),h}function jx(i,t,e){let n=i.getContext(),s=!!i.extensions.get("EXT_color_buffer_float")||!!n.getExtension("EXT_color_buffer_float"),r=new fn(4,4,{type:s?ei:An,samples:4,depthTexture:new Pi(4,4)}),a=new qs(t,e,4,4);a.setGBuffer(r.depthTexture),a.updateGtaoMaterial({radius:.3,distanceExponent:1.6,thickness:1.4,scale:1.15,samples:16,distanceFallOff:1}),a.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),a.output=qs.OUTPUT.Off;let o=new Xs(new ke({uniforms:{tCor:{value:r.texture},tAO:{value:a.pdRenderTarget.texture},tProf:{value:r.depthTexture},forca:{value:.95},uLinhas:{value:.34},uTexel:{value:new yt(1,1)},uNear:{value:.05},uFar:{value:120}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`#include <packing>
      uniform sampler2D tCor; uniform sampler2D tAO; uniform sampler2D tProf; uniform float forca; uniform float uLinhas; uniform vec2 uTexel; uniform float uNear; uniform float uFar; varying vec2 vUv;
      float vz(vec2 uv) { float d = texture2D(tProf, uv).r; return d >= .99999 ? 1e4 : -perspectiveDepthToViewZ(d, uNear, uFar); }
      float capa(vec2 uv) { return 1. - clamp(abs(texture2D(tCor, uv).a - .995) / .003, 0., 1.); }
      void main() {
        vec4 c = texture2D(tCor, vUv); float tp = 1. - clamp(abs(c.a - .995) / .003, 0., 1.);
        float a = texture2D(tAO, vUv).r; c.rgb *= mix(1., a, forca * (1. - tp));
        float d0 = vz(vUv);
        if (uLinhas > 0. && d0 < 1e3) {
          vec2 dx = vec2(uTexel.x, 0.), dy = vec2(0., uTexel.y);
          float l = vz(vUv - dx), r = vz(vUv + dx), u = vz(vUv + dy), b = vz(vUv - dy);
          float lap = abs(min(l, d0 * 1.5) + min(r, d0 * 1.5) - 2. * d0) + abs(min(u, d0 * 1.5) + min(b, d0 * 1.5) - 2. * d0);
          float w = smoothstep(.0035, .014, lap / d0);
          float tv = min(min(capa(vUv - dx), capa(vUv + dx)), min(capa(vUv + dy), capa(vUv - dy)));
          w *= 1. - tp * tv;
          c.rgb *= 1. - uLinhas * w;
        }
        c.a = c.a > .99 ? 1. : c.a;
        gl_FragColor = c;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1,blending:Ge}));return{rt:r,ao:a,quad:o}}if(Ye&&bn)if(!$x())Ze("tour-3d")?.setAttribute("hidden","");else try{Jx()}catch(i){console.error(i),Ze("tour-3d")?.setAttribute("hidden","")}
