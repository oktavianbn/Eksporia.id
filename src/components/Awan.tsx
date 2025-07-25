import React from 'react'
import Awan2 from "../assets/awan2.svg";

const Awan = () => {
  return (
    <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-32 xl:bottom-36 left-0 right-0 w-full z-99">
        <img
          src={Awan2}
          alt="Kapal"
          className="absolute w-full"
          style={{
            position: "absolute",
            width: "100%",
            transform: "scale(1.2)",
            left: "0%",
            right: "0%",
            zIndex: 10,
          }}
        />
      </div>
  )
}

export default Awan