import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//Learn React
import Menu from './managing-state/State-Structure/Q5';

const Home = () => {
  return (
    <div>
      <h1>Learn React</h1>
      <h2>===Managing State</h2>
      <ul>
        <li>
          <Link to="/state-structure-q5">State Structure - Q5</Link>
        </li>
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="state-structure-q5" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
