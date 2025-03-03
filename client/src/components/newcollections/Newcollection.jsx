import React from "react";
import "./newcollection.css";
// import new_collection from "../assets/new_collections";
import Item from "../items/item";
const apiurl=process.env.REACT_APP_SERVER_URL;

const Newcollection = () => {
  const [new_collection, setNew_collection] = React.useState([]);
  React.useEffect(() => {
    console.log(`${apiurl}/newcollection`)
    fetch(`${apiurl}/newcollection`)
      .then((res) => res.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <div className="newcollection">
      <h1>new collection</h1>
      <hr />
      <div className="collection-items">
        {new_collection.map((item, i) => 
        {
          return <Item
            key={i}
            id={item.id}
            image={`${apiurl}/${item.image}`}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            />;
        })}
      </div>
    </div>
  );
};

export default Newcollection;
