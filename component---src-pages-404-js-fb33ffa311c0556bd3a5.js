(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(156);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return h}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return m});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(143),u=t.n(l);t.d(n,"Link",function(){return u.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var c=t(151),s=t.n(c);t.d(n,"PageRenderer",function(){return s.a});var d=t(33);t.d(n,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a=[{name:"Projektit",path:"/projektit"},{name:"Osaamiseni",path:"/osaamiseni"},{name:"Lisätietoja",path:"/lisatietoja"}]},151:function(e,n,t){var a;e.exports=(a=t(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio - Robert Kuhlmann"}}}}},153:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(50),u=t(2),c=function(e){var n=e.location,t=u.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=c},154:function(e,n,t){},156:function(e,n,t){"use strict";t(150),t(48);var a=t(152),r=t(0),i=t.n(r),o=t(4),l=t.n(o),u=t(161),c=t.n(u),s=t(146),d=t(147),p=t(149),m=t(157),h=t(148),f=t(144),g=t.n(f),x=t(145);function y(){var e=g()(["\n    display: flex;\n    justify-content: center;\n    background: linear-gradient(120deg, var(--adjacent1), var(--adjacent2));\n    padding: 60px 0 70px;\n    color: white;\n\n    @media (max-width: 500px) {\n        flex-direction: column;\n        padding: 40px;\n    }\n\n    div {\n       width: 300px;\n\n       @media (max-width: 700px) {\n           width: 200px;\n       }\n    }\n\n    div > ul {\n        list-style: none;\n        padding-left: 0;\n        font-size: 18px;\n    }\n\n    div > a {\n        margin-right: 15px;\n        font-size: 1.6em;\n    }\n\n    div > ul > li {\n        margin-bottom: 10px;\n    }\n"]);return y=function(){return e},e}var v=x.a.div(y()),w=(t(154),t(162),t(7)),E=t.n(w),b=t(49),k=t.n(b);function j(){var e=g()(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 70px;\n    background-color: var(--primary);\n    color: white;\n    padding: 0;\n    box-shadow: 0px 2px 10px var(--dark);\n\n    span {\n        font-size: 1.2em;\n        font-weight: 700;\n        margin-left: 20px;\n        font-family: 'Raleway', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n        margin: 0 20px 0 0  ;\n        padding: 0;\n        display: inherit;\n        width: 300px;\n        justify-content: inherit;\n\n        @media (max-width: 768px) {\n            position: absolute;\n            display: ","\n            flex-direction: column;\n            top: 70px;\n            background-color: var(--dark);\n            width: 100%;\n        }\n    }\n\n    ul > li {\n        font-family: 'Raleway', sans-serif;\n        @media (max-width: 768px) {\n            padding: 10px 0 10px 20px;\n        }\n    }\n\n    button {\n        display: none;\n        color: white;\n        padding: 10px 13px;\n        background: none;\n        border: 1px solid white;\n        border-radius: 3px;\n        margin-right: 20px\n\n        @media (max-width: 768px) {\n            display: inherit;\n        }\n    }\n"]);return j=function(){return e},e}var q=x.a.nav(j(),function(e){return e.active?"flex":"none"}),R=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={active:!1,windowWidth:0},t.toggleMenu=t.toggleMenu.bind(k()(k()(t))),t}E()(n,e);var t=n.prototype;return t.toggleMenu=function(){this.setState({active:!this.state.active})},t.render=function(){return i.a.createElement(q,{active:this.state.active},i.a.createElement("span",null,i.a.createElement(s.Link,{to:"/"},this.props.siteTitle)),i.a.createElement("ul",null,h.a.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(s.Link,{to:e.path},e.name))})),i.a.createElement("button",{onClick:this.toggleMenu},i.a.createElement(d.a,{icon:p.b})))},n}(r.Component),M=function(e){var n=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather:400,700|Raleway:300,400,500,600,700",rel:"stylesheet"})),i.a.createElement(R,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,n),i.a.createElement(v,null,i.a.createElement("div",null,i.a.createElement("h3",null,"Yhteystiedot"),i.a.createElement("a",{href:"mailto:robert-kuhlmann@outlook.com"},i.a.createElement(d.a,{icon:p.f})),i.a.createElement("a",{href:"https://www.instagram.com/kuuuulman/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(d.a,{icon:m.i})),i.a.createElement("a",{href:"https://www.linkedin.com/in/robert-kuhlmann/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(d.a,{icon:m.l}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Navigointi"),i.a.createElement("ul",null,h.a.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement(s.Link,{to:e.path},e.name))})))),i.a.createElement("div",{style:{backgroundColor:"var(--dark)",color:"white",textAlign:"center",padding:"10px 20px"}},i.a.createElement("p",null,"Robert Kuhlmann 2018")))},data:a})};M.propTypes={children:l.a.node.isRequired};n.a=M}}]);
//# sourceMappingURL=component---src-pages-404-js-fb33ffa311c0556bd3a5.js.map