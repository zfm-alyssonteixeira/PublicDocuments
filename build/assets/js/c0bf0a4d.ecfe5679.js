"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"general/Conventions/Commits",id:"general/Conventions/Commits",title:"Commits",description:"We use the Convential Commits convention.",source:"@site/docs/general/Conventions/Commits.md",sourceDirName:"general/Conventions",slug:"/general/Conventions/Commits",permalink:"/Docusite/docs/general/Conventions/Commits",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/general/Conventions/Commits.md",tags:[],version:"current",frontMatter:{},sidebar:"generalSidebar",next:{title:"Functions",permalink:"/Docusite/docs/general/Conventions/Functions"}},p={},d=[{value:"Types",id:"types",level:3},{value:"Scopes",id:"scopes",level:3},{value:"Description",id:"description",level:3}],m={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},(0,r.kt)("em",{parentName:"a"},"Convential Commits"))," convention.  "),(0,r.kt)("p",null,"In short: ",(0,r.kt)("inlineCode",{parentName:"p"},"<type>(<optional scope>): <description>"),(0,r.kt)("br",{parentName:"p"}),"\n","Breaking changes are marked with an exclamation mark (",(0,r.kt)("inlineCode",{parentName:"p"},"!"),") after the type/scope and describe the breaking change within the commit message like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feat!: add new model\n\nBREAKING CHANGE:\n- add new daily jobs\n- add migration\n")),(0,r.kt)("p",null,"These ",(0,r.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE")," gets automatically added to the message of the merge request which saves time and nerves for you and the reviewer. "),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"feat")),(0,r.kt)("td",{parentName:"tr",align:null},"A new feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fix")),(0,r.kt)("td",{parentName:"tr",align:null},"A bug fix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes that do not affect the meaning of the code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"typo")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes that do not affect the meaning of the code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refactor")),(0,r.kt)("td",{parentName:"tr",align:null},"A code change that neither fixes a bug nor adds a feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"perf")),(0,r.kt)("td",{parentName:"tr",align:null},"A code change that improves performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"test")),(0,r.kt)("td",{parentName:"tr",align:null},"Adding missing tests or correcting existing tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ci")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes to our CI configuration files and scripts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"docs")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation only changes")))),(0,r.kt)("h3",{id:"scopes"},"Scopes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scope"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"common")),(0,r.kt)("td",{parentName:"tr",align:null},"Everything except things listed below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"core")),(0,r.kt)("td",{parentName:"tr",align:null},"PHP or Laravel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"router")),(0,r.kt)("td",{parentName:"tr",align:null},"Laravel route")))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,r.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,r.kt)("li",{parentName:"ul"},"no dot (.) at the end")))}c.isMDXComponent=!0}}]);