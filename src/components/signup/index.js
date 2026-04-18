import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="relative z-10 min-h-screen overflow-hidden bg-[#EEF2FF] dark:bg-[#04070D] flex items-center justify-center py-12 px-4 transition-colors duration-500">
      
      <div className="absolute inset-0 z-[-1] overflow-hidden opacity-60">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px]"></div>
      </div>

      <div className="w-full max-w-[380px] mx-auto relative z-10">
        
        <div className="bg-white/90 dark:bg-[#121723]/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-8 border border-white/20 dark:border-white/5 transition-all duration-300">
          
          <div className="relative z-10 text-center">
            <Link to="/" className="inline-block mb-5">
              <img src="/images/logo/logo.svg" alt="Lurnix" className="w-[140px] h-[40px] object-contain" />
            </Link>

            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-1.5">
                Create Account
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join Lurnix and start learning today
              </p>
            </div>

            <form className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-600 dark:text-gray-300">Full Name</label>
                <input
                  type="text"
                  placeholder="Marium Rashad"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#242933] text-black dark:text-white focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-600 dark:text-gray-300">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#242933] text-black dark:text-white focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1.5 uppercase tracking-wide text-gray-600 dark:text-gray-300">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#242933] text-black dark:text-white focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none transition-all text-sm placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition-all active:scale-[0.98] mt-3.5 text-sm"
              >
                Sign Up
              </button>
            </form>

            <div className="relative my-6">
              <span className="absolute inset-x-0 top-1/2 h-px bg-gray-100 dark:bg-gray-800"></span>
              <span className="relative bg-white dark:bg-[#17182b] px-3 text-xs text-gray-400 font-bold uppercase tracking-[2px]">
                OR
              </span>
            </div>

            <button className="w-full py-2.5 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-black dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="google" />
              Continue with Google
            </button>

            <p className="text-center mt-7 text-xs text-gray-500 dark:text-gray-400 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold hover:underline transition-colors">Sign In</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;