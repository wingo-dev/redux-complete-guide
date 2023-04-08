import { MantineProvider, Button, Space } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../action/index";

function Counter() {
  const count = useSelector((state) => state.counter);
  const slogan = useSelector((state) => state.showHiden);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDrecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div>
      <h1>Redux Guide App</h1>
      <h2>{count}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="gradient" onClick={handleIncrement}>
          Increment
        </Button>
        <Space w="xl" />
        <MantineProvider
          theme={{
            defaultGradient: {
              from: "orange",
              to: "red",
              deg: 45,
            },
          }}
        >
          <Button variant="gradient" onClick={handleDrecrement}>
            Decreament
          </Button>
        </MantineProvider>
      </div>
      <Space h="xl" />
      <div>
        <Button variant="gradient" onClick={handleToggle}>
          Toggle
        </Button>
        {slogan && <h2>The world is your oyster. :P</h2>}
      </div>
    </div>
  );
}

export default Counter;
