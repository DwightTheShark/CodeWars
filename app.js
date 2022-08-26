function zeroFuel(pumpDistance, carMpg, carGallons) {
    var maxDistance = carGallons * carMpg;
    return maxDistance >= pumpDistance;
 }