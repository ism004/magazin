(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[7413],{30:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var c=o(9307),i=o(4184),n=o.n(i),s=o(7914);o(7424);const r=({title:e,stepHeadingContent:t})=>(0,c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},(0,c.createElement)(s.Z,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},e),!!t&&(0,c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},t)),a=({id:e,className:t,title:o,legend:i,description:s,children:a,disabled:l=!1,showStepNumber:p=!0,stepHeadingContent:d=(()=>{})})=>{const u=i||o?"fieldset":"div";return(0,c.createElement)(u,{className:n()(t,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":l}),id:e,disabled:l},!(!i&&!o)&&(0,c.createElement)("legend",{className:"screen-reader-text"},i||o),!!o&&(0,c.createElement)(r,{title:o,stepHeadingContent:d()}),(0,c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!s&&(0,c.createElement)("p",{className:"wc-block-components-checkout-step__description"},s),(0,c.createElement)("div",{className:"wc-block-components-checkout-step__content"},a)))}},9226:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var c=o(9307),i=o(7333),n=o(4184),s=o.n(n);o(5476);const r=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0}),a=({className:e,value:t,currency:o,onValueChange:n,displayType:a="text",...l})=>{var p;const d="string"==typeof t?parseInt(t,10):t;if(!Number.isFinite(d))return null;const u=d/10**o.minorUnit;if(!Number.isFinite(u))return null;const h=s()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",e),m=null!==(p=l.decimalScale)&&void 0!==p?p:null==o?void 0:o.minorUnit,g={...l,...r(o),decimalScale:m,value:void 0,currency:void 0,onValueChange:void 0},k=n?e=>{const t=+e.value*10**o.minorUnit;n(t)}:()=>{};return(0,c.createElement)(i.Z,{className:h,displayType:a,...g,value:u,onValueChange:k})}},7914:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var c=o(9307),i=o(4184),n=o.n(i);o(5198);const s=({children:e,className:t,headingLevel:o,...i})=>{const s=n()("wc-block-components-title",t),r=`h${o}`;return(0,c.createElement)(r,{className:s,...i},e)}},9490:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var c=o(5736);const i=({defaultTitle:e=(0,c.__)("Step","woo-gutenberg-products-block"),defaultDescription:t=(0,c.__)("Step description text.","woo-gutenberg-products-block"),defaultShowStepNumber:o=!0})=>({title:{type:"string",default:e},description:{type:"string",default:t},showStepNumber:{type:"boolean",default:o}})},8191:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Z});var c=o(9307),i=o(4184),n=o.n(i),s=o(721),r=o(30),a=o(9818),l=o(4801),p=o(5027),d=o(5271),u=o(5736),h=o(1789),m=o(8557),g=o(1984),k=o(1526),_=o(6520),b=o(602),w=o(4617),v=o(4293),E=o(9226);const f=({minRate:e,maxRate:t,multiple:o=!1})=>{if(void 0===e||void 0===t)return null;const i=(0,w.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10),n=(0,w.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(t.price,10)+parseInt(t.taxes,10):parseInt(t.price,10),s=0===i?(0,c.createElement)("em",null,(0,u.__)("free","woo-gutenberg-products-block")):(0,c.createElement)(E.Z,{currency:(0,v.getCurrencyFromPriceResponse)(e),value:i});return(0,c.createElement)("span",{className:"wc-block-checkout__shipping-method-option-price"},i!==n||o?(0,c.createInterpolateElement)(0===i&&0===n?"<price />":(0,u.__)("from <price />","woo-gutenberg-products-block"),{price:s}):s)};function x(e){return e?{min:e.reduce(((e,t)=>(0,b.Ep)(t.method_id)?e:void 0===e||parseInt(t.price,10)<parseInt(e.price,10)?t:e),void 0),max:e.reduce(((e,t)=>(0,b.Ep)(t.method_id)?e:void 0===e||parseInt(t.price,10)>parseInt(e.price,10)?t:e),void 0)}:{min:void 0,max:void 0}}function N(e){return e?{min:e.reduce(((e,t)=>(0,b.Ep)(t.method_id)&&(void 0===e||t.price<e.price)?t:e),void 0),max:e.reduce(((e,t)=>(0,b.Ep)(t.method_id)&&(void 0===e||t.price>e.price)?t:e),void 0)}:{min:void 0,max:void 0}}const C=(0,u.__)("Local Pickup","woo-gutenberg-products-block"),S=(0,u.__)("Shipping","woo-gutenberg-products-block");o(6483);const y={hidden:!0,message:(0,u.__)("Shipping options are not available","woo-gutenberg-products-block")},I=({checked:e,rate:t,showPrice:o,showIcon:i,toggleText:s,multiple:r})=>(0,c.createElement)(h.Z,{value:"pickup",className:n()("wc-block-checkout__shipping-method-option",{"wc-block-checkout__shipping-method-option--selected":"pickup"===e})},!0===i&&(0,c.createElement)(g.Z,{icon:k.Z,size:28,className:"wc-block-checkout__shipping-method-option-icon"}),(0,c.createElement)("span",{className:"wc-block-checkout__shipping-method-option-title"},s),!0===o&&(0,c.createElement)(f,{multiple:r,minRate:t.min,maxRate:t.max})),T=({checked:e,rate:t,showPrice:o,showIcon:i,toggleText:s,shippingCostRequiresAddress:r=!1})=>{const p=(0,a.useSelect)((e=>e(l.CART_STORE_KEY).getShippingRates().some((({shipping_rates:e})=>!e.every(b.J3))))),d=r&&(()=>{const e=(0,a.select)("wc/store/validation"),t=e.getValidationError("shipping_state"),o=e.getValidationError("shipping_address_1"),c=e.getValidationError("shipping_country"),i=e.getValidationError("shipping_postcode");return[e.getValidationError("shipping_city"),t,o,c,i].some((e=>void 0!==e))})()&&!p,m=void 0!==t.min&&void 0!==t.max,{setValidationErrors:k,clearValidationError:w}=(0,a.useDispatch)(l.VALIDATION_STORE_KEY);(0,c.useEffect)((()=>{"shipping"!==e||m?w("shipping-rates-error"):k({"shipping-rates-error":y})}),[e,w,m,k]);const v=void 0===t.min||d?(0,c.createElement)("span",{className:"wc-block-checkout__shipping-method-option-price"},(0,u.__)("calculated with an address","woo-gutenberg-products-block")):(0,c.createElement)(f,{minRate:t.min,maxRate:t.max});return(0,c.createElement)(h.Z,{value:"shipping",className:n()("wc-block-checkout__shipping-method-option",{"wc-block-checkout__shipping-method-option--selected":"shipping"===e})},!0===i&&(0,c.createElement)(g.Z,{icon:_.Z,size:28,className:"wc-block-checkout__shipping-method-option-icon"}),(0,c.createElement)("span",{className:"wc-block-checkout__shipping-method-option-title"},s),!0===o&&v)},R=({checked:e,onChange:t,showPrice:o,showIcon:i,localPickupText:n,shippingText:s,shippingCostRequiresAddress:r=!1})=>{var a,l;const{shippingRates:d}=(0,p.V)();return(0,c.createElement)(m.Z,{id:"shipping-method",className:"wc-block-checkout__shipping-method-container",label:"options",onChange:t,checked:e},(0,c.createElement)(T,{checked:e,rate:x(null===(a=d[0])||void 0===a?void 0:a.shipping_rates),showPrice:o,showIcon:i,shippingCostRequiresAddress:r,toggleText:s||S}),(0,c.createElement)(I,{checked:e,rate:N(null===(l=d[0])||void 0===l?void 0:l.shipping_rates),multiple:d.length>1,showPrice:o,showIcon:i,toggleText:n||C}))},P={...(0,o(9490).Z)({defaultTitle:(0,u.__)("Shipping method","woo-gutenberg-products-block"),defaultDescription:(0,u.__)("Select how you would like to receive your order.","woo-gutenberg-products-block")}),className:{type:"string",default:""},showIcon:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},localPickupText:{type:"string",default:C},shippingText:{type:"string",default:S},lock:{type:"object",default:{move:!0,remove:!0}},shippingCostRequiresAddress:{type:"boolean",default:!1}},Z=(0,s.withFilteredAttributes)(P)((({title:e,description:t,showStepNumber:o,children:i,className:s,showPrice:u,showIcon:h,shippingText:m,localPickupText:g,shippingCostRequiresAddress:k})=>{const{checkoutIsProcessing:_,prefersCollection:b}=(0,a.useSelect)((e=>{const t=e(l.CHECKOUT_STORE_KEY);return{checkoutIsProcessing:t.isProcessing(),prefersCollection:t.prefersCollection()}})),{setPrefersCollection:w}=(0,a.useDispatch)(l.CHECKOUT_STORE_KEY),{shippingRates:v,needsShipping:E,hasCalculatedShipping:f,isCollectable:x}=(0,p.V)();return E&&f&&v&&x&&d.oC?(0,c.createElement)(r.Z,{id:"shipping-method",disabled:_,className:n()("wc-block-checkout__shipping-method",s),title:e,description:t,showStepNumber:o},(0,c.createElement)(R,{checked:b?"pickup":"shipping",onChange:e=>{w("pickup"===e)},showPrice:u,showIcon:h,localPickupText:g,shippingText:m,shippingCostRequiresAddress:k}),i):null}))},7424:()=>{},5476:()=>{},5198:()=>{}}]);