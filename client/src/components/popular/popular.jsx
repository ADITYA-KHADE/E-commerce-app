import React from 'react'
import "./popular.css"
// import Data_product from '../assets/data'
import Item from '../items/item'
const apiurl=process.env.REACT_APP_SERVER_URL;

const Popular = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`${apiurl}/popular`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="popular">
        <h1>Popular in women</h1>
        <hr /> 
        <div className="popular-items">
            {data.map((item,i) => (
                <Item
                    key={i}
                    id={item.id}
                    image={`${apiurl}/${item.image}`}
                    name={item.name}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>    
    </div>
  )
}

export default Popular
