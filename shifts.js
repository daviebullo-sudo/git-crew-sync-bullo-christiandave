function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours < 0) {
    throw new Error("hours must be non-negative");
  }
  if (hours <= 8) {
    return Math.floor(hours * rate);
  }
  // time-and-a-half for hours over 8
  return Math.floor(8 * rate + (hours - 8) * rate * 1.5);
}

module.exports = { isValidShift, calculatePay };
