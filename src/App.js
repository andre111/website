import './App.scss';

import SectionProjects from './components/SectionProjects.js';
import Navigation from './components/Navigation.js';
import SectionTop from './components/SectionTop.js';
import SectionLinks from './components/SectionLinks.js';

function App() {
    return (
        <div className='App'>
            <header className='Header'>
                <Navigation />
            </header>
            <main>
                <SectionTop />
                <SectionProjects />
                <SectionLinks />
            </main>
        </div>
    );
}

export default App;
