function addImagetoGrid(imageData){
    // imageArr = imageData.split("[")[1].split("]")[0].split("},");
    console.log(imageData);  
    var i, url;  
    for (i=0; i<imageData.length; i++) {
        console.log(imageData[i]["url"]);
    //     var col = document.createElement("div"); 
    //     col.setAttribute("class", "col s2");
    //     document.querySelector(".row").appendChild(col);

    //     var img = document.createElement("img");
    //     img.setAttribute("src", url);
    //     img.setAttribute("alt", title);
    //     zdepth = "z-depth-" + String(i+1);
    //     console.log(zdepth);
    //     img.setAttribute("class", zdepth);
    //     col.appendChild(img);
    }
    // console.log(document.body);

}