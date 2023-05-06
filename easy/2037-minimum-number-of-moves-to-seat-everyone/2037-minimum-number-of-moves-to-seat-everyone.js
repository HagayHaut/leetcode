/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    
    let res = 0;
    
    seats.forEach((seat, i) => res += Math.abs(students[i] - seat));
    
    return res;
};