import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('Successful authorized with valid username and password and return status code OK', async ({
  request,
}) => {
  const requestBody = {
    username: 'qweqwe',
    password: '123',
  }
  const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
    data: requestBody,
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})
