import React from 'react'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
import { InfoSection, Pricing } from '../../components'



function Home() {
    return (
      <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjTwo} />
        <Pricing/>
        <InfoSection {...homeObjFour} />
      </>
    );
  }
  
  export default Home
