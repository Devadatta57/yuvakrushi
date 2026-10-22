import headerImage from '../assets/yuvakrushiheader.png'
import { LeafSprig, SmallLeaf } from './icons.jsx'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 id="brand-title" className="brand">
          <span className="brand__word">
            YUVA
            <LeafSprig className="brand__leaves" />
          </span>
          <span className="brand__word">KRUSHI</span>
        </h1>

        <p className="tagline">
          <span className="tagline__today">Ideas Today.</span>{' '}
          <span className="tagline__tomorrow">Greener Tomorrow.</span>
          <SmallLeaf className="tagline__leaf" />
        </p>

        <p className="hero__subtitle">
          A pathway for young professionals
          <br />
          to become agripreneurs.
        </p>
      </div>

      <figure className="hero__frame">
        <img
          src={headerImage}
          alt="Young farmer using a tablet among drones, solar panels and smart-farming data overlays"
        />
      </figure>
    </div>
  )
}
