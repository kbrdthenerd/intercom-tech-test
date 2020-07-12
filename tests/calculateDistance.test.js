import { calculateDistance } from '../calculateDistance'

describe('Calculating distance', () => {
  test('Should calculate distance', async () => {
    const distance = await calculateDistance({ latitude: 52.986375, longitude: 6.043701 }, { latitude: 53.339428, longitude: 6.257664 })

    expect(distance).toEqual(41.76872550099624)
  })
  test('Distance should be the same regardless of order', async () => {
    const distance = await calculateDistance({ latitude: 53.339428, longitude: 6.257664 }, { latitude: 52.986375, longitude: 6.043701 })
    const reverseDistance = await calculateDistance({ latitude: 52.986375, longitude: 6.043701 }, { latitude: 53.339428, longitude: 6.257664 })

    expect(distance).toEqual(reverseDistance)
  })
}) 