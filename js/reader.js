(function IIFE(global, lib) {
    
    document.onreadystatechange = function() {
        if (document.readyState === "complete") {
            document.getElementById("navigate-previous").onclick = global.wrappedJSObject.previous_page;
            document.getElementById("navigate-next").onclick = global.wrappedJSObject.next_page;
            document.onkeydown = lib.toggleMenu;
            document.onmousemove = lib.makeCountdown(); // This function returns a function with a closure, this is not a typo.
        }
    }
    
    // Load here so that it's immediately visible
    document.addEventListener("DOMContentLoaded", function() {
        lib.addButton("navigate-previous");
        lib.addButton("navigate-next");
        document.getElementById("top_chapter_list").classList.remove("chapter_select");
    })


})(window, window.MangatownReaderLib)