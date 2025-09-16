import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="text-xl font-bold"> Mitt Portfolio </div>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={linkClass}>
            Projekt
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
