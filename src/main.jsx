import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Loesungen from './pages/Loesungen'
import Preise from './pages/Preise'
import RoiRechner from './pages/RoiRechner'
import FAQ from './pages/FAQ'
import UeberUns from './pages/UeberUns'
import { Impressum, Datenschutz, AGB } from './pages/Recht'
import Checkout from './pages/Checkout'
import Demo from './pages/Demo'
import Onboarding from './pages/Onboarding'
import { DankeDemo, DankeKauf } from './pages/Thanks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/loesungen" element={<Loesungen />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/roi-rechner" element={<RoiRechner />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/rechtliches/impressum" element={<Impressum />} />
        <Route path="/rechtliches/datenschutz" element={<Datenschutz />} />
        <Route path="/rechtliches/agb" element={<AGB />} />
        <Route path="/kaufen" element={<Checkout />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/danke-demo" element={<DankeDemo />} />
        <Route path="/danke-kauf" element={<DankeKauf />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
