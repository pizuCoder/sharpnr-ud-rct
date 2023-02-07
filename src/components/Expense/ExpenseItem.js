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


  
    

    const handleDelete = () => {
      setShow(prevShow => !prevShow)
    };

  return (
    <div>
    {show && <div className= "expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails 
      title = {props.title}
      location = {props.location}
      amount = {props.amount}/>
      <button onClick={handleDelete}>Delete Expense</button>
    </div>}
    </div>
  );
}
export default ExpenseItem;
