
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import  {actions} from './counterSlice';
function App() {

  const dispatch=useDispatch();
  const countvalue=useSelector((state)=>state.counter);

    function incrementCounter(){
      dispatch(
 actions.increment()
      )

    }

    function decrementCounter(){

      dispatch(actions.decrement())

    }

  return (
    <div >

    <h1>Counter App</h1>
    <p>the counter value is :{countvalue}</p>
    <button onClick={incrementCounter}>Increment</button><br/>
    <button onClick={decrementCounter}>Decrement</button> <br/>
     
    
    </div>
  );
}

export default App;
