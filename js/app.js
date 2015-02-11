var ToDoMVC;
(function (ToDoMVC) {
    var App = (function () {
        function App() {
            var _this = this;
            this.self = this;
            this.toDos = ko.observableArray([]);
            this.current = ko.observable(new ToDoMVC.ToDo());
            this.filter = ko.observable(ToDoMVC.Status.active);
            this.filteredToDos = ko.computed({
                owner: this,
                read: function () {
                    var filteredItems = _.filter(_this.toDos(), function (todo) {
                        return todo.status() === _this.filter();
                    });
                    return filteredItems;
                }
            });
        }
        App.prototype.addToDo = function () {
            if (this.current().title()) {
                this.toDos.push(this.current());
                this.resetCurrent();
            }
        };
        App.prototype.editItem = function () {
        };
        App.prototype.markAllAsCompleted = function () {
        };
        App.prototype.removeItem = function (item) {
            if (this.toDos().length > 0) {
                this.toDos.remove(item);
            }
        };
        App.prototype.removeAllCompleted = function () {
            var _this = this;
            _.each(this.toDos(), function (todo) {
                if (todo.status() === ToDoMVC.Status.completed) {
                    _this.removeItem(todo);
                }
            });
        };
        App.prototype.resetCurrent = function () {
            this.current(new ToDoMVC.ToDo());
        };
        return App;
    })();
    ToDoMVC.App = App;
})(ToDoMVC || (ToDoMVC = {}));
var domElement = document.getElementById("todoapp");
if (domElement !== undefined) {
    var toDoMVC = new ToDoMVC.App();
    ko.applyBindings(toDoMVC, domElement);
}
