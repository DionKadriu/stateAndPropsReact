import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeFilter = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses1">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeFilter}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card></div>)

}

export default Expenses