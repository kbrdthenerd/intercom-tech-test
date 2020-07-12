import { promises } from 'fs'
import { calculateDistance } from './distanceUtils.js'

export const getCustomers = async () => {
  const customerText =  await promises.readFile('customers.txt', {encoding: 'utf8'});
  return customerText.split('\n').map(customer => JSON.parse(customer))
}

export const writeCustomers = async (customers) => {
  const customerString = customers.map( customer => JSON.stringify(customer)).join('\n')
  await promises.writeFile('./output.txt', customerString)
}

export const getFilteredAndPretty = (customers) => {
  const filteredByDistance = customers.filter(customer => customer.distance < 100)
  const pretty = filteredByDistance.map(({ user_id, name }) => ({ user_id, name}))
  const sortedByUserId = pretty.sort((customer1, customer2) => customer1.user_id - customer2.user_id)
  return sortedByUserId
}

export const withDistances = (customers, officeCoordinates) => {
  return customers.map(customer => {
    const { latitude, longitude } = customer
    const distance = calculateDistance(officeCoordinates, { latitude, longitude })
    return Object.assign({}, { distance }, customer)
  })
}
