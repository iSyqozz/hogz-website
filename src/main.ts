


function main(){
    const lower_image = document.querySelector('.first-image') as HTMLElement;
    const logo_image = document.querySelector('.logo-image') as HTMLElement;
    const welcome = document.querySelector('.welcome') as HTMLElement;

    setTimeout(() => {
        lower_image.classList.add('first-image-appear');
    }, 100);

    setTimeout(() => {
        logo_image.classList.add('logo-image-appear');
    }, 100);

    setTimeout(() => {
        welcome.classList.add('welcome-appear');
        setTimeout(() => {

            welcome.style.animation = 'float 1.5s ease-in-out infinite';
            
        }, 1000);

        setTimeout(() => {
            logo_image.classList.add('logo-image-disappear');
        }, 1300);
    }, 2100);

}




window.onload = ()=>{
    main()
}