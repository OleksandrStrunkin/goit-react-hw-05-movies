"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{547:function(e,t,n){n.d(t,{IQ:function(){return f},Jh:function(){return v},V0:function(){return g},WL:function(){return l},aV:function(){return u}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="0a221be11a4630df713925aec9466cbd",o=c.Z.create({baseURL:"https://api.themoviedb.org/3"});function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/trending/all/week?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},889:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(547),o=n(87),u=n(689),p=n(791),l="MovieItemPage_movieBox__0KQp7",d="MovieItemPage_poster__LlJ77",f="MovieItemPage_title__7OZLm",m="MovieItemPage_discription__Fagws",v="MovieItemPage_info__ED14C",h="MovieItemPage_text__pPXDn",g="MovieItemPage_gen__d6qYv",_="MovieItemPage_boxBtn__WBx8T",x="MovieItemPage_button__F-nJe",w=n(795),j=n(643),k=n(184);function b(){var e=(0,p.useState)({}),t=(0,a.Z)(e,2),n=t[0],s=t[1],b=(0,p.useState)(!1),y=(0,a.Z)(b,2),N=y[0],S=y[1],U=(0,p.useState)(null),Z=(0,a.Z)(U,2),I=Z[0],P=Z[1],M=(0,u.UO)(),C=(0,u.s0)(),F=(0,u.TH)().state.from;(0,p.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,(0,i.WL)(M.id);case 4:t=e.sent,s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),P(e.t0);case 11:return e.prev=11,S(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[M.id]);var L=n.release_date;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("button",{onClick:function(){C(F)},className:x,children:"Go back"}),(0,k.jsxs)("div",{className:l,children:[n.poster_path?(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path)||0,alt:n.original_title||n.name,width:400,className:d}):(0,k.jsx)("img",{src:w,alt:n.original_title||n.name,width:400,className:d}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h2",{className:f,children:[n.original_title||n.name,L?"(".concat(L.slice(0,4),")"):""]}),(0,k.jsxs)("p",{children:["User Score:"," ",n.vote_average?(10*n.vote_average).toFixed(0):"","%"]}),(0,k.jsx)("h3",{className:m,children:"Overview"}),(0,k.jsx)("p",{className:h,children:n.overview}),(0,k.jsx)("h3",{className:m,children:"Genres"}),(0,k.jsx)("p",{className:h,children:n.genres&&n.genres.map((function(e){return(0,k.jsx)("span",{className:g,children:e.name},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))})]})]}),N&&(0,k.jsx)(j.Bb,{}),I&&(0,k.jsxs)("p",{children:["Fail ....",I.message]}),(0,k.jsx)("p",{className:v,children:"Additional information"}),(0,k.jsxs)(p.Suspense,{children:[(0,k.jsxs)("div",{className:_,children:[(0,k.jsx)(o.rU,{state:{from:F},to:"/movies/".concat(n.id,"/cast"),className:x,children:"Cast"}),(0,k.jsx)(o.rU,{state:{from:F},to:"/movies/".concat(n.id,"/reviews"),className:x,children:"Reviews"})]}),(0,k.jsx)(u.j3,{})]})]})}},795:function(e,t,n){e.exports=n.p+"static/media/notFound.02c7bc1de76c7c188efa.jpg"}}]);
//# sourceMappingURL=889.6f59df23.chunk.js.map