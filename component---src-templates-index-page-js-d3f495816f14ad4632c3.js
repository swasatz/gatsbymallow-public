(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var r=a(0),n=a.n(r),i=(a(206),a(211),a(215));a(222),a(197),a(217);t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter.imageCheck;t.frontmatter.dataLoop;return n.a.createElement(i.a,null,n.a.createElement("h1",null,t.frontmatter.title),a?n.a.createElement("img",{src:t.frontmatter.images.childImageSharp.fluid.base64}):"",n.a.createElement("div",{className:"myPOst",dangerouslySetInnerHTML:{__html:t.html}}))};var s="2841141598"},206:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(207),a(9).default.enqueue,n.a.createContext({})},207:function(e,t,a){var r;e.exports=(r=a(208))&&r.default||r},208:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),n=a.n(r),i=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},211:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(206),s=function(e){return n.a.createElement("li",null,n.a.createElement(i.a,{to:e.to},e.children))};t.a=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement(i.a,{to:"/"},n.a.createElement("h3",null,"MySweetSite")),n.a.createElement("ul",null,n.a.createElement(s,{to:"/"},"Home"),n.a.createElement(s,{to:"/about/"},"About"),n.a.createElement(s,{to:"/contact/"},"Contact"))),t)}},215:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=(a(195),a(247)),s=a(246),o=a(206);var l=function(e){return n.a.createElement(o.a,{activeClassName:"active",className:e.className,to:e.to},e.children)},d=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={isOpen:!1},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var d=r.prototype;return d.toggle=function(){this.setState({isOpen:!this.state.isOpen})},d.render=function(){return n.a.createElement(i.a,{bg:"light",expand:"lg"},n.a.createElement("div",{className:"container"},n.a.createElement(o.a,{to:"/",className:"navbar-brand"},"NAvBrand"),n.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(s.a,{className:"mr-auto"},n.a.createElement(l,{className:"nav-link",to:"/"},"Home"),n.a.createElement(l,{className:"nav-link",to:"/services/"},"Services"),n.a.createElement(l,{className:"nav-link",to:"/portfolio/"},"Portfolio"),n.a.createElement(l,{className:"nav-link",to:"/technologies/"},"Technologies"),n.a.createElement(l,{className:"nav-link",to:"/career/"},"Career"),n.a.createElement(l,{className:"nav-link nav-btn",to:"/career/"},"Contact")))))},r}(n.a.Component);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("div",null,n.a.createElement("header",null,n.a.createElement(d,null)),n.a.createElement("div",null,this.props.children),n.a.createElement("footer",null))},r}(n.a.Component);t.a=c},217:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(216);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),s=r(a(69)),o=r(a(134)),l=r(a(135)),d=r(a(0)),c=r(a(51)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(N,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},N=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,L=e.loading,O=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:k?1:0,transition:V?"opacity "+b+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},_=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&T,o,f),j={title:t,alt:this.state.isVisible?"":a,style:_,className:p};if(g){var P=g,x=P[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),C&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),x.base64&&d.default.createElement(R,{src:x.base64,spreadProps:j,imageVariants:P,generateSources:w}),x.tracedSVG&&d.default.createElement(R,{src:x.tracedSVG,spreadProps:j,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(P),d.default.createElement(N,{alt:a,title:t,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:L},x,{imageVariants:P}))}}))}if(m){var q=m,M=q[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete W.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},C&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:C,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&T)}),M.base64&&d.default.createElement(R,{src:M.base64,spreadProps:j,imageVariants:q,generateSources:w}),M.tracedSVG&&d.default.createElement(R,{src:M.tracedSVG,spreadProps:j,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(q),d.default.createElement(N,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:L},M,{imageVariants:q}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:V,sizes:z,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=k;t.default=C},222:function(e,t,a){"use strict";a(0),a(196)}}]);
//# sourceMappingURL=component---src-templates-index-page-js-d3f495816f14ad4632c3.js.map