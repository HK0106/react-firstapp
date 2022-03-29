import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  const titleChangeHandler = (event) => {
    // setUserInput(prevState => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  }

  const amountChangeHandler = (event) => {

  }

  const dateChangeHandler = (event) => {

  }

  return (
      <div className='new-expense__control'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__actions'>
          <button type=''submit>Add Expense</button>
        </div>
      </div>
  );
}

export default ExpenseForm;