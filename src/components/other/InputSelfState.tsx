import { useState } from 'react';

type Props = {
  placeholder?: string;
  content?: string;
};

export function Input({ placeholder, content }: Props) {
  const [input, setInput] = useState(content ? content : '');

  return (
    <input
      className='focus:border-b focus:border-blue-300 focus:outline-none'
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder ? placeholder : ''}
    />
  );
}
