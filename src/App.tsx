import styled from '@emotion/styled'
import Login from 'routes/Login/Login'
import './App.css'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <AppContainer>
      <Login />
    </AppContainer>
  )
}

export default App
