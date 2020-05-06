import React from 'react';
import Button from './Button';
import Input from './Input';

export default function Form({ inputValue, setInputValue, onSubmit }) {
  return (
    <form>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button onSubmit={onSubmit} />
    </form>
  );
}
