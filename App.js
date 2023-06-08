import React from "react";
import {useState} from "react";
import './App.css';
export default function Index()
{

  const[image,setImage] = useState(null)
  const[bgremove,setBgremove] = useState(null)

  const handleChangebg=()=>{
    const apikey ='rTgtnj4N4RVw3JDpg7k8hzid'
    const url='https://api.remove.bg/v1.0/removebg'

    const formData = new FormData()
    formData.append('image_file',image,image.name)
    formData.append("size","auto")

    fetch(url,{
      method:'POST',
      headers:{
        'X-Api-key':apikey,
      },
      body:formData
    }).then((res)=>res.blob()).then((blob)=>{
      const reader=new FileReader();
      reader.onloadend=() =>setBgremove(reader.result)
      reader.readAsDataURL(blob);
    }).catch((error)=>console(error))
    
  }
  return(
      <div className="flexs">
        <div>
          <h2 className="remove-bg">Remove Background Image</h2>
          <div>
            <div className="inputs">
              <input type="file" className="button"
               onChange={(e) => setImage(e.target.files[0])} />
            </div>
              <div>
                <button onClick={handleChangebg} className="bgrmev" >Remove Background</button>
              </div>
            </div>
        <div>

        {
        bgremove && (
          <img src={bgremove}  alt="remove Background" />
        )
        }
  
          </div>
        </div>
      </div>
  );
}