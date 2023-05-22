// A constant to represent infinity
function coinChange(coins, amount) {
    const INF = Infinity; 
// An array to store the minimum number of coins needed for each amount, initialized with infinity

 const minCoins = new Array(amount + 1).fill(INF); 

 // Setting the number of coins needed to make amount 0 as 0
  minCoins[0] = 0; 

  // The value of the current coin being considered
    for (let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
      const coinValue = coins[coinIndex]; 
  
      // The remaining amount after subtracting the current coin value
      for (let currentAmount = coinValue; currentAmount <= amount; currentAmount++) {
        const remainingAmount = currentAmount - coinValue; 

        // The number of coins needed to make up the remaining amount, plus 1 for the current coin
        const coinsNeeded = minCoins[remainingAmount] + 1; 
  
        // Update the number of coins needed if the new value is smaller
        if (coinsNeeded < minCoins[currentAmount]) {
          minCoins[currentAmount] = coinsNeeded; 
        }
      }
    }

  // If it's not possible to make up the amount, return -1
    if (minCoins[amount] === INF) {
      return -1; 
      
      // Return the minimum number of coins needed for the given amount
    } else {
      return minCoins[amount]; 
    }
  }
  