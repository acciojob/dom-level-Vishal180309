//your JS code here. If required.
function getDomLevel(element) {
    let level = 0;
    while (element) {
        element = element.parentNode;
        level++;
    }
    return level;
}

const levelElement = document.getElementById("level");
const domLevel = getDomLevel(levelElement);

alert(`The level of the element is: ${domLevel}`);
