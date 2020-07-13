import { calculateDistanceBetweenPoints } from '../../distanceUtils'
import testCoordinates from '../distanceUtils/testData/coordinates.json'

describe.each(testCoordinates)('Calculating distance', (coordinates) => {
  const officeCoordinates = { latitude: 53.339428, longitude: -6.257664 }

  test('Should calculate distance', () => {
    const { latitude, longitude, distance: expectedDistance } = coordinates

    const distance = calculateDistanceBetweenPoints({ latitude, longitude }, officeCoordinates)
    expect(distance).toEqual(expectedDistance)
  })
  
  test('Distance should be the same regardless of order', () => {
    const { latitude, longitude} = coordinates

    const distance = calculateDistanceBetweenPoints({ latitude, longitude }, officeCoordinates)
    const reverseDistance = calculateDistanceBetweenPoints(officeCoordinates, { latitude, longitude })
    expect(distance).toEqual(reverseDistance)
  })
})
