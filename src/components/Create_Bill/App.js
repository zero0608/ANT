import {useEffect, useState} from 'react'
import { useStore } from "./storeComponentBill"
import { Dropdown,Button } from 'react-bootstrap'
import { BillContext } from "./storeComponentBill"
import { FiPlus } from "react-icons/fi"
import { BsXLg } from "react-icons/bs"
import Search from './Search'
import RightBill from './RightBill'
import LeftBill from './LeftBil'
function App() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    
    const [items, setItems] = useState(cart ?? []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addBill =() => {
        if(items.length < 6) {
            setItems(prev => [...prev, []])
        } else {
            console.log('do not add')
        }
        
    }

    const removeBill = (value) => {
        const todos = JSON.parse(localStorage.getItem("cart"));
        todos.splice(value, 1);
        localStorage.setItem("cart", JSON.stringify(todos));
        setItems(todos)
    }

    return (
        <>
            <div className="header-cashier">
                <div className="container-fluid">
                    <div className="row ft-tabs">
                        <div className='col-md-4 cashier-search'>
                            <Search/>
                        </div>
                        <div className="col-md-6 bill-tabs">
                            <ul className="tabs-list">
                                {items.map((item, index) => 
                                    <li key={index}>
                                        <a className="active" data="listtable">
                                            Hóa đơn {index+1} <BsXLg onClick={() => removeBill(index)}/>
                                        </a>
                                    </li>
                                )}
                            </ul>
                            <div className="icon-tab" onClick={addBill}>
                                <FiPlus/>
                            </div>
                            
                        </div>

                        <div className="col-md-2">
                            <div className="container-fluid">
                                <div style={{float:"right"}}>
                                    <Dropdown>
                                        <Dropdown.Toggle>
                                            Chao Admin
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row content-inport">
                    <LeftBill/>
                    <RightBill/>
                </div>
            </div>
        </>
    )
}

export default App