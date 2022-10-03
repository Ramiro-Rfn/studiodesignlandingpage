import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';

import { Card } from '../components/Card/Index';

import styles from '../styles/Home.module.scss';

function Home(){
 
  return (
      <>
        <Head>
           <title>Studio Design</title>
        </Head>
        <div>
          <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
              <img src="/assets/logo.svg" alt="logo A+ Studio" />

              <nav>
                <ul>
                  <a href=""><li>Home</li></a>

                  <a href=""><li>What We Do</li></a>

                  <a href=""><li>Service</li></a>

                  <a href=""><li>Project</li></a>

                  <a href=""><li>Blog</li></a>

                  <a href=""><li>Contact</li></a>
                </ul>
              </nav>
            </div>
          </header>

          <main>     
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                  <div className={styles.left}>
                    <h1>A Digital Product Agency</h1>

                    <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>

                    <button>Contact Now</button>
                  </div>

                  <div className={styles.right}>
                    
                  </div>
                </div>
            </div>

            <div className={styles.ourClients}>
              <div className={styles.content}>
                <div>
                  <h3>Our Client</h3>

                  <p>Several selected clients, who already believe in our service.</p>
                </div>

                <div className={styles.right}>
                  <a href="">
                    <img src="assets/Google-logo.svg" alt="Google logo" />
                  </a>

                  <a href="">
                    <img src="assets/Airbnb-logo.svg" alt="Google logo" />
                  </a>

                  <a href="">
                    <img src="assets/Uber-Eats-logo.svg" alt="Google logo" />
                  </a>

                  <a href="">
                    <img src="assets/Amazon-logo.svg" alt="Google logo" />
                  </a>
                </div>
              </div>
            </div>


            <div className={styles.service}>
                <div className={styles.serviceContent}>
                  <div className={styles.left}>
                    <h2>How can we help your Business?</h2>

                    <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
                  </div>

                  <div className={styles.right}>
                    <div>
                      <Card 
                        color='#F1F7FF'
                        className='one' 
                        icon='box.svg'
                        title='Business Idea Planning'
                        description='We present you a proposal and discuss niffty-gritty like'
                      />                      
                      
                      <Card 
                        color='#FFF2F8'
                        className='two'
                        icon='code.svg'
                        title='Development Website and App'
                        description='Communication protocols apart from engagement models'
                      />
                    </div>


                    <div>
                      <Card 
                        color='#FFF7E3'
                        className='three'
                        icon='empty-wallet.svg'
                        title='Financial Planning System'
                        description='Protocols apart from aengage models, pricing billing'
                      />
                      <Card 
                        color='#DEFFEE'
                        className='four'
                        icon='chart-square.svg'
                        title='Market Analysis Project'
                        description='Protocols apart from aengage models, pricing billing'
                      />
                    </div>
                  </div>
                </div>
            </div>


            <div className={styles.project}>
                <div className={styles.projectContent}>
                  <div className={styles.left}>
                  <iframe width="420" height="315"
                  src="https://www.youtube.com/embed/ckumPkfEZQY">
                  </iframe>

                    <button>
                    </button>
                  </div>
                  
                  <div className={styles.right}>
                    <h1>Great Digital Product Agency since 2016 </h1>

                    <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
                  </div>
                </div>
            </div>

            <div className={styles.newsletterContainer}>
              <div className={styles.newsletterContent}>
                <div className={styles.left}>
                  <h3>Subscribe Newsletter</h3>
                  <p>I will update good news and promotion service not spam</p>
                </div>

                <div className={styles.formContainer}>
                  <form action="">
                    <input type="text" placeholder='Enter your email address' />
                    <button>Contact Now</button>
                  </form>
                </div>
              </div>
            </div>
          </main>

          <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
              <div className={styles.top}>
                <div className={styles.left}>
                  <a href="">
                    <img src="/assets/logo.svg" alt="logo" />
                  </a>

                  <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>

                  <div className={styles.socialMedias}>
                    <a href="">
                      <FiFacebook color='#fff' size={20}/>
                    </a>

                    <a href="">
                      <FiTwitter color='#fff' size={20}/>
                    </a>

                    <a href="">
                      <FiLinkedin color='#fff' size={20}/>
                    </a>
                  </div>
                </div>

                <div className={styles.right}>
                  <div>
                    <h4>What We Do</h4>
                    <p>Web Disign</p>
                    <p>App Design</p>
                    <p>Social Media Manage</p>
                    <p>Market Analysis Project</p>
                  </div>

                  <div>
                    <h4>Company</h4>
                    <p>Abaut Us</p>
                    <p>Career</p>
                    <p>Become Investor</p>
                  </div>

                  <div>
                    <h4>Support</h4>
                    <p>FAQ</p>
                    <p>Policy</p>
                    <p>Business</p>
                  </div>

                  <div>
                    <h4>Contact</h4>
                    <p>WhatsApp</p>
                    <p>Support 24</p>
                  </div>
                </div>
              </div>

              <div className={styles.bottom}>
                <p>Copyright © 2022 Avi Yansah</p>
              </div>
            </div>
          </footer>
        </div>
      </>
  )  
}

export default Home;


export const getStaticProps: GetStaticProps = async () => {


  return {
    props : {
      
    }
  }
}
