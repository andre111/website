import React from 'react';
import { getString } from '../Utils.js';

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.animated = false;
        this.contentRef = React.createRef();
        this.bgRef = React.createRef();
        this.linkRef = React.createRef();

        this.observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if(entry.isIntersecting) this.startAnimation();
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });
    }

    render() {
        return (
            <article className={this.props.data.link ? 'Project Clickable' : 'Project'} onClick={e => this.onClick(e)} onMouseMove={e => this.onMouseMove(e)} onMouseLeave={e => this.onMouseLeave(e)}>
                <div className='Project-Content Hidden' ref={this.contentRef}>
                    <h2 className='Project-Name'>{this.props.data.name}</h2>
                    {
                        //<h3 className='Project-Tech'>{this.props.data.technologies}</h3>
                        this.props.data.technologies.map(tech => {
                            return <p className='Project-Tech' key={tech}>{tech}</p>
                        })
                    }

                    <p className='Project-Desc'>{getString(this.props.data.description)}</p>
                    
                    {
                        this.props.data.image ? <img src={this.props.data.image} className='Project-BG' alt='BG' ref={this.bgRef}/> : <div className='Project-BG' ref={this.bgRef}/>
                    }
                    {
                        this.props.data.link ? <a href={this.props.data.link} target='_blank' rel='noreferrer' ref={this.linkRef} className='Project-Link' aria-label='Project Link'>→</a> : <a href='#' ref={this.linkRef} className='Project-Link Hidden' aria-label='No Link'></a>
                    }
                </div>
            </article>
        );
    }

    componentDidMount() {
        this.observer.observe(this.contentRef.current);
    }

    componentWillUnmount() {
        this.observer.unobserve(this.contentRef.current);
    }

    onClick(e) {
        if(this.props.data.link) {
            const isTextSelected = window.getSelection().toString();
            if (!isTextSelected) {
                this.linkRef.current.click();
            }
        }
    }

    onMouseMove(e) {
        var rect = this.contentRef.current.getBoundingClientRect();
        var mouseX = (e.clientX - rect.left - rect.width/2) / rect.width;
        var mouseY = (e.clientY - rect.top - rect.height/2) / rect.height;
        this.updateTransforms(mouseX, mouseY, rect.width, rect.height);
    }

    onMouseLeave(e) {
        this.updateTransforms(0, 0);
    }

    startAnimation() {
        if(this.animated) return;
        this.animated = true;

        setTimeout(() => {
            this.contentRef.current.classList.add('Intro-Rotate');
            this.contentRef.current.classList.remove('Hidden');
        }, this.props.index * 80);
    }

    updateTransforms(mouseX, mouseY, width, height) {
        // adjust for aspect ratio
        var scaleX = 1;
        var scaleY = 1;
        if(width > height) scaleX = width / height;
        else scaleY = height / width;

        // set transformation
        this.contentRef.current.style.transform = `rotateX(${mouseY * -30}deg) rotateY(${mouseX * 30}deg)`;
        this.bgRef.current.style.transform = `scale(var(--scale)) translateX(${mouseX * -40 * scaleX}px) translateY(${mouseY * -40 * scaleY}px)`;
    }
}
