"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{8418:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return p},Pt:function(){return u},TP:function(){return f},tx:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),o=new URLSearchParams({api_key:"b0cde6bcd1647f8df32fb28311129fbd",language:"en-US",include_adult:!1});i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/week?".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?".concat(o,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9765:function(n,t,e){e.r(t);var r=e(9439),a=e(8418),c=e(2791),i=e(4672),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){(0,a.Df)().then(s)}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.O,{movies:e})})}},4672:function(n,t,e){e.d(t,{O:function(){return w}});var r,a,c,i,o,s=e(7689),u=e(8774),f=e(168),p=e(5706),l=e(1087),d=p.Z.ul(r||(r=(0,f.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),h=p.Z.li(a||(a=(0,f.Z)(["\n  flex-basis: calc((100% - 100px) / 5);\n  max-height: 100%;\n  min-height: 390px;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n  transition: transform 0.3s ease;\n  &:hover {\n    color: var(--accent);\n    transform: scale(1.05);\n  }\n"]))),v=(0,p.Z)(l.rU)(c||(c=(0,f.Z)(["\n  object-fit: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n\n  &:hover img {\n    filter: grayscale(0);\n  }\n"]))),m=p.Z.img(i||(i=(0,f.Z)(["\n  margin-bottom: 5px;\n  filter: grayscale(0.4);\n\n  transition: all 200ms ease-in-out;\n"]))),x=p.Z.p(o||(o=(0,f.Z)(["\n  height: 100%;\n  padding: 10px 8px;\n  font-weight: 500;\n  font-size: 18px;\n  transition: all 200ms ease-in-out;\n"]))),g=e(184),w=function(n){var t=n.movies,e=(0,s.TH)();return(0,g.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path;return(0,g.jsx)(h,{children:(0,g.jsxs)(v,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)(m,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):u,alt:r}),(0,g.jsx)(x,{children:r})]})},t)}))})}},8774:function(n,t,e){n.exports=e.p+"static/media/movie-poster-default.47333edf945320b3c1ac.webp"}}]);
//# sourceMappingURL=765.d9927615.chunk.js.map