import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div>
      <h1>HEADING</h1>
      <Outlet />
    </div>
  );
}
