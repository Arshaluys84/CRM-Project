import {Table} from "antd";
import 'antd/dist/antd.css';
import React, {useEffect, useState} from "react";
import AddUserForm from "../AddUser/AddUserForm";
import {salaryExchange} from "../../common/Helpers";
import Backdrop from "../Ui/Backdrop";
import {DELETE_BUTTON, employeesColumns,} from "../../store/constant";
import {useDispatch, useSelector} from "react-redux";
import {
    addEmployeeCreator,
    deleteEmployeeCreator,
    employeeKey,
    employees, setValidationMessageCreator,
    updateEmployeesCreator, validationMessage
} from "../../store/redux/employeesReducer";

const MainEmployeeTable = ({totalSalary}) => {
    const [formIsOpen, setFormIsOpen] = useState(false)
    const [updatedCompany, setUpdatedCompany] = useState(false)
    const employeesList = useSelector(employees)
    const updatedKey = useSelector(employeeKey)
    const validateMessage = useSelector(validationMessage)
    const dispatch = useDispatch()
    useEffect(() => {
        if (employeesList.length > 0) {
            totalSalary(employeesList.map(emp => salaryExchange(emp)).reduce((a, b) => a + +b))
        }
    }, [employeesList, totalSalary])

    const deleteEmployeeHandler = (button, tag) => {
        if (tag === DELETE_BUTTON) {
            dispatch(deleteEmployeeCreator(button))
        } else {
            setFormIsOpen(false)
            setUpdatedCompany(true)
            dispatch(updateEmployeesCreator(button))
            dispatch(deleteEmployeeCreator(button))
        }
    }
    employeesColumns.filter(item => item.key === 'actions').map(item => item
        .render = (actions, record) => {

        const handleButton = (e) => {
            const tag = e.currentTarget.dataset.tag
            deleteEmployeeHandler(record, tag)
        }
        return (<>  {actions.map((tag, index) => <div key={index}>
            <button className={`button ${tag}`}
                    data-tag={tag}
                    key={index}
                    name={tag} onClick={handleButton}>
                {tag}
            </button>
        </div>)}   </>)
    })

    const onclickAddHandler = () => {
        setFormIsOpen(prev => !prev)
    }
    const onConfirm = React.useCallback((employee) => {
        if (employee.name === '' || employee.salary <= 0 || employee.currency === '') {
            dispatch(setValidationMessageCreator('Name , salary, currency is required'))
            return;
        }
        dispatch(addEmployeeCreator({...employee, key: updatedKey || Date.now()}))
        setFormIsOpen(false)
        setUpdatedCompany(false)
        dispatch(updateEmployeesCreator(''))
        dispatch(setValidationMessageCreator(''))
    }, [updatedKey, dispatch])
    const backdropHandler = () => {
        setFormIsOpen(prev => !prev)
    }
    return (
        <>
            <button onClick={onclickAddHandler}>Add user</button>
            {formIsOpen && <AddUserForm onConfirm={onConfirm} validateMessage={validateMessage}/>}
            {formIsOpen && <Backdrop backdropHandler={backdropHandler}/>}
            {updatedCompany && <AddUserForm onConfirm={onConfirm} validateMessage={validateMessage}/>}
            {updatedCompany && <Backdrop backdropHandler={backdropHandler}/>}
            <Table dataSource={employeesList} columns={employeesColumns}/>
        </>
    )
}


export default MainEmployeeTable

