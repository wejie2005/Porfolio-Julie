import './App.css'
import profilePic from './assets/me.jpg';
import dermaImg from './assets/derma.png';
import trImg from './assets/tr.png';
import brgyImg from './assets/barangay.png';
import brokImg from './assets/brok.png';
import banImg from './assets/banana.png';
import pianoImg from './assets/piano.jpg';
import dbCert from './assets/db-cert.png';
import htmlCert from './assets/html-css-cert.png';
import ateneoCert from './assets/ateneo-cert.png';
import analyticsCert from './assets/Analytics.png';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">MyPortfolio.</div>
        <div className="links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
           <a href="#skills">Skills</a>
           <a href="/Pesana_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
           <a href="#certifications">Certifications</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
       
          <div className="hero-text">
            <h1>Hi, I'm Julie! 👋</h1>
            <p>
              As a Computer Science student, I am incredibly interested in exploring roles in software engineering and data analytics. 
              I believe that if given the opportunity to intern at your company, I can turn my classroom knowledge into real support for your team. I am looking for a place where I can learn from experienced engineers, take on real challenges, and grow into a strong developer who adds value to your projects.
            </p>
          </div>

          <div className="hero-image">
            <img 
              src={profilePic}
              alt="Julie's Profile" 
              className="profile-img" 
            />
          </div>

        </div>
      </section>

      <section className="tech-stack">
        <section id="skills">
        <h3 style={{textAlign: 'center', marginBottom: '20px', color: '#64748b'}}>Technologies I Use</h3>
          <p style={{ 
           textAlign: 'center', 
           marginBottom: '30px', 
           color: '#94a3b8', 
           maxWidth: '1000px', 
           margin: '0 auto 30px auto', 
           lineHeight: '1.5',
           fontSize: '0.95rem'
           }}>
           These are the technologies I have used to build projects and refine my skills. <br>
           </br>
           I am continuously exploring these tools, as well as learning new programming languages to expand my toolset.
          </p>
        <TechMarquee />
      </section>
    </section>

      <section id="projects">
  <h2 className="section-title">Recent Projects</h2>
  <div className="projects-grid">
    <ProjectCard 
      title="Derma Agent Triage" 
      description="Medical triage system that combines Computer Vision (OCR) and Retrieval-Augmented Generation (RAG) to identify skin irritants and provide clinical context."
      tags={['Python', 'Hugging Face', 'Gradio', 'Llama 3.3']}
      link="https://huggingface.co/spaces/JulsAlvarez2005/derma-agent-triage"
      image={dermaImg} 
    />
    
    <ProjectCard 
      title="Studio Management Tracker" 
      description="Designed to streamline operations for audio recording studios."
      tags={['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS']}
      link="https://github.com/JulsAlvarez2005/TR-Studio-Management-System"
      image={trImg} 
    />

    <ProjectCard 
      title="Sample Barangay Appointment System" 
      description="A web application that allows residents to book appointments for various barangay services, such as ID applications, permits, and consultations."
      tags={['Node.js', 'Supabase', 'React', 'HTML', 'CSS','TypeScript']}
      link="https://bb-barangay-appointment-system-project.vercel.app/"
      image={brgyImg}  
    />

     <ProjectCard 
      title="Banana Leaf Disease Detection" 
      description="Computer vision system utilizing CNNs to instantly identify banana crop infections from leaf images and mitigate agricultural yield loss."
      tags={['Node.js', 'Supabase', 'React', 'HTML', 'CSS','TypeScript']}
      link="https://github.com/wejie2005/Banana-AI-Classification-Detection"
      image={banImg}  
    />

    <ProjectCard 
      title="Brokenshire Hotel Management System" 
      description="Database-driven management system that optimizes hospitality workflows by managing guest reservations, service logs, and automated billing generation."
      tags={['Laravel', 'SQL', 'React', 'PHP', 'React']}
      link="https://github.com/jsh24776/BrokenShire-Hotel"
      image={brokImg}  
    />

    <ProjectCard 
      title="Air Piano" 
      description="Gesture-controlled music application utilizing computer vision to map hand tracking landmarks into real-time audio frequencies, simulating a physical piano keyboard in mid-air."
      tags={['C++']}
      link=""
      image={pianoImg}  
    />
  </div>

        <div className="more-projects" style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: '#64748b', marginBottom: '15px' }}>
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/wejie2005" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
            style={{ 
              backgroundColor: '#1e293b', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Explore my GitHub &rarr;
          </a>
        </div>
      </section>

      <Credentials />

      <footer id="contact" className="contact">
        <h2>Let's Connect</h2>
        <p className="contact-text">
          Open to internship roles for Summer 2026. <br/>
          Feel free to reach out!
        </p>

        <div className="social-icons">

          <a 
            href="https://github.com/wejie2005" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>

          <a 
            href="https://www.linkedin.com/in/julie-anne-pesa%C3%B1a-667628362/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pesanajulieanne@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
              alt="Email" 
            />
          </a>
          
          <a 
            href="https://www.facebook.com/itsmejlieanne" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
          </a>
        </div>
        
        <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '20px'}}>
          © 2026. Built with React & TypeScript.
        </p>
      </footer>
    </div>
  )
}

