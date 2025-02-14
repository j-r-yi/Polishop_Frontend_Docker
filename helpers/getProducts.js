export const getProduct = async function (productId) {
  try {
    const res = await fetch(`http://localhost:8000/products/${productId}`);
    if (!res.ok) {
      throw new Error('Problem getting product');
    }
    const product = await res.json();
    return product;
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async function () {
  try {
    const res = await fetch(`http://localhost:8000/products/`);
    if (!res.ok) {
      throw new Error('Problem getting product');
    }
    const products = await res.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};
