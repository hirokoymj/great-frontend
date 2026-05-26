import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './pages/Profile/ErrorBoundary';
import Home from './pages/Home/Home';
import Demo from './pages/Quiz/Demo';

const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage'));

export default function App() {
  return (
    // Global boundary — catches any crash not caught by a per-route boundary
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="demo" element={<Demo />} />
          <Route
            path="demo-11"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProfilePage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

// <ErrorBoundary>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="test1" element={<LikeBtn />} />
//       <Route path="contact-form-1" element={<ContactForm1 />} />
//       <Route path="test4" element={<ContactForm2 />} />
//       <Route path="radio-demo" element={<RadioGroupExample />} />
//       <Route path="test5" element={<Tabs />} />
//       <Route path="test6" element={<ProgresBar />} />
//       <Route path="test7" element={<MorgageCalculator />} />
//       <Route path="test8" element={<Posts />} />
//       <Route path="test9" element={<StopWatch />} />
//       <Route path="test10" element={<ToDo />} />
//       <Route path="test11" element={<UsersView />} />
//       <Route path="test12" element={<TodoList />} />
//       <Route path="packing-list" element={<PackingMyList />} />
//       <Route path="picture" element={<PicturePage />} />
//       <Route path="checkbox-demo" element={<CheckboxDemo />} />
//       <Route path="synced-input" element={<SyncedInputs />} />
//       <Route path="filterable-list" element={<FilterableList />} />
//       <Route path="reducer-demo" element={<Messenger />} />
//       <Route path="image-context-demo" element={<ImageSizeContextDemo />} />
//       <Route path="user-context-demo" element={<UserContextDemo />} />
//       <Route path="accordion" element={<Accordion />} />
//       <Route path="edit-profile" element={<EditProfile />} />
//       <Route path="clock-demo" element={<ClockDemo />} />
//       <Route path="multi-selection" element={<MailClient />} />
//       <Route path="multi-selection" element={<Menu />} />
//       <Route path="airport" element={<Airport />} />
//       <Route path="game-profile" element={<GameProfile />} />
//       <Route path="user-list" element={<UserList />} />
//       <Route path="quiz-1" element={<FootballCompetitions />} />
//       <Route path="quiz-2" element={<MyUserList />} />
//       <Route path="quiz-3" element={<MyTodoList />} />
//       <Route path="quiz-4" element={<PostList />} />
//       <Route path="quiz-5" element={<ProductList />} />
//       <Route path="quiz-6" element={<ProductList2 />} />
//       <Route path="quiz-7" element={<FormDemo />} />
//       <Route path="quiz-8" element={<UserProfile />} />
//       <Route path="quiz-9" element={<UserProfile2 />} />
//       <Route path="quiz-10" element={<UserProfileReducer />} />
//       <Route
//         path="demo-11"
//         element={
//           <Suspense fallback={<div>Loading...</div>}>
//             <ProfilePage />
//           </Suspense>
//         }
//       />
//       <Route path="demo-13" element={<SkillForm />} />
//       <Route path="demo-14" element={<ProductList3 />} />
//       <Route path="edit-item-demo" element={<EditItemDemo />} />
//       <Route path="app5-usememo" element={<App5UseMemo />} />
//       <Route path="app7-usecallback" element={<App7UseCallback />} />
//       <Route path="app9" element={<App9 />} />
//       <Route path="simple-form" element={<SimpleForm />} />
//     </Routes>
//   </BrowserRouter>
// </ErrorBoundary>
