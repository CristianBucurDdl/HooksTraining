import "./App.css";
import UseContext from "./useContext/UseContext";
import UseEffectHook from "./useEffect/useEffect";
import UseMemoHook from "./useMemo/useMemoHook";
import UseReducer from "./useReducer/UseReducer";
import SecondReducer from "./useReducer/UseReducerInDepth";
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
      <br />
      <UseReducer />
      <br />
      <UseContext />
      <br />
      <SecondReducer />
    </div>
  );
}

export default App;
