import { expect, test } from '@playwright/test'
import { LoginDto } from './DTO/LoginDto'
import { StatusCodes } from 'http-status-codes'

test.describe('Login tests', async () => {
  test('Successful authorization', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: LoginDto.createLoginWithCorrectData(),
    })

    expect(
      /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(await response.text()),
    ).toBeTruthy()
    expect(response.status()).toBe(StatusCodes.OK)
  })

  test.describe('Login tests', async () => {
    test('Unsuccessful authorization with incorrect data', async ({ request }) => {
      const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
        data: LoginDto.createLoginWithIncorrectData(),
      })

      expect(
        /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(await response.text()),
      ).toBeFalsy()
      expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
    })
  })

  test.describe('Login tests', async () => {
    test('Unsuccessful authorization with empty', async ({ request }) => {
      const response = await request.post('https://backend.tallinn-learning.ee/login/student', {})

      expect(
        /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/.test(await response.text()),
      ).toBeFalsy()
      expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
    })
  })
})
