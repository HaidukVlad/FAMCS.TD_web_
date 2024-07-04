


// var canvas = document.createElement("canvas");
// var ctx = canvas.getContext("2d");
// canvas.width = 576;
// canvas.height = 576;
// document.getElementById('canvasContainer').appendChild(canvas);

// const tileImages = {
//     empty: 'D:/Projects/FAMCS.TD_web_/game_img/empty_field.png', 
//     horizontal: 'D:/Projects/FAMCS.TD_web_/game_img/horizontal_road.png',
//     vertical: 'D:/Projects/FAMCS.TD_web_/game_img/vertical_road.png',
//     downToLeft: 'D:/Projects/FAMCS.TD_web_/game_img/down_to_left_road.png',
//     downToRight: 'D:/Projects/FAMCS.TD_web_/game_img/down_to_right_road.png',
//     upToLeft: 'D:/Projects/FAMCS.TD_web_/game_img/up_to_left_road.png',
//     upToRight: 'D:/Projects/FAMCS.TD_web_/game_img/up_to_right_road.png',
//     cactus: 'D:/Projects/FAMCS.TD_web_/game_img/cactus.png'
// };

// const creatureImages = {
//     first_right_1: 'D:/Projects/FAMCS.TD_web_/game_img/first_right_1.png',
//     first_left_1: 'D:/Projects/FAMCS.TD_web_/game_img/first_left_1.png',
//     first_right_2: 'D:/Projects/FAMCS.TD_web_/game_img/first_right_2.png',
//     first_left_2: 'D:/Projects/FAMCS.TD_web_/game_img/first_left_2.png',

//     second_right_1: 'D:/Projects/FAMCS.TD_web_/game_img/second_right_1.png',
//     second_left_1: 'D:/Projects/FAMCS.TD_web_/game_img/second_left_1.png',
//     second_right_2: 'D:/Projects/FAMCS.TD_web_/game_img/second_right_2.png',
//     second_left_2: 'D:/Projects/FAMCS.TD_web_/game_img/second_left_2.png',

//     third_right_1: 'D:/Projects/FAMCS.TD_web_/game_img/third_right_1.png',
//     third_left_1: 'D:/Projects/FAMCS.TD_web_/game_img/third_left_1.png',
//     third_right_2: 'D:/Projects/FAMCS.TD_web_/game_img/third_right_2.png',
//     third_left_2: 'D:/Projects/FAMCS.TD_web_/game_img/third_left_2.png'
// };

// const TowerImages = {
//     tower1: 'D:/Projects/FAMCS.TD_web_/img/first_tower.png',
//     tower2: 'D:/Projects/FAMCS.TD_web_/img/second_tower.png',
//     tower3: 'D:/Projects/FAMCS.TD_web_/img/third_tower.png',
//     tower4: 'D:/Projects/FAMCS.TD_web_/img/fourth_tower.png'
// };

// class Tile {
//     constructor(x, y, type) {
//         this.x = x;
//         this.y = y;
//         this.type = type;
//         this.image = new Image();
//         this.image.src = tileImages[type];
//     }

//     draw() {
//         ctx.drawImage(this.image, this.x, this.y, 48, 48);
//     }
// }

// class Creature {
//     constructor(path, type) {
//         this.path = path;
//         this.currentPathIndex = 0;
//         this.x = path[0].x * 48;
//         this.y = path[0].y * 48 - 15;
//         this.image = new Image();
//         this.type = type;
//         this.image.src = creatureImages[`${type}_right_1`];
//         this.animationFrame = 0;
//         this.direction = 'right';
//         this.health = 100;
//     }

//     update() {
//         let target = this.path[this.currentPathIndex];
//         let targetX = target.x * 48;
//         let targetY = target.y * 48 - 15;

//         if (this.x < targetX) {
//             this.x += 1.5;
//             this.direction = 'right';
//         } else if (this.x > targetX) {
//             this.x -= 1.5;
//             this.direction = 'left';
//         } else if (this.y < targetY) {
//             this.y += 1.5;
//         } else if (this.y > targetY) {
//             this.y -= 1.5;
//         }

//         if (this.x === targetX && this.y === targetY) {
//             this.currentPathIndex++;
//             if (this.currentPathIndex >= this.path.length) {
//                 return true;
//             }
//         }

