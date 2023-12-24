function addTask() {
    var task = document.getElementById("newTask").value;
    if (task.trim() === '') {
        alert("일정을 입력해주세요.");
        return;
    }
    var li = document.createElement("li");
    li.innerHTML = task;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("newTask").value = ""; // 입력 필드 초기화
}
