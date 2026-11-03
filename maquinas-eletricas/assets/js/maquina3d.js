var bi=2463534242,De=()=>(bi^=bi<<13,bi^=bi>>>17,bi^=bi<<5,(bi>>>0)/4294967296);var Kc="170",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,El=1,Cu=2;var Bh=1,jc=2,Yn=3,pi=0,Xe=1,xn=2,Ne=0,fs=1,Tl=2,wl=3,Al=4,Qc=5,vn=100,Pu=101,Iu=102,Du=103,Lu=104,Cs=200,Uu=201,Nu=202,Ou=203,Ca=204,Pa=205,Uo=206,Fu=207,No=208,zu=209,Bu=210,Hu=211,Vu=212,ku=213,Gu=214,Ia=0,Da=1,La=2,_s=3,Ua=4,Na=5,Oa=6,Fa=7,Hh=0,Wu=1,Xu=2,di=0,qu=1,Yu=2,Zu=3,$u=4,Ju=5,Ku=6,tl=7;var Vh=300,xs=301,vs=302,za=303,Ba=304,Oo=306,Jn=1e3,Di=1001,Ha=1002,qe=1003,ju=1004;var Er=1005;var On=1006,Jo=1007;var Li=1008;var mn=1009,kh=1010,Gh=1011,tr=1012,el=1013,Ui=1014,Fn=1015,Hn=1016,nl=1017,il=1018,mi=1020,Wh=35902,Xh=1021,qh=1022,pn=1023,Yh=1024,Zh=1025,ps=1026,gi=1027,sl=1028,rl=1029,$h=1030,ol=1031;var al=1033,eo=33776,no=33777,io=33778,so=33779,Va=35840,ka=35841,Ga=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,Za=37808,$a=37809,Ja=37810,Ka=37811,ja=37812,Qa=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,ro=36492,cc=36494,lc=36495,Jh=36283,hc=36284,uc=36285,dc=36286;var oo=2300,fc=2301,Ko=2302,Rl=2400,Cl=2401,Pl=2402;var Qu=3200,td=3201;var cl=0,ed=1,hi="",Je="srgb",Ps="srgb-linear",Fo="linear",xe="srgb";var qi=7680;var Il=519,nd=512,id=513,sd=514,Kh=515,rd=516,od=517,ad=518,cd=519,pc=35044;var Dl="300 es",Zn=2e3,ao=2001,Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=1234567,$s=Math.PI/180,er=180/Math.PI;function zn(){let i=De()*4294967295|0,t=De()*4294967295|0,e=De()*4294967295|0,n=De()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function ll(i,t){return(i%t+t)%t}function ld(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hd(i,t,e){return i!==t?(e-i)/(t-i):0}function Js(i,t,e){return(1-e)*i+e*t}function ud(i,t,e,n){return Js(i,t,1-Math.exp(-e*n))}function dd(i,t=1){return t-Math.abs(ll(i,t*2)-t)}function fd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function md(i,t){return i+Math.floor(De()*(t-i+1))}function gd(i,t){return i+De()*(t-i)}function _d(i){return i*(.5-De())}function xd(i){i!==void 0&&(Ll=i);let t=Ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vd(i){return i*$s}function yd(i){return i*er}function Md(i){return(i&i-1)===0&&i!==0}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),h=r((t+n)/2),l=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*l,c*u,c*d,a*h);break;case"YZY":i.set(c*d,a*l,c*u,a*h);break;case"ZXZ":i.set(c*u,c*d,a*l,a*h);break;case"XZX":i.set(a*l,c*g,c*f,a*h);break;case"YXY":i.set(c*f,a*l,c*g,a*h);break;case"ZYZ":i.set(c*g,c*f,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var jh={DEG2RAD:$s,RAD2DEG:er,generateUUID:zn,clamp:Ue,euclideanModulo:ll,mapLinear:ld,inverseLerp:hd,lerp:Js,damp:ud,pingpong:dd,smoothstep:fd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:xd,degToRad:vd,radToDeg:yd,isPowerOfTwo:Md,ceilPowerOfTwo:Sd,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Ed,normalize:ge,denormalize:Cn},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=De(),this.y=De(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class i{constructor(t,e,n,s,r,o,a,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h)}set(t,e,n,s,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],T=s[1],E=s[4],M=s[7],k=s[2],C=s[5],U=s[8];return r[0]=o*v+a*T+c*k,r[3]=o*m+a*E+c*C,r[6]=o*p+a*M+c*U,r[1]=h*v+l*T+u*k,r[4]=h*m+l*E+u*C,r[7]=h*p+l*M+u*U,r[2]=d*v+f*T+g*k,r[5]=d*m+f*E+g*C,r[8]=d*p+f*M+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-n*r*l+n*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=l*o-a*h,d=a*c-l*r,f=h*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*h-l*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(l*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new Qt;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=co("canvas");return i.style.display="block",i}var Ul={};function Ys(i){i in Ul||(Ul[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ad(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nl=[.64,.33,.3,.6,.15,.06],Ol=[.2126,.7152,.0722],Fl=[.3127,.329],zl=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Ps]:{primaries:Nl,whitePoint:Fl,transfer:Fo,toXYZ:zl,fromXYZ:Bl,luminanceCoefficients:Ol,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Nl,whitePoint:Fl,transfer:xe,toXYZ:zl,fromXYZ:Bl,luminanceCoefficients:Ol,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Yi,mc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=co("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qo(s[o].image)):r.push(Qo(s[o]))}else r=Qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pd=0,nn=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=On,o=Li,a=pn,c=mn,h=i.DEFAULT_ANISOTROPY,l=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=zn(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jn:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jn:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Vh;nn.DEFAULT_ANISOTROPY=1;var Pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(h+1)/2,M=(f+1)/2,k=(p+1)/2,C=(l+d)/4,U=(u+v)/4,O=(g+m)/4;return E>M&&E>k?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=U/n):M>k?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=O/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=U/r,s=O/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-l)*(d-l));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-l)/T,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=De(),this.y=De(),this.z=De(),this.w=De(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gc=class extends Kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ho=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _c=class extends nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||h!==f||l!==g){let m=1-a,p=c*d+h*f+l*g+u*v,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let k=Math.sqrt(E),C=Math.atan2(k,p*T);m=Math.sin(m*C)/k,a=Math.sin(a*C)/k}let M=a*T;if(c=c*m+d*M,h=h*m+f*M,l=l*m+g*M,u=u*m+v*M,m===1-a){let k=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=k,h*=k,l*=k,u*=k}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+l*u+c*f-h*d,t[e+1]=c*g+l*d+h*u-a*f,t[e+2]=h*g+l*f+a*d-c*u,t[e+3]=l*g-a*u-c*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"YZX":this._x=d*l*u+h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u-d*f*g;break;case"XZY":this._x=d*l*u-h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-s*a,this._w=o*l-n*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*De(),e=2*Math.PI*De(),n=De(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*n),l=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*h+o*u-a*l,this.y=n+c*l+a*h-r*u,this.z=s+c*u+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=De(),this.y=De(),this.z=De(),this}randomDirection(){let t=De()*Math.PI*2,e=De()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new A,Hl=new je,jn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),wr.subVectors(this.max,zs),Zi.subVectors(t.a,zs),$i.subVectors(t.b,zs),Ji.subVectors(t.c,zs),si.subVectors($i,Zi),ri.subVectors(Ji,$i),Ei.subVectors(Zi,Ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ei.z,Ei.y,si.z,0,-si.x,ri.z,0,-ri.x,Ei.z,0,-Ei.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ei.y,Ei.x,0];return!ea(e,Zi,$i,Ji,wr)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Zi,$i,Ji,wr))?!1:(Ar.crossVectors(si,ri),e=[Ar.x,Ar.y,Ar.z],ea(e,Zi,$i,Ji,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new A,new A,new A,new A,new A,new A,new A,new A],wn=new A,Tr=new jn,Zi=new A,$i=new A,Ji=new A,si=new A,ri=new A,Ei=new A,zs=new A,wr=new A,Ar=new A,Ti=new A;function ea(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=t.dot(Ti),h=e.dot(Ti),l=n.dot(Ti);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Id=new jn,Bs=new A,na=new A,_i=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(na)),this.expandByPoint(Bs.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new A,ia=new A,Rr=new A,oi=new A,sa=new A,Cr=new A,ra=new A,Ni=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ia.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(ia);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=oi.dot(this.direction),c=-oi.dot(Rr),h=oi.lengthSq(),l=Math.abs(1-o*o),u,d,f,g;if(l>0)if(u=o*c-a,d=o*a-c,g=r*l,u>=0)if(d>=-g)if(d<=g){let v=1/l;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(Rr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,o=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,o=(t.min.y-d.y)*l),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){sa.subVectors(e,t),Cr.subVectors(n,t),ra.crossVectors(sa,Cr);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let c=a*this.direction.dot(Cr.crossVectors(oi,Cr));if(c<0)return null;let h=a*this.direction.dot(sa.cross(oi));if(h<0||c+h>o)return null;let l=-a*oi.dot(ra);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,c,h,l,u,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,h,l,u,d,f,g,v,m)}set(t,e,n,s,r,o,a,c,h,l,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*l,f=o*u,g=a*l,v=a*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=f+g*h,e[5]=d-v*h,e[9]=-a*c,e[2]=v-d*h,e[6]=g+f*h,e[10]=o*c}else if(t.order==="YXZ"){let d=c*l,f=c*u,g=h*l,v=h*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*l,f=c*u,g=h*l,v=h*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*l,e[9]=v-d*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*l,f=o*u,g=a*l,v=a*u;e[0]=c*l,e[4]=g*h-f,e[8]=d*h+v,e[1]=c*u,e[5]=v*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*h,g=a*c,v=a*h;e[0]=c*l,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*c,f=o*h,g=a*c,v=a*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=d*u+v,e[5]=o*l,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*l,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Ld)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ai.crossVectors(n,un),ai.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ai.crossVectors(n,un)),ai.normalize(),Pr.crossVectors(un,ai),s[0]=ai.x,s[4]=Pr.x,s[8]=un.x,s[1]=ai.y,s[5]=Pr.y,s[9]=un.y,s[2]=ai.z,s[6]=Pr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],E=n[7],M=n[11],k=n[15],C=s[0],U=s[4],O=s[8],b=s[12],S=s[1],L=s[5],$=s[9],Z=s[13],j=s[2],lt=s[6],K=s[10],dt=s[14],Q=s[3],q=s[7],gt=s[11],vt=s[15];return r[0]=o*C+a*S+c*j+h*Q,r[4]=o*U+a*L+c*lt+h*q,r[8]=o*O+a*$+c*K+h*gt,r[12]=o*b+a*Z+c*dt+h*vt,r[1]=l*C+u*S+d*j+f*Q,r[5]=l*U+u*L+d*lt+f*q,r[9]=l*O+u*$+d*K+f*gt,r[13]=l*b+u*Z+d*dt+f*vt,r[2]=g*C+v*S+m*j+p*Q,r[6]=g*U+v*L+m*lt+p*q,r[10]=g*O+v*$+m*K+p*gt,r[14]=g*b+v*Z+m*dt+p*vt,r[3]=T*C+E*S+M*j+k*Q,r[7]=T*U+E*L+M*lt+k*q,r[11]=T*O+E*$+M*K+k*gt,r[15]=T*b+E*Z+M*dt+k*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*h*u-r*a*d+n*h*d+s*a*f-n*c*f)+v*(+e*c*f-e*h*d+r*o*d-s*o*f+s*h*l-r*c*l)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*l-n*h*l)+p*(-s*a*l-e*c*u+e*a*d+s*o*u-n*o*d+n*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],T=u*m*h-v*d*h+v*c*f-a*m*f-u*c*p+a*d*p,E=g*d*h-l*m*h-g*c*f+o*m*f+l*c*p-o*d*p,M=l*v*h-g*u*h+g*a*f-o*v*f-l*a*p+o*u*p,k=g*u*c-l*v*c-g*a*d+o*v*d+l*a*m-o*u*m,C=e*T+n*E+s*M+r*k;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=T*U,t[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*U,t[2]=(a*m*r-v*c*r+v*s*h-n*m*h-a*s*p+n*c*p)*U,t[3]=(u*c*r-a*d*r-u*s*h+n*d*h+a*s*f-n*c*f)*U,t[4]=E*U,t[5]=(l*m*r-g*d*r+g*s*f-e*m*f-l*s*p+e*d*p)*U,t[6]=(g*c*r-o*m*r-g*s*h+e*m*h+o*s*p-e*c*p)*U,t[7]=(o*d*r-l*c*r+l*s*h-e*d*h-o*s*f+e*c*f)*U,t[8]=M*U,t[9]=(g*u*r-l*v*r-g*n*f+e*v*f+l*n*p-e*u*p)*U,t[10]=(o*v*r-g*a*r+g*n*h-e*v*h-o*n*p+e*a*p)*U,t[11]=(l*a*r-o*u*r-l*n*h+e*u*h+o*n*f-e*a*f)*U,t[12]=k*U,t[13]=(l*v*s-g*u*s+g*n*d-e*v*d-l*n*m+e*u*m)*U,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*U,t[15]=(o*u*s-l*a*s+l*n*c-e*u*c-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+n,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,u=a+a,d=r*h,f=r*l,g=r*u,v=o*l,m=o*u,p=a*u,T=c*h,E=c*l,M=c*u,k=n.x,C=n.y,U=n.z;return s[0]=(1-(v+p))*k,s[1]=(f+M)*k,s[2]=(g-E)*k,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(d+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+E)*U,s[9]=(m-T)*U,s[10]=(1-(d+v))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let h=1/r,l=1/o,u=1/a;return An.elements[0]*=h,An.elements[1]*=h,An.elements[2]*=h,An.elements[4]*=l,An.elements[5]*=l,An.elements[6]*=l,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Zn){let c=this.elements,h=2*r/(e-t),l=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Zn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Zn){let c=this.elements,h=1/(e-t),l=1/(n-s),u=1/(o-r),d=(e+t)*h,f=(n+s)*l,g,v;if(a===Zn)g=(o+r)*u,v=-2*u;else if(a===ao)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new A,An=new ne,Dd=new A(0,0,0),Ld=new A(1,1,1),ai=new A,Pr=new A,un=new A,Vl=new ne,kl=new je,Bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ud=0,Gl=new A,ji=new je,Wn=new ne,Ir=new A,Hs=new A,Nd=new A,Od=new je,Wl=new A(1,0,0),Xl=new A(0,1,0),ql=new A(0,0,1),Yl={type:"added"},Fd={type:"removed"},Qi={type:"childadded",child:null},oa={type:"childremoved",child:null},Ye=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Bn,n=new je,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Qt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Hs,Ir,this.up):Wn.lookAt(Ir,Hs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ye.DEFAULT_UP=new A(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new A,Xn=new A,aa=new A,qn=new A,ts=new A,es=new A,Zl=new A,ca=new A,la=new A,ha=new A,ua=new Pe,da=new Pe,fa=new Pe,ui=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Xn.subVectors(n,e),aa.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(Xn),c=Rn.dot(aa),h=Xn.dot(Xn),l=Xn.dot(aa),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*c-a*l)*d,g=(o*l-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(da,r.y),o.addScaledVector(fa,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Xn.subVectors(t,e),Rn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Rn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,n),es.subVectors(r,n),ca.subVectors(t,n);let c=ts.dot(ca),h=es.dot(ca);if(c<=0&&h<=0)return e.copy(n);la.subVectors(t,s);let l=ts.dot(la),u=es.dot(la);if(l>=0&&u<=l)return e.copy(s);let d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(n).addScaledVector(ts,o);ha.subVectors(t,r);let f=ts.dot(ha),g=es.dot(ha);if(g>=0&&f<=g)return e.copy(r);let v=f*h-c*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(es,a);let m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return Zl.subVectors(r,s),a=(u-l)/(u-l+(f-g)),e.copy(s).addScaledVector(Zl,a);let p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=ll(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pa(o,r,t+1/3),this.g=pa(o,r,t),this.b=pa(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return le.fromWorkingColorSpace(We.copy(this),t),Math.round(Ue(We.r*255,0,255))*65536+Math.round(Ue(We.g*255,0,255))*256+Math.round(Ue(We.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Je){le.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Dr);let n=Js(ci.h,Dr.h,e),s=Js(ci.s,Dr.s,e),r=Js(ci.l,Dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Yt;Yt.NAMES=tu;var zd=0,Pn=class extends Kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=zn(),this.name="",this.blending=fs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},rn=class extends Pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new A,Lr=new ct,Re=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pc&&(t.usage=this.usage),t}};var uo=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fo=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=0,_n=new ne,ma=new Ye,ns=new A,dn=new jn,Vs=new jn,Ve=new A,Se=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(dn.min,Vs.min),dn.expandByPoint(Ve),Ve.addVectors(dn.max,Vs.max),dn.expandByPoint(Ve)):(dn.expandByPoint(Vs.min),dn.expandByPoint(Vs.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Ve.fromBufferAttribute(a,h),c&&(ns.fromBufferAttribute(t,h),Ve.add(ns)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<n.count;O++)a[O]=new A,c[O]=new A;let h=new A,l=new A,u=new A,d=new ct,f=new ct,g=new ct,v=new A,m=new A;function p(O,b,S){h.fromBufferAttribute(n,O),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),l.sub(h),u.sub(h),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(L),a[O].add(v),a[b].add(v),a[S].add(v),c[O].add(m),c[b].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,b=T.length;O<b;++O){let S=T[O],L=S.start,$=S.count;for(let Z=L,j=L+$;Z<j;Z+=3)p(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let E=new A,M=new A,k=new A,C=new A;function U(O){k.fromBufferAttribute(s,O),C.copy(k);let b=a[O];E.copy(b),E.sub(k.multiplyScalar(k.dot(b))).normalize(),M.crossVectors(C,b);let L=M.dot(c[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,L)}for(let O=0,b=T.length;O<b;++O){let S=T[O],L=S.start,$=S.count;for(let Z=L,j=L+$;Z<j;Z+=3)U(t.getX(Z+0)),U(t.getX(Z+1)),U(t.getX(Z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,c=new A,h=new A,l=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,u=a.normalized,d=new h.constructor(c.length*l),f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*l;for(let p=0;p<l;p++)d[g++]=h[f++]}return new Re(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){let d=h[l],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$l=new ne,wi=new Ni,Ur=new _i,Jl=new A,Nr=new A,Or=new A,Fr=new A,ga=new A,zr=new A,Kl=new A,Br=new A,Me=class extends Ye{constructor(t=new Se,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],u=r[c];l!==0&&(ga.fromBufferAttribute(u,t),o?zr.addScaledVector(ga,l):zr.addScaledVector(ga.sub(e),l))}e.add(zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Ur.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ur,Jl)===null||wi.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&($l.copy(r).invert(),wi.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,k=E;M<k;M+=3){let C=a.getX(M),U=a.getX(M+1),O=a.getX(M+2);s=Hr(this,p,t,n,h,l,u,C,U,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let T=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);s=Hr(this,o,t,n,h,l,u,T,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=T,k=E;M<k;M+=3){let C=M,U=M+1,O=M+2;s=Hr(this,p,t,n,h,l,u,C,U,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let T=m,E=m+1,M=m+2;s=Hr(this,o,t,n,h,l,u,T,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Hd(i,t,e,n,s,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===pi,a),c===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Br);return h<e.near||h>e.far?null:{distance:h,point:Br.clone(),object:i}}function Hr(i,t,e,n,s,r,o,a,c,h){i.getVertexPosition(a,Nr),i.getVertexPosition(c,Or),i.getVertexPosition(h,Fr);let l=Hd(i,t,e,n,Nr,Or,Fr,Kl);if(l){let u=new A;ui.getBarycoord(Kl,Nr,Or,Fr,u),s&&(l.uv=ui.getInterpolatedAttribute(s,a,c,h,u,new ct)),r&&(l.uv1=ui.getInterpolatedAttribute(r,a,c,h,u,new ct)),o&&(l.normal=ui.getInterpolatedAttribute(o,a,c,h,u,new A),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let d={a,b:c,c:h,normal:new A,materialIndex:0};ui.getNormal(Nr,Or,Fr,d.normal),l.face=d,l.barycoord=u}return l}var Qn=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2));function g(v,m,p,T,E,M,k,C,U,O,b){let S=M/U,L=k/O,$=M/2,Z=k/2,j=C/2,lt=U+1,K=O+1,dt=0,Q=0,q=new A;for(let gt=0;gt<K;gt++){let vt=gt*L-Z;for(let Ot=0;Ot<lt;Ot++){let Jt=Ot*S-$;q[v]=Jt*T,q[m]=vt*E,q[p]=j,h.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=C>0?1:-1,l.push(q.x,q.y,q.z),u.push(Ot/U),u.push(1-gt/O),dt+=1}}for(let gt=0;gt<O;gt++)for(let vt=0;vt<U;vt++){let Ot=d+vt+lt*gt,Jt=d+vt+lt*(gt+1),nt=d+(vt+1)+lt*(gt+1),pt=d+(vt+1)+lt*gt;c.push(Ot,Jt,pt),c.push(Jt,nt,pt),Q+=6}a.addGroup(f,Q,b),f+=Q,d+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function Vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Wi={clone:ys,merge:$e},kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},po=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new A,jl=new ct,Ql=new ct,Ke=class extends po{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,jl,Ql),e.subVectors(Ql,jl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/h,s*=o.width/c,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,xc=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Ke(is,ss,t,e);r.layers=this.layers,this.add(r);let o=new Ke(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new Ke(is,ss,t,e);a.layers=this.layers,this.add(a);let c=new Ke(is,ss,t,e);c.layers=this.layers,this.add(c);let h=new Ke(is,ss,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},mo=class extends nn{constructor(t,e,n,s,r,o,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vc=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:On}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Ne});r.uniforms.tEquirect.value=e;let o=new Me(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=On),new xc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_a=new A,Wd=new A,Xd=new Qt,fn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_a.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(_a).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new _i,Vr=new A,ir=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,o=new fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],T=s[13],E=s[14],M=s[15];if(n[0].setComponents(c-r,d-h,m-f,M-p).normalize(),n[1].setComponents(c+r,d+h,m+f,M+p).normalize(),n[2].setComponents(c+o,d+l,m+g,M+T).normalize(),n[3].setComponents(c-o,d-l,m-g,M-T).normalize(),n[4].setComponents(c-a,d-u,m-v,M-E).normalize(),e===Zn)n[5].setComponents(c+a,d+u,m+v,M+E).normalize();else if(e===ao)n[5].setComponents(a,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qd(i){let t=new WeakMap;function e(a,c){let h=a.array,l=a.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,l),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,h){let l=c.array,u=c.updateRanges;if(i.bindBuffer(h,a),u.length===0)i.bufferSubData(h,0,l);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:r,update:o}}var xi=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,l=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<l;p++){let T=p*d-o;for(let E=0;E<h;E++){let M=E*u-r;g.push(M,-T,0),v.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let E=T+h*p,M=T+h*(p+1),k=T+1+h*(p+1),C=T+1+h*p;f.push(E,M,C),f.push(M,k,C)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Yd=`#ifdef USE_ALPHAHASH
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
}`,ee={alphahash_fragment:Yd,alphahash_pars_fragment:Zd,alphamap_fragment:$d,alphamap_pars_fragment:Jd,alphatest_fragment:Kd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:tf,batching_pars_vertex:ef,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:of,iridescence_fragment:af,bumpmap_pars_fragment:cf,clipping_planes_fragment:lf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,cube_uv_reflection_fragment:xf,defaultnormal_vertex:vf,displacementmap_pars_vertex:yf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:bf,colorspace_fragment:Ef,colorspace_pars_fragment:Tf,envmap_fragment:wf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Rf,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:Hf,envmap_vertex:Pf,fog_vertex:If,fog_pars_vertex:Df,fog_fragment:Lf,fog_pars_fragment:Uf,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Of,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:zf,lights_pars_begin:Bf,lights_toon_fragment:Vf,lights_toon_pars_fragment:kf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Wf,lights_physical_fragment:Xf,lights_physical_pars_fragment:qf,lights_fragment_begin:Yf,lights_fragment_maps:Zf,lights_fragment_end:$f,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:Ep,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Dp,skinbase_vertex:Lp,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Op,specularmap_fragment:Fp,specularmap_pars_fragment:zp,tonemapping_fragment:Bp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:kp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Zp,backgroundCube_vert:$p,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:tm,distanceRGBA_vert:em,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:om,meshbasic_vert:am,meshbasic_frag:cm,meshlambert_vert:lm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:ym,points_vert:Mm,points_frag:Sm,shadow_vert:bm,shadow_frag:Em,sprite_vert:Tm,sprite_frag:wm},It={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Nn={basic:{uniforms:$e([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:$e([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:$e([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:$e([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:$e([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:$e([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:$e([It.points,It.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:$e([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:$e([It.common,It.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:$e([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:$e([It.sprite,It.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:$e([It.common,It.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:$e([It.lights,It.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Nn.physical={uniforms:$e([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var kr={r:0,b:0,g:0},Ri=new Bn,Am=new ne;function Rm(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,h,l,u=null,d=0,f=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function v(T){let E=!1,M=g(T);M===null?p(a,c):M&&M.isColor&&(p(M,1),E=!0);let k=i.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){let M=g(E);M&&(M.isCubeTexture||M.mapping===Oo)?(l===void 0&&(l=new Me(new Qn(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ys(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(k,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ri.copy(E.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Ri)),l.material.toneMapped=le.getTransfer(M.colorSpace)!==xe,(u!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Me(new xi(2,2),new Oe({name:"BackgroundMaterial",uniforms:ys(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=le.getTransfer(M.colorSpace)!==xe,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,E){T.getRGB(kr,eu(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:v,addToRenderList:m}}function Cm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,L,$,Z,j){let lt=!1,K=u(Z,$,L);r!==K&&(r=K,h(r.object)),lt=f(S,Z,$,j),lt&&g(S,Z,$,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,M(S,L,$,Z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function u(S,L,$){let Z=$.wireframe===!0,j=n[S.id];j===void 0&&(j={},n[S.id]=j);let lt=j[L.id];lt===void 0&&(lt={},j[L.id]=lt);let K=lt[Z];return K===void 0&&(K=d(c()),lt[Z]=K),K}function d(S){let L=[],$=[],Z=[];for(let j=0;j<e;j++)L[j]=0,$[j]=0,Z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:$,attributeDivisors:Z,object:S,attributes:{},index:null}}function f(S,L,$,Z){let j=r.attributes,lt=L.attributes,K=0,dt=$.getAttributes();for(let Q in dt)if(dt[Q].location>=0){let gt=j[Q],vt=lt[Q];if(vt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),gt===void 0||gt.attribute!==vt||vt&&gt.data!==vt.data)return!0;K++}return r.attributesNum!==K||r.index!==Z}function g(S,L,$,Z){let j={},lt=L.attributes,K=0,dt=$.getAttributes();for(let Q in dt)if(dt[Q].location>=0){let gt=lt[Q];gt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor));let vt={};vt.attribute=gt,gt&&gt.data&&(vt.data=gt.data),j[Q]=vt,K++}r.attributes=j,r.attributesNum=K,r.index=Z}function v(){let S=r.newAttributes;for(let L=0,$=S.length;L<$;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){let $=r.newAttributes,Z=r.enabledAttributes,j=r.attributeDivisors;$[S]=1,Z[S]===0&&(i.enableVertexAttribArray(S),Z[S]=1),j[S]!==L&&(i.vertexAttribDivisor(S,L),j[S]=L)}function T(){let S=r.newAttributes,L=r.enabledAttributes;for(let $=0,Z=L.length;$<Z;$++)L[$]!==S[$]&&(i.disableVertexAttribArray($),L[$]=0)}function E(S,L,$,Z,j,lt,K){K===!0?i.vertexAttribIPointer(S,L,$,j,lt):i.vertexAttribPointer(S,L,$,Z,j,lt)}function M(S,L,$,Z){v();let j=Z.attributes,lt=$.getAttributes(),K=L.defaultAttributeValues;for(let dt in lt){let Q=lt[dt];if(Q.location>=0){let q=j[dt];if(q===void 0&&(dt==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),dt==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){let gt=q.normalized,vt=q.itemSize,Ot=t.get(q);if(Ot===void 0)continue;let Jt=Ot.buffer,nt=Ot.type,pt=Ot.bytesPerElement,ht=nt===i.INT||nt===i.UNSIGNED_INT||q.gpuType===el;if(q.isInterleavedBufferAttribute){let tt=q.data,Ft=tt.stride,zt=q.offset;if(tt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Q.locationSize;Ut++)p(Q.location+Ut,tt.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ut=0;Ut<Q.locationSize;Ut++)m(Q.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ut=0;Ut<Q.locationSize;Ut++)E(Q.location+Ut,vt/Q.locationSize,nt,gt,Ft*pt,(zt+vt/Q.locationSize*Ut)*pt,ht)}else{if(q.isInstancedBufferAttribute){for(let tt=0;tt<Q.locationSize;tt++)p(Q.location+tt,q.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let tt=0;tt<Q.locationSize;tt++)m(Q.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let tt=0;tt<Q.locationSize;tt++)E(Q.location+tt,vt/Q.locationSize,nt,gt,vt*pt,vt/Q.locationSize*tt*pt,ht)}}else if(K!==void 0){let gt=K[dt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(Q.location,gt);break;case 3:i.vertexAttrib3fv(Q.location,gt);break;case 4:i.vertexAttrib4fv(Q.location,gt);break;default:i.vertexAttrib1fv(Q.location,gt)}}}}T()}function k(){O();for(let S in n){let L=n[S];for(let $ in L){let Z=L[$];for(let j in Z)l(Z[j].object),delete Z[j];delete L[$]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let $ in L){let Z=L[$];for(let j in Z)l(Z[j].object),delete Z[j];delete L[$]}delete n[S.id]}function U(S){for(let L in n){let $=n[L];if($[S.id]===void 0)continue;let Z=$[S.id];for(let j in Z)l(Z[j].object),delete Z[j];delete $[S.id]}}function O(){b(),o=!0,r!==s&&(r=s,h(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function Pm(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function o(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function a(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];e.update(f,n,1)}function c(h,l,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=l[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==pn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let O=U===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==mn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fn&&!O)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:k,maxSamples:C}}function Dm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new fn,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{let T=r?0:n,E=T*4,M=p.clippingState||null;c.value=M,M=l(g,d,E,f);for(let k=0;k!==E;++k)M[k]=e[k];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==v;++E,M+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Lm(i){let t=new WeakMap;function e(o,a){return a===za?o.mapping=xs:a===Ba&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===Ba)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new vc(c.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ms=class extends po{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,th=[.125,.215,.35,.446,.526,.582],Ii=20,xa=new Ms,eh=new Yt,va=null,ya=0,Ma=0,Sa=!1,Pi=(1+Math.sqrt(5))/2,rs=1/Pi,nh=[new A(-Pi,rs,0),new A(Pi,rs,0),new A(-rs,0,Pi),new A(rs,0,Pi),new A(0,Pi,-rs),new A(0,Pi,rs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Ss=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,ya,Ma),this._renderer.xr.enabled=Sa,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Hn,format:pn,colorSpace:Ps,depthBuffer:!1},s=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Nm(r,t,e)}return s}_compileMaterial(t){let e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,s){let a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(eh),l.toneMapping=di,l.autoClear=!1;let f=new rn({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new Me(new Qn,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(eh),v=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));let E=this._cubeSize;Gr(s,T*E,p>2?E:0,E,E),l.setRenderTarget(s),v&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Gr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nh[(s-r-1)%nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new Me(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),v=r/g,m=isFinite(r)?1+Math.floor(l*v):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],T=0;for(let U=0;U<Ii;++U){let O=U/v,b=Math.exp(-O*O/2);p.push(b),U===0?T+=b:U<m&&(T+=2*b)}for(let U=0;U<p.length;U++)p[U]=p[U]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let M=this._sizeLods[s],k=3*M*(s>E-us?s-E+us:0),C=4*(this._cubeSize-M);Gr(e,k,C,3*M,2*M),c.setRenderTarget(e),c.render(u,xa)}};function Um(i){let t=[],e=[],n=[],s=i,r=i-us+1+th.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-us?c=th[o-i+us-1]:o===0&&(c=0),n.push(c);let h=1/(a-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,v=3,m=2,p=1,T=new Float32Array(v*g*f),E=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let C=0;C<f;C++){let U=C%3*2/3-1,O=C>2?0:-1,b=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];T.set(b,v*g*C),E.set(d,m*g*C);let S=[C,C,C,C,C,C];M.set(S,p*g*C)}let k=new Se;k.setAttribute("position",new Re(T,v)),k.setAttribute("uv",new Re(E,m)),k.setAttribute("faceIndex",new Re(M,p)),t.push(k),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nm(i,t,e){let n=new Float32Array(Ii),s=new A(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function sh(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function rh(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ne,depthTest:!1,depthWrite:!1})}function hl(){return`

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
	`}function Om(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,h=c===za||c===Ba,l=c===xs||c===vs;if(h||l){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ss(i)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||l&&f&&s(f)?(e===null&&(e=new Ss(i)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zm(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let T=f.array;v=f.version;for(let E=0,M=T.length;E<M;E+=3){let k=T[E+0],C=T[E+1],U=T[E+2];d.push(k,C,C,U,U,k)}}else if(g!==void 0){let T=g.array;v=g.version;for(let E=0,M=T.length/3-1;E<M;E+=3){let k=E+0,C=E+1,U=E+2;d.push(k,C,C,U,U,k)}}else return;let m=new(Qh(d)?fo:uo)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function l(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function Bm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function l(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*v[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function Hm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vm(i,t,e){let n=new WeakMap,s=new Pe;function r(o,a,c){let h=o.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=a.attributes.position.count*E,k=1;M>t.maxTextureSize&&(k=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*k*4*u),U=new ho(C,M,k,u);U.type=Fn,U.needsUpdate=!0;let O=E*4;for(let S=0;S<u;S++){let L=m[S],$=p[S],Z=T[S],j=M*k*4*S;for(let lt=0;lt<L.count;lt++){let K=lt*O;f===!0&&(s.fromBufferAttribute(L,lt),C[j+K+0]=s.x,C[j+K+1]=s.y,C[j+K+2]=s.z,C[j+K+3]=0),g===!0&&(s.fromBufferAttribute($,lt),C[j+K+4]=s.x,C[j+K+5]=s.y,C[j+K+6]=s.z,C[j+K+7]=0),v===!0&&(s.fromBufferAttribute(Z,lt),C[j+K+8]=s.x,C[j+K+9]=s.y,C[j+K+10]=s.z,C[j+K+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:U,size:new ct(M,k)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<h.length;v++)f+=h[v];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function km(i,t,e,n){let s=new WeakMap;function r(c){let h=n.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var vi=class extends nn{constructor(t,e,n,s,r,o,a,c,h,l=ps){if(l!==ps&&l!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ps&&(n=Ui),n===void 0&&l===gi&&(n=mi),super(null,s,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},iu=new nn,oh=new vi(1,1),su=new ho,ru=new _c,ou=new mo,ah=[],ch=[],lh=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ah[s];if(r===void 0&&(r=new Float32Array(s),ah[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;uh.set(n),i.uniformMatrix2fv(this.addr,!1,uh),ze(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),ze(e,n)}}function $m(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),ze(e,n)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oh.compareFunction=Kh,r=oh):r=iu,e.setTexture2D(t||r,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ru,s)}function o0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ou,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||su,s)}function c0(i){switch(i){case 5126:return Gm;case 35664:return Wm;case 35665:return Xm;case 35666:return qm;case 35674:return Ym;case 35675:return Zm;case 35676:return $m;case 5124:case 35670:return Jm;case 35667:case 35671:return Km;case 35668:case 35672:return jm;case 35669:case 35673:return Qm;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}function l0(i,t){i.uniform1fv(this.addr,t)}function h0(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function u0(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function d0(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function f0(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p0(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m0(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g0(i,t){i.uniform1iv(this.addr,t)}function _0(i,t){i.uniform2iv(this.addr,t)}function x0(i,t){i.uniform3iv(this.addr,t)}function v0(i,t){i.uniform4iv(this.addr,t)}function y0(i,t){i.uniform1uiv(this.addr,t)}function M0(i,t){i.uniform2uiv(this.addr,t)}function S0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function E0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||iu,r[o])}function T0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ru,r[o])}function w0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ou,r[o])}function A0(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||su,r[o])}function R0(i){switch(i){case 5126:return l0;case 35664:return h0;case 35665:return u0;case 35666:return d0;case 35674:return f0;case 35675:return p0;case 35676:return m0;case 5124:case 35670:return g0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return M0;case 36295:return S0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return A0}}var yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c0(e.type)}},Mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}},Sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ba=/(\w+)(\])?(\[|\.)?/g;function dh(i,t){i.seq.push(t),i.map[t.id]=t}function C0(i,t,e){let n=i.name,s=n.length;for(ba.lastIndex=0;;){let r=ba.exec(n),o=ba.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){dh(e,h===void 0?new yc(a,i,t):new Mc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sc(a),dh(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var P0=37297,I0=0;function D0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ph=new Qt;function L0(i){le._getMatrix(ph,le.workingColorSpace,i);let t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D0(i.getShaderSource(t),o)}else return s}function U0(i,t){let e=L0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,t){let e;switch(t){case qu:e="Linear";break;case Yu:e="Reinhard";break;case Zu:e="Cineon";break;case $u:e="ACESFilmic";break;case Ku:e="AgX";break;case tl:e="Neutral";break;case Ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wr=new A;function O0(){le.getLuminanceCoefficients(Wr);let i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function z0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zs(i){return i!==""}function gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(H0,k0)}var V0=new Map;function k0(i,t){let e=ee[t];if(e===void 0){let n=V0.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}var G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(G0,W0)}function W0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function X0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case vs:t="ENVMAP_TYPE_CUBE";break;case Oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Z0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wu:t="ENVMAP_BLENDING_MIX";break;case Xu:t="ENVMAP_BLENDING_ADD";break}return t}function $0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=X0(e),h=q0(e),l=Y0(e),u=Z0(e),d=$0(e),f=F0(e),g=z0(r),v=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(m=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?ee.tonemapping_pars_fragment:"",e.toneMapping!==di?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),O0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=bc(o),o=gh(o,e),o=_h(o,e),a=bc(a),a=gh(a,e),a=_h(a,e),o=xh(o),a=xh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=T+m+o,M=T+p+a,k=fh(s,s.VERTEX_SHADER,E),C=fh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,k),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(L){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(v).trim(),Z=s.getShaderInfoLog(k).trim(),j=s.getShaderInfoLog(C).trim(),lt=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,k,C);else{let dt=mh(s,k,"vertex"),Q=mh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+dt+`
`+Q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Z===""||j==="")&&(K=!1);K&&(L.diagnostics={runnable:lt,programLog:$,vertexShader:{log:Z,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(k),s.deleteShader(C),O=new gs(s,v),b=B0(s,v)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,P0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=C,this}var K0=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tc(t),e.set(t,n)),n}},Tc=class{constructor(t){this.id=K0++,this.code=t,this.usedTimes=0}};function j0(i,t,e,n,s,r,o){let a=new nr,c=new Ec,h=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return h.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,$,Z){let j=$.fog,lt=Z.geometry,K=b.isMeshStandardMaterial?$.environment:null,dt=(b.isMeshStandardMaterial?e:t).get(b.envMap||K),Q=dt&&dt.mapping===Oo?dt.image.height:null,q=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let gt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,vt=gt!==void 0?gt.length:0,Ot=0;lt.morphAttributes.position!==void 0&&(Ot=1),lt.morphAttributes.normal!==void 0&&(Ot=2),lt.morphAttributes.color!==void 0&&(Ot=3);let Jt,nt,pt,ht;if(q){let Kt=Nn[q];Jt=Kt.vertexShader,nt=Kt.fragmentShader}else Jt=b.vertexShader,nt=b.fragmentShader,c.update(b),pt=c.getVertexShaderID(b),ht=c.getFragmentShaderID(b);let tt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),zt=Z.isInstancedMesh===!0,Ut=Z.isBatchedMesh===!0,$t=!!b.map,rt=!!b.matcap,_t=!!dt,R=!!b.aoMap,Y=!!b.lightMap,N=!!b.bumpMap,H=!!b.normalMap,z=!!b.displacementMap,at=!!b.emissiveMap,G=!!b.metalnessMap,y=!!b.roughnessMap,x=b.anisotropy>0,P=b.clearcoat>0,X=b.dispersion>0,B=b.iridescence>0,W=b.sheen>0,ut=b.transmission>0,ot=x&&!!b.anisotropyMap,mt=P&&!!b.clearcoatMap,Rt=P&&!!b.clearcoatNormalMap,it=P&&!!b.clearcoatRoughnessMap,ft=B&&!!b.iridescenceMap,At=B&&!!b.iridescenceThicknessMap,xt=W&&!!b.sheenColorMap,St=W&&!!b.sheenRoughnessMap,Gt=!!b.specularMap,Ht=!!b.specularColorMap,Dt=!!b.specularIntensityMap,V=ut&&!!b.transmissionMap,bt=ut&&!!b.thicknessMap,J=!!b.gradientMap,et=!!b.alphaMap,wt=b.alphaTest>0,Et=!!b.alphaHash,Bt=!!b.extensions,Mt=di;b.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Vt={shaderID:q,shaderType:b.type,shaderName:b.name,vertexShader:Jt,fragmentShader:nt,defines:b.defines,customVertexShaderID:pt,customFragmentShaderID:ht,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&Z._colorsTexture!==null,instancing:zt,instancingColor:zt&&Z.instanceColor!==null,instancingMorph:zt&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ps,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:rt,envMap:_t,envMapMode:_t&&dt.mapping,envMapCubeUVHeight:Q,aoMap:R,lightMap:Y,bumpMap:N,normalMap:H,displacementMap:d&&z,emissiveMap:at,normalMapObjectSpace:H&&b.normalMapType===ed,normalMapTangentSpace:H&&b.normalMapType===cl,metalnessMap:G,roughnessMap:y,anisotropy:x,anisotropyMap:ot,clearcoat:P,clearcoatMap:mt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:it,dispersion:X,iridescence:B,iridescenceMap:ft,iridescenceThicknessMap:At,sheen:W,sheenColorMap:xt,sheenRoughnessMap:St,specularMap:Gt,specularColorMap:Ht,specularIntensityMap:Dt,transmission:ut,transmissionMap:V,thicknessMap:bt,gradientMap:J,opaque:b.transparent===!1&&b.blending===fs&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:wt,alphaHash:Et,combine:b.combine,mapUv:$t&&v(b.map.channel),aoMapUv:R&&v(b.aoMap.channel),lightMapUv:Y&&v(b.lightMap.channel),bumpMapUv:N&&v(b.bumpMap.channel),normalMapUv:H&&v(b.normalMap.channel),displacementMapUv:z&&v(b.displacementMap.channel),emissiveMapUv:at&&v(b.emissiveMap.channel),metalnessMapUv:G&&v(b.metalnessMap.channel),roughnessMapUv:y&&v(b.roughnessMap.channel),anisotropyMapUv:ot&&v(b.anisotropyMap.channel),clearcoatMapUv:mt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(b.sheenRoughnessMap.channel),specularMapUv:Gt&&v(b.specularMap.channel),specularColorMapUv:Ht&&v(b.specularColorMap.channel),specularIntensityMapUv:Dt&&v(b.specularIntensityMap.channel),transmissionMapUv:V&&v(b.transmissionMap.channel),thicknessMapUv:bt&&v(b.thicknessMap.channel),alphaMapUv:et&&v(b.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(H||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!lt.attributes.uv&&($t||et),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:Z.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===xe,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Xe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=h.has(1),Vt.vertexUv2s=h.has(2),Vt.vertexUv3s=h.has(3),h.clear(),Vt}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(S,b),E(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function E(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let S=g[b.type],L;if(S){let $=Nn[S];L=Wi.clone($.uniforms)}else L=b.uniforms;return L}function k(b,S){let L;for(let $=0,Z=l.length;$<Z;$++){let j=l[$];if(j.cacheKey===S){L=j,++L.usedTimes;break}}return L===void 0&&(L=new J0(i,S,b,r),l.push(L)),L}function C(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),b.destroy()}}function U(b){c.remove(b)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:k,releaseProgram:C,releaseShaderCache:U,programs:l,dispose:O}}function Q0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){let p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,v,m){let p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||tg),n.length>1&&n.sort(d||yh),s.length>1&&s.sort(d||yh)}function l(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function eg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Mh,i.set(n,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Yt};break;case"SpotLight":e={position:new A,direction:new A,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){let t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new A);let s=new A,r=new ne,o=new ne;function a(h){let l=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,T=0,E=0,M=0,k=0,C=0,U=0;h.sort(rg);for(let b=0,S=h.length;b<S;b++){let L=h[b],$=L.color,Z=L.intensity,j=L.distance,lt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=$.r*Z,u+=$.g*Z,d+=$.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],Z);U++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let dt=L.shadow,Q=e.get(L);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=lt,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=K,f++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy($).multiplyScalar(Z),K.distance=j,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[v]=K;let dt=L.shadow;if(L.map&&(n.spotLightMap[k]=L.map,k++,dt.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=dt.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=lt,M++}v++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy($).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=K,m++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let dt=L.shadow,Q=e.get(L);Q.shadowIntensity=dt.intensity,Q.shadowBias=dt.bias,Q.shadowNormalBias=dt.normalBias,Q.shadowRadius=dt.radius,Q.shadowMapSize=dt.mapSize,Q.shadowCameraNear=dt.camera.near,Q.shadowCameraFar=dt.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=lt,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=K,g++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==T||O.numPointShadows!==E||O.numSpotShadows!==M||O.numSpotMaps!==k||O.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+k-C,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,O.directionalLength=f,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=T,O.numPointShadows=E,O.numSpotShadows=M,O.numSpotMaps=k,O.numLightProbes=U,n.version=sg++)}function c(h,l){let u=0,d=0,f=0,g=0,v=0,m=l.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){let E=h[p];if(E.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Sh(i){let t=new og(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function o(l){n.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ag(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Sh(i),t.set(s,[a])):r>=o.length?(a=new Sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wc=class extends Pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ac=class extends Pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cg=`void main() {
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
}`;function hg(i,t,e){let n=new ir,s=new ct,r=new ct,o=new Pe,a=new wc({depthPacking:td}),c=new Ac,h={},l=e.maxTextureSize,u={[pi]:Xe,[Xe]:pi,[xn]:xn},d=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:cg,fragmentShader:lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Me(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(C,U,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Ne),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let Z=p!==Yn&&this.type===Yn,j=p===Yn&&this.type!==Yn;for(let lt=0,K=C.length;lt<K;lt++){let dt=C[lt],Q=dt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let q=Q.getFrameExtents();if(s.multiply(q),r.copy(Q.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/q.x),s.x=r.x*q.x,Q.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/q.y),s.y=r.y*q.y,Q.mapSize.y=r.y)),Q.map===null||Z===!0||j===!0){let vt=this.type!==Yn?{minFilter:qe,magFilter:qe}:{};Q.map!==null&&Q.map.dispose(),Q.map=new sn(s.x,s.y,vt),Q.map.texture.name=dt.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let gt=Q.getViewportCount();for(let vt=0;vt<gt;vt++){let Ot=Q.getViewport(vt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),$.viewport(o),Q.updateMatrices(dt,vt),n=Q.getFrustum(),M(U,O,Q.camera,dt,this.type)}Q.isPointLightShadow!==!0&&this.type===Yn&&T(Q,O),Q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,L)};function T(C,U){let O=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,O,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,O,f,v,null)}function E(C,U,O,b){let S=null,L=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=O.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let $=S.uuid,Z=U.uuid,j=h[$];j===void 0&&(j={},h[$]=j);let lt=j[Z];lt===void 0&&(lt=S.clone(),j[Z]=lt,U.addEventListener("dispose",k)),S=lt}if(S.visible=U.visible,S.wireframe=U.wireframe,b===Yn?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:u[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let $=i.properties.get(S);$.light=O}return S}function M(C,U,O,b,S){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Yn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let Z=t.update(C),j=C.material;if(Array.isArray(j)){let lt=Z.groups;for(let K=0,dt=lt.length;K<dt;K++){let Q=lt[K],q=j[Q.materialIndex];if(q&&q.visible){let gt=E(C,q,b,S);C.onBeforeShadow(i,C,U,O,Z,gt,Q),i.renderBufferDirect(O,null,Z,gt,C,Q),C.onAfterShadow(i,C,U,O,Z,gt,Q)}}}else if(j.visible){let lt=E(C,j,b,S);C.onBeforeShadow(i,C,U,O,Z,lt,null),i.renderBufferDirect(O,null,Z,lt,C,null),C.onAfterShadow(i,C,U,O,Z,lt,null)}}let $=C.children;for(let Z=0,j=$.length;Z<j;Z++)M($[Z],U,O,b,S)}function k(C){C.target.removeEventListener("dispose",k);for(let O in h){let b=h[O],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var ug={[Ia]:Da,[La]:Oa,[Ua]:Fa,[_s]:Na,[Da]:Ia,[Oa]:La,[Fa]:Ua,[Na]:_s};function dg(i,t){function e(){let V=!1,bt=new Pe,J=null,et=new Pe(0,0,0,0);return{setMask:function(wt){J!==wt&&!V&&(i.colorMask(wt,wt,wt,wt),J=wt)},setLocked:function(wt){V=wt},setClear:function(wt,Et,Bt,Mt,Vt){Vt===!0&&(wt*=Mt,Et*=Mt,Bt*=Mt),bt.set(wt,Et,Bt,Mt),et.equals(bt)===!1&&(i.clearColor(wt,Et,Bt,Mt),et.copy(bt))},reset:function(){V=!1,J=null,et.set(-1,0,0,0)}}}function n(){let V=!1,bt=!1,J=null,et=null,wt=null;return{setReversed:function(Et){if(bt!==Et){let Bt=t.get("EXT_clip_control");bt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let Mt=wt;wt=null,this.setClear(Mt)}bt=Et},getReversed:function(){return bt},setTest:function(Et){Et?tt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Et){J!==Et&&!V&&(i.depthMask(Et),J=Et)},setFunc:function(Et){if(bt&&(Et=ug[Et]),et!==Et){switch(Et){case Ia:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Na:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=Et}},setLocked:function(Et){V=Et},setClear:function(Et){wt!==Et&&(bt&&(Et=1-Et),i.clearDepth(Et),wt=Et)},reset:function(){V=!1,J=null,et=null,wt=null,bt=!1}}}function s(){let V=!1,bt=null,J=null,et=null,wt=null,Et=null,Bt=null,Mt=null,Vt=null;return{setTest:function(Kt){V||(Kt?tt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(Kt){bt!==Kt&&!V&&(i.stencilMask(Kt),bt=Kt)},setFunc:function(Kt,be,de){(J!==Kt||et!==be||wt!==de)&&(i.stencilFunc(Kt,be,de),J=Kt,et=be,wt=de)},setOp:function(Kt,be,de){(Et!==Kt||Bt!==be||Mt!==de)&&(i.stencilOp(Kt,be,de),Et=Kt,Bt=be,Mt=de)},setLocked:function(Kt){V=Kt},setClear:function(Kt){Vt!==Kt&&(i.clearStencil(Kt),Vt=Kt)},reset:function(){V=!1,bt=null,J=null,et=null,wt=null,Et=null,Bt=null,Mt=null,Vt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,h=new WeakMap,l={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,E=null,M=null,k=null,C=null,U=new Yt(0,0,0),O=0,b=!1,S=null,L=null,$=null,Z=null,j=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,dt=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=dt>=1):Q.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=dt>=2);let q=null,gt={},vt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Jt=new Pe().fromArray(vt),nt=new Pe().fromArray(Ot);function pt(V,bt,J,et){let wt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(V,Et),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<J;Bt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(bt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Et}let ht={};ht[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(_s),N(!1),H(El),tt(i.CULL_FACE),R(Ne);function tt(V){l[V]!==!0&&(i.enable(V),l[V]=!0)}function Ft(V){l[V]!==!1&&(i.disable(V),l[V]=!1)}function zt(V,bt){return u[V]!==bt?(i.bindFramebuffer(V,bt),u[V]=bt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ut(V,bt){let J=f,et=!1;if(V){J=d.get(bt),J===void 0&&(J=[],d.set(bt,J));let wt=V.textures;if(J.length!==wt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Bt=wt.length;Et<Bt;Et++)J[Et]=i.COLOR_ATTACHMENT0+Et;J.length=wt.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function $t(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let rt={[vn]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};rt[Du]=i.MIN,rt[Lu]=i.MAX;let _t={[Cs]:i.ZERO,[Uu]:i.ONE,[Nu]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[No]:i.DST_COLOR,[Uo]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[Pa]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function R(V,bt,J,et,wt,Et,Bt,Mt,Vt,Kt){if(V===Ne){v===!0&&(Ft(i.BLEND),v=!1);return}if(v===!1&&(tt(i.BLEND),v=!0),V!==Qc){if(V!==m||Kt!==b){if((p!==vn||M!==vn)&&(i.blendEquation(i.FUNC_ADD),p=vn,M=vn),Kt)switch(V){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.ONE,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}T=null,E=null,k=null,C=null,U.set(0,0,0),O=0,m=V,b=Kt}return}wt=wt||bt,Et=Et||J,Bt=Bt||et,(bt!==p||wt!==M)&&(i.blendEquationSeparate(rt[bt],rt[wt]),p=bt,M=wt),(J!==T||et!==E||Et!==k||Bt!==C)&&(i.blendFuncSeparate(_t[J],_t[et],_t[Et],_t[Bt]),T=J,E=et,k=Et,C=Bt),(Mt.equals(U)===!1||Vt!==O)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Vt),U.copy(Mt),O=Vt),m=V,b=!1}function Y(V,bt){V.side===xn?Ft(i.CULL_FACE):tt(i.CULL_FACE);let J=V.side===Xe;bt&&(J=!J),N(J),V.blending===fs&&V.transparent===!1?R(Ne):R(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let et=V.stencilWrite;a.setTest(et),et&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),at(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function N(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function H(V){V!==Ru?(tt(i.CULL_FACE),V!==L&&(V===El?i.cullFace(i.BACK):V===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),L=V}function z(V){V!==$&&(K&&i.lineWidth(V),$=V)}function at(V,bt,J){V?(tt(i.POLYGON_OFFSET_FILL),(Z!==bt||j!==J)&&(i.polygonOffset(bt,J),Z=bt,j=J)):Ft(i.POLYGON_OFFSET_FILL)}function G(V){V?tt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function y(V){V===void 0&&(V=i.TEXTURE0+lt-1),q!==V&&(i.activeTexture(V),q=V)}function x(V,bt,J){J===void 0&&(q===null?J=i.TEXTURE0+lt-1:J=q);let et=gt[J];et===void 0&&(et={type:void 0,texture:void 0},gt[J]=et),(et.type!==V||et.texture!==bt)&&(q!==J&&(i.activeTexture(J),q=J),i.bindTexture(V,bt||ht[V]),et.type=V,et.texture=bt)}function P(){let V=gt[q];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(V){Jt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Jt.copy(V))}function St(V){nt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),nt.copy(V))}function Gt(V,bt){let J=h.get(bt);J===void 0&&(J=new WeakMap,h.set(bt,J));let et=J.get(V);et===void 0&&(et=i.getUniformBlockIndex(bt,V.name),J.set(V,et))}function Ht(V,bt){let et=h.get(bt).get(V);c.get(bt)!==et&&(i.uniformBlockBinding(bt,et,V.__bindingPointIndex),c.set(bt,et))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},q=null,gt={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,T=null,E=null,M=null,k=null,C=null,U=new Yt(0,0,0),O=0,b=!1,S=null,L=null,$=null,Z=null,j=null,Jt.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:Ft,bindFramebuffer:zt,drawBuffers:Ut,useProgram:$t,setBlending:R,setMaterial:Y,setFlipSided:N,setCullFace:H,setLineWidth:z,setPolygonOffset:at,setScissorTest:G,activeTexture:y,bindTexture:x,unbindTexture:P,compressedTexImage2D:X,compressedTexImage3D:B,texImage2D:ft,texImage3D:At,updateUBOMapping:Gt,uniformBlockBinding:Ht,texStorage2D:Rt,texStorage3D:it,texSubImage2D:W,texSubImage3D:ut,compressedTexSubImage2D:ot,compressedTexSubImage3D:mt,scissor:xt,viewport:St,reset:Dt}}function bh(i,t,e,n){let s=fg(n);switch(e){case Xh:return i*t;case Yh:return i*t;case Zh:return i*t*2;case sl:return i*t/s.components*s.byteLength;case rl:return i*t/s.components*s.byteLength;case $h:return i*t*2/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case qh:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case al:return i*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:case Wa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Ga:return Math.max(i,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ro:case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jh:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fg(i){switch(i){case mn:case kh:return{byteLength:1,components:1};case tr:case Gh:case Hn:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Ui:case el:case Fn:return{byteLength:4,components:1};case Wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return f?new OffscreenCanvas(y,x):co("canvas")}function v(y,x,P){let X=1,B=G(y);if((B.width>P||B.height>P)&&(X=P/Math.max(B.width,B.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let W=Math.floor(X*B.width),ut=Math.floor(X*B.height);u===void 0&&(u=g(W,ut));let ot=x?g(W,ut):u;return ot.width=W,ot.height=ut,ot.getContext("2d").drawImage(y,0,0,W,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+W+"x"+ut+")."),ot}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){i.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(y,x,P,X,B=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=x;if(x===i.RED&&(P===i.FLOAT&&(W=i.R32F),P===i.HALF_FLOAT&&(W=i.R16F),P===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(W=i.R8UI),P===i.UNSIGNED_SHORT&&(W=i.R16UI),P===i.UNSIGNED_INT&&(W=i.R32UI),P===i.BYTE&&(W=i.R8I),P===i.SHORT&&(W=i.R16I),P===i.INT&&(W=i.R32I)),x===i.RG&&(P===i.FLOAT&&(W=i.RG32F),P===i.HALF_FLOAT&&(W=i.RG16F),P===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(W=i.RG8UI),P===i.UNSIGNED_SHORT&&(W=i.RG16UI),P===i.UNSIGNED_INT&&(W=i.RG32UI),P===i.BYTE&&(W=i.RG8I),P===i.SHORT&&(W=i.RG16I),P===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(W=i.RGB8UI),P===i.UNSIGNED_SHORT&&(W=i.RGB16UI),P===i.UNSIGNED_INT&&(W=i.RGB32UI),P===i.BYTE&&(W=i.RGB8I),P===i.SHORT&&(W=i.RGB16I),P===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),P===i.UNSIGNED_INT&&(W=i.RGBA32UI),P===i.BYTE&&(W=i.RGBA8I),P===i.SHORT&&(W=i.RGBA16I),P===i.INT&&(W=i.RGBA32I)),x===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),x===i.RGBA){let ut=B?Fo:le.getTransfer(X);P===i.FLOAT&&(W=i.RGBA32F),P===i.HALF_FLOAT&&(W=i.RGBA16F),P===i.UNSIGNED_BYTE&&(W=ut===xe?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function M(y,x){let P;return y?x===null||x===Ui||x===mi?P=i.DEPTH24_STENCIL8:x===Fn?P=i.DEPTH32F_STENCIL8:x===tr&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ui||x===mi?P=i.DEPTH_COMPONENT24:x===Fn?P=i.DEPTH_COMPONENT32F:x===tr&&(P=i.DEPTH_COMPONENT16),P}function k(y,x){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==qe&&y.minFilter!==On?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function C(y){let x=y.target;x.removeEventListener("dispose",C),O(x),x.isVideoTexture&&l.delete(x)}function U(y){let x=y.target;x.removeEventListener("dispose",U),S(x)}function O(y){let x=n.get(y);if(x.__webglInit===void 0)return;let P=y.source,X=d.get(P);if(X){let B=X[x.__cacheKey];B.usedTimes--,B.usedTimes===0&&b(y),Object.keys(X).length===0&&d.delete(P)}n.remove(y)}function b(y){let x=n.get(y);i.deleteTexture(x.__webglTexture);let P=y.source,X=d.get(P);delete X[x.__cacheKey],o.memory.textures--}function S(y){let x=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let B=0;B<x.__webglFramebuffer[X].length;B++)i.deleteFramebuffer(x.__webglFramebuffer[X][B]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=y.textures;for(let X=0,B=P.length;X<B;X++){let W=n.get(P[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(P[X])}n.remove(y)}let L=0;function $(){L=0}function Z(){let y=L;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),L+=1,y}function j(y){let x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function lt(y,x){let P=n.get(y);if(y.isVideoTexture&&z(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){let X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(P,y,x);return}}e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+x)}function K(y,x){let P=n.get(y);if(y.version>0&&P.__version!==y.version){nt(P,y,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+x)}function dt(y,x){let P=n.get(y);if(y.version>0&&P.__version!==y.version){nt(P,y,x);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+x)}function Q(y,x){let P=n.get(y);if(y.version>0&&P.__version!==y.version){pt(P,y,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+x)}let q={[Jn]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},gt={[qe]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},vt={[nd]:i.NEVER,[cd]:i.ALWAYS,[id]:i.LESS,[Kh]:i.LEQUAL,[sd]:i.EQUAL,[ad]:i.GEQUAL,[rd]:i.GREATER,[od]:i.NOTEQUAL};function Ot(y,x){if(x.type===Fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===On||x.magFilter===Jo||x.magFilter===Er||x.magFilter===Li||x.minFilter===On||x.minFilter===Jo||x.minFilter===Er||x.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,q[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,q[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,q[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,gt[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qe||x.minFilter!==Er&&x.minFilter!==Li||x.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(y,x){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,B=d.get(X);B===void 0&&(B={},d.set(X,B));let W=j(x);if(W!==y.__cacheKey){B[W]===void 0&&(B[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),B[W].usedTimes++;let ut=B[y.__cacheKey];ut!==void 0&&(B[y.__cacheKey].usedTimes--,ut.usedTimes===0&&b(x)),y.__cacheKey=W,y.__webglTexture=B[W].texture}return P}function nt(y,x,P){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let B=Jt(y,x),W=x.source;e.bindTexture(X,y.__webglTexture,i.TEXTURE0+P);let ut=n.get(W);if(W.version!==ut.__version||B===!0){e.activeTexture(i.TEXTURE0+P);let ot=le.getPrimaries(le.workingColorSpace),mt=x.colorSpace===hi?null:le.getPrimaries(x.colorSpace),Rt=x.colorSpace===hi||ot===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let it=v(x.image,!1,s.maxTextureSize);it=at(x,it);let ft=r.convert(x.format,x.colorSpace),At=r.convert(x.type),xt=E(x.internalFormat,ft,At,x.colorSpace,x.isVideoTexture);Ot(X,x);let St,Gt=x.mipmaps,Ht=x.isVideoTexture!==!0,Dt=ut.__version===void 0||B===!0,V=W.dataReady,bt=k(x,it);if(x.isDepthTexture)xt=M(x.format===gi,x.type),Dt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,xt,it.width,it.height,0,ft,At,null));else if(x.isDataTexture)if(Gt.length>0){Ht&&Dt&&e.texStorage2D(i.TEXTURE_2D,bt,xt,Gt[0].width,Gt[0].height);for(let J=0,et=Gt.length;J<et;J++)St=Gt[J],Ht?V&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,St.width,St.height,ft,At,St.data):e.texImage2D(i.TEXTURE_2D,J,xt,St.width,St.height,0,ft,At,St.data);x.generateMipmaps=!1}else Ht?(Dt&&e.texStorage2D(i.TEXTURE_2D,bt,xt,it.width,it.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ft,At,it.data)):e.texImage2D(i.TEXTURE_2D,0,xt,it.width,it.height,0,ft,At,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,xt,Gt[0].width,Gt[0].height,it.depth);for(let J=0,et=Gt.length;J<et;J++)if(St=Gt[J],x.format!==pn)if(ft!==null)if(Ht){if(V)if(x.layerUpdates.size>0){let wt=bh(St.width,St.height,x.format,x.type);for(let Et of x.layerUpdates){let Bt=St.data.subarray(Et*wt/St.data.BYTES_PER_ELEMENT,(Et+1)*wt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Et,St.width,St.height,1,ft,Bt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,St.width,St.height,it.depth,ft,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,xt,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,St.width,St.height,it.depth,ft,At,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,xt,St.width,St.height,it.depth,0,ft,At,St.data)}else{Ht&&Dt&&e.texStorage2D(i.TEXTURE_2D,bt,xt,Gt[0].width,Gt[0].height);for(let J=0,et=Gt.length;J<et;J++)St=Gt[J],x.format!==pn?ft!==null?Ht?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,St.width,St.height,ft,St.data):e.compressedTexImage2D(i.TEXTURE_2D,J,xt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?V&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,St.width,St.height,ft,At,St.data):e.texImage2D(i.TEXTURE_2D,J,xt,St.width,St.height,0,ft,At,St.data)}else if(x.isDataArrayTexture)if(Ht){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,xt,it.width,it.height,it.depth),V)if(x.layerUpdates.size>0){let J=bh(it.width,it.height,x.format,x.type);for(let et of x.layerUpdates){let wt=it.data.subarray(et*J/it.data.BYTES_PER_ELEMENT,(et+1)*J/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,it.width,it.height,1,ft,At,wt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,At,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,ft,At,it.data);else if(x.isData3DTexture)Ht?(Dt&&e.texStorage3D(i.TEXTURE_3D,bt,xt,it.width,it.height,it.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,At,it.data)):e.texImage3D(i.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,ft,At,it.data);else if(x.isFramebufferTexture){if(Dt)if(Ht)e.texStorage2D(i.TEXTURE_2D,bt,xt,it.width,it.height);else{let J=it.width,et=it.height;for(let wt=0;wt<bt;wt++)e.texImage2D(i.TEXTURE_2D,wt,xt,J,et,0,ft,At,null),J>>=1,et>>=1}}else if(Gt.length>0){if(Ht&&Dt){let J=G(Gt[0]);e.texStorage2D(i.TEXTURE_2D,bt,xt,J.width,J.height)}for(let J=0,et=Gt.length;J<et;J++)St=Gt[J],Ht?V&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ft,At,St):e.texImage2D(i.TEXTURE_2D,J,xt,ft,At,St);x.generateMipmaps=!1}else if(Ht){if(Dt){let J=G(it);e.texStorage2D(i.TEXTURE_2D,bt,xt,J.width,J.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,At,it)}else e.texImage2D(i.TEXTURE_2D,0,xt,ft,At,it);m(x)&&p(X),ut.__version=W.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function pt(y,x,P){if(x.image.length!==6)return;let X=Jt(y,x),B=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+P);let W=n.get(B);if(B.version!==W.__version||X===!0){e.activeTexture(i.TEXTURE0+P);let ut=le.getPrimaries(le.workingColorSpace),ot=x.colorSpace===hi?null:le.getPrimaries(x.colorSpace),mt=x.colorSpace===hi||ut===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Rt=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let et=0;et<6;et++)!Rt&&!it?ft[et]=v(x.image[et],!0,s.maxCubemapSize):ft[et]=it?x.image[et].image:x.image[et],ft[et]=at(x,ft[et]);let At=ft[0],xt=r.convert(x.format,x.colorSpace),St=r.convert(x.type),Gt=E(x.internalFormat,xt,St,x.colorSpace),Ht=x.isVideoTexture!==!0,Dt=W.__version===void 0||X===!0,V=B.dataReady,bt=k(x,At);Ot(i.TEXTURE_CUBE_MAP,x);let J;if(Rt){Ht&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Gt,At.width,At.height);for(let et=0;et<6;et++){J=ft[et].mipmaps;for(let wt=0;wt<J.length;wt++){let Et=J[wt];x.format!==pn?xt!==null?Ht?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Et.width,Et.height,xt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,Et.width,Et.height,xt,St,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Gt,Et.width,Et.height,0,xt,St,Et.data)}}}else{if(J=x.mipmaps,Ht&&Dt){J.length>0&&bt++;let et=G(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Gt,et.width,et.height)}for(let et=0;et<6;et++)if(it){Ht?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ft[et].width,ft[et].height,xt,St,ft[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Gt,ft[et].width,ft[et].height,0,xt,St,ft[et].data);for(let wt=0;wt<J.length;wt++){let Bt=J[wt].image[et].image;Ht?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Bt.width,Bt.height,xt,St,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Gt,Bt.width,Bt.height,0,xt,St,Bt.data)}}else{Ht?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt,St,ft[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Gt,xt,St,ft[et]);for(let wt=0;wt<J.length;wt++){let Et=J[wt];Ht?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,xt,St,Et.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Gt,xt,St,Et.image[et])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),W.__version=B.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ht(y,x,P,X,B,W){let ut=r.convert(P.format,P.colorSpace),ot=r.convert(P.type),mt=E(P.internalFormat,ut,ot,P.colorSpace),Rt=n.get(x),it=n.get(P);if(it.__renderTarget=x,!Rt.__hasExternalTextures){let ft=Math.max(1,x.width>>W),At=Math.max(1,x.height>>W);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?e.texImage3D(B,W,mt,ft,At,x.depth,0,ut,ot,null):e.texImage2D(B,W,mt,ft,At,0,ut,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),H(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,B,it.__webglTexture,0,N(x)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,B,it.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(y,x,P){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){let X=x.depthTexture,B=X&&X.isDepthTexture?X.type:null,W=M(x.stencilBuffer,B),ut=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=N(x);H(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,x.width,x.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,y)}else{let X=x.textures;for(let B=0;B<X.length;B++){let W=X[B],ut=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),mt=E(W.internalFormat,ut,ot,W.colorSpace),Rt=N(x);P&&H(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,x.width,x.height):H(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),lt(x.depthTexture,0);let B=X.__webglTexture,W=N(x);if(x.depthTexture.format===ps)H(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(x.depthTexture.format===gi)H(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function zt(y){let x=n.get(y),P=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){let X=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let B=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",B)};X.addEventListener("dispose",B),x.__depthDisposeCallback=B}x.__boundDepthTexture=X}if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ft(x.__webglFramebuffer,y)}else if(P){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),tt(x.__webglDepthbuffer[X],y,!1);else{let B=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),tt(x.__webglDepthbuffer,y,!1);else{let X=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,B)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(y,x,P){let X=n.get(y);x!==void 0&&ht(X.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&zt(y)}function $t(y){let x=y.texture,P=n.get(y),X=n.get(x);y.addEventListener("dispose",U);let B=y.textures,W=y.isWebGLCubeRenderTarget===!0,ut=B.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),W){P.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[ot]=[];for(let mt=0;mt<x.mipmaps.length;mt++)P.__webglFramebuffer[ot][mt]=i.createFramebuffer()}else P.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)P.__webglFramebuffer[ot]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ut)for(let ot=0,mt=B.length;ot<mt;ot++){let Rt=n.get(B[ot]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(y.samples>0&&H(y)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ot=0;ot<B.length;ot++){let mt=B[ot];P.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[ot]);let Rt=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),ft=E(mt.internalFormat,Rt,it,mt.colorSpace,y.isXRRenderTarget===!0),At=N(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,P.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(P.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)ht(P.__webglFramebuffer[ot][mt],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,mt);else ht(P.__webglFramebuffer[ot],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ot=0,mt=B.length;ot<mt;ot++){let Rt=B[ot],it=n.get(Rt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Ot(i.TEXTURE_2D,Rt),ht(P.__webglFramebuffer,y,Rt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Rt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ot=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,X.__webglTexture),Ot(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)ht(P.__webglFramebuffer[mt],y,x,i.COLOR_ATTACHMENT0,ot,mt);else ht(P.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}y.depthBuffer&&zt(y)}function rt(y){let x=y.textures;for(let P=0,X=x.length;P<X;P++){let B=x[P];if(m(B)){let W=T(y),ut=n.get(B).__webglTexture;e.bindTexture(W,ut),p(W),e.unbindTexture()}}}let _t=[],R=[];function Y(y){if(y.samples>0){if(H(y)===!1){let x=y.textures,P=y.width,X=y.height,B=i.COLOR_BUFFER_BIT,W=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(y),ot=x.length>1;if(ot)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let Rt=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,P,X,0,0,P,X,B,i.NEAREST),c===!0&&(_t.length=0,R.length=0,_t.push(i.COLOR_ATTACHMENT0+mt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(_t.push(W),R.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[mt]);let Rt=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){let x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function N(y){return Math.min(s.maxSamples,y.samples)}function H(y){let x=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(y){let x=o.render.frame;l.get(y)!==x&&(l.set(y,x),y.update())}function at(y,x){let P=y.colorSpace,X=y.format,B=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==Ps&&P!==hi&&(le.getTransfer(P)===xe?(X!==pn||B!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}function G(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(h.width=y.naturalWidth||y.width,h.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(h.width=y.displayWidth,h.height=y.displayHeight):(h.width=y.width,h.height=y.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=lt,this.setTexture2DArray=K,this.setTexture3D=dt,this.setTextureCube=Q,this.rebindTextures=Ut,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=H}function mg(i,t){function e(n,s=hi){let r,o=le.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.BYTE;if(n===Gh)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Xh)return i.ALPHA;if(n===qh)return i.RGB;if(n===pn)return i.RGBA;if(n===Yh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===$h)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===eo||n===no||n===io||n===so)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===ka||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===qa)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===cc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jh||n===hc||n===uc||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Rc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},en=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},gg={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_g=`
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

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Oe({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,g=null,v=new Cc,m=e.getContextAttributes(),p=null,T=null,E=[],M=[],k=new ct,C=null,U=new Ke;U.viewport=new Pe;let O=new Ke;O.viewport=new Pe;let b=[U,O],S=new Rc,L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let pt=E[nt];return pt===void 0&&(pt=new Ks,E[nt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(nt){let pt=E[nt];return pt===void 0&&(pt=new Ks,E[nt]=pt),pt.getGripSpace()},this.getHand=function(nt){let pt=E[nt];return pt===void 0&&(pt=new Ks,E[nt]=pt),pt.getHandSpace()};function Z(nt){let pt=M.indexOf(nt.inputSource);if(pt===-1)return;let ht=E[pt];ht!==void 0&&(ht.update(nt.inputSource,nt.frame,h||o),ht.dispatchEvent({type:nt.type,data:nt.inputSource}))}function j(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",lt);for(let nt=0;nt<E.length;nt++){let pt=M[nt];pt!==null&&(M[nt]=null,E[nt].disconnect(pt))}L=null,$=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){let pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new sn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let pt=null,ht=null,tt=null;m.depth&&(tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=m.stencil?gi:ps,ht=m.stencil?mi:Ui);let Ft={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new sn(d.textureWidth,d.textureHeight,{format:pn,type:mn,depthTexture:new vi(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function lt(nt){for(let pt=0;pt<nt.removed.length;pt++){let ht=nt.removed[pt],tt=M.indexOf(ht);tt>=0&&(M[tt]=null,E[tt].disconnect(ht))}for(let pt=0;pt<nt.added.length;pt++){let ht=nt.added[pt],tt=M.indexOf(ht);if(tt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=M.length){M.push(ht),tt=zt;break}else if(M[zt]===null){M[zt]=ht,tt=zt;break}if(tt===-1)break}let Ft=E[tt];Ft&&Ft.connect(ht)}}let K=new A,dt=new A;function Q(nt,pt,ht){K.setFromMatrixPosition(pt.matrixWorld),dt.setFromMatrixPosition(ht.matrixWorld);let tt=K.distanceTo(dt),Ft=pt.projectionMatrix.elements,zt=ht.projectionMatrix.elements,Ut=Ft[14]/(Ft[10]-1),$t=Ft[14]/(Ft[10]+1),rt=(Ft[9]+1)/Ft[5],_t=(Ft[9]-1)/Ft[5],R=(Ft[8]-1)/Ft[0],Y=(zt[8]+1)/zt[0],N=Ut*R,H=Ut*Y,z=tt/(-R+Y),at=z*-R;if(pt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(at),nt.translateZ(z),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ft[10]===-1)nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let G=Ut+z,y=$t+z,x=N-at,P=H+(tt-at),X=rt*$t/y*G,B=_t*$t/y*G;nt.projectionMatrix.makePerspective(x,P,X,B,G,y),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function q(nt,pt){pt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(pt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let pt=nt.near,ht=nt.far;v.texture!==null&&(v.depthNear>0&&(pt=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),S.near=O.near=U.near=pt,S.far=O.far=U.far=ht,(L!==S.near||$!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,$=S.far),U.layers.mask=nt.layers.mask|2,O.layers.mask=nt.layers.mask|4,S.layers.mask=U.layers.mask|O.layers.mask;let tt=nt.parent,Ft=S.cameras;q(S,tt);for(let zt=0;zt<Ft.length;zt++)q(Ft[zt],tt);Ft.length===2?Q(S,U,O):S.projectionMatrix.copy(U.projectionMatrix),gt(nt,S,tt)};function gt(nt,pt,ht){ht===null?nt.matrix.copy(pt.matrixWorld):(nt.matrix.copy(ht.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(pt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(pt.projectionMatrix),nt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=er*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let vt=null;function Ot(nt,pt){if(l=pt.getViewerPose(h||o),g=pt,l!==null){let ht=l.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let tt=!1;ht.length!==S.cameras.length&&(S.cameras.length=0,tt=!0);for(let zt=0;zt<ht.length;zt++){let Ut=ht[zt],$t=null;if(f!==null)$t=f.getViewport(Ut);else{let _t=u.getViewSubImage(d,Ut);$t=_t.viewport,zt===0&&(t.setRenderTargetTextures(T,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(T))}let rt=b[zt];rt===void 0&&(rt=new Ke,rt.layers.enable(zt),rt.viewport=new Pe,b[zt]=rt),rt.matrix.fromArray(Ut.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Ut.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set($t.x,$t.y,$t.width,$t.height),zt===0&&(S.matrix.copy(rt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),tt===!0&&S.cameras.push(rt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){let zt=u.getDepthInformation(ht[0]);zt&&zt.isValid&&zt.texture&&v.init(t,zt,s.renderState)}}for(let ht=0;ht<E.length;ht++){let tt=M[ht],Ft=E[ht];tt!==null&&Ft!==void 0&&Ft.update(tt,pt,h||o)}vt&&vt(nt,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}let Jt=new nu;Jt.setAnimationLoop(Ot),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}},Ci=new Bn,vg=new ne;function yg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),E=T.envMap,M=T.envMapRotation;E&&(m.envMap.value=E,Ci.copy(M),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){let M=E.program;n.uniformBlockBinding(T,M)}function h(T,E){let M=s[T.id];M===void 0&&(g(T),M=l(T),s[T.id]=M,T.addEventListener("dispose",m));let k=E.program;n.updateUBOMapping(T,k);let C=t.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function l(T){let E=u();T.__bindingPointIndex=E;let M=i.createBuffer(),k=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,k,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let E=s[T.id],M=T.uniforms,k=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,U=M.length;C<U;C++){let O=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,S=O.length;b<S;b++){let L=O[b];if(f(L,C,b,k)===!0){let $=L.__offset,Z=Array.isArray(L.value)?L.value:[L.value],j=0;for(let lt=0;lt<Z.length;lt++){let K=Z[lt],dt=v(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,$+j,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,j),j+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,M,k){let C=T.value,U=E+"_"+M;if(k[U]===void 0)return typeof C=="number"||typeof C=="boolean"?k[U]=C:k[U]=C.clone(),!0;{let O=k[U];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return k[U]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(T){let E=T.uniforms,M=0,k=16;for(let U=0,O=E.length;U<O;U++){let b=Array.isArray(E[U])?E[U]:[E[U]];for(let S=0,L=b.length;S<L;S++){let $=b[S],Z=Array.isArray($.value)?$.value:[$.value];for(let j=0,lt=Z.length;j<lt;j++){let K=Z[j],dt=v(K),Q=M%k,q=Q%dt.boundary,gt=Q+q;M+=q,gt!==0&&k-gt<dt.storage&&(M+=k-gt),$.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=dt.storage}}}let C=M%k;return C>0&&(M+=k-C),T.__size=M,T.__cache={},this}function v(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:h,dispose:p}}var go=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=di,this.toneMappingExposure=1;let M=this,k=!1,C=0,U=0,O=null,b=-1,S=null,L=new Pe,$=new Pe,Z=null,j=new Yt(0),lt=0,K=e.width,dt=e.height,Q=1,q=null,gt=null,vt=new Pe(0,0,K,dt),Ot=new Pe(0,0,K,dt),Jt=!1,nt=new ir,pt=!1,ht=!1,tt=new ne,Ft=new ne,zt=new A,Ut=new Pe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function _t(){return O===null?Q:1}let R=n;function Y(_,w){return e.getContext(_,w)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),R===null){let w="webgl2";if(R=Y(w,_),R===null)throw Y(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let N,H,z,at,G,y,x,P,X,B,W,ut,ot,mt,Rt,it,ft,At,xt,St,Gt,Ht,Dt,V;function bt(){N=new Fm(R),N.init(),Ht=new mg(R,N),H=new Im(R,N,t,Ht),z=new dg(R,N),H.reverseDepthBuffer&&d&&z.buffers.depth.setReversed(!0),at=new Hm(R),G=new Q0,y=new pg(R,N,z,G,H,Ht,at),x=new Lm(M),P=new Om(M),X=new qd(R),Dt=new Cm(R,X),B=new zm(R,X,at,Dt),W=new km(R,B,X,at),xt=new Vm(R,H,y),it=new Dm(G),ut=new j0(M,x,P,N,H,Dt,it),ot=new yg(M,G),mt=new eg,Rt=new ag(N),At=new Rm(M,x,P,z,W,f,c),ft=new hg(M,W,H),V=new Mg(R,at,H,z),St=new Pm(R,N,at),Gt=new Bm(R,N,at),at.programs=ut.programs,M.capabilities=H,M.extensions=N,M.properties=G,M.renderLists=mt,M.shadowMap=ft,M.state=z,M.info=at}bt();let J=new Pc(M,R);this.xr=J,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let _=N.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=N.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(_){_!==void 0&&(Q=_,this.setSize(K,dt,!1))},this.getSize=function(_){return _.set(K,dt)},this.setSize=function(_,w,I=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=_,dt=w,e.width=Math.floor(_*Q),e.height=Math.floor(w*Q),I===!0&&(e.style.width=_+"px",e.style.height=w+"px"),this.setViewport(0,0,_,w)},this.getDrawingBufferSize=function(_){return _.set(K*Q,dt*Q).floor()},this.setDrawingBufferSize=function(_,w,I){K=_,dt=w,Q=I,e.width=Math.floor(_*I),e.height=Math.floor(w*I),this.setViewport(0,0,_,w)},this.getCurrentViewport=function(_){return _.copy(L)},this.getViewport=function(_){return _.copy(vt)},this.setViewport=function(_,w,I,F){_.isVector4?vt.set(_.x,_.y,_.z,_.w):vt.set(_,w,I,F),z.viewport(L.copy(vt).multiplyScalar(Q).round())},this.getScissor=function(_){return _.copy(Ot)},this.setScissor=function(_,w,I,F){_.isVector4?Ot.set(_.x,_.y,_.z,_.w):Ot.set(_,w,I,F),z.scissor($.copy(Ot).multiplyScalar(Q).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(_){z.setScissorTest(Jt=_)},this.setOpaqueSort=function(_){q=_},this.setTransparentSort=function(_){gt=_},this.getClearColor=function(_){return _.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(_=!0,w=!0,I=!0){let F=0;if(_){let D=!1;if(O!==null){let st=O.texture.format;D=st===al||st===ol||st===rl}if(D){let st=O.texture.type,yt=st===mn||st===Ui||st===tr||st===mi||st===nl||st===il,Pt=At.getClearColor(),Lt=At.getClearAlpha(),qt=Pt.r,Zt=Pt.g,Nt=Pt.b;yt?(g[0]=qt,g[1]=Zt,g[2]=Nt,g[3]=Lt,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=qt,v[1]=Zt,v[2]=Nt,v[3]=Lt,R.clearBufferiv(R.COLOR,0,v))}else F|=R.COLOR_BUFFER_BIT}w&&(F|=R.DEPTH_BUFFER_BIT),I&&(F|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),mt.dispose(),Rt.dispose(),G.dispose(),x.dispose(),P.dispose(),W.dispose(),Dt.dispose(),V.dispose(),ut.dispose(),J.dispose(),J.removeEventListener("sessionstart",me),J.removeEventListener("sessionend",fe),ae.stop()};function et(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let _=at.autoReset,w=ft.enabled,I=ft.autoUpdate,F=ft.needsUpdate,D=ft.type;bt(),at.autoReset=_,ft.enabled=w,ft.autoUpdate=I,ft.needsUpdate=F,ft.type=D}function Et(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Bt(_){let w=_.target;w.removeEventListener("dispose",Bt),Mt(w)}function Mt(_){Vt(_),G.remove(_)}function Vt(_){let w=G.get(_).programs;w!==void 0&&(w.forEach(function(I){ut.releaseProgram(I)}),_.isShaderMaterial&&ut.releaseShaderCache(_))}this.renderBufferDirect=function(_,w,I,F,D,st){w===null&&(w=$t);let yt=D.isMesh&&D.matrixWorld.determinant()<0,Pt=Sr(_,w,I,F,D);z.setMaterial(F,yt);let Lt=I.index,qt=1;if(F.wireframe===!0){if(Lt=B.getWireframeAttribute(I),Lt===void 0)return;qt=2}let Zt=I.drawRange,Nt=I.attributes.position,te=Zt.start*qt,ce=(Zt.start+Zt.count)*qt;st!==null&&(te=Math.max(te,st.start*qt),ce=Math.min(ce,(st.start+st.count)*qt)),Lt!==null?(te=Math.max(te,0),ce=Math.min(ce,Lt.count)):Nt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Nt.count));let _e=ce-te;if(_e<0||_e===1/0)return;Dt.setup(D,F,Pt,I,Lt);let ke,oe=St;if(Lt!==null&&(ke=X.get(Lt),oe=Gt,oe.setIndex(ke)),D.isMesh)F.wireframe===!0?(z.setLineWidth(F.wireframeLinewidth*_t()),oe.setMode(R.LINES)):oe.setMode(R.TRIANGLES);else if(D.isLine){let Xt=F.linewidth;Xt===void 0&&(Xt=1),z.setLineWidth(Xt*_t()),D.isLineSegments?oe.setMode(R.LINES):D.isLineLoop?oe.setMode(R.LINE_LOOP):oe.setMode(R.LINE_STRIP)}else D.isPoints?oe.setMode(R.POINTS):D.isSprite&&oe.setMode(R.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)oe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))oe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Xt=D._multiDrawStarts,Vn=D._multiDrawCounts,pe=D._multiDrawCount,Tn=Lt?X.get(Lt).bytesPerElement:1,Xi=G.get(F).currentProgram.getUniforms();for(let hn=0;hn<pe;hn++)Xi.setValue(R,"_gl_DrawID",hn),oe.render(Xt[hn]/Tn,Vn[hn])}else if(D.isInstancedMesh)oe.renderInstances(te,_e,D.count);else if(I.isInstancedBufferGeometry){let Xt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Vn=Math.min(I.instanceCount,Xt);oe.renderInstances(te,_e,Vn)}else oe.render(te,_e)};function Kt(_,w,I){_.transparent===!0&&_.side===xn&&_.forceSinglePass===!1?(_.side=Xe,_.needsUpdate=!0,ln(_,w,I),_.side=pi,_.needsUpdate=!0,ln(_,w,I),_.side=xn):ln(_,w,I)}this.compile=function(_,w,I=null){I===null&&(I=_),p=Rt.get(I),p.init(w),E.push(p),I.traverseVisible(function(D){D.isLight&&D.layers.test(w.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),_!==I&&_.traverseVisible(function(D){D.isLight&&D.layers.test(w.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();let F=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let st=D.material;if(st)if(Array.isArray(st))for(let yt=0;yt<st.length;yt++){let Pt=st[yt];Kt(Pt,I,D),F.add(Pt)}else Kt(st,I,D),F.add(st)}),E.pop(),p=null,F},this.compileAsync=function(_,w,I=null){let F=this.compile(_,w,I);return new Promise(D=>{function st(){if(F.forEach(function(yt){G.get(yt).currentProgram.isReady()&&F.delete(yt)}),F.size===0){D(_);return}setTimeout(st,10)}N.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let be=null;function de(_){be&&be(_)}function me(){ae.stop()}function fe(){ae.start()}let ae=new nu;ae.setAnimationLoop(de),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(_){be=_,J.setAnimationLoop(_),_===null?ae.stop():ae.start()},J.addEventListener("sessionstart",me),J.addEventListener("sessionend",fe),this.render=function(_,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(w),w=J.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,w,O),p=Rt.get(_,E.length),p.init(w),E.push(p),Ft.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),nt.setFromProjectionMatrix(Ft),ht=this.localClippingEnabled,pt=it.init(this.clippingPlanes,ht),m=mt.get(_,T.length),m.init(),T.push(m),J.enabled===!0&&J.isPresenting===!0){let st=M.xr.getDepthSensingMesh();st!==null&&Ct(st,w,-1/0,M.sortObjects)}Ct(_,w,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(q,gt),rt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,rt&&At.addToRenderList(m,_),this.info.render.frame++,pt===!0&&it.beginShadows();let I=p.state.shadowsArray;ft.render(I,_,w),pt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let F=m.opaque,D=m.transmissive;if(p.setupLights(),w.isArrayCamera){let st=w.cameras;if(D.length>0)for(let yt=0,Pt=st.length;yt<Pt;yt++){let Lt=st[yt];re(F,D,_,Lt)}rt&&At.render(_);for(let yt=0,Pt=st.length;yt<Pt;yt++){let Lt=st[yt];jt(m,_,Lt,Lt.viewport)}}else D.length>0&&re(F,D,_,w),rt&&At.render(_),jt(m,_,w);O!==null&&(y.updateMultisampleRenderTarget(O),y.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(M,_,w),Dt.resetDefaultState(),b=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],pt===!0&&it.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ct(_,w,I,F){if(_.visible===!1)return;if(_.layers.test(w.layers)){if(_.isGroup)I=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(w);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||nt.intersectsSprite(_)){F&&Ut.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ft);let yt=W.update(_),Pt=_.material;Pt.visible&&m.push(_,yt,Pt,I,Ut.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||nt.intersectsObject(_))){let yt=W.update(_),Pt=_.material;if(F&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ut.copy(_.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ut.copy(yt.boundingSphere.center)),Ut.applyMatrix4(_.matrixWorld).applyMatrix4(Ft)),Array.isArray(Pt)){let Lt=yt.groups;for(let qt=0,Zt=Lt.length;qt<Zt;qt++){let Nt=Lt[qt],te=Pt[Nt.materialIndex];te&&te.visible&&m.push(_,yt,te,I,Ut.z,Nt)}}else Pt.visible&&m.push(_,yt,Pt,I,Ut.z,null)}}let st=_.children;for(let yt=0,Pt=st.length;yt<Pt;yt++)Ct(st[yt],w,I,F)}function jt(_,w,I,F){let D=_.opaque,st=_.transmissive,yt=_.transparent;p.setupLightsView(I),pt===!0&&it.setGlobalState(M.clippingPlanes,I),F&&z.viewport(L.copy(F)),D.length>0&&Ce(D,w,I),st.length>0&&Ce(st,w,I),yt.length>0&&Ce(yt,w,I),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function re(_,w,I,F){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new sn(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?Hn:mn,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let st=p.state.transmissionRenderTarget[F.id],yt=F.viewport||L;st.setSize(yt.z,yt.w);let Pt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(j),lt=M.getClearAlpha(),lt<1&&M.setClearColor(16777215,.5),M.clear(),rt&&At.render(I);let Lt=M.toneMapping;M.toneMapping=di;let qt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),pt===!0&&it.setGlobalState(M.clippingPlanes,F),Ce(_,I,F),y.updateMultisampleRenderTarget(st),y.updateRenderTargetMipmap(st),N.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Nt=0,te=w.length;Nt<te;Nt++){let ce=w[Nt],_e=ce.object,ke=ce.geometry,oe=ce.material,Xt=ce.group;if(oe.side===xn&&_e.layers.test(F.layers)){let Vn=oe.side;oe.side=Xe,oe.needsUpdate=!0,we(_e,I,F,ke,oe,Xt),oe.side=Vn,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(y.updateMultisampleRenderTarget(st),y.updateRenderTargetMipmap(st))}M.setRenderTarget(Pt),M.setClearColor(j,lt),qt!==void 0&&(F.viewport=qt),M.toneMapping=Lt}function Ce(_,w,I){let F=w.isScene===!0?w.overrideMaterial:null;for(let D=0,st=_.length;D<st;D++){let yt=_[D],Pt=yt.object,Lt=yt.geometry,qt=F===null?yt.material:F,Zt=yt.group;Pt.layers.test(I.layers)&&we(Pt,w,I,Lt,qt,Zt)}}function we(_,w,I,F,D,st){_.onBeforeRender(M,w,I,F,D,st),_.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(M,w,I,F,_,st),D.transparent===!0&&D.side===xn&&D.forceSinglePass===!1?(D.side=Xe,D.needsUpdate=!0,M.renderBufferDirect(I,w,F,D,_,st),D.side=pi,D.needsUpdate=!0,M.renderBufferDirect(I,w,F,D,_,st),D.side=xn):M.renderBufferDirect(I,w,F,D,_,st),_.onAfterRender(M,w,I,F,D,st)}function ln(_,w,I){w.isScene!==!0&&(w=$t);let F=G.get(_),D=p.state.lights,st=p.state.shadowsArray,yt=D.state.version,Pt=ut.getParameters(_,D.state,st,w,I),Lt=ut.getProgramCacheKey(Pt),qt=F.programs;F.environment=_.isMeshStandardMaterial?w.environment:null,F.fog=w.fog,F.envMap=(_.isMeshStandardMaterial?P:x).get(_.envMap||F.environment),F.envMapRotation=F.environment!==null&&_.envMap===null?w.environmentRotation:_.envMapRotation,qt===void 0&&(_.addEventListener("dispose",Bt),qt=new Map,F.programs=qt);let Zt=qt.get(Lt);if(Zt!==void 0){if(F.currentProgram===Zt&&F.lightsStateVersion===yt)return Si(_,Pt),Zt}else Pt.uniforms=ut.getUniforms(_),_.onBeforeCompile(Pt,M),Zt=ut.acquireProgram(Pt,Lt),qt.set(Lt,Zt),F.uniforms=Pt.uniforms;let Nt=F.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Nt.clippingPlanes=it.uniform),Si(_,Pt),F.needsLights=$o(_),F.lightsStateVersion=yt,F.needsLights&&(Nt.ambientLightColor.value=D.state.ambient,Nt.lightProbe.value=D.state.probe,Nt.directionalLights.value=D.state.directional,Nt.directionalLightShadows.value=D.state.directionalShadow,Nt.spotLights.value=D.state.spot,Nt.spotLightShadows.value=D.state.spotShadow,Nt.rectAreaLights.value=D.state.rectArea,Nt.ltc_1.value=D.state.rectAreaLTC1,Nt.ltc_2.value=D.state.rectAreaLTC2,Nt.pointLights.value=D.state.point,Nt.pointLightShadows.value=D.state.pointShadow,Nt.hemisphereLights.value=D.state.hemi,Nt.directionalShadowMap.value=D.state.directionalShadowMap,Nt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Nt.spotShadowMap.value=D.state.spotShadowMap,Nt.spotLightMatrix.value=D.state.spotLightMatrix,Nt.spotLightMap.value=D.state.spotLightMap,Nt.pointShadowMap.value=D.state.pointShadowMap,Nt.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Zt,F.uniformsList=null,Zt}function tn(_){if(_.uniformsList===null){let w=_.currentProgram.getUniforms();_.uniformsList=gs.seqWithValue(w.seq,_.uniforms)}return _.uniformsList}function Si(_,w){let I=G.get(_);I.outputColorSpace=w.outputColorSpace,I.batching=w.batching,I.batchingColor=w.batchingColor,I.instancing=w.instancing,I.instancingColor=w.instancingColor,I.instancingMorph=w.instancingMorph,I.skinning=w.skinning,I.morphTargets=w.morphTargets,I.morphNormals=w.morphNormals,I.morphColors=w.morphColors,I.morphTargetsCount=w.morphTargetsCount,I.numClippingPlanes=w.numClippingPlanes,I.numIntersection=w.numClipIntersection,I.vertexAlphas=w.vertexAlphas,I.vertexTangents=w.vertexTangents,I.toneMapping=w.toneMapping}function Sr(_,w,I,F,D){w.isScene!==!0&&(w=$t),y.resetTextureUnits();let st=w.fog,yt=F.isMeshStandardMaterial?w.environment:null,Pt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ps,Lt=(F.isMeshStandardMaterial?P:x).get(F.envMap||yt),qt=F.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Zt=!!I.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Nt=!!I.morphAttributes.position,te=!!I.morphAttributes.normal,ce=!!I.morphAttributes.color,_e=di;F.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(_e=M.toneMapping);let ke=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,oe=ke!==void 0?ke.length:0,Xt=G.get(F),Vn=p.state.lights;if(pt===!0&&(ht===!0||_!==S)){let gn=_===S&&F.id===b;it.setState(F,_,gn)}let pe=!1;F.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Vn.state.version||Xt.outputColorSpace!==Pt||D.isBatchedMesh&&Xt.batching===!1||!D.isBatchedMesh&&Xt.batching===!0||D.isBatchedMesh&&Xt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Xt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Xt.instancing===!1||!D.isInstancedMesh&&Xt.instancing===!0||D.isSkinnedMesh&&Xt.skinning===!1||!D.isSkinnedMesh&&Xt.skinning===!0||D.isInstancedMesh&&Xt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Xt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Xt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Xt.instancingMorph===!1&&D.morphTexture!==null||Xt.envMap!==Lt||F.fog===!0&&Xt.fog!==st||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==it.numPlanes||Xt.numIntersection!==it.numIntersection)||Xt.vertexAlphas!==qt||Xt.vertexTangents!==Zt||Xt.morphTargets!==Nt||Xt.morphNormals!==te||Xt.morphColors!==ce||Xt.toneMapping!==_e||Xt.morphTargetsCount!==oe)&&(pe=!0):(pe=!0,Xt.__version=F.version);let Tn=Xt.currentProgram;pe===!0&&(Tn=ln(F,w,D));let Xi=!1,hn=!1,Os=!1,Ee=Tn.getUniforms(),Un=Xt.uniforms;if(z.useProgram(Tn.program)&&(Xi=!0,hn=!0,Os=!0),F.id!==b&&(b=F.id,hn=!0),Xi||S!==_){z.buffers.depth.getReversed()?(tt.copy(_.projectionMatrix),Ad(tt),Rd(tt),Ee.setValue(R,"projectionMatrix",tt)):Ee.setValue(R,"projectionMatrix",_.projectionMatrix),Ee.setValue(R,"viewMatrix",_.matrixWorldInverse);let ni=Ee.map.cameraPosition;ni!==void 0&&ni.setValue(R,zt.setFromMatrixPosition(_.matrixWorld)),H.logarithmicDepthBuffer&&Ee.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ee.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),S!==_&&(S=_,hn=!0,Os=!0)}if(D.isSkinnedMesh){Ee.setOptional(R,D,"bindMatrix"),Ee.setOptional(R,D,"bindMatrixInverse");let gn=D.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ee.setValue(R,"boneTexture",gn.boneTexture,y))}D.isBatchedMesh&&(Ee.setOptional(R,D,"batchingTexture"),Ee.setValue(R,"batchingTexture",D._matricesTexture,y),Ee.setOptional(R,D,"batchingIdTexture"),Ee.setValue(R,"batchingIdTexture",D._indirectTexture,y),Ee.setOptional(R,D,"batchingColorTexture"),D._colorsTexture!==null&&Ee.setValue(R,"batchingColorTexture",D._colorsTexture,y));let Fs=I.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&xt.update(D,I,Tn),(hn||Xt.receiveShadow!==D.receiveShadow)&&(Xt.receiveShadow=D.receiveShadow,Ee.setValue(R,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Un.envMap.value=Lt,Un.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&w.environment!==null&&(Un.envMapIntensity.value=w.environmentIntensity),hn&&(Ee.setValue(R,"toneMappingExposure",M.toneMappingExposure),Xt.needsLights&&br(Un,Os),st&&F.fog===!0&&ot.refreshFogUniforms(Un,st),ot.refreshMaterialUniforms(Un,F,Q,dt,p.state.transmissionRenderTarget[_.id]),gs.upload(R,tn(Xt),Un,y)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(gs.upload(R,tn(Xt),Un,y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ee.setValue(R,"center",D.center),Ee.setValue(R,"modelViewMatrix",D.modelViewMatrix),Ee.setValue(R,"normalMatrix",D.normalMatrix),Ee.setValue(R,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let gn=F.uniformsGroups;for(let ni=0,ii=gn.length;ni<ii;ni++){let bl=gn[ni];V.update(bl,Tn),V.bind(bl,Tn)}}return Tn}function br(_,w){_.ambientLightColor.needsUpdate=w,_.lightProbe.needsUpdate=w,_.directionalLights.needsUpdate=w,_.directionalLightShadows.needsUpdate=w,_.pointLights.needsUpdate=w,_.pointLightShadows.needsUpdate=w,_.spotLights.needsUpdate=w,_.spotLightShadows.needsUpdate=w,_.rectAreaLights.needsUpdate=w,_.hemisphereLights.needsUpdate=w}function $o(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,w,I){G.get(_.texture).__webglTexture=w,G.get(_.depthTexture).__webglTexture=I;let F=G.get(_);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=I===void 0,F.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,w){let I=G.get(_);I.__webglFramebuffer=w,I.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(_,w=0,I=0){O=_,C=w,U=I;let F=!0,D=null,st=!1,yt=!1;if(_){let Lt=G.get(_);if(Lt.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(R.FRAMEBUFFER,null),F=!1;else if(Lt.__webglFramebuffer===void 0)y.setupRenderTarget(_);else if(Lt.__hasExternalTextures)y.rebindTextures(_,G.get(_.texture).__webglTexture,G.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Nt=_.depthTexture;if(Lt.__boundDepthTexture!==Nt){if(Nt!==null&&G.has(Nt)&&(_.width!==Nt.image.width||_.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(_)}}let qt=_.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(yt=!0);let Zt=G.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Zt[w])?D=Zt[w][I]:D=Zt[w],st=!0):_.samples>0&&y.useMultisampledRTT(_)===!1?D=G.get(_).__webglMultisampledFramebuffer:Array.isArray(Zt)?D=Zt[I]:D=Zt,L.copy(_.viewport),$.copy(_.scissor),Z=_.scissorTest}else L.copy(vt).multiplyScalar(Q).floor(),$.copy(Ot).multiplyScalar(Q).floor(),Z=Jt;if(z.bindFramebuffer(R.FRAMEBUFFER,D)&&F&&z.drawBuffers(_,D),z.viewport(L),z.scissor($),z.setScissorTest(Z),st){let Lt=G.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+w,Lt.__webglTexture,I)}else if(yt){let Lt=G.get(_.texture),qt=w||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,I||0,qt)}b=-1},this.readRenderTargetPixels=function(_,w,I,F,D,st,yt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=G.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&yt!==void 0&&(Pt=Pt[yt]),Pt){z.bindFramebuffer(R.FRAMEBUFFER,Pt);try{let Lt=_.texture,qt=Lt.format,Zt=Lt.type;if(!H.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=_.width-F&&I>=0&&I<=_.height-D&&R.readPixels(w,I,F,D,Ht.convert(qt),Ht.convert(Zt),st)}finally{let Lt=O!==null?G.get(O).__webglFramebuffer:null;z.bindFramebuffer(R.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(_,w,I,F,D,st,yt){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=G.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&yt!==void 0&&(Pt=Pt[yt]),Pt){let Lt=_.texture,qt=Lt.format,Zt=Lt.type;if(!H.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=_.width-F&&I>=0&&I<=_.height-D){z.bindFramebuffer(R.FRAMEBUFFER,Pt);let Nt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Nt),R.bufferData(R.PIXEL_PACK_BUFFER,st.byteLength,R.STREAM_READ),R.readPixels(w,I,F,D,Ht.convert(qt),Ht.convert(Zt),0);let te=O!==null?G.get(O).__webglFramebuffer:null;z.bindFramebuffer(R.FRAMEBUFFER,te);let ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await wd(R,ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Nt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,st),R.deleteBuffer(Nt),R.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,w=null,I=0){_.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,_=arguments[1]);let F=Math.pow(2,-I),D=Math.floor(_.image.width*F),st=Math.floor(_.image.height*F),yt=w!==null?w.x:0,Pt=w!==null?w.y:0;y.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,I,0,0,yt,Pt,D,st),z.unbindTexture()},this.copyTextureToTexture=function(_,w,I=null,F=null,D=0){_.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,_=arguments[1],w=arguments[2],D=arguments[3]||0,I=null);let st,yt,Pt,Lt,qt,Zt,Nt,te,ce,_e=_.isCompressedTexture?_.mipmaps[D]:_.image;I!==null?(st=I.max.x-I.min.x,yt=I.max.y-I.min.y,Pt=I.isBox3?I.max.z-I.min.z:1,Lt=I.min.x,qt=I.min.y,Zt=I.isBox3?I.min.z:0):(st=_e.width,yt=_e.height,Pt=_e.depth||1,Lt=0,qt=0,Zt=0),F!==null?(Nt=F.x,te=F.y,ce=F.z):(Nt=0,te=0,ce=0);let ke=Ht.convert(w.format),oe=Ht.convert(w.type),Xt;w.isData3DTexture?(y.setTexture3D(w,0),Xt=R.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(y.setTexture2DArray(w,0),Xt=R.TEXTURE_2D_ARRAY):(y.setTexture2D(w,0),Xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,w.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,w.unpackAlignment);let Vn=R.getParameter(R.UNPACK_ROW_LENGTH),pe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Tn=R.getParameter(R.UNPACK_SKIP_PIXELS),Xi=R.getParameter(R.UNPACK_SKIP_ROWS),hn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_e.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_e.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Zt);let Os=_.isDataArrayTexture||_.isData3DTexture,Ee=w.isDataArrayTexture||w.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let Un=G.get(_),Fs=G.get(w),gn=G.get(Un.__renderTarget),ni=G.get(Fs.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,gn.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Pt;ii++)Os&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,G.get(_).__webglTexture,D,Zt+ii),_.isDepthTexture?(Ee&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,G.get(w).__webglTexture,D,ce+ii),R.blitFramebuffer(Lt,qt,st,yt,Nt,te,st,yt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ee?R.copyTexSubImage3D(Xt,D,Nt,te,ce+ii,Lt,qt,st,yt):R.copyTexSubImage2D(Xt,D,Nt,te,ce+ii,Lt,qt,st,yt);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ee?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(Xt,D,Nt,te,ce,st,yt,Pt,ke,oe,_e.data):w.isCompressedArrayTexture?R.compressedTexSubImage3D(Xt,D,Nt,te,ce,st,yt,Pt,ke,_e.data):R.texSubImage3D(Xt,D,Nt,te,ce,st,yt,Pt,ke,oe,_e):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,D,Nt,te,st,yt,ke,oe,_e.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,D,Nt,te,_e.width,_e.height,ke,_e.data):R.texSubImage2D(R.TEXTURE_2D,D,Nt,te,st,yt,ke,oe,_e);R.pixelStorei(R.UNPACK_ROW_LENGTH,Vn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Tn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,hn),D===0&&w.generateMipmaps&&R.generateMipmap(Xt),z.unbindTexture()},this.copyTextureToTexture3D=function(_,w,I=null,F=null,D=0){return _.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,F=arguments[1]||null,_=arguments[2],w=arguments[3],D=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,w,I,F,D)},this.initRenderTarget=function(_){G.get(_).__webglFramebuffer===void 0&&y.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?y.setTextureCube(_,0):_.isData3DTexture?y.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?y.setTexture2DArray(_,0):y.setTexture2D(_,0),z.unbindTexture()},this.resetState=function(){C=0,U=0,O=null,z.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var sr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=pc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new A,rr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},or=class extends Pn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,ks=new A,as=new A,cs=new A,ls=new ct,Gs=new ct,au=new ne,Xr=new A,Ws=new A,qr=new A,Eh=new ct,Ea=new ct,Th=new ct,xo=class extends Ye{constructor(t=new or){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _o(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new rr(n,3,0,!1)),os.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),au.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Yr(Xr.set(-.5,-.5,0),cs,o,as,s,r),Yr(Ws.set(.5,-.5,0),cs,o,as,s,r),Yr(qr.set(.5,.5,0),cs,o,as,s,r),Eh.set(0,0),Ea.set(1,0),Th.set(1,1);let a=t.ray.intersectTriangle(Xr,Ws,qr,!1,ks);if(a===null&&(Yr(Ws.set(-.5,.5,0),cs,o,as,s,r),Ea.set(0,1),a=t.ray.intersectTriangle(Xr,qr,Ws,!1,ks),a===null))return;let c=t.ray.origin.distanceTo(ks);c<t.near||c>t.far||e.push({distance:c,point:ks.clone(),uv:ui.getInterpolation(ks,Xr,Ws,qr,Eh,Ea,Th,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yr(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*ls.x-s*ls.y,Gs.y=s*ls.x+r*ls.y):Gs.copy(ls),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(au)}var Oi=class extends nn{constructor(t=null,e=1,n=1,s,r,o,a,c,h=qe,l=qe,u,d){super(null,o,a,c,h,l,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ne,wh=new ne,Zr=[],Ah=new jn,Sg=new ne,Xs=new Me,qs=new _i,vo=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Ah.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Ah)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),qs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),wh.multiplyMatrices(n,hs),Xs.matrixWorld=wh,Xs.raycast(t,Zr);for(let o=0,a=Zr.length;o<a;o++){let c=Zr[o];c.instanceId=r,c.object=this,e.push(c)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oi(new Float32Array(s*this.count),s,this.count,sl,Fn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fi=class extends Pn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rh=new ne,Ic=new Ni,$r=new _i,Jr=new A,bs=class extends Ye{constructor(t=new Se,e=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Rh.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(Rh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=h.getX(g);Jr.fromBufferAttribute(u,m),Ch(Jr,m,c,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Jr.fromBufferAttribute(u,g),Ch(Jr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ch(i,t,e,n,s,r,o){let a=Ic.distanceSqToPoint(i);if(a<e){let c=new A;Ic.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Es=class extends nn{constructor(t,e,n,s,r,o,a,c,h){super(t,e,n,s,r,o,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let l=n[s],d=n[s+1]-l,f=(o-l)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],o=[],a=new A,c=new ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let h=Number.MAX_VALUE,l=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=h-this.aY;c=d*l-f*u+this.aX,h=d*u+f*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Dc=class extends cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ul(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){s(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,u){let d=(o-r)/h-(a-r)/(h+l)+(a-o)/l,f=(a-o)/l-(c-o)/(l+u)+(c-a)/u;d*=l,f*=l,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Kr=new A,Ta=new ul,wa=new ul,Aa=new ul,on=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=s[(a-1)%r]:(Kr.subVectors(s[0],s[1]).add(s[0]),h=Kr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?l=s[(a+2)%r]:(Kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(l),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ta.initNonuniformCatmullRom(h.x,u.x,d.x,l.x,g,v,m),wa.initNonuniformCatmullRom(h.y,u.y,d.y,l.y,g,v,m),Aa.initNonuniformCatmullRom(h.z,u.z,d.z,l.z,g,v,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(h.x,u.x,d.x,l.x,this.tension),wa.initCatmullRom(h.y,u.y,d.y,l.y,this.tension),Aa.initCatmullRom(h.z,u.z,d.z,l.z,this.tension));return n.set(Ta.calc(c),wa.calc(c),Aa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ph(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function bg(i,t){let e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function Tg(i,t){return i*i*t}function js(i,t,e,n){return bg(i,t)+Eg(i,e)+Tg(i,n)}function wg(i,t){let e=1-i;return e*e*e*t}function Ag(i,t){let e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return wg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}var yo=class extends yn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends yn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y),Qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends yn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lr=class extends yn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends yn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends yn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y),js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],h=s[o],l=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ph(a,c.x,h.x,l.x,u.x),Ph(a,c.y,h.y,l.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},To=Object.freeze({__proto__:null,ArcCurve:Dc,CatmullRomCurve3:on,CubicBezierCurve:yo,CubicBezierCurve3:Lc,EllipseCurve:cr,LineCurve:Mo,LineCurve3:lr,QuadraticBezierCurve:So,QuadraticBezierCurve3:bo,SplineCurve:Eo}),hr=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new To[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new To[s.type]().fromJSON(s))}return this}},yi=class extends hr{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new So(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new yo(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let h=new cr(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zi=class i extends Se{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ue(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],h=[],l=1/e,u=new A,d=new ct,f=new A,g=new A,v=new A,m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let T=0;T<=e;T++){let E=n+T*l*s,M=Math.sin(E),k=Math.cos(E);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*M,u.y=t[C].y,u.z=t[C].x*k,o.push(u.x,u.y,u.z),d.x=T/e,d.y=C/(t.length-1),a.push(d.x,d.y);let U=c[3*C+0]*M,O=c[3*C+1],b=c[3*C+0]*k;h.push(U,O,b)}}for(let T=0;T<e;T++)for(let E=0;E<t.length-1;E++){let M=E+T*t.length,k=M,C=M+t.length,U=M+t.length+1,O=M+1;r.push(k,C,O),r.push(U,O,C)}this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.setAttribute("normal",new ie(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var he=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;T(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(l),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function T(){let M=new A,k=new A,C=0,U=(e-t)/n;for(let O=0;O<=r;O++){let b=[],S=O/r,L=S*(e-t)+t;for(let $=0;$<=s;$++){let Z=$/s,j=Z*c+a,lt=Math.sin(j),K=Math.cos(j);k.x=L*lt,k.y=-S*n+m,k.z=L*K,u.push(k.x,k.y,k.z),M.set(lt,U,K).normalize(),d.push(M.x,M.y,M.z),f.push(Z,1-S),b.push(g++)}v.push(b)}for(let O=0;O<s;O++)for(let b=0;b<r;b++){let S=v[b][O],L=v[b+1][O],$=v[b+1][O+1],Z=v[b][O+1];(t>0||b!==0)&&(l.push(S,L,Z),C+=3),(e>0||b!==r-1)&&(l.push(L,$,Z),C+=3)}h.addGroup(p,C,0),p+=C}function E(M){let k=g,C=new ct,U=new A,O=0,b=M===!0?t:e,S=M===!0?1:-1;for(let $=1;$<=s;$++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let L=g;for(let $=0;$<=s;$++){let j=$/s*c+a,lt=Math.cos(j),K=Math.sin(j);U.x=b*K,U.y=m*S,U.z=b*lt,u.push(U.x,U.y,U.z),d.push(0,S,0),C.x=lt*.5+.5,C.y=K*.5*S+.5,f.push(C.x,C.y),g++}for(let $=0;$<s;$++){let Z=k+$,j=L+$;M===!0?l.push(j,j+1,Z):l.push(j+1,j,Z),O+=3}h.addGroup(p,O,M===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ts=class i extends he{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mn=class extends yi{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new yi().fromJSON(s))}return this}},Pg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h,l,u,d,f;if(n&&(r=Ng(i,t,r,e)),i.length>80*e){a=h=i[0],c=l=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>h&&(h=u),d>l&&(l=d);f=Math.max(h-a,l-c),f=f!==0?32767/f:0}return ur(r,o,e,a,c,f,0),o}};function cu(i,t,e,n,s){let r,o;if(s===qg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ih(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ih(r,i[r],i[r+1],o);return o&&Bo(o,o.next)&&(fr(o),o=o.next),o}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bo(e,e.next)||Ae(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hg(i,n,s,r);let a=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Dg(i,n,s,r):Ig(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),fr(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Lg(Bi(i),t,e),ur(i,t,e,n,s,r,2)):o===2&&Ug(i,t,e,n,s,r):ur(Bi(i),t,e,n,s,r,1);break}}}function Ig(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,l=s<r?s<o?s:o:r<o?r:o,u=a<c?a<h?a:h:c<h?c:h,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>h?a:h:c>h?c:h,g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=d&&g.y>=u&&g.y<=f&&ds(s,a,r,c,o,h,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ae(s,r,o)>=0)return!1;let a=s.x,c=r.x,h=o.x,l=s.y,u=r.y,d=o.y,f=a<c?a<h?a:h:c<h?c:h,g=l<u?l<d?l:d:u<d?u:d,v=a>c?a>h?a:h:c>h?c:h,m=l>u?l>d?l:d:u>d?u:d,p=Uc(f,g,t,e,n),T=Uc(v,m,t,e,n),E=i.prevZ,M=i.nextZ;for(;E&&E.z>=p&&M&&M.z<=T;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&ds(a,l,c,u,h,d,E.x,E.y)&&Ae(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ds(a,l,c,u,h,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&ds(a,l,c,u,h,d,E.x,E.y)&&Ae(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=T;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ds(a,l,c,u,h,d,M.x,M.y)&&Ae(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Lg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Bo(s,r)&&lu(s,n,n.next,r)&&dr(s,r)&&dr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fr(n),fr(n.next),n=i=r),n=n.next}while(n!==i);return Bi(n)}function Ug(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gg(o,a)){let c=hu(o,a);o=Bi(o,o.next),c=Bi(c,c.next),ur(o,t,e,n,s,r,0),ur(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ng(i,t,e,n){let s=[],r,o,a,c,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,h=cu(i,a,c,n,!1),h===h.next&&(h.steiner=!0),s.push(kg(h));for(s.sort(Og),r=0;r<s.length;r++)e=Fg(s[r],e);return e}function Og(i,t){return i.x-t.x}function Fg(i,t){let e=zg(i,t);if(!e)return t;let n=hu(e,i);return Bi(n,n.next),Bi(e,e.next)}function zg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,h=s.y,l=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ds(o<h?r:n,o,c,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),dr(e,i)&&(u<l||u===l&&(e.x>s.x||e.x===s.x&&Bg(s,e)))&&(s=e,l=u)),e=e.next;while(e!==a);return s}function Bg(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function Hg(i,t,e,n){let s=i;do s.z===0&&(s.z=Uc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vg(s)}function Vg(i){let t,e,n,s,r,o,a,c,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function Uc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ds(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wg(i,t)&&(dr(i,t)&&dr(t,i)&&Xg(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||Bo(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bo(i,t){return i.x===t.x&&i.y===t.y}function lu(i,t,e,n){let s=Qr(Ae(i,t,e)),r=Qr(Ae(i,t,n)),o=Qr(Ae(e,n,i)),a=Qr(Ae(e,n,t));return!!(s!==r&&o!==a||s===0&&jr(i,e,t)||r===0&&jr(i,n,t)||o===0&&jr(e,i,n)||a===0&&jr(e,t,n))}function jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qr(i){return i>0?1:i<0?-1:0}function Wg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Xg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function hu(i,t){let e=new Nc(i.i,i.x,i.y),n=new Nc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ih(i,t,e,n){let s=new Nc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var fi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dh(t),Lh(n,t);let o=t.length;e.forEach(Dh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Lh(n,e[c]);let a=Pg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ti=class i extends Se{constructor(t=new Mn([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Yg,E,M=!1,k,C,U,O;p&&(E=p.getSpacedPoints(l),M=!0,d=!1,k=p.computeFrenetFrames(l,!1),C=new A,U=new A,O=new A),d||(m=0,f=0,g=0,v=0);let b=a.extractPoints(h),S=b.shape,L=b.holes;if(!fi.isClockWise(S)){S=S.reverse();for(let rt=0,_t=L.length;rt<_t;rt++){let R=L[rt];fi.isClockWise(R)&&(L[rt]=R.reverse())}}let Z=fi.triangulateShape(S,L),j=S;for(let rt=0,_t=L.length;rt<_t;rt++){let R=L[rt];S=S.concat(R)}function lt(rt,_t,R){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(_t,R)}let K=S.length,dt=Z.length;function Q(rt,_t,R){let Y,N,H,z=rt.x-_t.x,at=rt.y-_t.y,G=R.x-rt.x,y=R.y-rt.y,x=z*z+at*at,P=z*y-at*G;if(Math.abs(P)>Number.EPSILON){let X=Math.sqrt(x),B=Math.sqrt(G*G+y*y),W=_t.x-at/X,ut=_t.y+z/X,ot=R.x-y/B,mt=R.y+G/B,Rt=((ot-W)*y-(mt-ut)*G)/(z*y-at*G);Y=W+z*Rt-rt.x,N=ut+at*Rt-rt.y;let it=Y*Y+N*N;if(it<=2)return new ct(Y,N);H=Math.sqrt(it/2)}else{let X=!1;z>Number.EPSILON?G>Number.EPSILON&&(X=!0):z<-Number.EPSILON?G<-Number.EPSILON&&(X=!0):Math.sign(at)===Math.sign(y)&&(X=!0),X?(Y=-at,N=z,H=Math.sqrt(x)):(Y=z,N=at,H=Math.sqrt(x/2))}return new ct(Y/H,N/H)}let q=[];for(let rt=0,_t=j.length,R=_t-1,Y=rt+1;rt<_t;rt++,R++,Y++)R===_t&&(R=0),Y===_t&&(Y=0),q[rt]=Q(j[rt],j[R],j[Y]);let gt=[],vt,Ot=q.concat();for(let rt=0,_t=L.length;rt<_t;rt++){let R=L[rt];vt=[];for(let Y=0,N=R.length,H=N-1,z=Y+1;Y<N;Y++,H++,z++)H===N&&(H=0),z===N&&(z=0),vt[Y]=Q(R[Y],R[H],R[z]);gt.push(vt),Ot=Ot.concat(vt)}for(let rt=0;rt<m;rt++){let _t=rt/m,R=f*Math.cos(_t*Math.PI/2),Y=g*Math.sin(_t*Math.PI/2)+v;for(let N=0,H=j.length;N<H;N++){let z=lt(j[N],q[N],Y);tt(z.x,z.y,-R)}for(let N=0,H=L.length;N<H;N++){let z=L[N];vt=gt[N];for(let at=0,G=z.length;at<G;at++){let y=lt(z[at],vt[at],Y);tt(y.x,y.y,-R)}}}let Jt=g+v;for(let rt=0;rt<K;rt++){let _t=d?lt(S[rt],Ot[rt],Jt):S[rt];M?(U.copy(k.normals[0]).multiplyScalar(_t.x),C.copy(k.binormals[0]).multiplyScalar(_t.y),O.copy(E[0]).add(U).add(C),tt(O.x,O.y,O.z)):tt(_t.x,_t.y,0)}for(let rt=1;rt<=l;rt++)for(let _t=0;_t<K;_t++){let R=d?lt(S[_t],Ot[_t],Jt):S[_t];M?(U.copy(k.normals[rt]).multiplyScalar(R.x),C.copy(k.binormals[rt]).multiplyScalar(R.y),O.copy(E[rt]).add(U).add(C),tt(O.x,O.y,O.z)):tt(R.x,R.y,u/l*rt)}for(let rt=m-1;rt>=0;rt--){let _t=rt/m,R=f*Math.cos(_t*Math.PI/2),Y=g*Math.sin(_t*Math.PI/2)+v;for(let N=0,H=j.length;N<H;N++){let z=lt(j[N],q[N],Y);tt(z.x,z.y,u+R)}for(let N=0,H=L.length;N<H;N++){let z=L[N];vt=gt[N];for(let at=0,G=z.length;at<G;at++){let y=lt(z[at],vt[at],Y);M?tt(y.x,y.y+E[l-1].y,E[l-1].x+R):tt(y.x,y.y,u+R)}}}nt(),pt();function nt(){let rt=s.length/3;if(d){let _t=0,R=K*_t;for(let Y=0;Y<dt;Y++){let N=Z[Y];Ft(N[2]+R,N[1]+R,N[0]+R)}_t=l+m*2,R=K*_t;for(let Y=0;Y<dt;Y++){let N=Z[Y];Ft(N[0]+R,N[1]+R,N[2]+R)}}else{for(let _t=0;_t<dt;_t++){let R=Z[_t];Ft(R[2],R[1],R[0])}for(let _t=0;_t<dt;_t++){let R=Z[_t];Ft(R[0]+K*l,R[1]+K*l,R[2]+K*l)}}n.addGroup(rt,s.length/3-rt,0)}function pt(){let rt=s.length/3,_t=0;ht(j,_t),_t+=j.length;for(let R=0,Y=L.length;R<Y;R++){let N=L[R];ht(N,_t),_t+=N.length}n.addGroup(rt,s.length/3-rt,1)}function ht(rt,_t){let R=rt.length;for(;--R>=0;){let Y=R,N=R-1;N<0&&(N=rt.length-1);for(let H=0,z=l+m*2;H<z;H++){let at=K*H,G=K*(H+1),y=_t+Y+at,x=_t+N+at,P=_t+N+G,X=_t+Y+G;zt(y,x,P,X)}}}function tt(rt,_t,R){c.push(rt),c.push(_t),c.push(R)}function Ft(rt,_t,R){Ut(rt),Ut(_t),Ut(R);let Y=s.length/3,N=T.generateTopUV(n,s,Y-3,Y-2,Y-1);$t(N[0]),$t(N[1]),$t(N[2])}function zt(rt,_t,R,Y){Ut(rt),Ut(_t),Ut(Y),Ut(_t),Ut(R),Ut(Y);let N=s.length/3,H=T.generateSideWallUV(n,s,N-6,N-3,N-2,N-1);$t(H[0]),$t(H[1]),$t(H[3]),$t(H[1]),$t(H[2]),$t(H[3])}function Ut(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function $t(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new To[s.type]().fromJSON(s)),new i(n,t.options)}},Yg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],l=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(h,l)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new ct(o,1-c),new ct(h,1-u),new ct(d,1-g),new ct(v,1-p)]:[new ct(a,1-c),new ct(l,1-u),new ct(f,1-g),new ct(m,1-p)]}};function Zg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pr=class i extends Se{constructor(t=new Mn([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let l=0;l<t.length;l++)h(t[l]),this.addGroup(a,c,l),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function h(l){let u=s.length/3,d=l.extractPoints(e),f=d.shape,g=d.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];fi.isClockWise(T)===!0&&(g[m]=T.reverse())}let v=fi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=v.length;m<p;m++){let T=v[m],E=T[0]+u,M=T[1]+u,k=T[2]+u;n.push(E,M,k),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $g(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function $g(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ws=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),h=0,l=[],u=new A,d=new A,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let T=[],E=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let k=0;k<=e;k++){let C=k/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+M,1-E),T.push(h++)}l.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let E=l[p][T+1],M=l[p][T],k=l[p+1][T],C=l[p+1][T+1];(p!==0||o>0)&&f.push(E,M,C),(p!==n-1||c<Math.PI)&&f.push(M,k,C)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wo=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],h=[],l=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),d.subVectors(u,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/s),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;o.push(v,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var In=class i extends Se{constructor(t=new bo(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,c=new A,h=new ct,l=new A,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function v(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),T(),p()}function m(E){l=t.getPointAt(E/e,l);let M=o.normals[E],k=o.binormals[E];for(let C=0;C<=s;C++){let U=C/s*Math.PI*2,O=Math.sin(U),b=-Math.cos(U);c.x=b*M.x+O*k.x,c.y=b*M.y+O*k.y,c.z=b*M.z+O*k.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=l.x+n*c.x,a.y=l.y+n*c.y,a.z=l.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let M=1;M<=s;M++){let k=(s+1)*(E-1)+(M-1),C=(s+1)*E+(M-1),U=(s+1)*E+M,O=(s+1)*(E-1)+M;g.push(k,C,O),g.push(C,U,O)}}function T(){for(let E=0;E<=e;E++)for(let M=0;M<=s;M++)h.x=E/e,h.y=M/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new To[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ao=class extends Pn{static get type(){return"ShadowMaterial"}constructor(t){super(),this.isShadowMaterial=!0,this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Oc=class extends Pn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ro=class extends Oc{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Co=class extends Pn{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function to(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fc=class extends As{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,a=2*e-n;break;case Pl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cl:o=t,c=2*n-e;break;case Pl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let h=(n-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,T=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let k=0;k!==a;++k)r[k]=p*o[l+k]+T*o[h+k]+E*o[c+k]+M*o[u+k];return r}},zc=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(n-e)/(s-e),u=1-l;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[c+d]*l;return r}},Bc=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case oo:e=this.InterpolantFactoryMethodDiscrete;break;case fc:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Jg(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ko,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=fc;var Hi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=oo;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends Dn{};Hc.prototype.ValueTypeName="color";var Vc=class extends Dn{};Vc.prototype.ValueTypeName="number";var kc=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),h=t*a;for(let l=h+a;h!==l;h+=4)je.slerpFlat(r,0,o,h-a,o,h,c);return r}},Po=class extends Dn{InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=oo;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends Dn{};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null}}},Kg=new Wc,Xc=class{constructor(t){this.manager=t!==void 0?t:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var qc=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ra=new ne,Uh=new A,Nh=new A,Yc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uh),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),Ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zc=class extends Yc{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends qc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Io=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Oh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Oh(){return performance.now()}var dl="\\[\\]\\.:\\/",jg=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",Qg="[^"+dl.replace("\\.","")+"]",t_=/((?:WC+[\/:])*)/.source.replace("WC",fl),e_=/(WCOD+)?/.source.replace("WCOD",Qg),n_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),i_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),s_=new RegExp("^"+t_+e_+n_+i_+"$"),r_=["material","materials","bones","map"],$c=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=s_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);r_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=$c;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var Fh=new ne,Do=class{constructor(t,e,n=0,s=1/0){this.ray=new Ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(t,e=!0,n=[]){return Jc(t,this,n,e),n.sort(zh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,n,e);return n.sort(zh),n}};function zh(i,t){return i.distance-t.distance}function Jc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Jc(r[o],t,e,!0)}}var mr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lo=class extends Kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var uu={type:"change"},gl={type:"start"},fu={type:"end"},Ho=new Ni,du=new fn,o_=Math.cos(70*jh.DEG2RAD),Be=new A,an=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6,Vo=class extends Lo{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new je,this._lastTargetPosition=new A,this._quat=new je().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mr,this._sphericalDelta=new mr,this._scale=1,this._panOffset=new A,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new A,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=a_.bind(this),this._onPointerUp=l_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=f_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=h_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=__.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=ve.NONE}update(t=null){let e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Be.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new A(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<o_?this.object.lookAt(this.target):(du.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(du,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function a_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function l_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fu),this.state=ve.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function h_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(gl)}function u_(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function d_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fu))}function f_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function p_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(gl)}function m_(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function g_(i){this.enabled!==!1&&i.preventDefault()}function __(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ko=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},v_=new Ms(-1,1,1,-1,0,1),_l=class extends Se{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},y_=new _l,Ds=class{constructor(t){this._mesh=new Me(y_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,v_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var gr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ct},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ne},cameraProjectionMatrixInverse:{value:new ne},cameraWorldMatrix:{value:new ne},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new A(-1,-1,-1)},sceneBoxMax:{value:new A(1,1,1)}},vertexShader:`

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
		}`},_r={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Go={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function pu(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=M_(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],c=2*Math.PI*a/n,h=new A(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(h.x*.5+.5)*255,s[o*4+1]=(h.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Oi(s,t,t);return r.wrapS=Jn,r.wrapT=Jn,r.needsUpdate=!0,r}function M_(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var xr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:xl(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ct},cameraProjectionMatrixInverse:{value:new ne},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function xl(i,t,e){let n=S_(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function S_(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new A(Math.cos(r),Math.sin(r),o))}return n}var Wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Xo=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),h=Math.floor(e+a),l=(3-Math.sqrt(3))/6,u=(c+h)*l,d=c-u,f=h-u,g=t-d,v=e-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let T=g-m+l,E=v-p+l,M=g-1+2*l,k=v-1+2*l,C=c&255,U=h&255,O=this.perm[C+this.perm[U]]%12,b=this.perm[C+m+this.perm[U+p]]%12,S=this.perm[C+1+this.perm[U+1]]%12,L=.5-g*g-v*v;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[O],g,v));let $=.5-T*T-E*E;$<0?s=0:($*=$,s=$*$*this.dot(this.grad3[b],T,E));let Z=.5-M*M-k*k;return Z<0?r=0:(Z*=Z,r=Z*Z*this.dot(this.grad3[S],M,k)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,h=(t+e+n)*.3333333333333333,l=Math.floor(t+h),u=Math.floor(e+h),d=Math.floor(n+h),f=1/6,g=(l+u+d)*f,v=l-g,m=u-g,p=d-g,T=t-v,E=e-m,M=n-p,k,C,U,O,b,S;T>=E?E>=M?(k=1,C=0,U=0,O=1,b=1,S=0):T>=M?(k=1,C=0,U=0,O=1,b=0,S=1):(k=0,C=0,U=1,O=1,b=0,S=1):E<M?(k=0,C=0,U=1,O=0,b=1,S=1):T<M?(k=0,C=1,U=0,O=0,b=1,S=1):(k=0,C=1,U=0,O=1,b=1,S=0);let L=T-k+f,$=E-C+f,Z=M-U+f,j=T-O+2*f,lt=E-b+2*f,K=M-S+2*f,dt=T-1+3*f,Q=E-1+3*f,q=M-1+3*f,gt=l&255,vt=u&255,Ot=d&255,Jt=this.perm[gt+this.perm[vt+this.perm[Ot]]]%12,nt=this.perm[gt+k+this.perm[vt+C+this.perm[Ot+U]]]%12,pt=this.perm[gt+O+this.perm[vt+b+this.perm[Ot+S]]]%12,ht=this.perm[gt+1+this.perm[vt+1+this.perm[Ot+1]]]%12,tt=.6-T*T-E*E-M*M;tt<0?s=0:(tt*=tt,s=tt*tt*this.dot3(this.grad3[Jt],T,E,M));let Ft=.6-L*L-$*$-Z*Z;Ft<0?r=0:(Ft*=Ft,r=Ft*Ft*this.dot3(this.grad3[nt],L,$,Z));let zt=.6-j*j-lt*lt-K*K;zt<0?o=0:(zt*=zt,o=zt*zt*this.dot3(this.grad3[pt],j,lt,K));let Ut=.6-dt*dt-Q*Q-q*q;return Ut<0?a=0:(Ut*=Ut,a=Ut*Ut*this.dot3(this.grad3[ht],dt,Q,q)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,l,u,d,f,g,v=(t+e+n+s)*c,m=Math.floor(t+v),p=Math.floor(e+v),T=Math.floor(n+v),E=Math.floor(s+v),M=(m+p+T+E)*h,k=m-M,C=p-M,U=T-M,O=E-M,b=t-k,S=e-C,L=n-U,$=s-O,Z=b>S?32:0,j=b>L?16:0,lt=S>L?8:0,K=b>$?4:0,dt=S>$?2:0,Q=L>$?1:0,q=Z+j+lt+K+dt+Q,gt=o[q][0]>=3?1:0,vt=o[q][1]>=3?1:0,Ot=o[q][2]>=3?1:0,Jt=o[q][3]>=3?1:0,nt=o[q][0]>=2?1:0,pt=o[q][1]>=2?1:0,ht=o[q][2]>=2?1:0,tt=o[q][3]>=2?1:0,Ft=o[q][0]>=1?1:0,zt=o[q][1]>=1?1:0,Ut=o[q][2]>=1?1:0,$t=o[q][3]>=1?1:0,rt=b-gt+h,_t=S-vt+h,R=L-Ot+h,Y=$-Jt+h,N=b-nt+2*h,H=S-pt+2*h,z=L-ht+2*h,at=$-tt+2*h,G=b-Ft+3*h,y=S-zt+3*h,x=L-Ut+3*h,P=$-$t+3*h,X=b-1+4*h,B=S-1+4*h,W=L-1+4*h,ut=$-1+4*h,ot=m&255,mt=p&255,Rt=T&255,it=E&255,ft=a[ot+a[mt+a[Rt+a[it]]]]%32,At=a[ot+gt+a[mt+vt+a[Rt+Ot+a[it+Jt]]]]%32,xt=a[ot+nt+a[mt+pt+a[Rt+ht+a[it+tt]]]]%32,St=a[ot+Ft+a[mt+zt+a[Rt+Ut+a[it+$t]]]]%32,Gt=a[ot+1+a[mt+1+a[Rt+1+a[it+1]]]]%32,Ht=.6-b*b-S*S-L*L-$*$;Ht<0?l=0:(Ht*=Ht,l=Ht*Ht*this.dot4(r[ft],b,S,L,$));let Dt=.6-rt*rt-_t*_t-R*R-Y*Y;Dt<0?u=0:(Dt*=Dt,u=Dt*Dt*this.dot4(r[At],rt,_t,R,Y));let V=.6-N*N-H*H-z*z-at*at;V<0?d=0:(V*=V,d=V*V*this.dot4(r[xt],N,H,z,at));let bt=.6-G*G-y*y-x*x-P*P;bt<0?f=0:(bt*=bt,f=bt*bt*this.dot4(r[St],G,y,x,P));let J=.6-X*X-B*B-W*W-ut*ut;return J<0?g=0:(J*=J,g=J*J*this.dot4(r[Gt],X,B,W,ut)),27*(l+u+d+f+g)}};var Ls=class i extends ko{constructor(t,e,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=pu(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new sn(this.width,this.height,{type:Hn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Oe({defines:Object.assign({},gr.defines),uniforms:Wi.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Co,this.normalMaterial.blending=Ne,this.pdMaterial=new Oe({defines:Object.assign({},xr.defines),uniforms:Wi.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Oe({defines:Object.assign({},_r.defines),uniforms:Wi.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:Ne}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Oe({uniforms:Wi.clone(Wo.uniforms),vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:No,blendDst:Cs,blendEquation:vn,blendSrcAlpha:Uo,blendDstAlpha:Cs,blendEquationAlpha:vn}),this.blendMaterial=new Oe({uniforms:Wi.clone(Go.uniforms),vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Qc,blendSrc:No,blendDst:Cs,blendEquation:vn,blendSrcAlpha:Uo,blendDstAlpha:Cs,blendEquationAlpha:vn}),this.fsQuad=new Ds(null),this.originalClearColor=new Yt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new vi,this.depthTexture.format=gi,this.depthTexture.type=mi,this.normalRenderTarget=new sn(this.width,this.height,{minFilter:qe,magFilter:qe,type:Hn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=xl(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ne,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ne,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ne,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ne,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ne,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,s,r){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){let e=new Xo,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let c=o,h=a;s[(o*t+a)*4]=(e.noise(c,h)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(c+t,h)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(c,h+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(c+t,h+t)*.5+.5)*255}let r=new Oi(s,t,t,pn,mn);return r.wrapS=Jn,r.wrapT=Jn,r.needsUpdate=!0,r}};Ls.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function qo(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Se,h=0;for(let l=0;l<i.length;++l){let u=i[l],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(e){let l=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+l);l+=i[d].attributes.position.count}c.setIndex(u)}for(let l in r){let u=mu(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(let l in o){let u=o[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[l].length;++v)f.push(o[l][v][d]);let g=mu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function mu(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){let l=i[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}let o=new t(r),a=new Re(o,e,n),c=0;for(let h=0;h<i.length;++h){let l=i[h];if(l.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=l.count;d<f;d++)for(let g=0;g<e;g++){let v=l.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(l.array,c);c+=l.count*e}return s!==void 0&&(a.gpuType=s),a}var vr=new A;function Sn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;vr.copy(t),vr[n]=0,vr.normalize();let h=.5*o/(o+a),l=1-vr.angleTo(i)/c;return Math.sign(vr[e])===1?l*h:a/(o+a)+h+h*(1-l)}var Yo=class extends Qn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new A,c=new A,h=new A(t,e,n).divideScalar(2).subScalar(r),l=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=l.length/6,g=new A,v=.5/s;for(let m=0,p=0;m<l.length;m+=3,p+=2)switch(a.fromArray(l,m),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),l[m+0]=h.x*Math.sign(a.x)+c.x*r,l[m+1]=h.y*Math.sign(a.y)+c.y*r,l[m+2]=h.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Sn(g,c,"z","y",r,n),d[p+1]=1-Sn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-Sn(g,c,"z","y",r,n),d[p+1]=1-Sn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-Sn(g,c,"x","z",r,t),d[p+1]=Sn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-Sn(g,c,"x","z",r,t),d[p+1]=1-Sn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-Sn(g,c,"x","y",r,t),d[p+1]=1-Sn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=Sn(g,c,"x","y",r,t),d[p+1]=1-Sn(g,c,"y","x",r,e);break}}};var ue={L:4054,centro:1996.85,secs:[[0,102,180],[102,218,178],[218,320,180],[320,491,220],[491,653.1,279.9],[653.1,666.8,345],[666.8,879.65,279.7],[879.65,893.35,345],[893.35,1215.8,279.9],[1215.8,1295.2,374.7],[1295.2,1368.2,377.9],[1368.2,1542.4,394],[1542.4,1866.7,394],[1866.7,2139.8,395],[2139.8,2416,397],[2416,2638.2,406.4],[2638.2,2711.2,377.9],[2711.2,2790.3,374.7],[2790.3,3203.9,279.9],[3203.9,3217.6,345],[3217.6,3430.38,279.7],[3430.38,3444.08,345],[3444.08,3584,279.9],[3584,4054,280.8]],mLOA:773.2,mLA:3324,pacote:[1368.2,2625.5],ventLA:[2638.2,2711.2],ventLOA:[1295.2,1368.2],excit:[218,491],diodos:[0,218]},xu=1.35,se=i=>(i-ue.centro)/1e3*xu,Tt={polos:4,ranhuras:72,bore:.665,rExt:.97,nucleo:se(ue.pacote[1])-se(ue.pacote[0]),pacotes:7,duto:.014,rotorR:.648,aranhaR:.36,polCorpo:.3,polAlt:.17,sapata:.07,frame:{x0:-1.62,x1:1.62,z:1.13,y0:-1.07,y1:1.07},cooler:{y0:1.07,y1:1.89},base:-1.32};var gu=1.24,vl=1.32,Ln=Tt.frame.x1+.05+.03,kt={rD:.41,yS:-.6,zS:.36,rF:.6,rC:.45,hb:.21,eF:.05,w:.045},b_=i=>i>0?.29:.23,_u=i=>i>0?Math.max(Math.abs(se(ue.mLA)),Ln+.04):Math.max(Math.abs(se(ue.mLOA)),Ln+.03);function vu(){let i=(t,e,n,s={})=>new Ro({color:t,metalness:e,roughness:n,...s});return{chapa:i(5792363,.8,.36),chapaFace:i(7108480,.8,.3),cobre:i(12087356,1,.26),bobina:i(7024413,.05,.42,{clearcoat:.8,clearcoatRoughness:.25}),campo:i(12745542,1,.3),isol:i(2828067,0,.7),eixo:i(8358031,1,.34,{anisotropy:.35}),eixoFosco:i(9278875,1,.36),aco:i(10134184,1,.3),pintura:i(8889271,0,.42,{clearcoat:.55,clearcoatRoughness:.3}),pinturaEsc:i(7705513,0,.45,{clearcoat:.45,clearcoatRoughness:.34}),mancal:i(8231857,0,.4,{clearcoat:.55,clearcoatRoughness:.3}),base:i(3818314,.7,.45),ferroFundido:i(7173498,.6,.55),patente:i(14341574,1,.22),oleo:i(14194218,0,.12,{transparent:!0,opacity:.86}),inox:i(11976387,1,.24),aluminio:i(13489111,1,.3),latao:i(13148234,1,.26),diodo:i(2237736,.3,.45),dissip:i(11910595,1,.3),aguaFria:i(3112912,0,.35,{clearcoat:.6}),aguaQuente:i(13124910,0,.35,{clearcoat:.6}),caboPos:i(12986408,0,.45),caboNeg:i(1842204,0,.45),trancado:i(12173508,1,.42),vidro:i(14019829,0,.04,{transparent:!0,opacity:.45}),aletas:i(13883869,1,.32),caixaAgua:i(5993351,0,.42,{clearcoat:.5,clearcoatRoughness:.3}),oleoTubo:i(12683818,.1,.4,{clearcoat:.6,clearcoatRoughness:.3}),amarelo:new rn({color:15909376}),preto:new rn({color:1382426}),faseU:i(12597547,.1,.42,{clearcoat:.5}),faseV:i(13935130,.1,.42,{clearcoat:.5}),faseW:i(2912191,.1,.42,{clearcoat:.5}),norte:i(13780271,.2,.4,{emissive:4852998,emissiveIntensity:.4}),sul:i(3108816,.2,.4,{emissive:532554,emissiveIntensity:.4})}}var E_=i=>(i.rotateZ(-Math.PI/2),i),Wt=(i,t,e,n=.008)=>new Yo(i,t,e,2,Math.max(4e-4,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4)));function Qe(i,t,e=.004,n=48){let s=Math.min(e,t/4),r=new ti(i,{depth:Math.max(1e-4,t-2*s),bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelOffset:-s,bevelSegments:2,curveSegments:n});return r.translate(0,0,-(t-2*s)/2),r.rotateY(Math.PI/2),r}var bn=(i,t=!1,e=0,n=0)=>{let s=t?new yi:new Mn;return s.absarc(e,n,i,0,Math.PI*2,t),s};function ye(i,t,e,n=96,s=.003){let r=bn(t);return r.holes.push(bn(i,!0)),Qe(r,e,Math.min(s,(t-i)/4),n)}var Us=(i,t,e=48)=>E_(new he(i,i,t,e)),cn=(i,...t)=>{let e=new Mn;return i.forEach(([n,s],r)=>r?e.lineTo(n,s):e.moveTo(n,s)),e.closePath(),e.holes.push(...t),e},yl=i=>{let t=new yi;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t};function Zo(i,t,e,n,s,r=6){let o=[],a=[[e-s,t+s,-Math.PI/2],[e-s,n-s,0],[i+s,n-s,Math.PI/2],[i+s,t+s,Math.PI]];for(let[c,h,l]of a)for(let u=0;u<=r;u++){let d=l+u/r*Math.PI/2;o.push([c+s*Math.cos(d),h+s*Math.sin(d)])}return o}function yr(i=0){let t=kt.rD+i,e=kt.yS-i,n=kt.zS+i,s=.06+i*.5,r=[];for(let o=0;o<=40;o++){let a=o/40*Math.PI,c=t*Math.cos(a);r.push([(Math.max(-n,Math.min(n,c))===c,c),t*Math.sin(a)])}r.push([-n,0]);for(let o=0;o<=6;o++){let a=Math.PI+o/6*Math.PI/2;r.push([-n+s+s*Math.cos(a),e+s+s*Math.sin(a)])}for(let o=0;o<=6;o++){let a=1.5*Math.PI+o/6*Math.PI/2;r.push([n-s+s*Math.cos(a),e+s+s*Math.sin(a)])}return r.push([n,0]),r}function Ml(i=.012){let t=new he(i*1.75,i*1.75,i*1.15,6);t.translate(0,i*.3+i*.575,0);let e=new he(i*2.2,i*2.2,i*.3,20);e.translate(0,i*.15,0);let n=new he(i*1.2,i*1.2,i*.12,16);return n.translate(0,i*1.51,0),qo([t,e,n])}var T_=new A(0,1,0);function w_(i,t,e,n){let s=Math.min(e,n)*.38,r=[[e/2,n/2-s],[e/2-s,n/2],[-e/2+s,n/2],[-e/2,n/2-s],[-e/2,-n/2+s],[-e/2+s,-n/2],[e/2-s,-n/2],[e/2,-n/2+s]],o=r.length,a=[],c=[],h=[],l=new A,u=new A,d=new A,f=new A;for(let v=0;v<=t;v++){i.getPoint(v/t,l),i.getTangent(v/t,u),d.set(0,l.y,l.z).normalize(),d.addScaledVector(u,-d.dot(u)).normalize(),f.crossVectors(u,d).normalize();for(let[m,p]of r)a.push(l.x+d.x*m+f.x*p,l.y+d.y*m+f.y*p,l.z+d.z*m+f.z*p),c.push(v/t,0)}for(let v=0;v<t;v++)for(let m=0;m<o;m++){let p=v*o+m,T=v*o+(m+1)%o,E=p+o,M=T+o;h.push(p,T,E,T,M,E)}let g=new Se;return g.setAttribute("position",new ie(a,3)),g.setAttribute("uv",new ie(c,2)),g.setIndex(h),g.computeVertexNormals(),g}function Ie(i,t,e,n){let s=new Me(i,t);return s.castShadow=s.receiveShadow=!0,e&&(s.userData.parte=e),n&&(s.name=n),s}function yu(i,{leve:t}){let e=new en,n={},s={},r=(Y,N=e)=>{let H=new en;return H.name=Y,H.userData.parte=Y,N.add(H),n[Y]=H,H},o=[],a=Y=>{let N=Y.clone();return o.push(N),N},c=new Map,h=Y=>(c.has(Y)||c.set(Y,a(Y)),c.get(Y)),l=(Y,N,H,z=0,at=0,G=0,y=Y.userData.parte)=>{let x=Ie(N,H,y);return x.position.set(z,at,G),Y.add(x),x},u=new je,d=Ml(.012),f=Ml(.009),g=Ml(.016),v=(Y,N,H,z,at,G,y=d)=>{let x=Ie(y,N,Y.userData.parte);return x.position.set(H,z,at),x.quaternion.copy(u.setFromUnitVectors(T_,G)),Y.add(x),x},m=Y=>new A(Y,0,0),p=Y=>new A(0,0,Y),T=new A(0,1,0),E=new en;E.name="giro",e.add(E);let M=r("eixo",E),k=.032,C=-Tt.nucleo/2+.07;{let Y=[new ct(0,C),new ct(k,C),new ct(k,se(0))];for(let[H,z,at]of ue.secs){let G=at/2e3,y=Math.min(.003,(z-H)/4e3);Y.push(new ct(G-y,se(H)),new ct(G,se(H)+y),new ct(G,se(z)-y),new ct(G-y,se(z)))}Y.push(new ct(0,se(ue.L)));let N=new zi(Y,96);N.rotateZ(-Math.PI/2),N.computeVertexNormals(),M.add(Ie(N,a(i.eixo),"eixo"));for(let[H,z,at,G]of[[2638.2,73,377.9,25],[1295.2,73,377.9,25],[223,92,180,20]])l(M,Wt(z/1e3,.014,G/1e3,.003),h(i.isol),se(H+z/2),at/2e3-.003,0)}let U=r("rotor",E),O=r("campo",E),b=Tt.nucleo,S=Tt.rotorR;U.add(Ie(ye(.205,Tt.aranhaR,b),i.chapa,"rotor"));for(let Y=0;Y<Tt.polos;Y++){let N=Y*2*Math.PI/Tt.polos,H=new en;H.rotation.x=N,U.add(H);let z=Ie(Wt(b*.97,Tt.polAlt+.02,Tt.polCorpo,.006),i.chapa,"rotor");z.position.y=Tt.aranhaR+Tt.polAlt/2-.01,H.add(z);let at=new Mn,G=.62*Math.PI/Tt.polos,y=Tt.aranhaR+Tt.polAlt;at.moveTo(y*Math.sin(-G*.92),y*Math.cos(-G*.92));for(let it=0;it<=28;it++){let ft=-G+2*G*it/28,At=S-.018*Math.pow(Math.abs(ft/G),2);at.lineTo(At*Math.sin(ft),At*Math.cos(ft))}at.lineTo(y*Math.sin(G*.92),y*Math.cos(G*.92)),at.closePath();let x=Qe(at,b,.005,4),P=Ie(x,i.chapaFace,"rotor");P.userData.polo=Y,P.userData.manter=!0,H.add(P);let X=Tt.polCorpo+.07,B=b*.97+.07,ut=cn(Zo(-B/2,-X/2,B/2,X/2,.05,5),yl(Zo(-(b*.97+.006)/2,-(Tt.polCorpo+.006)/2,(b*.97+.006)/2,(Tt.polCorpo+.006)/2,.004,1).reverse())),ot=new ti(ut,{depth:Tt.polAlt-.035,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:6});ot.rotateX(-Math.PI/2);let mt=Ie(ot,i.campo,"campo");mt.position.y=Tt.aranhaR+.012,mt.userData.polo=Y,mt.userData.manter=!0,H.add(mt);let Rt=Ie(Wt(B,.006,X,.002),i.isol,"campo");Rt.position.y=Tt.aranhaR+Tt.polAlt-.018,H.add(Rt);for(let it=0;it<7;it++){let ft=-G*.8+2*G*.8*it/6,At=S-.03,xt=Ie(Us(.008,b+.06,12),i.latao,"amortecedor");xt.position.set(0,At*Math.cos(ft),At*Math.sin(ft)),H.add(xt)}}for(let Y of[-1,1]){let N=Ie(ye(S-.05,S-.012,.018,96),i.latao,"amortecedor");N.position.x=Y*(b/2+.03),U.add(N)}let L=(()=>{let Y=[];for(let G=0;G<=14;G++){let y=.225+.32700000000000007*G/14,x=.55*((y-.225)/(.552-.225))**1.3;Y.push([y*Math.sin(x),y*Math.cos(x)])}for(let G=14;G>=0;G--){let y=.225+.32700000000000007*G/14,x=.55*((y-.225)/(.552-.225))**1.3+.011/y;Y.push([y*Math.sin(x),y*Math.cos(x)])}return Qe(cn(Y),.1,.002,4)})(),$=(Y,N)=>{let H=r(N,E),z=16;H.add(Ie(ye(.1405,.2,.13,64,.006),i.aco,N)),H.add(Ie(ye(.2,.565,.012,96).translate(-.056,0,0),i.aluminio,N)),H.add(Ie(ye(.43,.565,.01,96).translate(.055,0,0),i.aluminio,N));for(let at=0;at<z;at++){let G=Ie(L,i.aluminio,N);G.rotation.x=at*2*Math.PI/z,H.add(G)}for(let at=0;at<8;at++){let G=at*Math.PI/4,y=Ie(Us(.011,.15,10),i.eixoFosco,N);y.position.set(0,.17*Math.cos(G),.17*Math.sin(G)),H.add(y)}return H.position.x=Y,H};$(vl,"ventLA"),$(-vl,"ventLOA").scale.x=-1;let Z=r("excitatriz",E);{let Y=(se(ue.excit[0])+se(ue.excit[1]))/2,N=se(ue.excit[1])-se(ue.excit[0]);l(Z,ye(.11,.25,N*.9),i.chapa,Y);for(let x of[-1,1])l(Z,ye(.2,.256,.045),i.cobre,Y+x*N*.48);let H=(se(ue.diodos[0])+se(ue.diodos[1]))/2,z=r("diodos",E);l(z,ye(.095,.3,.035),i.dissip,H);for(let x=0;x<18;x++){let P=x*Math.PI/9,X=l(z,Wt(.09,.06,.006,.002),i.dissip,H+.045,.24*Math.cos(P),.24*Math.sin(P));X.rotation.x=-P}for(let x=0;x<6;x++){let P=x*Math.PI/3+Math.PI/6,X=l(z,new he(.024,.024,.032,20),i.diodo,H-.035,.2*Math.cos(P),.2*Math.sin(P));X.rotation.z=Math.PI/2}l(z,Wt(.03,.05,.09,.006),i.aguaFria,H-.035,0,.16);let at=Y-N*.48-.02,G=H+.02,y=[i.faseU,i.faseV,i.faseW];for(let x=0;x<3;x++){let P=-Math.PI/2+.5+(x-1)*.14,X=(ut,ot)=>new A(ut,ot*Math.cos(P),ot*Math.sin(P)),B=new on([X(at,.228),X(at-.03,.262),X((at+G)/2,.27),X(G+.03,.25),X(G,.222)],!1,"centripetal"),W=Ie(new In(B,40,.009,10,!1),y[x],"diodos");W.userData.manter=!0,z.add(W),l(z,new he(.013,.013,.025,6).rotateZ(Math.PI/2),i.latao,G+.005,.222*Math.cos(P),.222*Math.sin(P))}}{let Y=[],N=[],H=se(0)-.03,z=C-.03,at=(se(ue.diodos[0])+se(ue.diodos[1]))/2-.05,G=(y,x,P)=>new A(y,x,P);for(let[y,x]of[[Y,.014],[N,-.014]]){y.push(G(at,.16,x*1.6),G(at-.03,.11,x*1.3),G(H-.02,.045,x),G(H+.02,.004,x));for(let P of[se(ue.excit[1]),se(ue.mLOA),se(1215),-b/2])y.push(G(P,0,x));y.push(G(z-.03,.004,x),G(z+.005,.06,x),G(z+.01,Tt.aranhaR-.04,x),G(-b/2-.035,Tt.aranhaR+.015,x*2),G(-b/2-.04,Tt.aranhaR+.06,x*4))}for(let y of[.022,-.022])l(O,new he(.012,.012,.03,6).rotateZ(Math.PI/2),i.latao,at+.012,.16,y);for(let[y,x]of[[Y,i.caboPos],[N,i.caboNeg]]){let P=new on(y,!1,"centripetal"),X=Ie(new In(P,160,.009,10,!1),x,"cabos");X.userData.manter=!0,O.add(X),(s.cabos=s.cabos||[]).push(P)}}let j=r("estator"),lt=r("enrolamento"),K=Tt.ranhuras,dt=.13,Q=.024;{let Y=bn(Tt.rExt),N=new yi;for(let y=0;y<K;y++){let x=y*2*Math.PI/K,P=Q/Tt.bore/2,X=x+Math.PI/K,B=(ut,ot)=>[ut*Math.cos(ot),ut*Math.sin(ot)];[B(Tt.bore,x),B(Tt.bore,X-P),B(Tt.bore+dt,X-P),B(Tt.bore+dt,X+P),B(Tt.bore,X+P)].forEach(([ut,ot],mt)=>y===0&&mt===0?N.moveTo(ut,ot):N.lineTo(ut,ot))}N.closePath(),Y.holes.push(N);let H=(b-(Tt.pacotes-1)*Tt.duto)/Tt.pacotes,z=Qe(Y,H,.0025,72),at=a(i.chapa);for(let y=0;y<Tt.pacotes;y++)l(j,z,at,-b/2+H/2+y*(H+Tt.duto));for(let y=1;y<Tt.pacotes;y++)for(let x=0;x<24;x++){let P=x*Math.PI/12+.05,X=-b/2+y*(H+Tt.duto)-Tt.duto/2,B=(Tt.bore+dt+Tt.rExt)/2,W=l(j,Wt(Tt.duto,.2,.008,.002),at,X,B*Math.cos(P),B*Math.sin(P));W.rotation.x=P}let G=a(i.pinturaEsc);for(let y of[-1,1])l(j,ye(Tt.bore+dt+.02,Tt.rExt-.01,.03),G,y*(b/2+.015));for(let y=0;y<12;y++){let x=y*Math.PI/6,P=l(j,Wt(b+.1,.05,.05,.006),G,0,(Tt.rExt+.02)*Math.cos(x),(Tt.rExt+.02)*Math.sin(x));P.rotation.x=x}}{let N=y=>Math.floor(y%18/6)%3,H=[[],[],[]];for(let y=0;y<K;y++){let x=(y+.5)*2*Math.PI/K,P=(y+15+.5)*2*Math.PI/K,X=Tt.bore+dt*.72,B=Tt.bore+dt*.3;for(let[W,ut]of[[x,X],[P,B]]){let ot=Wt(b+.02,dt*.38,Q*.8,.004);ot.rotateX(W-Math.PI/2),ot.translate(0,ut*Math.sin(W),-ut*Math.cos(W)),H[N(y)].push(ot)}for(let W of[-1,1]){let ut=[];for(let mt=0;mt<=12;mt++){let Rt=mt/12,it=x+(P-x)*Rt,ft=X+(B-X)*Rt+.05*Math.sin(Math.PI*Rt),At=W*(b/2+.01+.26*Math.sin(Math.PI*Rt)*.9+.02*(1-Math.cos(Math.PI*Rt)));ut.push(new A(At,ft*Math.sin(it),-ft*Math.cos(it)))}H[N(y)].push(w_(new on(ut),22,.036,.015).toNonIndexed())}}let at=a(i.bobina);s.fases=[];for(let y=0;y<3;y++){H[y].forEach(P=>{for(let X of Object.keys(P.attributes))["position","normal","uv"].includes(X)||P.deleteAttribute(X)});let x=Ie(qo(H[y]),at,"enrolamento");x.userData.fase=y,x.userData.manter=!0,lt.add(x),s.fases.push(x)}let G=a(i.isol);for(let y of[-1,1])for(let x of[.12,.2])l(lt,ye(Tt.bore+.2,Tt.bore+.226,.026),G,y*(b/2+x));s.saidas=[];for(let y=0;y<3;y++){let x=[new A(-(b/2+.2),(Tt.bore+.2)*.3,(Tt.bore+.2)*.95),new A(-(b/2+.22),.3,1),new A(-1.26,.05,1.14),new A(-1.36+y*.1,-.12,Tt.frame.z+.1)],P=Ie(new In(new on(x),48,.02,12,!1),a([i.faseU,i.faseV,i.faseW][y]),"terminais");P.userData.manter=!0,lt.add(P),s.saidas.push(P)}}let q=Tt.frame,gt=q.x1-q.x0,vt=.03,Ot=.05,Jt=q.y0+.3,nt=q.z-.14,pt=Tt.base+.05,ht=r("carcaca"),tt=r("trocador"),Ft=r("base"),zt=r("terminais"),Ut=a(i.pintura),$t=a(i.pinturaEsc),rt=a(i.eixoFosco),_t=a(i.inox);{for(let B of[-1,1]){l(ht,Wt(gt,q.y1-Jt,vt,.006),Ut,0,(q.y1+Jt)/2,B*(q.z-vt/2)),l(ht,Wt(gt,Jt-q.y0+vt,vt,.006),$t,0,(q.y0+Jt)/2,B*(nt-vt/2)),l(ht,Wt(gt,vt,q.z-nt,.006),Ut,0,Jt+vt/2,B*(nt+q.z)/2),l(ht,Wt(gt+.02,.05,.05,.01),$t,0,q.y1-.025,B*(q.z+.012));for(let W=0;W<9;W++)v(ht,rt,q.x0+.14+W*(gt-.28)/8,q.y1-.025,B*(q.z+.037),p(B),f);l(ht,Wt(1.5,.8,.022,.014),Ut,-.05,-.22,B*(q.z+.011));for(let W=0;W<9;W++)for(let ut of[-.58,.14])v(ht,rt,-.75+W*.175,ut,B*(q.z+.022),p(B),f);for(let W of[-.75,.65])for(let ut of[-.34,-.1])v(ht,rt,W,ut,B*(q.z+.022),p(B),f)}l(ht,Wt(gt,vt,2*nt,.006),$t,0,q.y0+vt/2,0);for(let B of[-1,1])l(ht,Wt(gt,vt,.24,.006),Ut,0,q.y1-vt/2,B*(q.z-.12)),l(ht,Wt(.06,vt,2*q.z-.48,.006),Ut,B*gu,q.y1-vt/2,0);let Y=q.z+.04,N=new Mn,H=q.y1-.13,z=.09;N.moveTo(-Y,pt+.05),N.lineTo(Y,pt+.05),N.lineTo(Y,H-.2),N.lineTo(Y+.07,H-z),N.absarc(Y+.07,H,z,-Math.PI/2,Math.PI/2,!1),N.lineTo(Y,q.y1),N.lineTo(-Y,q.y1),N.lineTo(-Y-.07,H+z),N.absarc(-Y-.07,H,z,Math.PI/2,1.5*Math.PI,!1),N.lineTo(-Y,H-.2),N.closePath(),N.holes.push(bn(kt.rC+.03,!0),bn(.04,!0,Y+.07,H),bn(.04,!0,-Y-.07,H));let at=Qe(N,Ot,.006,32),G=cn(Array.from({length:97},(B,W)=>[.98*Math.cos(W/96*2*Math.PI),.98*Math.sin(W/96*2*Math.PI)]).slice(0,96),bn(kt.rC+.03,!0)),y=Qe(G,.03,.005,96);for(let B of[-1,1]){l(ht,at,Ut,B*(q.x1+Ot/2)),l(ht,y,$t,B*(q.x1+Ot+.015)),l(ht,ye(.9,.98,.02,96,.004),Ut,B*(Ln+.01));for(let Rt=0;Rt<20;Rt++){let it=Rt*Math.PI/10+Math.PI/20;v(ht,rt,B*(Ln+.02),.94*Math.sin(it),.94*Math.cos(it),m(B))}let W=_u(B)-kt.eF/2-Ln,ut=[[kt.rC+.03,0],[kt.rC+.03,W],[kt.rF+.07,W],[kt.rF+.09,W-.008],[.9,.036],[.91,.03],[.91,0]].map(([Rt,it])=>new ct(Rt,it)),ot=new zi(ut,128);ot.rotateZ(-Math.PI/2*B),ot.computeVertexNormals(),l(ht,ot,$t,B*Ln);let mt=new ti(cn([[.7,0],[.9,0],[.9,.05],[.7,.11]]),{depth:.036,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelOffset:-.004,bevelSegments:2});mt.translate(0,0,-.018);for(let Rt=0;Rt<12;Rt++){let it=Rt*Math.PI/6,ft=new A(0,Math.cos(it),Math.sin(it)),At=new A(B,0,0),xt=new A().crossVectors(ft,At),St=mt.clone().applyMatrix4(new ne().makeBasis(ft,At,xt));l(ht,St,$t,B*Ln)}for(let[Rt,it]of[[.62,-.86],[.74,-.72]])l(ht,Us(.03,.05,24),h(i.inox),B*(q.x1+Ot+.025),Rt,it),l(ht,Us(.042,.022,6),h(i.inox),B*(q.x1+Ot+.011),Rt,it)}let x=cn(Zo(-(q.z-.035),q.y0+.035,q.z-.035,q.y1-.035,.02,2),bn(Tt.rExt+.04,!0),...[[1,1],[1,-1],[-1,1],[-1,-1]].map(([B,W])=>bn(.09,!0,B*(q.z-.2),W*(q.y1-.2)))),P=Qe(x,.025,.003,72);for(let B of[-Tt.nucleo/2-.02,Tt.nucleo/2+.02])l(ht,P,$t,B);{let B=gu,W=vl+.075,ut=.59,ot=.075,mt=h(i.inox),Rt=cn(Zo(-(q.z-vt),q.y0+vt,q.z-vt,q.y1-vt,.02,2),bn(ut+.012,!0)),it=Qe(Rt,.012,.003,72),ft=[];for(let xt=0;xt<=14;xt++){let St=xt/14*Math.PI/2;ft.push([ut+ot*(1-Math.cos(St)),ot*Math.sin(St)])}let At=[...ft.map(([xt,St])=>new ct(xt,St)),...ft.slice().reverse().map(([xt,St],Gt,Ht)=>{let Dt=(Ht.length-1-Gt)/(Ht.length-1)*Math.PI/2;return new ct(xt+.01*Math.cos(Dt),St-.01*Math.sin(Dt))})];for(let xt of[-1,1]){l(ht,it,mt,xt*B,0,0,"defletor"),l(ht,ye(ut+.012,ut+.07,.025,96,.003),mt,xt*(B-.019),0,0,"defletor"),l(ht,ye(ut,ut+.01,W-B,96,.002),mt,xt*(B+W)/2,0,0,"defletor");let St=new zi(At,96);St.rotateZ(-Math.PI/2*xt),St.computeVertexNormals(),l(ht,St,mt,xt*W,0,0,"defletor");for(let Gt=0;Gt<16;Gt++){let Ht=Gt*Math.PI/8+Math.PI/16;v(ht,rt,xt*(B-.031),(ut+.045)*Math.sin(Ht),(ut+.045)*Math.cos(Ht),m(-xt),f)}for(let Gt of[-1,1])l(ht,Wt(.06,q.y1-q.y0-.1,.012,.004),mt,xt*(B-.03),0,Gt*(q.z-vt-.006),"defletor");l(ht,Wt(.06,.012,2*q.z-.1,.004),mt,xt*(B-.03),q.y0+vt+.006,0,"defletor")}}let X=new Mn;X.moveTo(0,0),X.lineTo(.11,0),X.lineTo(0,.22),X.closePath();for(let B of[-1,1])for(let W of[q.x0+.3,q.x1-.3]){l(ht,Wt(.46,Jt-pt,q.z-nt,.01),Ut,W,(Jt+pt)/2-.01,B*(nt+q.z)/2),l(ht,Wt(.6,.05,.46,.01),$t,W,pt+.025,B*(q.z-.09));for(let ut of[-.2,.2]){let ot=new ti(X,{depth:.024,bevelEnabled:!1});ot.translate(0,0,-.012),ot.rotateY(-B*Math.PI/2),l(ht,ot,Ut,W+ut,pt+.05,B*q.z)}for(let ut of[-.26,.26])l(ht,new he(.016,.016,.09,12),rt,W+ut,pt+.09,B*(q.z+.075)),v(ht,rt,W+ut,pt+.05,B*(q.z+.075),T,g)}for(let B of[-.35,.05])l(ht,Wt(.32,.2,.14,.012),$t,B,q.y1-.2,q.z+.07),l(ht,Wt(.34,.022,.16,.008),Ut,B,q.y1-.09,q.z+.07),l(ht,Wt(.12,.05,.004,.002),h(i.preto),B,q.y1-.2,q.z+.142);l(ht,Wt(.22,.3,.006,.003),h(i.inox),1.05,-.18,q.z+.004),l(ht,Wt(.1,.07,.025,.006),h(i.latao),.9,Jt-.1,nt+.012)}{let Y=Tt.cooler,N=q.z+.02,H=gt-.56,z=Y.y0+.3,at=.17,G=Y.y1-at,y=H/2-.28,x=h(i.pintura),P=h(i.pinturaEsc),X=h(i.cobre),B=h(i.aletas),W=h(i.caixaAgua),ut=h(i.aguaFria),ot=h(i.aguaQuente),mt=h(i.aco);for(let Mt of[-1,1]){l(tt,Wt(gt-.02,G-Y.y0,.02,.006),x,0,(Y.y0+G)/2,Mt*(N-.01));for(let Vt of[Y.y0+.035,G-.03])l(tt,Wt(gt-.06,.05,.035,.012),P,0,Vt,Mt*(N+.016));for(let Vt of[-gt/2+.12,gt/2-.12])l(tt,Wt(.06,G-Y.y0-.12,.035,.012),P,Vt,(Y.y0+G)/2,Mt*(N+.016))}let Rt=[[-N,G-.02],[N,G-.02],[N,G],[N-at,Y.y1],[-N+at,Y.y1],[-N,G]],it=[[N,G-.02],[N,G],[N-at,Y.y1],[-N+at,Y.y1],[-N,G],[-N,G-.02],[-N+.02,G-.02],[-N+.02,G-.008],[-N+at+.008,Y.y1-.02],[N-at-.008,Y.y1-.02],[N-.02,G-.008],[N-.02,G-.02]];l(tt,Qe(cn(it),gt,.004,4),x,0,0,0);for(let Mt of[-1,1])l(tt,Wt(.02,G-Y.y0,2*N,.006),x,Mt*(gt/2-.01),(Y.y0+G)/2,0),l(tt,Qe(cn(Rt),.02,.004,4),x,Mt*(gt/2-.01),0,0);for(let Mt of[-.75,.75]){l(tt,Wt(.9,.02,2*(N-at)-.14,.012),P,Mt,Y.y1+.01,0);for(let Vt=0;Vt<6;Vt++)for(let Kt of[-1,1])v(tt,rt,Mt-.4+Vt*.16,Y.y1+.02,Kt*(N-at-.1),T,f)}let ft=new Mn;ft.moveTo(-.075,0),ft.lineTo(.075,0),ft.lineTo(.05,.07),ft.absarc(0,.07,.05,0,Math.PI,!1),ft.closePath(),ft.holes.push(bn(.024,!0,0,.07));let At=new ti(ft,{depth:.025,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelOffset:-.003,bevelSegments:2,curveSegments:16});At.translate(0,0,-.0125);for(let Mt of[-gt/2+.2,gt/2-.2])for(let Vt of[-1,1])l(tt,At,P,Mt,Y.y1-.005,Vt*(N-at-.03));let xt=N-.05,St=t?26:44,Gt=H/St,Ht=2*xt;for(let Mt of[-1,1])l(tt,Wt(H+.08,.34,.03,.006),mt,0,z,Mt*xt);let Dt=new he(.0095,.0095,Ht,12);Dt.rotateX(Math.PI/2);let V=[-.105,-.035,.035,.105];for(let Mt=0;Mt<4;Mt++)for(let Vt=0;Vt<St-Mt%2;Vt++)l(tt,Dt,X,-H/2+Gt/2+Vt*Gt+Mt%2*Gt/2,z+V[Mt],0);let bt=new Qn(H,.26,.0016),J=t?28:52;for(let Mt=0;Mt<J;Mt++)l(tt,bt,B,0,z,-xt+.04+Mt*(2*xt-.08)/(J-1));l(tt,Wt(H+.08,.012,Ht,.004),mt,0,z-.155,0);for(let Mt of[-1,1])l(tt,Wt(.012,z+.155-Y.y0,2*N-.04,.004),P,Mt*(H/2+.05),(Y.y0+z+.155)/2,0);l(tt,Wt(H+.1,.015,2*N-.06,.004),P,0,z-.22,0);for(let Mt of[-1,1])l(tt,Wt(H+.1,.05,.012,.004),P,0,z-.2,Mt*(N-.036));l(tt,Wt(.12,.08,.08,.012),h(i.preto),-H/2+.1,z-.18,-(N-.1));for(let Mt of[-1,1]){l(tt,Wt(H+.16,.4,.03,.01),W,0,z,Mt*(N+.015));for(let Vt of[-.15,.15])l(tt,Wt(H+.04,.02,.14,.006),W,0,z+Vt,Mt*(N+.1));for(let Vt of[-1,1])l(tt,Wt(.02,.32,.14,.006),W,Vt*(H/2+.01),z,Mt*(N+.1));l(tt,Wt(H+.04,.32,.02,.01),W,0,z,Mt*(N+.16)),Mt<0&&l(tt,Wt(H+.02,.014,.14,.004),W,0,z,Mt*(N+.1)),l(tt,Wt(H+.12,.38,.022,.01),W,0,z,Mt*(N+.181));for(let Vt=0;Vt<15;Vt++)for(let Kt of[-.16,.16]){let be=-H/2-.02+Vt*(H+.04)/14;v(tt,rt,be,z+Kt,Mt*(N+.03),p(Mt),f),v(tt,rt,be,z+Kt,Mt*(N+.192),p(Mt),f)}}for(let[Mt,Vt]of[[z+.13,.022],[z-.13,.022]])l(tt,new he(Vt,Vt,.03,6).rotateX(Math.PI/2),h(i.inox),H/2-.1,Mt,N+.207);s.agua=[];let et=-H/2+.22,wt=H/2-.22,Et=-(N+.42),Bt=-(N+.42);for(let[Mt,Vt,Kt,be]of[[-.08,ut,.42,et-y],[.08,ot,.42,wt-y]]){let de=z+Mt,me=-(N+.192),fe=y+be;l(tt,Us(.06,.16).rotateY(Math.PI/2),Vt,fe,de,me-.08,"agua");for(let re of[me-.16,me-.2])l(tt,Us(.085,.025).rotateY(Math.PI/2),Vt,fe,de,re,"agua");for(let re=0;re<8;re++){let Ce=re*Math.PI/4;v(tt,rt,fe+.068*Math.cos(Ce),de+.068*Math.sin(Ce),me-.1725,p(1),f)}let ae=-(N+Kt),Ct=[new A(fe,de,me-.21),new A(fe,de,ae+.14),new A(fe,de-.035,ae+.035),new A(fe,de-.14,ae),new A(fe,Tt.base+.02,ae)];l(tt,new In(new on(Ct,!1,"catmullrom",.5),96,.055,24,!1),Vt,0,0,0,"agua");let jt=.55+Mt*2;l(tt,new he(.1,.1,.025,32),Vt,fe,jt-.045,ae,"agua"),l(tt,new he(.1,.1,.025,32),Vt,fe,jt+.045,ae,"agua"),l(tt,new he(.078,.078,.065,32),h(i.ferroFundido),fe,jt,ae,"agua"),l(tt,Wt(.04,.04,.05,.008),h(i.ferroFundido),fe,jt,ae-.1,"agua"),l(tt,Wt(.03,.02,.24,.006),h(i.amarelo),fe,jt+.03,ae-.2,"agua"),l(tt,new he(.012,.012,.1,12).rotateX(Math.PI/2),h(i.inox),fe+.06,de+.03,ae+.08,"agua"),l(tt,new he(.1,.1,.02,32),Vt,fe,Tt.base+.01,ae,"agua"),l(tt,Wt(.08,.5,.06,.01),P,fe+.12,Tt.base+.25,ae,"agua")}{let Mt=(me,fe,ae)=>new A(me,fe,ae),Vt=-(N+.1),Kt=N+.1,be=z-.08,de=z+.08;for(let me of[-1.05,-.55,-.05,.45,.95]){let fe=[Mt(et,Tt.base+.05,Et),Mt(et,be-.14,Et),Mt(et,be,Et+.14),Mt(et,be,Vt),Mt(me,z-.07,Vt),Mt(me,z-.07,Kt),Mt(me,z+.07,Kt),Mt(me,z+.07,Vt),Mt(wt,de,Vt),Mt(wt,de,Bt+.14),Mt(wt,de-.14,Bt),Mt(wt,Tt.base+.05,Bt)],ae=new hr;for(let Ct=1;Ct<fe.length;Ct++)ae.add(new lr(fe[Ct-1],fe[Ct]));s.agua.push(ae)}}}{let Y=a(i.pintura),N=-1.32,H=q.z+.36,z=cn([[0,.3],[.36,.3],[.36,-.52],[0,-.24]]),at=new ti(z,{depth:.4,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelOffset:-.008,bevelSegments:2});at.translate(0,0,-.2),at.rotateY(-Math.PI/2),l(zt,at,Y,N+.02,0,q.z),l(zt,Wt(.66,1.04,.26,.018),Y,N-.03,-.09,H+.13),l(zt,Wt(.6,.98,.022,.012),h(i.pinturaEsc),N-.03,-.09,H+.27);for(let y of[-.27,.21])for(let x=0;x<6;x++)v(zt,h(i.eixoFosco),N+y,-.53+x*.176,H+.281,p(1),f);let G=new Mn;G.moveTo(-.06,-.045),G.lineTo(.06,-.045),G.lineTo(0,.06),G.closePath(),l(zt,new pr(G).scale(1.18,1.18,1),h(i.preto),N-.03,.22,H+.282),l(zt,new pr(G),h(i.amarelo),N-.03,.22,H+.283);for(let y=0;y<3;y++)l(zt,new he(.03,.036,.09,20),h(i.isol),N-.21+y*.18,-.65,H+.13),l(zt,new he(.042,.042,.02,6),h(i.eixoFosco),N-.21+y*.18,-.615,H+.13)}let R=(Y,N,H)=>{let z=r(N),at=se(Y),G=H*_u(H),y=b_(H),x=kt.hb,P=G+H*y,X=G-H*x,B=.04,W=a(i.mancal),ut=a(i.pinturaEsc),ot=a(i.inox),mt=a(i.patente),Rt=a(i.aco),it=a(i.oleo),ft=a(i.latao),At=a(i.eixoFosco),xt=(Ct,jt)=>(Ct+jt)/2,St=yr(-kt.w).reverse();l(z,Qe(cn(yr(0),yl(St)),y-B,.004,48),W,xt(G,P-H*B)),l(z,Qe(cn(yr(0),bn(.165,!0)),B,.004,48),W,P-H*B/2),l(z,ye(kt.rC-kt.w,kt.rC,x-B,96,.003),W,xt(G,X+H*B)),l(z,ye(.165,kt.rC,B,96,.003),W,X+H*B/2),l(z,ye(kt.rC,kt.rF,kt.eF,128,.006),W,G),l(z,ye(kt.rC,kt.rF-.06,.02,96,.003),W,G-H*(kt.eF/2+.01));for(let Ct=0;Ct<12;Ct++){let jt=Ct*Math.PI/6+Math.PI/12;v(z,At,G+H*kt.eF/2,(kt.rF-.035)*Math.sin(jt),(kt.rF-.035)*Math.cos(jt),m(H),g)}for(let Ct of[-1,1]){l(z,Wt(y-.03,.05,.1,.01),ut,xt(G+H*kt.eF/2,P),0,Ct*(kt.zS+.04));for(let jt of[0,1,2])v(z,At,G+H*(kt.eF/2+.035+jt*(y-.1)/2),.025,Ct*(kt.zS+.055),T,g)}let Gt=9;for(let Ct=0;Ct<Gt;Ct++){let jt=-kt.zS+.05+Ct*(2*kt.zS-.1)/(Gt-1);l(z,Wt(.07,-kt.yS-.08,.018,.005),W,P+H*.035,(kt.yS+.03)/2-.02,jt)}let Ht=Qe(cn(yr(.06),yl(yr(-.003).reverse())),.02,.003,40),Dt=5;for(let Ct=0;Ct<Dt;Ct++)l(z,Ht,W,G+H*(kt.eF/2+.035+Ct*(y-kt.eF/2-.06)/(Dt-1)));for(let Ct=0;Ct<5;Ct++){let jt=-.1+Ct*.05;l(z,Wt(y-.05,.08,.018,.005),W,xt(G+H*kt.eF/2,P),kt.rD+.02,jt)}for(let Ct of[-.19,.19]){let jt=Math.sqrt(kt.rD**2-Ct**2);l(z,new he(.035,.045,.05,24),W,xt(G,P),jt+.015,Ct);let re=l(z,new wo(.042,.012,12,32),ot,xt(G,P),jt+.1,Ct);re.rotation.y=Math.PI/2,l(z,new he(.013,.013,.05,12),ot,xt(G,P),jt+.05,Ct)}for(let[Ct,jt]of[[P,1],[X,-1]]){let re=H*jt;l(z,ye(.1415,.24,.03,96,.003),ot,Ct+re*.015),l(z,ye(.1415,.175,.03,72,.002),At,Ct+re*.045);for(let Ce of[.15,.16])l(z,ye(Ce,Ce+.004,.012,72,.001),At,Ct+re*.066);for(let Ce=0;Ce<8;Ce++){let we=Ce*Math.PI/4+Math.PI/8;v(z,At,Ct+re*.03,.21*Math.sin(we),.21*Math.cos(we),m(re),f)}}{let Ct=[],re=kt.rD-kt.w+.005;for(let we=0;we<=32;we++){let ln=we/32*Math.PI;Ct.push([re*Math.cos(ln),re*Math.sin(ln)])}for(let we=32;we>=0;we--){let ln=we/32*Math.PI;Ct.push([.2*Math.cos(ln),.2*Math.sin(ln)])}let Ce=Qe(cn(Ct),.05,.003,32);for(let we of[-1,1])l(z,Ce,W,at+we*.095),l(z,Wt(.05,.06,.12,.008),W,at+we*.095,-.23,0)}let V=[];for(let Ct=0;Ct<=12;Ct++){let jt=-1+2*Ct/12;V.push(new ct(.2-.012*jt*jt,jt*.0425))}let bt=[new ct(.151,-.0425),...V,new ct(.151,.0425)];for(let Ct of[-1,1]){let jt=new zi(bt,96);jt.rotateZ(-Math.PI/2),jt.computeVertexNormals(),l(z,jt,Rt,at+Ct*.0575),l(z,ye(.1405,.151,.085,96,.001),mt,at+Ct*.0575)}let J=.21,et=Ie(ye(J,J+.016,.026,96,.002),ft,N);et.position.set(at,.1405-J,0),et.userData.manter=!0,z.add(et),(s.aneis=s.aneis||[]).push(et);let wt=new ws(.0085,12,8);for(let Ct=0;Ct<14;Ct++){let jt=Ct/14*Math.PI*2,re=Ie(wt,it,N);re.position.set(Ct%2?.006:-.006,(J-.007)*Math.cos(jt),(J-.007)*Math.sin(jt)),re.scale.set(1,1.6,1),re.rotation.x=-jt,et.add(re)}l(z,ye(J-.003,J,.02,96,.001),it,at,.1405-J,0);let Et=-.22;l(z,Wt(y-B-.006,Et-kt.yS-kt.w-.002,2*(kt.zS-kt.w)-.004,.02),it,xt(G,P-H*B),(Et+kt.yS+kt.w)/2,0);{let Ct=[],jt=kt.rC-kt.w-.002,re=Math.asin(-Et/jt);for(let Ce=0;Ce<=24;Ce++){let we=-Math.PI/2-(Math.PI/2-re)+Ce/24*2*(Math.PI/2-re);Ct.push([jt*Math.cos(we),jt*Math.sin(we)])}l(z,Qe(cn(Ct),x-B-.005,.002,24),it,xt(G,X+H*B)),l(z,Wt(.006,Et-kt.yS-kt.w,2*(kt.zS-kt.w),.002),it,G,(Et+kt.yS+kt.w)/2,0)}let Bt=1.35,Mt=kt.rD+.02,Vt=xt(G,P)+H*.02,Kt=Mt*Math.cos(Bt),be=-Mt*Math.sin(Bt);{let Ct=l(z,new he(.022,.022,.07,6),ot,Vt,Kt,be);Ct.rotation.x=-Bt}{let Ct=l(z,new he(.014,.014,.05,12),ot,Vt,(Mt+.05)*Math.cos(Bt),-(Mt+.05)*Math.sin(Bt));Ct.rotation.x=-Bt}let de=H*(q.x1+Ot+.05),me=(Ct,jt,re)=>new A(Ct,jt,re),fe=new on([me(Vt,(Mt+.07)*Math.cos(Bt),-(Mt+.07)*Math.sin(Bt)),me(Vt,.06,-.56),me(Vt-H*.03,-.08,-.66),me((Vt+de)/2,-.02,-.78),me(de+H*.06,.3,-.85),me(de+H*.04,.55,-.86),me(de,.62,-.86)],!1,"centripetal");l(z,new In(fe,64,.011,10,!1),h(i.trancado));let ae=xt(G+H*kt.eF/2,P);l(z,new he(.055,.055,.02,32).rotateX(Math.PI/2),ot,ae,Et,kt.zS+.055),l(z,new he(.04,.04,.022,32).rotateX(Math.PI/2),h(i.vidro),ae,Et,kt.zS+.058),l(z,Wt(.06,.04,.008,.004),it,ae,Et-.02,kt.zS+.052);for(let Ct of[-1,1])for(let[jt,re]of[[-.12,.026],[-.47,.03]])l(z,new he(re,re,.03,6).rotateX(Math.PI/2),ot,ae+H*(Ct>0?-.07:0),jt,Ct*(kt.zS+.06));return l(z,new he(.03,.03,.035,6),ot,ae,kt.yS-.015,-.15),z};R(ue.mLA,"mancalLA",1),R(ue.mLOA,"mancalLOA",-1);{let Y=(se(ue.excit[0])+se(ue.excit[1]))/2,N=se(ue.excit[1])-se(ue.excit[0]),H=n.excitatriz,z=r("excitatrizFixa");z.userData.parte="excitatriz";let at=a(i.pintura),G=a(i.chapa),y=a(i.cobre);l(z,ye(.265,.36,N*.85),G,Y,0,0,"excitatriz");for(let X of[-1,1])l(z,ye(.29,.35,.03),y,Y+X*N*.46,0,0,"excitatriz");let x=Y+N*.43,P=Y-N*.43;l(z,ye(.36,.4,N*.86,96,.004),at,Y,0,0,"excitatriz");for(let X of[x,P])l(z,ye(.36,.45,.025,96,.004),at,X,0,0,"excitatriz");for(let X=0;X<12;X++){let B=X*Math.PI/6;l(z,Wt(N*.86,.02,.03,.005),at,Y,.41*Math.cos(B),.41*Math.sin(B),"excitatriz").rotation.x=B}for(let X of[.7,-.7,2.2,-2.2]){let B=Ln+.01+x,W=l(z,Wt(Math.abs(B),.08,.1,.02),at,(x-Ln-.01)/2,.66*Math.cos(X),.66*Math.sin(X),"excitatriz");W.rotation.x=X;let ut=l(z,Wt(.05,.27,.1,.015),at,x,.54*Math.cos(X),.54*Math.sin(X),"excitatriz");ut.rotation.x=X,v(z,rt,-Ln-.005,.66*Math.cos(X)+.04*Math.cos(X),.66*Math.sin(X)+.04*Math.sin(X),m(-1),g)}l(z,new In(new on([new A(Y,.4,-.1),new A(Y+.02,.47,-.3),new A(Y+.1,.5,-.52),new A(-Ln-.2,.52,-.66),new A(-(q.x1+Ot+.1),.66,-.72),new A(-(q.x1+Ot+.05),.74,-.72)],!1,"centripetal"),64,.012,10,!1),h(i.trancado),0,0,0,"excitatriz")}{let Y=r("acoplamento",E),N=se(3619),H=se(4019),z=.2808/2,at=.063,G=.04,y=H-N;l(Y,Wt(y,G,at,.006),h(i.aco),(N+H)/2,z+G/2-.022,0)}for(let Y of[-1,1])for(let N of[q.x0+.3,q.x1-.3])l(Ft,Wt(.68,.05,.52,.006),h(i.base),N,Tt.base+.025,Y*(q.z-.09));return A_(e),{raiz:e,giro:E,partes:n,corte:o,anim:s,G:Tt}}function A_(i){i.updateMatrixWorld(!0);let t=r=>{let o=r.parent;for(;o&&o!==i&&!o.userData.parte;)o=o.parent;return o||i},e=new Map,n=new ne,s=new ne;i.traverse(r=>{if(!r.isMesh||r.userData.manter||r.isInstancedMesh)return;let o=t(r),a=`${o.uuid}|${r.userData.parte}|${r.material.uuid}|${r.castShadow}`;e.has(a)||e.set(a,{g:o,lista:[]}),e.get(a).lista.push(r)});for(let{g:r,lista:o}of e.values()){if(o.length<2)continue;n.copy(r.matrixWorld).invert();let a=o.map(u=>{let d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();for(let f of Object.keys(d.attributes))["position","normal","uv"].includes(f)||d.deleteAttribute(f);if(d.attributes.uv||d.setAttribute("uv",new ie(new Float32Array(d.attributes.position.count*2),2)),s.multiplyMatrices(n,u.matrixWorld),d.applyMatrix4(s),s.determinant()<0){let f=d.attributes.position,g=d.attributes.normal;for(let v=0;v<f.count;v+=3)for(let m of[f,g,d.attributes.uv]){let p=[];for(let T=0;T<m.itemSize;T++)p.push(m.getComponent(v+1,T));for(let T=0;T<m.itemSize;T++)m.setComponent(v+1,T,m.getComponent(v+2,T)),m.setComponent(v+2,T,p[T])}}return d}),c=qo(a);if(!c)continue;let h=o[0],l=Ie(c,h.material,h.userData.parte);l.castShadow=h.castShadow,r.add(l);for(let u of o)u.parent.remove(u)}}function Mu(i){let t=i*1e3/xu+ue.centro,e=ue.secs.find(([n,s])=>t>=n&&t<=s);return e?e[2]/2e3:.14}var ei=(i,t,e)=>Math.max(t,Math.min(e,i)),Sl=(i,t,e)=>i+(t-i)*e;var Su=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;var bu=(i,t=0)=>Number(i).toLocaleString("pt-BR",{minimumFractionDigits:t,maximumFractionDigits:t});function Eu(i=1234567){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var Mr=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);var Tu=i=>i*Math.PI/180;function wu(i,t){let e=new A;function n(){let c=e.copy(i.position).sub(t.target),h=Math.max(.2,c.length());return{alvo:t.target.clone(),dist:h,az:Math.atan2(c.z,c.x)*180/Math.PI,el:Math.asin(ei(c.y/h,-1,1))*180/Math.PI}}let s=c=>{let h=Tu(c.az),l=Tu(c.el);return new A(c.alvo.x+c.dist*Math.cos(l)*Math.cos(h),c.alvo.y+c.dist*Math.sin(l),c.alvo.z+c.dist*Math.cos(l)*Math.sin(h))},r=c=>typeof c=="function"?c():Array.isArray(c)?new A(...c):c;function o(c){t.target.copy(r(c.alvo)),i.position.copy(s({...c,alvo:r(c.alvo)}))}function a(c,h,l){let u=h.az-c.az;for(;u>180;)u-=360;for(;u<-180;)u+=360;return{alvo:r(c.alvo).clone().lerp(r(h.alvo),l),dist:Math.exp(Sl(Math.log(c.dist),Math.log(h.dist),l)),az:c.az+u*l,el:Sl(c.el,h.el,l)}}return{estado:n,aplicar:o,misturar:a}}function Au(i,{reduce:t}){let e=[],n=0,s=!1,r=!1,o=null,a=0,c=-1;function h(u,d){let f=i.estado();e=[],u.forEach((g,v)=>e.push({...g,de:v===0?f:u[v-1].para})),t&&(e=e.map(g=>({...g,corte:!0}))),a=e.reduce((g,v)=>g+v.dur,0),n=0,s=!0,r=!1,o=d||null,c=-1}function l(u){if(!s||r)return null;n+=u;let d=0;for(let v=0;v<e.length;v++){let m=e[v];if(n<d+m.dur){v!==c&&(c=v,m.ini&&m.ini());let p=ei((n-d)/m.dur,0,1),T=m.corte?1:Su(p);return i.aplicar(i.misturar(m.de,m.para,T)),{k:n/a}}d+=m.dur}let f=e[e.length-1];f&&i.aplicar(i.misturar(f.de,f.para,1)),s=!1;let g=o;return o=null,g&&g(),{k:1}}return{tocar:h,atualizar:l,parar(){s=!1,o=null},pausar(){s&&(r=!0)},continuar(){r=!1},get ativo(){return s},get pausado(){return r},get t(){return n},get dur(){return a}}}var En=Eu(97531),He=i=>document.getElementById(i),Mi=He("m3-stage"),Ns=He("m3-canvas"),R_=()=>{try{return!!(window.WebGL2RenderingContext&&document.createElement("canvas").getContext("webgl2"))}catch{return!1}};if(Mi&&Ns)if(!R_())He("tour-3d")?.setAttribute("hidden","");else try{P_()}catch(i){console.error(i),He("tour-3d")?.setAttribute("hidden","")}function C_(){let i={type:"generator",voltage:13800,frequency:60,poles:4};return i.rpm=120*i.frequency/i.poles,i.ger=i.type!=="motor",i}function P_(){let i=new URLSearchParams(location.search).get("m3"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=i==="leve"?!0:i==="alta"?!1:matchMedia("(pointer: coarse)").matches||(navigator.hardwareConcurrency||8)<=4,n=new go({canvas:Ns,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),n.outputColorSpace=Je,n.toneMapping=tl,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=jc,n.localClippingEnabled=!0,n.setClearColor(0,0);let s=new sr;s.environment=I_(n),s.environmentIntensity=1;let r=new Ke(32,1,.05,80),o=new Rs(16774374,2.1);o.position.set(3.2,8,5.6),o.castShadow=!0,Object.assign(o.shadow.camera,{left:-3.8,right:3.8,top:3.8,bottom:-3.8,near:2,far:20}),o.shadow.mapSize.set(e?1024:4096,e?1024:4096),o.shadow.bias=-25e-5,o.shadow.normalBias=.012,s.add(o);let a=new Rs(14411519,.55);a.position.set(-6,2.5,4),s.add(a);let c=new Rs(16777215,.9);c.position.set(-2.5,4.5,-7),s.add(c);{let _=new Me(new xi(60,60),new Ao({color:727074,opacity:.28}));_.rotation.x=-Math.PI/2,_.position.y=Tt.base,_.receiveShadow=!0,_.name="chao",s.add(_);let w=document.createElement("canvas");w.width=w.height=256;let I=w.getContext("2d"),F=I.createRadialGradient(128,128,0,128,128,128);F.addColorStop(0,"rgba(0,0,0,.6)"),F.addColorStop(.5,"rgba(0,0,0,.28)"),F.addColorStop(1,"rgba(0,0,0,0)"),I.fillStyle=F,I.fillRect(0,0,256,256);let D=new Me(new xi(5.4,4.2),new rn({map:new Es(w),transparent:!0,depthWrite:!1,opacity:.75}));D.rotation.x=-Math.PI/2,D.position.set(-.15,Tt.base+.003,0),D.renderOrder=-1,s.add(D)}let h=vu(),l=yu(h,{leve:e});s.add(l.raiz);let u=C_(),d=new fn(new A(0,0,-1),0),f={value:0};for(let _ of l.corte)_.side=xn,_.clippingPlanes=[],_.onBeforeCompile=w=>{w.uniforms.uCorte=f,w.fragmentShader=`uniform float uCorte;
`+w.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        bool tampa = uCorte > .5 && !gl_FrontFacing;
        if (tampa) { float hh = step(.78, fract((gl_FragCoord.x - gl_FragCoord.y) * .08)); diffuseColor.rgb *= mix(.93, .66, hh); }`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        if (tampa) { normal = normalize((viewMatrix * vec4(0., 0., 1., 0.)).xyz); nonPerturbedNormal = normal; }`)},_.customProgramCacheKey=()=>"tampa-corte";let g=!1,v=new Oe({uniforms:{cor:{value:new Yt(9415101)}},transparent:!0,depthWrite:!1,clipping:!0,vertexShader:`#include <common>
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
      }`}),m=_=>{g=_,f.value=_?1:0;for(let w of[...l.corte,v,O.material,tt.material])w.clippingPlanes=_?[d]:[],w.needsUpdate=!0;et.corte?.setAttribute("aria-pressed",String(_))},p=[];l.raiz.traverse(_=>{_.isMesh&&_.name!=="chao"&&(_.userData.mat0=_.material,p.push(_))});let T=_=>{for(;_&&!_.userData.parte;)_=_.parent;return _?_.userData.parte:null};function E(_){for(let w of p){let I=w.userData.parte||T(w),F=w.userData.matCap||w.userData.mat0,D=!_||_.includes(I);w.material=D?F:v,w.castShadow=D,w.userData.miudo===void 0&&(w.geometry.computeBoundingSphere(),w.userData.miudo=w.geometry.boundingSphere.radius*Math.max(w.scale.x,w.scale.y,w.scale.z)<.06),w.userData.miudo&&(w.visible=D)}}function M(_){l.anim.fases.forEach(w=>{w.userData.matCap=_?[h.faseU,h.faseV,h.faseW][w.userData.fase]:null})}function k(_){l.giro.traverse(w=>{w.isMesh&&w.userData.polo!==void 0&&w.userData.parte==="rotor"&&(w.userData.matCap=_?w.userData.polo%2?h.sul:h.norte:null)})}let C=72,U=new Ts(.024,.12,12);U.rotateZ(-Math.PI/2);let O=new vo(U,new rn({toneMapped:!1,depthTest:!1,transparent:!0,opacity:.95}),C*3);O.visible=!1,O.renderOrder=9,s.add(O);let b=new Yt,S=new ne,L=new je,$=new A,Z=new A;function j(_){let w=0;for(let I of[-.5,0,.5])for(let F=0;F<C;F++){let D=F*2*Math.PI/C,st=Math.cos(Tt.polos/2*(D-_)),yt=Tt.bore-.008,Pt=$.set(0,Math.cos(D),Math.sin(D));L.setFromUnitVectors(new A(1,0,0),st>=0?Pt:Pt.clone().negate());let Lt=.35+.9*Math.abs(st);Z.set(Lt,Lt,Lt),S.compose(new A(I,yt*Math.cos(D),yt*Math.sin(D)),L,Z),O.setMatrixAt(w,S),b.setRGB(st>=0?.95:.18,st>=0?.3+.2*(1-st):.45,st>=0?.2:.95),O.setColorAt(w,b),w++}O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0)}let lt=Tt.nucleo,K=[];{let _=(lt-(Tt.pacotes-1)*Tt.duto)/Tt.pacotes;for(let w=1;w<Tt.pacotes;w++)K.push(-lt/2+w*_+(w-.5)*Tt.duto)}let dt=[],Q=Tt.frame,q=(_,w,I)=>new A(_,w*Math.cos(I),w*Math.sin(I)),gt=e?48:110;for(let _=0;_<gt;_++){let w=K[Math.floor(En()*K.length)]+(En()-.5)*.01,I=w===0?En()<.5?-1:1:Math.sign(w+(En()-.5)*.3)||1,F=En()*Math.PI*2,D=Math.cos(F),st=Math.sin(F),yt=Q.z-.08,Pt=Q.y0+.08,Lt=Q.y1-.06,qt=Math.sign(st)||1,Zt=Math.min(Math.abs(st)>.001?yt/Math.abs(st):9,D<0?-Pt/-D:Lt/Math.max(D,.001)),Nt=w*1.08+(En()-.5)*.1,te=[q(w,Tt.bore+.06,F),q(w,Tt.rExt+.05,F),q(w*1.04,Zt*.97,F)];D<.55&&(D<-.4&&te.push(new A(Nt,Pt+.05,qt*(yt-.1))),te.push(new A(Nt,Math.max(-.2,Zt*D)+.25,qt*yt),new A(Nt,.75,qt*(yt-.02))));let ce=qt*Math.min(Math.abs(Zt*st),Q.z-.3)*(.5+.5*En());te.push(new A(Nt,Q.y1-.02,ce),new A(Nt*.95,Q.y1+.14,ce*.8),new A(Nt*.9,1.37,ce*.7));let _e=te.length-1;te.push(new A(Nt*.9+I*.1,1.6,ce*.7),new A(I*1.42,1.62,ce*.8),new A(I*1.45,1.05,ce),q(I*1.47,.82,F),q(I*1.43,.5,F),q(I*1.33,.47,F),q(I*1.29,.6,F),q(I*1,.8,F),q(I*.72,.7,F),q((w+I*.72)/2,.672,F));let ke=new on(te,!0,"centripetal"),oe=te.length;dt.push({c:ke,a:(_e-.2)/oe,b:(_e+.8)/oe,h0:(oe-4)/oe})}let vt=e?3e3:9e3,Ot=new Se,Jt=new Float32Array(vt*3),nt=new Float32Array(vt*3),pt=[];for(let _=0;_<vt;_++)pt.push({c:_%dt.length,u:En(),sp:.035+En()*.025,j:new A(En()-.5,En()-.5,En()-.5).multiplyScalar(.04)});Ot.setAttribute("position",new Re(Jt,3)),Ot.setAttribute("color",new Re(nt,3));let ht=(()=>{let _=document.createElement("canvas");_.width=_.height=64;let w=_.getContext("2d"),I=w.createRadialGradient(32,32,0,32,32,32);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.35,"rgba(255,255,255,.9)"),I.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=I,w.fillRect(0,0,64,64);let F=new Es(_);return F.colorSpace=Je,F})(),tt=new bs(Ot,new Fi({size:.06,map:ht,vertexColors:!0,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1,toneMapped:!1}));tt.renderOrder=7,tt.visible=!1,s.add(tt);let Ft=new Yt(2854143),zt=new Yt(16726815);function Ut(_){for(let w=0;w<vt;w++){let I=pt[w],F=dt[I.c];I.u=(I.u+_*I.sp)%1;let D=F.c.getPoint(I.u,$).add(I.j);Jt[w*3]=D.x,Jt[w*3+1]=D.y,Jt[w*3+2]=D.z;let st=I.u,yt=st<F.a?1:st<F.b?1-(st-F.a)/(F.b-F.a):st>F.h0?.6*(st-F.h0)/(1-F.h0):0;b.copy(Ft).lerp(zt,ei(yt,0,1)),nt[w*3]=b.r,nt[w*3+1]=b.g,nt[w*3+2]=b.b}Ot.attributes.position.needsUpdate=!0,Ot.attributes.color.needsUpdate=!0}let $t=40,rt=new Se,_t=new Float32Array($t*2*3),R=new Float32Array($t*2*3);rt.setAttribute("position",new Re(_t,3)),rt.setAttribute("color",new Re(R,3));let Y=new bs(rt,new Fi({size:.045,map:ht,vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1}));Y.visible=!1,l.giro.add(Y);let N=0;function H(_){N+=_*.18;for(let w=0;w<2;w++)for(let I=0;I<$t;I++){let F=(I/$t+N)%1,D=w?1-F:F,st=l.anim.cabos[w].getPointAt(D,$),yt=(w*$t+I)*3;_t[yt]=st.x,_t[yt+1]=st.y,_t[yt+2]=st.z;let Pt=w?[1,.85,.35]:[1,.35,.25];R[yt]=Pt[0],R[yt+1]=Pt[1],R[yt+2]=Pt[2]}rt.attributes.position.needsUpdate=!0,rt.attributes.color.needsUpdate=!0}let z=110,at=l.anim.agua.length,G=new Se,y=new Float32Array(z*at*3),x=new Float32Array(z*at*3);G.setAttribute("position",new Re(y,3)),G.setAttribute("color",new Re(x,3));let P=new bs(G,new Fi({size:.05,map:ht,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}));P.visible=!1,P.renderOrder=8,s.add(P);let X=new Yt(3116287),B=new Yt(16730666),W=0;function ut(_){W+=_*.05;for(let w=0;w<at;w++)for(let I=0;I<z;I++){let F=(I/z+W+w*.13)%1,D=l.anim.agua[w].getPointAt(F,$),st=(w*z+I)*3;y[st]=D.x,y[st+1]=D.y,y[st+2]=D.z,b.copy(X).lerp(B,ei((F-.3)/.4,0,1)),x[st]=b.r,x[st+1]=b.g,x[st+2]=b.b}G.attributes.position.needsUpdate=!0,G.attributes.color.needsUpdate=!0}let ot=new en;ot.visible=!1,s.add(ot);let mt=(_,w,I)=>{let F=document.createElement("canvas");F.width=256,F.height=96;let D=F.getContext("2d");D.fillStyle="rgba(10,22,32,.82)",D.beginPath(),D.roundRect(4,14,248,68,34),D.fill(),D.fillStyle="#"+new Yt(I).getHexString(),D.font="700 38px Inter, system-ui, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText(_,128,49);let st=new xo(new or({map:new Es(F),depthTest:!1,transparent:!0,toneMapped:!1}));st.scale.set(.42,.158,1),st.position.copy(w),st.renderOrder=11,ot.add(st)},Rt=(_,w,I,F,D)=>{let st=w.clone().normalize(),yt=new rn({color:F,toneMapped:!1,depthTest:!1,transparent:!0}),Pt=Math.min(.16,I*.32),Lt=new Me(new he(.018,.018,I-Pt,12),yt),qt=new Me(new Ts(.055,Pt,16),yt);Lt.position.y=(I-Pt)/2,qt.position.y=I-Pt/2;let Zt=new en;return Zt.add(Lt,qt),Zt.position.copy(_),Zt.quaternion.setFromUnitVectors(new A(0,1,0),st),Lt.renderOrder=qt.renderOrder=10,ot.add(Zt),D&&mt(D,_.clone().add(st.clone().multiplyScalar(st.y<0?-.12:-.14)),F),Zt};Rt(new A(-.25,1.25,0),new A(0,-1,0),.62,16757575,"peso"),Rt(new A(.25,1.1,0),new A(0,-1,0),.45,12950527,"magn\xE9tica"),Rt(new A(se(ue.mLA),-1,0),new A(0,1,0),.62,7329999,"rea\xE7\xE3o A"),Rt(new A(se(ue.mLOA),-1,0),new A(0,1,0),.6,7329999,"rea\xE7\xE3o B");{let _=[];for(let F=0;F<=40;F++){let D=-.3+F/40*Math.PI*1.4;_.push(new A(se(ue.L)+.14,.5*Math.cos(D),.5*Math.sin(D)))}let w=new Me(new In(new on(_),40,.02,8),new rn({color:16765286,toneMapped:!1,depthTest:!1,transparent:!0}));w.renderOrder=10,ot.add(w),mt("torque",_[20].clone().add(new A(0,.16,0)),16765286);let I=new Me(new Ts(.06,.14,12),w.material);I.renderOrder=10,I.position.copy(_[40]),I.lookAt(_[40].clone().add(_[40].clone().sub(_[38]))),I.rotateX(Math.PI/2),ot.add(I)}let it={estator:["N\xFAcleo do estator","Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre os pacotes, por onde o ar sai quente.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],enrolamento:["Enrolamento da armadura","Bobinas de dupla camada nas ranhuras, ligadas em tr\xEAs fases. As cabe\xE7as ficam fora do n\xFAcleo, amarradas em an\xE9is.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],terminais:["Sa\xEDdas e caixa de liga\xE7\xE3o","Os tr\xEAs cabos das fases saem das cabe\xE7as de bobina e chegam aos isoladores da caixa de liga\xE7\xE3o, na lateral.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],rotor:["Rotor de polos salientes","Coroa laminada com os polos e as sapatas. A sapata tem o arco exc\xEAntrico que deixa o entreferro maior nas pontas e a tens\xE3o mais senoidal.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],campo:["Bobinas de campo","Cobre de chapa em volta do corpo de cada polo, em corrente cont\xEDnua; ligadas em s\xE9rie, com a polaridade alternando de polo para polo.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],amortecedor:["Gaiola amortecedora","Barras na sapata ligadas por an\xE9is nas pontas: amortecem oscila\xE7\xF5es e ajudam na partida e nos transit\xF3rios.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],excitatriz:["Excitatriz sem escovas","\xDAltima pe\xE7a do rotor na ponta oposta, \xE0 mostra: estator de campo fixo, preso no escudo por quatro bra\xE7os, e armadura girante, que gera a corrente alternada da excita\xE7\xE3o.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],diodos:["Ponte de diodos girante","Recebe as tr\xEAs fases da armadura da excitatriz, retifica e entrega corrente cont\xEDnua ao campo pelos dois cabos, + e \u2212; o varistor protege os diodos.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],cabos:["Cabos do campo","Dois cabos de corrente cont\xEDnua, + e \u2212, saem lado a lado da ponte de diodos, entram pelo furo central na ponta do eixo, correm por dentro dele e sobem por um furo radial no pacote at\xE9 o come\xE7o e o fim da s\xE9rie de bobinas.","01-maquinas-sincronas.html","01 \xB7 M\xE1quinas s\xEDncronas"],eixo:["Eixo do rotor","Perfil escalonado: assentos do pacote e da excitatriz, colos dos mancais e ponta acoplada.","04-eixos.html","04 \xB7 Eixos"],acoplamento:["Ponta de eixo e chaveta","Ponta LA com a chaveta no rasgo: \xE9 por ela que o acoplamento da m\xE1quina acionadora transmite o torque.","02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],mancalLA:["Mancal LA","Mancal de deslizamento com flange no meio da caixa, preso no escudo: metade de dentro entra na m\xE1quina, metade de fora com domo e c\xE1rter aletados. Dentro, casquilho de assento esf\xE9rico com metal patente, anel de \xF3leo solto, veda\xE7\xF5es de labirinto, visor de n\xEDvel e sensor de temperatura.","02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],mancalLOA:["Mancal LOA","Igual ao LA, isolado da funda\xE7\xE3o para cortar a corrente de eixo; fica entre o ventilador LOA e a excitatriz.","02-mecanica.html","02 \xB7 Ponta de eixo e mancal"],ventLA:["Ventilador LA","Radial, no eixo logo depois das cabe\xE7as de bobina, dentro do anel guia do defletor: puxa o ar frio da c\xE2mara de entrada e o empurra pelas cabe\xE7as, pelo entreferro e pelo rotor.","03-termica.html","03 \xB7 T\xE9rmica"],ventLOA:["Ventilador LOA","Igual ao LA, na ponta oposta; os dois juntos d\xE3o a vaz\xE3o do circuito de ar.","03-termica.html","03 \xB7 T\xE9rmica"],trocador:["Trocador ar\u2013\xE1gua","Uma unidade sobre a carca\xE7a, com tubos aletados transversais ao eixo: o ar quente sobe, atravessa o feixe e volta frio pelas pontas.","03-termica.html","03 \xB7 T\xE9rmica"],agua:["\xC1gua de resfriamento","Entra fria pelo bocal de baixo, na ponta LOA, passa pelas fileiras de baixo, volta na caixa de retorno e sai quente pelas de cima e pelo bocal de cima, na ponta LA.","03-termica.html","03 \xB7 T\xE9rmica"],defletor:["Defletor","Anel guia em volta das pontas das p\xE1s, com bocal de entrada, e a chapa que sobe at\xE9 a carca\xE7a: separa a c\xE2mara de entrada do ar frio, junto da tampa, da c\xE2mara das cabe\xE7as de bobina.","03-termica.html","03 \xB7 T\xE9rmica"],carcaca:["Carca\xE7a","Estrutura soldada que segura o n\xFAcleo pelos an\xE9is de apoio, leva o torque de rea\xE7\xE3o para a funda\xE7\xE3o e fecha o circuito de ar.",null,null],base:["Funda\xE7\xE3o","Bloco de concreto com chapas de assentamento niveladas sob os p\xE9s da carca\xE7a.",null,null]},ft=new Vo(r,Ns);ft.enableDamping=!t,ft.dampingFactor=.08,ft.minDistance=.6,ft.maxDistance=22,ft.maxPolarAngle=Math.PI*.58,ft.screenSpacePanning=!0;let At=wu(r,ft),xt=Au(At,{reduce:t}),St=(_=40,w=16,I=10)=>({alvo:new A(-.1,.28,0),dist:I*Math.max(1,1.45/Math.max(.4,r.aspect)),az:_,el:w});At.aplicar(St());let Gt=_=>bu(_,0),Ht={mecanica:[{id:"geral",t:"O gerador montado",txt:()=>`Carca\xE7a soldada sobre chapas de assentamento, com o trocador ar\u2013\xE1gua em cima, um mancal de deslizamento de flange em cada escudo e a excitatriz \xE0 mostra na ponta LOA. ${u.poles} polos a ${Gt(u.rpm)} rpm.`,estado:{},tomadas:()=>[{dur:3,para:St(28,17)},{dur:10,para:St(52,13)}]},{id:"eixo",t:"Eixo e ponta de eixo",txt:()=>"O eixo leva o pacote do rotor nos assentos centrais, os ventiladores junto dos defletores e a excitatriz na ponta, e passa pelos colos dos mancais. Na ponta LA, a chaveta no rasgo transmite o torque da m\xE1quina acionadora.",estado:{corte:!0,giro:.03,foco:["eixo","acoplamento","rotor","ventLA","ventLOA","defletor","excitatriz","diodos","mancalLA","mancalLOA","cabos"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(2.4,0,0),dist:1.9,az:58,el:16}},{dur:6.5,para:{alvo:new A(0,0,0),dist:6.2,az:92,el:10}}]},{id:"mancais",t:"Mancais de deslizamento",txt:()=>"Em cada escudo, o mancal de flange central, com a caixa aletada resfriada pelo ar ambiente, recebe o colo do eixo, que gira dentro do casquilho de metal patente sobre uma cunha de \xF3leo. O anel solto no rasgo do casquilho, pendurado no colo, mergulha no \xF3leo do c\xE1rter e o leva para cima; o visor mostra o n\xEDvel e o sensor mede a temperatura do metal. O mancal LOA \xE9 isolado contra corrente de eixo.",estado:{corte:!0,giro:.06,foco:["mancalLA","mancalLOA","eixo","acoplamento"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(se(ue.mLOA)-.05,-.05,0),dist:2.1,az:128,el:18}},{dur:5,para:{alvo:new A(se(ue.mLA)+.05,-.05,0),dist:2.1,az:48,el:20}}]},{id:"ar",t:"Ventila\xE7\xE3o IC81W",txt:()=>"O ar n\xE3o sai da m\xE1quina: volta frio do trocador pelas pontas, entra na c\xE2mara entre a tampa e o defletor, passa pelo bocal e \xE9 soprado pelos ventiladores nas cabe\xE7as de bobina, no entreferro e no rotor; sai quente pelos dutos do n\xFAcleo e sobe ao trocador.",estado:{corte:!0,ar:!0,giro:.12,foco:["estator","rotor","campo","ventLA","ventLOA","defletor","trocador","carcaca","enrolamento","eixo"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(0,.7,0),dist:4.6,az:90,el:7}},{dur:7,para:{alvo:new A(.1,.3,0),dist:6.4,az:80,el:12}}]},{id:"troc",t:"Trocador ar\u2013\xE1gua",txt:()=>"Uma unidade sobre a carca\xE7a: tubos de cobre aletados entre dois espelhos, em duas passagens. A \xE1gua entra fria pelo bocal de baixo, na ponta LOA da caixa de entrada, atravessa as fileiras de baixo, faz a volta na caixa de retorno, do outro lado, e sai quente pelas fileiras de cima e pelo bocal de cima, na ponta LA, que tamb\xE9m purga o ar. As chicanas obrigam o ar quente a passar pelo feixe, e a bandeja embaixo recolhe qualquer vazamento.",estado:{corte:!0,ar:!0,agua:!0,foco:["trocador","agua","carcaca"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(0,1.45,-.3),dist:5.4,az:72,el:26}},{dur:5,para:{alvo:new A(.35,1.05,-.5),dist:5.4,az:58,el:24}}]},{id:"cargas",t:"Cargas no eixo e nos mancais",txt:()=>"O peso do rotor e a atra\xE7\xE3o magn\xE9tica desequilibrada fletem o eixo entre os mancais, e os escudos reagem nos dois mancais. O torque nominal entra pela ponta de eixo e pela chaveta.",estado:{cargas:!0,giro:.04,foco:["eixo","rotor","acoplamento","mancalLA","mancalLOA","campo","base"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(0,0,0),dist:6.6,az:90,el:10}},{dur:6,para:{alvo:new A(.5,.05,0),dist:8.2,az:62,el:12}}]}],eletrica:[{id:"maq",t:"Gerador s\xEDncrono",txt:()=>`${u.ger?"Gerador":"Motor"} de ${Gt(u.voltage)} V e ${Gt(u.frequency)} Hz, com ${u.poles} polos: ${Gt(u.rpm)} rpm. Rotor de polos salientes, excita\xE7\xE3o sem escovas e refrigera\xE7\xE3o em circuito fechado com trocador ar\u2013\xE1gua (IC81W).`,estado:{},tomadas:()=>[{dur:3,para:St(28,17)},{dur:10,para:St(52,13)}]},{id:"nucleo",t:"N\xFAcleo do estator",txt:()=>"Pacotes de chapas de a\xE7o-sil\xEDcio com ranhuras na face interna e dutos radiais entre eles. As chapas finas e isoladas cortam as correntes parasitas; o n\xFAcleo \xE9 preso na carca\xE7a pelas barras de dorso.",estado:{corte:!0,foco:["estator","enrolamento","carcaca"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(0,.55,0),dist:3.4,az:88,el:14}},{dur:6,para:{alvo:new A(.2,.55,0),dist:2.7,az:100,el:24}}]},{id:"enr",t:"Enrolamento trif\xE1sico",txt:()=>`Bobinas de dupla camada, com passo encurtado, formam as fases U, V e W. A tens\xE3o de ${Gt(u.voltage)} V nasce nos lados de bobina dentro das ranhuras; as cabe\xE7as s\xF3 ligam um lado ao outro. As sa\xEDdas v\xE3o \xE0 caixa de liga\xE7\xE3o.`,estado:{corte:!0,fases:!0,foco:["enrolamento","terminais","estator"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(1,.45,-.1),dist:2.6,az:40,el:16}},{dur:5,para:{alvo:new A(1.25,.15,-.1),dist:3.4,az:28,el:24}}]},{id:"rotor",t:"Rotor de polos salientes",txt:()=>`${u.poles} polos com bobinas de campo em corrente cont\xEDnua, alternando norte e sul. As barras de lat\xE3o na sapata e os an\xE9is das pontas formam a gaiola amortecedora.`,estado:{corte:!0,ns:!0,giro:.05,foco:["rotor","campo","amortecedor","eixo"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(0,0,0),dist:3,az:115,el:24}},{dur:6,para:{alvo:new A(.2,.05,0),dist:3,az:58,el:26}}]},{id:"exc",t:"Excitatriz e ponte de diodos",txt:()=>"Na ponta LOA, depois do mancal, a excitatriz gera corrente alternada trif\xE1sica na armadura que gira com o eixo; as tr\xEAs fases v\xE3o \xE0 ponte de diodos girante, que retifica, e os dois cabos (+ e \u2212) levam a corrente cont\xEDnua por dentro do furo central do eixo at\xE9 as bobinas de campo, sem escovas nem an\xE9is.",estado:{corte:!0,corrente:!0,giro:.04,foco:["excitatriz","diodos","cabos","eixo","campo","mancalLOA"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(-2.35,.05,0),dist:1.9,az:118,el:20}},{dur:6,para:{alvo:new A(-1.5,.15,0),dist:2.9,az:96,el:24}}]},{id:"girante",t:"Campo girante e tens\xE3o",txt:()=>`Com o rotor a ${Gt(u.rpm)} rpm, o campo dos polos passa pelas ranhuras e induz a tens\xE3o nas fases: f = P\xB7n/120 = ${u.poles} \xD7 ${Gt(u.rpm)} / 120 = ${Gt(u.frequency)} Hz. As setas mostram o fluxo no entreferro, para fora no norte e para dentro no sul.`,estado:{corte:!0,ns:!0,fases:!0,fluxo:!0,giro:.22,foco:["rotor","campo","estator","eixo"]},tomadas:()=>[{dur:3.4,para:{alvo:new A(0,.1,0),dist:3.4,az:120,el:16}},{dur:8,para:{alvo:new A(.3,0,-.2),dist:3.4,az:18,el:14}}]}]},Dt={trilha:"mecanica",cap:0,tocando:!1,giro:.02,girarLivre:!0},V=He("m3-card"),bt=He("m3-caps"),J=He("m3-tip"),et={play:He("m3-play"),corte:He("m3-corte"),giro:He("m3-giro"),full:He("m3-full"),prev:He("m3-prev"),next:He("m3-next")};function wt(_){m(!!_.corte),M(!!_.fases),k(!!_.ns),E(_.foco||null),O.visible=!!_.fluxo,tt.visible=!!_.ar,P.visible=!!_.agua,Y.visible=!!_.corrente,ot.visible=!!_.cargas,Dt.giro=_.giro??.02}function Et(){let _=Ht[Dt.trilha];bt.innerHTML=_.map((w,I)=>`<button type="button" role="tab" data-i="${I}" aria-selected="${I===Dt.cap}"><span>${String(I+1).padStart(2,"0")}</span>${Mr(w.t)}</button>`).join(""),document.querySelectorAll("[data-trilha]").forEach(w=>w.setAttribute("aria-pressed",String(w.dataset.trilha===Dt.trilha)))}function Bt(_,{tocar:w=!0}={}){let I=Ht[Dt.trilha];Dt.cap=ei(_,0,I.length-1);let F=I[Dt.cap];He("m3-count").textContent=`${String(Dt.cap+1).padStart(2,"0")} / ${String(I.length).padStart(2,"0")}`,He("m3-step-title").textContent=F.t,He("m3-step-text").textContent=F.txt(),He("m3-trilha-rot").textContent=Dt.trilha==="eletrica"?"El\xE9trica":"Mec\xE2nica",wt(F.estado),Et(),re(),w&&xt.tocar(F.tomadas(),()=>{Dt.tocando&&(Dt.cap<I.length-1?setTimeout(()=>Dt.tocando&&Bt(Dt.cap+1),t?2500:900):Mt())})}function Mt(){Dt.tocando=!1,et.play.setAttribute("aria-pressed","false"),et.play.querySelector("span").textContent="Tour guiado"}function Vt(){Dt.tocando=!0,et.play.setAttribute("aria-pressed","true"),et.play.querySelector("span").textContent="Pausar tour",Bt(Dt.cap)}et.play.addEventListener("click",()=>{Dt.tocando?(Mt(),xt.parar()):Vt()}),et.prev.addEventListener("click",()=>Bt(Dt.cap-1)),et.next.addEventListener("click",()=>Bt(Dt.cap+1)),bt.addEventListener("click",_=>{let w=_.target.closest("[data-i]");w&&Bt(+w.dataset.i)}),document.querySelectorAll("[data-trilha]").forEach(_=>_.addEventListener("click",()=>{Dt.trilha!==_.dataset.trilha&&(Dt.trilha=_.dataset.trilha,Dt.cap=0,Bt(0))})),et.corte.addEventListener("click",()=>m(!g)),et.giro.addEventListener("click",()=>{Dt.girarLivre=!Dt.girarLivre,et.giro.setAttribute("aria-pressed",String(Dt.girarLivre))});let Kt=He("tour-3d"),be=()=>document.fullscreenElement||document.webkitFullscreenElement,de=_=>{et.full?.setAttribute("aria-pressed",String(_)),et.full?.setAttribute("aria-label",_?"Sair da tela cheia":"Tela cheia")};function me(_){Kt.classList.toggle("m3-cheia",_),document.documentElement.classList.toggle("m3-travado",_),de(_),requestAnimationFrame(Si)}et.full?.addEventListener("click",()=>{if(Kt.classList.contains("m3-cheia"))return me(!1);if(be()){(document.exitFullscreen||document.webkitExitFullscreen).call(document);return}let _=Kt.requestFullscreen||Kt.webkitRequestFullscreen,w=matchMedia("(pointer: coarse)").matches;if(_&&!w)try{let I=_.call(Kt);I&&I.catch&&I.catch(()=>me(!0))}catch{me(!0)}else me(!0)});for(let _ of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(_,()=>{de(!!be()),requestAnimationFrame(Si)});document.addEventListener("keydown",_=>{_.key==="Escape"&&Kt.classList.contains("m3-cheia")&&me(!1)}),ft.addEventListener("start",()=>{xt.ativo&&(xt.parar(),Mt())});let fe=new Do,ae=new ct,Ct=null;Ns.addEventListener("pointerdown",_=>{Ct=[_.clientX,_.clientY]}),Ns.addEventListener("pointerup",_=>{if(!Ct||Math.hypot(_.clientX-Ct[0],_.clientY-Ct[1])>5)return;Ct=null;let w=Ns.getBoundingClientRect();ae.set((_.clientX-w.left)/w.width*2-1,-(_.clientY-w.top)/w.height*2+1),fe.setFromCamera(ae,r);let I=fe.intersectObjects(p,!1).filter(D=>D.object.material!==v&&(!g||!l.corte.includes(D.object.material)||D.point.z<=.001)),F=I.length?I[0].object.userData.parte||T(I[0].object):null;F&&it[F]?jt(F,_.clientX-w.left,_.clientY-w.top):re()});function jt(_,w,I){let[F,D,st,yt]=it[_];J.innerHTML=`<b>${Mr(F)}</b><p>${Mr(D)}</p>${st?`<a href="${st}">Abrir ${Mr(yt)} \u2192</a>`:""}`,J.hidden=!1;let Pt=J.offsetWidth,Lt=J.offsetHeight,qt=Mi.clientWidth,Zt=Mi.clientHeight;J.style.left=ei(w+14,8,qt-Pt-8)+"px",J.style.top=ei(I+14,8,Zt-Lt-8)+"px"}function re(){J.hidden=!0}let Ce=new Io,we=0,ln=!0;new IntersectionObserver(_=>{ln=_[0].isIntersecting}).observe(Mi);let tn=null;if(!e)try{tn=D_(n,s,r)}catch(_){console.warn(_),tn=null}function Si(){let _=Mi.clientWidth,w=Mi.clientHeight;if(!(!_||!w)&&(n.setSize(_,w,!1),r.aspect=_/w,_>720?r.setViewOffset(_,w,-_*.14,-w*.02,_,w):r.clearViewOffset(),r.updateProjectionMatrix(),tn)){let I=n.getPixelRatio(),F=Math.round(_*I),D=Math.round(w*I),st=I>1.2?.5:1;tn.rt.setSize(F,D),tn.ao.setSize(Math.round(F*st),Math.round(D*st))}}function Sr(){if(!tn){n.render(s,r);return}n.setRenderTarget(tn.rt),n.clear(),n.render(s,r),tn.ao.render(n,null,tn.rt),n.setRenderTarget(null),tn.quad.render(n)}new ResizeObserver(Si).observe(Mi),Si();function br(){requestAnimationFrame(br);let _=Math.min(.05,Ce.getDelta());if(!ln||document.hidden)return;let w=xt.atualizar(_);w&&(He("m3-prog").style.width=(w.k*100).toFixed(1)+"%");let I=(Dt.girarLivre||xt.ativo?Dt.giro:0)*2*Math.PI*(t?.3:1);we+=I*_,l.giro.rotation.x=we;for(let F of l.anim.aneis||[])F.rotation.x+=I*_*.35;O.visible&&j(we),tt.visible&&Ut(_),Y.visible&&H(_),P.visible&&ut(_),ft.update(),Sr()}Bt(0,{tocar:!1}),xt.tocar(Ht.mecanica[0].tomadas()),Mi.classList.add("m3-pronto"),br();let $o=(_,w)=>{Dt.trilha=_,Bt(w,{tocar:!1});let I=Ht[_][w].tomadas();xt.parar(),At.aplicar(I[I.length-1].para),ft.update()};window.__m3={scene:s,camera:r,controls:ft,Q:l,mostrarCap:Bt,ui:Dt,setCorte:m,rEixo:Mu,irPara:$o,renderer:n,pos:()=>!!tn,desenhar:Sr}}function I_(i){let t=new sr,e=30,n=new ws(e,64,32),s=n.attributes.position,r=[],o=new Yt,a=new Yt(.16,.17,.18),c=new Yt(.5,.53,.56),h=new Yt(.78,.8,.83);for(let f=0;f<s.count;f++){let g=s.getY(f)/e;g<0?o.copy(c).lerp(a,Math.min(1,-g*2.2)):o.copy(c).lerp(h,Math.min(1,g*1.4)),r.push(o.r,o.g,o.b)}n.setAttribute("color",new ie(r,3)),t.add(new Me(n,new rn({vertexColors:!0,side:Xe})));let l=(f,g,v,m,p,T,E=16777215)=>{let M=new Me(new xi(f,g),new rn({color:new Yt(E).multiplyScalar(T),side:xn}));M.position.set(v,m,p),M.lookAt(0,0,0),t.add(M)};l(16,9,3,19,7,5),l(5,16,-19,6,7,2.4),l(5,16,17,6,-8,1.8,14871551),l(22,3.5,0,5,-21,1.4),l(12,3,5,1.5,21,.9);let u=new Ss(i),d=u.fromScene(t,.03).texture;return u.dispose(),d}function D_(i,t,e){let n=i.getContext(),s=!!i.extensions.get("EXT_color_buffer_float")||!!n.getExtension("EXT_color_buffer_float"),r=new sn(4,4,{type:s?Hn:mn,samples:4,depthTexture:new vi(4,4)}),o=new Ls(t,e,4,4);o.setGBuffer(r.depthTexture),o.updateGtaoMaterial({radius:.3,distanceExponent:1.6,thickness:1.4,scale:1.15,samples:16,distanceFallOff:1}),o.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),o.output=Ls.OUTPUT.Off;let a=new Ds(new Oe({uniforms:{tCor:{value:r.texture},tAO:{value:o.pdRenderTarget.texture},forca:{value:.95}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`uniform sampler2D tCor; uniform sampler2D tAO; uniform float forca; varying vec2 vUv;
      void main() { vec4 c = texture2D(tCor, vUv); float a = texture2D(tAO, vUv).r; c.rgb *= mix(1., a, forca); gl_FragColor = c;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1,blending:Ne}));return{rt:r,ao:o,quad:a}}
