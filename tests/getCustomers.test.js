import { getCustomers } from '../getCustomers'
import expectedCustomers from './testData/customersJson.json'

describe('Getting customers', () => {
  test('Should return array of objects containing customer data', async () => {
    const customers = await getCustomers()
    expect(customers).toEqual(expectedCustomers)
  })
}) 
