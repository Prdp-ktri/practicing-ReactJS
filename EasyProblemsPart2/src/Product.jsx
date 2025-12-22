function Product({ addToCart }) {
  return (
    <div>
      <h3>Product Name</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
