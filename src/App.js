import { Space } from "@mantine/core";
import "./App.css";
import "./components/Counter";
import Counter from "./components/Counter";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Space h="xl" />
      <Post></Post>
    </div>
  );
}

export default App;
