function addCompare() {
   for(let result in product.result){
      if(!isFinite(product.result[result]) || product.result[result] < 0) {
         return;
      }
    }
    let compareTable = document.querySelector('#compareTable');
    let row = document.createElement('tr');
    row.innerHTML = `<th scope="row">${product.Name}</th>
                     <td>${product.result.sumCredit}</td>
                     <td>${product.Grace}</td>
                     <td>${product.result.payment}</td>
                     <td>${product.result.paymentInGrace}</td>
                     <td>${product.result.paymentAfterGrace}</td>
                     <td>${product.result.overpaymentMonth}</td>
                     <td>${product.result.overpaymentAll}</td>
                     <td><button type="button" title="Удалить" onClick="this.parentNode.parentNode.remove()">&times</button></td>`;
    row.lastChild.querySelector('button').className = 'close';
    compareTable.appendChild(row);
}
