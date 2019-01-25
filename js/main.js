//import {product, createProduct} from "/modules/createProduct.js";
//import {calculateFunction} from "/modules/calculateFunction.js";
//import {calculateOutput} from "/modules/calculateOutput.js";
//import {addCompare} from "/modules/addCompare.js";
//import {compareProducts} from "/modules/compareProducts.js";

(function addScript() {
   function addScriptNode(link) {
      let script = document.createElement('script');
      script.src = link;
      document.body.appendChild(script);
    }
    const scriptLink = {
      createProduct: "js/modules/createProduct.js",
      calculateFunction: "js/modules/calculateFunction.js",
      calculateOutput: "js/modules/calculateOutput.js",
      addCompare: "js/modules/addCompare.js",
      compareProducts: "js/modules/compareProducts.js"
    }
    for(let src in scriptLink) {
      addScriptNode(scriptLink[src]);
    }
}());

document.querySelector('#calculate').addEventListener('click', function(){
    createProduct();
    calculateFunction();
    calculateOutput();
    addCompare();
    compareProducts();
});
