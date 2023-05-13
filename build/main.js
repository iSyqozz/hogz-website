"use strict";
function main() {
    const logo = document.querySelector('.mid-logo');
    setTimeout(() => {
        logo.classList.add('float-up');
    }, 1500);
}
window.onload = () => {
    main();
};
