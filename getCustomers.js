import { promises } from 'fs'

export const getCustomers = async () => {
  const customerText =  await promises.readFile('customers.txt', {encoding: 'utf8'});
  return customerText.split('\n').map(customer => JSON.parse(customer))
}
