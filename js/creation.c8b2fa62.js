(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creation"],{2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a("6b75");function n(e){if(Array.isArray(e))return Object(r["a"])(e)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var i=a("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return n(e)||s(e)||Object(i["a"])(e)||o()}},"7a1f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",[e._v(e._s(e.$t("forms.createSchema.title")))]),a("p",[e._v(e._s(e.$t("forms.createSchema.description")))]),a("form",{staticClass:"form col-6 offset-3 mt-5",on:{submit:function(t){return t.preventDefault(),e.proccessFile()}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-captilize",attrs:{for:"name"}},[e._v(" "+e._s(e.$t("app.forms.group"))+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schemaGroup,expression:"schemaGroup"}],staticClass:"form-control",attrs:{type:"text",name:"group",id:"group",placeholder:e.$t("app.forms.groupPlaceholder")},domProps:{value:e.schemaGroup},on:{input:function(t){t.target.composing||(e.schemaGroup=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-capitalize",attrs:{for:"name"}},[e._v(e._s(e.$t("app.forms.name")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.schemaName,expression:"schemaName"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:e.$t("app.forms.namePlaceholder")},domProps:{value:e.schemaName},on:{input:function(t){t.target.composing||(e.schemaName=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-capitalize",attrs:{for:"structure"}},[e._v(" "+e._s(e.$t("app.forms.structure"))+" ")]),a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{id:"structure",name:"structure",type:"file",accept:".csv"},on:{change:function(t){return e.filesChange(t.target.name,t.target.files)}}}),a("label",{staticClass:"custom-file-label",attrs:{for:"structure","aria-describedby":"structure"}},[e._v(" "+e._s(e.filePlaceholder)+" ")])])]),a("div",{staticClass:"form-group d-flex"},[a("router-link",{staticClass:"btn btn-danger w-100 mr-1 text-capitalize",attrs:{to:{name:"Home"},type:"button"}},[e._v(" "+e._s(e.$t("app.forms.buttons.cancel"))+" ")]),a("button",{staticClass:"btn btn-success w-100 ml-1 text-capitalize",attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("app.forms.buttons.next"))+" ")])],1)])])},n=[],s=(a("b0c0"),a("96cf"),a("1da1")),i=a("bc3a"),o=a.n(i),c={name:"CreateSchema",data:function(){return{schemaGroup:"",schemaName:"",file:null}},computed:{filePlaceholder:function(){return null!==this.file?this.file.name:this.$t("forms.createSchema.filePlaceholder")}},methods:{proccessFile:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.set("group",t.schemaGroup),a.set("name",t.schemaName),a.set("structure",t.file),e.next=6,o.a.post("api/schemas/process-file",a);case 6:r=e.sent,t.$router.push({name:"SchemaConfiguration",params:{name:r.data.name,schema:r.data}});case 8:case"end":return e.stop()}}),e)})))()},filesChange:function(e,t){this.file=t[0]}}},u=c,l=a("2877"),m=Object(l["a"])(u,r,n,!1,null,null,null);t["default"]=m.exports},"8eb9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v(e._s(e.$t("forms.schemaConfiguration.title")))]),a("p",[e._v(e._s(e.$t("forms.schemaConfiguration.description")))]),a("form",{staticClass:"form mt-5 col-6 offset-3",on:{submit:function(t){return t.preventDefault(),e.save()}}},[e._l(e.fields,(function(t){return a("div",{key:t.name,staticClass:"form-group"},[a("label",{attrs:{for:t.name}},[e._v(e._s(t.name))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"field.type"}],staticClass:"form-control",attrs:{id:t.name,name:t.name,type:"text"},domProps:{value:t.type},on:{input:function(a){a.target.composing||e.$set(t,"type",a.target.value)}}})])})),a("div",{staticClass:"form-group d-flex mb-5"},[a("router-link",{staticClass:"btn btn-danger w-100 mr-1",attrs:{to:{name:"Home"}}},[e._v(" "+e._s(e.$t("app.forms.buttons.cancel"))+" ")]),a("button",{staticClass:"btn btn-success w-100 ml-1",attrs:{type:"submit"}},[e._v(" "+e._s(e.$t("forms.schemaConfiguration.buttons.createSchema"))+" ")])],1)],2)])},n=[],s=(a("99af"),a("4de4"),a("d81d"),a("13d5"),a("b0c0"),a("4fad"),a("b64b"),a("ac1f"),a("1276"),a("2909")),i=a("3835"),o=a("b85c"),c=(a("96cf"),a("1da1")),u=a("5530"),l=a("bc3a"),m=a.n(l),f=a("2f62"),p=a("3ce9"),d={name:"SchemaConfiguration",props:{schema:{type:Object,require:!0}},data:function(){return{fields:[]}},mounted:function(){var e=this.$route.params.schema.structure;this.fields=this.filterObjectsFields(e)},methods:Object(u["a"])(Object(u["a"])({},Object(f["c"])({addSchema:p["a"]})),{},{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=Object(o["a"])(e.fields);try{for(a.s();!(r=a.n()).done;)n=r.value,s=n.name.split(".").reduce((function(e,t){return e[t]}),e.schema.structure),s.meta.fieldType=n.type}catch(i){a.e(i)}finally{a.f()}return t.next=4,m.a.post("api/schemas",e.schema);case 4:e.addSchema({group:e.schema.group,name:e.schema.name}),e.$router.push({name:"SchemaViewer",params:{name:e.schema.name}});case 6:case"end":return t.stop()}}),t)})))()},filterObjectsFields:function(e){var t,a=[],r=Object.entries(e).filter((function(e){var t=Object(i["a"])(e,1),a=t[0];return"meta"!==a})),n=Object(o["a"])(r);try{for(n.s();!(t=n.n()).done;){var c=Object(i["a"])(t.value,2),u=c[0],l=c[1];if(this.isObjectField(l)&&a.push(this.createField(u,l.meta.fieldType)),this.existsSubfields(l)){var m=this.mapSubfields({key:u,value:l});a.push.apply(a,Object(s["a"])(m))}}}catch(f){n.e(f)}finally{n.f()}return a},isObjectField:function(e){var t=this.getFields(e);return 0!==t.length||"Enum"===e.meta.fieldType||"Field"===e.meta.fieldType},createField:function(e,t){return{name:e,type:t}},existsSubfields:function(e){var t=this.getFields(e);return 0!==t.length},getFields:function(e){return Object.keys(e).filter((function(e){return"meta"!==e}))},mapSubfields:function(e){var t=this,a=e.key,r=e.value;return this.filterObjectsFields(r).map((function(e){return t.createField("".concat(a,".").concat(e.name),e.type)}))}})},h=d,b=a("2877"),v=Object(b["a"])(h,r,n,!1,null,null,null);t["default"]=v.exports},"99af":function(e,t,a){"use strict";var r=a("23e7"),n=a("d039"),s=a("e8b5"),i=a("861d"),o=a("7b0b"),c=a("50c4"),u=a("8418"),l=a("65f0"),m=a("1dde"),f=a("b622"),p=a("2d00"),d=f("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",v=p>=51||!n((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),y=m("concat"),g=function(e){if(!i(e))return!1;var t=e[d];return void 0!==t?!!t:s(e)},C=!v||!y;r({target:"Array",proto:!0,forced:C},{concat:function(e){var t,a,r,n,s,i=o(this),m=l(i,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?i:arguments[t],g(s)){if(n=c(s.length),f+n>h)throw TypeError(b);for(a=0;a<n;a++,f++)a in s&&u(m,f,s[a])}else{if(f>=h)throw TypeError(b);u(m,f++,s)}return m.length=f,m}})},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("a4d3"),a("e01a"),a("d28b"),a("d3b7"),a("3ca3"),a("ddb0");var r=a("06c5");function n(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(r["a"])(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,s=function(){};return{s:s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(c)throw i}}}}}}]);
//# sourceMappingURL=creation.c8b2fa62.js.map