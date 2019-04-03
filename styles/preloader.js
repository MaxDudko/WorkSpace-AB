setTimeout(() => {
    let preloader = document.querySelector('#preloader');
    document.querySelector('#creditCalculator').hidden = false;
    clearInterval(preloader.remove());
}, 1500);
