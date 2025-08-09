import React, { useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';
//const url = 'https://questions.greatfrontend.com/api/questions/contact-form';

const ContactForm1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const jsonString = JSON.stringify({ name, email });
    console.log(jsonString);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then((respnose) => respnose.json())
      .then((data) => {
        alert(JSON.stringify(data));
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setName('');
        setEmail('');
      });
  };

  return (
    <div>
      <h1>ContactForm 1</h1>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={onSubmit}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm1;
