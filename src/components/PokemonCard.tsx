interface Pokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <figure>
      {pokemon ? (
        <>
          <p>Name: {pokemon.name}</p>
          {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>No image available</p>}
        </>
      ) : (
        <p>???</p>
      )}
    </figure>
  );
}

export default PokemonCard;
