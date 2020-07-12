import { getCustomers, writeCustomers, getFilteredAndPretty, withDistances } from './customerUtils.js'

(async () => {
  const officeCoordinates = { latitude: 53.339428, longitude: -6.257664 }
  const customers = await getCustomers()
  const customersWithDistances = withDistances(customers, officeCoordinates)
  const prettyAndFiltered = getFilteredAndPretty(customersWithDistances)
  await writeCustomers(prettyAndFiltered)
})()