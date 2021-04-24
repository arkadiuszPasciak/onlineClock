function getNameOfTheDay(day) {
  let name = '';

  switch (day) {
    case 0: name = 'Sunday'; break;
    case 1: name = 'Monday'; break;
    case 2: name = 'Tuesday'; break;
    case 3: name = 'Wednesday'; break;
    case 4: name = 'Thursday'; break;
    case 5: name = 'Friday'; break;
    case 6: name = 'Saturday'; break;
    default: name = 'Unknown';
  }

  return name;
}

function getNameOfTheMonth(month) {
  let name = '';

  switch (month) {
    case 0: name = 'January'; break;
    case 1: name = 'February'; break;
    case 2: name = 'March'; break;
    case 3: name = 'April'; break;
    case 4: name = 'May'; break;
    case 5: name = 'June'; break;
    case 6: name = 'July'; break;
    case 7: name = 'August'; break;
    case 8: name = 'September'; break;
    case 9: name = 'October'; break;
    case 10: name = 'November'; break;
    case 11: name = 'December'; break;
    default: name = 'Unknown';
  }

  return name;
}

export { getNameOfTheDay, getNameOfTheMonth };
