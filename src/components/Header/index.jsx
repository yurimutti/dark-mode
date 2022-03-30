import React, { useContext } from 'react'
import Switch from 'react-switch'

import { shade } from 'polished'
import { Container } from './styles'

import { UserContext } from '../../contexts/UserContext'

export default function Header() {
  const { theme, toggleTheme } = useContext(UserContext)


  return (
    <Container>
      <h1>Header</h1>
      <Switch 
        checked={theme.title === 'dark'}
        onChange={toggleTheme}
        onColor={theme.colors.primary}
        offColor={shade(0.30, theme.colors.primary)}
        handleDiameter={16}
        uncheckedIcon={false}
        checkedIcon={false}
        height={10}
        width={40}
      />
    </Container>
  )
}
