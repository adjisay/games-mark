import './index.scss'
import ProfileInfo from '@/sections/ProfileInfo'
import NotificationSettings from '@/sections/NotificationSettings'
import SecuritySettings from '@/sections/SecuritySettings'
import AppSettings from '@/sections/AppSettings'
import PrivacySettings from '@/sections/PrivacySettings'
import ProfileSummary from '@/sections/ProfileSummary'
import LinkedAccounts from '@/sections/LinkedAccounts'
import DangerZone from '@/sections/DangerZone'

export const metadata = {
  title: 'Settings',
}

export default () => {
  return (
    <div className="settings-page">
      <div className="settings-page__main">
        <ProfileInfo />
        <NotificationSettings />
        <SecuritySettings />
        <AppSettings />
        <PrivacySettings />
      </div>
      <aside className="settings-page__aside hidden-tablet">
        <ProfileSummary />
        <LinkedAccounts />
        <DangerZone />
      </aside>
    </div>
  )
}
