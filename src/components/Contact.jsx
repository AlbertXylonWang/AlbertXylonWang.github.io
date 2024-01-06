import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

          <div>
        <h2 className = {styles.sectionSubTextLightBig}> Location:</h2>
        <p className={styles.sectionSubTextLight}>Austin, Texas</p>
        <br></br>
        </div>
        <div>
        <h2 className = {styles.sectionSubTextLightBig}> Email:</h2>
        <p className={styles.sectionSubTextLight}>
          
          <a href="mailto: AlbertXylonWang@gmail.com"> AlbertXylonWang@gmail.com</a>
        </p>
        <br></br>
        </div>
        <div>
        <h2 className = {styles.sectionSubTextLightBig}> LinkedIn:</h2>
        <p className={styles.sectionSubTextLight}>
          <a href="https://www.linkedin.com/in/albert-wang-97005a217/"> AlbertXylonWang</a>
        </p>
        </div>          
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
