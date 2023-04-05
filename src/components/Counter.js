import {MantineProvider, Button} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

function Counter(){

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch({type: 'increment'});
    }

    const handleDrecrement = () =>{
        dispatch({type: 'decrement'});
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
            
        </div>
    )
}

export default Counter;