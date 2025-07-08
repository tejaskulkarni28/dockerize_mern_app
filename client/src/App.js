import "./App.css";
import SayHello from "./components/SayHello";
import CustomForm from "./components/Form";

function App() {
  return (
    <div className="container-app">
      <div className="content-app">
        <SayHello />
        <CustomForm/>
      </div>
    </div>
  );
}

export default App;
