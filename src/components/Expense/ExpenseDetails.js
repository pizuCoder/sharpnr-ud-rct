import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;
  
  

  
    

      const handleDelete = () => {
        console.log('dont know how to useState and useRef yet :)')
      };

  
 

  

  return (
    
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{location}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleDelete}>Delete Expense</button>
      </div>
  
  
    
  );
};

export default ExpenseDetails;
