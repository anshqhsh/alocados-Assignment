import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const Login = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box component='form' onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
        <TextField margin='normal' fullWidth id='email' label='이메일' name='email' autoFocus />
        <TextField margin='normal' fullWidth name='password' label='비밀번호' type='password' id='password' />
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          로그인
        </Button>
      </Box>
    </Container>
  )
}

export default Login
