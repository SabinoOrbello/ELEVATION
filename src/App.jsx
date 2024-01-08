import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyAlert from "./components/MyAlert";
import AllTheBook from "./components/AllTheBook";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <section>
        <MyAlert />
      </section>
      <section>
        <AllTheBook />
      </section>
    </div>
  );
}

export default App;
