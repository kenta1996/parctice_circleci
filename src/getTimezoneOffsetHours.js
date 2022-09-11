function getTimezoneOffsetHours() {
  const data = new Data();
  return data.getTimezoneOffset() / 60;
}
module.exports = getTimezoneOffsetHours;