import { error, json } from "@sveltejs/kit";

export async function GET(/** @type{ { params: any } } */ { params }) {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const data = await result.json();

    return json(data);

  } catch (e) {
    throw error(404);
  }
}
