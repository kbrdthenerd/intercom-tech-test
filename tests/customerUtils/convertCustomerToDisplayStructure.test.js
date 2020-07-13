import { convertCustomersToDisplayStructure } from '../../customerUtils'
import customers from './testData/filteredCustomers.json'
import expectedDisplayCustomers from './testData/displayCustomers.json'

describe('Convert customers to display structure', () => {
  test('Should return customers sorted with only user_id and name', async () => {
    const displayCustomers = convertCustomersToDisplayStructure(customers)
    expect(displayCustomers).toEqual(expectedDisplayCustomers)
  })
})
