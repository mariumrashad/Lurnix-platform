import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section
  id="home"
  className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[100px] md:pt-[150px] xl:pb-[140px] xl:pt-[180px] 2xl:pb-[180px] 2xl:pt-[210px] 
  bg-[#EEF2FF] dark:bg-[#04070D] transition-colors duration-500"
>
  
        
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="absolute -top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-primary/25 blur-[130px] dark:bg-primary/20 animate-pulse"></div>
          <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-orange-400/20 blur-[120px] dark:bg-orange-600/10"></div>

          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a6cf7' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        </div>

<div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[120px] animate-pulse"></div>
          
          <div className="absolute top-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px]"></div>
          
          <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-orange-300/20 blur-[110px]"></div>
          
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            
            <div className="w-full px-4 lg:w-6/12 lg:pl-20 text-center lg:text-left">
              <div className="max-w-[800px] mb-12 lg:mb-0">
                <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl tracking-tight">
                  Find Your <span className="text-orange-500 drop-shadow-sm">Ideal</span> Course, Build{" "}
                  <span className="relative inline-block px-1">
                    <span className="relative z-10 text-primary">Lurnix</span>
                    <svg className="absolute inset-0 w-full h-full text-primary/40 -z-1 scale-125" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M 5 15 C 20 10, 35 25, 50 15 C 65 5, 80 20, 95 15" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 10 18 Q 30 12 50 18 T 90 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" className="opacity-50" />
                      <path d="M 20 12 Q 40 18 60 12 T 80 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" className="opacity-40" />
                    </svg>
                  </span>{" "}
                  Skills
                </h1>
                
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color dark:text-gray-300 sm:text-lg md:text-xl opacity-90">
                  Redefining education with Lurnix. Access premium resources and track your real-time progress with our advanced ecosystem.
                </p>

                <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0">
                  <Link
                    to="/login"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-primary px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(74,108,247,0.5)] active:scale-95"
                  >
                    <span className="relative z-10">Join Us Now</span>
                    <svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.025 4.94165L17.0833 9.99998L12.025 15.0583" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.91666 10H16.9417" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
                  </Link>

                  <a
                    href="#courses"
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-black/10 bg-black/5 dark:bg-white/5 px-10 py-4 text-base font-bold text-black dark:text-white transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/30 backdrop-blur-sm"
                  >
                    <span>Explore Courses</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12">
              <div className="relative z-10 mx-auto max-w-[650px] lg:ml-auto lg:-mr-16"> 
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 z-20 hidden md:block animate-pulse">
                   <svg width="150" height="150" viewBox="0 0 100 100" fill="none" className="text-cyan-400 rotate-[10deg] drop-shadow-2xl">
                      <path d="M15 70 Q 35 20 85 40" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                      <path d="M72 32 L 87 43 L 75 53" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                   </svg>
                </div>

                <div className="absolute -top-12 -left-10 text-orange-300 opacity-60 z-0 hidden md:block">
                  <svg width="70" height="70" viewBox="0 0 60 60">
                    <path d="M10 10 L 50 10 L 30 50 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                  </svg>
                </div>

                <div className="relative overflow-hidden rounded-3xl z-10 ">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Student" className="w-full h-auto object-cover" />
                </div>

                <div className="absolute -top-10 -right-10 text-primary/40 z-0">
                  <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6" />
                  </svg>
                </div>

                <div className="absolute bottom-10 -left-16 text-cyan-200 z-0 hidden md:block">
                   <svg width="70" height="70" viewBox="0 0 50 50">
                      <circle cx="10" cy="10" r="5" fill="currentColor"/><circle cx="35" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="15" cy="45" r="4" fill="currentColor" opacity="0.5"/>
                   </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
          <svg 
            className="relative block w-[calc(100%+1.3px)] h-[80px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="currentColor" 
              className="text-[#F8F9FF] dark:text-[#0f172a]" 
            ></path>
          </svg>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none">
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <defs>
              <linearGradient id="paint0_linear_25:217" x1="-54.5" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </section>
    </>
  );
};

export default Hero;