function countMicroseconds(microseconds) {
  return microseconds === 100 ? 0 : microseconds + 1;
}

function countSeconds(seconds) {
  return seconds === 60 ? 0 : seconds + 1;
}

function countMinutes(minutes, seconds) {
  return seconds === 60 ? minutes + 1 : minutes;
}

export { countMicroseconds, countMinutes, countSeconds };