//         this.animationFrame++;
//         if (this.animationFrame % 5 === 0) {
//             if (this.direction === 'right') {
//                 this.image.src = this.image.src === creatureImages[`${this.type}_right_1`] ? creatureImages[`${this.type}_right_2`] : creatureImages[`${this.type}_right_1`];
//             } else {
//                 this.image.src = this.image.src === creatureImages[`${this.type}_left_1`] ? creatureImages[`${this.type}_left_2`] : creatureImages[`${this.type}_left_1`];
//             }
//         }
//         return false;
//     }

//     draw() {
//         ctx.drawImage(this.image, this.x, this.y, 48, 48);
//     }

//     takeDamage(damage) {
//         this.health -= damage;
//         if (this.health <= 0) {
//             return true;
//         }
//         return false;
//     }
// }


// class Tower {
//     constructor(x, y, type) {
//         this.x = x;
//         this.y = y;
//         this.type = type;
//         this.image = new Image();
//         this.image.src = TowerImages[type];
//         this.range = 100;
//         this.fireRate = 30;
//         this.fireCooldown = 0;
//     }

//     draw() {
//         ctx.drawImage(this.image, this.x, this.y, 48, 48);
//     }

//     update() {
//         if (this.fireCooldown > 0) {
//             this.fireCooldown--;
//         }
//     }

//     shoot(creature) {
//         if (this.fireCooldown === 0) {
//             this.fireCooldown = this.fireRate;
//             creature.takeDamage(20);
//         }
//     }

//     findTarget(creatures) {
//         for (let creature of creatures) {
//             let distX = creature.x - this.x;
//             let distY = creature.y - this.y;
//             let distance = Math.sqrt(distX * distX + distY * distY);
//             if (distance <= this.range) {
//                 this.shoot(creature);
//                 break;
//             }
//         }
//     }
// }

// var array = [ // карта прописанная в виде матрицы, где 0 - пустое поле, 1 - дорога, 2 - кактус
//     [2, 2, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0],
//     [1, 1, 0, 2, 2, 0, 0, 2, 2, 2, 0, 2],
//     [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 2, 2, 0, 2, 0, 2, 0, 2],
//     [0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
//     [2, 1, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0],
//     [0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 1, 0],
//     [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 2, 0, 2, 2, 2, 0, 0, 0, 1, 1],
//     [2, 2, 2, 0, 0, 0, 0, 2, 2, 0, 2, 0]
// ];

// class GameMap {
//     constructor(rows, cols) {
//         this.rows = rows;
//         this.cols = cols;
//         this.tiles = [];

//         for (let y = 0; y < rows; y++) {
//             for (let x = 0; x < cols; x++) {
//                 let type = this.getTileType(x, y);
//                 this.tiles.push(new Tile(x * 48, y * 48, type));
//             }
//         }
//     }

//     getTileType(x, y) {
//         if (array[y][x] === 0) return 'empty';
//         if (array[y][x] === 2) return 'cactus';

//         const up = y > 0 ? array[y - 1][x] : 0;
//         const down = y < this.rows - 1 ? array[y + 1][x] : 0;
//         const left = x > 0 ? array[y][x - 1] : 0;
//         const right = x < this.cols - 1 ? array[y][x + 1] : 0;

//         if (up === 1 && down === 1) {
//             return 'vertical';
//         }
//         if (left === 1 && right === 1) {
//             return 'horizontal';
//         }
//         if (up === 1 && right === 1) {
//             return 'upToRight';
//         }
//         if (up === 1 && left === 1) {
//             return 'upToLeft';
//         }
//         if (down === 1 && right === 1) {
//             return 'downToRight';
//         }
//         if (down === 1 && left === 1) {
//             return 'downToLeft';
//         }
//         if (y === 1 && x === 0 || y === 10 && x === 11) {
//             return 'horizontal';
//         }

//         return 'empty';
//     }

//     draw() {
//         this.tiles.forEach(tile => tile.draw());
//     }
// }

// function findPath(array) {
//     let path = [];
//     for (let y = 0; y < array.length; y++) {
//         for (let x = 0; x < array[y].length; x++) {
//             if (array[y][x] === 1) {
//                 path.push({ x: x, y: y });
//             }
//         }
//     }
//     return path;
// }

