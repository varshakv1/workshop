import React, { useState } from 'react';
import { GrLike } from "react-icons/gr";
function Header() {
const [texts,setText]=useState([
  {name1:"eat"},
  {name1:"sleep"},
  {name1:"code"} 
]
);

const [index,setIndex]=useState(0)
function change(){
  const newindex=(index+1)%texts.length
  setIndex(newindex)

}
return (
  <div>
  <button onClick={change}>Text Change</button>
  <span>{texts[index].name1}</span>
  <GrLike />
  </div>
)
}

export default Header