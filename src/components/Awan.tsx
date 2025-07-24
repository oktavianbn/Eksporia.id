import React from 'react'
import Awan2 from "../assets/awan2.svg";

const Awan = () => {
  return (
    <div className="absolute bottom-36 left-0 right-0 w-full z-99">
        <img
          src={Awan2}
          alt="Kapal"
          className="absolute"
          style={{
            position: "absolute",
            width: "full",
            transform: "scale(1.17)",
            left: "1%",
            right: "0%",
            zIndex: 10,
          }}
        />
      </div>
  )
}

export default Awan