
const fullImgBox = document.getElementById("fullimgBox");
const fullImg = document.getElementById("fullimg");

// Open the full image box when clicked
function openFullImg(pic) {
    
    fullImgBox.style.display = "flex"; 
   
    
    fullImg.src = pic;                 
}


// Close the full image box
function closeFullImg() {
    
    fullImgBox.style.display = "none";    
}




