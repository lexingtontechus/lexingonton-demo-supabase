"use server";
import { auth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    },
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default async function Test() {
  const { getToken } = auth();

  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: "lexington-demo" });

    const supabase = await supabaseClient(supabaseAccessToken);

    // TODO #2: Replace with your database table name

    const { data, error } = await supabase.from("countries").select("*");

    // TODO #3: Handle the response
  };

  return (
    <div className="test">
      <button className="btn" onClick={fetchData}>
        Fetch data
      </button>
    </div>
  );
}
