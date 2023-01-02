function random(max) {
  return Math.floor(Math.random() * max);
}

function normalize(string) {
  return string.normalize("NFD").replace(/\p{Mn}/gu, "");
}

export { random, normalize };
