import './MobileTabBar.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { url } = props

  const tabs = [
    { label: 'Matches', icon: 'matches', href: '/' },
    { label: 'Statistic', icon: 'stats', href: '/stats' },
    { label: 'Bookmark', icon: 'bookmark', href: '/bookmarks' },
    { label: 'Profile', icon: 'profile', href: '/profile' },
  ]

  return (
    <nav className="mobile-tab-bar visible-tablet">
      <ul className="mobile-tab-bar__list">
        {tabs.map(({ label, icon, href }, index) => (
          <li className="mobile-tab-bar__item" key={index}>
            <a
              className={clsx(
                'mobile-tab-bar__link',
                href === url && 'is-active'
              )}
              href={href}
            >
              <Icon className="mobile-tab-bar__icon" name={icon} />
              <span className="mobile-tab-bar__label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
