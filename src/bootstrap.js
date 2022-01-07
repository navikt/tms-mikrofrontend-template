import React from "react";
import ReactDOM from "react-dom";
import Microfrontend from "./Microfrontend";
import "./bootstrap.less";

const startMockWorker = async () => {
  const mock = await import("./mocks/browser");
  await mock.worker.start();
};

if (process.env.NODE_ENV === "development") {
  startMockWorker();
}

ReactDOM.render(
  <React.StrictMode>
    <Microfrontend />
  </React.StrictMode>,
  document.getElementById("microfrontend")
);
