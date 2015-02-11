/// <reference path="../app.d.ts" />

module ToDoMVC{
  export class ToDo{

    public title = ko.observable<string>("");
    public status = ko.observable<ToDoMVC.Status>(ToDoMVC.Status.active);

    public completed = ko.computed<Boolean>(() => {
      return this.status() === ToDoMVC.Status.completed;
    });

  }

}
