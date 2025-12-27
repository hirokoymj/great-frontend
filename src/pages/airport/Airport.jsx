import { useState } from 'react';
import { data } from './data';

const FlightList = ({ data }) => {
  return (
    <ul>
      {data.map(({ time, city }) => (
        <li key={`${time}-${city}`}>
          {time}, {city}
        </li>
      ))}
    </ul>
  );
};

const Airport = () => {
  const [items, setItems] = useState(data);
  return (
    <div>
      <h1>test</h1>
      <FlightList data={items} />
    </div>
  );
};

export default Airport;
