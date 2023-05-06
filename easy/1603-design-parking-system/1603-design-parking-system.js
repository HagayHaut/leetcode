/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
    constructor(big, medium, small) {
        this.lot = {1: big, 2: medium, 3: small};
    }
    
    addCar(size) {
        if (this.lot[size]) {
            this.lot[size]--;
            return true;
        }
        return false;
    }
};



/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */