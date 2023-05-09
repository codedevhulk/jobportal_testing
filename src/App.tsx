import "./App.css";
import { Outlet } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
