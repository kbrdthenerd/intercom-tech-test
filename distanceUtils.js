export const calculateDistance = (pointA, pointB) => {
  const radius = 6371
  const { longitude: lngA, latitude: latA } = pointA
  const { longitude: lngB, latitude: latB } = pointB
  const latARadians = degreesToRadians(latA)
  const latBRadians = degreesToRadians(latB)
  const lngDistanceRadians = degreesToRadians(lngB-lngA)

  const centralAngle = Math.acos(
    Math.sin(latARadians) * Math.sin(latBRadians) +
    Math.cos(latARadians) * Math.cos(latBRadians) * Math.cos(lngDistanceRadians)
  )
     
  return radius * centralAngle
}

const degreesToRadians = (degrees) =>  {
  return degrees * (Math.PI/180)
}