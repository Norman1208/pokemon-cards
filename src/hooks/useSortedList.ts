import { useState, useMemo } from 'react';

// define a basic pokemon interface 
interface Pokemon {
    id: number;
    name: string;
}

// define the sorting key types
type SortKey = 'id' | 'name';

// the custom hook to sort pokemon by id or name 
const useSortedList = (initialList: Pokemon[], sortKey: SortKey) => {
    // state to store the sorted list
    const [sortedList, setSortedList] = useState<Pokemon[]>(initialList);

    // memoize the sorting logic to avoid unnecessary re-renders
    useMemo(() => {
        const sorted = [...initialList].sort((a, b) => {
            if (sortKey === 'id') {
                return a.id - b.id;
            } else if (sortKey === 'name') {
                return a.name.localeCompare(b.name);
            } 
            return 0;
        });
        setSortedList(sorted);
    }, [initialList, sortKey]);
    return sortedList;
    
}

export default useSortedList;