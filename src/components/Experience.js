import React from 'react';
import config from '../config';

function Experience() {
    /*const openPopup = (url) => {
        window.open(url, 'popup');
    };*/

    return (
        <section id="experience">
            <h2 class="pageHeader">Work Experience</h2>
            <h2 class="pageSubHeader">Relevant IT Experience</h2>
            <div class="experience">
                <h3>Digital Policy Office(Former name: Office of the Government Chief Information Officer) 
                    <code>Oct 2023 – Oct 2024</code>
                </h3>
                <div class="detail"><code class="detail">
                    &#123;
                    <div>
                        <p>
                            &emsp;&emsp;<span class="jobTitle">"Title"</span>&#58;&nbsp;
                            <span class="jobValue">"Program Analyst"</span>
                            <div></div>
                            &emsp;&emsp;<span class="jobDuties">"Job Duties"</span>&#58;&nbsp;&#91;
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Transitioned system functions from Aspose to Apache POI"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Upgraded the version of existing web application e.g. Java, RedHat JBoss, JQuery"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Designed and implemented new tables and ejb functions"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Enhacned and developed new features and pages to existing web application"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Provided troubleshooting and ongoing maintenance for the existing web application"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Prepared test case and user guide"
                            </span>
                            <br></br>
                            &emsp;&emsp;&#93;
                        </p>
                    </div>
                    &#125;
                </code></div>
            </div> 
            
            <div class="experience">
                <h3>Cognizant 
                    <code>June 2022 – Oct 2023</code>
                    {
                    //<a href="#!" onClick={() => openPopup('https://www.aig.com/home')}>
                    }
                    <a href="https://www.aig.com/home'" target="_blank" rel="noopener noreferrer" >
                    <img src="https://www.aig.com/content/experience-fragments/aig/america-canada/us_aig/en/header/master/_jcr_content/root/responsivegrid_1958828262/responsivegrid_copy/container_copy_copy/container_897891850/image_409587976.coreimg.png/1677180907520/icon-aig-logo-white.png" alt="AIG" width="89" height="48"/></a>
                </h3>
                <div class="detail"><code class="detail">
                    &#123;
                    <div>
                        <p>
                            &emsp;&emsp;<span class="jobTitle">"Title"</span>&#58;&nbsp;
                            <span class="jobValue">"Software Engineer &#40;Onsite at AIG&#41;"</span>
                            <div></div>
                            &emsp;&emsp;<span class="jobDuties">"Job Duties"</span>&#58;&nbsp;&#91;
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Designed and developed a batch service for files transferring between servers"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Maintained and enhanced e-policy generating batch service by C#"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Collaborated and reviewed offshore teams the code and monitor the web application"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Provided troubleshooting and ongoing maintenance for the existing web application"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Enhacned and developed new features and pages to existing web application"
                            </span>
                            <br></br>
                            &emsp;&emsp;&#93;
                        </p>
                    </div>
                    &#125;
                </code></div>
            </div> 

            <div class="experience">
                <h3>Automated Systems (H.K.) Limited 
                    <code>July 2019 – June 2022</code>
                </h3>
                <div class="detail"><code class="detail">
                    &#123;
                    <div>
                        <p>
                            &emsp;&emsp;<span class="jobTitle">"Title"</span>&#58;&nbsp;
                            <span class="jobValue">"Programmer"</span>
                            <div></div>
                            &emsp;&emsp;<span class="jobDuties">"Job Duties"</span>&#58;&nbsp;&#91;
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Developed a web application and assisted in development of the REST API"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Maintained existing public web applications and internal web application"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Collaborated with end-users to define application requirements"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Created stored procedures for data preparation of reports generate with Crystal Report"
                            </span>
                            <br></br>
                            &emsp;&emsp;&#93;
                        </p>
                    </div>
                    &#125;
                </code></div>
                <h3>Public web services maintained and developed during working experience</h3>
                {
                //<a href="#!" class="link-style" onClick={() => openPopup('https://www.eapp.gov.hk/en/')}>EAPP</a>&emsp;&emsp; 
                //<a href="#!" class="link-style" onClick={() => openPopup('https://www.cspe.edu.hk/en/')}>Concourse</a>&emsp;&emsp;
                //<a href="#!" class="link-style" onClick={() => openPopup('https://feddcs.cspe.edu.hk/')}>FEDDCS</a>&emsp;&emsp;
                //<a href="#!" class="link-style" onClick={() => openPopup('https://www.vpet.edu.hk/en/')}>VPET</a>  
                }
                <a href={`${config.LINK.EAPP}`} class="link-style" target="_blank" rel="noopener noreferrer" >EAPP</a>&emsp;&emsp; 
                <a href={`${config.LINK.CONCOURSE}`} class="link-style" target="_blank" rel="noopener noreferrer" >Concourse</a>&emsp;&emsp;
                <a href={`${config.LINK.FEDDCS}`} class="link-style" target="_blank" rel="noopener noreferrer" >FEDDCS</a>&emsp;&emsp;
                <a href={`${config.LINK.VPET}`} class="link-style" target="_blank" rel="noopener noreferrer" >VPET</a> 
            </div> 

            <h2 class="pageSubHeader">Relevant Customer Service Experience</h2>
            <div class="experience">
                <h3>Peak Tramways Company Limited
                    <code>Aug 2022 – Sep 2024</code>
                </h3>
                <a href="https://www.thepeak.com.hk/en" target="_blank" rel="noopener noreferrer" >
                <img src="https://www.thepeak.com.hk/sites/peak/files/2025-01/The%20peak%20tram_option%202_ENG.png" class="image_full" alt="PeakTram" width="1000" height="450"/>
                <img src="https://www.thepeak.com.hk/sites/peak/files/2022-06/Peak%20Tram%20315%20x%20196%20%282%29.png" class="image_mobile" alt="PeakTram" width="315" height="196"/></a>
                <div class="detail"><code class="detail">
                    &#123;
                    <div>
                        <p>
                            &emsp;&emsp;<span class="jobTitle">"Title"</span>&#58;&nbsp;
                            <span class="jobValue">"Customer Service Assistant"</span>
                            <div></div>
                            &emsp;&emsp;<span class="jobDuties">"Job Duties"</span>&#58;&nbsp;&#91;
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Assist customers with payment transactions at service counters, sales of products"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Respond to customer inquiries, complaints, and feedback, providing effective solutions"
                            </span>,
                            <br></br>
                            <span class="jobValue">
                                &emsp;&emsp;&emsp;&emsp;"Manage crowd control to ensure passenger safety and enhance the overall customer experience."
                            </span>
                            <br></br>
                            &emsp;&emsp;&#93;
                        </p>
                    </div>
                    &#125;
                </code></div>
            </div> 
        </section>
    );
}

export default Experience;