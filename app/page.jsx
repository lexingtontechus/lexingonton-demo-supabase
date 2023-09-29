"use client";

//import Test from "./components/test";

//import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <div className="row">
          <div className="col-6">
            <h1 className="text-5xl text-primary py-2">LXT FX DEMO</h1>
            <p className="text-secondary py-2">User Trading Dashboard</p>
          </div>
          <div className="p-8"></div>
        </div>
      </div>
    </section>
  );
}
