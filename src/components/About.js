import React from 'react';

function About() {
    return (
        <section id="about">
            <h2 class='pageHeader'>About Me</h2>
            <iframe title="myFrame" src="https://drive.google.com/file/d/1epa1OXmBbBTNYVwZq4DpWpZaKroNQaVx/preview" width="250" height="400" allow="autoplay"></iframe>
            <p class="intro">I am <b>Dicky Ko</b> from Hong Kong, currently base in Calgary, AB, Canada. A passionate full stack web developer with 5 years of experience in maintaining and enhancing the existing web applications
                and creating website application. I have experience working with and have solid understanding in various frontend and backend frameworks. Strong problem-solving skills and able to work collaboratively in a team environment. 
                I’m eager to continue learning new technologies and adapting to new challenges.</p>
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
            <div class="container">
                <div>
                    <img src="https://banner2.cleanpng.com/20181109/oll/kisspng-java-development-kit-logo-programming-language-por-java-logo-svg-1713924793188.webp" alt="java" width="85" height="85"/>   
                    <p class="logoDesc">Java</p>
                </div>
                <div>
                    <img src="https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png" alt="c#" width="85" height="85"/>
                    <p class="logoDesc">c#</p>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png?20210328084203" alt=".NET" width="85" height="85"/>
                    <p class="logoDesc">.NET</p>
                </div>
                <div>
                    <img src="https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png" alt="vue" width="85" height="85"/>  
                    <p class="logoDesc">VueJs</p>
                </div>
                <div>
                    <img src="https://banner2.cleanpng.com/20180704/zoa/aaxpuyy4g.webp" alt="jquery" width="85" height="85"/>   
                    <p class="logoDesc">jQuery</p>
                </div>
                <div>
                    <img src="https://banner2.cleanpng.com/20180411/wre/avf0mauoj.webp" alt="mysql" width="85" height="85"/>
                    <p class="logoDesc">Mysql</p>
                </div>
                <div>
                    <img src="https://datawarehouse.io/wp-content/uploads/2020/04/MSSQL-1-600x600.png" alt="MSSQL" width="85" height="85"/>
                    <p class="logoDesc">MSSQL</p>
                </div>   
                <div>
                    <img src="https://images.saasworthy.com/tr:w-160,h-0,c-at_max,e-sharpen-1/mariadb_9071_logo_1666786245_hzzcv.png" alt="mariadb" width="85" height="85"/>
                    <p class="logoDesc">Mariadb</p>
                </div> 
                <div>
                    <img src="https://banner2.cleanpng.com/20190602/luc/kisspng-clip-art-portable-network-graphics-transparency-im-github-icon-of-glyph-style-available-in-svg-png-1713889468656.webp" alt="github" width="85" height="85"/>   
                    <p class="logoDesc">github</p>
                </div>
                <div>
                    <img src="https://banner2.cleanpng.com/20180821/luh/8ea6665bf3aad43b7fda77a4b556b08d.webp" alt="git" width="100" height="85"/>   
                    <p class="logoDesc">git</p>
                </div>
                <div>
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKI3Pd%2FbtreCs2SzON%2FQCTzZwh3lfjTMaK8goixo1%2Fimg.png" alt="git" width="85" height="85"/>   
                    <p class="logoDesc">tortoise svn</p>
                </div>
            </div>
            <h2 class='pageHeader'>Certificates</h2>
            <div width="85px">
                <img src="https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png" alt="Professional Scrum Master™ I (PSM I). Issued by Scrum.org" width="85" height="85"/>
                <p class="description">Professional Scrum Matser I</p>
            </div>
        </section>
      );
}

export default About;