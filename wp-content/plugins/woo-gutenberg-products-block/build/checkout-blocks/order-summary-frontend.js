(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[5915],{1037:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(9307),s=n(3554),r=n(6484),c=n(7350),o=n(4333),l=n(9075),i=n(4617),d=n(9127),p=n.n(d),u=n(3340),m=n(9822),g=n(6767);const b=Object.keys(i.defaultAddressFields),k=(0,o.withInstanceId)((({id:e="",fields:t=b,fieldConfig:n={},instanceId:o,onChange:i,type:d="shipping",values:k})=>{const h=(0,l.s)(t),y=(0,l.s)(n),f=(0,l.s)(k.country),v=(0,a.useMemo)((()=>{const e=(0,u.Z)(h,y,f);return{fields:e,type:d,required:e.filter((e=>e.required)),hidden:e.filter((e=>e.hidden))}}),[h,y,f,d]),_=(0,a.useRef)({});return(0,a.useEffect)((()=>{const e={...k,...Object.fromEntries(v.hidden.map((e=>[e.key,""])))};p()(k,e)||i(e)}),[i,v,k]),(0,a.useEffect)((()=>{"shipping"===d&&(0,m.Z)(k)}),[k,d]),(0,a.useEffect)((()=>{var e,t;null===(e=_.current)||void 0===e||null===(t=e.postcode)||void 0===t||t.revalidate()}),[f]),e=e||o,(0,a.createElement)("div",{id:e,className:"wc-block-components-address-form"},v.fields.map((t=>{if(t.hidden)return null;const n={id:`${e}-${t.key}`,errorId:`${d}_${t.key}`,label:t.required?t.label:t.optionalLabel,autoCapitalize:t.autocapitalize,autoComplete:t.autocomplete,errorMessage:t.errorMessage,required:t.required,className:`wc-block-components-address-form__${t.key}`};if("country"===t.key){const e="shipping"===d?r.he:r.eQ;return(0,a.createElement)(e,{key:t.key,...n,value:k.country,onChange:e=>{const t={...k,country:e,state:""};k.postcode&&!(0,s.isPostcode)({postcode:k.postcode,country:e})&&(t.postcode=""),i(t)}})}if("state"===t.key){const e="shipping"===d?c.dI:c.IG;return(0,a.createElement)(e,{key:t.key,...n,country:k.country,value:k.state,onChange:e=>i({...k,state:e})})}return(0,a.createElement)(s.ValidatedTextInput,{key:t.key,ref:e=>_.current[t.key]=e,...n,value:k[t.key],onChange:e=>i({...k,[t.key]:e}),customFormatter:e=>"postcode"===t.key?e.trimStart().toUpperCase():e,customValidation:e=>(0,g.Z)(e,t.key,k)})})))}))},5182:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(9307),s=n(4184),r=n.n(s),c=n(5736),o=n(2629),l=n(3554),i=n(6674),d=n(5027),p=n(3087),u=n(4799),m=n(9097),g=n(4293),b=n(9226),k=n(4617);const h=e=>{const t=(0,k.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:(0,o.decodeEntities)(e.name),value:e.rate_id,description:(0,a.createElement)(a.Fragment,null,Number.isFinite(t)&&(0,a.createElement)(b.Z,{currency:(0,g.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,(0,o.decodeEntities)(e.delivery_time))}},y=({className:e="",noResultsMessage:t,onSelectRate:n,rates:s,renderOption:r=h,selectedRate:c,disabled:o=!1})=>{const l=(null==c?void 0:c.rate_id)||"",i=(0,m.D)(l),[d,p]=(0,a.useState)((()=>{var e;return l||(null===(e=s[0])||void 0===e?void 0:e.rate_id)}));if((0,a.useEffect)((()=>{l&&l!==i&&l!==d&&p(l)}),[l,d,i]),(0,a.useEffect)((()=>{d&&n(d)}),[n,d]),0===s.length)return t;if(s.length>1)return(0,a.createElement)(u.ZP,{className:e,onChange:e=>{p(e),n(e)},disabled:o,selected:d,options:s.map(r)});const{label:g,secondaryLabel:b,description:k,secondaryDescription:y}=r(s[0]);return(0,a.createElement)(u.GC,{label:g,secondaryLabel:b,description:k,secondaryDescription:y})};n(6125);const f=({packageId:e,className:t="",noResultsMessage:n,renderOption:s,packageData:u,collapsible:m,showItems:g})=>{const{selectShippingRate:b,isSelectingRate:k}=(0,d.V)(),h=document.querySelectorAll(".wc-block-components-shipping-rates-control__package").length>1,f=null!=g?g:h,v=null!=m?m:h,_=(0,a.createElement)(a.Fragment,null,(v||f)&&(0,a.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:(0,p.j)(u.name)}}),f&&(0,a.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(u.items).map((e=>{const t=(0,o.decodeEntities)(e.name),n=e.quantity;return(0,a.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},(0,a.createElement)(i.Z,{label:n>1?`${t} × ${n}`:`${t}`,screenReaderLabel:(0,c.sprintf)(/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
(0,c._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woo-gutenberg-products-block"),t,n)}))})))),E=(0,a.useCallback)((t=>{b(t,e)}),[e,b]),w={className:t,noResultsMessage:n,rates:u.shipping_rates,onSelectRate:E,selectedRate:u.shipping_rates.find((e=>e.selected)),renderOption:s,disabled:k};return v?(0,a.createElement)(l.Panel,{className:r()("wc-block-components-shipping-rates-control__package",t,{"wc-block-components-shipping-rates-control__package--disabled":k}),initialOpen:!1,title:_},(0,a.createElement)(y,{...w})):(0,a.createElement)("div",{className:r()("wc-block-components-shipping-rates-control__package",t,{"wc-block-components-shipping-rates-control__package--disabled":k})},_,(0,a.createElement)(y,{...w}))}},4401:(e,t,n)=>{"use strict";n.d(t,{R:()=>r});var a=n(5736),s=n(5158);const r=(e,t)=>{1===e?(0,s.speak)((0,a.sprintf)(/* translators: %d number of shipping options found. */
(0,a._n)("%d shipping option was found.","%d shipping options were found.",t,"woo-gutenberg-products-block"),t)):(0,s.speak)((0,a.sprintf)(/* translators: %d number of shipping packages packages. */
(0,a._n)("Shipping option searched for %d package.","Shipping options searched for %d packages.",e,"woo-gutenberg-products-block"),e)+" "+(0,a.sprintf)(/* translators: %d number of shipping options available. */
(0,a._n)("%d shipping option was found","%d shipping options were found",t,"woo-gutenberg-products-block"),t))}},9226:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(9307),s=n(7333),r=n(4184),c=n.n(r);n(5476);const o=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0}),l=({className:e,value:t,currency:n,onValueChange:r,displayType:l="text",...i})=>{var d;const p="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(p))return null;const u=p/10**n.minorUnit;if(!Number.isFinite(u))return null;const m=c()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),g=null!==(d=i.decimalScale)&&void 0!==d?d:null==n?void 0:n.minorUnit,b={...i,...o(n),decimalScale:g,value:void 0,currency:void 0,onValueChange:void 0},k=r?e=>{const t=+e.value*10**n.minorUnit;r(t)}:()=>{};return(0,a.createElement)(s.Z,{className:m,displayType:l,...b,value:u,onValueChange:k})}},6674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(9307),s=n(4184),r=n.n(s);const c=({label:e,screenReaderLabel:t,wrapperElement:n,wrapperProps:s={}})=>{let c;const o=null!=e,l=null!=t;return!o&&l?(c=n||"span",s={...s,className:r()(s.className,"screen-reader-text")},(0,a.createElement)(c,{...s},t)):(c=n||a.Fragment,o&&l&&e!==t?(0,a.createElement)(c,{...s},(0,a.createElement)("span",{"aria-hidden":"true"},e),(0,a.createElement)("span",{className:"screen-reader-text"},t)):(0,a.createElement)(c,{...s},e))}},1193:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(9307),s=n(5736),r=n(4184),c=n.n(r),o=(n(6575),n(5068));const l=({children:e,className:t,screenReaderLabel:n,showSpinner:r=!1,isLoading:l=!0})=>(0,a.createElement)("div",{className:c()(t,{"wc-block-components-loading-mask":l})},l&&r&&(0,a.createElement)(o.Z,null),(0,a.createElement)("div",{className:c()({"wc-block-components-loading-mask__children":l}),"aria-hidden":l},e),l&&(0,a.createElement)("span",{className:"screen-reader-text"},n||(0,s.__)("Loading…","woo-gutenberg-products-block")))},395:(e,t,n)=>{"use strict";n.d(t,{X:()=>o,x:()=>c});var a=n(8184),s=n(5430),r=n(5045);const c=e=>{switch(e){case"success":case"warning":case"info":case"default":return"polite";default:return"assertive"}},o=e=>{switch(e){case"success":return a.Z;case"warning":case"info":case"error":return s.Z;default:return r.Z}}},4799:(e,t,n)=>{"use strict";n.d(t,{GC:()=>l.Z,ZP:()=>d});var a=n(9307),s=n(4184),r=n.n(s),c=n(4333),o=n(8802),l=(n(7546),n(2480));const i=({className:e="",id:t,selected:n="",onChange:s,options:l=[],disabled:d=!1})=>{const p=(0,c.useInstanceId)(i),u=t||p;return l.length?(0,a.createElement)("div",{className:r()("wc-block-components-radio-control",e)},l.map((e=>(0,a.createElement)(o.Z,{key:`${u}-${e.value}`,name:`radio-control-${u}`,checked:e.value===n,option:e,onChange:t=>{s(t),"function"==typeof e.onChange&&e.onChange(t)},disabled:d})))):null},d=i},8802:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(9307),s=n(4184),r=n.n(s),c=n(2480);const o=({checked:e,name:t,onChange:n,option:s,disabled:o=!1})=>{const{value:l,label:i,description:d,secondaryLabel:p,secondaryDescription:u}=s;return(0,a.createElement)("label",{className:r()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":e}),htmlFor:`${t}-${l}`},(0,a.createElement)("input",{id:`${t}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:t,value:l,onChange:e=>n(e.target.value),checked:e,"aria-describedby":r()({[`${t}-${l}__label`]:i,[`${t}-${l}__secondary-label`]:p,[`${t}-${l}__description`]:d,[`${t}-${l}__secondary-description`]:u}),disabled:o}),(0,a.createElement)(c.Z,{id:`${t}-${l}`,label:i,secondaryLabel:p,description:d,secondaryDescription:u}))}},5068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(9307);n(5589);const s=()=>(0,a.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},6136:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var a=n(9307),s=n(8945),r=n(4293),c=n(4055),o=n(3554);const l=()=>{const{extensions:e,receiveCart:t,...n}=(0,c.b)(),s={extensions:e,cart:n,context:"woocommerce/checkout"};return(0,a.createElement)(o.ExperimentalOrderMeta.Slot,{...s})},i=({children:e,className:t=""})=>{const{cartTotals:n}=(0,c.b)(),o=(0,r.getCurrencyFromPriceResponse)(n);return(0,a.createElement)("div",{className:t},e,(0,a.createElement)("div",{className:"wc-block-components-totals-wrapper"},(0,a.createElement)(s.Br,{currency:o,values:n})),(0,a.createElement)(l,null))}},6575:()=>{},5589:()=>{}}]);