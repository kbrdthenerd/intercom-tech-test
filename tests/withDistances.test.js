import { withDistances } from '../customerUtils'
import customers from './testData/customersJson.json'
import expectedCustomersWithDisances from './testData/customersWithDistanceJson.json'

describe('Getting customers', () => {
  test('Should return array of objects containing customer data', async () => {
    const customersWithDistances = await withDistances(customers, { latitude: 53.339428, longitude: -6.257664 })
    expect(customersWithDistances).toEqual(expectedCustomersWithDisances)
  })
}) 
