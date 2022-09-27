
function displayPhotos(photos) {
        for(x in photos) {
        var mainDiv = document.getElementById('mainPhotoDiv');    
        var div = document.createElement("div");

        var divColumn =document.createElement("div");
        var name = document.createElement("p");
        var img = document.createElement("img");

        name.className = "fw-bold";

        name.innerHTML = photos[x].name;
        img.src =  photos[x].URL;
        img.style = "height: 40px; width: 60px;"                
        
        divColumn.appendChild(name);
        divColumn.appendChild(img);
        divColumn.className = "card";     

        div.className = "p-2 col-4"
        div.appendChild(divColumn);
        mainDiv.appendChild(div);
    }
}

displayPhotos(photos);
