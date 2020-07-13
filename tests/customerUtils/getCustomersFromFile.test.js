import { getCustomersFromFile } from '../../customerUtils'
import expectedCustomers from './testData/customers.json'

describe('Getting customers from file', () => {
  test('Should return array of objects containing customer data', async () => {
    const customers = await getCustomersFromFile('customers.txt')
    expect(customers).toEqual(expectedCustomers)
  })
}) 
