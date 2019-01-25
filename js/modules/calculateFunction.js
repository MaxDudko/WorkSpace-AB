function calculateFunction() {
    let sum = document.querySelector('#sum').value;
    let pv = document.querySelector('#pv').value;
    let term = document.querySelector('#term').value;
    let sumCredit = (function() {
        return (sum - pv) + ((sum - pv) / 100 * product.OneTimeCommission) + ((sum - pv + product.Service) / 100 * product.Insurance * term) + product.Service;
    }());
    let overpaymentMonth = (function() {
        return (sumCredit / 100 * product.MonthlyCommission) + (sumCredit / 100 * product.PercentFix);
    }());
    let overpaymentAll = (function() {
        return (sumCredit - (sum - pv)) + (overpaymentMonth * (term - product.Grace));
    }());
    let payment = (function() {
        if(product.Grace !== 0) {
            return sumCredit / product.Grace;
        } else {
            return (sumCredit / term) + overpaymentMonth;
        }
    }());
    let paymentInGrace = (function() {
        if(product.Grace !== 0) {
            return (sumCredit / term);
        } else {
            return 0;
        }
    }());
    let paymentAfterGrace = (function() {
        if(product.Grace !== 0) {
            return (sumCredit - (paymentInGrace * product.Grace)) / (term - product.Grace) + overpaymentMonth;
        } else {
            return 0;
        }
    }());
    return product.result = {
        'sumCredit': +sumCredit.toFixed(2),
        'payment': +payment.toFixed(2),
        'paymentInGrace': +paymentInGrace.toFixed(2),
        'paymentAfterGrace': +paymentAfterGrace.toFixed(2),
        'overpaymentMonth': +overpaymentMonth.toFixed(2),
        'overpaymentAll': +overpaymentAll.toFixed(2)
    }
}

//export {calculate};
