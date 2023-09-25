(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const $t=`\r
<div class="p-6 text-slate-200 columns-2">\r
    <div>\r
        <h1 class="text-xl">Home</h1>\r
        <h3 class="text-sm">Welcome Rosy</h3>\r
    </div>\r
    <div class="text-right">\r
        <div class="flex items-end justify-end">\r
\r
            <img src="./images/weather.png" width="30"/>\r
            <span class="mt-2 ml-2">21º C</span>\r
        </div>\r
        <p class="text-slate-500 text-sm">Today's weather</p>\r
    </div>\r
</div>\r
<div class="p-6 text-slate-200">\r
    <div class="text-center mb-3">\r
        <p>Enery consumption today</p>\r
    </div>\r
    <div class="flex justify-center">\r
        <svg id="gauge"  xmlns="http://www.w3.org/2000/svg"></svg>\r
    </div>\r
</div>`,X=Math.cos,J=Math.sin,Q=Math.PI,ht=([[l,i],[a,o]],[s,n])=>[l*s+i*n,a*s+o*n],Bt=l=>[[X(l),-J(l)],[J(l),X(l)]],ct=([l,i],[a,o])=>[l+a,i+o],ut=([l,i],[a,o],[s,n],h)=>{n=n%(2*Q);const g=Bt(h),[p,f]=ct(ht(g,[a*X(s),o*J(s)]),[l,i]),[b,w]=ct(ht(g,[a*X(s+n),o*J(s+n)]),[l,i]),_=n>Q?1:0,A=n>0?1:0;return{dValues:[" M ",p," ",f," A ",a,o,h/Q*180,_,A,b,w],sX:p,sY:f,rx:a,ry:o,fA:_,fS:A,eX:b,eY:w}};function dt(l,i){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(l,s).enumerable})),a.push.apply(a,o)}return a}function T(l){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?dt(Object(a),!0).forEach(function(o){zt(l,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach(function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(a,o))})}return l}function rt(l,i){if(!(l instanceof i))throw new TypeError("Cannot call a class as a function")}function gt(l,i){for(var a=0;a<i.length;a++){var o=i[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function nt(l,i,a){return i&&gt(l.prototype,i),a&&gt(l,a),Object.defineProperty(l,"prototype",{writable:!1}),l}function zt(l,i,a){return i in l?Object.defineProperty(l,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[i]=a,l}function q(l){return jt(l)||Vt(l)||qt(l)||Dt()}function jt(l){if(Array.isArray(l))return tt(l)}function Vt(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function qt(l,i){if(l){if(typeof l=="string")return tt(l,i);var a=Object.prototype.toString.call(l).slice(8,-1);if(a==="Object"&&l.constructor&&(a=l.constructor.name),a==="Map"||a==="Set")return Array.from(l);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return tt(l,i)}}function tt(l,i){(i==null||i>l.length)&&(i=l.length);for(var a=0,o=new Array(i);a<i;a++)o[a]=l[a];return o}function Dt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var z=nt(function l(i){var a=i.x,o=i.y,s=i.progress,n=i.segment;rt(this,l),this.x=a,this.y=o,this.progress=s,this.segment=n});function Ut(l,i){return i={exports:{}},l(i,i.exports),i.exports}var D=Ut(function(l){(function(i){var a=/^\s+/,o=/\s+$/,s=0,n=i.round,h=i.min,g=i.max,p=i.random;function f(t,r){if(t=t||"",r=r||{},t instanceof f)return t;if(!(this instanceof f))return new f(t,r);var e=b(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=n(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=n(this._r)),this._g<1&&(this._g=n(this._g)),this._b<1&&(this._b=n(this._b)),this._ok=e.ok,this._tc_id=s++}f.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),r,e,c,d,u,v;return r=t.r/255,e=t.g/255,c=t.b/255,r<=.03928?d=r/12.92:d=i.pow((r+.055)/1.055,2.4),e<=.03928?u=e/12.92:u=i.pow((e+.055)/1.055,2.4),c<=.03928?v=c/12.92:v=i.pow((c+.055)/1.055,2.4),.2126*d+.7152*u+.0722*v},setAlpha:function(t){return this._a=ot(t),this._roundA=n(100*this._a)/100,this},toHsv:function(){var t=R(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=R(this._r,this._g,this._b),r=n(t.h*360),e=n(t.s*100),c=n(t.v*100);return this._a==1?"hsv("+r+", "+e+"%, "+c+"%)":"hsva("+r+", "+e+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var t=_(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=_(this._r,this._g,this._b),r=n(t.h*360),e=n(t.s*100),c=n(t.l*100);return this._a==1?"hsl("+r+", "+e+"%, "+c+"%)":"hsla("+r+", "+e+"%, "+c+"%, "+this._roundA+")"},toHex:function(t){return C(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return S(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:n(this._r),g:n(this._g),b:n(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+n(this._r)+", "+n(this._g)+", "+n(this._b)+")":"rgba("+n(this._r)+", "+n(this._g)+", "+n(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:n(m(this._r,255)*100)+"%",g:n(m(this._g,255)*100)+"%",b:n(m(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+n(m(this._r,255)*100)+"%, "+n(m(this._g,255)*100)+"%, "+n(m(this._b,255)*100)+"%)":"rgba("+n(m(this._r,255)*100)+"%, "+n(m(this._g,255)*100)+"%, "+n(m(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Tt[C(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var r="#"+F(this._r,this._g,this._b,this._a),e=r,c=this._gradientType?"GradientType = 1, ":"";if(t){var d=f(t);e="#"+F(d._r,d._g,d._b,d._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,c=this._a<1&&this._a>=0,d=!r&&c&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return d?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(e=this.toRgbString()),t==="prgb"&&(e=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(e=this.toHexString()),t==="hex3"&&(e=this.toHexString(!0)),t==="hex4"&&(e=this.toHex8String(!0)),t==="hex8"&&(e=this.toHex8String()),t==="name"&&(e=this.toName()),t==="hsl"&&(e=this.toHslString()),t==="hsv"&&(e=this.toHsvString()),e||this.toHexString())},clone:function(){return f(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(B,arguments)},brighten:function(){return this._applyModification(St,arguments)},darken:function(){return this._applyModification(kt,arguments)},desaturate:function(){return this._applyModification(O,arguments)},saturate:function(){return this._applyModification(H,arguments)},greyscale:function(){return this._applyModification($,arguments)},spin:function(){return this._applyModification(Ct,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(Mt,arguments)},complement:function(){return this._applyCombination(Et,arguments)},monochromatic:function(){return this._applyCombination(Pt,arguments)},splitcomplement:function(){return this._applyCombination(Ot,arguments)},triad:function(){return this._applyCombination(Rt,arguments)},tetrad:function(){return this._applyCombination(Ht,arguments)}},f.fromRatio=function(t,r){if(typeof t=="object"){var e={};for(var c in t)t.hasOwnProperty(c)&&(c==="a"?e[c]=t[c]:e[c]=j(t[c]));t=e}return f(t,r)};function b(t){var r={r:0,g:0,b:0},e=1,c=null,d=null,u=null,v=!1,y=!1;return typeof t=="string"&&(t=Lt(t)),typeof t=="object"&&(G(t.r)&&G(t.g)&&G(t.b)?(r=w(t.r,t.g,t.b),v=!0,y=String(t.r).substr(-1)==="%"?"prgb":"rgb"):G(t.h)&&G(t.s)&&G(t.v)?(c=j(t.s),d=j(t.v),r=k(t.h,c,d),v=!0,y="hsv"):G(t.h)&&G(t.s)&&G(t.l)&&(c=j(t.s),u=j(t.l),r=A(t.h,c,u),v=!0,y="hsl"),t.hasOwnProperty("a")&&(e=t.a)),e=ot(e),{ok:v,format:t.format||y,r:h(255,g(r.r,0)),g:h(255,g(r.g,0)),b:h(255,g(r.b,0)),a:e}}function w(t,r,e){return{r:m(t,255)*255,g:m(r,255)*255,b:m(e,255)*255}}function _(t,r,e){t=m(t,255),r=m(r,255),e=m(e,255);var c=g(t,r,e),d=h(t,r,e),u,v,y=(c+d)/2;if(c==d)u=v=0;else{var x=c-d;switch(v=y>.5?x/(2-c-d):x/(c+d),c){case t:u=(r-e)/x+(r<e?6:0);break;case r:u=(e-t)/x+2;break;case e:u=(t-r)/x+4;break}u/=6}return{h:u,s:v,l:y}}function A(t,r,e){var c,d,u;t=m(t,360),r=m(r,100),e=m(e,100);function v(P,V,L){return L<0&&(L+=1),L>1&&(L-=1),L<1/6?P+(V-P)*6*L:L<1/2?V:L<2/3?P+(V-P)*(2/3-L)*6:P}if(r===0)c=d=u=e;else{var y=e<.5?e*(1+r):e+r-e*r,x=2*e-y;c=v(x,y,t+1/3),d=v(x,y,t),u=v(x,y,t-1/3)}return{r:c*255,g:d*255,b:u*255}}function R(t,r,e){t=m(t,255),r=m(r,255),e=m(e,255);var c=g(t,r,e),d=h(t,r,e),u,v,y=c,x=c-d;if(v=c===0?0:x/c,c==d)u=0;else{switch(c){case t:u=(r-e)/x+(r<e?6:0);break;case r:u=(e-t)/x+2;break;case e:u=(t-r)/x+4;break}u/=6}return{h:u,s:v,v:y}}function k(t,r,e){t=m(t,360)*6,r=m(r,100),e=m(e,100);var c=i.floor(t),d=t-c,u=e*(1-r),v=e*(1-d*r),y=e*(1-(1-d)*r),x=c%6,P=[e,v,u,u,y,e][x],V=[y,e,e,v,u,u][x],L=[u,u,y,e,e,v][x];return{r:P*255,g:V*255,b:L*255}}function C(t,r,e,c){var d=[I(n(t).toString(16)),I(n(r).toString(16)),I(n(e).toString(16))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function S(t,r,e,c,d){var u=[I(n(t).toString(16)),I(n(r).toString(16)),I(n(e).toString(16)),I(lt(c))];return d&&u[0].charAt(0)==u[0].charAt(1)&&u[1].charAt(0)==u[1].charAt(1)&&u[2].charAt(0)==u[2].charAt(1)&&u[3].charAt(0)==u[3].charAt(1)?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0)+u[3].charAt(0):u.join("")}function F(t,r,e,c){var d=[I(lt(c)),I(n(t).toString(16)),I(n(r).toString(16)),I(n(e).toString(16))];return d.join("")}f.equals=function(t,r){return!t||!r?!1:f(t).toRgbString()==f(r).toRgbString()},f.random=function(){return f.fromRatio({r:p(),g:p(),b:p()})};function O(t,r){r=r===0?0:r||10;var e=f(t).toHsl();return e.s-=r/100,e.s=U(e.s),f(e)}function H(t,r){r=r===0?0:r||10;var e=f(t).toHsl();return e.s+=r/100,e.s=U(e.s),f(e)}function $(t){return f(t).desaturate(100)}function B(t,r){r=r===0?0:r||10;var e=f(t).toHsl();return e.l+=r/100,e.l=U(e.l),f(e)}function St(t,r){r=r===0?0:r||10;var e=f(t).toRgb();return e.r=g(0,h(255,e.r-n(255*-(r/100)))),e.g=g(0,h(255,e.g-n(255*-(r/100)))),e.b=g(0,h(255,e.b-n(255*-(r/100)))),f(e)}function kt(t,r){r=r===0?0:r||10;var e=f(t).toHsl();return e.l-=r/100,e.l=U(e.l),f(e)}function Ct(t,r){var e=f(t).toHsl(),c=(e.h+r)%360;return e.h=c<0?360+c:c,f(e)}function Et(t){var r=f(t).toHsl();return r.h=(r.h+180)%360,f(r)}function Rt(t){var r=f(t).toHsl(),e=r.h;return[f(t),f({h:(e+120)%360,s:r.s,l:r.l}),f({h:(e+240)%360,s:r.s,l:r.l})]}function Ht(t){var r=f(t).toHsl(),e=r.h;return[f(t),f({h:(e+90)%360,s:r.s,l:r.l}),f({h:(e+180)%360,s:r.s,l:r.l}),f({h:(e+270)%360,s:r.s,l:r.l})]}function Ot(t){var r=f(t).toHsl(),e=r.h;return[f(t),f({h:(e+72)%360,s:r.s,l:r.l}),f({h:(e+216)%360,s:r.s,l:r.l})]}function Mt(t,r,e){r=r||6,e=e||30;var c=f(t).toHsl(),d=360/e,u=[f(t)];for(c.h=(c.h-(d*r>>1)+720)%360;--r;)c.h=(c.h+d)%360,u.push(f(c));return u}function Pt(t,r){r=r||6;for(var e=f(t).toHsv(),c=e.h,d=e.s,u=e.v,v=[],y=1/r;r--;)v.push(f({h:c,s:d,v:u})),u=(u+y)%1;return v}f.mix=function(t,r,e){e=e===0?0:e||50;var c=f(t).toRgb(),d=f(r).toRgb(),u=e/100,v={r:(d.r-c.r)*u+c.r,g:(d.g-c.g)*u+c.g,b:(d.b-c.b)*u+c.b,a:(d.a-c.a)*u+c.a};return f(v)},f.readability=function(t,r){var e=f(t),c=f(r);return(i.max(e.getLuminance(),c.getLuminance())+.05)/(i.min(e.getLuminance(),c.getLuminance())+.05)},f.isReadable=function(t,r,e){var c=f.readability(t,r),d,u;switch(u=!1,d=Gt(e),d.level+d.size){case"AAsmall":case"AAAlarge":u=c>=4.5;break;case"AAlarge":u=c>=3;break;case"AAAsmall":u=c>=7;break}return u},f.mostReadable=function(t,r,e){var c=null,d=0,u,v,y,x;e=e||{},v=e.includeFallbackColors,y=e.level,x=e.size;for(var P=0;P<r.length;P++)u=f.readability(t,r[P]),u>d&&(d=u,c=f(r[P]));return f.isReadable(t,c,{level:y,size:x})||!v?c:(e.includeFallbackColors=!1,f.mostReadable(t,["#fff","#000"],e))};var Z=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Tt=f.hexNames=Ft(Z);function Ft(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}function ot(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function m(t,r){It(t)&&(t="100%");var e=Nt(t);return t=h(r,g(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),i.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function U(t){return h(1,g(0,t))}function M(t){return parseInt(t,16)}function It(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function Nt(t){return typeof t=="string"&&t.indexOf("%")!=-1}function I(t){return t.length==1?"0"+t:""+t}function j(t){return t<=1&&(t=t*100+"%"),t}function lt(t){return i.round(parseFloat(t)*255).toString(16)}function ft(t){return M(t)/255}var N=function(){var t="[-\\+]?\\d+%?",r="[-\\+]?\\d*\\.\\d+%?",e="(?:"+r+")|(?:"+t+")",c="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",d="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+c),rgba:new RegExp("rgba"+d),hsl:new RegExp("hsl"+c),hsla:new RegExp("hsla"+d),hsv:new RegExp("hsv"+c),hsva:new RegExp("hsva"+d),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function G(t){return!!N.CSS_UNIT.exec(t)}function Lt(t){t=t.replace(a,"").replace(o,"").toLowerCase();var r=!1;if(Z[t])t=Z[t],r=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e;return(e=N.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=N.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=N.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=N.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=N.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=N.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=N.hex8.exec(t))?{r:M(e[1]),g:M(e[2]),b:M(e[3]),a:ft(e[4]),format:r?"name":"hex8"}:(e=N.hex6.exec(t))?{r:M(e[1]),g:M(e[2]),b:M(e[3]),format:r?"name":"hex"}:(e=N.hex4.exec(t))?{r:M(e[1]+""+e[1]),g:M(e[2]+""+e[2]),b:M(e[3]+""+e[3]),a:ft(e[4]+""+e[4]),format:r?"name":"hex8"}:(e=N.hex3.exec(t))?{r:M(e[1]+""+e[1]),g:M(e[2]+""+e[2]),b:M(e[3]+""+e[3]),format:r?"name":"hex"}:!1}function Gt(t){var r,e;return t=t||{level:"AA",size:"small"},r=(t.level||"AA").toUpperCase(),e=(t.size||"small").toLowerCase(),r!=="AA"&&r!=="AAA"&&(r="AA"),e!=="small"&&e!=="large"&&(e="small"),{level:r,size:e}}l.exports?l.exports=f:window.tinycolor=f})(Math)});const yt={r:256,g:256,b:256,a:1},wt={h:360,s:1,v:1,a:1};function it(l,i,a){let o={};for(let s in l)l.hasOwnProperty(s)&&(o[s]=a===0?0:(i[s]-l[s])/a);return o}function st(l,i,a,o){let s={};for(let n in i)i.hasOwnProperty(n)&&(s[n]=l[n]*a+i[n],s[n]=s[n]<0?s[n]+o[n]:o[n]!==1?s[n]%o[n]:s[n]);return s}function et(l,i,a){const o=l.color.toRgb(),s=i.color.toRgb(),n=it(o,s,a);let h=[l.color];for(let g=1;g<a;g++){const p=st(n,o,g,yt);h.push(D(p))}return h}function pt(l,i,a,o){const s=l.color.toHsv(),n=i.color.toHsv();if(s.s===0||n.s===0)return et(l,i,a);let h;if(typeof o=="boolean")h=o;else{const b=s.h<n.h&&n.h-s.h<180||s.h>n.h&&s.h-n.h>180;h=o==="long"&&b||o==="short"&&!b}const g=it(s,n,a);let p=[l.color],f;s.h<=n.h&&!h||s.h>=n.h&&h?f=n.h-s.h:h?f=360-n.h+s.h:f=360-s.h+n.h,g.h=Math.pow(-1,h?1:0)*Math.abs(f)/a;for(let b=1;b<a;b++){const w=st(g,s,b,wt);p.push(D(w))}return p}function bt(l,i){const a=l.length;if(i=parseInt(i,10),isNaN(i)||i<2)throw new Error("Invalid number of steps (< 2)");if(i<a)throw new Error("Number of steps cannot be inferior to number of stops");let o=[];for(let n=1;n<a;n++){const h=(i-1)*(l[n].pos-l[n-1].pos);o.push(Math.max(1,Math.round(h)))}let s=1;for(let n=a-1;n--;)s+=o[n];for(;s!==i;)if(s<i){const n=Math.min.apply(null,o);o[o.indexOf(n)]++,s++}else{const n=Math.max.apply(null,o);o[o.indexOf(n)]--,s--}return o}function vt(l,i,a,o){if(i<0||i>1)throw new Error("Position must be between 0 and 1");let s,n;for(let p=0,f=l.length;p<f-1;p++)if(i>=l[p].pos&&i<l[p+1].pos){s=l[p],n=l[p+1];break}s||(s=n=l[l.length-1]);const h=it(s.color[a](),n.color[a](),(n.pos-s.pos)*100),g=st(h,s.color[a](),(i-s.pos)*100,o);return D(g)}class Y{constructor(i){if(i.length<2)throw new Error("Invalid number of stops (< 2)");const a=i[0].pos!==void 0;let o=i.length,s=-1,n=!1;this.stops=i.map((h,g)=>{const p=h.pos!==void 0;if(a^p)throw new Error("Cannot mix positionned and not posionned color stops");if(p){const f=h.color!==void 0;if(!f&&(n||g===0||g===o-1))throw new Error("Cannot define two consecutive position-only stops");if(n=!f,h={color:f?D(h.color):null,colorLess:!f,pos:h.pos},h.pos<0||h.pos>1)throw new Error("Color stops positions must be between 0 and 1");if(h.pos<s)throw new Error("Color stops positions are not ordered");s=h.pos}else h={color:D(h.color!==void 0?h.color:h),pos:g/(o-1)};return h}),this.stops[0].pos!==0&&(this.stops.unshift({color:this.stops[0].color,pos:0}),o++),this.stops[o-1].pos!==1&&this.stops.push({color:this.stops[o-1].color,pos:1})}reverse(){let i=[];return this.stops.forEach(function(a){i.push({color:a.color,pos:1-a.pos})}),new Y(i.reverse())}loop(){let i=[],a=[];return this.stops.forEach(o=>{i.push({color:o.color,pos:o.pos/2})}),this.stops.slice(0,-1).forEach(o=>{a.push({color:o.color,pos:1-o.pos/2})}),new Y(i.concat(a.reverse()))}rgb(i){const a=bt(this.stops,i);let o=[];this.stops.forEach((s,n)=>{s.colorLess&&(s.color=et(this.stops[n-1],this.stops[n+1],2)[1])});for(let s=0,n=this.stops.length;s<n-1;s++){const h=et(this.stops[s],this.stops[s+1],a[s]);o.splice(o.length,0,...h)}return o.push(this.stops[this.stops.length-1].color),o}hsv(i,a){const o=bt(this.stops,i);let s=[];this.stops.forEach((n,h)=>{n.colorLess&&(n.color=pt(this.stops[h-1],this.stops[h+1],2,a)[1])});for(let n=0,h=this.stops.length;n<h-1;n++){const g=pt(this.stops[n],this.stops[n+1],o[n],a);s.splice(s.length,0,...g)}return s.push(this.stops[this.stops.length-1].color),s}css(i,a){i=i||"linear",a=a||(i==="linear"?"to right":"ellipse at center");let o=i+"-gradient("+a;return this.stops.forEach(function(s){o+=", "+(s.colorLess?"":s.color.toRgbString()+" ")+s.pos*100+"%"}),o+=")",o}rgbAt(i){return vt(this.stops,i,"toRgb",yt)}hsvAt(i){return vt(this.stops,i,"toHsv",wt)}}var Wt=function(l){if(arguments.length===1){if(!Array.isArray(arguments[0]))throw new Error('"stops" is not an array');l=arguments[0]}else l=Array.prototype.slice.call(arguments);return new Y(l)},W=function(i,a){for(var o=document.createElementNS("http://www.w3.org/2000/svg",i),s=Object.keys(a),n=0;n<s.length;n++){var h=s[n];o.setAttribute(h,a[h])}return o},mt=function(i,a,o,s){var n=function(p,f){return typeof p=="string"?p:Wt(p).rgbAt(f)},h={};return a&&(h.stroke=n(a,s),h["stroke-width"]=o),i&&(h.fill=n(i,s)),h},Xt=function(i){for(var a="",o=0;o<i.length;o++){var s=i[o],n=s.x,h=s.y,g=o===0?null:i[o-1];o===0&&o!==i.length-1?a+="M".concat(n,",").concat(h):n!==g.x&&h!==g.y?a+="L".concat(n,",").concat(h):n!==g.x?a+="H".concat(n):h!==g.y&&(a+="V".concat(h)),o===i.length-1&&(a+="Z")}return a},Jt=function(i){var a=q(i).sort(function(o,s){return o.progress-s.progress});return a[a.length/2|0]},_t=function(i){return i instanceof Element||i instanceof HTMLDocument?i:i.node()},xt=nt(function l(i){var a=i.samples;rt(this,l),this.samples=a,this.progress=Jt(a).progress}),At=2,Yt=function(i){var a=i.path,o=i.segments,s=i.samples,n=i.precision,h=n===void 0?At:n;a=_t(a),s>1&&s--;for(var g=a.getTotalLength(),p=o*s,f=[],b=[],w=0;w<=p;w++){var _=w/p,A=a.getPointAtLength(_*g),R=A.x,k=A.y;h&&(R=+R.toFixed(h),k=+k.toFixed(h)),f.push(new z({x:R,y:k,progress:_}))}for(var C=0;C<o;C++){for(var S=C*s,F=S+s,O=[],H=0;H<s;H++)O.push(f[S+H]);O.push(f[F]),b.push(new xt({samples:O}))}return b},Kt=function(i,a,o,s){var n=Zt(i,a,o),h=Qt(n,o,s);return h},Zt=function(i,a,o){for(var s=function(S,F,O,H){var $=new z(T(T({},H),{},{x:Math.sin(S)*F+H.x,y:-Math.cos(S)*F+H.y})),B=new z(T(T({},H),{},{x:-Math.sin(S)*F+H.x,y:Math.cos(S)*F+H.y}));return O&&($.x=+$.x.toFixed(O),$.y=+$.y.toFixed(O),B.x=+B.x.toFixed(O),B.y=+B.y.toFixed(O)),[$,B]},n=a/2,h=[],g=0;g<i.length;g++){for(var p=i[g].samples,f=[],b=0;b<p.length&&p[b+1]!==void 0;b++){var w=p[b],_=p[b+1],A=Math.atan2(_.y-w.y,_.x-w.x),R=s(A,n,o,w),k=s(A,n,o,_);b===0&&f.push.apply(f,q(R)),f.push.apply(f,q(k))}h.push(new xt({samples:[].concat(q(f.filter(function(C,S){return S%2===0})),q(f.filter(function(C,S){return S%2===1}).reverse()))}))}return h},Qt=function(i,a,o){for(var s=function(k,C){return{x:(k.x+C.x)/2,y:(k.y+C.y)/2}},n=function(k,C,S){return T(T({},k[C]),{},{x:S.x,y:S.y})},h=JSON.parse(JSON.stringify(i)),g=0;g<i.length;g++){var p=o||i[g+1]?i[g].samples:h[g].samples,f=o?i[g+1]?i[g+1].samples:i[0].samples:i[g+1]?i[g+1].samples:h[0].samples,b=p.length/2,w=f.length-1,_=s(p[b-1],f[0]),A=s(p[b],f[w]);a&&(_.x=+_.x.toFixed(a),_.y=+_.y.toFixed(a),A.x=+A.x.toFixed(a),A.y=+A.y.toFixed(a)),p[b-1]=new z(T({},n(p,b-1,_))),p[b]=new z(T({},n(p,b,A))),f[0]=new z(T({},n(f,0,_))),f[w]=new z(T({},n(f,w,A)))}return i},te=function(){function l(i){var a=i.path,o=i.segments,s=i.samples,n=i.precision,h=n===void 0?At:n;rt(this,l),this.path=_t(a),this.segments=o,this.samples=s,this.precision=h,this.pathClosed=this.path.nodeName=="path"?this.path.getAttribute("d").match(/z/gi):!0,this.renders=[],this.svg=a.closest("svg"),this.group=W("g",{class:"gradient-path"}),this.data=Yt({path:a,segments:o,samples:s,precision:h}),this.svg.appendChild(this.group),this.path.parentNode.removeChild(this.path)}return nt(l,[{key:"render",value:function(a){var o=a.type,s=a.stroke,n=a.strokeWidth,h=a.fill,g=a.width,p={},f=W("g",{class:"element-".concat(o)});if(this.group.appendChild(f),p.group=f,o==="path"){p.data=g&&h?Kt(this.data,g,this.precision,this.pathClosed):this.data;for(var b=0;b<p.data.length;b++){var w=p.data[b],_=w.samples,A=w.progress;f.appendChild(W("path",T({class:"path-segment",d:Xt(_)},mt(h,s,n,A))))}}else if(o==="circle"){p.data=this.data.flatMap(function(O){var H=O.samples;return H});for(var R=0;R<p.data.length;R++){var k=p.data[R],C=k.x,S=k.y,F=k.progress;f.appendChild(W("circle",T({class:"circle-sample",cx:C,cy:S,r:g/2},mt(h,s,n,F))))}}return this.renders.push(p),this}}]),l}();const K={width:150,height:150,gap:10};function ee(){return`${$t}`}function re(){let l=document.getElementById("gauge");document.getElementById("botao"),l.setAttribute("width",K.width),l.setAttribute("height",K.height),ne()}function ne(){const o=K.width/2,s=K.width/2-5,n=Math.PI;let h=document.createElementNS("http://www.w3.org/2000/svg","path"),g=document.createElementNS("http://www.w3.org/2000/svg","path");const p=ut([o,o],[s,s],[0/180*n,216/180*n],135/180*n),f=p.dValues.join(" ");h.setAttribute("d",f),h.classList.add("arco"),h.setAttribute("id","arco"),g.setAttribute("d",ut([o,o],[s,s],[0/180*n,270/180*n],135/180*n).dValues.join(" ")),g.classList.add("space-gauge");let b=document.getElementById("gauge");b.appendChild(g),se(p.sX,p.sY,p.eX,p.eY),b.appendChild(h),ie()}function ie(){const l=[{color:"#2031f3",pos:0},{color:"#18a4fc",pos:1}];new te({path:document.querySelector("#arco"),segments:30,samples:3,precision:2}).render({type:"path",fill:l,width:10,stroke:l,strokeWidth:.5})}function se(l,i,a,o){let s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx",`${l}`),s.setAttribute("cy",`${i}`),s.setAttribute("r","5.3"),s.setAttribute("fill","#2031f3");let n=document.createElementNS("http://www.w3.org/2000/svg","circle");n.setAttribute("cx",`${a}`),n.setAttribute("cy",`${o}`),n.setAttribute("r","5.3"),n.setAttribute("fill","#18a4fc");let h=document.getElementById("gauge");h.appendChild(s),h.appendChild(n)}const ae=`<div class="text-slate-200">\r
    <div class="container-svg-slider">\r
        <!-- Here and below we're using the same pre-defined path -->\r
        <svg id="svg-slider" width="0" height="0">\r
            <defs>\r
\r
                <!-- <path id="gradient-path" d="M36.5,91.2C-7.5,185.5,99.3,224.4,170,203.1c55-16.6,57.8-87.4,1.6-104C71,69.5,9.4,207.7,46,228.6c62.7,35.8,189.7-116,133-211"/> -->\r
                <path id="gradient-path" d="\r
                    M0 100 L80 100\r
\r
                    M100 80 A 50 50 0 0 1 200 80\r
\r
\r
\r
                    M80 100\r
                    C80, 100\r
                    100 100\r
                    100 80\r
\r
                    M200 80\r
                    C200, 80,\r
                    200 100\r
                    220 100\r
\r
                    M220 100\r
                    500 100\r
                    z\r
                "></path>\r
            </defs>\r
        </svg>\r
\r
        <svg id="svg-background" class="svg-background">\r
            <defs>\r
                <!-- <filter id="blurMe">\r
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" />\r
                  </filter> -->\r
                <linearGradient id="linear-grad">\r
                    <stop offset="0" stop-color="#1e2234"/>\r
                    <stop offset="0.05" stop-color="green"/>\r
                    <stop offset="0.5" stop-color="yellow"/>\r
                    <stop offset="0.95" stop-color="red"/>\r
                    <stop offset="1" stop-color="#1e2234"/>\r
                </linearGradient>\r
                <linearGradient id="linear-grad-full">\r
                    <stop offset="0" stop-color="green"/>\r
                    <stop offset="0.5" stop-color="yellow"/>\r
                    <stop offset="1" stop-color="red"/>\r
                </linearGradient>\r
            </defs>\r
            <use\r
                class="blur-filter"\r
                xlink:href="#gradient-path"\r
                stroke="url(#linear-grad-full)"\r
                fill="none" filter="url(#blurMe)"\r
                stroke-width="8"/>\r
            <use xlink:href="#gradient-path" stroke="url(#linear-grad)" fill="transparent" stroke-width="5"/>\r
        </svg>\r
\r
    </div>\r
    <div class="container-slider">\r
        <div class="slider" id="slider">\r
            <span id="drag-area" class="drag-area"></span>\r
            <div class="content-slider">\r
                <div class="icone-dots">\r
                    <span class="dot"></span>\r
                    <span class="dot"></span>\r
                    <span class="dot"></span>\r
                    <span class="dot"></span>\r
                    <span class="dot"></span>\r
                    <span class="dot"></span>\r
                </div>\r
                <div>\r
                    <span>18º C</span>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;var E=0;const oe=140;function le(){return`${ae}`}function fe(){he(),window.addEventListener("resize",at)}function he(){let l=document.getElementById("slider");at(),ce(),l.style.left=E+"px"}function at(){let l=window.innerWidth,i=document.getElementById("gradient-path"),a=`
        M0 100 L${E+20} 100

        M${E+40} 90 A 20 20 0 0 1 ${E+90} 90

        M${E+20} 100
        C${E+20}, 100
        ${E+40} 100
        ${E+40} 90

        M${E+90} 90
        C${E+90}, 90,
        ${E+90} 100
        ${E+90+20} 100

        M${E+110<l?E+110:l} 100
        ${l} 100
        z
    `;i.setAttribute("d",a)}function ce(){let l=document.getElementById("slider"),i=document.getElementById("drag-area");document.getElementById("debugger"),i.ontouchmove=a=>{a.preventDefault();var o=a.targetTouches[0];let s=o.pageX-65;s>=0&&s<=window.innerWidth-oe-40&&(E=s,l.style.left=s+"px"),at()}}document.querySelector("#app").innerHTML=`${ee()+le()}`;re();fe();