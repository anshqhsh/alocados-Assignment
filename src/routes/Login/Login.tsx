import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { borderRadius, fontWeight, lineHeight } from '@mui/system'
import { createTheme, ThemeProvider, Typography } from '@mui/material'

const theme = createTheme()
// TODO: 일단 typography만 전역적으로 styling을 해야할 필요 있을듯함 ex: fontFamily, color
theme.typography.h5 = {
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '150%',
  color: '#131924',
}

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
      <ThemeProvider theme={theme}>
        <Typography variant='h5'>로그인</Typography>
      </ThemeProvider>
      <Box component='form' onSubmit={submitHandler} noValidate sx={{ mt: 4 }}>
        <TextField
          margin='normal'
          fullWidth
          id='email'
          variant='filled'
          label='이메일'
          sx={[
            {
              mt: 0,
              mb: 8,
            },
            {
              '& .MuiFilledInput-root': { background: '#F9FBFF', borderRadius: '8px 8px 0px 0px' },
              '& .MuiFilledInput-input:focus': { boxShadow: '0px 12px 24px rgba(0, 83, 244, 0.12)' },
            },
          ]}
          name='email'
          autoFocus
        />
        <TextField
          margin='normal'
          fullWidth
          name='password'
          variant='filled'
          label='비밀번호'
          sx={[
            {
              mb: 6,
            },
            {
              '& .MuiFilledInput-root': { background: '#F9FBFF', borderRadius: '8px 8px 0px 0px' },
              '& .MuiFilledInput-input:focus': { boxShadow: '0px 12px 24px rgba(0, 83, 244, 0.12)' },
            },
          ]}
          type='password'
          id='password'
        />
        <Button type='submit' fullWidth variant='contained' sx={{ height: 64 }} size='large'>
          로그인
        </Button>
      </Box>
    </Container>
  )
}

export default Login
