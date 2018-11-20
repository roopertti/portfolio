(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(146),l=t(156),o=t(144),c=t.n(o),d=t(145);function u(){var n=c()(["\n    padding: 80px 60px;\n    display: flex; \n    align-items: center;\n    justify-content: space-around;\n\n    h1 {\n        font-size: 3.5em;\n        font-weight: 600;\n        margin: 20px 0;\n        color: var(--primary);\n\n        @media (max-width: )\n    }\n\n    div > img {\n        width: 350px;\n\n        @media (max-width: 1100px) {\n            width: 300px;\n        }\n\n        @media (max-width: 995px) {\n            width: 250px;\n        }\n    }\n\n    div > a {\n        display: inline-block;\n        border: 1px solid var(--primary);\n        border-radius: 3px;\n        color: var(--primary);\n        background: none;\n        transition-duration: 0.5s;\n        padding: 10px 10px;\n\n        :hover {\n            background: var(--primary);\n            color: white;\n        }\n    }\n\n    div {\n        width: 550px;\n        @media (max-width: 610px) {\n            width: 100%;\n        }\n    }\n\n    @media (max-width: 995px) {\n        flex-direction: column-reverse;\n        padding: 60px 40px\n    }\n\n    @media (max-width: 600px) {\n        padding: 40px 20px;\n    }\n"]);return u=function(){return n},n}var m=d.a.div(u());function s(){var n=c()(["\n    background: linear-gradient(120deg, var(--adjacent2), var(--adjacent1));\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 60px 20px;\n    color: white;\n\n    div {\n        text-align: center;\n        width: 300px;\n        \n\n        @media (max-width: 800px) {\n            width: 300px;\n            margin: 10px 0;\n        }\n    }\n\n    p {\n        font-family: 'Raleway', sans-serif;\n        font-weight: 300;\n    }\n\n    span {\n        font-size: 3em;\n        display: block;\n        text-align: center;\n    }\n\n    @media (max-width: 800px) {\n        flex-direction: column;\n        justify-content: center;\n    }\n"]);return s=function(){return n},n}var p=d.a.div(s()),h=t(158),g=t(159),f=t(160),x=t(147),v=t(149),w=t(191),y=t.n(w);e.default=function(){return r.a.createElement(l.a,null,r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Hello there!"),r.a.createElement("p",{style:{fontSize:"1.2em",color:"var(--dark)"}},r.a.createElement("strong",null,"Welcome to my portfolio page!")),r.a.createElement("p",null,"On this site I will be introducing myself through different projects and knowledge I have gained during my studies."),r.a.createElement(i.Link,{to:"/projects"},"Get started!")),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:y.a,alt:"Face image"}))),r.a.createElement(p,null,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(x.a,{icon:v.m})),r.a.createElement(i.Link,{to:"/projects"},r.a.createElement("h3",null,"Projects")),r.a.createElement("p",null,"See some of the projects I've made and gain some insight on my expertise!")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(x.a,{icon:v.h})),r.a.createElement(i.Link,{to:"/knowledge"},r.a.createElement("h3",null,"Knowledge")),r.a.createElement("p",null,"Check out the programming languages, libraries and tools I am familar with!")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(x.a,{icon:v.i})),r.a.createElement(i.Link,{to:"/lisatietoja"},r.a.createElement("h3",null,"More about me")),r.a.createElement("p",null,"My education, work experience and positions of trust can be seen here!"))),r.a.createElement(h.a,{style:{paddingTop:100,paddingBottom:100}},r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement(f.a,null,"Who am I?")),r.a.createElement("p",null,"My name is Robert Kuhlmann and I'm a 24-year-old young man ready to make a career as a web developer! I'm currently studying my fourth and last year as Bachelor of Business Administration and Information Technology at Karelia UAS. During my studies I have developed games, software, websites and also gained the basic knowledge on E-Commerce."),r.a.createElement("p",null,"I have studied my whole degree as distance studies but at the same time I have been actively involved in our student union's board as a chairperson and as a member as well."),r.a.createElement("p",null,"Programming has become somewhat of a passion to me during my studies. I constantly study programming during my free time since it entertains me a lot and helps me to express my creativity."),r.a.createElement("p",null,r.a.createElement("strong",null,"I wish to get a job where I can constanlty learn new things and challenge myself!")),r.a.createElement(g.a,null))))}},146:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return h}),t.d(e,"StaticQueryContext",function(){return s}),t.d(e,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),i=t(4),l=t.n(i),o=t(143),c=t.n(o);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return o.withPrefix}),t.d(e,"navigate",function(){return o.navigate}),t.d(e,"push",function(){return o.push}),t.d(e,"replace",function(){return o.replace}),t.d(e,"navigateTo",function(){return o.navigateTo});var d=t(151),u=t.n(d);t.d(e,"PageRenderer",function(){return u.a});var m=t(33);t.d(e,"parsePath",function(){return m.a});var s=r.a.createContext({}),p=function(n){return r.a.createElement(s.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a=[{name:"Projects",path:"/projects"},{name:"Knowledge",path:"/knowledge"},{name:"More about me",path:"/more-about-me"}]},151:function(n,e,t){var a;n.exports=(a=t(153))&&a.default||a},152:function(n){n.exports={data:{site:{siteMetadata:{title:"Portfolio - Robert Kuhlmann"}}}}},153:function(n,e,t){"use strict";t.r(e);t(34);var a=t(0),r=t.n(a),i=t(4),l=t.n(i),o=t(50),c=t(2),d=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:t},t.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=d},154:function(n,e,t){},156:function(n,e,t){"use strict";t(150),t(48);var a=t(152),r=t(0),i=t.n(r),l=t(4),o=t.n(l),c=t(161),d=t.n(c),u=t(146),m=t(147),s=t(149),p=t(157),h=t(148),g=t(144),f=t.n(g),x=t(145);function v(){var n=f()(["\n    display: flex;\n    justify-content: center;\n    background: linear-gradient(120deg, var(--adjacent1), var(--adjacent2));\n    padding: 60px 0 70px;\n    color: white;\n\n    @media (max-width: 500px) {\n        flex-direction: column;\n        padding: 40px;\n    }\n\n    div {\n       width: 300px;\n\n       @media (max-width: 700px) {\n           width: 200px;\n       }\n    }\n\n    div > ul {\n        list-style: none;\n        padding-left: 0;\n        font-size: 18px;\n    }\n\n    div > a {\n        margin-right: 15px;\n        font-size: 1.6em;\n    }\n\n    div > ul > li {\n        margin-bottom: 10px;\n    }\n"]);return v=function(){return n},n}var w=x.a.div(v()),y=(t(154),t(162),t(7)),E=t.n(y),b=t(49),k=t.n(b);function j(){var n=f()(["\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 70px;\n    background-color: var(--primary);\n    color: white;\n    padding: 0;\n    box-shadow: 0px 2px 10px var(--dark);\n\n    span {\n        font-size: 1.2em;\n        font-weight: 700;\n        margin-left: 20px;\n        font-family: 'Raleway', sans-serif;\n    }\n\n    ul {\n        list-style: none;\n        margin: 0 20px 0 0  ;\n        padding: 0;\n        display: inherit;\n        width: 300px;\n        justify-content: inherit;\n\n        @media (max-width: 768px) {\n            position: absolute;\n            display: ","\n            flex-direction: column;\n            top: 70px;\n            background-color: var(--dark);\n            width: 100%;\n        }\n    }\n\n    ul > li {\n        font-family: 'Raleway', sans-serif;\n        @media (max-width: 768px) {\n            padding: 10px 0 10px 20px;\n        }\n    }\n\n    button {\n        display: none;\n        color: white;\n        padding: 10px 13px;\n        background: none;\n        border: 1px solid white;\n        border-radius: 3px;\n        margin-right: 20px\n\n        @media (max-width: 768px) {\n            display: inherit;\n        }\n    }\n"]);return j=function(){return n},n}var I=x.a.nav(j(),function(n){return n.active?"flex":"none"}),R=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={active:!1,windowWidth:0},t.toggleMenu=t.toggleMenu.bind(k()(k()(t))),t}E()(e,n);var t=e.prototype;return t.toggleMenu=function(){this.setState({active:!this.state.active})},t.render=function(){return i.a.createElement(I,{active:this.state.active},i.a.createElement("span",null,i.a.createElement(u.Link,{to:"/"},this.props.siteTitle)),i.a.createElement("ul",null,h.a.map(function(n){return i.a.createElement("li",{key:n.name},i.a.createElement(u.Link,{to:n.path},n.name))})),i.a.createElement("button",{onClick:this.toggleMenu},i.a.createElement(m.a,{icon:s.b})))},e}(r.Component),q=function(n){var e=n.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather:400,700|Raleway:300,400,500,600,700",rel:"stylesheet"})),i.a.createElement(R,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",null,e),i.a.createElement(w,null,i.a.createElement("div",null,i.a.createElement("h3",null,"Contact info and networks"),i.a.createElement("a",{href:"mailto:robert-kuhlmann@outlook.com"},i.a.createElement(m.a,{icon:s.f})),i.a.createElement("a",{href:"https://www.instagram.com/kuuuulman/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m.a,{icon:p.i})),i.a.createElement("a",{href:"https://www.linkedin.com/in/robert-kuhlmann/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m.a,{icon:p.l}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Navigation"),i.a.createElement("ul",null,h.a.map(function(n){return i.a.createElement("li",{key:n.name},i.a.createElement(u.Link,{to:n.path},n.name))})))),i.a.createElement("div",{style:{backgroundColor:"var(--dark)",color:"white",textAlign:"center",padding:"10px 20px"}},i.a.createElement("p",null,"Robert Kuhlmann 2018")))},data:a})};q.propTypes={children:o.a.node.isRequired};e.a=q},158:function(n,e,t){"use strict";var a=t(144),r=t.n(a);function i(){var n=r()(["\n    margin: auto;\n    width: 900px;\n    padding: 10px;\n    margin-top: 0;\n    margin-bottom: 0;\n\n    @media (max-width: 1000px) {\n        width: 800px;\n    }\n\n    @media (max-width: 900px) {\n        width: 600px;\n    }\n\n    @media (max-width: 600px) {\n        width: 100%;\n    }\n"]);return i=function(){return n},n}var l=t(145).a.div(i());e.a=l},159:function(n,e,t){"use strict";var a=t(144),r=t.n(a),i=t(0),l=t.n(i);function o(){var n=r()(["\n    text-align: center;\n    padding: 5px;\n    margin-bottom: 20px;\n\n    span {\n        height: 8px;\n        width: 18px;\n        background-color: var(--primary);\n        display: inline-block;\n    }\n"]);return o=function(){return n},n}var c=t(145).a.div(o());e.a=function(){return l.a.createElement(c,null,l.a.createElement("span",null))}},160:function(n,e,t){"use strict";var a=t(144),r=t.n(a);function i(){var n=r()(["\n    font-size: 2.8em;\n    color: var(--primary);\n\n    @media (max-width: 600px) {\n        font-size: 2em;\n    }\n"]);return i=function(){return n},n}var l=t(145).a.h1(i());e.a=l},191:function(n,e,t){n.exports=t.p+"static/pokarobert-1b5cb9d2502a3efc9e1a698cdbf610da.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-9cf5359c382ba9916695.js.map