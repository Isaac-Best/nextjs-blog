import Image from 'next/image'; 

import classes from './hero.module.css';


function Hero(){
    return (
    <section className={classes.hero}>
        <div className={classes.image}> 
        <Image 
            src="/images/site/isaac.jpg" 
            alt="An image showing Isaac" 
            width={300} 
            height={300}
        />  
        </div>
        <h1>Hi, I'm Isaac</h1>
        <p>From tutoring organic chemistry at UP to working as a teaching assistant for discrete math and other CS classes at 
            OSU, my journey's been all about helping others learn and grow - there's something awesome about sharing that 'aha!' 
            moment. But life isn't all about textbook's I've also got some cool projects going on too. So here's the deal: 
            my blog is about tutorials and sneak peaks into my other projects as I write about my journey and make learning a blast! 
        </p>
    </section>
    );
}

export default Hero; 