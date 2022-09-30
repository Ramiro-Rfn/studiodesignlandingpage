import Head from 'next/head';

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
          </main>
        </div>
      </>
  )  
}

export default Home;
