//  Show Cart

(function() {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', () => {
        cart.classList.toggle('show-cart')
    })

})();


//  Add item to the cart

(function() {
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            // console.log(event.target)
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3
                let partPath = fullPath.slice(pos);
                const item = {};
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent
                finalPrice = price.slice(1).trim()

                item.img = `img-cart${partPath}`;
                item.name = name
                item.price = finalPrice

                const cartItem = document.createElement('div')
                cartItem.classList.add(
                    'cart-item', 
                    'd-flex', 
                    'justify-content-between',    
                    'text-capitalize', 
                    'my-3'
                )
                cartItem.innerHTML = `
                    <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                    <div class="item-text">
                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                    </div>
                    <a href="#" id='cart-item-remove' class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </a>
                `;
                //  Select Cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container')
                cart.insertBefore(cartItem, total)
                alert('item added to the cart')
                showTotals();
            }
        })
    })

    // Show Totals
    showTotals = () => {
        const total = []
        const items = document.querySelectorAll('.cart-item-price')
        
        items.forEach((item) => {
            total.push(parseFloat(item.textContent))
        })
        const totalMoney = total.reduce((total, item) => {
            total += item
            return total
        },0)
        const finalMoney = totalMoney.toFixed(2)

        document.getElementById('cart-total').textContent = finalMoney
        document.querySelector('.item-total').textContent = finalMoney
        document.getElementById('item-count').textContent = total.length;
        
    }

})();