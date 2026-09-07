# Projet REACT

## Prérequis

Editeur de code (par ex. : VS Code), Git, Node

## Etape 1 : Cloner le dépôt

Ouvrez dans votre éditeur de code le dossier dans lequel vous voulez copier le projet, puis ouvrez y un terminal. Ensuite, tapez cette commande : 
```bash
git clone https://github.com/ynov-x-anthony/yaourt-nature.git
```

## Etape 2 : Lancer le serveur

Une fois le dépôt cloné, tapez : 
```bash
cd yaourt-nature
```
Et : 
```bash
npm run dev
```

## Etape 3 : Aller sur le site

Une fois les étapes précédentes effectuées, vous pouvez aller (dans votre navigateur) sur [localhost:5173](localhost:5173).

# Questions

### Q1. C'est quoi React ?

- Bibliothèque Open-source, pas un framework
- Développé par **Meta** en 2013    

### Q2. Définitions

- **JSX** : Le *JSX* est une extension syntaxique qui permet d'écrire du code qui ressemble au *HTML* (mais n'est pas du HTML) dans un fichier JavaScript. *JSX* signifie *JavaScriptXML* => *JavaScript eXtensible Markup Langage*.
- **Composant** : Un *composant* est une brique de base de React, les *composants* s'assemblent pour construire la page, mais on peut aussi les imbriquer les uns dans les autres. Ce sont des parties réutilisables de l'interface écrites sous la forme d'une fonction qui retourne du *JSX*
- **Props** : Les *props* sont les informations que l'on donne a un *composant* pour personaliser l'affichage, c'est comme les balises HTML mais en *JSX*, à contrario des balises *HTML*, les balises *JSX* sont personnalisables
- **State** : La state est la mémoire d'un composant , il permet de faire reagir un composant lorsqu'on le modifie 

 