import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import Header from "./components/Header/index"; 
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import AboutSection from "./components/AboutUs/AboutSection";
import Login from "./components/Login";
import SignUp from "./components/signup";
import CourseDetails from "./components/Courses/CourseDetails"; 
import WishlistPage from "./components/WishlistPage";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("lurnix_wishlist");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("lurnix_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const toggleWishlist = (course) => {
    setWishlist((prev) => {
      const isExist = prev.find((item) => item.id === course.id);
      if (isExist) return prev.filter((item) => item.id !== course.id);
      return [...prev, course];
    });
  };
  const isInWishlist = (id) => wishlist.some((item) => item.id === id);
  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const PageWrapper = ({ children, courses }) => {
  const location = useLocation();
  const { wishlist } = useWishlist(); 
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
      {!isAuthPage && <Header wishlistCount={wishlist.length} courses={courses} />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setAllCourses(data))
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <WishlistProvider> 
      <Router>
        <div className="min-h-screen bg-white dark:bg-[#121723]">
          <PageWrapper courses={allCourses}>
            <Routes>
              <Route path="/" element={
                <main>
                  <div id="home"><Hero /></div>
                  <div id="about"><AboutSection /></div>
                  <div id="courses"><Courses /></div>
                </main>
              } />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/course/:id" element={<CourseDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </PageWrapper>
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;