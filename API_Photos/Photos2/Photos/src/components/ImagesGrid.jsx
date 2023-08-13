import { Imagenes } from "./Images.jsx";
import { useFetch } from "./useFetch.js";
import { useState } from "react";
import './ImagesGrid.css'

const ImagenesGrid = () => {
    const { data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/photos");
    const imagesPerPage = 4; // Cambia a 4 si deseas mostrar 4 imágenes por página

    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    //Calculamos la cantidad de páginas a pasar
    const imagesToDisplay = data?.slice(startIndex, endIndex);

    //Calculamos la cantidad total de páginas
    const totalPages = Math.ceil((data?.length || 0) / imagesPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    return (
        <div>
            <ul className="imageGrid">
                {error && <h4>Error: {error}</h4>}
                {loading && <h3>Loading...</h3>}
                {imagesToDisplay?.map((imgId) => (
                    <Imagenes key={imgId.id} imgId={imgId} />
                ))}
            </ul>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 0} className="btn btn-outline-dark">
                    Previous
                </button>
                <span>{currentPage + 1} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className="btn btn-outline-dark">
                    Next
                </button>
            </div>
        </div>
    );
}

export { ImagenesGrid }
