import './TopBar.scss'
import Icon from '@/components/Icon'
import Logo from '@/components/Logo'

export default () => {
  return (
    <header className="top-bar">
      <div className="top-bar__inner">
        <Logo className="top-bar__logo visible-tablet" loading="eager" />
        <div className="top-bar__search hidden-tablet">
          <Icon className="top-bar__search-icon" name="search" />
          <input
            className="top-bar__search-input"
            type="search"
            placeholder="Find games..."
          />
        </div>
        <div className="top-bar__actions">
          <div className="top-bar__badge hidden-tablet">
            <span className="top-bar__badge-label">Legend</span>
          </div>
          <div className="top-bar__coins">
            <Icon className="top-bar__coins-icon" name="coins" />
            <span className="top-bar__coins-value">928</span>
          </div>
          <button className="top-bar__icon-btn hidden-tablet" type="button">
            <Icon name="message" />
          </button>
          <button className="top-bar__icon-btn hidden-tablet" type="button">
            <Icon name="notification" />
          </button>
          <button className="top-bar__icon-btn visible-tablet" type="button">
            <Icon name="bookmark" />
          </button>
          <div className="top-bar__profile hidden-tablet">
            <div className="top-bar__profile-avatar">
              <span className="top-bar__profile-avatar-text">DR</span>
            </div>
            <div className="top-bar__profile-info">
              <span className="top-bar__profile-name">Daniella Rake</span>
              <span className="top-bar__profile-role">Coach 1</span>
            </div>
            <Icon className="top-bar__profile-chevron" name="chevron-down" />
          </div>
        </div>
      </div>
    </header>
  )
}
