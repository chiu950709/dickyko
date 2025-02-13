import React from 'react';

function About() {
    return (
        <section id="about">
            <h2 class='pageHeader'>About Me</h2>
            <iframe title="myFrame" src="https://drive.google.com/file/d/1epa1OXmBbBTNYVwZq4DpWpZaKroNQaVx/preview" width="250" height="400" allow="autoplay"></iframe>
        
            <h2 class='pageHeader'>Education</h2>
            <div class="education">
                <h3>The Open University of Hong Kong
                    <code>09/2016 – 06/2019</code>
                </h3>
                <p><i>Bachelor of Computing(Honours), Internet Technology</i></p>
            </div>

            <h2 class='pageHeader'>Lanuages</h2>
            <p class="description">Fluent in <code>Cantonese (native proficiency)</code>, <code>English</code>, <code>and Mandarin</code></p>
            
            <h2 class='pageHeader'>Skills</h2>
                <img src="https://banner2.cleanpng.com/20181109/oll/kisspng-java-development-kit-logo-programming-language-por-java-logo-svg-1713924793188.webp" alt="java" width="85" height="85"/>   
                <img src="https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png" alt="c#" width="85" height="85"/>   
            <h2 class='pageHeader'>Certificates</h2>
            <div width="85px">
                <img src="https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png" alt="Professional Scrum Master™ I (PSM I). Issued by Scrum.org" width="85" height="85"/>
                <p class="description">Professional Scrum Matser I</p>
            </div>
        </section>
      );
}

export default About;