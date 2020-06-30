function changeMode (size, weight, transform, background, color) {
    function changePage () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
    return changePage;
}
function main () {

    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let el = document.createElement('p');
    let domString = '<p>Hello Holberton!</p>';
    el.innerHTML = domString;
    document.body.appendChild(el.firstChild);

    let btnSpook = document.createElement("BUTTON");
    btnSpook.innerHTML = "Spooky";
    document.body.appendChild(btnSpook);

    let btnDark = document.createElement("BUTTON");
    btnDark.innerHTML = "Dark Mode";
    document.body.appendChild(btnDark);

    let btnScream = document.createElement("BUTTON");
    btnScream.innerHTML = "Scream Mode";
    document.body.appendChild(btnScream);

    btnSpook.addEventListener("click", function () {
        spooky();
    })

    btnDark.addEventListener("click", function () {
        darkMode();
    })

    btnScream.addEventListener("click", function () {
        screamMode();
    })
}
main();