function compareProducts() {

    for(let result in product.result){
        if(!isFinite(product.result[result]) || product.result[result] < 0) return;
    }

    if(document.querySelector('#compareTableBody') == null) createTable();

    window.onload = addProductCompare();

    function createTable() {
        let compareTable = document.createElement('table');
        compareTable.className = "col table";
        compareTable.innerHTML = `<thead>
                                    <tr>
                                      <th scope="col">Продукт:</th>
                                      <th scope="col">Сумма кредита:</th>
                                      <th scope="col">Грейс:</th>
                                      <th scope="col">Равными платежами:</th>
                                      <th scope="col">Платёж в грейс:</th>
                                      <th scope="col">После грейса:</th>
                                      <th scope="col">Переплата в месяц:</th>
                                      <th scope="col">Переплата за вес срок:</th>
                                   </tr>
                                </thead>
                                <tbody id="compareTableBody">
                                </tbody>`;
        document.querySelector('#compareTable').appendChild(compareTable);
    }

    function addProductCompare() {
        let compareTableBody = document.querySelector('#compareTableBody');
        let row = document.createElement('tr');
        row.innerHTML = `<th scope="row">${product.Name}</th>
                         <td>${product.result.sumCredit}</td>
                         <td>${product.Grace}</td>
                         <td>${product.result.payment}</td>
                         <td>${product.result.paymentInGrace}</td>
                         <td>${product.result.paymentAfterGrace}</td>
                         <td>${product.result.overpaymentMonth}</td>
                         <td>${product.result.overpaymentAll}</td>
                         <td><button type="button" title="Удалить" onClick="this.parentNode.parentNode.remove();">&times</button></td>`;
        row.lastChild.querySelector('button').className = 'close';
        compareTableBody.appendChild(row);
        compareProducts();
    }
    function compareProducts() {
        function compareValue(column) {
            let maxValue = 0;
            let minValue = Infinity;
            for(let i = 0; i < compareTableBody.rows.length; i++) {
                let value = compareTableBody.rows[i].cells[column].textContent;
                if(maxValue < value) maxValue = value;
                if(minValue > value) minValue = value;
            }
            for(let i = 0; i < compareTableBody.rows.length; i++) {
                if(compareTableBody.rows[i].cells[column].textContent === minValue) {
                    compareTableBody.rows[i].cells[column].style.color = 'blue';
                } else if(compareTableBody.rows[i].cells[column].textContent === maxValue) {
                    compareTableBody.rows[i].cells[column].style.color = 'red';
                } else if(compareTableBody.rows[i].cells[column].textContent === minValue) {
                    compareTableBody.rows[i].cells[column].style.color = 'red';
                } else if(compareTableBody.rows[i].cells[column].textContent === maxValue) {
                    compareTableBody.rows[i].cells[column].style.color = 'blue';
                } else {
                    compareTableBody.rows[i].cells[column].style.color = '';
                }
            }
        }
        for(let i = 0; i < compareTableBody.rows.length; i++) {
            for(let j = 0; j < compareTableBody.rows[i].cells.length; j++) {
                compareValue(j);
            }
        }
    }
}
