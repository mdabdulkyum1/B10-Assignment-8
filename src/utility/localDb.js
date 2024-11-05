const getAddToCardList = () => {
    const cardsItem = localStorage.getItem('carts');

    if(cardsItem){
        return JSON.parse(cardsItem);
    }
    else{
        return [];
    }
}

// set to current cart id 

const setCartId = id => {
    const cartItems = getAddToCardList();

    if(cartItems.includes(id)){
        console.log("already exists");
    }
    else{
        cartItems.push(id);
        localStorage.setItem('carts', JSON.stringify(cartItems));
    }
}

export { setCartId , getAddToCardList}