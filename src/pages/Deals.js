import {Table} from "antd";
import {useEffect, useState} from "react";
import AddClient from "../components/AddUser/AddClient";
import {dealsColumns, DELETE_BUTTON} from "../store/constant";
import Backdrop from "../components/Ui/Backdrop";
import {useDispatch, useSelector} from "react-redux";
import {
    addDealCreator,
    deals,
    deleteDealCreator,
    clientKey,
    updateDealCreator,
    income
} from "../store/redux/dealsReducer";

const Deals = ({clientIncomeHandler}) => {
    const [clientFormIsOpen, setClientFormIsOpen] = useState(false)
    const [updatedClient, setUpdatedClient] = useState(false)
    const dealsStore = useSelector(deals)
    const updatedClientKey = useSelector(clientKey)
    const dealIncome = useSelector(income)
    const dispatch = useDispatch()
    const clientHandler = (button, tag) => {
        if (tag === DELETE_BUTTON) {
            dispatch(deleteDealCreator(button))
        } else {
            setClientFormIsOpen(false)
            setUpdatedClient(true)
            dispatch(updateDealCreator(button))
            dispatch(deleteDealCreator(button))
        }
    }
    dealsColumns.filter(item => item.key === 'actions').map(item => item.render = (actions, record) => {
        const handleButton = (e) => {
            const tag = e.currentTarget.dataset.tag
            clientHandler(record, tag)
        }
        return (
            <>
                {actions.map((tag, index) => <div key={index}>
                    <button className={`button ${tag}`}
                            data-tag={tag}
                            key={index}
                            name={tag} onClick={handleButton}>
                        {tag}
                    </button>
                </div>)}
            </>
        )
    })
    const clientFormHandler = () => {
        setClientFormIsOpen(prev => !prev)
    }
    const confirmClient = (client) => {
        if (client.price === '' || client.quantity === '') {
            return;
        }
        dispatch(addDealCreator(
            {...client, key: updatedClientKey || Date.now()}
        ))
        dispatch(updateDealCreator(''))
        setClientFormIsOpen(false)
        setUpdatedClient(false)
    }
    useEffect(() => {
        clientIncomeHandler(dealIncome)
    }, [clientIncomeHandler, dealIncome])

    const backdropHandler = () => {
        setClientFormIsOpen(prev => !prev)
    }
    return <>
        <button onClick={clientFormHandler}>Add Client</button>
        {clientFormIsOpen && <AddClient onClientConfirm={confirmClient}/>}
        {clientFormIsOpen && <Backdrop backdropHandler={backdropHandler}/>}
        <Table dataSource={dealsStore} columns={dealsColumns}/>;
        <h2>TotalIncome is {dealIncome}</h2>
        {updatedClient && <AddClient onClientConfirm={confirmClient}/>}
        {updatedClient && <Backdrop backdropHandler={backdropHandler}/>}
    </>
}
export default Deals
// setUpdatedClientKey(button.key)
//   setDataSource(dataSource.filter(emp => emp.key !== button.key))
//   setDataSource(dataSource.filter(emp => emp.key !== button.key))
//  const [updatedClientKey, setUpdatedClientKey] = useState('')
//  const [dataSource, setDataSource] = useState(CLIENT_LIST);
//CLIENT_LIST  //import {compare} from "../common/Helpers";3
// setDataSource(
//   prev => (
//      [
//  ...prev,
//  {
//     ...clientList,
//      key:updatedClientKey || Date.now()
//  }].sort(compare)
// ))
// useEffect(() => {
//     clientIncomeHandler(income)
// }, [clientIncomeHandler, income])
// let income =deal// dataSource
//     .map(item => item.summary).reduce((a, b) => a + b)
// const columns = [
//     {
//         title: 'Client',
//         dataIndex: 'client',
//         key: 'client',
//     },
//     {
//         title: 'Product',
//         dataIndex: 'product',
//         key: 'product',
//     },
//     {
//         title: 'Date Of Order',
//         dataIndex: 'date',
//         key: 'date',
//     },
//     {
//         title: 'Price',
//         dataIndex: 'price',
//         key: 'price',
//     },
//     {
//         title: 'Quantity',
//         dataIndex: 'quantity',
//         key: 'quantity',
//     },
//     {
//         title: 'Summary',
//         dataIndex: 'summary',
//         key: 'summary',
//     },
//     {
//         title: 'Status',
//         dataIndex: 'status',
//         key: 'status',
//     },
//     {
//         title: 'Actions',
//         dataIndex: 'actions',
//         key: 'actions',
//         render: (actions, record) => {
//             const handleButton = (e) => {
//                 const tag = e.currentTarget.dataset.tag
//                 clientHandler(record, tag)
//             }
//             return (
//                 <>
//                     {actions.map(tag => <div key={Math.random()}>
//                             <button className="button"
//                                     data-tag={tag}
//                                     key={Math.random()}
//                                     name={tag} onClick={handleButton}>
//                                 {tag}
//                             </button>
//                         </div>
//                     )}
//                 </>
//             )
//         }
//     },
// ];
