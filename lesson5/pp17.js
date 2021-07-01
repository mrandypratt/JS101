function UUID() {
  let UUID = [];
  for (let i = 0; i < 32; i++) {
    UUID.push(Math.floor(Math.random() * 16).toString(16));
  }
  return `${UUID.slice(0, 8).join("")}-${UUID.slice(8, 12).join("")}-${UUID.slice(12, 16).join("")}-${UUID.slice(16, 20).join("")}-${UUID.slice(20, 32).join("")}`
}

console.log(UUID());
console.log(UUID());
console.log(UUID());
console.log(UUID());
