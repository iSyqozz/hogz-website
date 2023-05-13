


function main(){
    const logo = document.querySelector('.mid-logo') as HTMLElement;

    setTimeout(() => {

        logo.classList.add('float-up');
        
    }, 1500);



}




window.onload = ()=>{
    main()
}