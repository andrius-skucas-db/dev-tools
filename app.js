(function() {
    const alertBtn = document.querySelector('.js-alert');
    const alertText = document.querySelector('.js-alert-text');
    const alertContent = document.querySelector('.js-alert-content');

    const showAlert = () => {

        doSomeWork();

        alertContent.innerHTML = alertText.value;
        alertContent.classList.add('alert--open');
        requestAnimationFrame(() => {
            document.addEventListener('click', stop);
            document.addEventListener('click', hideAlert);
        });
    };

    const hideAlert = (e) => {
        if(alertContent.contains(e.target)) {
            return;
        }

        alertContent.classList.remove('alert--open');
        document.removeEventListener('click', hideAlert);
    };

    alertBtn.addEventListener('click', showAlert);


    const doSomeWork = () => {
      for(let i = 0; i < 10000; i++) {
        console.log(i);
      }
    };



    const stop = (e) => {
        e.stopImmediatePropagation();
    };
})();