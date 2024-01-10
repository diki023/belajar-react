import React from "react";

const variabel = () => {
  const harga = 3000;

  var harga1 = 2000;
  if (true) {
    harga1 = 5000;
  }

  return (
    <div>
      <h2>{harga}</h2>
      <h2>{harga1}</h2>
    </div>
  );
};

export default variabel;
