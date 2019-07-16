// @flow
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import type { History } from 'react-router'
import { HeaderContainer, HeaderButton } from './styles'
import MainIcon from '../../assets/icon/MainIconPokeFlow.svg'
import SearchIcon from '../../assets/icon/SearchIcon.svg'
import BackIcon from '../../assets/icon/BackIcon.svg'

type HeaderProps = {
  menuIcon: 'back',
  history: History
}

function Header(props: HeaderProps) {
  const { menuIcon, history } = props
  return (
    <HeaderContainer>
      {menuIcon && menuIcon === 'back' && (
        <HeaderButton onClick={() => history.goBack()}>
          <img src={BackIcon} alt={menuIcon} />
        </HeaderButton>
      )}
      <div>
        <Link to="/" title="Poke Flow">
          <img src={MainIcon} alt="poke flow" />
        </Link>
      </div>
      <Link to="/search" className="navigation">
        <img src={SearchIcon} alt="search" />
      </Link>
    </HeaderContainer>
  )
}

export default withRouter(Header)
