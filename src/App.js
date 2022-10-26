import "./App.css";
import UseEffectHook from "./useEffect/useEffect";
import UseMemoHook from "./useMemo/useMemoHook";
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
    </div>
  );
}

export default App;
