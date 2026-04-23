import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = ({ wishlistCount, courses = [] }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const usePathName = location.pathname;

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) setSticky(true);
    else setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.trim() === "") {
      setFilteredResults([]);
    } else {
      const matches = courses.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(matches);
    }
  };

  const executeSearch = (courseId) => {
    if (courseId) {
      navigate(`/course/${courseId}`);
    } else if (filteredResults.length > 0) {
      navigate(`/course/${filteredResults[0].id}`);
    }
    setFilteredResults([]);
    setSearchValue("");
    setIsSearchVisible(false);
  };

  return (
    <header className={`header top-0 left-0 z-40 flex w-full items-center ${sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-[9999] bg-white/80 backdrop-blur-md transition" : "absolute bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          
          <div className="w-60 max-w-full px-4 flex-shrink-0">
            <Link smooth to="/#home" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
              <img src="/images/logo/logo.svg" alt="logo" className="dark:hidden block w-[180px] h-[50px] object-contain" />
              <img src="/images/logo/logo.svg" alt="logo" className="hidden dark:block w-[180px] h-[50px] object-contain" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-1 items-center justify-center px-4">
            <nav id="navbarCollapse" className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-4 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? "top-full opacity-100" : "invisible top-[120%] opacity-0"}`}>
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link smooth to={menuItem.path} className={`flex py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path ? "text-primary dark:text-white" : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"}`}>
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p onClick={() => handleSubmenu(index)} className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white">
                          {menuItem.title}
                          <span className="pl-2">
                            <svg width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6"/></svg>
                          </span>
                        </p>
                        <div className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"}`}>
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <Link smooth to={submenuItem.path} key={subIndex} className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white">{submenuItem.title}</Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-end flex-shrink-0 space-x-2 md:space-x-4 pr-16 lg:pr-0">
            
            <div className="flex items-center" ref={searchRef}>
              <div className="relative flex items-center">
                <div className={`flex items-center transition-all duration-300 w-[160px] md:w-[220px] ${isSearchVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchValue}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => e.key === 'Enter' && executeSearch()}
                    className={`w-full border border-primary/50 bg-white px-4 py-1.5 text-xs text-dark outline-none shadow-sm dark:bg-dark dark:text-white ${isSearchVisible && filteredResults.length > 0 ? "rounded-t-lg border-b-transparent" : "rounded-full"}`}
                    autoFocus={isSearchVisible}
                  />
                </div>
                
                <button 
                  onClick={() => setIsSearchVisible(!isSearchVisible)} 
                  className={`relative z-[60] flex h-9 w-9 items-center justify-center rounded-full text-dark hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 transition-all ${isSearchVisible ? 'text-primary ml-[-36px]' : 'ml-2'}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>

                {filteredResults.length > 0 && isSearchVisible && (
                  <div className="absolute top-full left-0 w-full bg-white dark:bg-[#121723] shadow-2xl rounded-b-lg border-x border-b border-primary/40 z-[9999] overflow-hidden py-1">
                    {filteredResults.map((course) => (
                      <div 
                        key={course.id}
                        onClick={() => executeSearch(course.id)}
                        className="flex items-center px-4 py-2 hover:bg-primary/5 cursor-pointer group transition-colors border-b border-gray-50 dark:border-gray-800 last:border-0"
                      >
                        <span className="text-[12px] font-medium text-dark dark:text-white group-hover:text-primary transition-colors line-clamp-1">{course.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Link smooth to="/wishlist" className="relative flex h-10 w-10 items-center justify-center rounded-full text-dark hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span key={wishlistCount} className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white animate-bounce">{wishlistCount}</span>
            </Link>

            <span className="hidden h-6 w-[1px] bg-gray-200 dark:bg-white/10 md:block"></span>

            <div className="hidden items-center lg:flex space-x-3">
              <Link to="/login" className="group relative overflow-hidden rounded-md px-6 py-3 text-base font-medium text-dark dark:text-white transition-all"><span className="relative z-10 group-hover:text-white transition-colors duration-300">Log In</span><div className="absolute inset-0 z-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div></Link>
              <Link to="/signup" className="group relative overflow-hidden rounded-md border border-primary px-7 py-3 text-base font-medium text-primary transition-all duration-300 hover:text-white"><span className="relative z-10">Sign Up</span><div className="absolute inset-0 z-0 bg-primary translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div></Link>
            </div>

            <div className="pl-1">
              <ThemeToggler />
            </div>
            
            <button onClick={navbarToggleHandler} className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden">
              <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[7px] rotate-45" : ""}`} />
              <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : ""}`} />
              <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[-8px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;