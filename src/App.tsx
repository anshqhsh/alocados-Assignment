import styled from '@emotion/styled'
import Login from 'routes/Login/Login'
import { colors } from 'styles/colors'
import './App.css'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.BACKGROUND_COLOR};
`

const App = () => {
  return (
    <AppContainer>
      <Login />
    </AppContainer>
  )
}

export default App
