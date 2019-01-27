window.onload = (() => {
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
