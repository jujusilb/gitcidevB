function toggleTask(id){
    const foundTache = tasks.find(t => t.id === id);
    if (foundTache) {
        foundTache.done = !foundTache.done;
        return foundTache.done;
    }
    return "tache non trouvée";
}