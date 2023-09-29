"use client";
import TradingHistory from "./tradinghistory";

const tradingsummary = [
  {
    title: "Minimum Trading Days",
    value: "2 Days",
    desc: "Current Result (minimum 10 days)",
  },
  {
    title: "Daily Loss Limit",
    value: "$1000",
    desc: "Max. Loss recorded (Limit:$1500)",
  },
  {
    title: "Monthly Loss Limit",
    value: "$1500",
    desc: "Max. Loss recorded (Limit:$2750)",
  },
];
const tradingdetails = [
  {
    title: "Equity",
    value: "$58500.00",
    desc: "Minimum 10 days",
  },
  {
    title: "Balance",
    value: "$50000",
    desc: "Max. Loss $1500",
  },
  {
    title: "Avg. Winning Trade",
    value: "$70.00",
    desc: "Max. Loss $2750",
  },
];
const tradingobjectives = [
  {
    title: "Avg. Losing Trade",
    value: "-$20.00",
    desc: "Max loss $2700",
  },
  {
    title: "Avgerag RRR",
    value: "20%",
    desc: "↗︎ 22% over last month)",
  },
  {
    title: "Win Rate",
    value: "65%",
    desc: "↗︎ 25% over last month",
  },
];
export default function TradingOverview() {
  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-flow-row auto-rows-max justify-center gap-2">
        <div className="px-8 py-4">
          <div className="stats stats-vertical lg:stats-horizontal bg-base-200">
            <div className="stat place-items-center">
              <div className="stat-title">Account balance</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">Add funds</button>
              </div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Current balance</div>
              <div className="stat-value">$89,400</div>
              <div className="stat-actions join">
                <button className="btn btn-sm join-item ">Withdrawal</button>
                <button className="btn btn-sm join-item">deposit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-8 py-4">
          <h2 className="text-secondary font-semibold text-xl py-2">
            Trading Summary
          </h2>
          <div className="stats stats-vertical lg:stats-horizontal lg:stats-horizontal shadow bg-base-200">
            {tradingsummary.map((item) => (
              <div className="stat" id={item.title}>
                <div className="stat-title">{item.title}</div>
                <div className="stat-value">{item.value}</div>
                <div className="stat-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 py-4">
          <h2 className="text-secondary font-semibold text-xl py-2">
            Trading Details
          </h2>
          <div className="stats stats-vertical lg:stats-horizontal lg:stats-horizontal shadow bg-base-200">
            {tradingdetails.map((item) => (
              <div className="stat" id={item.title}>
                <div className="stat-title">{item.title}</div>
                <div className="stat-value">{item.value}</div>
                <div className="stat-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 py-4">
          <h2 className="text-secondary font-semibold text-xl py-2">
            Trading Objectives
          </h2>
          <div className="stats stats-vertical lg:stats-horizontal lg:stats-horizontal shadow bg-base-200">
            {tradingobjectives.map((item) => (
              <div className="stat" id={item.title}>
                <div className="stat-title">{item.title}</div>
                <div className="stat-value">{item.value}</div>
                <div className="stat-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-8 py-4">
        <TradingHistory />
      </div>
    </main>
  );
}
