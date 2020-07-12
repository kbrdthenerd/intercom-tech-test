import { getCustomers } from './getCustomers.js'
import { calculateDistance } from './calculateDistance.js'

(async () => {
  const officeCoordinates = { latitude: 53.339428, longitude: -6.257664 }
  const customers = await getCustomers()
  const customersWithDistances = customers.map(customer => {
    const { latitude, longitude } = customer
    const distance = calculateDistance(officeCoordinates, { latitude, longitude })
    return Object.assign({}, { distance }, customer)
  })
  console.log(customersWithDistances)
})()