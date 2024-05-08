import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function App() {
  const [categories, setCategories] = useState(["Bitcoin", "Ethereum"]);

  const onAddCategory = (valor) => {
    const categoriesUpp = categories.map((category) => category.toUpperCase());
    if (categoriesUpp.includes(valor.toUpperCase())) return;
    setCategories([valor, ...categories]);
  };

  return (
    <div className=' flex h-screen flex-col items-center p-10 gap-5'>
      <h1 className=' text-4xl font-semibold'>GifExpertApp Final v.2</h1>

      {/* Input */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado Gif */}
      {/* Gif Item */}

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </div>
  );
}

export default App;
