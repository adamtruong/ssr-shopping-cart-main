import Product from './Product';

export default function Main(props) {
  const { cartItems, products, onAdd, onRemove } = props;
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-4">
      {products.map((product) => (
        <div className="max-w-[250px] rounded overflow-hidden shadow-lg">
          <Product
            key={product.id}
            product={product}
            item={cartItems.find((x) => x.id === product.id)}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Product>
        </div>
      ))}
    </div>
  );
}
