import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LikeBtn from './pages/LikeButton/LikeBtn';
import ContactForm1 from './pages/ContactForm1/ContactForm1';
import ContactForm2 from './pages/ContactForm2/ContactForm2';
import RadioGroupExample from './pages/ContactForm2/RadioGroupExample';
//import CheckboxExample from './pages/ContactForm2/CheckboxExample';
import Tabs from './pages/Tabs/Tabs';
import ProgresBar from './pages/ProgressBar/ProgressBar';
import MorgageCalculator from './pages/Morgage/MorgageCalculator';
import Posts from './pages/Posts/Posts';
import StopWatch from './pages/StopWatch/Stopwatch';
import ToDo from './pages/Todo/ToDo';
import { UsersView } from './pages/Users/UsersView';
import TodoList from './Escape-Hatches/TodoList';
//Managing State
import PackingMyList from './managing-state/packing-list/PackingList';
import PicturePage from './managing-state/picture-demo/Picture';
import CheckboxDemo from './managing-state/checkbox-demo/CheckboxDemo';
import SyncedInputs from './managing-state/synced-input/SyncedInput';
import FilterableList from './managing-state/filtering-list/FilterableList';
import Messenger from './managing-state/reducer-demo/Messanger';
import ImageSizeContextDemo from './managing-state/context-demo2/ImageSizeContextDemo';
import UserContextDemo from './managing-state/context-demo1/UserContextDemo';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/test1">Like Button</Link>
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
          <Link to="/test12">TodoList</Link>
        </li>
      </ul>
      <ul>
        <h2>Managing State</h2>
        <li>
          <Link to="/packing-list">Packing List(generating checkboxes)</Link>
        </li>

        <li>
          <Link to="/picture">Picture (add/remove css)</Link>
        </li>
        <li>
          <Link to="/checkbox-demo">Checkbox Demo</Link>
        </li>
        <li>
          <Link to="/synced-input">
            Synced Input (lifting a state up to a parent comp.)
          </Link>
        </li>
        <li>
          <Link to="/filterable-list">Filterable List</Link>
        </li>
        <li>
          <Link to="/reducer-demo">Reducer</Link>
        </li>
        <li>
          <Link to="/image-context-demo">Image Context demo</Link>
        </li>
        <li>
          <Link to="/user-context-demo">User Context demo</Link>
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
        <Route path="test3" element={<ContactForm1 />} />
        <Route path="test4" element={<ContactForm2 />} />
        <Route path="radio-demo" element={<RadioGroupExample />} />
        <Route path="test5" element={<Tabs />} />
        <Route path="test6" element={<ProgresBar />} />
        <Route path="test7" element={<MorgageCalculator />} />
        <Route path="test8" element={<Posts />} />
        <Route path="test9" element={<StopWatch />} />
        <Route path="test10" element={<ToDo />} />
        <Route path="test11" element={<UsersView />} />
        <Route path="test12" element={<TodoList />} />
        <Route path="packing-list" element={<PackingMyList />} />
        <Route path="picture" element={<PicturePage />} />
        <Route path="checkbox-demo" element={<CheckboxDemo />} />
        <Route path="synced-input" element={<SyncedInputs />} />
        <Route path="filterable-list" element={<FilterableList />} />
        <Route path="reducer-demo" element={<Messenger />} />
        <Route path="image-context-demo" element={<ImageSizeContextDemo />} />
        <Route path="user-context-demo" element={<UserContextDemo />} />
      </Routes>
    </BrowserRouter>
  );
}
