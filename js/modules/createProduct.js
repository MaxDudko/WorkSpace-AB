const product = {};
function createProduct() {
    splitValue = document.querySelector('#product').value.split('/');
    product.Name = document.querySelector('#product').options[document.querySelector('#product').selectedIndex].text;
    product.Grace = +splitValue[4];
    product.OneTimeCommission = +splitValue[1];
    product.MonthlyCommission = +splitValue[2];
    product.Insurance = +(function() {
        if(splitValue[3] !== 0 && document.querySelector('#insurance').checked == true) {
            return +splitValue[3];
        } else {
            return 0;
        }
    }());
    product.Service = +(function() {
        if(document.querySelector('#service').checked == true) {
            return 300;
        } else {
            return 0;
        }
    }());
    product.PercentFix = 0.01;
}

//export {product, createProduct};
