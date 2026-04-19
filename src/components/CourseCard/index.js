import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="bg-white dark:bg-dark shadow-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all hover:scale-[1.02] group">

      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        <button className="absolute top-3 left-3 bg-white/70 dark:bg-dark/60 p-2 rounded-full backdrop-blur-md transition-all hover:bg-white dark:hover:bg-dark text-dark dark:text-white shadow-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>

        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 bg-white/70 dark:bg-dark/60 p-2.5 rounded-full backdrop-blur-md transition-all hover:bg-white dark:hover:bg-dark shadow-sm group/heart"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isWishlisted ? "#ff4b4b" : "none"}
            stroke={isWishlisted ? "#ff4b4b" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-300 ${isWishlisted ? "scale-110" : "text-gray-700 dark:text-gray-200 group-hover/heart:text-red-500"
              }`}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        <div className="absolute bottom-3 right-3 bg-primary px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
          {course.level}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-black dark:text-white leading-tight line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-md shrink-0">
            <span className="text-yellow-600 dark:text-yellow-500 text-xs font-bold">
              ⭐ {course.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-xs mb-5">
          <div className="flex items-center gap-1">
            <span className="opacity-70">👥</span> {course.students}
          </div>
          <div className="flex items-center gap-1">
            <span className="opacity-70">⏱️</span> {course.duration}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl mb-6">
          <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Next Lesson</p>
          <p className="text-sm font-semibold text-black dark:text-white truncate">
            {course.nextLesson}
          </p>
        </div>

        <div className="flex gap-3">
          <Link 
            to={`/course/${course.id}`}
            className="flex-1 py-3 px-4 border-2 border-primary/20 text-primary rounded-xl font-bold text-sm text-center transition-all hover:border-primary hover:bg-primary/5"
          >
            Details
          </Link>
          <button className="flex-[1.5] py-3 px-4 bg-primary text-white rounded-xl font-bold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;