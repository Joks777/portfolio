// À MODIFIER : tes informations
import { FaGithub, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

export const profile = {
  name: 'Lionel BIAOU',
  role: 'Développeur Web & Mobile',
  intro: "Je conçois des applications complètes, de l'idée à la mise en ligne, avec une conception solide avant d'écrire la moindre ligne de code.",
  photo: '', // ex. '/moi.jpg' (mets l'image dans le dossier public/)
  cv: '/CV professionnel gris simple.pdf', // ex. '/cv.pdf' (mets le fichier dans le dossier public/)
  email: 'lionelbiaou17@gmail.com',
  phone: '+229 0196543663',
  location: 'Bénin',
  about: [
    "Titulaire d'une Licence Professionnelle en Systèmes Informatiques et Logiciels, je me présente comme développeur web et mobile, avec une base solide en Laravel.",
    "J'aime livrer des solutions qui fonctionnent pour de vrais utilisateurs, pas de simples démonstrations.",
  ],
  goal: 'Mon objectif est de contribuer à des projets qui ont un impact réel, en utilisant mes compétences pour créer des applications web et mobiles robustes et conviviales.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Joks777' , icon: FaGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedinIn },
    { label: 'X', href: 'https://x.com/', icon: FaXTwitter },
    { label: 'WhatsApp', href: 'https://wa.me/2290196543663', icon: FaWhatsapp },
  ],
}

export const navLinks = [
  ['accueil', 'Accueil'], ['a-propos', 'À propos'], ['competences', 'Compétences'],
  ['projets', 'Projets'], ['services', 'Services'], ['parcours', 'Parcours'],
]
