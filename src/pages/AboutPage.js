import React from 'react';

import Hero from "../components/Hero";
import Content from '../components/Content';

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle}/>

            <Content>
                <p>Hello, my name is Ariq. I'm a full stack developer with experience in web development such as HTML,
                    CSS, PHP, Laravel, JS, jQuery, and MySQL. In mobile application development, I have contributed on
                    several Java/Android and Dart/Flutter projects.</p>

                <p>Besides full stack development, I also have experience on working as Project Manager and System
                    Analyst.</p>

                <p>I'm constantly learning new things. currently those things include gaining more experience with
                    React, Vue JS, Node JS, MongoDB, and Kotlin.</p>

                <p>You can find me on&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ariqd">Github</a>,&nbsp;
                    <a target="_blank" rel="noopener noreferrer"
                       href="https://www.linkedin.com/in/ariqd/">LinkedIn</a>,&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ariqd">Facebook</a>,
                    or <a target="_blank" rel="noopener noreferrer"
                          href="https://www.instagram.com/daffariq/">Instagram</a></p>
            </Content>
        </div>
    );
}

export default AboutPage;