"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[695],{8418:function(n,t,r){r.d(t,{Df:function(){return i},M1:function(){return f},Pt:function(){return o},TP:function(){return p},tx:function(){return d}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),s=new URLSearchParams({api_key:"b0cde6bcd1647f8df32fb28311129fbd",language:"en-US",include_adult:!1});u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/week?".concat(s));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(s,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(s));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4817:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c,u,s,i=r(9439),o=r(2791),p=r(7689),f=r(8418),d=r(184),l=function(){return(0,d.jsx)("p",{children:"Sorry, we don't have any cast on this movie"})},h=r(168),v=r(5706),x=v.Z.ul(e||(e=(0,h.Z)(["\n  margin-top: 32px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: space-between;\n"]))),m=v.Z.li(a||(a=(0,h.Z)(["\n  flex-basis: 150px;\n"]))),w=v.Z.img(c||(c=(0,h.Z)(["\n  margin-bottom: 8px;\n  border-radius: 4px;\n"]))),Z=v.Z.p(u||(u=(0,h.Z)(["\n  margin-bottom: 8px;\n  font-weight: 500;\n"]))),g=v.Z.p(s||(s=(0,h.Z)(["\n  color: var(--accent);\n"]))),b=r.p+"static/media/cast-poster-default.93767025d9f9308b3e93.png",k=function(){var n=(0,o.useState)(null),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,p.UO)().movieId;if((0,o.useEffect)((function(){(0,f.M1)(a).then(e)}),[a]),r)return(0,d.jsxs)(x,{children:[0===r.length&&(0,d.jsx)(l,{}),r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,d.jsxs)(m,{children:[(0,d.jsx)(w,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):b,alt:e}),(0,d.jsxs)("div",{children:[(0,d.jsx)(Z,{children:e}),(0,d.jsx)(g,{children:a})]})]},t)}))]})}}}]);
//# sourceMappingURL=695.c1cb4f74.chunk.js.map