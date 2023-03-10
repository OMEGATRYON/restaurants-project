import { useState, useEffect } from 'react';
import axios from 'axios';

function Dinner() {
    const [data, setData] = useState({ menu: [] });
    

    
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://www.jsonkeeper.com/b/69C6',
        );
        // T4HC
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    return (
        <ul id="fact" className="text-center container">
        {data.menu.filter((doggy) => doggy.category.includes('Dinner')).map(item => (
          <div key={item.id} id="appt">
          <h3 id="solocup" className="card-title ">{item.title}</h3>
          <p className="card-text ">{item.description}</p>
          <p className="card-text ">{item.price}</p>
          <p id="space" className="card-text ">PROGRAMMED HEAT! {item.spicy_level}</p>
          </div>
        ))}
      </ul>
    );
  }

export default Dinner;
