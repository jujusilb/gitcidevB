lors du git merge f2	

Auto-mergin newfile.txt
Conflic (content): Merge conflict in newfile.txt
Automatic merge failed; fix conflicts and then commit the result.

car deux fois le même fichier et deux contenu différent dans le même fichier

la différence entre switch/checkout : 

switch permet de changer ou crée des branches et est plus simple et moins risquer, checkout est plus polyvalent dans ses options, il peut restorer des fichier ou commit par exemple

la diff entre fetch et pull:

le pull permet de fetch et d'écrire même temps en intégrant les changements au fichier de travail tandis que fetch récupère les changements mais ne modifie pas les fichiers qui ont subis des changements

rebase/revert :

Git revert permer d'annuler un commit via un autre commit alors que rebase permet de déplacer des commits sur une partie de la branche qui est plus récente c'est-à-dire qu'elle permet de rejouer des commits déjà existante après un push

tag : permet de lister les tags qui ont été crée
stash : permet de mettre temporairement du code de coté et de changer de branche
release : ce sont les derniers changement fait durant une mise à jour