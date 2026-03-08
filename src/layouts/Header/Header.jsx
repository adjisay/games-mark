import './Header.scss'
import Icon from '@/components/Icon'
import Logo from '@/components/Logo'

export default () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Logo className="header__logo visible-tablet" loading="eager" />
        <div className="header__search hidden-tablet">
          <Icon className="header__search-icon" name="search" />
          <input
            className="header__search-input"
            type="search"
            placeholder="Find games..."
          />
        </div>
        <div className="header__actions">
          <div className="header__badge hidden-tablet">
            <span className="header__badge-label">Legend</span>
          </div>
          <div className="header__coins">
            <Icon className="header__coins-icon" name="coins" />
            <span className="header__coins-value">928</span>
          </div>
          <button className="header__icon-btn hidden-tablet" type="button">
            <Icon name="message" />
          </button>
          <button className="header__icon-btn hidden-tablet" type="button">
            <Icon name="notification" />
          </button>
          <button className="header__icon-btn visible-tablet" type="button">
            <Icon name="bookmark" />
          </button>
          <div className="header__profile hidden-tablet">
            <div className="header__profile-avatar">
              <span className="header__profile-avatar-text">DR</span>
            </div>
            <div className="header__profile-info">
              <span className="header__profile-name">Daniella Rake</span>
              <span className="header__profile-role">Coach 1</span>
            </div>
            <Icon className="header__profile-chevron" name="chevron-down" />
          </div>
        </div>
      </div>
    </header>
  )
}
