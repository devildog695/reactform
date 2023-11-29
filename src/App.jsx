import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenitcation from "./components/Authenitcate";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div>
        <SignUpForm setToken={setToken} />
      </div>
      <div>
        <Authenitcation token={token} />
      </div>
    </>
  );
}

export default App;
