export function mazeRunner(maze: number[][], directions: string[]): string {
    const startIndex: number[] = findStart(maze);
    const actualPosition: number[] = startIndex;
    let actualDirection: number = 0;
    const maxDirection = directions.length;

    for (const direction of directions) {
        actualDirection += 1;
        if (direction === 'N') {
            actualPosition[0] = startIndex[0] - 1;
        } else if (direction === 'S') {
            actualPosition[0] = startIndex[0] + 1;
        } else if (direction === 'W') {
            actualPosition[1] = startIndex[1] - 1;
        } else if (direction === 'E') {
            actualPosition[1] = startIndex[1] + 1;
        }

        if (actualPosition[0] < 0) {
            return;
        }

        if (actualDirection === maxDirection) {
            return checkResult(actualPosition, maze);
        }

        if (checkResult(actualPosition, maze) !== 'Lost') {
            return checkResult(actualPosition, maze);
        }
    }
    return 'Dead';
}

function findStart(maze: number[][]): number[] {
    const start = 2;
    for (const row in maze) {
        for (const column in maze[row]) {
            if (maze[row][column] === start) {
                return [+row, +column];
            }
        }
    }

    return [0, 0];
}

function checkResult(position: number[], maze: number[][]): string {
    if (position.length === 2) {
        if (
            position[0] < 0 ||
            position[1] < 0 ||
            position[0] > maze.length - 1 ||
            position[1] > maze[0].length - 1
        ) {
            return 'Dead';
        }

        const situation = maze[position[0]][position[1]];

        if (situation === 1) {
            return 'Dead';
        } else if (situation === 3) {
            return 'Finish';
        } else if (situation === 0) {
            return 'Lost';
        }
    }
    return 'Dead';
}

let maze = [
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
];
console.log(
    mazeRunner(maze, [
        'N', 'N', 'N', 'W', 'W',
        'W', 'N', 'N', 'W', 'W',
        'S', 'S', 'S', 'S', 'W',
        'W', 'N', 'N', 'N', 'N',
        'N', 'N', 'N'
    ])
);
