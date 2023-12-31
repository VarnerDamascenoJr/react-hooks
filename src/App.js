
import './App.css';
import { Main } from './Context/Main';
import HowToUseMemo from './Memo/HowToUseMemo';
import HowToUseRef from './Ref';
import { State } from './State';

function App() {
  return (
    <div className="App">
     {/* <State/>
     <Main/> 
     <HowToUseRef/>*/}
     <HowToUseMemo />
    </div>
  );
}

export default App;
