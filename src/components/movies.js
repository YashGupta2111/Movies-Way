import React from 'react'
import Item from './movieitem'
import Fast from './FastX.jpg'
import Pathaan from './Pathaan.jpg'
import Shazam from './shazam.jpg'
import Ant from './Ant-Man.jpg'
import Johnwick from './Johnwick.jpg'
import G from './G.jpg'
import O from './Operation.jpg'
import Last from './Last.jpg'
export default function movies() {
  return (
   <>
  <div className="container-fluid" style={{backgroundColor: '#000000'}}>
   <div className="row" align="center">
      <div className="col-md-3">
        <Item title="FAST X" discription="In 2021, Dominic Toretto and his team are requested by the Agency to steal a computer chip during its transit in Rome. Dom and his wife Letty Ortiz stay behind with his son Brian "
     images={Fast} downloadlink=""/>
     </div>
     <div className="col-md-3">
        <Item title="Ant-Man and the Wasp: Quantumania" discription="Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mo.. "
     images={Ant} downloadlink="https://fast-dl.pro/dl/95347026"/>
     </div>
     <div className="col-md-3">
        <Item title="Shazam! Fury of the Gods" discription="Four years after Thaddeus Sivana's defeat, Hespera and Kalypso, two of the daughters of the Titan Atlas, break into the Acropolis Museum in Athens, Greece to steal the Wizard's broken staff. They take it to the Wizard, imprisoned in the Gods' Realm, and force him to repair the staff and reactivate its powers."
     images={Shazam} downloadlink="https://fast-dl.pro/dl/95347019"/>
     </div>
     <div className="col-md-3">
        <Item title="Pathaan" discription="In 2019, the Indian Government revokes Article 370, which grants special status for Jammu and Kashmir. The news impacts a cancer-ridden Pakistani army general, Qadir (Manish Wadhwa), who decides to exact vengeance against India. The doctors have given him 3 yrs to live. "
     images={Pathaan} downloadlink="https://v-cloud.bio/dfpm9d-lpmldmyo"/>
     </div>
     </div >
     <br/>
     <div className="row" align="center">
      <div className="col-md-3">
        <Item title="John Wick: Chapter 4" discription="In New York City, John Wick prepares to exact vengeance against the High Table while hiding underground with the Bowery King "
     images={Johnwick} downloadlink="https://fast-dl.pro/dl/95347053"/>
     </div>
     <div className="col-md-3">
        <Item title="Ghosted" discription="Ghosted is a romantic action-comedy film that follows Cole (Chris Evans), who travels to London to surprise Sadie (Ana de Armas), a girl he's only met once"
     images={G} downloadlink="https://fast-dl.pro/dl/95347039"/>
     </div>
     <div className="col-md-3">
        <Item title="Operation Fortune: Ruse de Guerre" discription="The film is about a spy, Orson Fortune (Statham), who must retrieve a stolen high-tech device before an arms dealer (Grant) can sell it to the highest bidder. "
     images={O} downloadlink="https://v-cloud.bio/agd9-lwaxgu-u1a"/>
      </div>
     <div className="col-md-3">
        <Item title="The Last Kingdom: Seven Kings Must Die" discription="British historical drama film directed by Edward Bazalgette, written by Martha Hillier, and based on the The Saxon Stories by Bernard Cornwell. "
     images={Last} downloadlink="https://v-cloud.bio/lwymhtjomk6it7j"/>
    </div>
     </div>
     </div>
     
   </>
  )
}
