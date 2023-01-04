
var request;
function init() {   
    var language = document.getElementById("translate");    
    // fetch the translation
    request = new XMLHttpRequest();
    request.onreadystatechange = displayData;
    // request.open('GET', language.value + ".txt", true);
    request.open('GET', language.value + ".json", true);
    request.send(null);
}

function displayData() {
    if (request.readyState == 4 && request.status == 200) {
        
        // Get the JSON response and assign it on the language variable
        var language = JSON.parse(request.responseText);

        // Get the Label Objects
        var label = language.labels.label.split(",");
        // Get the labels elements and pass the label objects in each element using for loop
        var labels = document.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            labels[i].innerText = label[i];
        }

        // Get the Title Object
        var title = language.title;        
        // Get the Title element using tagname
        var h4 = document.getElementsByTagName("h4");
        for (var i = 0; i < h4.length; i++) {
            h4[i].innerText = title;
        }

        // Get the Personal Details text Object
        var personal_info = language.personal_details.info.split(",");        
        // Get the H6 elements using tagname
        var h6 = document.getElementsByTagName("h6");
        for (var i = 0; i < h6.length; i++) {
            h6[i].innerText = personal_info[i];
        }

        // Get the Required text Object
        var require = language.required;           
        // Get the paragraph element using ID
        var req_message = document.getElementsByClassName("required-asterisk");
        for (var i = 0; i < req_message.length; i++) {     
            req_message[i].innerText = require;        
        }

        // Get the Create account text Object
        var btn_txt = language.btn_text;            
        // Get the paragraph element using ID
        var submit_btn = document.getElementById("submit_btn");
        submit_btn.setAttribute("value", btn_txt);
        
        
    }
}

