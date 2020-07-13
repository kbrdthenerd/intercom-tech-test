import { filterCustomersByDistance } from '../../customerUtils'
import customers from './testData/customers.json'
import expectedFilteredCustomers from './testData/filteredCustomers.json'

describe('Filter customers by distance', () => {
  test('Should only return customers within the given distance', () => {
    const filteredCustomers = filterCustomersByDistance(customers, { latitude: 53.339428, longitude: -6.257664 }, 100)
    expect(filteredCustomers).toEqual(expectedFilteredCustomers)
  })
}) 
