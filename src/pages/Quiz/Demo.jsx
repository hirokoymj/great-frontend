import React from 'react';

//airport-board (png);
//city-night (jpg);

const images = [
  { id: 1, url: '/images/airport-board.png' },
  { id: 2, url: '/images/city-night.jpg' },
  { id: 3, url: '/images/beach-sunset.jpeg' },
];

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Image List</h1>
      <ul>
        {images.map(({ id, url }) => {
          const filename = url.split('/').pop();
          const [file, ext] = filename.split('.');
          return (
            <li key={id}>
              {file} - ({ext})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
