import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShowForm(false);
  };

  const newExpenseBtn = (
    <button onClick={() => setShowForm(!showForm)}>Add New Expense</button>
  );

  return (
    <form onSubmit={submitHandler}>
      {!showForm ? newExpenseBtn : null}
      {showForm && (
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
      )}
      {showForm && (
        <div className='new-expense__actions'>
          <button type='button' onClick={() => setShowForm(false)}>
            Cancel
          </button>
          <button>Add Expense</button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
