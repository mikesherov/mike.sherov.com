(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{183:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return s});var o=a(0),i=a.n(o),r=a(187),d=a(189),n=a(188),f=a(186);var m=function(t){var e,a;function o(){return t.apply(this,arguments)||this}return a=t,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,o.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(d.a,{location:this.props.location,title:e},i.a.createElement(n.a,{title:"All posts"}),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},i.a.createElement(r.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},o}(i.a.Component);e.default=m;var s="2785444898"},185:function(t,e,a){var o;t.exports=(o=a(190))&&o.default||o},186:function(t,e,a){"use strict";a.d(e,"a",function(){return f}),a.d(e,"b",function(){return m});var o=a(192),i=a.n(o),r=a(193),d=a.n(r);d.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete d.a.googleFonts;var n=new i.a(d.a);var f=n.rhythm,m=n.scale},187:function(t,e,a){"use strict";var o=a(0),i=a.n(o),r=a(11),d=a.n(r),n=a(58),f=a.n(n);a.d(e,"a",function(){return f.a});a(185),i.a.createContext({});d.a.object,d.a.string.isRequired,d.a.func,d.a.func},188:function(t,e,a){"use strict";var o=a(191),i=a(0),r=a.n(i),d=a(11),n=a.n(d),f=a(194),m=a.n(f);function s(t){var e=t.description,a=t.lang,i=t.meta,d=t.title,n=o.data.site,f=e||n.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+n.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:d},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:f}].concat(i)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.arrayOf(n.a.object),title:n.a.string.isRequired},e.a=s},189:function(t,e,a){"use strict";a(17);var o=a(0),i=a.n(o),r=a(187),d=function(){return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<script src="https://f.convertkit.com/ckjs/ck.5.js"><\/script>\n<form action="https://app.convertkit.com/forms/989198/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="989198" data-uid="237ae0397d" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;redirect_url&quot;:&quot;&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false}}}" min-width="400 500 600 700 800" style="background-color: rgb(249, 250, 251); border-radius: 4px;"><div class="formkit-background" style="opacity: 0.2;"></div><div data-style="minimal"><div class="formkit-header" data-element="header" style="color: rgb(77, 77, 77); font-size: 27px; font-weight: 700;"><h1>Join the Newsletter</h1></div><div class="formkit-subheader" data-element="subheader" style="color: rgb(104, 104, 104); font-size: 18px;"><p>Subscribe to get emails from me about software engineering and access to exclusive content not available on this site!  </p></div><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="true" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" aria-label="First Name" name="fields[first_name]" placeholder="First Name" type="text" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"></div><div class="formkit-field"><input class="formkit-input" name="email_address" placeholder="Your email address" required="" type="email" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Subscribe</span></button></div><div class="formkit-guarantee" data-element="guarantee" style="color: rgb(77, 77, 77); font-size: 13px; font-weight: 400;"><p>We won\'t send you spam. Unsubscribe at any time.</p></div></div><style>.formkit-form[data-uid="237ae0397d"] *{font-family:\'Merriweather\',\'Georgia\',serif;;box-sizing:border-box;}.formkit-form[data-uid="237ae0397d"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="237ae0397d"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="237ae0397d"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="237ae0397d"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="237ae0397d"] h1,.formkit-form[data-uid="237ae0397d"] h2,.formkit-form[data-uid="237ae0397d"] h3,.formkit-form[data-uid="237ae0397d"] h4,.formkit-form[data-uid="237ae0397d"] h5,.formkit-form[data-uid="237ae0397d"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="237ae0397d"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="237ae0397d"][data-format="modal"]{display:none;}.formkit-form[data-uid="237ae0397d"][data-format="slide in"]{display:none;}.formkit-form[data-uid="237ae0397d"] .formkit-input,.formkit-form[data-uid="237ae0397d"] .formkit-select,.formkit-form[data-uid="237ae0397d"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="237ae0397d"] .formkit-button,.formkit-form[data-uid="237ae0397d"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="237ae0397d"] .formkit-button:hover,.formkit-form[data-uid="237ae0397d"] .formkit-submit:hover,.formkit-form[data-uid="237ae0397d"] .formkit-button:focus,.formkit-form[data-uid="237ae0397d"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="237ae0397d"] .formkit-button:hover > span,.formkit-form[data-uid="237ae0397d"] .formkit-submit:hover > span,.formkit-form[data-uid="237ae0397d"] .formkit-button:focus > span,.formkit-form[data-uid="237ae0397d"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="237ae0397d"] .formkit-button > span,.formkit-form[data-uid="237ae0397d"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="237ae0397d"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="237ae0397d"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="237ae0397d"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="237ae0397d"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="237ae0397d"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="237ae0397d"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="237ae0397d"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="237ae0397d"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="237ae0397d"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="237ae0397d"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"]{text-align:left;margin:0;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="237ae0397d"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="237ae0397d"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="237ae0397d"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="237ae0397d"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="237ae0397d"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="237ae0397d"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="237ae0397d"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-237ae0397d- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-237ae0397d- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="237ae0397d"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="237ae0397d"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="237ae0397d"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="237ae0397d"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="237ae0397d"] .formkit-powered-by[data-active="false"]{opacity:0.35;}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-237ae0397d-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-237ae0397d-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}} .formkit-form[data-uid="237ae0397d"]{border:1px solid #e3e3e3;max-width:700px;position:relative;overflow:hidden;}.formkit-form[data-uid="237ae0397d"] .formkit-background{width:100%;height:100%;position:absolute;top:0;left:0;background-size:cover;background-position:center;opacity:0.3;z-index:1;}.formkit-form[data-uid="237ae0397d"] [data-style="minimal"]{padding:20px;width:100%;z-index:2;position:relative;}.formkit-form[data-uid="237ae0397d"] .formkit-header{margin:0 0 27px 0;text-align:center;}.formkit-form[data-uid="237ae0397d"] .formkit-subheader{margin:18px 0;text-align:center;}.formkit-form[data-uid="237ae0397d"] .formkit-guarantee{font-size:13px;margin:10px 0 15px 0;text-align:center;}.formkit-form[data-uid="237ae0397d"] .formkit-guarantee > p{margin:0;}.formkit-form[data-uid="237ae0397d"] .formkit-powered-by{color:#7d7d7d;display:block;font-size:12px;margin:10px 0 0 0;text-align:center;}.formkit-form[data-uid="237ae0397d"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:25px auto 0 auto;}.formkit-form[data-uid="237ae0397d"] .formkit-field{min-width:220px;}.formkit-form[data-uid="237ae0397d"] .formkit-field,.formkit-form[data-uid="237ae0397d"] .formkit-submit{margin:0 0 15px 0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}.formkit-form[data-uid="237ae0397d"][min-width~="600"] [data-style="minimal"]{padding:40px;}.formkit-form[data-uid="237ae0397d"][min-width~="600"] .formkit-fields[data-stacked="false"]{margin-left:-5px;margin-right:-5px;}.formkit-form[data-uid="237ae0397d"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-field,.formkit-form[data-uid="237ae0397d"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-submit{margin:0 5px 15px 5px;}.formkit-form[data-uid="237ae0397d"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-field{-webkit-flex:100 1 auto;-ms-flex:100 1 auto;flex:100 1 auto;}.formkit-form[data-uid="237ae0397d"][min-width~="600"] .formkit-fields[data-stacked="false"] .formkit-submit{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;} </style></form>'}})},n=a(186);var f=function(t){var e,a;function o(){return t.apply(this,arguments)||this}return a=t,(e=o).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,o.prototype.render=function(){var t=this.props,e=t.children,a=t.title,o={boxShadow:"none",textDecoration:"none",color:"inherit"},f={display:"flex",justifyContent:"space-between",alignItems:"center"},m=Object.assign({},f,{marginBottom:Object(n.a)(2)}),s=Object.assign({},o,{paddingLeft:Object(n.a)(.5)}),l=i.a.createElement("header",{style:m},i.a.createElement("strong",null,i.a.createElement(r.a,{style:o,to:"/"},a)),i.a.createElement("nav",{style:f},i.a.createElement(r.a,{style:s,to:"/about"},"About"),i.a.createElement(r.a,{style:s,to:"/blog"},"Posts")));return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(24),padding:Object(n.a)(1.5)+" "+Object(n.a)(.75)}},l,i.a.createElement("main",null,e),i.a.createElement("footer",null,i.a.createElement("hr",{style:{marginBottom:Object(n.a)(1)}}),i.a.createElement(d,null)," © ",(new Date).getFullYear(),", Mike Sherov"))},o}(i.a.Component);e.a=f},190:function(t,e,a){"use strict";a.r(e);a(17);var o=a(0),i=a.n(o),r=a(11),d=a.n(r),n=a(82),f=function(t){var e=t.location,a=t.pageResources;return a?i.a.createElement(n.a,Object.assign({location:e,pageResources:a},a.json)):null};f.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},e.default=f},191:function(t){t.exports={data:{site:{siteMetadata:{title:"Mike Sherov",description:"Mike Sherov's personal website and blog",author:"Mike Sherov"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-075947b7adcdd4228f68.js.map