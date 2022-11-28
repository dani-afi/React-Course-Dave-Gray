import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "One half pound if Cocoa Covered" },
    { id: 2, checked: false, item: "Item2" },
    { id: 3, checked: false, item: "Item3" },
  ]);
  // const randomNames = ["daniel", "johny", "Klaus", "Other"];
  // let q;
  // const name = function () {
  //   q = Math.floor(Math.random() * randomNames.length);
  //   return randomNames[q];

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopinglist", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
