import "./HeaderComponents.css";

function HeaderComponent(){
    return(
        <header className="header">
            <h1 className="tittle">Mi Pokedex</h1>
            <img src ="public/pkdex.png" alt = "logo pokedex" className="logo"></img>
        </header>
    )
}

export default HeaderComponent;