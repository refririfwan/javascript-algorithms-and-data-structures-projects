function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // Calculate the orbital period for a single object
  function calculateOrbitalPeriod(avgAltitude) {
    const semiMajorAxis = earthRadius + avgAltitude;
    const orbitalPeriodInSeconds = 2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM);
    return Math.round(orbitalPeriodInSeconds);
  }

  // Calculate orbital periods for all objects in the array
  const result = arr.map(item => ({
    name: item.name,
    orbitalPeriod: calculateOrbitalPeriod(item.avgAlt)
  }));

  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);