import './SectionTop.scss';

import React from 'react';

import photo from '../images/photo.jpg';
import { getString } from '../Utils.js';

export default class SectionTop extends React.Component {
    render() {
        return (
            <section id='Top'>
                <img src={photo} alt={getString({ de_DE: 'Foto', en_US: 'Photo' })} className='Photo' />
                <div className='Top-Content'>
                    <div>
                        <p>{getString({ de_DE: 'Hallo, ich bin', en_US: 'Hello, I am' })}</p>
                        <h1>André Schweiger</h1>
                        <h2>Master of Science</h2>
                    </div>
                </div>
            </section>
        );
    }
}
