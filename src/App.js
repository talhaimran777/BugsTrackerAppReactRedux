import logo from './logo.svg';
import './App.css';

import {Provider} from 'react-redux';
import store from './store/store';
import {bugAdded, bugRemoved, bugResolved} from './actions/actions';
function App() {
  console.log(store.getState());
  store.dispatch(bugAdded('Problem in the program!'));
  console.log(store.getState());

  store.dispatch(bugResolved(1));
  console.log(store.getState());
  return (

    <Provider store = {store}>
       <div className="App">
        <h1>Bugs Tracker App</h1>
      </div>
    </Provider>
  );
}

export default App;
