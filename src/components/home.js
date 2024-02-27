import React, { useEffect } from 'react';
import '../css/home.css';

let chatPopupVisible = false;

function toggleChatPopup() {
  const chatPopup = document.getElementById('chatPopup');
  if (chatPopup) {
      chatPopup.style.display = chatPopupVisible ? 'none' : 'block';
      chatPopupVisible = !chatPopupVisible;
  }
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const userMessages = document.getElementById('userMessages');
  const message = chatInput.value.trim();

  if (message !== '') {
      const newMessage = document.createElement('p');
      newMessage.textContent = message;
      userMessages.appendChild(newMessage);
      chatInput.value = '';
  }
}
const DownloadPDFButton = () => {
    const handleDownload = () => {
     
      const pdfLink = 'https://www.mha.gov.in/PDF_Other/AnnexI_01022018.pdf';
      const link = document.createElement('a');
      link.href = pdfLink;
      link.target = '_blank'; 
      link.rel = 'noopener noreferrer';
  
     
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      });
  
      link.dispatchEvent(clickEvent);
    };
    handleDownload();
};
  
const Home = () => {
  useEffect(() => {
      setTimeout(toggleChatPopup, 2000);
  }, []);



  return (
    <div>
     
      <div className="background-image">
        <img src="images/head.png" alt="bg-img"/>
        <div className="text">REACH YOUR COUNTRY</div>
    </div>

    <div className="service-container">
        <div className="service-header">
            <h2><span style={{color:'#3FD2C7'}}>Our </span>Services</h2>
        </div>

        <div className="service-box">
            <div className="sbox1">
                <img src="images/5920.jpg" alt="Service 1 Logo"/>
                <h2>Career Counselling</h2>
                <p>Expert guidance to help you choose the right career path for your overseas education journey.</p>
            </div>

            <div className="sbox1">
                <img src="images/5920.jpg" alt="Service 2 Logo"/>
                <h2>Admission Guidance</h2>
                <p>Assistance in navigating the admission process, ensuring you meet all requirements for your desired
                    course and university.</p>
            </div>

            <div className="sbox1">
                <img src="images/5920.jpg" alt="Service 3 Logo"/>
                <h2>Finance Assistance</h2>
                <p>Guidance on financial planning, including information on scholarships, loans, and budgeting for your
                    studies abroad.</p>
            </div>

            <div className="sbox1">
                <img src="images/5920.jpg" alt="Service 4 Logo"/>
                <h2>Travel Assistance</h2>
                <p>Arrangement of travel logistics, ensuring a smooth journey from your home country to your study
                    destination.</p>
            </div>

            <div className="sbox1">
                <img src="images/5920.jpg" alt="Service 5 Logo"/>
                <h2>Visa Assistance</h2>
                <p>Support with the visa application process, ensuring you have all the necessary documentation for a
                    successful application.</p>
            </div>

            <div className="sbox1">
                <img src="images/5920.jpg" alt="Service 6 Logo"/>
                <h2>Popular Courses</h2>
                <p>Information on trending courses and programs offered by renowned universities abroad, tailored to
                    your academic interests.</p>
            </div>
        </div>
    </div>
    <div className="slider-container-home">
        <div className="slider-home">
            <div className="slide-track">
                <div className="slide1">
                    <img src="logos/australia.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/canada.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/england.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/europe.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/france.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/ireland.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/newzealand.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="logos/switcherland.png" height="100" width="250" alt="" />
                </div>
                <div className="slide1">
                    <img src="http://clipart-library.com/images_k/usa-flag-transparent-background/usa-flag-transparent-background-25.png" height="100" width="250" alt="" />
                </div>

            </div>
        </div>
    </div>

    <br/><br/>
    <div className='finders'>
    <h2>
        Exclusive Immigration Tool by WayTogo</h2>
    <div className="row-finder">
        <div className="column-finder">
            <div className="card-finder">
                <h3>PNP Finder</h3>
                <img src="https://icons.iconarchive.com/icons/zerode/plump/256/Search-icon.png" alt="pnp"/>
                <hr/>
                <p>PNP finder helps you find the Provincial Nominee Program status of all the provinces and territories
                    in Canada which are presently active.</p>
                <button type="button" id="btn">Explore Now</button>
            </div>
        </div>

        <div className="column-finder">
            <div className="card-finder">
                <h3>Canada CRS Calculator</h3>
                <img src="https://icon-library.com/images/icon-calculator/icon-calculator-4.jpg" alt="pnp"/>
                <hr/>
                <p>CRS Calculator helps you calculate the Comprehensive Ranking System (CRS) score with the help of our
                    immigration experts.</p>
                <button type="button" id="btn">Explore Now</button>
            </div>
        </div>

        <div className="column-finder">
            <div className="card-finder">
                <h3> Australia PR Calculator</h3>
                <img src="https://i.pinimg.com/originals/e5/ef/74/e5ef749a80abcf3d137cd193e6404566.png" alt="pnp"/>
                <hr/>
                <p>Australia PR Calculator can help you find your possibilities of obtaining a PR with the help of our
                    immigration experts.</p>
                <button type="button" id="btn">Explore Now</button>
            </div>
        </div>

    </div>
    </div>
    <br/><br/>

    <div className="scroll">
        <h2>Visa Process</h2>
        <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
        </div>
    </div>
    <div className="visa">

        <div className="content-visa">
            <h2>5 things an immigration officer checks in your student visa </h2>
            <dl>
            <dt><b>1. Funding status</b>  </dt>
            <dd>Each country has a very specific financial requirement for granting student visa and hence factors like
                source of funding, financial sponsors, acceptable financial institutions, etc., vary sharply from
                country to country. It is important that you spend a good amount of time in understanding these specific
                requirements and start working on your financial documents much before applying for your student visa.
            </dd>
          
            <dt><b>2. Bonafide documents</b>  </dt>
            <dd>Immigration bodies have access to many sources to verify the documents you submit with your visa
                application. Any potential fraud can lead to visa refusals besides putting any future visa applications
                into high risk category for other countries as well. So, I will advise you to ensure that you submit
                only genuine and verified documents with your visa application to be granted approval. </dd>
          
            <dt><b>3. Genuineness of seeking student visa</b>  </dt>
            <dd>Student visa is a temporary visa for you to seek entry into a country to study and obtain a degree. You
                need to demonstrate your genuine intention of entering into a country for the purpose of quality
                education and how that will add value to your career. Some countries assess the genuineness of your
                application based on documents that you have provided, some may ask for a specific Statement of Purpose
                (SOP) for visa while some may conduct a telephonic or face-to-face interview. </dd>
            
            <dt><b>4. Personal ties and circumstances</b>  </dt>
            <dd>Some immigration bodies look more into the details of your personal ties with your home country,
                personal circumstances and economic connections. They prefer to understand what motivates you to return
                to your home country after the completion of your course. </dd>
           
            <dt><b>5. Health checks are crucial</b>  </dt>
            <dd>Most immigration bodies ask you to undertake a medical examination prior to applying for a student visa.
                This is because many countries have their own health requirements which they want met with before they
                allow anyone to enter their territory. The type of health checks varies with respect to length of stay
                and destination country.</dd>
           
            </dl>
            <p>While you can find all the checklist and information on the immigration websites, it might be difficult
                for you to comprehend some of the key information. I highly recommend that you take free visa
                counselling from an WayTogo expert who can guide you towards preparing your visa application. Why take a
                chance with your visa application, right?</p>
        </div>
        <div className="side_image">
            <div className="rowa">
                <img src="images/fly.jpg" alt ="img"/>
            </div>
            <div className="rowb">
                {/* <img src="https://images8.alphacoders.com/786/786525.jpg" alt="img" style={{display: 'inline'}}/> */}
                <button type="button" id="vi-cal" style={{display: 'inline' ,width:'200px'}}>Call</button><br/>
                <button type="button" id="button" style={{width:'400px'}}>Talk to our Visa Expert</button>
                <p>Download this guide and read it offline to know more</p>
                <button onClick={DownloadPDFButton}>Download PDF</button>
            
            </div>
        </div>
    </div>
    

    <h1 style={{fontSize: '42px',fontWeight: 'bold',textAlign: 'center'}}>Get Free Consultation</h1>
    <h2 style={{fontSize: '36px',fontWeight: 'bold',textAlign: 'center'}}>Want to get in touch? We would love to hear from you.
    </h2><br/>
    <div className="flex-item">
        <div className="form-reg">
            <form method="get">
                <fieldset>
                <legend> <b style={{ fontSize: '26px', color: '#0ceedf' }}>Fill the Registration Form</b>
                  </legend>

                    <input type="radio" name="salutation" id="mr" value="mr"/>Mr
                    <input type="radio" name="salutation" id="mrs" value="mrs"/>Mrs
                    <input type="radio" name="salutation" id="ms" value="ms"/>Ms
                    <br/><br/>
                    <input type="text" style={{height:'25px'}} name="name" id="id" placeholder="Name"
                        pattern="^[a-zA-z]{4,20}[.]?[a-zA-Z]{0,3}$" title="Invalid Name" required/><br/><br/>
                    <input type="text" style={{height :'25px'}} name='email' id="email" placeholder="Email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Invalid Email id"
                        required/><br/><br/>
                    <input type="password" name="pass" id="pass" placeholder="Password" required/><br/><br/>


                    <input type="tel" name="phone" id="phone" placeholder="+91 (Mobiles)" pattern="[1-9][0-9]{10}"
                        required/><br/><br/>
                    <input type="date" name="dob" id="dob"/><br/><br/>

                    <input type="radio" name="gender" id="m" value="male"/>Male
                    <input type="radio" name="gender" id="f" value="female"/>Female
                    <input type="radio" name="gender" id="o" value="others"/>Others
                    <br/><br/>
                    <textarea type="textarea" name="remark" id="remark"
                        placeholder="Residential address"></textarea><br/>
                    <br/><br/>
                    <select name="city" id="city">
                        <option>----City----</option>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Coimbatore</option>
                        <option>Trichy</option>
                        <option>Madurai</option>
                    </select><br/><br/>

                    <select name="country" id="country">
                        <option>----Preffered Country----</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>America</option>
                        <option>New Zealand</option>
                        <option>Ireland</option>
                        <option>Switcherland</option>
                    </select><br/><br/>

                    <button type="submit" id="button">Submit</button>
                </fieldset>
            </form>
        </div>
        
        <div className="display-item">
            <h1 style={{color: '#0ceedf', textAlign: 'center'}}>Call us Now..!!</h1>
            <div className="flag">
                <img src="http://www.pngall.com/wp-content/uploads/2016/06/Canada-Flag-PNG-Picture.png" alt="img"/>
                <h2>+1 604-688-1320</h2>
            </div>
            <div className="flag">
                <img
                    src="https://www.freepnglogos.com/uploads/france-flag-png/france-flag-transparent-images-only-13.png" alt="img"/>
                <h2>+971-42865134</h2>
            </div>
            <div className="flag">
                <img src="logos/newzealand.png" alt="img"/>
                <h2>+974 30896449</h2>
            </div>
            <div className="flag">
                <img src="https://cdn.pixabay.com/photo/2017/06/20/17/21/international-2423859_960_720.png" alt="img"/>
                <h2>+91-75-94088000</h2>
            </div>
            <div className = "more">
                <img src="http://www.clker.com/cliparts/X/e/X/l/G/M/load-button.svg.hi.png" alt ="img"/>
            </div>
            <br/>
            <button type="submit" id="button">Locate Us</button>
        </div>
    
    <br/><br/>

    
    <div className="chat-popup" id="chatPopup">
                <div className="chat-popup-header">
                    <span className="chat-popup-title">Chat with our mentors</span>
                    <button className="chat-popup-close" onClick={() => toggleChatPopup()}>
                        <b style={{ color: '#170234', float: 'right' }}>x</b>
                    </button>
                </div>
                <div className="chat-popup-body" id="chatBody" style={{ backgroundColor: 'aliceblue' }}>
                    <p><b>Hi..,Feel free to ask your query! We are here to help you</b></p>
                    <p id="userMessages"></p>
                </div>
                <div className="chat-popup-footer">
                    <input type="text" id="chatInput" placeholder="Type your message..." />
                    <button
                        id="btn-chat"
                        onClick={() => sendMessage()}
                        style={{ display: 'inline', backgroundColor: '#0ceedf', color: 'aliceblue' }}
                    >
                        Send
                    </button>
                </div>
            </div>

            <div
                className="floating-chat-circle"
                id="floatingChatCircle"
                onClick={() => toggleChatPopup()}>
            
                <img
                    src="https://icon-library.com/images/chat-icon-png/chat-icon-png-22.jpg"
                    alt="Chat Icon"/>
            </div>
        </div>
    </div>
  );
};


export default Home;
