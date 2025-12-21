import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CodeWindow from './Components/CodeWindow ';
import Features from './Components/Features';
import Models from './Components/Models';
import Footer from './Components/Footer';
import SignUp from './Components/Signup';
import LogIn from './Components/Login';


export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'signup' | 'login'>('landing');

  const handleSignUpClick = () => {
    setCurrentView('signup');
    window.scrollTo(0, 0);
  };

  const handleLogInClick = () => {
    setCurrentView('login');
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0E141E] text-[#EBEFF5] font-sans selection:bg-[#60A5FA]/30">
      <Navbar onSignUpClick={handleSignUpClick} onLogInClick={handleLogInClick} onHomeClick={handleHomeClick} />
      
      {currentView === 'landing' && (
        <main>
          <Hero onSignUpClick={handleSignUpClick} />
          {/* <CodeWindow /> */}
          <Features />
          <Models />
        </main>
      )}

      {currentView === 'signup' && (
        <SignUp onBack={handleHomeClick} onSwitchToLogin={handleLogInClick} />
      )}

      {currentView === 'login' && (
        <LogIn onBack={handleHomeClick} onSwitchToSignup={handleSignUpClick} />
      )}
      
      <Footer />
    </div>
  );
}