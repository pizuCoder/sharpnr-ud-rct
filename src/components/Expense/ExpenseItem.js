import React, {useState} from "react"
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 1, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 249.67;
    // const expenseLocation = 'Mumbai'
    const [show, setShow] = useState(true)
    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)

    function changeTitle() {
      setTitle('New Title')
    }
    function changeAmount() {
      setAmount('100')
    }
    

    const handleDelete = () => {
      setShow(prevShow => !prevShow)
    };

  return (
    <div>
    {show && <div className= "expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails 
      title = {title}
      location = {props.location}
      amount = {amount}/>
      <button onClick={handleDelete}>Delete Expense</button>
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={changeAmount}>Change Amount</button>
    </div>}
    </div>
  );
}
export default ExpenseItem;
