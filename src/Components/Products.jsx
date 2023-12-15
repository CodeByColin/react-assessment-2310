const Products = (props) => {
  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <h1>{product.productData.name}</h1>
          <p>{product.productData.pricing}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
