import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
   <nav>
      <li className='text-slate-500'>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container bg-black">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, harum quod, reprehenderit molestiae alias sit voluptatum modi voluptates deleniti ex omnis tempore? Fuga quis quo consequuntur animi dolorum rerum iste?</p>
    </div>
    <Navbar></Navbar>

    </>
  );
}

export default App;
