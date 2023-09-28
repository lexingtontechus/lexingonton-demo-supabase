"use server";
//"use client";
//import React, { useState, useEffect } from "react";
//import axios from "axios";
import Link from "next/link";

export default async function AccountsPage() {
  async function getAccounts() {
    const response = await fetch("https://api.tradesync.io/accounts/", {
      headers: {
        Authorization:
          "Basic " + btoa("H9CFi0HixNxpxGtg73fn:XvRaKgnjRLcd3aupQ95H:"),
      },
    });
    const accounts = await response.json();
    console.log(accounts);
  }

  return (
    <div className="mx-auto">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">
        FX Acccounts
      </h1>
      <h2 className="text-2xl uppercase font-semibold p-4 text-center">
        Tech Crunch API Integration{" "}
      </h2>
      <h3 className="text-xl text-center py-4">
        This is a realtime showcase of an API integration using NextJS dynamic
        client side rendering.
      </h3>
      <div className="m-4 px-8 mx-auto justify-between flex flex-grow flex-wrap gap-4">
        {accounts.map((account) => (
          <div
            className="card w-96 bg-base-200 shadow-xl max-h-[500px]"
            key={account.id}
          >
            {account.account_name}
          </div>
        ))}
      </div>
    </div>
  );
}
