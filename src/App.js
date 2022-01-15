import React, {useCallback, useEffect, useState} from "react";
import {Loading} from "./components/Ui/Loading";
import MainEmployeeTable from "./components/Table/MainEmployeeTable";
import MainHeader from "./components/Ui/MainHeader";
import {Redirect, Route, Switch} from "react-router-dom";
import Costs from "./pages/Costs";
import Budget from "./pages/Budget";
import './App.css';
import Deals from "./pages/Deals";


function App() {
    const [totalSalaryForCosts, setTotalSalaryForCosts] = useState(0)
    const [clientIncome, setClientIncome] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 200)
            return () => {
                clearTimeout(timer)
            }
        }
        , [])
    const totalSalary = (totalSalary) => {
        setTotalSalaryForCosts(totalSalary)
    }
    const clientIncomeHandler = useCallback((clientIncome) => {
        setClientIncome(clientIncome)
    }, [])

    return (
        <>
            <MainHeader/>
            <Switch>
                <Route path='/' exact>
                    {isLoading && <Loading/>}
                    <MainEmployeeTable totalSalary={totalSalary} isLoading={isLoading}/>
                </Route>
                <Route path='/costs' exact>
                    <Costs totalSalary={totalSalaryForCosts}/>
                </Route>
                <Route path='/budget' exact>
                    <Budget totalSalary={totalSalaryForCosts} clientIncome={clientIncome}/>
                </Route>
                <Route path='/deals'>
                    <Deals clientIncomeHandler={clientIncomeHandler}/>
                </Route>
                <Route path='/:other'>
                    <Redirect to="/"/>
                </Route>

            </Switch>
        </>
    );
}

export default App;


