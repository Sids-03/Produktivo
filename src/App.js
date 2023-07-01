import './App.css';
import MainHeader from './components/MainHeader/MainHeader';
import Nav from './components/Nav/Aboutsection';
import Spotify from './components/Spotify/Spotify';
import Timer from './components/Timer/Timer';
import Todo from './components/Todo/Todo';
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
      <div className="l_body">
        <div className='spotify'>
          <Spotify/>
        </div>
        <div className='todo'>
          <Todo/>
        </div>
      </div>
    </div>
  );
}

export default App;
