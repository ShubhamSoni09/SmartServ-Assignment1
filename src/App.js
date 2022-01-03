import axios from "axios";
import { useState, useEffect } from "react";
import SortedTable from "./sortedtable";
import "./sortedtable.css";
const App = () => {
  const [all, setAll] = useState([]);
  const apiUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json";

  const getData = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        var allProducts = Object.values(response.data.products);
        var sortedProducts = allProducts.sort((x, y) => {
          return y.popularity - x.popularity;
        });
        setAll(sortedProducts);
        console.log("sorted", sortedProducts);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <table>
        <tr>
          <th>Title</th>
          <th>SubCategory</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
        {all.map((ele, index) => {
          return (
            <SortedTable
              key={index}
              title={ele.title}
              price={ele.price}
              subcategory={ele.subcategory}
              popularity={ele.popularity}
            />
          );
        })}
      </table>
    </div>
  );
};

export default App;
