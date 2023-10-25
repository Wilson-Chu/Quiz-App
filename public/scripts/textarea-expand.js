$(()=> {

  //expands the textareas on each page if needed

  $("textarea").each(function() {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
  }).on("input", function() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
  });

})