import "./Buttons.css";



function PaginationButtons({offset, limit, setOffset}: 
    {offset: number; 
    limit: number;  
    setOffset : (offset: number) => void;
}){

   
    //Se especifican los props que va a tener el componente

    const Previous = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
      
    }
  };

  const Next = () => {
    setOffset(offset + limit);
   
  };
// Se crean dos variables que usan esos props para en el return darle una funcionalidad al componente
              
     return(
        <div className="contenedor">
            <button className="next"
            onClick={Previous}>
                Anterior
            </button>
            <button className="next" 
            onClick={Next}>
                Siguiente
            </button>
        </div>
     )
}

export default PaginationButtons;