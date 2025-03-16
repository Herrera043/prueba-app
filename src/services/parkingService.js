import { db } from './firebaseConfig';

export const parkingService = {
  calculateParkingFee: (startTime, endTime) => {
    const duration = (endTime - startTime) / (1000 * 60); // Duration in minutes
    const baseRate = 500; // 500 pesos per hour
    return Math.ceil(duration / 60) * baseRate;
  },

  async reserveSpot(spotId, userId) {
    try {
      await db.collection('parkingSpots').doc(spotId).update({
        status: 'reserved',
        reservedBy: userId,
        reservedAt: new Date().toISOString(),
      });
      return true;
    } catch (error) {
      console.error('Error reserving spot:', error);
      return false;
    }
  },

  async occupySpot(spotId, userId) {
    try {
      await db.collection('parkingSpots').doc(spotId).update({
        status: 'occupied',
        occupiedBy: userId,
        occupiedAt: new Date().toISOString(),
      });
      return true;
    } catch (error) {
      console.error('Error occupying spot:', error);
      return false;
    }
  },

  async releaseSpot(spotId) {
    try {
      await db.collection('parkingSpots').doc(spotId).update({
        status: 'available',
        reservedBy: null,
        occupiedBy: null,
        reservedAt: null,
        occupiedAt: null,
      });
      return true;
    } catch (error) {
      console.error('Error releasing spot:', error);
      return false;
    }
  }
};

export default parkingService;