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
})

test('Unsuccessful method test', async ({ request }) => {
  const response = await request.get('https://backend.tallinn-learning.ee/login/student', {
    data: LoginDto.createLoginWithCorrectData(),
  })

  console.log(await response.text())
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
})
