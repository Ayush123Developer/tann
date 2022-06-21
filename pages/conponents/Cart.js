function Cart() {
  return (
    <>
      <div className="cart">
        <div className="bag-bagpacks">Bags . Bagpacks</div>
        <div className="cart-icon">
          <span> 13 Products </span>

          <svg
            className="carticon"
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10.7805V22H17.6667V10.7805M9.33333 15.6585V2M9.33333 2L14.75 7.41667M9.33333 2L3.91667 7.41667"
              stroke="#E5DFD9"
              strokewidth="2"
              strokelinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Cart;
