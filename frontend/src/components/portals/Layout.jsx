import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Menu, X, ChevronLeft, LogOut } from 'lucide-react';
import Logo from "../../assets/images/logo.png"

const Layout = ({ children, links }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good morning');
      } else if (hour >= 12 && hour < 16) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();
    const timer = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example:
    // logout();
    navigate('/login');
  };

  const sidebarVariants = {
    open: { width: '256px' },
    closed: { width: '80px' }
  };

  const linkTextVariants = {
    open: { opacity: 1, display: 'block' },
    closed: { opacity: 0, display: 'none' }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar for larger screens */}
      <motion.nav
        className="bg-[#e1dede] shadow-lg overflow-hidden hidden md:block"
        initial="open"
        animate={isSidebarOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isSidebarOpen ? <ChevronLeft className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <ul className="flex-1 px-2 py-4 space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <link.icon className="w-6 h-6 mr-3" />
                  <motion.span
                    variants={linkTextVariants}
                    className="whitespace-nowrap"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Dropdown menu for smaller screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-30 p-2 bg-white rounded-md shadow-md md:hidden"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 left-0 z-10 w-64 bg-[#e1dede] shadow-lg"
          >
            <div className="pt-16 px-4">
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                        location.pathname === link.path
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <link.icon className="w-6 h-6 mr-3" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-[#0f172a] text-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-auto pl-10 md:pl-0" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-200 transition-colors duration-200">
                <Bell className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-white">{greeting}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-white hover:text-gray-200 transition-colors duration-200"
                  aria-label="Logout"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-white p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;