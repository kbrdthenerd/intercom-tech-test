import { calculateDistanceBetweenPoints } from '../../distanceUtils'

describe('Calculating distance', () => {
  test('Should calculate distance', () => {
    const distance = calculateDistanceBetweenPoints({ latitude: 52.986375, longitude: 6.043701 }, { latitude: 53.339428, longitude: 6.257664 })
    expect(distance).toEqual(41.76872550099624)
  })
  
  test('Distance should be the same regardless of order', () => {
    const distance = calculateDistanceBetweenPoints({ latitude: 53.339428, longitude: 6.257664 }, { latitude: 52.986375, longitude: 6.043701 })
    const reverseDistance = calculateDistanceBetweenPoints({ latitude: 52.986375, longitude: 6.043701 }, { latitude: 53.339428, longitude: 6.257664 })
    expect(distance).toEqual(reverseDistance)
  })
}) 