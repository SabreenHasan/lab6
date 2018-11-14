// JavaScript File

window.onload = function () {
    var httpReq;
    var searchB = document.getElementById("searchButton");
    
    searchB.addEventListener('click',function(e) {

    e.preventDefault();
    httpReq = new XMLHttpRequest();

    var $word;
    var input = document.getElementById("userInput").value;
    
    var url = "request.php?q=" + input;
    httpReq.onreadystatechange = load;
    httpReq.open('GET', url);
    httpReq.send();
});

function load () {
    if  (httpReq.readyState === XMLHttpRequest.DONE)
    {
        if (httpReq.status === 200)
        {
            var response = httpReq.responseText;
            var input = document.getElementById("userInput").value;
            document.getElementById("result").innerHTML = response;
        }
        else
        {
            alert('ERROR!');
        }
    }
}
};