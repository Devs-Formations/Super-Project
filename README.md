## SAARETECH — Projet de Présentation d'Équipe

Ce dépôt regroupe le projet collaboratif de présentation des membres de l'équipe **SAARETECH**, réalisé dans le cadre de notre formation. Chaque membre dispose de sa propre page de présentation, développée sur sa propre branche Git.

## À propos du projet

L'objectif est de présenter chaque membre du groupe (parcours, compétences, réalisations) au sein d'une structure commune, tout en s'exerçant à la collaboration via **Git** et **GitHub** (branches, commits, pull requests).

## Structure du dépôt

```
super-projet/
├── README.md
├── etienne.html        # Page de présentation d'Etienne
├── style.css            # Feuille de style associée
└── js/
    └── script.js         # Script (animations, formulaire de contact)
```

> Chaque membre ajoute ses propres fichiers (`nom.html`, `style.css`, `js/`) sur sa branche personnelle.

## Ma contribution — Etienne Badango

- **Branche :** `stark`
- **Fichier principal :** `etienne.html`
- **Contenu :** présentation personnelle (parcours ENSPM, compétences, projets réalisés, formulaire de contact)

## Technologies utilisées

- HTML5
- CSS3 (design personnalisé, thème indigo/or)
- JavaScript (vanilla, sans framework)

## Comment visualiser ma page

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/nom-organisation/super-projet.git
   ```
2. Se positionner sur la branche `stark` :
   ```bash
   git checkout stark
   ```
3. Ouvrir `etienne.html` dans un navigateur (double-clic ou via une extension type "Live Server").

## Workflow Git utilisé

```bash
# Créer et basculer sur sa branche personnelle
git checkout -b stark

# Ajouter ses fichiers
git add etienne.html style.css js/script.js

# Valider les changements
git commit -m "Ajout de ma page de presentation"

# Envoyer la branche sur GitHub
git push -u origin stark
```

Une fois la branche poussée, une **Pull Request** peut être ouverte pour proposer la fusion vers la branche principale (`main`).

## Équipe SAARETECH

| Membre | Branche | Statut |
|---|---|---|
| Etienne Badango | `stark` | ✅ Terminé |
| *(à compléter par les autres membres)* | | |

---

*Projet réalisé dans le cadre de la formation SAARETECH.*uper-Project
Hello people
