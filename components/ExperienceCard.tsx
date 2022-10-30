import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.div 
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        <Image 
        className="w-32 h-532 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" 
        src="https://cdn.sanity.io/images/ltuexkre/production/90b42ec9f4f479773ffa7fdb808a3f83135db88f-1080x1080.png" 
        alt="" 
        width={128} 
        height={128} 
        />
      </motion.div>
    </article>
  )
}

export default ExperienceCard