(()=>{"use strict";const t=({handle:t,src:e,version:n})=>{const o=e.split("?");(null==o?void 0:o.length)>1&&(e=o[0]);const r=`#${t}-js, #${t}-js-prefetch, script[src*="${e}"]`;if(0===document.querySelectorAll(r).length){const o=document.createElement("link");o.href=n?`${e}?ver=${n}`:e,o.rel="preload",o.as="script",o.id=`${t}-js-prefetch`,document.head.appendChild(o)}},e=t=>"string"==typeof t,n=(t,e="")=>{var n,o;if("wc-blocks-registry-js"===t&&"object"==typeof(null===(n=window)||void 0===n||null===(o=n.wc)||void 0===o?void 0:o.wcBlocksRegistry))return!0;const r=e.split("?");(null==r?void 0:r.length)>1&&(e=r[0]);const c=e?`script#${t}, script[src*="${e}"]`:`script#${t}`;return document.querySelectorAll(c).length>0},o=t=>{if(!e(t.id)||n(t.id,null==t?void 0:t.src))return;const o=document.createElement("script");for(const n in t){if(!t.hasOwnProperty(n))continue;const r=n;if("onload"===r||"onerror"===r)continue;const c=t[r];e(c)&&(o[r]=c)}"function"==typeof t.onload&&(o.onload=t.onload),"function"==typeof t.onerror&&(o.onerror=t.onerror),document.body.appendChild(o)},r=({handle:t,src:e,version:r,after:c,before:i,translations:a})=>new Promise(((s,d)=>{n(`${t}-js`,e)&&s(),a&&o({id:`${t}-js-translations`,innerHTML:a}),i&&o({id:`${t}-js-before`,innerHTML:i}),o({id:`${t}-js`,onerror:d,onload:()=>{c&&o({id:`${t}-js-after`,innerHTML:c}),s()},src:r?`${e}?ver=${r}`:e})})),c=window.CustomEvent||null,i=(t,e,n=!1,o=!1)=>{if("function"!=typeof jQuery)return()=>{};const r=()=>{((t,{bubbles:e=!1,cancelable:n=!1,element:o,detail:r={}})=>{if(!c)return;o||(o=document.body);const i=new c(t,{bubbles:e,cancelable:n,detail:r});o.dispatchEvent(i)})(e,{bubbles:n,cancelable:o})};return jQuery(document).on(t,r),()=>jQuery(document).off(t,r)},a=window.wp.i18n,s=window.wc.priceFormat,d=t=>"boolean"==typeof t,l=window.wc.wcSettings,u=t=>{if(!t)return;const[e,n]=t,o=(0,l.getSettingWithCoercion)("displayCartPricesIncludingTax",!1,d),r=((t,e)=>{const n=(0,s.getCurrencyFromPriceResponse)(t),o=e?parseInt(t.total_items,10)+parseInt(t.total_items_tax,10):parseInt(t.total_items,10);return(0,s.formatPrice)(o,n)})(e,o),c=document.querySelectorAll(".wc-block-mini-cart"),i=document.querySelectorAll(".wc-block-mini-cart__badge"),u=document.querySelectorAll(".wc-block-mini-cart__amount");c.forEach((t=>{if(!(t instanceof HTMLElement))return;const o=t.querySelector(".wc-block-mini-cart__button");null==o||o.setAttribute("aria-label",t.dataset.hasHiddenPrice?(0,a.sprintf)(/* translators: %s number of products in cart. */
(0,a._n)("%1$d item in cart","%1$d items in cart",n,"woo-gutenberg-products-block"),n):(0,a.sprintf)(/* translators: %1$d is the number of products in the cart. %2$s is the cart total */
(0,a._n)("%1$d item in cart, total price of %2$s","%1$d items in cart, total price of %2$s",n,"woo-gutenberg-products-block"),n,r)),t.dataset.cartTotals=JSON.stringify(e),t.dataset.cartItemsCount=n.toString()})),i.forEach((t=>{(n>0||""!==t.textContent)&&(t.textContent=n.toString())})),u.forEach((t=>{t.textContent=r})),n>0&&document.querySelectorAll(".wc-block-mini-cart__tax-label").forEach((t=>{t.removeAttribute("hidden")}))};function m(t,e){if(!t)return null;const n=window.getComputedStyle(t)[e];return"rgba(0, 0, 0, 0)"!==n&&"transparent"!==n?n:m(t.parentElement,e)}u((()=>{const t=localStorage.getItem("wc-blocks_mini_cart_totals");if(!t)return;const e=JSON.parse(t);return[e.totals,e.itemsCount]})()),(async()=>fetch("/wp-json/wc/store/v1/cart/").then((t=>{if(!t.ok)throw new Error;return t.json()})).then((t=>(localStorage.setItem("wc-blocks_mini_cart_totals",JSON.stringify({totals:t.totals,itemsCount:t.items_count})),[t.totals,t.items_count]))).catch((t=>{console.error(t)})))().then(u),function(){const t=document.createElement("style"),e=getComputedStyle(document.body).backgroundColor,n=document.querySelector(".wc-block-mini-cart__button"),o=m(n,"backgroundColor")||"#fff",r=m(n,"color")||"#000";t.appendChild(document.createTextNode(`:where(.wp-block-woocommerce-mini-cart-contents) {\n\t\t\t\tbackground-color: ${e};\n\t\t\t}\n\t\t\t:where(.wc-block-mini-cart__badge) {\n\t\t\t\tbackground-color: ${r};\n\t\t\t\tcolor: ${o};\n\t\t\t}`)),document.head.appendChild(t)}(),window.addEventListener("load",(()=>{const e=document.querySelectorAll(".wc-block-mini-cart");let n=!1;if(0===e.length)return;const o=window.wcBlocksMiniCartFrontendDependencies;for(const e in o){const n=o[e];t({handle:e,...n})}const c=i("adding_to_cart","wc-blocks_adding_to_cart"),a=i("added_to_cart","wc-blocks_added_to_cart"),s=i("removed_from_cart","wc-blocks_removed_from_cart"),d=async()=>{if(!n){n=!0,document.body.removeEventListener("wc-blocks_adding_to_cart",d),c();for(const t in o){const e=o[t];await r({handle:t,...e})}}};document.body.addEventListener("wc-blocks_adding_to_cart",d),window.addEventListener("pageshow",(t=>{(null!=t&&t.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&d()})),e.forEach(((t,e)=>{if(!(t instanceof HTMLElement))return;const o=t.querySelector(".wc-block-mini-cart__button"),r=t.querySelector(".wc-block-components-drawer__screen-overlay");if(!o||!r)return;const c=()=>{n||d(),document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",l),a(),s()},i=()=>{t.dataset.isInitiallyOpen="true",r.classList.add("wc-block-components-drawer__screen-overlay--with-slide-in"),r.classList.remove("wc-block-components-drawer__screen-overlay--is-hidden"),c()},l=()=>{t.dataset.isInitiallyOpen="false",c()};o.addEventListener("mouseover",d),o.addEventListener("focus",d),o.addEventListener("click",i);const u="open_drawer"===t.dataset.addToCartBehaviour?()=>{i()}:l;0===e&&(document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",l))}))}))})();