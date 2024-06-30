import puppy from './assets/puppy.png';
import './App.css';
import NamesInput from './Components/NamesInput';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={puppy} className="App-logo" alt="logo" />
        <p>
          This is our CICD class. and blablablablba
        </p>
        <NamesInput label={'Please enter your first and last name: '}/>
      </header>
    </div>
  );
}

export default App;
