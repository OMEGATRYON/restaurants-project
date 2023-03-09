import { useState, useEffect } from 'react';
import axios from 'axios';

function Appetizers() {
    const [data, setData] = useState({ menu: [] });
    

    
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://www.jsonkeeper.com/b/BKQ0',
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    return (
        <ul key={Appetizers.toString()} className="text-center">
        {data.menu.filter((dog) => dog.category.includes('Appetizer')).map(item => (
          <>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          <p className="card-text">{item.spicy_level}</p>
          </>
        ))}
      </ul>
    );
  }

export default Appetizers;
