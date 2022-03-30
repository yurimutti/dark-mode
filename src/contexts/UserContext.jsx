import { createContext } from 'react';
import usePersistedState from '../utils/usePersistedState'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <UserContext.Provider value={{theme, toggleTheme}}>
      {children}
    </UserContext.Provider>
  )
}
