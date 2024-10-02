import Card from "../../components/Card";
import Header from "../../components/Header";
import MobileWrapper from "../../components/MobileWrapper";
import usePokemonList from "../../hooks/usePokemonList";
import useGridColumns from "../../hooks/useGridColumns";
import useSortedList from "../../hooks/useSortedList";
import PokemonControl from "../../components/PokemonControl";
import { useState } from "react";

const ListPage: React.FC = () => {
  // fetch the pokemon list 
  const { pokemonList, loading, error } = usePokemonList();

  // sorting state: default by name
  const [sortKey, setSortKey] = useState<'name'|'id'>('id');

  // use sorted list hook (sort by name or id)
  const sortedPokemonList = useSortedList(pokemonList, sortKey);

  // use the grid column hook 
  const {isTwoColumn, toggleGrid} = useGridColumns();

  // error handling
  if (error) return <div>Something is wrong :(</div>
  return (
    <MobileWrapper>
      <Header withSearch/>

      {/* add PokemonControl component */}
      <PokemonControl 
        onSortChange={setSortKey} 
        onGridToggle={toggleGrid} 
        isOneColumn={isTwoColumn === true}/>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="px-5 py-4 grid grid-cols-2 gap-5">
          {sortedPokemonList.map((each, index) => <Card key={index} name={each.name} />)}
        </div>
      )}
    </MobileWrapper>
  );
};

export default ListPage;
