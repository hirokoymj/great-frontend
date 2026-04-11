# Quiz - useEffect

- [Quiz - useEffect](#quiz---useeffect)
  - [Q0: Learn React - Escape Hatches](#q0-learn-react---escape-hatches)
    - [Summary](#summary)
  - [Q1 - Fetch inside Effect 1 (setBio)](#q1---fetch-inside-effect-1-setbio)
    - [Hint](#hint)
    - [Answer](#answer)
  - [Q2: Fetch inside Effect 2 (PlanetId and PlaceId)](#q2-fetch-inside-effect-2-planetid-and-placeid)
    - [Hint](#hint-1)
    - [Answer](#answer-1)
  - [Q3: useEffect clean-up function](#q3-useeffect-clean-up-function)
    - [Hint](#hint-2)
    - [Answer](#answer-2)

✅❌

## Q0: Learn React - Escape Hatches

- [Escape Hatches](https://github.com/hirokoymj/great-frontend/tree/main?tab=readme-ov-file#escape-hatches)

### Summary

```js
useEffect(()=>{}) //Effects run after *every* render.
useEffect(() => {}, []) //Once (mount only)
useEffect(() => {}, [a]) //Mount + when "a" changes
useEffect(() => return ()=>{}) //Clean-up function (call every re-render)

//=====useEffect and Async
useEffect(() => {
  fetchBio(person).then((result) => {});
}, [person]);

useEffect(() => {
  fetchData('/planets').then((result) => {}});
}, []);

//===Clean up
const intervalId = setInterval(onTick, 1000);
return () => clearInterval(intervalId); //✅
```

## Q1 - Fetch inside Effect 1 (setBio)

- [Challenge 4 of 4: Fix fetching inside an Effect](https://react.dev/learn/synchronizing-with-effects#fix-fetching-inside-an-effect)

```js
import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    setBio(null);
    fetchBio(person).then((result) => {
      setBio(result);
    });
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  );
}
```

### Hint

If an Effect fetches something asynchronously, it usually needs cleanup.

### Answer

```js
import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  );
}
```

---

## Q2: Fetch inside Effect 2 (PlanetId and PlaceId)

- [Challenge 5 of 5: Populate a chain of select boxes](https://react.dev/learn/lifecycle-of-reactive-effects#populate-a-chain-of-select-boxes)

```js
import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export default function Page() {
  const [planetList, setPlanetList] = useState([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then((result) => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}>
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}>
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || '???'} on {planetId || '???'}{' '}
      </p>
    </>
  );
}
```

### Hint

- If you have two independent synchronization processes, you need to write two separate Effects

### Answer

```js
import { useState, useEffect } from 'react';
import { fetchData } from './api.js';

export default function Page() {
  const [planetList, setPlanetList] = useState([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then((result) => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (planetId === '') {
      // Nothing is selected in the first box yet
      return;
    }

    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then((result) => {
      if (!ignore) {
        console.log('Fetched a list of places on "' + planetId + '".');
        setPlaceList(result);
        setPlaceId(result[0].id); // Select the first place
      }
    });
    return () => {
      ignore = true;
    };
  }, [planetId]);

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}>
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}>
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || '???'} on {planetId || '???'}{' '}
      </p>
    </>
  );
}
```

---

## Q3: useEffect clean-up function

-[Challenge 3 of 4](https://react.dev/learn/synchronizing-with-effects#fix-an-interval-that-fires-twice)

```js
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount((c) => c + 1);
    }

    setInterval(onTick, 1000);
  }, []);

  return <h1>{count}</h1>;
}
```

### Hint

Keep in mind that setInterval returns an interval ID, which you can pass to clearInterval to stop the interval.

### Answer

```js
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount((c) => c + 1);
    }

    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId); //✅
  }, []);

  return <h1>{count}</h1>;
}
```
