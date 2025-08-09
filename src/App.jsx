import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LikeBtn from './pages/LikeButton/LikeBtn';
import Accordion from './pages/Accordion/Accordion';
import ContactForm1 from './pages/ContactForm1/ContactForm1';
import ContactForm2 from './pages/ContactForm2/ContactForm2';
import Tabs from './pages/Tabs/Tabs';
import ProgresBar from './pages/ProgressBar/ProgressBar';
import MorgageCalculator from './pages/Morgage/MorgageCalculator';
import Posts from './pages/Posts/Posts';
import StopWatch from './pages/StopWatch/Stopwatch';
import ToDo from './pages/Todo/ToDo';

const Home = () => {
  return <h1>Home</h1>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test1" element={<LikeBtn />} />
        <Route path="test2" element={<Accordion />} />
        <Route path="test3" element={<ContactForm1 />} />
        <Route path="test4" element={<ContactForm2 />} />
        <Route path="test5" element={<Tabs />} />
        <Route path="test6" element={<ProgresBar />} />
        <Route path="test7" element={<MorgageCalculator />} />
        <Route path="test8" element={<Posts />} />
        <Route path="test9" element={<StopWatch />} />
        <Route path="test10" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}
