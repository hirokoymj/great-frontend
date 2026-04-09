import { useActionState, useState } from 'react';
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required('Name is required.'),
  email: yup.string().email('Invalid email.').required('Email is required.'),
});

async function submitForm(prevState, formData) {
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();

  try {
    await formSchema.validate({ name, email }, { abortEarly: false });
    return { errors: {}, message: `Hello, ${name}, ${email}!` };
  } catch (err) {
    const errors = err.inner.reduce((acc, e) => {
      acc[e.path] = e.message;
      return acc;
    }, {});
    return { errors, message: '' };
  }
}

const initialState = { message: '', errors: {} };

export default function SimpleForm() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState,
  );
  const [clientErrors, setClientErrors] = useState({});

  // Validate a SINGLE field on blur using Yup's validateAt()
  const handleBlur = async (e) => {
    const { name, value } = e.target;
    try {
      await formSchema.validateAt(name, { [name]: value.trim() });
      // Clear error if valid
      setClientErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (err) {
      setClientErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };

  // Merge: client errors take priority over action errors
  const errors = { ...state.errors, ...clientErrors };

  return (
    <form action={formAction}>
      <input name="name" placeholder="Enter your name" onBlur={handleBlur} />
      {errors?.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <input name="email" placeholder="Enter your email" onBlur={handleBlur} />
      {errors?.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>

      {state.message && <p style={{ color: 'green' }}>{state.message}</p>}
    </form>
  );
}
