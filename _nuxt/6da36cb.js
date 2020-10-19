/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{316:function(t,e,n){var content=n(324);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("a66e425e",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n(36),n(27),n(52),n(37),n(17);var r=n(2),o={data:function(){return{entry:{}}},props:{entryId:String},computed:{metaTitle:function(){return this.entry?JSON.parse(this.entry.seomatic.metaTitleContainer).title.title:null},metaData:function(){if(!this.entry)return null;var t=JSON.parse(this.entry.seomatic.metaTagContainer),e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.content&&e.push({hid:n,property:r.property||"",name:r.name||"",content:r.content})})),e},linkData:function(){if(!this.entry)return null;var t=JSON.parse(this.entry.seomatic.metaLinkContainer),e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.href&&e.push({hid:n,href:r.href,rel:r.rel||"",type:r.type||""})})),e},jsonLdData:function(){return this.entry?this.entry.seomatic.metaJsonLdContainer:null}},head:function(){return this.entry?{__dangerouslyDisableSanitizers:["script"],title:this.metaTitle,meta:this.metaData,link:this.linkData,script:[{type:"application/ld+json",innerHTML:this.jsonLdData}]}:null},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:"\n    query getEntry($id: [QueryArgument]) {\n        entry(id: $id) {\n            seomatic(asArray: true) {\n                metaTitleContainer\n                metaTagContainer\n                metaLinkContainer\n                metaJsonLdContainer\n            }\n        }\n    }\n",variables:{id:t.entryId}});case 2:n=e.sent,t.entry=n.data.entry;case 4:case"end":return e.stop()}}),e)})))()}},l=n(7),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},318:function(t,e,n){"use strict";n(146);var r={props:{width:{type:[String,Number]},height:{type:[String,Number]},altText:{type:String},photoCredit:{type:String},classes:{type:String},sizes:{type:String},variants:{type:Object}}},o=(n(323),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.variants&&t.variants.src?n("picture",{staticClass:"inline-block relative"},[n("source",{attrs:{"data-srcset":t.variants.srcsetWebp,sizes:t.sizes,type:"image/webp"}}),t._v(" "),n("source",{attrs:{"data-srcset":t.variants.srcset,sizes:t.sizes,type:"image/jpeg"}}),t._v(" "),n("img",{class:["lazyload",t.classes],attrs:{src:t.variants.placeholderImage,width:t.width,height:t.height,alt:t.altText||""}}),t._v(" "),t.photoCredit?n("span",{staticClass:"photo-credit"},[t._v("\n      "+t._s(t.photoCredit)+"\n    ")]):t._e()]):t._e()])}),[],!1,null,"7e513ed9",null);e.a=component.exports},319:function(t,e,n){"use strict";var r={props:{size:{type:String},color:{type:String},centered:{type:Boolean},limitWidth:{type:Boolean}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["h1"===t.size?"text-2xl sm:text-3xl md:text-4xl":"","h2"===t.size?"text-3xl":"","h3"===t.size?"text-xl":"","text-"+t.color,"font-semibold mx-auto leading-tight",t.centered?"text-center ":"",t.limitWidth&&t.centered?"md:w-8/12":"",t.limitWidth&&!t.centered?"lg:w-10/12":""]},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},322:function(t,e,n){"use strict";n(111),n(17);var r=n(2),o=n(318),l={props:{data:{type:Object}},components:{"v-optimized-image":o.a},computed:{hasImageLink:function(){return this.data.imageLink&&this.data.imageLink.url&&""!==this.data.imageLink.url}}},c=n(7),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block aligned-image bg-white"},[n("div",{class:["container w-full leading-normal"]},[n("div",{class:["sm:w-4/12 mx-auto mb-4 lg:mb-6 sm:pt-1","left"===t.data.alignment?"float-left sm:mr-8 lg:mr-12":"float-right sm:ml-8 lg:ml-12"]},[n(t.hasImageLink?"a":"div",{tag:"component",attrs:{href:t.hasImageLink?t.data.imageLink.url:null,target:t.hasImageLink?t.data.imageLink.target:null}},[n("v-optimized-image",{attrs:{width:t.data.image[0].width,height:t.data.image[0].height,altText:t.data.image[0].altText||null,photoCredit:t.data.image[0].photoCredit||null,variants:t.data.image[0].largeImageVariants||null,sizes:"900px",classes:"mx-auto"}})],1),t._v(" "),t.data.caption?n("div",{staticClass:"text-sm mt-2",domProps:{innerHTML:t._s(t.data.caption)}}):t._e()],1)])])}),[],!1,null,null,null).exports,m=n(326),h={props:{data:{type:Object}},components:{"v-base-button":m.a}},f=Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return this.data.buttons.length>0?e("section",{staticClass:"block buttons bg-white section--standard-padding"},[e("div",{staticClass:"container text-center"},this._l(this.data.buttons,(function(t){return e("v-base-button",{key:"button-"+t.id,attrs:{color:"yellow",data:t.button}})})),1)]):this._e()}),[],!1,null,null,null).exports,v=(n(27),n(52),n(14),{props:{data:Object},data:function(){return{formspreeEndPoint:this.$config.formspreeEndPoint,recaptchaSiteKey:this.$config.recaptchaSiteKey,form:{name:"",email:"",subject:"",message:""},errors:{},formError:"",showErrors:!1,completed:!1}},components:{"v-base-button":m.a},methods:{click:function(){var t=this;if(t.formError="",this.errors={},""===this.form.name&&(this.errors.name="Please enter your name"),""===this.form.email&&(this.errors.email="Please enter your email address"),Object.keys(this.errors).length>0)this.showErrors=!0;else{var e=document.getElementById("g-recaptcha-response"),n="";e&&(n=e.value);var r={name:this.form.name,email:this.form.email,_replyto:this.form.email,subject:this.form.subject,message:this.form.message,"g-recaptcha-response":n};fetch(this.formspreeEndPoint,{method:"post",body:JSON.stringify(r),headers:{Accept:"application/json"}}).then((function(t){return t.json()})).then((function(data){data.error&&t.showError(data.error),data.ok&&(t.completed=!0)})).catch((function(e){t.showError(e)}))}},showError:function(t){this.formError='<span class="font-semibold">An error occurred. Please try again.</span><br>'+t},loadExternalJs:function(t){return new Promise((function(e,n){var script=document.createElement("script");script.type="text/javascript",script.src=t,script.addEventListener("load",(function(){return e(script)}),!1),script.addEventListener("error",(function(){return n(script)}),!1),document.body.appendChild(script)}))}},mounted:function(){this.loadExternalJs("https://www.google.com/recaptcha/api.js")}}),x=(n(340),Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block contact-form bg-white section--standard-padding"},[n("div",{staticClass:"container w-full leading-normal"},[t.completed?n("div",[n("div",{domProps:{innerHTML:t._s(t.data.confirmationText)}})]):n("div",{staticClass:"md:w-10/12 mx-auto"},[n("div",{staticClass:"md:flex"},[n("div",{staticClass:"md:w-2/5 lg:w-1/3 md:pr-8 lg:pr-10"},[n("fieldset",{class:t.showErrors&&t.errors.name&&""!==t.errors.name?"has-error":""},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"block bg-grey-light p-3 w-full",attrs:{type:"text",name:"name",id:"field-name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("div",{staticClass:"error text-red mt-2 text-sm"},[t._v("\n              "+t._s(t.errors.name)+"\n            ")])]),t._v(" "),n("fieldset",{class:t.showErrors&&t.errors.name&&""!==t.errors.name?"has-error":""},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"block bg-grey-light p-3 w-full",attrs:{type:"email",name:"email",id:"field-email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("div",{staticClass:"error text-red mt-2 text-sm"},[t._v("\n              "+t._s(t.errors.email)+"\n            ")])]),t._v(" "),n("fieldset",[n("label",{attrs:{for:"field-subject"}},[t._v(" Subject ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"block bg-grey-light p-3 w-full",attrs:{type:"text",name:"subject",id:"field-subject"},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"md:w-3/5 lg:w-2/3"},[n("fieldset",[n("label",{attrs:{for:"field-message"}},[t._v(" Message ")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"block bg-grey-light p-3 w-full",attrs:{rows:"5",name:"message",id:"field-message"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])])]),t._v(" "),t.formError?n("div",{staticClass:"bg-red-light text-red p-3 text-base leading-normal mt-3 mb-8",domProps:{innerHTML:t._s(t.formError)}}):t._e(),t._v(" "),n("div",{staticClass:"md:flex mt-4"},[t.recaptchaSiteKey?n("div",{staticClass:"md:w-2/5 lg:w-1/3 md:pr-8 lg:pr-10"},[n("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":t.recaptchaSiteKey}})]):t._e(),t._v(" "),n("div",{staticClass:"mt-4 sm:mt-0 md:w-3/5 lg:w-2/3"},[n("button",{staticClass:"btn float-right bg-yellow text-grey-dark hover:bg-yellow-hover",attrs:{type:"button"},on:{click:t.click}},[t._v("\n            Send Message\n          ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"field-name"}},[this._v("\n              Name\n              "),e("span",{staticClass:"text-blue"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"field-email"}},[this._v("\n              Email "),e("span",{staticClass:"text-blue"},[this._v("*")])])}],!1,null,"8799dcd2",null).exports),k=n(319),_=n(325),y={props:{data:{type:Object}},components:{"v-base-button":m.a,"v-base-heading":k.a,"v-base-rich-text":_.a}},w=Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block heading bg-white section--standard-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"md:w-10/12 mx-auto bg-grey-light text-center px-5 py-6 sm:pt-7 sm:pb-9"},[n("v-base-heading",{attrs:{size:"h1",color:"blue",centered:!0}},[t._v("\n        "+t._s(t.data.heading?t.data.heading:"Download Paper")+"\n      ")]),t._v(" "),t.data.introText?n("div",{staticClass:"mt-3"},[n("v-base-rich-text",{attrs:{size:"large"}},[n("span",{domProps:{innerHTML:t._s(t.data.introText)}})])],1):t._e(),t._v(" "),t.data.downloadFile?n("div",{staticClass:"mt-7"},[n("v-base-button",{attrs:{color:"yellow",data:{url:t.data.downloadFile[0].url,target:"_blank",rel:"noopener",text:t.data.downloadButtonText?t.data.downloadButtonText:"Download"}}})],1):t._e()],1)])])}),[],!1,null,null,null).exports,C={props:{data:{type:Object}},components:{"v-base-heading":k.a}},B=Object(c.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"block heading text-block bg-white section--standard-padding"},[e("div",{class:["container w-full leading-normal"]},[e("div",{staticClass:"md:w-10/12 mx-auto"},[e("v-base-heading",{attrs:{size:this.data.size,color:this.data.color,centered:this.data.centered}},[this._v("\n        "+this._s(this.data.text)+"\n      ")])],1)])])}),[],!1,null,null,null).exports,T={},E=(n(342),Object(c.a)(T,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"block horizontal-line bg-white section--standard-padding"},[e("div",{staticClass:"container"},[e("hr",{staticClass:"border-0 block w-full bg-yellow"})])])}],!1,null,null,null).exports),I={props:{data:{type:Object}},components:{"v-optimized-image":o.a},computed:{hasImageLink:function(){return this.data.imageLink&&this.data.imageLink.url&&""!==this.data.imageLink.url}}},j=Object(c.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block large-image bg-white section--standard-padding"},[n("div",{class:["container w-full leading-normal"]},[n("div",{class:["mx-auto","fullWidth"===t.data.imageWidth?"w-full":"sm:w-8/12"]},[t.data.image[0]?n("div",{class:t.data.mobileImage[0]?"hidden sm:block":""},[n(t.hasImageLink?"a":"div",{tag:"component",attrs:{href:t.hasImageLink?t.data.imageLink.url:null,target:t.hasImageLink?t.data.imageLink.target:null}},[n("v-optimized-image",{attrs:{width:t.data.image[0].width,height:t.data.image[0].height,altText:t.data.image[0].altText||null,photoCredit:t.data.image[0].photoCredit||null,variants:t.data.image[0].largeImageVariants||null,sizes:"fullWidth"===t.data.imageWidth?"1080px":"720px",classes:"mx-auto"}})],1)],1):t._e(),t._v(" "),t.data.mobileImage[0]?n("div",{staticClass:"sm:hidden"},[n(t.hasImageLink?"a":"div",{tag:"component",attrs:{href:t.hasImageLink?t.data.imageLink.url:null,target:t.hasImageLink?t.data.imageLink.target:null}},[n("v-optimized-image",{attrs:{width:t.data.mobileImage[0].width,height:t.data.mobileImage[0].height,altText:t.data.mobileImage[0].altText||null,photoCredit:t.data.image[0].photoCredit||null,variants:t.data.mobileImage[0].largeImageVariants||null,sizes:"100vw",classes:"mx-auto"}})],1)],1):t._e(),t._v(" "),t.data.caption?n("div",{staticClass:"text-sm mt-2",domProps:{innerHTML:t._s(t.data.caption)}}):t._e()])])])}),[],!1,null,null,null).exports,L={props:{data:{type:Object}},components:{"v-base-heading":k.a,"v-optimized-image":o.a}},F=Object(c.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block logos bg-white section--standard-padding"},[n("div",{class:["container w-full leading-normal"]},[n("v-base-heading",{attrs:{size:"h1",color:"blue",centered:!0}},[t._v("\n      "+t._s(t.data.heading)+"\n    ")]),t._v(" "),n("div",{staticClass:"text-center"},[t.data.logos.length>0?n("div",{staticClass:"mt-12 sm:flex sm:items-center sm:flex-wrap -mx-5 -mb-8"},t._l(t.data.logos,(function(t){return n("div",{staticClass:"w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 px-5 md:px-8 lg:px-10 mb-12 lg:mb-16 text-center mx-auto"},[n(""!==t.logoUrl?"a":"span",{tag:"component",attrs:{href:t.logoUrl||null,target:t.logoUrl?"_target":null}},[n("v-optimized-image",{attrs:{width:t.logoImage[0].width,height:t.logoImage[0].height,altText:t.logoImage[0].altText||null,variants:t.logoImage[0].logosBlockImageVariants||null,sizes:"560px",classes:"mx-auto"}})],1)],1)})),0):t._e()])],1)])}),[],!1,null,null,null).exports,z=n(1),S=n(344),O=n.n(S);z.a.use(O.a,{disabled:[768]});var P={props:{data:{type:Object}},components:{"v-base-button":m.a,"v-base-heading":k.a,"v-optimized-image":o.a}},$=(n(345),Object(c.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block programs bg-white section--standard-padding"},[n("div",{staticClass:"container mx-auto text-center"},[t.data.heading?n("v-base-heading",{attrs:{size:"h1",color:"blue",centered:!0}},[t._v("\n      "+t._s(t.data.heading)+"\n    ")]):t._e(),t._v(" "),n("div",{directives:[{name:"match-heights",rawName:"v-match-heights",value:{el:[".program-heading",".program-text"]},expression:"{\n        el: ['.program-heading', '.program-text'],\n      }"}],class:2===t.data.programEntries.length?"lg:w-8/12 mx-auto":""},[t.data.programEntries.length>0?n("div",{class:["md:flex md:flex-wrap md:-mx-6",t.data.heading?"mt-10":""]},t._l(t.data.programEntries,(function(e){return n("div",{class:["tile md:px-6 mb-10 mx-auto max-w-sm",t.data.programEntries.length>1?"md:w-1/2":"",t.data.programEntries.length>2?"lg:w-1/3":""]},[n("div",{staticClass:"mb-4 relative"},[n("a",{staticClass:"relative inline-block",attrs:{href:e.url}},[n("v-optimized-image",{attrs:{width:e.programThumbnail[0].width,height:e.programThumbnail[0].height,altText:e.programThumbnail[0].altText||null,photoCredit:e.programThumbnail[0].photoCredit||null,variants:e.programThumbnail[0].tileThumbnailImageVariants||null,sizes:"328px",classes:"mx-auto"}}),t._v(" "),e.programCategory[0]?n("span",{staticClass:"thumbnail-tag"},[t._v("\n                "+t._s(e.programCategory[0].title)+"\n              ")]):t._e()],1)]),t._v(" "),n("div",{staticClass:"program-heading flex items-center"},[n("v-base-heading",{attrs:{size:"h3",color:"grey-dark",centered:!0}},[n("a",{staticClass:"hover:underline",attrs:{href:e.url}},[t._v("\n                "+t._s(e.title)+"\n              ")])])],1),t._v(" "),e.programTeaserText?n("div",{staticClass:"program-text mt-2 text-sm",domProps:{innerHTML:t._s(e.programTeaserText)}}):t._e(),t._v(" "),n("div",{staticClass:"mt-8"},[n("v-base-button",{attrs:{color:"yellow",data:{url:e.url,text:"Learn More"}}})],1)])})),0):t._e()])],1)])}),[],!1,null,"79aae643",null).exports),M={props:{data:{type:Object}},computed:{textSizeClass:function(){return"large"===this.data.textSize?"text-base sm:text-lg":"small"===this.data.textSize?"text-sm":"text-base"}}},H=Object(c.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"block rich-text text-block bg-white section--standard-padding"},[e("div",{class:["container w-full leading-normal",this.textSizeClass]},[e("div",{staticClass:"md:w-10/12 mx-auto"},[e("div",{domProps:{innerHTML:this._s(this.data.text)}})])])])}),[],!1,null,null,null).exports,W={props:{data:{type:Object}},components:{"v-optimized-image":o.a}},A=Object(c.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block team-members bg-white section--standard-padding"},[n("div",{staticClass:"container mx-auto text-center"},[n("div",{staticClass:"flex flex-wrap"},t._l(t.data.entries,(function(e){return n("div",{staticClass:"w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-8 lg:mb-12 mx-auto"},[n("a",{staticClass:"block mx-auto",staticStyle:{"max-width":"180px"},attrs:{href:e.url}},[n("v-optimized-image",{attrs:{width:e.teamMemberPhoto[0].width||null,height:e.teamMemberPhoto[0].height||null,altText:e.teamMemberPhoto[0].altText||null,variants:e.teamMemberPhoto[0].teamMemberImageVariants||null,sizes:"180px",classes:"mx-auto"}})],1),t._v(" "),n("p",{staticClass:"font-semibold uppercase tracking-1/2 text-xl mt-5 lg:mt-7"},[n("a",{staticClass:"hover:underline",attrs:{href:e.url}},[t._v("\n            "+t._s(e.firstName)+"\n            "+t._s(e.lastName)+"\n          ")])]),t._v(" "),n("p",{staticClass:"text-blue mt-1"},[n("a",{attrs:{href:e.url}},[t._v("\n            "+t._s(e.position)+"\n          ")])])])})),0)])])}),[],!1,null,null,null).exports,N={props:{data:{type:Object}},computed:{url:function(){return""===this.data.videoId?null:"youtube"===this.data.platform?"https://www.youtube-nocookie.com/embed/"+this.data.videoId:"vimeo"===this.data.platform?"https://player.vimeo.com/video/"+this.data.videoId+"?dnt=1":null}}},V=(n(347),Object(c.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"block video bg-white section--standard-padding"},[e("div",{class:["container w-full leading-normal"]},[e("div",{staticClass:"sm:w-8/12 mx-auto"},[e("div",{staticClass:"video-wrapper"},[e("iframe",{attrs:{src:this.url,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})])])])])}),[],!1,null,"4fd1ce44",null).exports),D="\n\n    ".concat("\n    fragment BlockAlignedImageFragment on pageBlocks_alignedImage_BlockType {\n        id\n        typeHandle\n        caption\n        alignment\n        image {\n            ... on pageImages_Asset {\n                altText\n                photoCredit\n                width\n                height\n                largeImageVariants {\n                    src\n                    srcset\n                    srcWebp\n                    srcsetWebp\n                    maxSrcsetWidth\n                    placeholderImage\n                    placeholderBox\n                    placeholderSilhouette\n                    focalPoint\n                }\n            }\n        }\n        imageLink {\n            target\n            url\n        }\n    }","\n    ").concat("\n    fragment BlockButtonsFragment on pageBlocks_buttons_BlockType {\n        id\n        typeHandle\n        buttons {\n            ... on buttons_BlockType {\n                id\n                button {\n                    target\n                    text\n                    url\n                }\n            }\n        }\n    }","\n    ").concat("\n    fragment BlockContactFormFragment on pageBlocks_contactForm_BlockType {\n        id\n        typeHandle\n        confirmationText\n    }","\n    ").concat("\n    fragment BlockDownloadFragment on pageBlocks_download_BlockType {\n        id\n        typeHandle\n        heading\n        introText\n        downloadFile {\n            url\n        }\n        downloadButtonText\n    }","\n    ").concat("\n    fragment BlockHeadingFragment on pageBlocks_heading_BlockType {\n        id\n        typeHandle\n        text\n        centered\n        size\n        color\n    }","\n    ").concat("\n    fragment BlockHorizontalLineFragment on pageBlocks_horizontalLine_BlockType {\n        id\n        typeHandle\n    }","\n    ").concat("\n    fragment BlockLargeImageFragment on pageBlocks_largeImage_BlockType {\n        id\n        typeHandle\n        caption\n        imageWidth\n        image {\n            ... on pageImages_Asset {\n                altText\n                photoCredit\n                width\n                height\n                largeImageVariants {\n                    src\n                    srcset\n                    srcWebp\n                    srcsetWebp\n                    maxSrcsetWidth\n                    placeholderImage\n                    placeholderBox\n                    placeholderSilhouette\n                    focalPoint\n                }\n            }\n        }\n        mobileImage {\n            ... on pageImages_Asset {\n                altText\n                width\n                height\n                largeImageVariants {\n                    src\n                    srcset\n                    srcWebp\n                    srcsetWebp\n                    maxSrcsetWidth\n                    placeholderImage\n                    placeholderBox\n                    placeholderSilhouette\n                    focalPoint\n                }\n            }\n        }\n        imageLink {\n            target\n            url\n        }\n    }","\n    ").concat("\n    fragment BlockLogosFragment on pageBlocks_logos_BlockType {\n        id\n        typeHandle\n        heading\n        logos {\n            ... on logos_BlockType {\n                id\n                logoImage {\n                    ... on logos_Asset {\n                        width\n                        height\n                        logosBlockImageVariants {\n                            src\n                            srcset\n                            srcWebp\n                            srcsetWebp\n                            maxSrcsetWidth\n                            placeholderImage\n                            placeholderBox\n                            placeholderSilhouette\n                            focalPoint\n                        }\n                        altText\n                    }\n                }\n                logoUrl\n            }\n        }\n    }","\n    ").concat("\n    fragment BlockProgramsFragment on pageBlocks_programs_BlockType {\n        typeHandle\n        heading\n        programEntries {\n            ... on programs_program_Entry {\n                id\n                title\n                url\n                programCategory {\n                    ... on programCategories_Category {\n                        id\n                        title\n                    }\n                }\n                programTeaserText\n                programThumbnail {\n                    ... on pageImages_Asset {\n                        altText\n                        photoCredit\n                        width\n                        height\n                        tileThumbnailImageVariants {\n                            src\n                            srcset\n                            srcWebp\n                            srcsetWebp\n                            maxSrcsetWidth\n                            placeholderImage\n                            placeholderBox\n                            placeholderSilhouette\n                            focalPoint\n                        }\n                    }\n                }\n            }\n        }\n    }","\n    ").concat("\n    fragment BlockRichTextFragment on pageBlocks_richText_BlockType {\n        id\n        typeHandle\n        text\n        textSize\n    }","\n    ").concat("\n    fragment BlockTeamMembersFragment on pageBlocks_teamMembers_BlockType {\n        typeHandle\n        entries {\n            ... on teamMembers_teamMember_Entry {\n                url\n                firstName\n                lastName\n                position,\n                teamMemberPhoto {\n                    ... on teamImages_Asset {\n                        altText\n                        width\n                        height\n                        teamMemberImageVariants {\n                            src\n                            srcset\n                            srcWebp\n                            srcsetWebp\n                            maxSrcsetWidth\n                            placeholderImage\n                            placeholderBox\n                            placeholderSilhouette\n                            focalPoint\n                        }\n                    }\n                }\n            }\n        }\n    }","\n    ").concat("\n    fragment BlockVideoFragment on pageBlocks_video_BlockType {\n        id\n        typeHandle\n        platform\n        videoId\n    }","\n\n    query getEntry($id: [QueryArgument]) {\n        entry(id: $id) {\n            ... on pages_standardPage_Entry {\n                pageBlocks {\n                    ... BlockAlignedImageFragment\n                    ... BlockButtonsFragment\n                    ... BlockContactFormFragment\n                    ... BlockDownloadFragment\n                    ... BlockHeadingFragment\n                    ... BlockHorizontalLineFragment\n                    ... BlockLargeImageFragment\n                    ... BlockLogosFragment\n                    ... BlockProgramsFragment\n                    ... BlockRichTextFragment\n                    ... BlockTeamMembersFragment\n                    ... BlockVideoFragment\n                }\n            }\n\n            ... on homepage_homepage_Entry {\n                pageBlocks {\n                    ... BlockAlignedImageFragment\n                    ... BlockButtonsFragment\n                    ... BlockContactFormFragment\n                    ... BlockDownloadFragment\n                    ... BlockHeadingFragment\n                    ... BlockHorizontalLineFragment\n                    ... BlockLargeImageFragment\n                    ... BlockLogosFragment\n                    ... BlockProgramsFragment\n                    ... BlockRichTextFragment\n                    ... BlockTeamMembersFragment\n                    ... BlockVideoFragment\n                }\n            }\n\n            ... on programs_program_Entry {\n                pageBlocks {\n                    ... BlockAlignedImageFragment\n                    ... BlockButtonsFragment\n                    ... BlockContactFormFragment\n                    ... BlockDownloadFragment\n                    ... BlockHeadingFragment\n                    ... BlockHorizontalLineFragment\n                    ... BlockLargeImageFragment\n                    ... BlockLogosFragment\n                    ... BlockProgramsFragment\n                    ... BlockRichTextFragment\n                    ... BlockTeamMembersFragment\n                    ... BlockVideoFragment\n                }\n            }\n        }\n    }\n\n"),J={data:function(){return{entry:{}}},props:{entryId:String,blocks:Array,objectType:String},components:{"v-block-alignedImage":d,"v-block-buttons":f,"v-block-contactForm":x,"v-block-download":w,"v-block-heading":B,"v-block-horizontalLine":E,"v-block-largeImage":j,"v-block-logos":F,"v-block-programs":$,"v-block-richText":H,"v-block-teamMembers":A,"v-block-video":V},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:D,variables:{id:t.entryId,objectType:t.objectType}});case 2:n=e.sent,t.entry=n.data.entry;case 4:case"end":return e.stop()}}),e)})))()}},R=(n(349),Object(c.a)(J,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.entry?e("div",{staticClass:"blocks-container"},this._l(this.entry.pageBlocks,(function(t){return e("v-block-"+t.typeHandle,{key:"block-"+t.id,tag:"component",attrs:{data:t}})})),1):this._e()])}),[],!1,null,null,null));e.a=R.exports},323:function(t,e,n){"use strict";var r=n(316);n.n(r).a},324:function(t,e,n){(e=n(25)(!1)).push([t.i,"img[data-v-7e513ed9]{height:auto;max-width:100%}",""]),t.exports=e},325:function(t,e,n){"use strict";var r={props:{size:{type:String}},computed:{textSizeClass:function(){return"large"===this.size?"text-base sm:text-lg":"small"===this.size?"text-sm":"text-base"}}},o=n(7),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["leading-normal rich-text",this.textSizeClass]},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},326:function(t,e,n){"use strict";var r={props:{color:String,data:Object,classNames:String}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{class:["btn",t.classNames,"yellow"===t.color?"bg-yellow text-grey-dark hover:bg-yellow-hover":"bg-grey-dark text-white hover:bg-black"],attrs:{href:t.data.url,target:t.data.target,rel:t.data.rel}},[t._v("\n  "+t._s(t.data.text)+"\n")])}),[],!1,null,null,null);e.a=component.exports},327:function(t,e,n){var content=n(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("400d22df",content,!0,{sourceMap:!1})},328:function(t,e,n){var content=n(343);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("18c7b1ea",content,!0,{sourceMap:!1})},329:function(t,e,n){var content=n(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7367036d",content,!0,{sourceMap:!1})},330:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2adb8cf8",content,!0,{sourceMap:!1})},331:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c33bf7d0",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";var r=n(327);n.n(r).a},341:function(t,e,n){(e=n(25)(!1)).push([t.i,"fieldset[data-v-8799dcd2]{margin-bottom:1.25rem}label[data-v-8799dcd2]{font-weight:600;display:block;margin-bottom:.25rem}textarea[data-v-8799dcd2]{height:240px;resize:none}fieldset .error[data-v-8799dcd2]{display:none}fieldset.has-error .error[data-v-8799dcd2]{display:block}fieldset.has-error label[data-v-8799dcd2],fieldset.has-error label span[data-v-8799dcd2]{--text-opacity:1;color:#c00;color:rgba(204,0,0,var(--text-opacity))}",""]),t.exports=e},342:function(t,e,n){"use strict";var r=n(328);n.n(r).a},343:function(t,e,n){(e=n(25)(!1)).push([t.i,"hr{height:2px}",""]),t.exports=e},344:function(t,e,n){"use strict";function r(t){var e=document.querySelectorAll(t),n=function(t){var e=0;return[].forEach.call(t,(function(element){element.offsetHeight>e&&(e=element.offsetHeight)})),e}(e);[].forEach.call(e,(function(element){element.style.height=n+"px"}))}function o(t,e){if(void 0===t&&(t=[]),void 0===e&&(e=[]),function(t){[].forEach.call(t,(function(t){var e=document.querySelectorAll(t);[].forEach.call(e,(function(element){!function(element){element.style.removeProperty("height")}(element)}))}))}(t),!function(t){var e=!0;return t.forEach((function(t){var n,r=0,o=t;"object"==typeof t&&(r=(n=t)[0],o=n[1]);window.innerWidth>r&&window.innerWidth<o&&(e=!1)})),e}(e))return!1;t.forEach(r)}function l(t,e){void 0===e&&(e={}),t.directive("match-heights",{bind:function(n,r){function l(){o(r.value.el,r.value.disabled||e.disabled||[])}l(),window.addEventListener("resize",l),t.nextTick(l)},inserted:function(t,n){function r(){o(n.value.el,n.value.disabled||e.disabled||[])}[].forEach.call(document.querySelectorAll(n.value.el),(function(t){[].forEach.call(t.querySelectorAll("img"),(function(img){img.addEventListener("load",r)}))})),t.addEventListener("matchheight",r,!1),document.addEventListener("matchheight",r,!1)},unbind:function(t,e){}})}l.version="0.1.0","undefined"!=typeof window&&window.Vue&&window.Vue.use(l),t.exports=l},345:function(t,e,n){"use strict";var r=n(329);n.n(r).a},346:function(t,e,n){(e=n(25)(!1)).push([t.i,"@media (max-width:767px){.tile[data-v-79aae643]{max-width:328px}}",""]),t.exports=e},347:function(t,e,n){"use strict";var r=n(330);n.n(r).a},348:function(t,e,n){(e=n(25)(!1)).push([t.i,".video-wrapper[data-v-4fd1ce44]{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-wrapper embed[data-v-4fd1ce44],.video-wrapper iframe[data-v-4fd1ce44],.video-wrapper object[data-v-4fd1ce44]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},349:function(t,e,n){"use strict";var r=n(331);n.n(r).a},350:function(t,e,n){(e=n(25)(!1)).push([t.i,"section.block.bg-white+section.block.bg-white{padding-top:0}section.block.text-block+section.block.text-block{margin-top:-1rem}@media (min-width:768px){section.block.text-block+section.block.text-block{margin-top:-2rem}}section.block.rich-text+section.block.heading{margin-top:-.5rem}@media (min-width:768px){section.block.rich-text+section.block.heading{margin-top:-1rem}}section.block.heading+section.block.aligned-image{margin-top:-.5rem}@media (min-width:768px){section.block.heading+section.block.aligned-image{margin-top:-1rem}}.blocks-container section.block.bg-white:last-child{padding-bottom:4rem}",""]),t.exports=e}}]);