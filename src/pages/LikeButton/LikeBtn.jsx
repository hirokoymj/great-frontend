import { HeartIcon, SpinnerIcon } from './icons';
import { useState } from 'react';
import './styles.css';

export default function LikeBtn() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = () => {
    setError(null);
    setIsFetching(true);

    fetch('https://questions.greatfrontend.com/api/questions/like-button', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: liked ? 'unlike' : 'like',
      }),
    })
      .then((response) => {
        if (response.ok) {
          //200
          setLiked(!liked);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .catch((error) => {
        setError(`Fetch error : ${error.message}`);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <div>
      <button
        onClick={handleLikeUnlike}
        className={`likeBtn ${liked ? 'liked' : ''}`}>
        {isFetching ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? 'Liked' : 'Like'}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}
//https://github.com/piyush-eon/frontend-interview-questions/tree/master/reactjs-interview-questions/like-button
//https://www.greatfrontend.com/questions/user-interface/like-button/react?framework=react&tab=coding
//https://www.youtube.com/watch?v=umBMs-m0JMw

//   const handleLikeUnlike = async () => {
//     setError(null);
//     setIsFetching(true);

//     try {
//       const response = await fetch(
//         'https://questions.greatfrontend.com/api/questions/like-button',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             action: liked ? 'unlike' : 'like',
//           }),
//         }
//       );

//       if (response.status >= 200 && response.status < 300) {
//         setLiked(!liked);
//       } else {
//         const res = await response.json();
//         setError(res.message);
//         return;
//       }
//     } finally {
//       setIsFetching(false);
//     }
//   };
