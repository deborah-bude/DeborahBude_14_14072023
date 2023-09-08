import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";

import {lazy, Suspense} from "react";

const Home = lazy(() => import('./page/Home.jsx'));
const EmployeesList = lazy(() => import('./page/Employee-list.jsx'));

function App() {
  return (
      <Provider store={store}>
          <Suspense fallback="Loading...">
              <Header/>
              <section className="corps_page">
                  <Routes>
                      <Route path="/" element={<Home/>}></Route>
                      <Route path="/employees-list" element={<EmployeesList/>}></Route>
                  </Routes>
              </section>
              <Footer/>
          </Suspense>
      </Provider>
  );
}

export default App;
