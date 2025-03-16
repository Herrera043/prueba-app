export const sampleParkingSpots = [
  {
    id: '1',
    latitude: -34.6037,
    longitude: -58.3816,
    status: 'available',
    price: 500,
  },
  {
    id: '2',
    latitude: -34.6038,
    longitude: -58.3817,
    status: 'reserved',
    price: 500,
    reservedAt: new Date().toISOString(),
  },
  {
    id: '3',
    latitude: -34.6039,
    longitude: -58.3818,
    status: 'occupied',
    price: 500,
  },
];

export const samplePayments = [
  {
    id: '1',
    amount: 500,
    type: 'parking',
    timestamp: new Date().toISOString(),
    spotId: '1',
  },
  {
    id: '2',
    amount: 200,
    type: 'reservation',
    timestamp: new Date().toISOString(),
    spotId: '2',
  },
];