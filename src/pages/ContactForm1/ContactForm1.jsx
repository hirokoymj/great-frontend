import React, { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/users';
//const url = 'https://questions.greatfrontend.com/api/questions/contact-form';

const ContactForm1 = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('failed' + response.status);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.name || errors.email || name === '' || email === '') return;
    setSubmitting(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 12345, name, email }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('fail');
        return response.json();
      })
      .then((data) => {
        setUsers([...users, data]);
        setName('');
        setEmail('');
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  const handleBlur = (field, value) => {
    setErrors((prev) => ({
      ...prev,
      [field]: value.trim() === '',
    }));
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onUpdate = (id) => {
    const found = users.find((user) => user.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(found.name);
    setEmail(found.email);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const updated = users.map((user) =>
      user.id === editId ? { ...users, name, email } : user
    );
    setUsers([...updated]);
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
            onBlur={() => handleBlur('email', email)}
          />
        </label>
        {errors.email && <p>'Required field'</p>}

        <button disabled={submitting} type="submit">
          {submitting ? 'Sending' : 'Send'}
        </button>
      </form>
      <hr />
      {loading ? (
        <p>...loading</p>
      ) : (
        <ul>
          {users.map(({ id, name, email }) => (
            <li key={`${id}-${name}`}>
              {id}: {name},{email}
              <button onClick={() => handleDelete(id)}>Delete</button>
              <button onClick={() => onUpdate(id)}>Update</button>
            </li>
          ))}
        </ul>
      )}
      {isEdit && (
        <form onSubmit={handleEdit}>
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
              onBlur={() => handleBlur('email', email)}
            />
          </label>
          {errors.email && <p>'Required field'</p>}

          <button type="submit">Edit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm1;
