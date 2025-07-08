import "./Buttons.css";



function Button({offset, limit, page, setOffset, setPage}: 
    {offset: number; 
    limit: number; 
    page:number; 
    setOffset: (offset: number) => void;
    setPage: (page: number) => void;
}){

    const Previous = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
      setPage(page - 1);
    }
  };

  const Next = () => {
    setOffset(offset + limit);
    setPage(page + 1);
  };

              
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

export default Button;