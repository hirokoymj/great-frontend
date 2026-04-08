import React from 'react';

const images = [
  { id: 1, url: '/images/airport-board.png' },
  { id: 2, url: '/images/city-night.jpg' },
  { id: 3, url: '/images/beach-sunset.jpeg' },
  { id: 4, url: '/images/my.photo.image.png' },
];

// Should display: file name (extension)
// airport-board (png)
export default function App12() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Image List</h1>
      <ul>
        {images.map(({ id, url }) => {
          const fileName = url.split('/').pop();
          const nameOnly = fileName.split('.').slice(0, -1).join('.');
          const extension = fileName.split('.').pop();
          return (
            <li key={id}>
              <span>
                {nameOnly} ({extension})
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(0, -1));
//Array ["ant", "bison", "camel", "duck"]
