import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {SettingsProvider} from "./components/Context.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SettingsProvider>
          <App />
      </SettingsProvider>
  </React.StrictMode>,
)
