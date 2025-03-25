import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RootLayout } from './layouts/RootLayout';
import { Home, PostsPage, PostPage, UsersPage, UserPage, PostFormPage } from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='posts' element={<PostsPage />} />
            <Route path='posts/:id' element={<PostPage />} />
            <Route path='posts/form' element={<PostFormPage />} />
            <Route path='users' element={<UsersPage />} />
            <Route path='users/:id' element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
