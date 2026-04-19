import React, { useState, useEffect } from "react";
import CourseCard from "../CourseCard";

const Courses = ({ externalSearch }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Design", "Development", "Marketing"];

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesTab = activeTab === "All" || course.category === activeTab;
    const searchString = externalSearch || "";
    const matchesSearch = course.title.toLowerCase().includes(searchString.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="courses" className="bg-[#F8F9FF] dark:bg-[#060912] py-16 md:py-20 lg:py-28 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full rotate-180 -translate-y-1 text-white dark:text-dark z-[-1]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]" fill="currentColor">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-dark dark:text-white mb-4 text-3xl font-bold sm:text-4xl md:text-[45px]">Explore Courses</h2>
          <div className="flex justify-center items-center mt-4">
            <div className="w-16 h-1.5 bg-primary rounded-full"></div>
            <div className="w-3 h-1.5 bg-primary rounded-full ml-1 opacity-50"></div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === cat ? "bg-primary text-white shadow-lg scale-105" : "bg-white text-dark border border-gray-200 hover:border-primary/50 hover:bg-gray-50 dark:bg-dark dark:text-white dark:border-gray-800"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {loading ? (
            <div className="w-full text-center py-10">
              <p className="text-dark dark:text-white">Loading courses...</p>
            </div>
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="w-full px-4 md:w-1/2 lg:w-1/3 mb-8">
                <CourseCard course={course} />
              </div>
            ))
          ) : (
            <div className="w-full text-center py-20">
              <h3 className="text-xl font-semibold text-dark dark:text-white">No results found for "{externalSearch}"</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;