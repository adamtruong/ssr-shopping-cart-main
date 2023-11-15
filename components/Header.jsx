export default function Header(props) {
  const { countCartItems } = props;
  return (
    <main >
        <a href="#/">
          <h1 className="text-6xl font-bold mb-4 text-center">AWS SHOP</h1>
        </a>
        <p className="mb-7 text-xl text-center">
          🔥 Buy from the hottest items in the world 🔥
        </p>

      <div className="mb-20 text-xl text-center">
        <a href="#Basket">
          🛒
          {countCartItems ? (
            <button className="@apply bg-[#f04040] font-thin text-white w-6 h-6 rounded-full ">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </main>
  );
}
