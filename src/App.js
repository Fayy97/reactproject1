import "./App.css";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
