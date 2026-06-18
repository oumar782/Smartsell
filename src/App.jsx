import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Elearning from './pages/Elearning'
import Podcast from './pages/Podcast'
import Influencer from './pages/Influencer'
import News from './pages/News'
import Contact from './pages/Contact'
import './App.css'      // En premier
import './pages/home.css' // En deuxième
import './index.css'    // En dernier (pour priorité)
export default function App(){
  return (
    <div className="ss-app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio/*" element={<Portfolio/>} />
        <Route path="/elearning" element={<Elearning/>} />
        <Route path="/podcast" element={<Podcast/>} />
        <Route path="/influenceur" element={<Influencer/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}