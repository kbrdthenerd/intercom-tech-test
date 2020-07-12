import { getFilteredAndPretty } from '../customerUtils'
import customers from './testData/customersWithDistanceJson.json'

describe('Getting filtered and prettty customers', () => {
  test('Should be filtered', async () => {
    const prettyCustomers = await getFilteredAndPretty(customers)
    expect(prettyCustomers.length).toBeLessThan(customers.length)
    prettyCustomers.forEach(({ user_id, name, distance, longitude, latitude}) => {
      expect(user_id).toBeDefined()
      expect(name).toBeDefined()
      expect(distance).toBeUndefined()
      expect(longitude).toBeUndefined()
      expect(latitude).toBeUndefined()
    })
    const isSorted = prettyCustomers.reduce((sorted, { user_id }, index) => {
      if (!sorted) return sorted
      return index + 1 === prettyCustomers.length || user_id < prettyCustomers[index + 1].user_id 
    }, true)
    expect(isSorted).toBe(true)
  })

  test('Should only have user_id and name', async () => {
    const prettyCustomers = await getFilteredAndPretty(customers)
    prettyCustomers.forEach(({ user_id, name, distance, longitude, latitude}) => {
      expect(user_id).toBeDefined()
      expect(name).toBeDefined()
      expect(distance).toBeUndefined()
      expect(longitude).toBeUndefined()
      expect(latitude).toBeUndefined()
    })
  })

  test('Should be sorted by user_id', async () => {
    const prettyCustomers = await getFilteredAndPretty(customers)
    const isSorted = prettyCustomers.reduce((sorted, { user_id }, index) => {
      if (!sorted) return sorted
      return index + 1 === prettyCustomers.length || user_id < prettyCustomers[index + 1].user_id 
    }, true)
    expect(isSorted).toBe(true)
  })
}) 
