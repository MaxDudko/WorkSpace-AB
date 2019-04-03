window.onload = (() => {
//Add <script> links to index.html
    const scriptLinks = {
        createProduct: "scripts/createProduct.js",
        calculateFunction: "scripts/calculateFunction.js",
        compareProducts: "scripts/compareProducts.js"
    }

    for(let src in scriptLinks) {
        addScript(scriptLinks[src]);
    }

    function addScript(link) {
        let script = document.createElement('script');
        script.src = link;
        script.defer = true;
        document.body.appendChild(script);
    }
//Add <option> with products in <select #product>
    let select = document.querySelector('#product');
    let optgroups = select.getElementsByTagName('optgroup');

    for(let i = 0; i < optgroups.length; i++) {
        let id = optgroups[i].id.toString();
        addOption(id);
    }

    function addOption(optgroup) {
        for(let i = 0; i < AllProducts[optgroup].length; i++) {
            let option = document.createElement('option');
            let value = AllProducts[optgroup][i].slice(1);
            option.value = value.join('/');
            option.innerText = AllProducts[optgroup][i][0];
            optgroups[optgroup].appendChild(option);
        }
    }
})();
//Add listener to #calculate <button>
document.querySelector('#calculate').addEventListener('click', () => {
    createProduct();
    calculateFunction();
    compareProducts();
});
