import styles from './hero.module.css';
import Image from 'next/image';

function Hero(){
    return (
    <section className={styles.hero}>
        <div className={styles.image}>
            <Image 
            src="/images/site/nad3.jpg" 
            alt='This is my image' 
            width={350} 
            height={300}/>
        </div>
        <h1>Hi ,I'am Nadhir Benslema</h1>
        <p>This is my blog that is developed using next Js</p>

    </section>
    )
}

export default Hero;