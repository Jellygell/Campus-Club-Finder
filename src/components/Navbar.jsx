import { NavLink } from 'react-router-dom';
import { Home, Users, Info } from 'lucide-react';

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold transition-colors duration-200'
      : 'text-black hover:text-white transition-colors duration-200';

  return (
    <nav className="bg-blue-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">Campus Club Finder</span>
          </NavLink>

          <div className="flex space-x-8">
            <NavLink to="/" className={navLinkClass}>
              <span className="flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </span>
            </NavLink>

            <NavLink to="/clubs" className={navLinkClass}>
              <span className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Clubs</span>
              </span>
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              <span className="flex items-center space-x-1">
                <Info className="h-4 w-4" />
                <span>About</span>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
