import { Categories } from "./Categories";
import { Products } from "./Products";
import { Search } from "./Seachr";


export function Main () {
    
    return (
        <div className="main">
            <Search />
            <Categories />
            <Products />
        </div>
    )
}