import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = [
    "dal",
    "roti",
    "salad",
    "Green vegetable",
    "Egg",
    "Banana",
    "Milk",
    "Carrot",
    "Apple",
    "Guava",
  ];

  //let foodItems = [];

  // if (foodItems.length === 0) {
  //   return;
  // }

  //let emptyMessage = foodItems.length === 0 ? ;

  let textToShow = "Food items enter by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };
  return (
    <>
      <Container>
        <h1 className="food-heading"> Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p> {textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above list for your good health and wealth</p>
      </Container> */}
    </>
  );
}

export default App;
