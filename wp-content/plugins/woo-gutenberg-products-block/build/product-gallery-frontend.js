(()=>{"use strict";(0,window.wc.__experimentalInteractivity.store)({state:{},selectors:{woocommerce:{isSelected:({context:e})=>(null==e?void 0:e.woocommerce.selectedImage)===(null==e?void 0:e.woocommerce.imageId),pagerDotFillOpacity(e){const{context:o}=e;return(null==o?void 0:o.woocommerce.selectedImage)===(null==o?void 0:o.woocommerce.imageId)?1:.2},isDialogOpen:({context:e})=>e.woocommerce.isDialogOpen}},actions:{woocommerce:{thumbnails:{handleClick:({context:e})=>{e.woocommerce.selectedImage=e.woocommerce.imageId}},dialog:{handleCloseButtonClick:({context:e})=>{e.woocommerce.isDialogOpen=!1}},handleSelectImage:({context:e})=>{e.woocommerce.selectedImage=e.woocommerce.imageId},handleNextImageButtonClick:e=>{const{context:o}=e,c=o.woocommerce.visibleImagesIds.indexOf(o.woocommerce.selectedImage),m=Math.min(c+1,o.woocommerce.visibleImagesIds.length-1);o.woocommerce.selectedImage=o.woocommerce.visibleImagesIds[m]},handlePreviousImageButtonClick:e=>{const{context:o}=e,c=o.woocommerce.visibleImagesIds.indexOf(o.woocommerce.selectedImage),m=Math.max(c-1,0);o.woocommerce.selectedImage=o.woocommerce.visibleImagesIds[m]}}}})})();