(function IIFE(global) {
    
    document.onreadystatechange = function() {
        if (document.readyState === "complete") {
            document.getElementById("navigate-previous").onclick = global.wrappedJSObject.previous_page;
            document.getElementById("navigate-next").onclick = global.wrappedJSObject.next_page;
            document.onkeydown = toggleMenu;
        }
    }
    
    // Load here so that it's immediately visible
    document.addEventListener("DOMContentLoaded", function() {
        addButton("navigate-previous");
        addButton("navigate-next");
        document.getElementById("top_chapter_list").classList.remove("chapter_select");
    })

    function addButton(id) {
        let button = document.createElement("button");
        button.id = id;
        button.className = "navigation";
        document.querySelector("section.main").appendChild(button);
    }

    function toggleMenu(e) {
        console.log("Ran function");
        
        if (e.key === "Escape") {
            let header = document.getElementsByTagName("header")[0];
            let plug = document.getElementsByClassName("plug-right")[0];
            let footer = document.getElementsByClassName("manga_read")[0];
            header.style.height = header.style.height === "" ? "81px" : "";
            plug.style.width = plug.style.width === "" ? "30px" : "";
            footer.style.height = footer.style.height === "" ? "160px" : "";
            footer.style.borderTopWidth = footer.style.borderTopWidth === "" ? "10px" : "";
        }
    }

})(window)