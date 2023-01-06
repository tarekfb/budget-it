'use client';
import { FormEvent, useState } from 'react';

import Button from '@/components/buttons/Button';
import { Input } from '@/components/other/Input';

type Form = {
  income: number;
  savings: number;
  fund: number;
  expenses: number;
};

export default function BudgetForm() {
  const [income, setIncome] = useState('');
  const [savings, setSavings] = useState('');
  const [fund, setFund] = useState('');
  const [expenses, setExpenses] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = buildFormObject();
    fetch('http://localhost:3000/api/budgeting', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  };

  const buildFormObject = (): Form => {
    return {
      income: Number(income),
      savings: Number(savings),
      fund: Number(fund),
      expenses: Number(expenses),
    };
  };

  return (
    <form
      className='flex flex-col items-start space-y-2'
      onSubmit={handleSubmit}
    >
      <label className='text-lg md:text-xl'>Monthly net income</label>
      <Input placeholder='30000' input={income} setInput={setIncome} />

      <label className='text-lg md:text-xl'>Emergency fund</label>
      <Input placeholder='20000' input={fund} setInput={setFund} />

      <label className='text-lg md:text-xl'>Other savings</label>
      <Input placeholder='10000' input={savings} setInput={setSavings} />

      <label className='text-lg md:text-xl'>Monthly expenses</label>
      <Input placeholder='3500' input={expenses} setInput={setExpenses} />

      <Button type='submit' variant='primary'>
        Primary Variant
      </Button>
    </form>
  );
}

// - enter monthly net income
//   - enter total savings
//     - enter emergency fund
//       - enter monthly expenses
//         - subflow for calculating if needed
//           - enter monthly investments / savings
