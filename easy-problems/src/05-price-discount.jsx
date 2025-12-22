import React from "react";

function PriceDiscount({ price, discountedPrice }) {
  return (
    <div>
      <div id="product">
        <img
          src="/classmate-hook-pen.jpg"
          style={{ width: "400px", height: "400px" }}
          alt=""
        />
        {discountedPrice ? (
          <>
            <h3>
              {" "}
              MRP: <strike>{price}</strike>
            </h3>
            <h1>Selling Price: ₹{discountedPrice}</h1>
          </>
        ) : (
          <h1>Selling Price: ₹{price}</h1>
        )}
      </div>
    </div>
  );
}

export default PriceDiscount;
