import {MantineProvider, Button} from '@mantine/core';

function Counter(){
    return(
        <div>
            <h1>Counter App</h1>
            <Button variant="gradient">Increment</Button>
            <MantineProvider
                theme={{
                    defaultGradient: {
                      from: 'orange',
                      to: 'red',
                      deg: 45,
                    },
                  }}
            >
                <Button variant="gradient">Decreament</Button>
            </MantineProvider>
            
        </div>
    )
}

export default Counter;