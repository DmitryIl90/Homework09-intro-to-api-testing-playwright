import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('Order was updated successfully with valid API key and id and return status code OK', async ({
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
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
    headers: requestHeaders,
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Order was updated unsuccessfully with valid API key and invalid id and return status code Bad Request', async ({
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
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/11', {
    headers: requestHeaders,
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Order was updated unsuccessfully with missing API key and return status code Unauthorized', async ({
  request,
}) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'Dmitry',
    customerPhone: '35525233224',
    comment: 'grebhhe',
    id: 3,
  }
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
    data: requestBody,
  })
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})
