# GreatFrontend - Like/Liked button

- https://github.com/piyush-eon/frontend-interview-questions/tree/master/reactjs-interview-questions/like-button
- https://www.greatfrontend.com/questions/user-interface/like-button/react?framework=react&tab=coding
- https://www.youtube.com/watch?v=umBMs-m0JMw

## Point

```js
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name }),
})
  .then((response) => {
    if (response.ok) {
      //200-299 range
    } else {
      // non-200, including 400s and 500s
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  })
  .then((data) => {})
  .catch((error) => {})
  .finally(() => {});
```

```js
<button
  onClick={handleLikeUnlike}
  className={`likeBtn ${liked ? 'liked' : ''}`}>
  {isFetching ? <SpinnerIcon /> : <HeartIcon />}
  {liked ? 'Liked' : 'Like'}
</button>
```

## React + Vite

```js
npm run dev
```
