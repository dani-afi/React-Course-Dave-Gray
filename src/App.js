import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  // const randomNames = ["daniel", "johny", "Klaus", "Other"];
  // let q;
  // const name = function () {
  //   q = Math.floor(Math.random() * randomNames.length);
  //   return randomNames[q];

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
