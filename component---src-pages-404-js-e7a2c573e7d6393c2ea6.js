(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),o=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404 Not found"}),r.a.createElement("h1",null,"PAGE NOT FOUND"),r.a.createElement("p",null,"I couldn't find the page you are looking for... the sadness."))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(142),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(144),s=a.n(d);a.d(t,"PageRenderer",function(){return s.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{author:"Yueying Tang",repository:"https://github.com/DeveloperCatherine/DeveloperCatherine.github.io"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},150:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACG0lEQVQoz5XTW0hUQRgH8DmXOfc5tlq7SpiWSBlIEiXRBsomBNXSQ0qm4trlIbsQRpe30nZFd1vLikq6QPpQWBtIag9KBAX1UES9h/WQ9RaZZNDL9J/deeruwI+P+T7OzHdmziGEkHJYDGUQhCLYACuhGEqkZbIWgBWwjvxhdEE7xGAvtEEGKqFT1uohASNwAjpkLu93C1bLLsWOx+XuCdmRyC2XcRO0QBS2yI0c8r8jtEBR/lZfsihXDrg/FSqKVcfQSSmf9NWxk7YertDsooBSWFmi5nEeIfxjvrK6TLUtgxSsLVcdLLSwPqwbsQg1EE2xxsGtlLomCZQGFSbmh2E9FMBFKIQeqIEj0AD74BRUwSVoglr5rLiDMAxlz725lj5J7TJ74i3mxO46Ojuw37p7ud0af5hwhg5F6YfemPkaHbxoCOtPBzusTGwjnelsMp/17TEnu5rN560ROpdsMx/VrdLeDhywzpO5DDv26oJ7ZWaYpfmEH/90m52bvcPOIt/Px/0EjiL+eZil3lz1+r4gz0f97q8ZloL09xGW5A/8+Ld77My7G156etAT3RLlH/ejk/kMqpGkRclm2AE7XYvUINdtG2Q75o0mJa3Rat3mPKi87He1qWuehm609zdzpq572jTi414nmxdrboM1cBqS8sBvybn4yI8quT+ILA0phN9nvxoV0c9GMXzIl7+U+PJDYIEn81XzeeMfLqaUq2UjUsUAAAAASUVORK5CYII=",width:140,height:84,src:"/static/70a12213ac3e904e58a55aaa14fe48ed/ed83d/full-logo@2x.png",srcSet:"/static/70a12213ac3e904e58a55aaa14fe48ed/ed83d/full-logo@2x.png 1x,\n/static/70a12213ac3e904e58a55aaa14fe48ed/fb309/full-logo@2x.png 1.5x,\n/static/70a12213ac3e904e58a55aaa14fe48ed/80e44/full-logo@2x.png 2x"}}}}}},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(156),d=a.n(c),s=a(143);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var p="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Yueying Catherine Tang",description:"Hi, nice to meet you. I'm Catherine, a UX designer, Product Manager, and Web Developer. Check out my portfolio to know more.",author:"Yueying Tang"}}}}},154:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(143),d=a(145),s=(a(155),a(150)),u=a(146),p=a.n(u),m=d.a.section.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-11vkb92-0"})(["border-bottom:1px solid black;padding:0.54rem 1.0875rem;"]),g=d.a.div.withConfig({displayName:"header__HomeButton",componentId:"sc-11vkb92-1"})(["margin:0.546rem 0 auto;display:inline-block;float:none;height:84px;"]),f=d.a.nav.withConfig({displayName:"header__SiteNav",componentId:"sc-11vkb92-2"})(["margin:0.182rem 0 auto;display:inline-block;float:right;"]),h=d.a.ul.withConfig({displayName:"header__NavList",componentId:"sc-11vkb92-3"})(["list-style:none;margin:0;"]),y=d.a.li.withConfig({displayName:"header__NavButton",componentId:"sc-11vkb92-4"})(["display:block;margin:0.2rem 0 0.2rem 0;text-align:right;font-weight:bold;"]),b=Object(d.a)(c.Link).withConfig({displayName:"header__NavLink",componentId:"sc-11vkb92-5"})([':hover{:before{color:#FEB30E;content:"// ";}font-size:98%;}']),E=function(){return i.a.createElement(m,null,i.a.createElement(g,null,i.a.createElement(c.Link,{to:"/",activeStyle:{fontSize:"0"}},i.a.createElement(c.StaticQuery,{query:"307168625",render:function(e){return i.a.createElement(p.a,{fixed:e.file.childImageSharp.fixed})},data:s}))),i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement(y,null,i.a.createElement(b,{to:"/#about"},"About")),i.a.createElement(y,null,i.a.createElement(b,{to:"/#projects"},"Work")),i.a.createElement(y,null,i.a.createElement(b,{to:"/#contact"},"Contact")))))},x=d.a.section.withConfig({displayName:"layout__PageWrapper",componentId:"sc-1blsxby-0"})(["@media screen and (max-width:960px){padding:0 20px 1.45rem;};padding:0 40px 1.45rem;"]),w=d.a.div.withConfig({displayName:"layout__ContentWrapper",componentId:"sc-1blsxby-1"})(["margin:0 auto;max-width:960px;@media screen and (max-width:960px){padding:0 0 1.45rem;};padding:0 1.0875 1.45rem;"]),v=d.a.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1blsxby-2"})(["border-top:1px solid black;padding-top:0.5rem;text-align:center;"]),A=d.a.div.withConfig({displayName:"layout__Copyright",componentId:"sc-1blsxby-3"})(["color:#333333;"]),k=d.a.a.withConfig({displayName:"layout__TextLink",componentId:"sc-1blsxby-4"})(["color:#FE840E;:hover{color:#FF9D40;}"]),C=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"1643453846",render:function(e){return i.a.createElement(x,null,i.a.createElement(E,null),i.a.createElement(w,null,t),i.a.createElement(v,null,i.a.createElement(A,null,"© ",(new Date).getFullYear()," Design & Code by ",e.site.siteMetadata.author,". ",i.a.createElement(k,{href:e.site.siteMetadata.repository},"Github Repository"),".")))},data:n})};C.propTypes={children:l.a.node.isRequired};t.a=C}}]);
//# sourceMappingURL=component---src-pages-404-js-e7a2c573e7d6393c2ea6.js.map