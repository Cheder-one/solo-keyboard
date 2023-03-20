function SetTimer(callback, t) {
  const startTime = Date.now();
  while ("go!") {
    const endTime = Date.now();
    if (endTime - startTime === t) {
      return callback;
    }
  }
}

export default SetTimer;
