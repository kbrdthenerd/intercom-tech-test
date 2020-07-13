import { getCustomersFromFile, writeCustomersToFile, filterCustomersByDistance, convertCustomersToDisplayStructure } from './customerUtils.js'

(async () => {
  const officeCoordinates = { latitude: 53.339428, longitude: -6.257664 }
  const maxDistance = 100
  
  const customers = await getCustomersFromFile('customers.txt')
  const filteredCustomer = filterCustomersByDistance(customers, officeCoordinates, maxDistance)
  const displayCustomers = convertCustomersToDisplayStructure(filteredCustomer)
  await writeCustomersToFile(displayCustomers, 'output.txt')
})()