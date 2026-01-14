import { useState } from 'react';

const SKILLS = ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Python', 'aaa'];

export default function SkillForm() {
  // TODO: state for selected skills
  const [selected, setSelected] = useState([]); //['React', 'TypeScript']

  const sorted = [...selected].sort(
    (a, b) => a.toLowerCase() - b.toLowerCase()
  ); // ❌ 1. Array.sort() mutates state (BIG interview issue)

  const handleChange = (e) => {
    const { value, checked } = e.target;
    // TODO: handle add/remove skill
    if (checked) {
      setSelected((prev) => [...prev, value]);
    } else {
      setSelected((prev) => prev.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit logic
    console.log(selected.join(', '));
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
            checked={selected.includes(skill)} //❌ 2. Incorrect checked attribute
            onChange={handleChange}
          />
          {skill}
        </label>
      ))}

      <button type="submit">Submit</button>

      <hr />

      <h3>Selected Skills: Selected ({sorted.length})</h3>
      <ul>
        {
          /* TODO: render selected skills */
          sorted.map((skill) => (
            <li key={skill}>{skill}</li>
          ))
        }
      </ul>
      {sorted.length === 0 && <p>No skills are selected</p>}
    </form>
  );
}
