import './App.css';
import { User } from './components/User/';
import { Posts } from './components/Posts/';

function App() {
  return (
    <div className="App">
      <User id={2} />
      <Posts />
    </div>
  );
}

export default App;
