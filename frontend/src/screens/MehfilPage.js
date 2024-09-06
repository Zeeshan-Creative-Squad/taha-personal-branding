import React from 'react'
import CommonHeroComponent from '../components/CommonHeroComponent/CommonHeroComponent'
import VisionAndMission from '../components/VisionAndMission/VisionAndMission'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const MehfilPage = () => {
  return (
    <div>
        <CommonHeroComponent 
         Heading="HOME STAGING"
         Para="Convallis vivamus at cras porta nibh velit aliquam eget in faucibus mi tristique aliquam ultrices sit cras nascetur in elementum placerat sed viverra risus in turpis vitae sed est tincidunt vitae."
         backgroundImg="/images/creatives/mehfil-banner.jpg"/>

        <VisionAndMission heading="About" bluespan=" Mehfil" Para="Zakat is the amount of money that every adult, mentally stable, free, and financially able Muslim, male and female, has to pay to support specific categories people. This category of people is defined in surah at-Taubah (9) verse 60: “The alms are only for the poor and the needy, and those who collect them, and those whose hearts are to be reconciled, and to free the captives and the debtors, and for the cause of Allah, and (for) the wayfarers; a duty imposed by Allah. Allah is knower, Wise.” (Al Qur’an 9:60)." bluepara="🙶 Take from their money a charity to cleanse them and purify them – Al Qur’an 9:103 🙷"
        image="/images/creatives/mehfil-one.png"
        button="Donate Now"
        background="transparent linear-gradient(313deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat"/>
        

        <VisionAndMission flexdirection="row-reverse" heading="Full Fill The Dreams Of A" bluespan=" Poor Person And Pay For Them To Go For Hajj" Para="Zakat is the amount of money that every adult, mentally stable, free, and financially able Muslim, male and female, has to pay to support specific categories people. This category of people is defined in surah at-Taubah (9) verse 60: “The alms are only for the poor and the needy, and those who collect them, and those whose hearts are to be reconciled, and to free the captives and the debtors, and for the cause of Allah, and (for) the wayfarers; a duty imposed by Allah. Allah is knower, Wise.” (Al Qur’an 9:60)." 
        image="/images/creatives/mehfil-two.png"
        button="Donate Now"/>

        <VisionAndMission  bluespan=" `Labaik Allahuma Labaik`" Para="Zakat is the amount of money that every adult, mentally stable, free, and financially able Muslim, male and female, has to pay to support specific categories people. This category of people is defined in surah at-Taubah (9) verse 60: “The alms are only for the poor and the needy, and those who collect them, and those whose hearts are to be reconciled, and to free the captives and the debtors, and for the cause of Allah, and (for) the wayfarers; a duty imposed by Allah. Allah is knower, Wise.” (Al Qur’an 9:60)." 
        image="/images/creatives/mehfil-three.png"
        button="Donate Now"/>

        
<NewsLetter background="transparent linear-gradient(38deg, #FFFFFF00 0%, #FFFFFE00 60%, #A5CD375C 100%, #bbff00 100%) 0% 0% no-repeat" />
    </div>
  )
}

export default MehfilPage