import "./App.css";
import UseEffectHook from "./useEffect/useEffect";
import UseMemoHook from "./useMemo/useMemoHook";
import UseRefHook from "./useRef/UseRefHook";
import UseStateHook from "./useState/useState";

function App() {
  return (
    <div>
      hello test
      <br />
      <UseStateHook />
      <br />
      <UseEffectHook />
      <br />
      <UseMemoHook />
      <br />
      <UseRefHook />
    </div>
  );
}

export default App;
