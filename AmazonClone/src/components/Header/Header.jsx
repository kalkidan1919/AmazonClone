import React from "react";

function Header() {
  return (
    <>
      <section>
        <section>
          <div>
            {/* {logo} */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon images"
              />
            </a>
            <span>icon</span>
            <div>
              {/* {map} */}
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          <div>
            {/* {search icon} */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search products" />
            {/* {icon} */}
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          {/* {three component} */}
          <a href="">
            <div>
              <p>sign in</p>
              <span>account & list</span>
            </div>
          </a>
          {/* {orders} */}
          <a href="">
            <p>returns</p>
            <span>&orders</span>
          </a>
          {/* {carts} */}
          <a
            href="
         "
          >
            {/* {icon} */}
            <span>0</span>
          </a>
        </section>
      </section>
    </>
  );
}

export default Header;
