import './App.css';
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSSES = [{
    title: 'Car Insurance', amount: 294.67
    , date: new Date(2022, 2, 28)
},
    {
        title: 'TV', amount: 23
        , date: new Date(2022, 2, 12)
    }, {
        title: 'PLay Station 2', amount: 444.2
        , date: new Date(2022, 5, 23)
    }]

function App() {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSSES)
    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        })
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
