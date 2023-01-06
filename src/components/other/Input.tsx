type Props = {
  input: string;
  setInput: (value: string) => void;
  placeholder?: string;
};

export function Input({ placeholder, input, setInput }: Props) {
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
