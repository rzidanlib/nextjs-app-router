import { getData } from "@/services/pokemon";
import Link from "next/link";
import React from "react";

export default async function PokemonPage() {
  const pokemon = await getData();
  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {pokemon.length > 0 &&
        pokemon.map((data: any) => (
          <Link
            href={`/pokemon/detail/${data.id}`}
            key={data.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow grid place-items-center"
          >
            <img
              className="rounded-t-lg px-5 py-2"
              src={data.image}
              alt={data.name}
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {data.name.toUpperCase()}
              </h5>
            </div>
          </Link>
        ))}
    </div>
  );
}
