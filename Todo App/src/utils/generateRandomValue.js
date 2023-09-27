function generateRandomValue(min=1, max=10000000) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  export default generateRandomValue