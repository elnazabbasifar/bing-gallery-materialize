// get Bing's today url from Flask app to display
function getBingImageUrl(path) {

    //make Get Request
    axios({ 
        method: 'get', 
        url: path, 
        headers: {'Content-Type' : 'application/json'} 

    })
    .then((response) => { 
        
        addImagetoGrid(response.data); //located in scrpt.js
    })
    .catch((error) => {
        console.log(error); 
    }); 

}
var url = "http://127.0.0.1:5000/bing/7";
getBingImageUrl(url); 
