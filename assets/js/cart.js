const cards = document.querySelectorAll('.main__card');
const cartStorage = JSON.parse(localStorage.getItem('cart') || '[]');

cards.forEach((el, idx) => {
    let btnAdd = el.childNodes[7],
        title = el.childNodes[3].innerText,
        price = el.childNodes[5].innerText.slice(0, -1);
        

    btnAdd.addEventListener('click', () => {
        const cartStorage = localStorage.getItem('cart') || '[]';
        const cart = JSON.parse(cartStorage);
        const card = { title, price };
        localStorage.setItem('cart', JSON.stringify([...cart, card]))
        location.reload()
    });


})

let clearCart = document.createElement('button')
clearCart.classList.add('cart__clear');
clearCart.innerText = 'Очистити кошик'
clearCart.addEventListener('click', () => {
    localStorage.clear();
    location.reload()
})

document.querySelector('.cart__footer').prepend(clearCart)

function filterUniqueByTitle(cartStorage) {
    const cart = [];
    const encounteredTitles = new Set();

    for (const obj of cartStorage) {
        if (!encounteredTitles.has(obj.title)) {
            encounteredTitles.add(obj.title);
            cart.push(obj);
        }
    }

    return cart;
}

const cart = filterUniqueByTitle(cartStorage);


if (cart.length) {
    let sum = [];
    cart.forEach((el) => {
        let { title, price} = el;
        let item = document.createElement('div'),
            itemPrice = document.createElement('div'),
            itemCount = document.createElement('div'),
            itemTitle = document.createElement('div'),
            itemTotalPrice = document.createElement('div'),
            btnPlus = document.createElement('button'),
            btnMinus = document.createElement('button'),
            cartPrice = document.createElement('div');

        let iCount = 1;

        itemCount.innerText = iCount;
        itemTitle.innerText = title;
        itemTotalPrice.innerText = price * iCount + '₴';

        itemPrice.innerText = price + '₴';




        item.classList.add('item');
        itemTitle.classList.add('item__title');
        itemPrice.classList.add('item__price');
        itemCount.classList.add('item__count');
        btnPlus.innerText = '+';
        btnMinus.innerText = '-';
        btnMinus.classList.add('item__minus');
        btnPlus.classList.add('item__plus');

        btnPlus.addEventListener('click', () => {
            if (iCount >= 0) {
                iCount++;
                itemCount.innerText = iCount;
                updateValue()
                
            }
        });
        btnMinus.addEventListener('click', () => {
            if (iCount > 0) {
                iCount--;
                itemCount.innerText = iCount;
                updateValue()
                
            }
        });


        function updateValue() {
            itemTotalPrice.innerText = iCount * price + '₴';
            
        }


        item.append(itemTitle, itemPrice, btnPlus, itemCount, btnMinus, itemTotalPrice)

        document.querySelector('.cart__main').append(item);
        document.querySelector('.cart__totalPrice').append(cartPrice);
        
        sum.push(Number(itemTotalPrice.innerText.slice(0, -1)))
        console.log(Number(itemTotalPrice.innerText.slice(0, -1)))
        console.log(sum)
    })
    
    
}



