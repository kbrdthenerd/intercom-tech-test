import { writeCustomersToFile } from '../../customerUtils'
import customers from './testData/displayCustomers.json'
import { promises } from 'fs'

describe('Writing customers to file', () => {
  test('Should write correct customer data to a file', async () => {
    const path = './output.txt'
    await clearOutput(path)
    const expectedOutputText = await promises.readFile('./tests/customerUtils/testData/output.txt', { encoding: 'utf8' })

    await writeCustomersToFile(customers, path)
    const outputText =  await promises.readFile(path, { encoding: 'utf8' })
    expect(outputText).toEqual(expectedOutputText)
  })
})

const clearOutput = async (path) => {
  try {
    await promises.stat(path)
    await promises.unlink(path)
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}
