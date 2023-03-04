import "./styles/gates.css"
import logo from './logo.png'
const Gates = () => {
  return (
    <>
      <div className="gates">
        <button className="xor btn btn-grad1">
          +
          {/* <img
          src="https://res.cloudinary.com/lwgatsby/images/w_150,h_150,c_scale/v1611678216/plus-circle-1/plus-circle-1.svg"
          alt=""
        /> */}
        </button>
        <button className="btn btn-grad2">H</button>
        <button className="btn btn-grad3">Y</button>
        <button className="btn btn-grad4">Z</button>
        <button className="btn btn-grad5">M</button>
      </div>
        <BlochSphere/>
    </>
  )
}

const BlochSphere = ()=>{
  return(
    <img src={logo} alt="" className="bloch-sphere"/>
  )
}

export default Gates
