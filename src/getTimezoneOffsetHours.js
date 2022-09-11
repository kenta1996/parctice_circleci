function getTimezoneOffsetHours() {
  const data = new Data();
  return data.getTimezoneOffset() / 60
}