import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="relative z-10 min-h-screen bg-[#F8F9FF] dark:bg-[#060912] flex items-center justify-center py-16 px-4 overflow-hidden transiton-colors duration-300">
      
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20 dark:blur-[150px] animate-pulse-slow"></div>
        
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/20 dark:blur-[150px] animate-pulse-slow delay-700"></div>

        <div className="absolute -top-10 -right-10 opacity-30 dark:opacity-40 z-0">
          <svg width="200" height="200" viewBox="0 0 100 100" className="text-primary dark:text-primary animate-float-slow">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 opacity-30 dark:opacity-40 z-0">
          <svg width="150" height="150" viewBox="0 0 100 100" className="text-purple-500 dark:text-purple-400 animate-float">
            <rect x="10" y="10" width="80" height="80" rx="10" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" fill="none" className="rotate-12"/>
          </svg>
        </div>
      </div>


      <div className="w-full max-w-[380px] mx-auto bg-white/90 dark:bg-[#121723]/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-8 border border-white/20 dark:border-white/5 relative overflow-hidden transition-all duration-300">
        
        <div className="relative z-10 text-center">
          
          <Link to="/" className="inline-block mb-5">
            <img 
              src="/images/logo/logo.svg" 
              alt="Lurnix Logo" 
              className="w-[140px] h-[40px] object-contain dark:hidden" 
            />
            <img 
                src="/images/logo/logo.svg" 
                alt="Lurnix Logo" 
                className="w-[140px] h-[40px] object-contain hidden dark:block" 
            />
          </Link>

          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-dark dark:text-white mb-1.5 transition-colors duration-300">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              Enter your details to access your account
            </p>
          </div>

          <form className="space-y-3.5 text-left">
            <div>
              <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-600 dark:text-gray-300 transition-colors duration-300">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#242933] text-dark dark:text-white focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm placeholder:text-gray-400 dark:placeholder:text-gray-600" 
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-300 transition-colors duration-300">Password</label>
                <Link to="#" className="text-xs font-bold text-primary hover:text-primary/80 hover:underline transition-colors duration-300">Forgot?</Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#242933] text-dark dark:text-white focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-smplaceholder:text-gray-400 dark:placeholder:text-gray-600" 
              />
            </div>

            <button
              type="submit"
              className="group relative overflow-hidden w-full py-3 bg-primary text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.98] mt-3.5 text-sm dark:shadow-primary/20 dark:shadow-[0_0_15px_rgba(74,108,247,0.1)]"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Sign In</span>
              <div className="absolute inset-0 z-0 bg-primary/20 dark:bg-primary/40 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
            </button>
          </form>

          <div className="relative my-6 text-center">
            <span className="absolute inset-x-0 top-1/2 h-px bg-gray-100 dark:bg-gray-800 transition-colors duration-300 dark:border-white/5 dark:shadow-[0_0_5px_rgba(255,255,255,0.02)]"></span>
            <span className="relative bg-white dark:bg-[#17182b] px-3 text-xs text-gray-400 font-bold uppercase tracking-[2px] transition-colors duration-300">
              OR
            </span>
          </div>

          <button className="w-full py-2.5 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="google" />
            Continue with Google
          </button>

          <p className="text-center mt-7 text-xs text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
            New to Lurnix?{" "}
            <Link to="/signup" className="text-primary font-bold hover:underline transition-colors duration-300">Create account</Link>
          </p>

        </div>
      </div>
    </section>
  );
};

export default Login;