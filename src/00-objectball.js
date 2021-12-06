function gameObject() {
    const gameStats = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22, 
                    rebounds: 12,
                    assists: 12,
                    steals: 3, 
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30, 
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3, 
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7, 
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
    return gameStats
}


// - Build a function, `numPointsScored` that takes in an argument of a player's
//   name and returns the number of points scored for that player.
//   - Think about where in the object you will find a player's `points`. How can
//     you iterate down into that level? Think about the return value of your
//     function.

function numPointsScored(player) {
    const game = gameObject()
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
            for (const playerKey in playerObj) {
                if (playerKey === player) {
                    return playerObj[playerKey].points
                }
            }
    }
}

// - Build a function, `shoeSize`, that takes in an argument of a player's name and
//   returns the shoe size for that player.
//   - Think about how you will find the shoe size of the correct player. How can
//     you check and see if a player's name matches the name that has been passed
//     into the function as an argument?

function shoeSize(player) {
    const game = gameObject()
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
            for (const playerKey in playerObj) {
                if (playerKey === player) {
                    return playerObj[playerKey].shoe
                }
            }
    }    
}

// - Build a function, `teamColors`, that takes in an argument of the team name and
//   returns an array of that teams colors.

function teamColors(team) {
    const game = gameObject()
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const title = teamObj.teamName
        if (title === team) {
            return game[gameKey].colors
        }
    }
}

// - Build a function, `teamNames`, that operates on the game object to return an
//   array of the team names.

function teamNames() {
    const game = gameObject()
    let teamsPlayed = []
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const title = teamObj.teamName
        teamsPlayed.push(title)
    }
    return teamsPlayed
}

// - Build a function, `playerNumbers`, that takes in an argument of a team name
//   and returns an array of the jersey number's for that team.
function playerNumbers(team) {
    let jerseyNumbers = []
    const game = gameObject()
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const title = teamObj.teamName
        if (title === team) {
            const playerObj = teamObj.players
            for (const playerKey in playerObj) {
                jerseyNumbers.push(playerObj[playerKey].number)
            } 
        }
    }
    return jerseyNumbers
}

// Build a function, `playerStats`, that takes in an argument of a player's name
//   and returns a object of that player's stats. Check out the following example
//   of the expected return value of the `playerStats` function:

function playerStats(player) {
    const game = gameObject()
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
            for (const playerKey in playerObj) {
                if (playerKey === player) {
                    return playerObj[playerKey]
                }
            }
    }
}

// - Build a function, `bigShoeRebounds`, that will return the number of rebounds
//   associated with the player that has the largest shoe size. Break this one
//   down into steps:
//   - First, find the player with the largest shoe size
//   - Then, return that player's number of rebounds
//   - Remember to think about return values here. Use `debugger` to drop into
//     your function and understand what it is returning and why.

function bigShoeRebounds() {
    const game = gameObject()
    let player = {shoe: 0}
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerObj[playerKey].shoe > player.shoe) {
                player = playerObj[playerKey]
            }
        }  
    }
    return player.rebounds 
}

// 1. Which player has the most points? Call the function `mostPointsScored`.

function mostPointsScored() {
    const game = gameObject()
    let player = {name: undefined, points: 0}
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerObj[playerKey].points > player.points) {
                player.name = playerKey
                player.points = playerObj[playerKey].points
            }
        }  
    }
    return `With ${player.points} points, ${player.name} scored the most.`
}

// 2. Which team has the most points? Call the function `winningTeam`.

function winningTeam() {
    const game = gameObject()
    for (const gameKey in game) {
        game[gameKey].teamPoints = 0;
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            game[gameKey].teamPoints += playerObj[playerKey].points
        }
    }
    return game.home.teamPoints > game.away.teamPoints ? game.home.teamName : game.away.teamName 
}

// 3. Which player has the longest name? Call the function `playerWithLongestName`.

function playerWithLongestName() {
    const game = gameObject()
    let player = {name: undefined, nameLength: 0}
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (playerKey.length > player.nameLength) {
                player.name = playerKey
                player.nameLength = playerKey.length
            }
        }  
    }
    return player.name
}


// 1. Write a function that returns true if the player with the longest name had
//    the most steals. Call the function `doesLongNameStealATon`.

function doesLongNameStealATon () {
    const game = gameObject()
    const longestName = playerWithLongestName()
    const longNameObj = playerStats(longestName)
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (longNameObj.steals < playerObj[playerKey].steals) {
                return false
            }
        }  
    }
    return true
}