// PREVENT CLIPBOARD COPYING
document.addEventListener("copy", function(evt){
    // Change the copied text if you want
    evt.clipboardData.setData("text/plain", "Sorry Pythoneer, copying is not allowed.");
   
    // Prevent the default copy action
    evt.preventDefault();
  }, false);