//import "components./App.css"; // At the top of your file
import styles from "./Item.module.css";

// const Item = ({ foodItem }) => {
//   const handleBuyButtonClicked = (foodItem) => {
//     console.log(`${foodItem} being bought`);
//   };
//   // console.log(styles);
//   return (
//     <li className={`${styles["kg-item"]} list-group-item`}>
//       <span className="kg-span">{foodItem}</span>
//       <button
//         className={`${styles.button} btn btn-info`}
//         onClick={() => handleBuyButtonClicked(foodItem)}
//       >
//         Buy
//       </button>
//     </li>
//   );
// };

//Passing function reference

//
const Item = ({ foodItem, handleBuyButton }) => {
  // console.log(styles);
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className="kg-span">{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
