import Hero from './components/Hero.jsx'
import FeatureStrip from './components/FeatureStrip.jsx'
import Discover from './components/Discover.jsx'
import IdeaBanner from './components/IdeaBanner.jsx'
import JoinForm from './components/JoinForm.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <header className="page">
        <div className="card">
          <Hero />
          <FeatureStrip />
        </div>
      </header>

      <main>
        <Discover />
        <IdeaBanner />
        <JoinForm />
      </main>
    </>
  )
}
