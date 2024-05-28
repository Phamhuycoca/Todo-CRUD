import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//Import Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import allReducers from "./reducers";
const store = createStore(allReducers);

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
