import {Card} from "antd";
import {FIXED_CURRENT_BUDGET_WITH_USD} from "../store/constant";

const Costs = ({totalSalary}) => {
    const fixedTotalSalary = totalSalary.toFixed(2)
    let balance = FIXED_CURRENT_BUDGET_WITH_USD - fixedTotalSalary
    return <Card>
        <p>Costs on Salary: <span>{fixedTotalSalary}</span></p>
        <p>Company Budget: <span>{FIXED_CURRENT_BUDGET_WITH_USD}</span></p>
        <p> Balance :{balance} </p>

    </Card>
}
export default Costs