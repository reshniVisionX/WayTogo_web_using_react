import React ,  { useState , useEffect } from 'react';
import '../css/resources.css';
const Resource = () => {
  const [activeTab, setActiveTab] = useState(null);

  
  const openTab = (tabName) => {
   
    setActiveTab(null);

    
    setActiveTab(tabName);
  };
  useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  });
  return (
    <div>
      <header>
        <h1>Immigration Hub</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#blog">Alumni Testimonials</a></li>
          <li><a href="#chat">Live Chat</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#links">Upcoming Programs</a></li>
        </ul>
      </nav>

      <section id="blog">
        <h2>Our Alumni Testimonials</h2>

        <div className="container-blog">
          <img src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?w=996&t=st=1705380034~exp=1705380634~hmac=44ca3ec3374a0c01c599dbed093b3adb47a8c0eab59a82a9a30e2f4420b88ba1"
            alt="Avatar" style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Rebacca </span>Humber College ,Toronto, Canada</b>
          <p>"I had an amazing experience at Humber College in Toronto. The academic environment and cultural exposure
            exceeded my expectations. John Doe played a crucial role in guiding me through challenges, ensuring a
            smooth transition into the Canadian education system."</p>
        </div>

        <div className="container-blog">
          <img src="https://img.freepik.com/free-photo/handsome-young-curly-haired-man-working-laptop-computer-standing-isolated-white-wall_231208-1164.jpg?w=996&t=st=1705379917~exp=1705380517~hmac=459dcd624785beb649932694f506f72b183c2a1cc5e5ead22a833b9ed971890a"
            alt="Avatar" style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Chris Fox </span> University of Sydney, Australia</b>
          <p>"My experience at the University of Sydney was truly enriching. The vibrant academic community and
            picturesque surroundings created a perfect learning environment. John Doe's expertise and support were
            instrumental in making my study abroad journey at Sydney University a memorable one."</p>
        </div>

        <div className="container-blog">
          <img src="https://www.pngall.com/wp-content/uploads/8/Student-PNG-Photo.png" alt="Avatar"
            style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Susan</span> Langara College ,Vancouver, Canada</b>
          <p>"My time at Langara College in Vancouver was marked by educational excellence and cultural diversity.
            John Doe's timely assistance and valuable insights were invaluable, steering me away from potential
            web-related challenges and ensuring a successful academic endeavor in Canada."</p>
        </div>

        <div className="container-blog">
          <img src="https://thumbs.dreamstime.com/b/beautiful-student-girl-books-isolated-white-background-43442234.jpg"
            alt="Avatar" style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Karan</span>Harvard University, America</b>
          <p>"My academic pursuit at Harvard University was a transformative experience, filled with intellectual
            growth and diverse opportunities. John Doe's unparalleled guidance and expertise played a pivotal role
            in making my journey at one of America's prestigious institutions a resounding success."</p>
        </div>

        <div className="container-blog">
          <img src="https://img.freepik.com/free-photo/front-view-young-female-student-red-shirt-black-bag-holding-pen-copybooks-smiling-white_140725-16631.jpg?w=996&t=st=1705380223~exp=1705380823~hmac=66846a85a34ecbaab2e7f45ba6bb5cff0786492f06d53e5e58ad1a4be9756526"
            alt="Avatar" style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Jessica</span> California Institute of Technology (Caltech), USA</b>
          <p>"My academic venture at Caltech was characterized by cutting-edge research and innovation. The
            challenging yet rewarding environment provided an excellent platform for my growth. John Doe's
            unwavering support and guidance were instrumental throughout my journey at Caltech."</p>
        </div>
      </section>

      <section id="chat">
        <h2>Chat with our Alumni</h2>
        <p style={{fontWeight:'bold'}}>You can select person by country or by university or by name from the testimonial to start chatting </p>
        <div className="chat">
          <div className="container1">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">First Name</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
              </div><br />
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
              </div><br />
              <div className="row">
                <div className="col-25">
                  <label htmlFor="country">Country</label>
                </div>
                <div className="col-75">
                  <select id="country" name="country" >
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="Ireland">Ireland</option>
                    <option value="newzealand">New Zealand</option>
                    <option value="America">America</option>
                    <option value="Switchzerland">Switchzerland</option>
                    <option value="uk">UK</option>
                  </select>
                </div>
              </div><br />
              <div className="row">
                <div className="col-25">
                  <label htmlFor="alumni">Alumni Name</label>
                </div>
                <div className="col-75">
                  <input type="text" id="alumni" name="alumni" placeholder="Enter alumni name.(optional)" />
                </div>
              </div><br />
              <div className="row">
                <div className="col-25">
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="col-75">
                  <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '100px' }}></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>

          <div className="text-plp">
            <div className="container2 light">
              <img src="https://w7.pngwing.com/pngs/99/557/png-transparent-computer-icons-avatar-avatar-angle-heroes-recruiter.png" alt="Avatar" style={{ width: '100%' }} />
              <p>Hello. How long have you been working?</p>
              <span className="time-right">11:00</span>
            </div>

            <div className="container2 darker">
              <img src="https://cdn2.iconfinder.com/data/icons/business-man-8/512/7-1024.png" alt="Avatar" className="right" style={{ width: '100%' }} />
              <p>Hey! I'm working since 2 years.</p>
              <span className="time-left">11:01</span>
            </div>

            <div className="container2 light">
              <img src="https://w7.pngwing.com/pngs/99/557/png-transparent-computer-icons-avatar-avatar-angle-heroes-recruiter.png" alt="Avatar" style={{ width: '100%' }} />
              <p>Sweet! Is there any work pressure?</p>
              <span className="time-right">11:02</span>
            </div>

            <div className="container2 darker">
              <img src="https://cdn2.iconfinder.com/data/icons/business-man-8/512/7-1024.png" alt="Avatar" className="right" style={{ width: '100%' }} />
              <p> nope! You can always take your time .</p>
              <span className="time-left">11:05</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <h2>Frequently Asked Questions ?</h2>
        <p>Check if your question is asked by someone else.</p>
        <button type="button" className="collapsible">Who will be answering?</button>
        <div className="content-faq">
          <p>Our Alumni and present studying students in our institution in abroad and our consultancy teams too.</p>
        </div>

        <p>Best Questions asked by students.</p>

        <button type="button" className="collapsible">What are the best consultancies for studying abroad?</button>
        <div className="content-faq">
          <p>There are several reputable consultancies like ABC Consultants, XYZ Overseas, etc. Make sure to research and choose one that fits your needs.</p>
        </div>

        <button type="button" className="collapsible">Which exams are required for studying abroad?</button>
        <div className="content-faq">
          <p>Common exams include IELTS, TOEFL, GRE, GMAT, etc. The specific exams depend on the country and the course you are applying for.</p>
        </div>

        <button type="button" className="collapsible">How can I prepare for language proficiency exams?</button>
        <div className="content-faq">
          <p>You can join language classes, use online resources, and practice regularly to improve your language skills for exams like IELTS and TOEFL.</p>
        </div>

       
      </section>

      <section id="links">
      <h2>Upcoming programs of WayTogo</h2>
      <p style={{ fontWeight: 'bold' }}>Grab your seats</p>
      <div className="row2">
        <div
          className="column-prog"
          onClick={() => openTab('b1')}
          style={{
            color: 'black',
            background: 'rgb(205, 203, 203)',
            border: '2px solid black',
            margin: '2px',
          }}
        >
          Ontario Provincial Nominee Program
        </div>
        <div
          className="column-prog"
          onClick={() => openTab('b2')}
          style={{
            color: 'black',
            background: 'rgb(205, 203, 203)',
            border: '2px solid black',
            margin: '2px',
          }}
        >
          Alberta Advantage Immigration Program
        </div>
        <div
          className="column-prog"
          onClick={() => openTab('b3')}
          style={{
            color: 'black',
            background: 'rgb(205, 203, 203)',
            border: '2px solid black',
            margin: '2px',
          }}
        >
          Express Entry via Provincial Nominee Program
        </div>
      </div>
    </section>

    <div className="view"></div>
    <div
      id="b1"
      className={`containerTab ${activeTab === 'b1' ? 'active' : ''}`}
      style={{ background: 'rgb(218, 249, 252)', color: 'black' }}
    >
      <span onClick={() => setActiveTab(null)} className="closebtn">
        &times;
      </span>
      <h2>Ontario Provincial Nominee Program</h2>
      <p><b>Location:</b> Chennai, <br /><strong>When:</strong> April 15, 2023<br /><strong>Timing:</strong> 10:00 AM - 4:00 PM</p>
    </div>

    <div
      id="b2"
      className={`containerTab ${activeTab === 'b2' ? 'active' : ''}`}
      style={{ background: 'rgb(209, 243, 247)', color: 'black' }}
    >
      <span onClick={() => setActiveTab(null)} className="closebtn">
        &times;
      </span>
      <h2>Alberta Advantage Immigration Program</h2>
      <p><b>Location:</b> Coimbatore, Kodesia<br /><strong>When:</strong> June 10, 2023<br /><strong>Timing:</strong> 11:00 AM - 5:00 PM</p>
    </div>

    <div
      id="b3"
      className={`containerTab ${activeTab === 'b3' ? 'active' : ''}`}
      style={{ background: 'rgb(208, 245, 249)', color: 'black' }}
    >
      <span onClick={() => setActiveTab(null)} className="closebtn">
        &times;
      </span>
      <h2>Express Entry via Provincial Nominee Program</h2>
      <p><b>Location:</b> Karnataka, Mg Colony<br /><strong>When:</strong> May 20, 2023<br /><strong>Timing:</strong> 9:00 AM - 3:00 PM</p>
    </div>
    </div>
  );
};

export default Resource;