// var towers = [];

// function placeTower(x, y) {
//     const tileX = Math.floor(x / 48);
//     const tileY = Math.floor(y / 48);

//     if (array[tileY][tileX] === 0) {
//         towers.push(new Tower(tileX * 48, tileY * 48, 'tower1'));
//         array[tileY][tileX] = 3;
//     }
// }

// canvas.addEventListener("click", function(event) {
//     const rect = canvas.getBoundingClientRect();
//     const mouseX = event.clientX - rect.left;
//     const mouseY = event.clientY - rect.top;
//     placeTower(mouseX, mouseY);
// });

// const gameMap = new GameMap(12, 12);
// const path = findPath(array);
// let creatures = [];
// let creaturesSpawned = 0;
// let creaturesReachedEnd = 0;
// const maxCreaturesReachedEnd = 10;
// let gameRunning = false;

// const creatureTypes = ['first', 'second', 'third'];

// function spawnCreature() {
//     if (creaturesReachedEnd < maxCreaturesReachedEnd) {
//         const randomType = creatureTypes[Math.floor(Math.random() * creatureTypes.length)];
//         creatures.push(new Creature(path, randomType));
//         creaturesSpawned++;
//         setTimeout(spawnCreature, Math.random() * 1000 + 500);
//     }
// }

// function resetGame() {
//     creatures = [];
//     creaturesSpawned = 0;
//     creaturesReachedEnd = 0;
//     towers = [];
//     gameRunning = false;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     gameMap.draw();
//     startButton.style.display = 'block';
//     resetButton.style.display = 'none';
//     updateLivesCounter(10);
// }

// function updateLivesCounter(lives) {
//     document.getElementById('lives').innerText = lives;
// }

// function gameLoop() {
//     if (!gameRunning) return;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     gameMap.draw();

//     towers.forEach(tower => {
//         tower.update();
//         tower.findTarget(creatures);
//         tower.draw();
//     });

//     for (let i = creatures.length - 1; i >= 0; i--) {
//         let creature = creatures[i];
//         if (creature.update()) {
//             creatures.splice(i, 1);
//             creaturesReachedEnd++;
//             updateLivesCounter(10 - creaturesReachedEnd);
//             if (creaturesReachedEnd >= maxCreaturesReachedEnd) {
//                 alert("Game Over! 10 creatures reached the end.");
//                 resetGame();
//                 return;
//             }
//         } else {
//             creature.draw();
//         }
//     }
//     requestAnimationFrame(gameLoop);
// }

// const startButton = document.getElementById('startButton');
// const resetButton = document.getElementById('resetButton');

// startButton.addEventListener("click", function() {
//     startButton.style.display = 'none';
//     resetButton.style.display = 'block';
//     gameRunning = true;
//     spawnCreature();
//     gameLoop();
// });

// resetButton.addEventListener("click", function() {
//     resetGame();
// });

// window.onload = function() {
//     gameMap.draw();
// };


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 576;
canvas.height = 576;
document.getElementById('canvasContainer').appendChild(canvas);

const tileImages = {
    empty: 'D:/Projects/FAMCS.TD_web_/game_img/empty_field.png', 
    horizontal: 'D:/Projects/FAMCS.TD_web_/game_img/horizontal_road.png',
    vertical: 'D:/Projects/FAMCS.TD_web_/game_img/vertical_road.png',
    downToLeft: 'D:/Projects/FAMCS.TD_web_/game_img/down_to_left_road.png',
    downToRight: 'D:/Projects/FAMCS.TD_web_/game_img/down_to_right_road.png',
    upToLeft: 'D:/Projects/FAMCS.TD_web_/game_img/up_to_left_road.png',
    upToRight: 'D:/Projects/FAMCS.TD_web_/game_img/up_to_right_road.png',
    cactus: 'D:/Projects/FAMCS.TD_web_/game_img/cactus.png'
};

