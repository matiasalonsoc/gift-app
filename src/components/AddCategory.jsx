/* eslint-disable react/prop-types */
import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const editingInput = (e) => {
    setInputValue(e.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) return;

    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className='w-full flex' onSubmit={addToList}>
      <input
        placeholder='Buscar Gifs'
        className='border py-2 px-2 w-full rounded-tl-xl rounded-bl-xl'
        type='text'
        value={inputValue}
        onChange={editingInput}
      />
    </form>
  );
};
