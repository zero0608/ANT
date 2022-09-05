import {useEffect, useState} from 'react'
import { useStore } from "./storeComponentBill"

function Search() {

    const [proApi, setProApi] = useStore()

    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        if(searchValue === '') {
            setFilteredResults([])
        }
        if (searchValue !== '') {
            document.getElementById("result-menu-post").style.display = "block";
            const filteredData = proApi.filter((item) => {
                var text = item.product_name
                return text.toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
    }

    return(
        <>
            <input 
                type="text" name="txtnamemenu" 
                placeholder="Nhập tên mặt hàng"
                className="form-control"
                onChange={(e) => searchItems(e.target.value)}
            />
            <div id="result-menu-post" style={{display : "none"}}>
                <ul className="list-group">
                    {filteredResults && filteredResults.map((item, index) => 
                        <li key={index} className="list-group-item list-group-item-action">
                            {item.product_name}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )                    
}


export default Search