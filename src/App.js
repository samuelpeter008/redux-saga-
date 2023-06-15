
import './App.css';
import { Provider } from 'react-redux'
import store from './containers/store';
import MyTable from './components/MyTable';
import MyForm from './components/MyForm';
import Navbar from './Navbar';

function App() {
  return (
    < >
    
      <Provider store={store}>
        <div>
          <Navbar />
        </div>

      <div className='alignCheck'>
          <div className='mytable'>
            <MyTable/>
          </div>
          <div className='myform'>
            <MyForm/>
          </div>
      </div>
        

        </Provider>
    </>
  );
}

export default App;
