const url = "https://api.adviceslip.com/advice"

const xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.getResponseHeader("content-type", "application/json");

xhr.onload = function () {
    if (this.status == 200) {
    
        var json = JSON.parse(this.responseText)
        // console.log(json.slip.advice);
        let contener = document.getElementById("textarea")
        let mainjson = json.slip.advice;
        contener.innerHTML = mainjson
        let mybtn = document.getElementById("mybtn")
        mybtn.addEventListener("click", function () {
            location.reload();
    })
    }

    else {
        console.log("loading fail");

    }
}
xhr.send()
