(function IIFE(global) {
    
    document.onreadystatechange = function() {
        if (document.readyState === "complete") {
            document.getElementById("navigate-previous").onclick = global.wrappedJSObject.previous_page;
            document.getElementById("navigate-next").onclick = global.wrappedJSObject.next_page;
        }
    }
    
    // Load here so that it's immediately visible
    document.addEventListener("DOMContentLoaded", function() {
        addButton("navigate-previous");
        addButton("navigate-next");
    })

    function addButton(id) {
        let button = document.createElement("button");
        button.id = id;
        button.className = "navigation";
        document.querySelector("section.main").appendChild(button);
    }

})(window)