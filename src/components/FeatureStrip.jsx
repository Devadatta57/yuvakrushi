import { LeafIcon, SunIcon, UsersIcon } from './icons.jsx'

const features = [
  { title: 'Smart Farming', subtitle: 'Better Decisions', Icon: LeafIcon, tone: 'green' },
  { title: 'Sustainable Future', subtitle: 'Greener Tomorrow', Icon: SunIcon, tone: 'amber' },
  { title: 'Empowering Youth', subtitle: 'Build Agri Careers', Icon: UsersIcon, tone: 'violet' },
]

export default function FeatureStrip() {
  return (
    <ul className="features">
      {features.map(({ title, subtitle, Icon, tone }) => (
        <li key={title} className="feature">
          <span className={`feature__icon feature__icon--${tone}`}>
            <Icon />
          </span>
          <span className="feature__text">
            <strong className="feature__title">{title}</strong>
            <span className="feature__subtitle">{subtitle}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
