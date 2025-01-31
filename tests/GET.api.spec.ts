import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('Successful login with valid username and password and return status code OK', async ({
  request,
}) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/1')
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Unsuccessful login with invalid username and password and return status code BAD REQUEST', async ({
  request,
}) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/1')
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})
