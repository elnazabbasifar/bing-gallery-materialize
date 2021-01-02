function addImagetoGrid(imageData){

    var i;  
    for (i in imageData) {

        // check if the image is the last one.
        if (i=='0') createCard(imageData[i], true);
        else        createCard(imageData[i]);
    }
    
}
function createImgTag(url, title) {

    var img = document.createElement("img");
        img.setAttribute("src", url);
        img.setAttribute("alt", title);
        
    return img;
}
function createCard(image, isTheLastImage=false) {

    var url = image["url"];
    var title = image["title"];
    var copyright = image["copyright"];

    var card = document.createElement("div"); 
        card.setAttribute("class", "card small horizontal");
        card.setAttribute("onclick", "putCardAbove(this)");
     
    var cardImage = document.createElement("div");
        cardImage.setAttribute("class", "card-image");
    
    var img = createImgTag(url, title);
    var span = document.createElement("span");
        span.setAttribute("class", "card-title truncate");
        span.innerHTML = title;

    var cardContent = document.createElement("div");
        cardContent.setAttribute("class", "card-content right");
    // Setdetail
    var p = document.createElement("p");
        p.innerHTML = title +' | '+copyright;
    
        cardContent.appendChild(p);

        cardImage.appendChild(img);
        cardImage.appendChild(span);

        card.appendChild(cardImage);
        card.appendChild(cardContent);
    
    createColumn(card);  
    // if the image is the last, put it on top of the grid.    
    if (isTheLastImage)    putCardAbove(card);
    
}
function createColumn(card) {

    var col = document.createElement("div"); 
        col.setAttribute("class", "col s12 m4 l6");
        col.appendChild(card);

    document.querySelector("#gallery").appendChild(col);
}
function putCardAbove(_this) {

    // Draw a border on the selected picture on the grid.
    allCards = document.querySelectorAll(".card");
    for(i=0; i< allCards.length; i++)
        allCards[i].style.border = "none";

    _this.style.border = "4px solid teal";

    var top = document.getElementById("top");

    var topImg = top.querySelector("img");
        topImg.src = _this.querySelector("img").src;

    var topTitle = top.querySelector("span");
        topTitle.innerHTML = _this.querySelector("span").innerHTML;

    var topContent = top.querySelector("p");
        topContent.innerHTML = _this.querySelector("p").innerHTML;

}
