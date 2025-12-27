import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SignUp from './Components/Credentials/Signup';
import LogIn from './Components/Credentials/Login';
import Main from './Components/Main/Main';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <div className="min-h-screen bg-[#0E141E] text-[#EBEFF5] font-sans selection:bg-[#60A5FA]/30">
      <Navbar />
    
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn/>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}