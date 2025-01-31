import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('Successful authorization with correct data should receive code 200', async ({ request }) => {
  // prepare request body
  const requestBody = {
    username: 'qweqwe',
    password: '123',
  }
  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/test-orders', {
    data: requestBody,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})
