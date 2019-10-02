const timeNodes = [...document.querySelectorAll('[data-time]')]; // need to turn it into an array from nodelist in order to use map

const seconds = timeNodes
    .map(node => node.dataset.time) // turning an array of items into an array of strings that we need
    .map(timeCode => {
        // console.log(timeCode.split(':'));
        const [mins, secs] = timeCode.split(':').map(parseFloat); // after split mins and secs are strings, so mapping over the array and using parseFloat converts them into numbers
        return (mins * 60) + secs; 
    })
    .reduce((total, vidSeconds) => total + vidSeconds)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`The total length of the videos is ${hours} hours, ${minutes} minutes and ${secondsLeft} seconds.`)