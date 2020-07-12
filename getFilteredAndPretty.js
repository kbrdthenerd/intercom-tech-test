export const getFilteredAndPretty = (customers) => {
  const filteredByDistance = customers.filter(customer => customer.distance < 100)
  const pretty = filteredByDistance.map(({ user_id, name }) => ({ user_id, name}))
  const sortedByUserId = pretty.sort((customer1, customer2) => customer1.user_id - customer2.user_id)
  return sortedByUserId
}