import React from "react";
import { Provider } from "react-redux";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </>
  );
}

export default App;