import { BrowserRouter, Route, Routes } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Home, PostsPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='posts' element={<PostsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
