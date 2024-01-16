async function postNewTodo(todo){
    try{
        const promise = await fetch('http://localhost:3000/todos', {
            method: "POST",
            headers: {"content-Type": 'application/json',},
            body: JSON.stringify(todo),
        });
        const result = await promise.json();
        return result;
        console.log(result)
    }
    catch(error){
    }
}
async function getAllTodos(){
    try{
        const promise = await fetch('http://localhost:3000/todos');
        const result = await promise.json();
        console.log(result);
        showAllTodos(result.filter((todo)=>!todo.done));
        showAllDones(result.filter((todo)=>todo.done));
        return result;
    }
    catch(eror){}
}
