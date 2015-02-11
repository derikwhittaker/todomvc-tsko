var ToDoMVC;
(function (ToDoMVC) {
    (function (Status) {
        Status[Status["all"] = 1] = "all";
        Status[Status["active"] = 2] = "active";
        Status[Status["completed"] = 3] = "completed";
        Status[Status["deleted"] = 99] = "deleted";
    })(ToDoMVC.Status || (ToDoMVC.Status = {}));
    var Status = ToDoMVC.Status;
})(ToDoMVC || (ToDoMVC = {}));
