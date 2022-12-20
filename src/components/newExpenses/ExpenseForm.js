import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value});
    };

    const amountChangeHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value});
        setAmount(event.target.value)
    }

    const dateChangeHandler = event => {
        setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value});

        //use the previous state if you are dependent on the previous state
        // setUserInput((prevState => {
        //    return { ...prevState,enteredDate: event.target.value}
        // }))
    }

    const submitHandler = (event) => {
        event.preventDefault()// prevent of the request being sent so that the page does not reload and nothing is reset
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setDate('')
        setAmount('')
        console.log(expenseData)
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Submit</button>
        </div>
    </form>
}
export default ExpenseForm