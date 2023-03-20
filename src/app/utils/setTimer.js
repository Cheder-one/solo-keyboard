function SetTimer(t, callback) {
  const startTime = Date.now();
  while ("go!") {
    const endTime = Date.now();
    if (endTime - startTime === t) {
      callback();
      break;
    }
  }
}

export default SetTimer;
