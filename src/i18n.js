import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    home: 'Home',
                    hi: 'Hi, my name is',
                    iam: 'I`m a Front End Developer.',
                    specialize: 'I`m a front-end developer specializing in building exceptional digital experiences. Currently, I`m focused on building responsive full-stack web applications.',
                    view: 'View Works',

                    about: 'About',
                    introduction: 'Hi. I`m Radmyr Deriabin, nice to meet you. Please take a look around.',
                    introduction2: 'I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?',

                    skills: 'Skills',
                    tech: 'These are the technologies I`ve worked with',

                    work: 'Work',
                    check: 'Check out some of my recent work',

                    contact: 'Contact',
                    submit: 'Submit the form below or shoot me an email - radmyr.deriabin11@gmail.com',
                    lets: 'Let`s Collaborate',
                    name: 'name',
                }
            },
            fr:{
                translation: {
                    home: 'Accueil',
                    hi: 'Bonjour, mon nom est',
                    iam: 'Je suis développeur Front-End',
                    specialize: 'Je suis développeur Front-End spécialisé dans la création d`expériences numériques exceptionnelles. Actuellement, je suis concentré sur la création d`applications web full-stack réactives.',
                    view: 'Voir les projets',

                    about: 'Qui je suis',
                    introduction: 'Bonjour. je m`appelle Radmyr, enchanté. SVP, jetez un coup d`œil autour de vous.',
                    introduction2: 'Je suis passionné par la création de logiciels excellents qui améliorent la vie de ceux qui m`entourent. Je suis spécialisé dans la création de logiciels pour des clients allant des particuliers et des petites entreprises jusqu`aux grandes entreprises. Que feriez-vous si vous aviez un expert en logiciels disponible à portée de main ?',

                    skills: 'Compétences',
                    tech: 'Voici les technologies avec lesquelles j`ai travaillé',

                    work: 'Projets',
                    check: 'Découvrez quelques-unes de mes réalisations récentes',

                    contact: 'Contact',
                    submit: 'Envoyez le formulaire ci-dessous ou envoyez-moi un e-mail à radmyr.deriabin11@gmail.com',
                    lets: 'Collaborons ensemble !',
                    name: 'Nom',
                }
            }
        }
    })