import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LoginPage from '../pages/login'
import api from '@/lib/api'
import * as mock from './auth.mock'

jest.mock('@/lib/api')

describe('LoginPage', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('logs in and redirects on success', async () => {
    api.post.mockResolvedValueOnce(mock.mockLoginResponse)
    render(<LoginPage />)

    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'admin' } })
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } })
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe(mock.mockToken.access)
    })
  })
})
