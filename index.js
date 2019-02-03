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
    var i = 1, len = cart.length;
    var initialPhrase = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    while(i < len) {
      if(len === 1) {
        return initialPhrase += '.';
      }
      else if (i+1 === len) {
        initialPhrase += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
      }
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
  var cartTotal = 0;
  for(var i = 0, len = cart.length; i < len; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  var i = 0, len = cart.length;
  var itemInCart = false;
  while (i < len) {
    if(item === cart[i].itemName) {
      itemInCart = true;
      break;
    }
    i++;
  }
  if(itemInCart === false) {
    return 'That item is not in your cart.';
  }
  else {
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
