import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SettingsProvider } from "./components/Context.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainScreen } from "./components/Main_Components/MainScreen.tsx";
import { InitialScreen } from "./components/InitialScreen.tsx";
import { QuestionForm } from "./components/Main_Components/QuestionForm.tsx";
import { ResultScreen } from "./components/Result_Components/ResultScreen.tsx";
import { StatisticScreen } from "./components/Statistic_Components/StatisticScreen.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Loading } from "./components/Loading.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialScreen />,
  },
  {
    path: "/main",
    element: <MainScreen />,
    children: [
      {
        path: "/main/:questionId",
        element: <QuestionForm />,
      },
    ],
  },
  {
    path: "/result",
    element: <ResultScreen />,
  },
  {
    path: "/statistic",
    element: <StatisticScreen />,
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SettingsProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </SettingsProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
