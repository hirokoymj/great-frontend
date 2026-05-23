import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './pages/Lazy/ErrorBoundary';

import LikeBtn from './pages/LikeButton/LikeBtn';
import ContactForm1 from './pages/ContactForm1/ContactForm1';
import ContactForm2 from './pages/ContactForm2/ContactForm2';
import RadioGroupExample from './pages/ContactForm2/RadioGroupExample';
import Tabs from './pages/Tabs/Tabs';
import ProgresBar from './pages/ProgressBar/ProgressBar';
import MorgageCalculator from './pages/Morgage/MorgageCalculator';
import Posts from './pages/Posts/Posts';
import StopWatch from './pages/StopWatch/Stopwatch';
import ToDo from './pages/Todo/ToDo';
import { UsersView } from './pages/Users/UsersView';
import TodoList from './Escape-Hatches/TodoList';
//Managing State
import PackingMyList from './managing-state/checkbox-demo2/PackingList';
import CheckboxDemo from './managing-state/checkbox-demo/CheckboxDemo';
import PicturePage from './managing-state/picture-demo/Picture';
import SyncedInputs from './managing-state/synced-input/SyncedInput';
import FilterableList from './managing-state/filtering-list/FilterableList';
import Messenger from './managing-state/reducer-demo/Messanger';
import ImageSizeContextDemo from './managing-state/context-demo2/ImageSizeContextDemo';
import UserContextDemo from './managing-state/context-demo1/UserContextDemo';
import Accordion from './managing-state/accordion/Accordion';
import EditProfile from './managing-state/edit-profile/EditProfile';
import ClockDemo from './managing-state/clock/ClockDemo';
import MailClient from './managing-state/multi-selection/MailClient';
import Menu from './managing-state/menu/Menu';
import Airport from './pages/airport/Airport';
//Coding demo
import GameProfile from './pages/Quiz/GameProfile';
import { UserList } from './pages/FetchData/UserList';
import { FootballCompetitions } from './pages/Challenge/restful/FootballCompetitions';
import MyUserList from './pages/Challenge/restful/MyUserList';
import MyTodoList from './pages/Challenge/restful/MyTodoList';
import PostList from './pages/Challenge/restful/PostList';
import ProductList from './pages/Challenge/restful/ProductList';
import ProductList2 from './pages/Challenge/restful/ProductList2';
import FormDemo from './pages/Challenge/object-state/FormDemo';
import UserProfile from './pages/Challenge/object-state/UserProfile';
import UserProfile2 from './pages/Challenge/object-state/UserProfile2';
import UserProfileReducer from './pages/Challenge/object-state/UserProfileReducer';
//import ProductListCached from './pages/Challenge/useCallback-useMemo/ProductListCached';
// lazy-loaded: bundle is split — code loads only when route is visited
const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage'));
import LazyApp from './pages/Lazy/LazyApp';
import SkillForm from './pages/Challenge/form-handling/SkillForm';
import ProductList3 from './pages/Challenge/memo-call/ProductList3';
//Coding Quiz
import EditItemDemo from './pages/Quiz1/EditItemDemo';
import App5UseMemo from './pages/Quiz1/App5UseMemo';
import App7UseCallback from './pages/Quiz1/App7UseCallback';
import App9 from './pages/Quiz1/App9';
import SimpleForm from './pages/simpleForm/SimpleForm';
import Home from './pages/Home/Home';

// Wraps a lazy route: ErrorBoundary catches load failures, Suspense shows loading state
const SuspenseRoute = ({ children }) => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  </ErrorBoundary>
);

export default function App() {
  return (
    // Global boundary — catches any crash not caught by a per-route boundary
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test1" element={<LikeBtn />} />
          <Route path="contact-form-1" element={<ContactForm1 />} />
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
          <Route path="accordion" element={<Accordion />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="clock-demo" element={<ClockDemo />} />
          <Route path="multi-selection" element={<MailClient />} />
          <Route path="multi-selection" element={<Menu />} />
          <Route path="airport" element={<Airport />} />
          <Route path="game-profile" element={<GameProfile />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="quiz-1" element={<FootballCompetitions />} />
          <Route path="quiz-2" element={<MyUserList />} />
          <Route path="quiz-3" element={<MyTodoList />} />
          <Route path="quiz-4" element={<PostList />} />
          <Route path="quiz-5" element={<ProductList />} />
          <Route path="quiz-6" element={<ProductList2 />} />
          <Route path="quiz-7" element={<FormDemo />} />
          <Route path="quiz-8" element={<UserProfile />} />
          <Route path="quiz-9" element={<UserProfile2 />} />
          <Route path="quiz-10" element={<UserProfileReducer />} />
          <Route
            path="demo-11"
            element={
              <SuspenseRoute>
                <ProfilePage />
              </SuspenseRoute>
            }
          />
          <Route path="demo-12" element={<LazyApp />} />
          <Route path="demo-13" element={<SkillForm />} />
          <Route path="demo-14" element={<ProductList3 />} />
          <Route path="edit-item-demo" element={<EditItemDemo />} />
          <Route path="app5-usememo" element={<App5UseMemo />} />
          <Route path="app7-usecallback" element={<App7UseCallback />} />
          <Route path="app9" element={<App9 />} />
          <Route path="simple-form" element={<SimpleForm />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
