import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import LocNavBar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
      <LocNavBar></LocNavBar>
    </BrowserRouter>
  );
}

export default App;
