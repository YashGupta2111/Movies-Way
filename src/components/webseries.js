import React from 'react'
import Item from './movieitem'
import Citadel from './citadel.jpg'
import Liaison from './Liaison.jpg'
import Farzi from './Farzi.jpg'
import TheLast from './TheLast.jpg'
import Tazakhabar from './Tazakhabar.jpg'
import Silo from './Silo.jpg'
import Black from './Black.jpg'
import Class from './Class.jpg'
export default function movies() {
  return (
   <>
<div className="container-fluid" style={{backgroundColor: '#000000'}}>
   <div className="row" align="center">
      <div className="col-md-3">
        <Item title="Citadel" discription="Citadel is an American spy action thriller television series created by Josh Appelbaum, Bryan Oh, and David Weil for Amazon Prime Video, with the Russo ... "
     images={Citadel} downloadlink="https://v-cloud.bio/v9n14pv4mc5gwvs"/>
     </div>
     <div className="col-md-3">
        <Item title="The Last of Us" discription="The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States "
     images={TheLast} downloadlink="https://v-cloud.bio/-hfgo15g-gk53p-"/>
     </div>
     <div className="col-md-3">
        <Item title="Farzi" discription="Farzi ( transl. Fake) is an Indian Hindi-language black comedy crime thriller television series created, produced and directed by Raj & DK, ..."
     images={Farzi} downloadlink="https://v-cloud.bio/bn1y34ymnpdncnt"/>
     </div>
     <div className="col-md-3">
        <Item title="Liaison" discription="Liaison: Created by Virginie Brac. With Vincent Cassel, Eva Green, Peter Mullan, Gérard Lanvin. A high-stakes, contemporary thriller exploring how the ... "
     images={Liaison} downloadlink=""/>
     </div>
     </div >
     
     <div className="row" align="center">
      <div className="col-md-3">
        <Item title="Taaza Khabar" discription="Taaza Khabar is the story of Vasant Vasya Gawade, a sanitation worker who comes across a magical boon that can predict future and creates curls in his life and everyone around him. "
     images={Tazakhabar} downloadlink="https://v-cloud.bio/9du9ypep19c3ezu"/>
     </div>
     <div className="col-md-3">
        <Item title="Silo" discription="Silo is an American science fiction dystopian television series created by Graham Yost based on the Wool series of novels by author Hugh Howey. The series stars Rebecca Ferguson, who is also an executive producer of the series, and it premiered on Apple TV+ on May 5, 2023. A second season is in development."
     images={Silo} downloadlink=""/>
     </div>
     <div className="col-md-3">
        <Item title="Black Knight" discription="Black Knight (Korean: 택배기사) is a 2023 South Korean streaming television series written and directed by Cho Ui-seok, and starring Kim Woo-bin, ..."
     images={Black} downloadlink="https://v-cloud.bio/rkvri1ra0cixmqm?token=9267"/>
      </div>
     <div className="col-md-3">
        <Item title="Class" discription="Class is an Indian Hindi-language crime drama thriller streaming television series adapted by Ashim Ahluwalia and based on the Spanish series Elite. "
     images={Class} downloadlink=""/>
        
     </div>
     </div>
  
     </div>

   </>
  )
}
