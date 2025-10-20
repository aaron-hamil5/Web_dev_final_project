var total = 0.00;

function addToBasket(image, name, price, decaf){
    const basketArea = document.getElementById('basket_area');

    const basketItem = document.createElement('div');

    var color;

    if(decaf){
        color = "basket_item_decaf";
    } else {
        color = "basket_item";
    }

    basketItem.classList.add = ('basket_item');
    basketItem.innerHTML = `
        <div class="${color}">
            <img src="${image}" alt="${name}" class="basket_item_image">
            <div class="basket_item_details">
                <h4 class="basket_item_name">${name}</h4>
                <div class="info_landscape">
                    <p class="basket_item_price">$${price}</p>
                    <a class="button" onclick="removeFromBasket(this, ${price})">Remove</a>
                </div>
            </div>
        </div>
    `;

    basketArea.appendChild(basketItem);
    updateTotal(true, price);
}

function removeFromBasket(item, price){
    const basketItem = item.parentElement.parentElement.parentElement; //The button is 3 elements deep, yes its a inificent way. If it work lets never touch it again.
    basketItem.remove();
    updateTotal(false, price);
}

function updateTotal(add, amount){
    if (add){
        total += amount;
    } else {
        total -= amount;
    }

    if(total < 0){ total = 0; }

    document.getElementById('total_price').innerHTML = 'Total: $' + total.toFixed(2);
}

function checkout(){
    document.getElementById('total_price').innerHTML = 'Enjoy!';
    document.getElementById('basket_area').innerHTML = '';
    total = 0;
}
