function toggleTask(id){
    let newtache={"name":"julien","id":1, "done":false}
    tasks.push(newtache);
    const foundTache = tasks.find(newtache=>newtache.id===id);
    if(foundTache){
        foundTache.done=!foundTache.done;
        return foundTache.done
    }
    return "tache non trouvée";
}