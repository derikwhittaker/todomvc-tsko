
/// <reference path="app.d.ts" />

module ToDoMVC{
  export class App{
    public self = this;
    public toDos = ko.observableArray<ToDoMVC.ToDo>([]);
    public current = ko.observable<ToDoMVC.ToDo>(new ToDoMVC.ToDo() );
    public filter = ko.observable<ToDoMVC.Status>(ToDoMVC.Status.active);

    addToDo(){
      if( this.current().title() ){
        this.toDos.push(this.current());
        this.resetCurrent();
      }
    }

    editItem(){

    }

    filteredToDos = ko.computed({
      owner: this,
      read: () => {
        var filteredItems = _.filter(this.toDos(), ( todo: ToDoMVC.ToDo) => {
            return todo.status() === this.filter();
          });

        return filteredItems;
      }
    });


    markAllAsCompleted(){

    }

    removeItem(item: ToDoMVC.ToDo){
      if( this.toDos().length > 0 ){

        // good case to show how TS will save you an error
        // this.toDos().remove(item);
        this.toDos.remove(item);
      }
    }

    removeAllCompleted(){
      _.each(this.toDos(), (todo: ToDoMVC.ToDo) => {
          if( todo.status() === ToDoMVC.Status.completed ){
            this.removeItem(todo);
          }
      });
    }

    resetCurrent(){
      this.current(new ToDoMVC.ToDo());
    }

  }

}

var domElement = document.getElementById("todoapp")

if( domElement !== undefined ){

  var toDoMVC = new ToDoMVC.App();
  ko.applyBindings(toDoMVC, domElement);
}
