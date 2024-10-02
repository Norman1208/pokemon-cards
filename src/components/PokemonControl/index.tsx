import { FC } from "react";


interface PokemonControlProps {
    onSortChange: (sortKey: 'name'|'id') => void; // function to change sorting
    onGridToggle: () => void; // function to toggle grid layout
    isOneColumn: boolean; // whether the grid is in one-column mode
}

const PokemonControl: FC<PokemonControlProps> = ({ onSortChange, onGridToggle, isOneColumn }) => {
    return (
        <div className="pokemon-control-container flex justify-between items-center">
            <div className="sort-dropdown">
                <label htmlFor="sortBy">Sort By</label>
                <select id="sortBy" onChange={(e) => onSortChange(e.target.value as 'name'|'id')}>
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                </select>
            </div>

            <div className="grid-toggle">
                <button
                    className={`grid-toggle-btn ${isOneColumn ? 'active' : ''}`}
                    onClick={onGridToggle}>
                        {isOneColumn ? 'Switch to 2 columns' : 'switch to 1 column'}
                    </button>
            </div>
        </div>
    );
};

export default PokemonControl;