const creatureImages = {
    first_right_1: 'D:/Projects/FAMCS.TD_web_/game_img/first_right_1.png',
    first_left_1: 'D:/Projects/FAMCS.TD_web_/game_img/first_left_1.png',
    first_right_2: 'D:/Projects/FAMCS.TD_web_/game_img/first_right_2.png',
    first_left_2: 'D:/Projects/FAMCS.TD_web_/game_img/first_left_2.png',

    second_right_1: 'D:/Projects/FAMCS.TD_web_/game_img/second_right_1.png',
    second_left_1: 'D:/Projects/FAMCS.TD_web_/game_img/second_left_1.png',
    second_right_2: 'D:/Projects/FAMCS.TD_web_/game_img/second_right_2.png',
    second_left_2: 'D:/Projects/FAMCS.TD_web_/game_img/second_left_2.png',

    third_right_1: 'D:/Projects/FAMCS.TD_web_/game_img/third_right_1.png',
    third_left_1: 'D:/Projects/FAMCS.TD_web_/game_img/third_left_1.png',
    third_right_2: 'D:/Projects/FAMCS.TD_web_/game_img/third_right_2.png',
    third_left_2: 'D:/Projects/FAMCS.TD_web_/game_img/third_left_2.png'
};

const TowerImages = {
    tower1: 'D:/Projects/FAMCS.TD_web_/img/first_tower.png',
    tower2: 'D:/Projects/FAMCS.TD_web_/img/second_tower.png',
    tower3: 'D:/Projects/FAMCS.TD_web_/img/third_tower.png',
    tower4: 'D:/Projects/FAMCS.TD_web_/img/fourth_tower.png'
};

class Tile {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.image = new Image();
        this.image.src = tileImages[type];
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, 48, 48);
    }
}

class Creature {
    constructor(path, type) {
        this.path = path;
        this.currentPathIndex = 0;
        this.x = path[0].x * 48;
        this.y = path[0].y * 48 - 15;
        this.image = new Image();
        this.type = type;
        this.image.src = creatureImages[`${type}_right_1`];
        this.animationFrame = 0;
        this.direction = 'right';
        this.health = 100;
    }

    update() {
        let target = this.path[this.currentPathIndex];
        let targetX = target.x * 48;
        let targetY = target.y * 48 - 15;

        if (this.x < targetX) {
            this.x += 1.5;
            this.direction = 'right';
        } else if (this.x > targetX) {
            this.x -= 1.5;
            this.direction = 'left';
        } else if (this.y < targetY) {
            this.y += 1.5;
        } else if (this.y > targetY) {
            this.y -= 1.5;
        }

        if (this.x === targetX && this.y === targetY) {
            this.currentPathIndex++;
            if (this.currentPathIndex >= this.path.length) {
                return true;
            }
        }

        this.animationFrame++;
        if (this.animationFrame % 5 === 0) {
            if (this.direction === 'right') {
                this.image.src = this.image.src === creatureImages[`${this.type}_right_1`] ? creatureImages[`${this.type}_right_2`] : creatureImages[`${this.type}_right_1`];
            } else {
                this.image.src = this.image.src === creatureImages[`${this.type}_left_1`] ? creatureImages[`${this.type}_left_2`] : creatureImages[`${this.type}_left_1`];
            }
        }
        return false;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, 48, 48);
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return true;
        }
        return false;
    }
}


class Tower {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.image = new Image();
        this.image.src = TowerImages[type];
        this.range = 100;
        this.fireRate = 30;
        this.fireCooldown = 0;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, 48, 48);
    }

    update() {
        if (this.fireCooldown > 0) {
            this.fireCooldown--;
        }
    }

    shoot(creature) {
        if (this.fireCooldown === 0) {
            this.fireCooldown = this.fireRate;
            if (creature.takeDamage(20)) {
                const index = creatures.indexOf(creature);
                if (index > -1) {
                    creatures.splice(index, 1);
                }
            }
        }
    }

    findTarget(creatures) {
        for (let creature of creatures) {
            let distX = creature.x - this.x;
            let distY = creature.y - this.y;
            let distance = Math.sqrt(distX * distX + distY * distY);
            if (distance <= this.range) {
                this.shoot(creature);
                break;
            }
        }
    }
}

