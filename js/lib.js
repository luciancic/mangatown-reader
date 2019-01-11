(function LibIIFE(global) {
    
    global.MangatownReaderLib = { addButton, toggleMenu, makeCountdown, hideCursor };


    // Each button is styled based on its id (styles.css)
    function addButton(id) {
        let button = document.createElement("button");
        button.id = id;
        button.className = "navigation";
        document.querySelector("section.main").appendChild(button);
    }
    
    let menuIsHidden = true;

    function toggleMenu(e) {
        if (e.key === "Escape") {
            let header = document.getElementsByTagName("header")[0];
            let plug = document.getElementsByClassName("plug-right")[0];
            let footer = document.getElementsByClassName("manga_read")[0];
            
            if (menuIsHidden) {
                menuIsHidden = false;
                header.style.height = "81px";
                plug.style.width = "30px";
                footer.style.height = "160px";
                footer.style.borderTopWidth = "10px";
                // Manually make the cursor visible
                makeCursorStyler("unset")();
                clearTimeout(timeoutID);
            } else {
                menuIsHidden = true;
                header.style.height = "";
                plug.style.width = "";
                footer.style.height = "";
                footer.style.borderTopWidth = "";
                // Manually make set the timer for the cursor to hide
                makeCountdown()();
            }
        }
    }

    function hideCursor() {
        makeCursorStyler("none")();
    }
    
    let timeoutID;

    function makeCountdown() {
        // They are created here because the lib script loads before the DOM is populated
        // the calling function is responsible for the timing of the call.
        hideCursor = makeCursorStyler("none");
        showCursor = makeCursorStyler("unset");
        return function() {
            if (menuIsHidden) {
                showCursor();
                clearTimeout(timeoutID);
                timeoutID = setTimeout(function() {hideCursor()}, 2500);
            }
        }
    }
    



    // Captures elements and cursor style in a closure and
    // returns a simple function for you to use.
    function makeCursorStyler(cursorStyle) {
        let elements = [];
        elements.push(document.body);
        elements.push(document.getElementsByClassName("navigation")[0]);
        elements.push(document.getElementsByClassName("navigation")[1]);
        elements.push(document.getElementsByTagName("img")[0]);
        
        // Check that elements are indeed there, or else it will silently fail.
        elements.forEach(function (el) {
            if (!el) { throw new ReferenceError("Expected an element here") }
        });
        return function () {
            for (el of elements) {
                el.style.cursor = cursorStyle;
            }
        }
    }

})(window)
