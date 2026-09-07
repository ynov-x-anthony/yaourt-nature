import './App.css'
import Movie from './components/Movie';
import NavBar from './components/Navbar'
import { useState } from "react";

const movies = [
  {
    "id": 1,
    "imgURL": "https://static.wikia.nocookie.net/frstarwars/images/e/e0/Lundi.png/revision/latest/scale-to-width-down/1200?cb=20151011153017",
    "title": "Star Wars 1 : La Menace Fantôme",
    "length": 136,
    "desc": "Pour envahir la planète Naboo, la Fédération du Commerce impose un blocus. Deux chevaliers Jedi, Qui-Gon Jinn et Obi-Wan Kenobi, interviennent pour sauver la reine Padmé Amidala et fuir vers la capitale galactique. Bloqués en chemin sur la planète désertique Tatooine, ils découvrent le jeune Anakin Skywalker, un esclave doté d'un potentiel exceptionnel dans la Force. Convaincu qu'il est l'Élu d'une prophétie, Qui-Gon obtient sa libération pour le former.Ensemble, ils retournent sur Naboo pour libérer le peuple. Tandis qu'une alliance terrestre repousse l'armée de droïdes et qu'Anakin détruit le vaisseau spatial ennemi, les Jedi affrontent Dark Maul, un guerrier Sith qui confirme le retour d'une menace obscure que l'on croyait disparue. Qui-Gon est tué, mais Obi-Wan triomphe du Sith et promet de former Anakin."
  },
  {
    "id": 2,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CzfWE3GR-QLkIqCVeK32qcl2nAH22JHapuh-nbk61Q&s=10",
    "title": "Star Wars 2 : L'Attaque des Clones",
    "length": 142,
    "desc": "Pour envahir la République, le mystérieux comte Dooku rassemble une faction de séparatistes qui menace la paix galactique. Visée par un attentat, la sénatrice Padmé Amidala est placée sous la protection d'Anakin Skywalker, devenu un jeune Jedi talentueux mais impulsif. Durant cette mission secrète sur Naboo, ils tombent amoureux malgré l'interdiction de l'Ordre Jedi, tandis qu'Anakin commence à être rongé par la colère après la mort de sa mère sur Tatooine.En parallèle, son maître Obi-Wan Kenobi enquête sur les assassins et découvre sur Kamino la création secrète d'une immense armée de clones destinée à la République. Suivant une piste jusqu'à la planète Géonosis, Obi-Wan est capturé par les forces séparatistes. Anakin et Padmé tentent de lui porter secours mais se font piéger à leur tour dans une arène de combat.La situation est sauvée de justesse par l'arrivée des Jedi et de Maître Yoda, qui déploie la nouvelle armée de clones pour affronter les droïdes ennemis. Bien que le comte Dooku parvienne à s'enfuir après avoir blessé Anakin et Obi-Wan, cette confrontation marque le début officiel de la Guerre des Clones, tandis qu'Anakin et Padmé scellent leur amour par un mariage secret."
  },
  {
    "id": 3,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGpqy3HxP6PXIChvoWx2GkIoB0zZv3yArIBLUVHpVXQ&s=10",
    "title": "Star Wars 3 : La Revanche Des Siths",
    "length": 140,
    "desc": "Trois ans après le début de la Guerre des Clones, les chevaliers Jedi Obi-Wan Kenobi et Anakin Skywalker sauvent le chancelier Palpatine des griffes du comte Dooku. De retour sur Coruscant, Anakin apprend la grossesse de Padmé mais commence à être hanté par des visions de sa mort prochaine. Palpatine, qui se révèle être en secret le seigneur Sith Dark Sidious, exploite cette faille en promettant au jeune Jedi que le côté obscur de la Force peut sauver sa femme.Pendant qu'Obi-Wan traque et élimine le général Grievous sur une planète lointaine, le piège de Palpatine se referme. Tourmenté et manipulé, Anakin trahit l'Ordre Jedi, prête allégeance à Sidious et devient Dark Vador. Le chancelier ordonne alors l'Exécution de l'Ordre 66, poussant les soldats clones à massacrer presque tous les Jedi à travers la galaxie, avant de proclamer la naissance de l'Empire Galactique.Découvrant la trahison de son ancien apprenti, Obi-Wan affronte Vador dans un duel fratricide et destructeur sur la planète volcanique Mustafar, le laissant pour mort. Padmé meurt en donnant naissance aux jumeaux Luke et Leia, qui sont cachés pour leur sécurité. Brisé et atrocement brûlé, Anakin est sauvé par l'Empereur et enfermé dans son armure noire emblématique, marquant l'avènement de la tyrannie."
  },
  {
    "id": 4,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzniQoxzxH1aQEqUP8txd7LS__Cn2LdZfOYLnnG3yu3A&s=10",
    "title": "Star Wars 4 : Un Nouvel Espoir",
    "length": 121,
    "desc": "Dix ans après la chute de la République, l'Empire Galactique fait régner la terreur dans la galaxie. La jeune princesse Leia Organa, détentrice des plans secrets de l'Étoile de la Mort, une station spatiale capable de détruire des planètes, est capturée par le redoutable Dark Vador. Avant son arrestation, elle confie les plans aux droïdes R2-D2 et C-3PO, qui s'échappent sur la planète désertique Tatooine.Les droïdes sont achetés par Luke Skywalker, un jeune fermier qui découvre le message de détresse de la princesse. Il cherche de l'aide auprès du vieux ermite Obi-Wan Kenobi, qui lui révèle que son père était un grand Chevalier Jedi et lui offre son premier sabre laser. Pour quitter la planète et livrer les plans à l'Alliance Rebelle, ils engagent le contrebandier Han Solo et son copilote Chewbacca à bord du Faucon Millenium.Attiré par le rayon tracteur de l'Étoile de la Mort, le groupe s'infiltre dans la station, libère Leia, mais Obi-Wan se sacrifie lors d'un duel ultime contre Vador. Réfugiés sur la base rebelle d'Yavin 4, les héros analysent les plans pour trouver une faille. Lors d'une bataille spatiale désespérée, Luke utilise la Force pour guider ses torpilles et détruire l'Étoile de la Mort, signant la première victoire majeure de la Rébellion."
  },
  {
    "id": 5,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrnYU_R6-u3dM0MYk9YOGYGCLSdByg4zK4qTOkzjisQ&s=10",
    "title": "Star Wars 5 : L'Empire Contre Attaque",
    "length": 124,
    "desc": "Après leur victoire éclatante, les Rebelles ont établi une base secrète sur la planète glaciale de Hoth, mais l'Empire Galactique les traque sans relâche et Dark Vador lance une attaque massive pour capturer Luke Skywalker. Contraints de fuir, les héros se séparent alors que Han Solo, Leia Organa, Chewbacca et le droïde C-3PO échappent à la flotte impériale à bord du Faucon Millenium, Luke suit les conseils de l'esprit d'Obi-Wan Kenobi et se rend sur la planète marécageuse de Dagobah.Sur Dagobah, Luke rencontre le vieux maître Yoda qui commence à lui enseigner les voies de la Force et à canaliser son impatience. Pendant ce temps, le Faucon Millenium trouve refuge dans la Cité des Nuages de Bespin, dirigée par Lando Calrissian, un ancien ami de Han. Le piège de Vador se referme alors sur eux car l'Empire a devancé les fuyards, forçant Lando à trahir ses invités pour que Han Solo soit congelé dans la carbonite et livré au chasseur de primes Boba Fett.Ressentant la détresse de ses amis à travers la Force, Luke interrompt sa formation malgré les avertissements de Yoda et fonce vers Bespin pour les secourir. Il y affronte Dark Vador dans un duel intense au sabre laser au cours duquel le seigneur Sith lui tranche la main droite. C'est à ce moment précis que Vador lui révèle la terrible vérité historique : il n'a pas tué le père de Luke, il est son père, brisant psychologiquement le jeune homme qui parvient de justesse à être secouru par Leia et Lando à bord du Faucon."
  },
  {
    "id": 6,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CFePq4L-AiFNkRsxch31UwlmjnaP9EtYBG4nCYgU2A&s=10",
    "title": "Star Wars 6 : Le Retour Du Jedi",
    "length": 134,
    "desc": "Pour secourir Han Solo toujours figé dans la carbonite, Luke Skywalker, Leia Organa et Lando Calrissian s'infiltrent dans le repaire du redoutable Jabba le Hutt sur Tatooine et parviennent à libérer leur ami après une évasion spectaculaire. De retour sur Dagobah, Luke assiste aux derniers instants du vieux maître Yoda qui lui confirme de vive voix que Dark Vador est bel et bien son père, tout en lui révélant l'existence d'une sœur jumelle cachée, qui s'avère être la princesse Leia.Pendant ce temps, l'Empire construit en secret une seconde Étoile de la Mort encore plus puissante, protégée par un bouclier thermique émis depuis la lune forestière d'Endor. L'Alliance Rebelle lance alors une offensive de la dernière chance en envoyant Han et Leia au sol pour détruire le générateur avec l'aide des Ewoks, tandis que la flotte rebelle attaque la station spatiale en orbite. De son côté, Luke choisit délibérément de se rendre à Vador dans l'espoir de réveiller la part de lumière qui sommeille encore en lui.Amené devant l'Empereur Palpatine à bord de la station, Luke subit des provocations psychologiques intenses et affronte à nouveau son père dans un duel fratricide au sabre laser. Alors que Luke refuse d'achever Vador et de basculer du côté obscur, l'Empereur furieux utilise ses éclairs de Force pour torturer le jeune homme à mort. Ne pouvant supporter l'agonie de son fils, Vador se retourne contre son maître et jette Palpatine dans le puits de la station, se sacrifiant au passage. Lando détruit la station spatiale, l'Empire s'effondre et Luke offre à son père, redevenu Anakin Skywalker, des funérailles dignes avant de célébrer la liberté retrouvée avec toute la galaxie."
  },
  {
    "id": 7,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-_bB0DokRYLoAchlrXvYxs7iHk3tlP5qx3g-R4rdfKA&s=10",
    "title": "Star Wars 7 : Le Réveil De La Force",
    "length": 138,
    "desc": "Trente ans après la destruction de la seconde Étoile de la Mort, le sinistre Premier Ordre est né des cendres de l'Empire et cherche à éliminer la Résistance. Kylo Ren, un guerrier puissant guidé par le côté obscur, traque une carte secrète menant à Luke Skywalker, mystérieusement disparu depuis des années. La carte est cachée dans un droïde, BB-8, qui se retrouve par hasard sur la planète déserte Jakku aux côtés de Rey, une jeune pilleuse d'épaves solitaire, et de Finn, un stormtrooper déserteur en crise de conscience.En fuyant à bord d'un vieux vaisseau qui s'avère être le Faucon Millenium, le duo croise la route des légendaires Han Solo et Chewbacca, qui reprennent du service pour les aider à amener le droïde à la Résistance, désormais dirigée par la générale Leia Organa. Pendant ce temps, le Premier Ordre utilise sa nouvelle super-arme planétaire, la base Starkiller, pour anéantir la capitale de la Nouvelle République, révélant la puissance destructrice de leur chef suprême Snoke.La Résistance lance alors un assaut aérien désespéré pour détruire Starkiller pendant que Han, Finn et Chewbacca s'infiltrent au sol. Han Solo y affronte Kylo Ren, qui est en réalité son propre fils déchu, et tente de le ramener vers la lumière, mais Kylo l'assassine de sang-froid sous les yeux horrifiés de ses amis. Rey, se découvrant une immense maîtrise de la Force, bat Kylo Ren lors d'un duel au sabre laser avant que la planète n'explose. BB-8 étant enfin complété, Rey s'envole vers une île océanique lointaine pour tendre son sabre laser à un Luke Skywalker vieillissant."
  },
  {
    "id": 8,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHRoSDUEyMtSmyJjIY2mqFQ1gBG4L5LLjdP5yL-eOeg&s=10",
    "title": "Star Wars 8 : Les Derniers Jedis",
    "length": 152,
    "desc": "La Résistance est traquée et décimée par la flotte du Premier Ordre, tandis que Rey tente de convaincre un Luke Skywalker aigri et exilé sur l'île d'Ahch-To de revenir pour enseigner les voies de la Force. Luke refuse catégoriquement de former une nouvelle génération après son échec cuisant avec Kylo Ren, mais accepte finalement de donner quelques leçons à Rey, qui développe en parallèle une connexion mentale mystérieuse et troublante à travers la Force avec Kylo lui-même.Pendant que Finn et une mécanicienne nommée Rose tentent une mission désespérée et infructueuse pour désactiver le traqueur ennemi, la flotte de la Résistance, dirigée par Leia Organa puis par la vice-amirale Holdo, est acculée. Pensant pouvoir ramener Kylo Ren du côté lumineux, Rey se rend directement à lui mais se retrouve capturée et amenée devant le leader suprême Snoke. Dans un revirement théâtral, Kylo trahit et assassine cruellement Snoke, puis propose à Rey de régner ensemble sur la galaxie, une offre qu'elle rejette fermement avant de s'enfuir.Les derniers survivants de la Résistance se réfugient sur la planète minière de Crait, assiégée par les forces terrestres du Premier Ordre désormais dirigées par le nouveau Leader Suprême Kylo Ren. Alors que tout espoir semble perdu, Luke Skywalker apparaît miraculeusement pour défier Kylo en duel, révélant qu'il s'agit d'une projection astrale à distance pour donner le temps à Rey de sauver les résistants à bord du Faucon Millenium. Épuisé par cet effort titanesque à travers la Force, Luke s'éteint paisiblement en ne faisant plus qu'un avec l'univers, laissant la Résistance brisée mais inspirée pour raviver la flamme de la rébellion."
  },
  {
    "id": 9,
    "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1XlA9tjQv935LixARGXSnvAyLunW-cTwhIecrQcFdA&s=10",
    "title": "Star Wars 9 : L'Ascension De Skywalker",
    "length": 141,
    "desc": "Le terrifiant Empereur Palpatine réapparaît mystérieusement pour offrir sa flotte de destroyers cachée sur la planète Sith Exegol à Kylo Ren, à condition que ce dernier élimine la dernière menace de la galaxie. Rey, poursuivant son entraînement sous la direction de Leia Organa, part avec Finn, Poe Dameron et Chewbacca à la recherche d'un orienteur Sith, l'unique artefact capable de localiser cette planète maudite. Au cours de cette quête haletante, Rey et Kylo Ren s'affrontent à distance et lors d'un duel acharné au sabre laser sur les débris de la seconde Étoile de la Mort.Alors que Rey blesse mortellement Kylo, Leia utilise ses dernières forces à travers la galaxie pour appeler son fils, provoquant le sacrifice de la générale. Submergée par le remords, Rey le guérit avec la Force, un geste qui, combiné au souvenir de son père Han Solo, pousse Kylo Ren à abandonner définitivement le côté obscur pour redevenir Ben Solo. Rey s'envole alors vers Exegol grâce aux indications de l'esprit de Luke Skywalker, tandis que Lando Calrissian parcourt la galaxie pour rassembler une immense flotte de citoyens ordinaires prête à soutenir la Résistance.Sur Exegol, Palpatine révèle à Rey qu'elle est sa petite-fille et tente de la corrompre pour qu'elle lui succède sur le trône Sith. Ben Solo arrive en renfort, mais l'Empereur draine leur énergie commune pour restaurer sa propre puissance et foudroyer la flotte spatiale. Portée par la voix de tous les Jedi du passé, Rey se relève et retourne les propres éclairs de Palpatine contre lui pour le détruire définitivement, avant de s'effondrer sans vie. Ben utilise alors sa propre force vitale pour ressusciter Rey dans un ultime baiser avant de disparaître, laissant la galaxie fêter sa libération totale pendant que Rey adopte le nom symbolique de Rey Skywalker sur Tatooine."
  },
]

function App() {

  const [movieId, setMovieId] = useState(1);
  
  const movie = movies.find((movie) => movie.id === movieId);

  if (movie == null) {
    throw new Error("Invalid movie id");
  }

  return (
    
    <>
      <NavBar moviesList={movies} setMovieId={setMovieId}/>
      <Movie {...movie}/>
    </>
  )
}

export default App
