import styled from '@emotion/styled'
import { Route, Routes } from 'react-router-dom'
import Login from 'routes/Login/Login'
import { colors } from 'styles/colors'
import GNB from './GNB/GNB'
import Todo from './Todo'

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

// TODO: 컴포넌트 정리
const App = () => {
  return (
    <AppContainer>
      <GNB />
      <RouterPageContainer>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='list' element={<Todo />} />
          <Route path='*' element={<div>404 not found</div>} />
        </Routes>
      </RouterPageContainer>
    </AppContainer>
  )
}

export default App
