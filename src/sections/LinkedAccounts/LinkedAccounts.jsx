import './LinkedAccounts.scss'
import SettingsCard from '@/components/SettingsCard'

const accounts = [
  { name: 'Google', connected: true },
  { name: 'Apple', connected: false },
  { name: 'Facebook', connected: false },
]

export default () => {
  return (
    <SettingsCard title="Linked Accounts" className="linked-accounts">
      <div className="linked-accounts__list">
        {accounts.map((account) => (
          <div className="linked-accounts__row" key={account.name}>
            <span className="linked-accounts__name">{account.name}</span>
            <button
              className={`linked-accounts__btn ${account.connected ? 'is-connected' : ''}`}
              type="button"
            >
              {account.connected ? 'Connected' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </SettingsCard>
  )
}
