'use client';
const getCartItems = function () {
  const key = 'product';
  const allItems = localStorage.getItem(key);
  // const allItems = JSON.parse(localStorage.getItem(key));
  return allItems;
};

export default function ShoppingCart() {
  const cartItems = getCartItems();
  console.log(cartItems);
  // return (
  //   <div>
  //     {cartItems.map((curr) => {
  //       return console.log(curr);
  //     })}
  //   </div>
  // );
}
