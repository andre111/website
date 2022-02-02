import imgMAmbience from './images/project_mambience.png';
import imgD20Server from './images/project_d20server.png';
import imgMinicraft3DS from './images/project_minicraft3ds.png';
import imgDynamicSoundFilters from './images/project_dynamicsoundfilters.png';
import imgWebsite from './images/project_website.png';

import { Linkedin, Github } from '@icons-pack/react-simple-icons';

export const projects = [
    {
        name: "MAmbience",
        technologies: [ "Java" ],
        description: {
            en_US: "Minecraft Mod adding ambient sounds, particle effects and more based on the players surroundings",
            de_DE: "Minecraft Mod für Ambiente-Geräusche, Partikeleffekte und weiteres basierend auf der tatsächlichen Spielerumgebung"
        },
        image: imgMAmbience,
        link: "https://github.com/andre111/mambience" //TODO: add a README.md to this repository
    },
    {
        name: "D20Server",
        technologies: [ "Node", "Javascript", "CSS", "HTML" ],
        description: {
            en_US: "Tool for playing P&P games online. Including Character Sheets, FOW, Dice Simulation, Voice Chat and more.",
            de_DE: "Plattform für Online P&P Spiele. Inklusive Charakterbögen, Sichtlinien, Würfelsimulation, Sprach/Videochat und mehr."
        },
        image: imgD20Server,
        link: ""
    },
    {
        name: "Minicraft 3DS Homebrew Multiplayer Edition",
        technologies: [ "C" ],
        description: {
            en_US: "Port of Minicraft to 3DS Homebrew with added local multiplayer",
            de_DE: "Port von Minicraft für 3DS Homebrew mit lokaler Multiplayer Funktion"
        },
        image: imgMinicraft3DS,
        link: "https://github.com/andre111/Minicraft3DS"
    },
    {
        name: "Website",
        technologies: [ "React", "Sass", "HTML" ],
        description: {
            en_US: "Source Code for this website",
            de_DE: "Quellcode dieser Webseite"
        },
        image: imgWebsite,
        link: "https://github.com/andre111/website"
    },
    {
        name: "Dynamic Sound Filters",
        technologies: [ "Java", "OpenAL" ],
        description: {
            en_US: "Minecraft Mod adding dynamic effects to sounds like reverb and muffling based on dynamic environment scans",
            de_DE: "Minecraft Mod für Audioeffekte wie Hall und Verdeckung basierend auf dynamischen Umgebungsscans"
        },
        image: imgDynamicSoundFilters,
        link: "https://github.com/andre111/dynamicsoundfilters" //TODO: add a README.md to this repository
    }
];

export const links = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/andré-michael-schweiger/',
        icon: Linkedin
    },
    {
        name: 'Github',
        url: 'https://github.com/andre111',
        icon: Github
    }
];
