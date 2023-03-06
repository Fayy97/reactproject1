import "./App.css";
import { Header } from "./Header";
import { Employees } from "./Employees";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
