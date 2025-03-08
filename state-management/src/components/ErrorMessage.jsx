const ErrorMessage = ({ items }) => {
  //   let foodItems = [
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
  //   ];

  return <>{items.length === 0 && <h3>I m Still Hungry</h3>}</>;
};

export default ErrorMessage;
