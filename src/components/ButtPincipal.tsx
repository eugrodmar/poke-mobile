function ButtPrincipal({page, setPage, setOffset}:
    {page: number; 
    setPage:(page: number) => void;
    setOffset: (offset: number) => void;
 }){

  const volver = () => {
    if (page > 1) {
      setPage(1);
      setOffset(0);
    }
   };
 
   return (
 <button className="principal"
 
 disabled={page <= 1}
    onClick={volver}>
                Volver a la primera página
            </button>
   );
}

 export default ButtPrincipal;
