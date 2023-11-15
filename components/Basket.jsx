export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside id ="Basket" className="mt-20 rounded overflow-hidden shadow-lg p-10">
      <h2 className="mb-20 text-xl font-bold text-center">Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div className="text-xl text-center font-bold text-red-500 pb-10">Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between mb-1 mt-8">
            <div className="font-bold">{item.name}</div>
            <div className="rounded text-right">
              <button onClick={() => onRemove(item)} className="remove bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-l">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-r">
                +
              </button>
            </div>
          </div>
            <div className="col-1 text-right text-gray-500">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="flex justify-between mb-1 mt-5">
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="flex justify-between mb-1">
              <div>Tax Price</div>
              <div>${taxPrice.toFixed(2)}</div>
            </div>
            <div className="flex justify-between mb-1">
              <div>Shipping Price</div>
              <div>
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between mb-1 mt-8">
              <div>
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="pt-5 text-center">
              <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
