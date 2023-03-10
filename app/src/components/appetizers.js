import { useState, useEffect } from 'react';
import axios from 'axios';

function Appetizers() {
    const [data, setData] = useState({ menu: [] });
    // initializes a state variable called "data" to an object with an empty array called "menu".
   
    

    
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://www.jsonkeeper.com/b/69C6',
        );
        // T4HC
        setData(result.data);
      };
      // The "useEffect" hook runs a function called "fetchData" when the component mounts 
      // "fetchData" is an asynchronous function that sends a GET request to a JSON endpoint using the Axios library. 
      // When the data is returned, the "setData" function is called with the data from the response,
      //  which updates the state variable "data".
  
      fetchData();
    }, []);
   // the "[]" as the second argument ensures that this effect runs only once, when the component mounts
    return (
        <ul id="fact" className="text-center container">
          {/* a filter function is used to loop through the "menu" array inside the "data" object and
           only show items that belong to the "Appetizer" category. For each filtered item,
            a "div" element is created with a "key" attribute set to the item's "id" property. */}
        {data.menu.filter((dog) => dog.category.includes('Appetizer')).map(item => (
          // a filter function is used to loop through the "menu" array inside the "data" object and only show items that belong to the "Appetizer" category. 
          <div key={item.id} id="appt">
            {/* a "div" element is created with a "key" attribute set to the item's "id" property. THIS IS UNIQUE to it */}
          <h3 id="solocup" className="card-title ">{item.title}</h3>
          <p className="card-text ">{item.description}</p>
          {/* A "p" element with a class of "card-text" is created and its text content is set to the item's "description" property.  */}
          <p className="card-text ">{item.price}</p>
          {/* This is connecting to the price of the item in the category. */}
          <p id="space" className="card-text ">PROGRAMMED HEAT! {item.spicy_level}</p>
          {/* Its text content is set to "PROGRAMMED HEAT!" followed by the item's "spicy_level" property. 
          The resulting JSX code is returned by the function. */}
          </div>
        ))}
      </ul>
    );
  }

export default Appetizers;
