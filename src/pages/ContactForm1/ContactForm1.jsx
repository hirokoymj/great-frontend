import React, { useState } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';
//const url = 'https://questions.greatfrontend.com/api/questions/contact-form';

const ContactForm1 = () => {
  console.log('ContactForm1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    if (errors.includes('name') || errors.includes('email')) return;

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
        setErrors({ name: false, email: false });
      });
  };
  const handleBlur = (field, value) => {
    setErrors((prev) => ({
      ...prev,
      [field]: value.trim() === '',
    }));
  };

  return (
    <div>
      <h1>ContactForm 1</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name', name)}
          />
          {errors.name && <p>'Required field'</p>}
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm1;
