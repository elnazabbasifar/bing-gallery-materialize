// get Bing's today url from Flask app to display
function getBingImageUrl(path) {

    //make Get Request
    axios.get(path, {
        headers: {'Content-Type': 'application/json'}

    })
    .then((response) => { 
        console.log(response.data);
        addImagetoGrid(response.data); //located in scrpt.js
    }, 
    (error) => { 
        console.log(error); 
    }
    ); 

}
var url = "http://127.0.0.1:5000/bing/7";
getBingImageUrl(url); 
