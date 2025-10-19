Compte rendu évaluation GIT 

Le projet a été forké puis cloné par les autres membres du groupe.
Nous avons ensuite créé la branche dev, à partir de laquelle ont été faites les branches f1, f2 et f3, où chacun a ajouté son nom dans le fichier newfile.txt.
Lors du merge des branches sur dev, des conflits sont apparus car le même fichier avait été modifié à plusieurs endroits.
Ces conflits ont été résolus à l’aide du Merge Editor de VS Code, permettant de choisir et fusionner les différentes versions sans erreur.

Par la suite, pour le développement des fonctionnalités principales, trois nouvelles branches ont été créées :

addTask → pour ajouter une nouvelle tâche dans tasks.js,

toggleTask → pour changer l’état d’une tâche (faite / non faite),

countDone → pour compter et afficher le nombre de tâches terminées.

Chaque fonctionnalité a été développée dans sa propre branche, puis fusionnée sur la branche dev via des pull requests, afin de valider les changements et maintenir un historique clair et collaboratif du projet.