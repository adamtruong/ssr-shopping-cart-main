export default function Product(props) {
  const { item, product, onAdd, onRemove } = props
  return (
    <div>
      <img
        className="w-full min-h-[170px] object-cover" 
        width={250}
        height={250}
        objectFit="cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{product.name}</div>
        <p className="text-gray-900 text-xl text-center">${product.price}</p>
      </div>
      <div className="px-6 pt-4 mb-4 pb-2 text-center ">
        {item ? (
          <div className="inline-block bg-gray-200 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button onClick={() => onRemove(item)} className="remove pr-3">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} className="add pl-3">
              +
            </button>
          </div>
        ) : (
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => onAdd(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  )
}
