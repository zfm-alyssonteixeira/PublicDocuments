"use strict";(self.webpackChunkdocusite=self.webpackChunkdocusite||[]).push([[430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"api/API-Documentation",id:"api/API-Documentation",title:"API-Documentation",description:"We document our API using the OpenApi 3.0.0 standard in a .yaml file. The file is located in the repository. As editor we use StoplightStudio for Mac.",source:"@site/docs/api/API-Documentation.md",sourceDirName:"api",slug:"/api/API-Documentation",permalink:"/Docusite/docs/api/API-Documentation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/API-Documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",next:{title:"Activity-Logging",permalink:"/Docusite/docs/api/Activity-Logging"}},p={},c=[{value:"Documenting an API endpoint",id:"documenting-an-api-endpoint",level:2},{value:"Generating from JSON",id:"generating-from-json",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We document our API using the ",(0,a.kt)("strong",{parentName:"p"},"OpenApi 3.0.0")," standard in a ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file. The file is located in the repository. As editor we use ",(0,a.kt)("a",{parentName:"p",href:"https://stoplight.io/"},"StoplightStudio for Mac"),"."),(0,a.kt)("h2",{id:"documenting-an-api-endpoint"},"Documenting an API endpoint"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on all tenant routes you always have to set the ",(0,a.kt)("inlineCode",{parentName:"li"},"X-Tenant")," header for tenant identification. Within the documentation you find it as a ",(0,a.kt)("inlineCode",{parentName:"li"},"$ref"),"."),(0,a.kt)("li",{parentName:"ul"},"include all query params. Usually you do not need to describe them. Do not forget the ",(0,a.kt)("inlineCode",{parentName:"li"},"page")," param.")),(0,a.kt)("h2",{id:"generating-from-json"},"Generating from JSON"),(0,a.kt)("p",null,"After generating the response object from JSON you have to verify the defined types of each property. Especially for pagination you always have to check the properties ",(0,a.kt)("inlineCode",{parentName:"p"},"prev_page_url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"next_page_url")," which should be ",(0,a.kt)("inlineCode",{parentName:"p"},"string or null"),"."),(0,a.kt)("p",null,"With the generation of the object you automatically generate an ",(0,a.kt)("inlineCode",{parentName:"p"},"x-example")," with the given data which is not visible in the documentation. Switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"</> Code")," vie, search for ",(0,a.kt)("inlineCode",{parentName:"p"},"x-example")," and delete this section."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can use as blueprint:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contacts"),(0,a.kt)("li",{parentName:"ul"},"organizations"),(0,a.kt)("li",{parentName:"ul"},"projects"),(0,a.kt)("li",{parentName:"ul"},"selectiondates")))}d.isMDXComponent=!0}}]);