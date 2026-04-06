import { useState } from 'react';

const initialProfile = {
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
};

export default function App() {
  const [profile, setProfile] = useState(initialProfile);

  function handleChange(e) {
    // TODO:
    // Update the correct property in the profile object
    // based on the input's name and value
    const name = e.target.name;
    setProfile((prev) => ({ ...prev, [name]: e.target.value }));
  }

  function handleReset() {
    // TODO:
    // Reset profile back to initialProfile
    setProfile(initialProfile);
  }

  function previewText() {
    const { firstName, lastName, email, jobTitle } = profile;
    return `Hello, I am ${firstName} ${lastName}.
          My email is ${email} and I work as ${jobTitle}.`;
  }

  return (
    <div
      style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '500px' }}>
      <h1>Profile Form</h1>

      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={profile.jobTitle}
            onChange={handleChange}
            // TODO: value
            // TODO: onChange
          />
        </label>

        <br />
        <br />

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>
        {
          /* TODO:
          Hello, I am FIRSTNAME LASTNAME.
          My email is EMAIL and I work as JOBTITLE.
        */ previewText()
        }
      </p>

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}
