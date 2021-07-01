import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e2',
      title: 'Chocolate',
      amount: 3.95,
      date: new Date(2021, 2, 29),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (newExpenses) => {
    expenses.push(newExpenses);

    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );

  // How returned JSX is transformed into javascript under the hood
  // That's why we import React from 'react' in components where we use JSX in older projects

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Expenses App'),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
};

export default App;
