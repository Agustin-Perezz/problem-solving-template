function test(clouds, jumpDistance) {
  const THUNDERHEAD = 1;
  let energyLevel = 100;
  let i = 0;

  do {
    i += jumpDistance;

    if (i >= clouds.length) {
      i = i - clouds.length;
    }

    if (clouds[i] === THUNDERHEAD) {
      energyLevel -= 2;
    }

    energyLevel--;
  } while (i !== 0);

  return energyLevel;
}

const result = test([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1);
console.log("output", result);
