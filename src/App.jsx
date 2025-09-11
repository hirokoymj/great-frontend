import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LikeBtn from './pages/LikeButton/LikeBtn';
import Accordion from './pages/Accordion/Accordion';
import Accordion1 from './pages/Accordion/Accordion1';
import ContactForm1 from './pages/ContactForm1/ContactForm1';
import ContactForm2 from './pages/ContactForm2/ContactForm2';
import RadioGroupExample from './pages/ContactForm2/RadioGroupExample';
import CheckboxExample from './pages/ContactForm2/CheckboxExample';
import Tabs from './pages/Tabs/Tabs';
import ProgresBar from './pages/ProgressBar/ProgressBar';
import MorgageCalculator from './pages/Morgage/MorgageCalculator';
import Posts from './pages/Posts/Posts';
import StopWatch from './pages/StopWatch/Stopwatch';
import ToDo from './pages/Todo/ToDo';
import { UsersView } from './pages/Users/UsersView';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/test1">Like Button</Link>
        </li>
        <li>
          <Link to="/test2">Accordion</Link>;
          <Link to="/test2-1">Accordion-1</Link>;
        </li>
        <li>
          {' '}
          <Link to="/test3">Contact Form 1</Link>
        </li>
        <li>
          {' '}
          <Link to="/test4">Contact Form 2</Link>
        </li>
        <li>
          {' '}
          <Link to="/radio-demo">RadioGroupExample</Link>
        </li>
        <li>
          <Link to="/checkbox-demo">CheckboxExample</Link>
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
        <Route path="test1" element={<LikeBtn />} />
        <Route path="test2" element={<Accordion />} />
        <Route path="test2-1" element={<Accordion1 />} />
        <Route path="test3" element={<ContactForm1 />} />
        <Route path="test4" element={<ContactForm2 />} />
        <Route path="radio-demo" element={<RadioGroupExample />} />
        <Route path="checkbox-demo" element={<CheckboxExample />} />
        <Route path="test5" element={<Tabs />} />
        <Route path="test6" element={<ProgresBar />} />
        <Route path="test7" element={<MorgageCalculator />} />
        <Route path="test8" element={<Posts />} />
        <Route path="test9" element={<StopWatch />} />
        <Route path="test10" element={<ToDo />} />
        <Route path="test11" element={<UsersView />} />
      </Routes>
    </BrowserRouter>
  );
}
