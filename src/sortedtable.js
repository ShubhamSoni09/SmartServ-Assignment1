import "./sortedtable.css";
const SortedTable = (props) => {
  return (
    <div>
      {/* <table> */}
      <tr>
        <td>{props.title}</td>
        <td>{props.subcategory}</td>
        <td>{props.price}</td>
        <td>{props.popularity}</td>
      </tr>
      {/* </table> */}
    </div>
  );
};

export default SortedTable;
