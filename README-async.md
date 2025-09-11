# RESTful API

```js
//=====[Async: then.catch.finally]
fetch(url, option)
.then(response=>{ if(response.ok) return response.json()})
.then(data=>{})
.catch(e=>{})
.finally(()=>{})
//=====[Async: async/await/try-catch]
const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    const data = await response.json();
    setUsers(data);
  } catch (e) {}
};
//=====[HTTP Options]
------------------------------
method: 'GET'
------------------------------
method: 'GET',
headers: {Authorization: `Bearer ${token}`}
------------------------------
method: 'POST',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({ name, email })
------------------------------
https://users/${id}
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ ...user, name: 'dummy' })
------------------------------
https://users/${id}
method: 'DELETE'
------------------------------
//=====[Promise, async function, pending/fullfilled/rejected]
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
}).then((val) => console.log(val)); //777
//=====[REACT.js]
useEffect(()=>{}, [])
```

## Example - GET

- async/await/try-catch
- then.catch.finally

```js
//===[async/await/try-catch]
const getUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) throw new Error('Failed to get users data.');
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  } catch (e) {
    setError(e);
  }
};

//=====[then.catch.finally]
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    if (!response.ok) throw new Error('Failed to get users data.');
    return response.json();
  })
  .then((data) => {
    setUsers(data);
  })
  .catch((e) => {
    setError(e);
  })
  .finally(() => {
    setLoading(false);
  });
```

## Example - POST

- async/await/try-catch
- then.catch.finally

```js
//=====[async/await/try-catch]
const createUser = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    setUsers([...users, data]);
    setName('');
    setEmail('');
    setLoading(false);
  } catch (e) {
    setError(error);
  }
};

//=====[then.catch.finally]
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email }),
})
  .then((response) => response.json())
  .then((data) => {
    setUsers([...users, data]);
  })
  .catch((error) => {
    setError(error);
  })
  .finally(() => {
    setName('');
    setEmail('');
    setLoading(false);
  });
```

## Example - DELETE

- async/await/try-catch
- then.catch.finally

```js
//=====[then.catch.finally]
fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  method: 'DELETE',
})
  .then((response) => {
    if (!response.ok) throw new Error('');
    return response.json();
  })
  .then((_) => {
    setMessage('Item deleted successfully:');
    setUsers((values) => values.filter((item) => item.id !== id));
  })
  .catch((e) => {
    setError('Delete failed');
    console.log(e);
  })
  .finally(() => {
    setLoading(false);
  });
//=====[async/await/try-catch]
const deleteUser = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();
    setMessage('Item deleted successfully:');
    setUsers((values) => values.filter((item) => item.id !== id));
    setLoading(false);
  } catch (e) {
    setError('Delete failed');
    setLoading(false);
  }
};
```

### Example AI

```js
//async/await
const generateSummary = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: [
        createUserContent([
          'Summarize the following text in less than 300 characters.',
          example1,
        ]),
      ],
    });
    setStatus('success');
    setOutput(response.text);
  } catch (error) {
    setStatus('error');
  }
};
//then.catch
const generateSummary2 = () => {
  setStatus('loading');
  ai.models
    .generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: [
        createUserContent([
          'Summarize the following text in less than 300 characters.',
          example1,
        ]),
      ],
    })
    .then((response) => {
      if (!response.text) throw new Error('failed to get response');
      setStatus('success');
      setOutput(response.text);
    })
    .catch((error) => {
      setStatus('error');
    });
};
```

## Quiz

**Question 1:**

- fetch, GET ===> async/await/try-catch OR then.catch.finally
- fetch, POST
- fetch, PUT
- fetch, DELETE

**GET**

```js
const getUser = async () =>{
  try{
   const response = await fetch("/users", {method: GET})
   const data = await response.json()
  }catch(e){}
}
//
fetch("/users", {method: GET})
.then((response) => return response.json())
.then((data)=>{})
.catch(e =>{})
```

**POST**

```js
const createUser = async () => {
  try {
    const response = await fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
  } catch (e) {}
};
//then.catch.finally
fetch("/users", {
	method: POST,
	headers:{ 'Content-Type': 'application/json'},
	body: JSON.stringfy({email})})
.then((response) => return response.json())
.then((data)=>{})
.catch(e =>{})
.finally(()=>{})
```

### Example 1 - GET/POST/DELETE/PUT

- [UsersView.tsx](./src/Users/UsersView.tsx)

## References:

- https://dev.to/collegewap/react-fetch-example-getpostputdelete-with-api-3l00
- https://stackoverflow.com/questions/62613709/implement-usefetch-react-hook-to-work-inside-submit-function
- [MDN fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- - [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
