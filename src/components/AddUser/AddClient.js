import Input from "../Ui/Input";
import {useState} from "react";
import {CLIENT_STATUS, clientMock} from "../../store/constant";

const AddClient = ({onClientConfirm}) => {
    const [clientList, setClientList] = useState(clientMock)
    const clientChangeHandler = e => {
        setClientList(
            prev => ({
                ...prev,
                key: Date.now(),
                [e.target.name]: e.target.value,
            })
        )
    }
    const clientSubmitHandler = e => {
        e.preventDefault()
        clientList.summary = clientList.quantity * clientList.price
        onClientConfirm(clientList)
    }
    return <form onSubmit={clientSubmitHandler}>
        <Input type="text" name="product" value={clientList.product} id="product" placeholder="product"
               onChange={clientChangeHandler}/>
        <Input type="text" value={clientList.client} name="client" id="client" placeholder="client"
               onChange={clientChangeHandler}/>
        <Input type="date" name="date" id="date" value={clientList.date} placeholder="date"
               onChange={clientChangeHandler}/>
        <Input type="number" name="price" id="price" value={clientList.price} placeholder="price"
               onChange={clientChangeHandler}/>
        <Input type="number" name="quantity" id="quantity" value={clientList.quantity} placeholder="quantity"
               onChange={clientChangeHandler}/>
        <select name="status" onChange={(e) => clientChangeHandler(e)}>
            {Object.values(CLIENT_STATUS).map(comp => <option key={comp.id}
                                                              value={comp.value}> {comp.value}</option>)}
        </select>
        <button>Add</button>

    </form>
}

export default AddClient


