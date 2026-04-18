import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

const AboutSection = () => {
  const stats = [
    { label: "Active Students", value: 10, suffix: "M+" }, // عدلنا القيمة لـ 10 مع M+
    { label: "Premium Courses", value: 60, suffix: "K+" }, // خليناها 60K لشكل أشيك
    { label: "Expert Instructors", value: 150, suffix: "+" },
    { label: "Satisfaction Rate", value: 100, suffix: "%" },
  ];

  return (
    <section id="about" className="py-24 bg-[#F8F9FF] dark:bg-[#04070D] overflow-hidden relative z-10 transition-colors duration-500">
      
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-50">
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        
        <div className="absolute -top-10 -right-10 opacity-20 hidden lg:block">
           <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-primary animate-spin-slow">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
           </svg>
        </div>

        <div className="flex flex-wrap items-center justify-center -mx-4 mb-16 relative z-10">
          
          <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
            <div className="relative max-w-[480px] mx-auto lg:mr-0 group">
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary/30 rounded-[2rem] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80" 
                  alt="About Lurnix" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute -right-8 top-10 bg-white dark:bg-[#121723] p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow hidden md:block border border-primary/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-gray-500">Top Rated</p>
                    <p className="text-sm font-black dark:text-white">Education Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-6/12 px-4 lg:pl-16">
            <div className="max-w-[540px] mx-auto lg:ml-0 text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-6 leading-[1.2]">
                More Than Just a Platform, <span className="text-primary relative">
                  A Learning Revolution.
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
                </span>
              </h2>
              <p className="text-body-color dark:text-gray-400 text-lg mb-8 leading-relaxed opacity-90">
                LURNIX was founded with a single mission: to make high-quality education accessible to everyone, everywhere. We combine technology with expert pedagogy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {['Premium Course Content', 'Expert Certified Instructors', 'Lifetime Access', 'Real-time Progress'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-primary/5 hover:border-primary/20 transition-all">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <svg width="12" height="12" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="text-sm font-bold text-dark dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-24 z-10">
          <div className="relative bg-gradient-to-r from-primary via-[#6366f1] to-purple-600 py-14 px-8 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-400/20 rounded-full translate-x-10 translate-y-10 blur-lg"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col relative group">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 flex justify-center items-center gap-1 transition-transform duration-300 group-hover:scale-110">
                    <Counter value={stat.value} />
                    <span className="text-2xl md:text-3xl opacity-90">{stat.suffix}</span>
                  </div>
                  <span className="text-white/70 uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-black">
                    {stat.label}
                  </span>
                  
                  {index !== stats.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;