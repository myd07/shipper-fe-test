import dayjs from 'dayjs';

function parseResponse(driver) {
  return {
    id: driver.id,
    fullname: driver.name.first + ' ' + driver.name.last,
    cell: driver.cell,
    email: driver.email,
    registeredDate: dayjs(driver.registered.date).format('DD-MM-YYYY')
  };
}

function parseData(drivers) {
  const newData = {};
  for (let index = 0; index < drivers.length; index++) {
    const driver = drivers[index];
    if (newData[driver.id]) {
      newData[driver.id] = driver;
    } else {
      Object.assign(newData, {
        [driver.id]: driver,
      });
    }
  }
  return newData;
}

function parseIds(drivers) {
  return drivers.map(driver => driver.id);
}

export function parseDriverData(dto) {
  // THE API RESPONSE DONT HAVE NUMERIC ID, SO WE ADD THEM ON THE FLY
  const driversWithId = dto.map((driver, index) => ({
    ...driver,
    id: index + 1,
  }));
  // MAP ONLY NEEDED DATA
  const parsed = driversWithId.map(driver => parseResponse(driver));
  // DIFFERENTIATE BETWEEN DATA AND IDS
  return {
    data: parseData(parsed),
    ids: parseIds(parsed),
  };
}