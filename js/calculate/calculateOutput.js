function calculateOutput() {
    document.querySelector('.productName').innerText = product.Name;
    for(let result in product.result){
        if(!isNaN(product.result[result])) {
          document.querySelector(`#${result}`).value = product.result[result];
        }
        if(!isFinite(product.result[result]) || product.result[result] < 0) {
          document.querySelector(`#${result}`).style.color = "red";
        } else {
          document.querySelector(`#${result}`).style.color = "";
        }
    }
}
