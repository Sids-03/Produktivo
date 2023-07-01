import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Nav from './components/Nav/Aboutsection';
import Timer from './components/Timer/Timer';
function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Nav/>
      </div>
      <div className="u_body">
        <div className="m_header">
          <MainHeader/>
        </div>
        <div className='t-wrapper'>
          <Timer/>
        </div>
      </div>
    </div>
  );
}

export default App;
