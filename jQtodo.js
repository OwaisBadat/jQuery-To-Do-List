

let taskTextBox = $("#taskTextBox")

$("#addTaskButton").click(function(){
  let task = taskTextBox.val()

  let listItem = $("<li>")
  let clearButton = $("<button>")
  clearButton.html("Clear Task")
  let checkBox = $("<input>").attr("type","checkbox")

  listItem.append(checkBox,task,clearButton)
  $("#pendingTasks").append(listItem)

  clearButton.click(function(){
    $(this).parent().remove()
  })

  checkBox.change(function(){
    if($(this).is(":checked")) {
      $("#CompletedTasks").append($(this).parent())
    } else {
      $("#pendingTasks").append($(this).parent())
    }
  })

})
