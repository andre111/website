import './SectionLinks.scss';

import React from 'react';

import { links } from '../Data';
import { getString } from '../Utils.js';

export default class SectionLinks extends React.Component {
    render() {
        return (
            <section id='Links'>
                <h1>{getString({ de_DE: 'Links', en_US: 'Links ' })}</h1>
                {
                    links.map(link => {
                        return <a href={link.url} target='_blank' rel='noreferrer' key={link.name}><link.icon size={48} /></a>
                    })
                }
            </section>
        );
    }
}
