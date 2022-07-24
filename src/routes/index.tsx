import styled from '@emotion/styled'
import Login from 'routes/Login/Login'
import { colors } from 'styles/colors'
import GNB from './GNB/GNB'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.BACKGROUND_COLOR};
`
const RouterPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const App = () => {
  return (
    <AppContainer>
      <GNB />
      <RouterPageContainer>
        <Login />
      </RouterPageContainer>
    </AppContainer>
  )
}

export default App
