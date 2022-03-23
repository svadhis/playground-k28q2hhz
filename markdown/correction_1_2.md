# Correction

Bravo ! Tu as su te débrouiller et arriver au bout des deux premiers exercices.

Nous pouvons cibler l'élément d'un tableau en utilisant son index. L'index d'un élément représente sa position dans le tableau, **en commençant par 0 !**

Pour accéder au premier élément d'un tableau, il suffit donc d'appeler l'index 0 entre crochets.

```javascript runnable
let table = [3, 6, 9];
console.log(table[0]);
```

Pour l'avant-dernier élément, son index correspond à la taille du tableau **- 2**. Et oui, pour un tableau de *3 éléments*, l'index du dernier élément est bien 2 et non pas 3, car les index démarrent à 0 ! Donc si nous voulons l'avant dernier, ce sera l'index 1, donc *3* **- 2** !

Pour connaitre la taille d'un tableau, nous pouvons utiliser la propriété **length** de celui-ci. Comme pour les méthodes, les propriétés sont accessibles avec la syntaxe *objet.propriete*.

```javascript runnable
let table = [3, 6, 9];
console.log(table[table.length - 2]);
```