const knightMovesSteps = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];

function knightMoves(from, to) {
    const path = findShortestPath(from, to);
    if (path) {
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        for (const step of path) {
            console.log(step);
        }
    } else {
        console.log("No valid path found.");
    }
}

function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function findShortestPath(start, end) {
    const queue = [[start, [start]]];
    const visited = new Set();

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        const [x, y] = current;

        if (x === end[0] && y === end[1]) {
            return path;
        }

        visited.add(`${x},${y}`);

        for (const [dx, dy] of knightMovesSteps) {
            const nextX = x + dx;
            const nextY = y + dy;

            if (isValidMove(nextX, nextY) && !visited.has(`${nextX},${nextY}`)) {
                queue.push([[nextX, nextY], [...path, [nextX, nextY]]]);
            }
        }
    }

    return null;
}

// Test cases
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [7, 7]);

