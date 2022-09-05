import { useEffect, useState}  from "react"
import BillContext from "./BillContext"
import {ProductService} from '../storeComponentBill'

function BillProvider ({ children }) {
    const [proApi, setProApi] = useState([])
    useEffect(() =>{
        const data = ProductService.getProduct().then((res) => {
            setProApi(res.data)
          });
    },[])

    return (
        <BillContext.Provider value={[proApi, setProApi]}>
            { children }
        </BillContext.Provider>
    )
}


export default BillProvider