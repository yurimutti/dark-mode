import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { UserContext } from './contexts/UserContext'

import GlobalStyle from './styles/global'
import Header from './components/Header'

function App() {
  const {theme, toggleTheme} = useContext(UserContext)

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
