import {Card} from "antd";
import { FIXED_CURRENT_BUDGET_WITH_USD} from "../store/constant";


const Budget = ({totalSalary,clientIncome}) => {
    return <Card>
        <h3>Our Budget was {FIXED_CURRENT_BUDGET_WITH_USD}</h3>
        <h3>our Salary for employees is : {totalSalary}</h3>
        <h3>our Income from sales is :{clientIncome}</h3>
        <h2>So now we have :{FIXED_CURRENT_BUDGET_WITH_USD-totalSalary+clientIncome}</h2>

    </Card>
}

export default Budget