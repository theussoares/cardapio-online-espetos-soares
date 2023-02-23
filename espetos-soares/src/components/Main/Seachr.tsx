import Pesquisa from "../../assets/icon-pesquisa.png"

export function Search () {

    return(
        <form className="form-pesquisa">
            <input className="input-pesquisa" type="text" name="pesquisa" id="pesquisaInput" placeholder="Pesquisar por"/>
            <button className="btn-pesquisa"><img className="btn-pesquisa-img" src={Pesquisa} alt="Pesquisar" /></button>
        </form>
    )
}