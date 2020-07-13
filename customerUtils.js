import { promises } from 'fs'
import { calculateDistanceBetweenPoints } from './distanceUtils.js'

export const getCustomersFromFile = async (path) => {
  const customerText =  await promises.readFile(path, { encoding: 'utf8' })
  return customerText.split('\n').map(customer => JSON.parse(customer))
}

export const writeCustomersToFile = async (customers, path) => {
  const customerString = customers.map( customer => JSON.stringify(customer)).join('\n')
  await promises.writeFile(path, customerString)
}

export const filterCustomersByDistance = (customers, coordinates, maxDistance) => {
  return customers.filter(customer => {
    const { latitude, longitude } = customer
    const distance = calculateDistanceBetweenPoints(coordinates, { latitude, longitude })
    return distance < maxDistance
  })
}

export const convertCustomersToDisplayStructure = (customers) => {
  const onlyIdAndName = customers.map(({ user_id, name }) => ({ user_id, name}))
  return onlyIdAndName.sort((customer1, customer2) => customer1.user_id - customer2.user_id)
}
