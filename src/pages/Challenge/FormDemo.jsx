import { useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    gender: '',
    subscribe: false,
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = formData;
    const newErrors = {
      name: !name,
      email: !email,
    };
    //setErrors((prev) => ({ ...prev, ...newErrors }));//❌
    //if (errors.name || errors.email) return;//❌
    setErrors((prev) => ({ ...prev, ...newErrors }));

    const isValid = !newErrors.name || !newErrors.email ? true : false;
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      role: '',
      gender: '',
      subscribe: false,
    });
    setErrors({
      name: false,
      email: false,
    });
  };

  const validateField = (field, value) => {
    setErrors((prev) => ({
      ...prev,
      [field]: value === '' ? true : false,
    }));
  };
  return {
    formData,
    errors,
    handleChange,
    validateField,
    handleSubmit,
    resetForm,
  };
};

export default function FormDemo() {
  const [submitted, setSubmitted] = useState(false); //⚠️ Logical / Design Improvements
  const {
    formData,
    errors,
    handleChange,
    validateField,
    handleSubmit,
    resetForm,
  } = useForm();

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Registration Form</h2>

      <form
        onSubmit={(e) => {
          const isValid = handleSubmit(e);
          if (isValid) setSubmitted(true);
        }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={(e) => validateField('name', e.target.value)}
        />
        {errors.name && <p>Name is required field</p>}
        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={(e) => validateField('email', e.target.value)}
        />
        {errors.email && <p>Email is required field</p>}
        <br />
        <br />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select role</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === 'Male'}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === 'Female'}
          />
          Female
        </label>

        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>

        <br />
        <br />

        <button type="submit" disabled={errors.name || errors.email}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            resetForm();
            setSubmitted(false);
          }}>
          Reset
        </button>
      </form>
      {submitted && <pre>{JSON.stringify(formData, null, 2)}</pre>}
    </div>
  );
}

// export default function FormDemo() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     role: '',
//     gender: '',
//     subscribe: false,
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({
//     name: false,
//     email: false,
//   });

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, email } = formData;
//     const newErrors = {
//       name: !name,
//       email: !email,
//     };
//     setErrors((prev) => ({ ...prev, ...newErrors }));

//     if (errors.name || errors.email) return;

//     setSubmitted(true);
//     //resetForm();❌ Fix
//   };

//   const resetForm = () => {
//     setSubmitted(false);
//     setFormData({
//       name: '',
//       email: '',
//       role: '',
//       gender: '',
//       subscribe: false,
//     });
//     setError({
//       name: false,
//       email: false,
//     });
//   };

//   const validateForm = (field, value) => {
//     setErrors((prev) => ({
//       ...prev,
//       [field]: value === '' ? true : false,
//     }));
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>User Registration Form</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           onBlur={(e) => validateForm('name', e.target.value)}
//         />
//         {errors.name && <p>Name is required field</p>}
//         <br />
//         <br />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           onBlur={(e) => validateForm('email', e.target.value)}
//         />
//         {errors.email && <p>Email is required field</p>}
//         <br />
//         <br />

//         {/* Role */}
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="">Select role</option>
//           <option value="Developer">Developer</option>
//           <option value="Designer">Designer</option>
//           <option value="Manager">Manager</option>
//         </select>

//         <br />
//         <br />

//         {/* Gender */}
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="Male"
//             onChange={handleChange}
//             checked={formData.gender === 'Male'}
//           />
//           Male
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="Female"
//             onChange={handleChange}
//             checked={formData.gender === 'Female'}
//           />
//           Female
//         </label>

//         <br />
//         <br />

//         {/* Subscribe */}
//         <label>
//           <input
//             type="checkbox"
//             name="subscribe"
//             checked={formData.subscribe}
//             onChange={handleChange}
//           />
//           Subscribe to newsletter
//         </label>

//         <br />
//         <br />

//         <button type="submit" disabled={errors.name || errors.email}>
//           Submit
//         </button>
//         <button type="button" onClick={resetForm}>
//           Reset
//         </button>
//       </form>
//       {submitted && <pre>{JSON.stringify(formData, null, 2)}</pre>}
//     </div>
//   );
// }
