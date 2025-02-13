import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  if (!res.ok) {
    
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  let data = await getData();
  console.log('data : ', data)
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-4">Pokemons</h1>
      {
        data.results.map((pokemon: { name: string }) => (
          <div key={pokemon.name} className="flex flex-col gap-4">
            <div>{pokemon.name}</div>
          </div>
        ))
      }
    </div>
  );
}
