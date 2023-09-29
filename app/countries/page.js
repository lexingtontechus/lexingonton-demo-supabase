import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase
    .from("countries")
    .select("name")
    .order("name");

  return (
    <div className="container px-8">
      <ul className="my-auto text-foreground">
        {countries?.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}
