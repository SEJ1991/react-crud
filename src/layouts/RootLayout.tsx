import { NavLink, Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className='w-dvw min-h-dvh px-2 py-header-height'>
      <header className='flex-center left-0 fixed w-full header-height p-2 shadow-lg bg-white z-10'>
        <nav className='flex-center'>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-400' : '')}>
                HOME
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
