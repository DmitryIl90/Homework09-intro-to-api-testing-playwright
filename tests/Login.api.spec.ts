import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('Successful authorized with valid username and password and return status code OK', async ({
  request,
}) => {
  const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
    data: { username: 'qweasd', password: '123' },
  })
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  expect(response.status()).toBe(StatusCodes.OK)
})
