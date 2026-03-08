import './CreateGame.scss'
import Icon from '@/components/Icon'
import Section from '@/layouts/Section'

export default () => {
  return (
    <Section className="create-game" hideOnMobile>
      <Icon className="create-game__icon" name="plus" />
      <h3 className="create-game__title">Create Game</h3>
      <p className="create-game__description">
        Create new game so you can invite all of your friends to the game and
        make it awesome!
      </p>
      <a className="create-game__btn" href="/create-game">
        <Icon className="create-game__btn-icon" name="plus" />
        <span>Create New Game</span>
      </a>
    </Section>
  )
}
