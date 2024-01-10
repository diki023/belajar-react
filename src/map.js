import React from "react";

const makanans = [
  {
    nama: "soto",
    harga: 5000,
  },
  {
    nama: "bakso",
    harga: 10000,
  },
  {
    nama: "geprek",
    harga: 13000,
  },
];

const total_bayar = makanans.reduce((total_harga, makanan) => {
  return total_harga + makanan.harga;
}, 0);

const map = () => {
  return (
    <div>
      <h2>maping</h2>
      <ul>
        {makanans.map((makanan, index) => (
          <li>
            {index + 1}. {makanan.nama}- harga {makanan.harga}
          </li>
        ))}
      </ul>
      <h2>map filter harga yang lebih dari 11000</h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 11000)
          .map((makanan, index) => (
            <li>
              {index + 1}.{makanan.nama} - harga {makanan.harga}
            </li>
          ))}
      </ul>

      <h3>total bayar :{total_bayar}</h3>
    </div>
  );
};

export default map;
