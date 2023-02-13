import './App.css';
import { User } from './components/User/';
import { Posts } from './components/Posts/';

function App() {
  return (
    <div className="App">
      <User user={1} />
      <Posts />
    </div>
  );
}

export default App;