var array = [ // карта прописанная в виде матрицы, где 0 - пустое поле, 1 - дорога, 2 - кактус
    [2, 2, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0],
    [1, 1, 0, 2, 2, 0, 0, 2, 2, 2, 0, 2],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 2, 2, 0, 2, 0, 2, 0, 2],
    [0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 1, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 0],
    [0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 1, 0],
    [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 2, 0, 2, 2, 2, 0, 0, 0, 1, 1],
    [2, 2, 2, 0, 0, 0, 0, 2, 2, 0, 2, 0]
];

class GameMap {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.tiles = [];

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                let type = this.getTileType(x, y);
                this.tiles.push(new Tile(x * 48, y * 48, type));
            }
        }
    }

    getTileType(x, y) {
        if (array[y][x] === 0) return 'empty';
        if (array[y][x] === 2) return 'cactus';

        const up = y > 0 ? array[y - 1][x] : 0;
        const down = y < this.rows - 1 ? array[y + 1][x] : 0;
        const left = x > 0 ? array[y][x - 1] : 0;
        const right = x < this.cols - 1 ? array[y][x + 1] : 0;

        if (up === 1 && down === 1) {
            return 'vertical';
        }
        if (left === 1 && right === 1) {
            return 'horizontal';
        }
        if (up === 1 && right === 1) {
            return 'upToRight';
        }
        if (up === 1 && left === 1) {
            return 'upToLeft';
        }
        if (down === 1 && right === 1) {
            return 'downToRight';
        }
        if (down === 1 && left === 1) {
            return 'downToLeft';
        }
        if (y === 1 && x === 0 || y === 10 && x === 11) {
            return 'horizontal';
        }

        return 'empty';
    }

    draw() {
        this.tiles.forEach(tile => tile.draw());
    }
}

function findPath(array) {
    let path = [];
    for (let y = 0; y < array.length; y++) {
        for (let x = 0; x < array[y].length; x++) {
            if (array[y][x] === 1) {
                path.push({ x: x, y: y });
            }
        }
    }
    return path;
}

var towers = [];

function placeTower(x, y) {
    const tileX = Math.floor(x / 48);
    const tileY = Math.floor(y / 48);

    if (array[tileY][tileX] === 0) {
        towers.push(new Tower(tileX * 48, tileY * 48, 'tower1'));
        array[tileY][tileX] = 3;
    }
}

canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    placeTower(mouseX, mouseY);
});

const gameMap = new GameMap(12, 12);
const path = findPath(array);
let creatures = [];
let creaturesSpawned = 0;
let creaturesReachedEnd = 0;
const maxCreaturesReachedEnd = 10;
let gameRunning = false;

const creatureTypes = ['first', 'second', 'third'];

function spawnCreature() {
    if (creaturesReachedEnd < maxCreaturesReachedEnd) {
        const randomType = creatureTypes[Math.floor(Math.random() * creatureTypes.length)];
        creatures.push(new Creature(path, randomType));
        creaturesSpawned++;
        setTimeout(spawnCreature, Math.random() * 1000 + 500);
    }
}

function resetGame() {
    creatures = [];
    creaturesSpawned = 0;
    creaturesReachedEnd = 0;
    towers = [];
    gameRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameMap.draw();
    startButton.style.display = 'block';
    resetButton.style.display = 'none';
    updateLivesCounter(10);
    location.reload();
}

function updateLivesCounter(lives) {
    document.getElementById('lives').innerText = lives;
}

function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameMap.draw();

    towers.forEach(tower => {
        tower.update();
        tower.findTarget(creatures);
        tower.draw();
    });

    for (let i = creatures.length - 1; i >= 0; i--) {
        let creature = creatures[i];
        if (creature.update()) {
            creatures.splice(i, 1);
            creaturesReachedEnd++;
            updateLivesCounter(10 - creaturesReachedEnd);
            if (creaturesReachedEnd >= maxCreaturesReachedEnd) {
                alert("Game Over! 10 creatures reached the end.");
                resetGame();
                return;
            }
        } else {
            creature.draw();
        }
    }
    requestAnimationFrame(gameLoop);
}

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener("click", function() {
    startButton.style.display = 'none';
    resetButton.style.display = 'block';
    gameRunning = true;
    spawnCreature();
    gameLoop();
});

resetButton.addEventListener("click", function() {
    resetGame();
});

window.onload = function() {
    gameMap.draw();
};
