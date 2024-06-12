import React from 'react'
import kidpic from '../assets/kid2.png'
import './Home.css' 

export const Home = () => {
  return (
    <div className='container'>
        <div className="homeleft">
            <div className='schooltitle'>Ram Sumitra Bal Niketan Digwar</div>
            <br></br>
            <div className='schooldesc'>Ram Sumitra Bal Niketan Digwar is a renowned educational institution dedicated to nurturing young minds and fostering future leaders. With a rich history of academic excellence, our school provides a holistic learning environment where students are encouraged to explore their potential and develop essential skills. Our experienced faculty members serve as mentors, guiding students towards academic success while instilling values of integrity and compassion. Through a diverse range of academic programs and extracurricular activities, we empower students to become confident, well-rounded individuals ready to make a positive impact in society. At Ram Sumitra Bal Niketan Digwar, we prioritize a supportive and inclusive school culture that values collaboration, teamwork, and respect for diversity, ensuring every student feels valued and accepted.</div>
        </div>
        <div className="homeright">
            <img src={kidpic} alt="" srcset="" />
        </div>
    </div>
  )
}
