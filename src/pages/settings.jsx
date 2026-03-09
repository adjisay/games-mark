import ProfileInfo from '@/sections/ProfileInfo'
import SettingsSection from '@/sections/SettingsSection'
import ToggleSwitch from '@/components/ToggleSwitch'
import PillButton from '@/components/PillButton'
import Dropdown from '@/components/Dropdown'
import ThemeSelector from '@/components/ThemeSelector'
import ProfileSummary from '@/sections/ProfileSummary'
import LinkedAccounts from '@/sections/LinkedAccounts'
import DangerZone from '@/sections/DangerZone'

const notificationItems = [
  {
    title: 'Match Reminders',
    description: 'Get notified 30 min before your scheduled matches',
    control: <ToggleSwitch isOn={true} />,
  },
  {
    title: 'Game Invites',
    description: 'Receive invitations to join new games',
    control: <ToggleSwitch isOn={true} />,
  },
  {
    title: 'Messages',
    description: 'Notifications for new direct messages',
    control: <ToggleSwitch isOn={false} />,
  },
  {
    title: 'Results Updates',
    description: 'Get updates on match results and scores',
    control: <ToggleSwitch isOn={true} />,
  },
]

const securityItems = [
  {
    title: 'Password',
    description: 'Last changed 3 months ago',
    control: <PillButton>Change Password</PillButton>,
  },
  {
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account',
    control: <ToggleSwitch isOn={false} />,
  },
  {
    title: 'Active Sessions',
    description: '2 devices currently signed in',
    control: <PillButton>Manage</PillButton>,
  },
]

const appItems = [
  {
    title: 'Theme',
    description: 'Choose your preferred appearance',
    control: <ThemeSelector />,
  },
  {
    title: 'Language',
    description: 'Select your preferred language',
    control: <Dropdown>English</Dropdown>,
  },
]

const privacyItems = [
  {
    title: 'Profile Visibility',
    description: 'Control who can see your profile',
    control: <Dropdown>Everyone</Dropdown>,
  },
  {
    title: 'Game Invite Permissions',
    description: 'Choose who can invite you to games',
    control: <Dropdown>Friends Only</Dropdown>,
  },
  {
    title: 'Show Activity Status',
    description: "Let others see when you're online",
    control: <ToggleSwitch isOn={true} />,
  },
]

export const metadata = {
  title: 'Settings',
}

export default () => {
  return (
    <div className="page-grid settings-page">
      <ProfileInfo />
      <SettingsSection
        title="Notification Settings"
        titleId="notifications-title"
        description="Choose what notifications you want to receive"
        items={notificationItems}
      />
      <SettingsSection
        title="Security"
        titleId="security-title"
        items={securityItems}
      />
      <SettingsSection
        title="App Settings"
        titleId="app-settings-title"
        items={appItems}
      />
      <SettingsSection
        title="Privacy"
        titleId="privacy-title"
        items={privacyItems}
      />
      <ProfileSummary />
      <LinkedAccounts />
      <DangerZone />
    </div>
  )
}
