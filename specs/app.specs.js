describe("When attempting to add to list", function(){
  var vm;
  beforeEach(function(){
    vm = new ToDoMVC.App();
  });

  it("will not add if the title has not been provided", function(){
    vm.addToDo();

    expect(vm.toDos().length).toBe(0);
  });

  it("will add if the title has been provided", function(){

    vm.current().title("something");
    vm.addToDo();

    expect(vm.toDos().length).toBe(1);
  });

  it("will make call to reset the item", function(){
    spyOn(vm, "resetCurrent");

    vm.current().title("something");
    vm.addToDo();

    expect(vm.resetCurrent).toHaveBeenCalled();
  });
});

describe("When attempting to reset current", function(){
  var vm;
  beforeEach(function(){
    vm = new ToDoMVC.App();
  });

  it("will reset model state", function(){

    vm.current().title("Some Title");

    vm.resetCurrent();

    expect(vm.current().title()).toBe("");
  });
});

describe("When attempting to filteredToDos", function(){
  var vm;
  beforeEach(function(){
    vm = new ToDoMVC.App();
  });

  it("when there are matching items, will only return items from current filter", function(){
    vm.current().title("item 1");
    vm.addToDo();
    vm.current().title("item 2");
    vm.addToDo();
    vm.current().title("item 3");
    vm.addToDo();

    vm.toDos()[1].status(ToDoMVC.Status.completed);

    var filteredToDos = vm.filteredToDos();
    expect(filteredToDos.length).toBe(2);
  });

  it("when there are not matching items, will empty filter", function(){
    vm.current().title("item 1");
    vm.addToDo();
    vm.current().title("item 2");
    vm.addToDo();
    vm.current().title("item 3");
    vm.addToDo();

    vm.filter(ToDoMVC.Status.completed);

    var filteredToDos = vm.filteredToDos();
    expect(filteredToDos.length).toBe(0);
  });
});

describe("When attempting to removeItem", function(){
  var vm;
  beforeEach(function(){
    vm = new ToDoMVC.App();
  });

  it("will remove the ToDo when it is found in the list", function(){
     var toDo1 = new ToDoMVC.ToDo();
     toDo1.title("title 1");
     vm.current(toDo1);
     vm.addToDo();

     var toDo2 = new ToDoMVC.ToDo();
     toDo2.title("title 2");
     vm.current(toDo2);
     vm.addToDo();

     vm.removeItem(toDo1);

     expect(vm.toDos().length).toBe(1);
  });

  it("will not attempt to remove the ToDo when the list is empty", function(){
     var toDo1 = new ToDoMVC.ToDo();
     toDo1.title("title 1");

     vm.removeItem(toDo1);

     expect(vm.toDos().length).toBe(0);
  });

});

describe("When attempting to removeAllCompleted Items", function(){
  var vm;
  beforeEach(function(){
    vm = new ToDoMVC.App();
  });

  it( "when no completed items in the list will not make call to removeItem", function(){
    spyOn(vm, "removeItem");

    vm.current().title("item 1");
    vm.addToDo();

    vm.removeAllCompleted();

    expect(vm.removeItem).not.toHaveBeenCalled();
  });

  it( "when has completed items in the list will make call to removeItem", function(){
    spyOn(vm, "removeItem");

    vm.current().title("item 1");
    vm.current().status(ToDoMVC.Status.completed);

    // grab for use in expectation
    var item = vm.current();

    vm.addToDo();
    vm.removeAllCompleted();

    expect(vm.removeItem).toHaveBeenCalledWith(item);
  });
});
