import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {Home} from "./page/Home";
import {EmployeesList} from "./page/Employee-list";
import {Provider} from "react-redux";
import {store} from "./redux";

function App() {
  return (
      <Provider store={store}>
          <Header/>
          <section className="corps_page">
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/employees-list" element={<EmployeesList/>}></Route>
              </Routes>
          </section>
          <Footer/>
      </Provider>
  );
}

export default App;
