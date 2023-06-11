//declararla
const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const aside = document.querySelector('.product-detail')
const mobileMenu = document.querySelector('.mobile-menu')
const cardsContainer = document.querySelector('.cards-container')
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
//como hacer arrays de cards aqui abajo
const productList = [];
productList.push({

    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({

    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({

    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


//este codigo de aqui abajo nos permite crear cards y que funcionen 

function renderProducts(arr)
{
for (product of arr)
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    
//product = {name, price, image} -> product.image
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText =  product.name; 

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    // con appendChild uno solo 
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    // con append dos o mas ->mas facil xd 
    productCard.append(productImg, productInfo);
    
    cardsContainer.appendChild(productCard);

}
}
renderProducts(productList);