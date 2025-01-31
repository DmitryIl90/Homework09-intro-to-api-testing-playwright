import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('Order was deleted successfully with an exists id and valid API key and return status code NO_CONTENT', async ({
  request,
}) => {
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'Dmitry',
    customerPhone: '35525233224',
    comment: 'grebhhe',
    id: 3,
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/1', {
    headers: requestHeaders,
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Order was deleted unsuccessfully with a non-existent order with a valid API key and return status code BAD REQUEST', async ({
  request,
}) => {
  const requestHeaders = {
    api_key: '1234567890123456',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/199', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Order was deleted with invalid API key and return status code UNAUTHORIZED', async ({
  request,
}) => {
  const requestHeaders = {
    api_key: 'invalid-api-key',
  }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/1', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})
