window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 500);

    }, 1500);

});

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        alert("This is a portfolio demonstration project.");

    });

});