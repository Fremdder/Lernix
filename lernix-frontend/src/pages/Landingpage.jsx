import React from 'react';
import { ArrowRight, BookOpen, Users, Brain } from 'lucide-react';
import { ButtonsCard } from '../components/ui/tailwindcss-buttons';
import { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import FeaturesGrid from '../components/FeaturesGrid';


const LandingPage = () => {

    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);


  return (
    
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Lernix
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#features">Features</a>
              <a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#pricing">Pricing</a>
              <a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#about">About</a>
              <button
                onClick={() => setLoginOpen(true)}
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 text-white mr-4 px-6 py-2 rounded-lg"
              >
                Log In
              </button>
              <button
                onClick={() => setSignupOpen(true)}
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 text-white text-white mr-4 px-6 py-2 rounded-lg"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>

{/* Modals */}
<LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
<SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />


      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
                Transform Your Study Notes
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Into Knowledge
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                AI-powered note organization that adapts to your learning style.
                Capture, connect, and master your study materials effortlessly.
              </p>
              <div className="flex justify-center">
  <ButtonsCard className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg rounded-xl flex items-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
    <span className="flex items-center gap-2">
      Get Started Free
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </span>
  </ButtonsCard>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FeaturesGrid />
      </div>

    </div>
  );
};

export default LandingPage;