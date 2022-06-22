"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[3089],{9058:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),r=a(6010),n=a(1622),s=a(7524),o=a(9960),i=a(5999);const m="sidebar_re4s",c="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var b=a(3102);function E(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return l.createElement(b.Zo,{component:E,props:e})}function f(e){let{sidebar:t}=e;const a=(0,s.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(h,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(n.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(f,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(6010),n=a(2263),s=a(1944),o=a(5281),i=a(9058),m=a(1860),c=a(9703),u=a(197);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:r,blogTitle:o,permalink:i}=t,m="/"===i?a:o;return l.createElement(l.Fragment,null,l.createElement(s.d,{title:m,description:r}),l.createElement(u.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(i.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(m.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(c.Z,{metadata:t}))}function p(e){return l.createElement(s.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},1860:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7294),r=a(6010),n=a(5999),s=a(9960),o=a(4996),i=a(8824),m=a(8780),c=a(1315),u=a(6114),d=a(1526);function g(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:o}=t,i=n||o&&"mailto:"+o||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(g,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(g,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const h="authorCol_sTYa",b="imageOnlyAuthorRow_vA2J",E="imageOnlyAuthorCol_kG3X";function v(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?b:"row")},t.map(((e,t)=>{var s;return l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?E:h),key:t},l.createElement(p,{author:{...e,imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL}}))})))}const f="blogPostTitle_Ikge",N="blogPostData_SAv4",k="blogPostDetailsFull_u0Nl";function _(e){var t;const a=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:g}=(0,o.C)(),{children:p,frontMatter:h,assets:b,metadata:E,truncated:_,isBlogPostPage:Z=!1}=e,{date:P,formattedDate:w,permalink:T,tags:I,readingTime:y,title:A,editUrl:F,authors:L}=E,x=null!=(t=b.image)?t:h.image,M=!Z&&_,R=I.length>0,C=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(C,{className:f,itemProp:"headline"},Z?A:l.createElement(s.Z,{itemProp:"url",to:T},A)),l.createElement("div",{className:(0,r.Z)(N,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},w),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",a(y))),l.createElement(v,{authors:L,assets:b})),x&&l.createElement("meta",{itemProp:"image",content:g(x,{absolute:!0})}),l.createElement("div",{id:Z?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,p)),(R||_)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",Z&&k)},R&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":M})},l.createElement(d.Z,{tags:I})),Z&&F&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:F})),M&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},l.createElement(s.Z,{to:E.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+l.length+": "+e);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);