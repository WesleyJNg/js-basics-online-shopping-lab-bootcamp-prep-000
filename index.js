var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemInfo = {};
 itemInfo.itemName = item;
 itemInfo.itemPrice = Math.floor(Math.random()*100);
 cart.push(itemInfo);
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    var i = 1, len = cart.length - 1;
    var initialPhrase = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    while(i < len) {
      if(len === 1) {
        break
      }
      elif {
      else {
        initialPhrase += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
      i++;
    }
    initialPhrase += '.';
    return initialPhrase;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
