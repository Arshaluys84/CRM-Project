import Input from "../Ui/Input";
import React, {useState} from "react";
import {userMock} from "../../store/constant";
import {COMPANY_LIST, CURRENCY_LIST} from "../../store/constant";

const AddUserForm = ({onConfirm, validateMessage}) => {
    const [employee, setEmployee] = useState(userMock)
    const handleChangeEmployee = (e) => {
        setEmployee(prev => ({
            ...prev,
            key: Date.now(),
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        onConfirm(employee)
    }
    return (
        <form onSubmit={onSubmitHandler} className='form'>
            <Input type='text' value={employee.name} name='name' placeholder='name' onChange={handleChangeEmployee}/>
            <Input type='text' value={employee.lastName} name='lastName' placeholder='lastName'
                   onChange={handleChangeEmployee}/>
            <Input type='text' value={employee.address} placeholder='address' name='address'
                   onChange={handleChangeEmployee}/>
            <select name="company" onChange={(e) => handleChangeEmployee(e)}>
                {Object.values(COMPANY_LIST).map(comp => <option key={comp.id}
                                                                 value={comp.value}> {comp.value}</option>)}
            </select>
            <Input type='date' value={employee.dateOfBoarding} name='dateOfBoarding' placeholder='dateOfBoarding'
                   onChange={handleChangeEmployee} min="1997-01-01" max="2030-12-31"/>
            <Input type='number' value={employee.salary} name='salary' placeholder='salary'
                   onChange={handleChangeEmployee}/>
            <select name="currency" onChange={(e) => handleChangeEmployee(e)}>
                {Object.values(CURRENCY_LIST).map(cur => <option value={cur.value} key={cur.id}>{cur.title}</option>)}
            </select>
            <button className='button' type="submit">Confirm</button>
            {validateMessage ? <p>{validateMessage} </p> : ''}
        </form>)
}
export default AddUserForm