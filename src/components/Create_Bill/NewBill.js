import { BillProvider } from "./storeComponentBill"
import App from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/bill_create.css'
function NewBill() {
    return(
        <BillProvider>
            <App/>  
        </BillProvider>
       
    )
}

export default NewBill