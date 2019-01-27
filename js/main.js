import {AllProducts} from "../PRODUCTS_Constants.js";
//import {addProduct} from "/product/addProduct.js";
import {product, createProduct} from "/product/createProduct.js";
import {calculateFunction} from "/calculate/calculateFunction.js";
import {calculateOutput} from "/calculate/calculateOutput.js";
import {addCompare} from "/compare/addCompare.js";
import {compareProducts} from "/compare/compareProducts.js";


(() => {
   function addScriptNode(link) {
      let script = document.createElement('script');
      script.src = link;
      script.defer = true;
      document.body.appendChild(script);
    }
    const scriptLink = {
      PRODUCTS_Constants: "PRODUCTS_Constants.js",
      addProduct: "js/product/addProduct.js",
    /*  formValidation: "js/validation/formValidation.js",
      createProduct: "js/product/createProduct.js",
      calculateFunction: "js/calculate/calculateFunction.js",
      calculateOutput: "js/calculate/calculateOutput.js",
      addCompare: "js/compare/addCompare.js",
      compareProducts: "js/compare/compareProducts.js"*/
    }
    for(let src in scriptLink) {
      addScriptNode(scriptLink[src]);
    }
})();

document.querySelector('#calculate').addEventListener('click', () => {
    createProduct();
    calculateFunction();
    calculateOutput();
    addCompare();
    compareProducts();
});
