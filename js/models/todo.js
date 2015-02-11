var ToDoMVC;
(function (ToDoMVC) {
    var ToDo = (function () {
        function ToDo() {
            var _this = this;
            this.title = ko.observable("");
            this.status = ko.observable(ToDoMVC.Status.active);
            this.completed = ko.computed(function () {
                return _this.status() === ToDoMVC.Status.completed;
            });
        }
        return ToDo;
    })();
    ToDoMVC.ToDo = ToDo;
})(ToDoMVC || (ToDoMVC = {}));
