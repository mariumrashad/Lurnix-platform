import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/index"; 
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import AboutSection from "./components/AboutUs/AboutSection";
import Login from "./components/Login";
import SignUp from "./components/signup";
import CourseDetails from "./components/Courses/CourseDetails"; 

const PageWrapper = ({ children, onSearch }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Header onSearch={onSearch} />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [globalSearch, setGlobalSearch] = useState("");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#121723]">
        <PageWrapper onSearch={setGlobalSearch}>
          <Routes>
            <Route 
              path="/" 
              element={
                <main>
                  <div id="home"><Hero /></div>
                  <div id="about"><AboutSection /></div>
                  <div id="courses"><Courses externalSearch={globalSearch} /></div>
                </main>
              } 
            />
            
            <Route path="/course/:id" element={<CourseDetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;