const Credentials: React.FC = () => {
  return (
    <section id="certifications" className="credentials-section" style={{ marginTop: '80px', marginBottom: '40px' }}>
      <h2 className="section-title">Verified Credentials & Training</h2>
      
      {/* --- CERTIFICATIONS GROUP --- */}
      <h3 style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'center' }}>
        Professional Certifications
      </h3>
      <div className="badge-showcase-grid" style={{ marginBottom: '50px' }}>
        
        {/* Badge 1: ITS Databases */}
        <div className="badge-holder-card certification-circle">
          {/* Hover Image Layer */}
          <img src={dbCert} alt="ITS Databases Certificate" className="certificate-hover-image" />
          
          <div className="badge-inner-content">
            <div className="badge-graphic-ring certification-ring">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="badge-vector-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <h4 className="badge-main-title">ITS: Databases</h4>
            <p className="badge-issuers">Certiport / Pearson VUE</p>
            <span className="badge-mini-tag">Data Engineering</span>
          </div>
        </div>

        {/* Badge 2: ITS HTML and CSS */}
        <div className="badge-holder-card certification-circle">
          {/* Hover Image Layer */}
          <img src={htmlCert} alt="ITS HTML and CSS Certificate" className="certificate-hover-image" />
          
          <div className="badge-inner-content">
            <div className="badge-graphic-ring certification-ring">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="badge-vector-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <h4 className="badge-main-title">ITS: HTML and CSS</h4>
            <p className="badge-issuers">Certiport / Pearson VUE</p>
            <span className="badge-mini-tag">Front-End</span>
          </div>
        </div>

       
        {/* --- GOOGLE ANALYTICS --- */}
      <div className="badge-holder-card certification-circle">
          {/* Hover Image Layer */}
          <img src={analyticsCert} alt="Google Data Analytics Certificate" className="certificate-hover-image" />
          
          <div className="badge-inner-content">
            <div className="badge-graphic-ring certification-ring">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="badge-vector-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <h4 className="badge-main-title">Google Data Analytics</h4>
            <p className="badge-issuers">Google / Coursera</p>
            <span className="badge-mini-tag">Data Analytics</span>
          </div>
        </div>
        
      </div>

      {/* --- TRAININGS GROUP --- */}
      <h3 style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'center' }}>
        Executive & Specialized Training
      </h3>
      <div className="badge-showcase-grid">
        
        {/* Badge 4: Ateneo AI in Business Analytics */}
        <div className="badge-holder-card ateneo-circle training-full-width">
          {/* Hover Image Layer */}
          <img src={ateneoCert} alt="Ateneo Analytics Certificate" className="certificate-hover-image" />
          
          <div className="badge-inner-content">
            <div className="badge-graphic-ring ateneo-ring">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="badge-vector-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0V3m7.5 13.5V3M9 6h3.75m-.75 3h3.75M9 12h3.75" />
              </svg>
            </div>
            <h4 className="badge-main-title">AI in Business Analytics</h4>
            <p className="badge-issuers">Ateneo de Manila University</p>
            <span className="badge-mini-tag training-tag">Artificial Intelligence & Strategy</span>
          </div>
        </div>

      </div>
    </section>
  );
};

const TechMarquee = () => {
  const skills = [
    { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Google Colab", img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Hugging Face", img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "Streamlit", img: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
    { name: "Gradio", img: "https://raw.githubusercontent.com/gradio-app/gradio/main/readme_files/gradio.svg" },
    { name: "Jupyter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div key={`duplicate-${index}`} className="skill-item">
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, link, image }: ProjectProps) => {
  return (
    <article className="project-card">
      {/* New Image Wrapper Box */}
      <div className="project-card-image-wrapper">
        <img 
          src={image} 
          alt={`${title} Project Screenshot`} 
          className="project-card-screenshot" 
        />
      </div>
      
      {/* Existing card content layout below the image */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="tags">
          {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          View Project &rarr;
        </a>
      </div>
    </article>
  );
}

export default App
