import './Sidebar.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo'
import Icon from '@/components/Icon'

export default (props) => {
  const { url } = props

  const mainMenuItems = [
    { label: 'Matches', icon: 'matches', href: '/' },
    { label: 'Stats', icon: 'stats', href: '/stats' },
    { label: 'Ratings', icon: 'ratings', href: '/ratings' },
    { label: 'Bookmarks', icon: 'bookmarks', href: '/bookmarks' },
    { label: 'Settings', icon: 'settings', href: '/settings' },
  ]

  return (
    <aside className="sidebar hidden-tablet">
      <div className="sidebar__inner">
        <Logo className="sidebar__logo" loading="eager" />
        <nav className="sidebar__nav">
          <ul className="sidebar__menu">
            {mainMenuItems.map(({ label, icon, href }, index) => (
              <li className="sidebar__menu-item" key={index}>
                <a
                  className={clsx(
                    'sidebar__menu-link',
                    (href === '/' ? url === '/' : url?.startsWith(href)) &&
                      'is-active'
                  )}
                  href={href}
                >
                  <Icon className="sidebar__menu-icon" name={icon} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="sidebar__logout" href="/logout">
          <Icon className="sidebar__menu-icon" name="logout" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  )
}
