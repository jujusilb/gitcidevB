let id=1;
let dico=[];
export function addTask(name){
    let tache={"name":name,"id":id, "done":false}
    dico.push(tache); 
    id++;
	return dico.length;
}
export function toggleTask(id){
	let find=false
    dico.forEach(tache => {
		if (tache.id==id){
			find=true
			if(tache.done==false){
				tache.done=true;
			} else if (tache.done==true){
				tache.done=false;
			}
		}
		else return "tache non trouvé"
	});
}

export function countdown(){
	let countTask=0;
	forEach(tache=>{
		if(tache.done) countTask++;
	});
	return countTask;
}