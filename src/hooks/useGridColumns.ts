import {useState } from "react";


const useGridColumns = () => {
    const [isTwoColumn, setIsTwoColumn] = useState<boolean>(false);

    const toggleGrid = () => {
        setIsTwoColumn((prevState) => !prevState);
    };

    return { isTwoColumn, toggleGrid}
}

export default useGridColumns;