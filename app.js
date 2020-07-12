import { getCustomers } from './getCustomers.js'

(async () => {
  const customers = await getCustomers()
  console.log(customers)
})()