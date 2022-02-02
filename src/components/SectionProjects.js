import './SectionProjects.scss';

import React from 'react';
import Project from './Project';

import { projects } from '../Data';
import { getString } from '../Utils.js';

export default class SectionProjects extends React.Component {
    render() {
        return (
            <section id='Projects'>
                <h1>{getString({ de_DE: 'Meine Projekte', en_US: 'My Projects'})}</h1>
                <div>
                {
                    projects.map((project, index) => (
                        <Project data={project} key={project.name} index={index}/>
                    ))
                }
                </div>
            </section>
        );
    }
}
