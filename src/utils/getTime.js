function getTime(timezone) {
  const date = new Date();
  let hour = '';

  if (timezone === false || timezone === undefined) {
    hour = date.toLocaleTimeString();
  } else {
    hour = date.toLocaleTimeString('en-GB', { timeZone: timezone });
  }

  const time = {
    hours: parseInt(hour.slice(0, 2), 10),
    minutes: parseInt(hour.slice(3, 5), 10),
    seconds: parseInt(hour.slice(6, 8), 10),
  };

  return time;
}

export default getTime;
