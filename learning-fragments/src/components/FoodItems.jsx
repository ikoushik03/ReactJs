import Item from "./Item";
const FoodItems = ({ items }) => {
  //   let foodItems = [
  //     "Bhaji",
  //     "dal",
  //     "roti",
  //     "salad",
  //     "Green vegetable",
  //     "Egg",
  //     "Banana",
  //     "Milk",
  //     "Carrot",
  //     "Apple",
  //     "Potato",
  //     "Sujii",
  //   ];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
