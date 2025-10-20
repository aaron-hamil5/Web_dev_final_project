function addToBasket(image, name, price){
    const basketArea = document.getElementById('basket_area');

    const basketItem = document.createElement('div');
    basketItem.classList.add = ('basket_item');
    basketItem.innerHTML = `
        <div class="basket_item">
            <img src="${image}" alt="${name}" class="basket_item_image">
            <div class="basket_item_details">
                <h4 class="basket_item_name">${name}</h4>
                <div class="info_landscape"
                    <p class="basket_item_price">$${price.toFixed(2)}</p>
                    <a class="button" onclick="removeFromBasket(this)">Remove</a>
                </div>
            </div>
            
        </div>
    `;

    basketArea.appendChild(basketItem);
}