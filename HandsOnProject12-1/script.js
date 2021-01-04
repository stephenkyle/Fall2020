/*
      JavaScript 6th Edition
      Chapter 12
      Hands-on Project 12-1

      Author: Stephen Oakford
      Date:   12/15/20

      Filename: script.js
  */
  
  
function display(event) {
	  $(event.currentTarget).next().fadeIn("slow");  
}

$("h3").click(display);