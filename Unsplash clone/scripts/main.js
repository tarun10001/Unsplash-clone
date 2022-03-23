// Make an API call and return data from
async function makeAPICall(url) {
    try {
        let res = await fetch(url);

        let data = await res.json();
        return data ;
    } catch(error) {
        console.log("error:", error)
    }
}
function appendPictures(data, parent) {

    data.forEach((element) => {

        let div = document.createElement("div");
        
        let image = document.createElement("img");
        image.src = element.urls.small;

        let p = document.createElement("p");
        p.innerText = element.user.name;

        div.append(image, p);

        div.onclick = () => {

            var arr = [];
            arr.push(element);
            localStorage.setItem('clicked_image', JSON.stringify(arr));
            console.log(arr);
            window.location.href = "details.html";
        }

        parent.append(div);
    });
}

export { makeAPICall, appendPictures };