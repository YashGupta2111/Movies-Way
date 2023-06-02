import React  from 'react'

export default function movieitem (props) {
  let {images, title,discription,downloadlink}= props;
  return (
    <>
       <div className="card" style={{width: "18rem",height:"50%",color:'white'}}>
  <img src={images} altclassName="card-img-top" alt="..."/>
  <div className="card-body" >
    <h5 className="card-title">{title}</h5>
    <p className="card-text overflow-auto" >{discription.slice(0,105)}...</p>
    <a href={downloadlink} className="btn btn-primary">Download</a>
  </div>
</div>

    </>
  )
}
