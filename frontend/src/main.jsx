import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import nouvelles from "./script/nouvelles.js";
import utilisateurs from "./script/utilisateurs.js";
const tabNouvelles = nouvelles

if (localStorage.getItem('tabNouvelle') === null || JSON.parse(localStorage.getItem('tabNouvelle')).length === 0) {
localStorage.setItem('tabNouvelle', JSON.stringify(tabNouvelles))
}

if (!localStorage.getItem("utilisateurs")) {
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
  </StrictMode>,
)
