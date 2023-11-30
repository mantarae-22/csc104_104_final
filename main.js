// this function will show or hide the recipe details
function toggleDetails(divId, linkId){
    //pointer to the div with the recipe details
    var divElement = document.getElementById(divId);
    //pointer to the anchor to toggle the hidden div
    var linkElement = document.getElementById(linkId);

    if(divElement.style.display == 'none'){
        divElement.style.display = "block";
        linkElement.innerHTML = "...hide details...";
    }
    else{
        divElement.style.display = "none";
        linkElement.innerHTML = "...show details...";
    }
}