import "./App.css";
import CustomHook from "./customHook/CustomHook";
import UseCallBack from "./useCallBack/UseCallBack";
import UseContext from "./useContext/UseContext";
import UseEffectHook from "./useEffect/useEffect";
import UseLayoutHook from "./useLayoute/UseLayoutHook";
import UseMemoHook from "./useMemo/useMemoHook";
import UseReducer from "./useReducer/UseReducer";
import SecondReducer from "./useReducer/UseReducerInDepth";
import UseReducerPractice from "./useReducer/UseReducerPractice";
import UseRefHook from "./useRef/UseRefHook";
import UseStateHook from "./useState/useState";

function App() {
  return (
    <div>
      hello test
      <br />
      <CustomHook />
      <br />
      <UseCallBack />
      <br />
      <UseLayoutHook />
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
      <bt />
      <UseReducerPractice />
      <br />
    </div>
  );
}

export default App;
