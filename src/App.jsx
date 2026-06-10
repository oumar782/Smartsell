import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import './pages/home.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Elearning from './pages/Elearning'
import Podcast from './pages/Podcast'
import Influencer from './pages/Influencer'
import News from './pages/News'

export default function App(){
  return (
    <div className="ss-app">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio/*" element={<Portfolio/>} />
        <Route path="/elearning" element={<Elearning/>} />
        <Route path="/podcast" element={<Podcast/>} />
        <Route path="/influencer" element={<Influencer/>} />
        <Route path="/news" element={<News/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}
