function compareProducts() {
    function compareValue(column) {
        let maxValue = 0;
        let minValue = Infinity;
        for(let i = 0; i < compareTable.rows.length; i++) {
            let value = compareTable.rows[i].cells[column].textContent;
            if(maxValue < value) maxValue = value;
            if(minValue > value) minValue = value;
        }
        for(let i = 0; i < compareTable.rows.length; i++) {
            if(compareTable.rows[i].cells[column].textContent === minValue) {
                compareTable.rows[i].cells[column].style.color = 'blue';
            } else if(compareTable.rows[i].cells[column].textContent === maxValue) {
                compareTable.rows[i].cells[column].style.color = 'red';
            } else if(compareTable.rows[i].cells[column].textContent === minValue) {
                compareTable.rows[i].cells[column].style.color = 'red';
            } else if(compareTable.rows[i].cells[column].textContent === maxValue) {
                compareTable.rows[i].cells[column].style.color = 'blue';
            } else {
                compareTable.rows[i].cells[column].style.color = '';
            }

        }
    }
    for(let i = 0; i < compareTable.rows.length; i++) {
        for(let j = 0; j < compareTable.rows[i].cells.length; j++) {
            compareValue(j);
        }
    }
}

//export {compareProducts};
