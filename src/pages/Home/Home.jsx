import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>Coding Quiz</p>
      <ul>
        <li>
          <Link to="/demo">Demo - check a coding quiz challenge</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

// <div>
//   <p style={{ fontWeight: 'bold' }}>Coding Practice/QUiz</p>
//   <ul>
//     <li>
//       <Link to="/edit-item-demo">
//         React Quiz: Edit Item (Array of Objects)
//       </Link>
//     </li>
//     <li>
//       <Link to="/airport">Airport Board</Link>
//     </li>
//     <li>
//       <Link to="/game-profile">Game Profile</Link>
//     </li>
//     <li>
//       <Link to="/user-list">User list</Link>
//     </li>
//     <li>
//       <Link to="/quiz-3">MyTodoList</Link>
//     </li>
//   </ul>
//   <ul>
//     <li>
//       <Link to="/checkbox-demo">checkbox demo</Link>
//     </li>
//     <li>
//       <Link to="/test1">Like Button</Link>
//     </li>
//     <li>
//       {' '}
//       <Link to="/contact-form-1">Contact Form 1</Link>
//     </li>
//     <li>
//       {' '}
//       <Link to="/test4">Contact Form 2</Link>
//     </li>
//     <li>
//       {' '}
//       <Link to="/radio-demo">RadioGroupExample</Link>
//     </li>
//     <li>
//       <Link to="/test12">TodoList</Link>
//     </li>
//     <li>
//       <Link to="/test11">User View</Link>
//     </li>
//   </ul>
//   <h2>Managing State</h2>
//   <p style={{ fontWeight: 'bold' }}>Reacting</p>
//   <ul>
//     <li>
//       <Link to="/picture">Picture (add/remove css)</Link>
//     </li>
//     <li>
//       <Link to="/edit-profile">Edit Profile</Link>
//     </li>
//   </ul>
//   <p style={{ fontWeight: 'bold' }}>Choosing state</p>
//   <ul>
//     <li>
//       <Link to="/clock-demo">(C1) Clock</Link>
//     </li>
//     <li>
//       <Link to="/packing-list">(C2) Generating checkboxes</Link>
//     </li>
//     <li>
//       <Link to="/multi-selection">(C4) Multi selection</Link>
//     </li>
//     <li>
//       <Link to="/menu">(Q1) Menu</Link>
//     </li>
//     <li>
//       <Link to="/checkbox-demo">(Q2) Multi checkboxes</Link>
//     </li>
//   </ul>
//   <p style={{ fontWeight: 'bold' }}>Sharing state</p>
//   <ul>
//     <li>
//       <Link to="/synced-input">
//         Synced Input (lifting a state up to a parent comp.)
//       </Link>
//     </li>
//     <li>
//       <Link to="/accordion">Accordion (ex1)</Link>
//     </li>
//     <li>
//       <Link to="/filterable-list">Filterable List</Link>
//     </li>
//   </ul>
//   <p style={{ fontWeight: 'bold' }}>Reducer</p>
//   <ul>
//     <li>
//       <Link to="/reducer-demo">Reducer</Link>
//     </li>
//   </ul>
//   <p style={{ fontWeight: 'bold' }}>Context</p>
//   <ul>
//     <li>
//       <Link to="/image-context-demo">Image Context demo</Link>
//     </li>
//     <li>
//       <Link to="/user-context-demo">User Context demo</Link>
//     </li>
//   </ul>
// </div>
