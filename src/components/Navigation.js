import React from 'react';
import { getLanguage, getString, setLanguage } from '../Utils.js';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className='Navigation'>
                <a href='#'>↑</a>
                <a href='#Projects'>{getString({ de_DE: 'Projekte', en_US: 'Projects' })}</a>
                <a href='#Links'>{getString({ de_DE: 'Links', en_US: 'Links' })}</a>
                <button onClick={(e) => this.onClickLanguage(e)}>🌍</button>
            </nav>
        );
    }

    onClickLanguage(e) {
        setLanguage(getLanguage() === 'de_DE' ? 'en_US' : 'de_DE');
    }
}
