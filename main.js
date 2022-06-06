parAction = document.querySelectorAll(".paragraph");
bck = document.querySelector("#bck");
fwd = document.querySelector("#fwd");
goTo = document.querySelector("#goTo");
pDiv = document.querySelector("#pDiv");

window.history.pushState(null, null, "navDiv");
let customHash = "#navDiv";
let par;

parAction.forEach(element => {
    element.addEventListener("click", function () {
        if (window.location.hash === customHash) {
            window.location.hash = "";
            window.location.hash = customHash;
            if (pDiv.querySelector("#p6") !== null) {
                window.history.replaceState(null, null, "navDiv");
                pDiv.removeChild(par);
            }
        } else {
            window.location.hash = customHash;
            if (pDiv.querySelector("#p6") !== null) {
                window.history.replaceState(null, null, "navDiv");
                pDiv.removeChild(par);
            }
        }
    })
})

bck.addEventListener("click", function () {
    window.history.back();
    window.addEventListener("popstate", function () {
        if (window.location.href.includes("End")) {
            if (pDiv.querySelector("#p6") === null) {
                createElement();
            }
        }
        if (!(window.location.href.includes("End"))) {
            if (pDiv.querySelector("#p6") !== null) {
                pDiv.removeChild(par);
            }
        }
    })
})

fwd.addEventListener("click", function () {
    window.history.forward();
    window.addEventListener("popstate", function () {
        if (window.location.href.includes("End")) {
            if (pDiv.querySelector("#p6") === null) {
                createElement();
            }
        }
        if (!(window.location.href.includes("End"))) {
            if (pDiv.querySelector("#p6") !== null) {
                pDiv.removeChild(par);
            }
        }
    })
})

goTo.addEventListener("click", function () {
    if (pDiv.querySelector("#p6") === null) {
        window.history.pushState(null, null, "End");
        createElement();
        par.scrollIntoView();
    } else {
        window.location.hash = par.id;
    }
})

function createElement() {
    par = document.createElement("p");
    par.innerText = "end";
    par.id = "p6";
    pDiv.appendChild(par);
    par.addEventListener("click", function () {
        if (window.location.hash === customHash) {
            window.location.hash = "";
            window.location.hash = customHash;
            window.history.replaceState(null, null, "navDiv");
            pDiv.removeChild(par);
        } else {
            window.location.hash = customHash;
            window.history.replaceState(null, null, "navDiv");
            pDiv.removeChild(par);
        }
    })
}