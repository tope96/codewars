export function humanReadable(seconds: number): string {

    if(seconds === 0) return `00:00:00`;

    let hours = 0;
    let minutes = 0;
    let secondsLeft = seconds;

    if (seconds >= 3600) {
        hours = Math.floor(seconds / 3600);
        secondsLeft -= hours * 3600;
    }

    if (secondsLeft >= 60) {
        minutes = Math.floor(secondsLeft / 60);
        secondsLeft -= minutes * 60;
    }

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(secondsLeft)}`;
}

function addZero(number: number): string {
    if (number < 10) {
        return `0${number}`;
    }

    return `${number}`;
}
