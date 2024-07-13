const Checkout = () => {
  const products: string[] = [];
  return (
    <div>
      <div>
        <span>PRODUCTO</span>
      </div>
      <div>
        <span>PRICE</span>
      </div>
      <div>
        <span>REMOVE</span>
      </div>
      {!products ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <p>Hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Checkout;
