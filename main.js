//declararla
const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const aside = document.querySelector('.product-detail')
const mobileMenu = document.querySelector('.mobile-menu')
//hacer el evento
menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

//abrir una pestaña
function toggleDesktopMenu ()
{   
    const  isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed)
    {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
//function toggleMobileMenu ()
//{   
//   mobileMenu.classList.toggle('inactive');
//}
//cerrar y abrir pestañas
function toggleMobileMenu()
{   
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed)
    {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
//cerrar y abrir pestañas
function toggleCarritoAside ()
{   
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed)
        {
            mobileMenu.classList.add('inactive');
        }

    if(!isDesktopMenuClosed)
        {
            desktopMenu.classList.add('inactive');
        }

    aside.classList.toggle('inactive');
    

}