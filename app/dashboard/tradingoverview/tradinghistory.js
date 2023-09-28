"use client";

const trades = [
  {
    Tx: "1",
    OpenTime: "2022.01.01 08:01:47",
    OpenPrice: "$47199.83",
    CloseTime: "2022.01.01 08:10:02",
    ClosePrice: "$47254.29",
    Lots: "1",
    Profit: "$54.46",
    Commission: "-$236.00",
    Swap: "0",
    Symbol: "BTCUSD",
    Type: "Buy",
  },
  {
    Tx: "2",
    OpenTime: "2022.01.01 08:01:47",
    OpenPrice: "$47199.83",
    CloseTime: "2022.01.01 08:10:02",
    ClosePrice: "$47254.29",
    Lots: "1",
    Profit: "$54.46",
    Commission: "-$236.00",
    Swap: "0",
    Symbol: "BTCUSD",
    Type: "Buy",
  },
  {
    Tx: "3",
    OpenTime: "2022.01.01 08:01:47",
    OpenPrice: "$47199.83",
    CloseTime: "2022.01.01 08:10:02",
    ClosePrice: "$47254.29",
    Lots: "1",
    Profit: "$54.46",
    Commission: "-$236.00",
    Swap: "0",
    Symbol: "BTCUSD",
    Type: "Buy",
  },
  {
    Tx: "4",
    OpenTime: "2022.01.01 08:01:47",
    OpenPrice: "$47199.83",
    CloseTime: "2022.01.01 08:10:02",
    ClosePrice: "$47254.29",
    Lots: "1",
    Profit: "$54.46",
    Commission: "-$236.00",
    Swap: "0",
    Symbol: "BTCUSD",
    Type: "Buy",
  },
];

const categories = [
  {
    title: "Sales",
    metric: "$ 23,456",
    data: "sales",
  },
  {
    title: "Profit",
    metric: "$ 16,450",
    data: "profit",
  },
  {
    title: "Customers",
    metric: "456",
    data: "customers",
  },
];
export default function TradingHistory() {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-secondary font-semibold text-xl py-2">Trading History</h2>
      <table className="table table-zebra table-xs">
        {/* head */}
        <thead>
          <tr>
            <th>TX</th>
            <td>Open Time</td>
            <td>Open Price</td>
            <td>Close Time</td>
            <td>Close Price</td>
            <td>Lots</td>
            <td>Profit</td>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {trades.map((item) => (
            <tr key={item.Tx}>
              <th>{item.Tx}</th>
              <th>{item.OpenTime}</th>
              <th>{item.OpenPrice}</th>
              <th>{item.CloseTime}</th>
              <th>{item.ClosePrice}</th>
              <th>{item.Lots}</th>
              <th>{item.Profit}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
