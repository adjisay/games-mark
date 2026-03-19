import './Header.scss'
import Icon from '@/components/Icon'
import Logo from '@/components/Logo'
import Badge from '@/components/Badge'

export default () => {
  return (
    <header className="header" data-js-header>
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
          <button
            className="header__theme-toggle"
            type="button"
            data-js-theme-toggle
            aria-label="Toggle theme"
          >
            <Icon className="header__theme-icon header__theme-icon--sun" name="sun" />
            <Icon className="header__theme-icon header__theme-icon--moon" name="moon" />
          </button>
          <Badge
            className="header__badge hidden-tablet"
            color="blue"
            bordered
            icon="trophy"
          >
            Legend
          </Badge>
          <Badge
            className="header__coins"
            color="green"
            bordered
            icon="coins"
            iconHasFill
          >
            928
          </Badge>
          <button className="header__icon-btn hidden-tablet" type="button">
            <Icon name="message" />
          </button>
          <button className="header__icon-btn hidden-tablet" type="button">
            <Icon name="notification" />
          </button>
          <button
            className="header__icon-btn visible-tablet"
            type="button"
            data-js-header-search-toggle
          >
            <Icon name="search" />
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
      <div className="header__mobile-search visible-tablet" data-js-header-mobile-search>
        <Icon className="header__search-icon" name="search" />
        <input
          className="header__search-input"
          type="search"
          placeholder="Find games..."
        />
      </div>
    </header>
  )
}
