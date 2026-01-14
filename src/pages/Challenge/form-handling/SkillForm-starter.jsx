import { useState } from 'react';

const SKILLS = ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Python'];

export default function SkillForm() {
  // TODO: state for selected skills

  const handleChange = (e) => {
    const { value, checked } = e.target;
    // TODO: handle add/remove skill
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select Your Skills</h2>

      {SKILLS.map((skill) => (
        <label key={skill} style={{ display: 'block' }}>
          <input
            type="checkbox"
            value={skill}
            // TODO: checked attribute
            onChange={handleChange}
          />
          {skill}
        </label>
      ))}

      <button type="submit">Submit</button>

      <hr />

      <h3>Selected Skills:</h3>
      {/* TODO: render selected skills */}
    </form>
  );
}

// README.md
// Bonus
//- Sort selected skills alphabetically.
