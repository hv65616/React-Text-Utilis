import "./App.css";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <NavBar title="Text-Utilis"></NavBar>
      <div className="container my-3">
        <TextForm heading="Enter your text here:-"></TextForm>
      </div>
    </>
  );
}

export default App;
