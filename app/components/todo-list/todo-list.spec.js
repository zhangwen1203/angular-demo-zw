System.register(['angular2/testing', './todo-list'], function(exports_1) {
    var testing_1, todo_list_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            }],
        execute: function() {
            testing_1.describe('TodoList Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(todo_list_1.TodoList).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=todo-list.spec.js.map