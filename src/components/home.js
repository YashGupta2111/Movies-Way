import React    from 'react'
import PropTypes from 'prop-types'
import Item from './movieitem'
import Citadel from './citadel.jpg'
import Liaison from './Liaison.jpg'
import Farzi from './Farzi.jpg'
import TheLast from './TheLast.jpg'
import Tazakhabar from './Tazakhabar.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import Silo from './Silo.jpg'
import Black from './Black.jpg'
import Class from './Class.jpg'
import All from './allinone.png'
import Fast from './FastX.jpg'
import Pathaan from './Pathaan.jpg'
import Shazam from './shazam.jpg'
import Ant from './Ant-Man.jpg'
import Johnwick from './Johnwick.jpg'
import G from './G.jpg'
import O from './Operation.jpg'
import Last from './Last.jpg'
import Ab from './homepag.jpg'
import  './home.css'
import Movie from './Movieroll.jpg'
import { motion } from "framer-motion";
export default function home() {
 
   
  return (
   <>
 

   <div className="container-fluid img-fluid" style={{backgroundColor:'#000000',color:'white'}}   >
    <div className="container-fluid" style={{backgroundImage:`url(${Ab})`,filter: `blur('8px')`,backgroundPosition:'center'}}>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/>   <br/>
   <h1 align="center"><b>Welcome to MoviesWay</b></h1>
   <h3 align="center"> Where You Can Search And Download Best Movie </h3>
   <h3 align="center">And Webseries Of 2023</h3>
   <br/>    <br/>   <br/>   <br/><br/>    <br/>   <br/>   <br/><br/>    <br/>   <br/>   <br/>
   </div>
   
  <h1 align="center" style={{backgroundColor:'#333333'}}> 
   Recent Movies 
   <br/>  </h1>
  <br style={{backgroundColor:'#000000'}}/>
   <div className="row" align="center" style={{backgroundColor:'#000000',color:'white'}}>
      <div className="col-md-3" align="center">
      
        <Item title="FAST X"  discription="In 2021, Dominic Toretto and his team are requested by the Agency to steal a computer chip during its transit in Rome. Dom and his wife Letty Ortiz stay behind with his son Brian "
     images={Fast} downloadlink=""/>
     </div>
     <div className="col-md-3" align="center">
        <Item title="Ant-Man and the Wasp: Quantumania"  discription="Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mo.. "
     images={Ant} downloadlink=""/>
     </div>
     <div className="col-md-3" align="center">
        <Item title="Shazam! Fury of the Gods"  discription="Four years after Thaddeus Sivana's defeat, Hespera and Kalypso, two of the daughters of the Titan Atlas, break into the Acropolis Museum in Athens, Greece to steal the Wizard's broken staff. They take it to the Wizard, imprisoned in the Gods' Realm, and force him to repair the staff and reactivate its powers."
     images={Shazam} downloadlink=""/>
     </div>
     <div className="col-md-3">
        <Item title="Pathaan" discription="In 2019, the Indian Government revokes Article 370, which grants special status for Jammu and Kashmir. The news impacts a cancer-ridden Pakistani army general, Qadir (Manish Wadhwa), who decides to exact vengeance against India. The doctors have given him 3 yrs to live. "
     images={Pathaan} downloadlink=""/>
     </div>
     </div>
     <br/><br/><br/>
     <div class="computer1" align ="center" style={{backgroundColor:'#000000'}} >
      <br/> <br/> <br/>
      <h1  >  Experience the latest Movies coming this year  <br/> <br/> <br/> < img src={All}  width="50%" height="50%"   position="fixed" alt="MacBook Computer Apple"/></h1>
    
      <br /><br/><br/>
				{/* <img   src={All}    position="fixed" alt="MacBook Computer Apple"/>	 */}
            <br /><br/><br/>
     <br/><br/><br/>
         </div>
    
  <h1 align="center" style={{backgroundColor:'#333333'}}>Recent Web Series  <br/></h1>
  <br/>
     <div className="row" align="center" style={{backgroundColor:'#000000',color:'white'}}>
      <div className="col-md-3" align="center">
        <Item title="Citadel"  discription="Citadel is an American spy action thriller television series created by Josh Appelbaum, Bryan Oh, and David Weil for Amazon Prime Video, with the Russo ... "
     images={Citadel} downloadlink=""/>
     </div>
     <div className="col-md-3" align="center">
        <Item title="The Last of Us"  discription="The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States "
     images={TheLast} downloadlink=""/>
     </div>
     <div className="col-md-3" align="center">
        <Item title="Farzi"  discription="Farzi ( transl. Fake) is an Indian Hindi-language black comedy crime thriller television series created, produced and directed by Raj & DK, ..."
     images={Farzi} downloadlink=""/>
     </div>
     <div className="col-md-3">
        <Item title="Taaza Khabar" discription="Taaza Khabar is the story of Vasant Vasya Gawade, a sanitation worker who comes across a magical boon that can predict future and creates curls in his life and everyone around him. "
     images={Tazakhabar} downloadlink=""/>
     </div>
     </div > </div> 
     
   

   
   </>
  )
}
