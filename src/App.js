import { Provider } from "react-redux";
import MyRouter from "./components/MyRouter";
import store from "./redux/store";


function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <MyRouter></MyRouter>
      </Provider>
    </div>
  );
}

export default App;
