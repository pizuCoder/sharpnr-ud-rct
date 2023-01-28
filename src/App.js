// import logo from './logo.svg';
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import { expenses } from "./components/expenseData";

function App() {
  return (
    <div>
      <h1>Expense Items:</h1>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        ></ExpenseItem>
      ))}

      {/* <ExpenseItem
  title = {expenses[1].title}
  amount = {expenses[1].amount}
  date = {expenses[1].date}
  location = {expenses[1].location}>
  </ExpenseItem>

  <ExpenseItem
  title = {expenses[2].title}
  amount = {expenses[2].amount}
  date = {expenses[2].date}
  location = {expenses[2].location}>
  </ExpenseItem>

  <ExpenseItem
  title = {expenses[3].title}
  amount = {expenses[3].amount}
  date = {expenses[3].date}
  location = {expenses[3].location}>
  </ExpenseItem> */}
    </div>
  );
}
export default App;
