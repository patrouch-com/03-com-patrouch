import { error } from "@sveltejs/kit";

export async function load(/** @type{ { fetch: any, params: any } } */ { fetch, params }) {
  const req = await fetch(`/api/pokemon/${params.name}`, { mode: "cors" });
  const res = await req.json();


  if (res) {
    return {
      pokemon: res,
    }
  }

  throw error(404);
}
