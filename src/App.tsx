import AppRoutes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRoutes />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
