import {MantineProvider, Button} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import {toggle} from '../action/index';

function Counter(){

    const count = useSelector(state => state.counter);
    const slogan = useSelector(state => state.showHiden);
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch({type: 'increment'});
    }

    const handleDrecrement = () =>{
        dispatch({type: 'decrement'});
    }
    
    const handleToggle = () =>{
        dispatch(toggle());
    }

    return(
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <Button variant="gradient" onClick={handleIncrement}>Increment</Button>
            <MantineProvider
                theme={{
                    defaultGradient: {
                      from: 'orange',
                      to: 'red',
                      deg: 45,
                    },
                  }}
            >
                <Button variant="gradient" onClick={handleDrecrement}>Decreament</Button>
            </MantineProvider>
            <div>
                {slogan && <h2>The world is your oyster. :P</h2>}
                <Button variant="gradient" onClick={handleToggle}>Toggle</Button>
            </div>
            
        </div>
    )
}

export default Counter;