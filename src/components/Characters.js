import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    // <div className="row">
    //   {characters.map((item, index) => (
    //     <div key={index} className="col-sm-3 my-3 ">
    //       <div className="card rounded" style={{minWidth: "200px"}}>
    //         <img className="rounded" src={item.image} alt="" />
    //         <div className="card-body">
    //             <h5 className="card-title">{item.name}</h5>
    //             <hr/>
    //             <p>Especie: {item.species}</p>
    //             <p>Localizacion: {item.location.name}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

      <div className="row">
        {characters.map((item, index) => (
          <div className="container" key={index} className="col-sm-3 my-3 ">
            <div className="card">
              <div className="imgBx">
                <img src={item.image} />
              </div>
              <div className="contentBx">
                <h2>{item.name}</h2>
               
                <div className="color text-white">
                  <div>
                  <span>Especie:</span>
                  </div>
                  <br />
                  <div>
                  <span>{item.species}</span>
                  </div>

                </div>
                <div className="color text-white">
                  <span>Localizacion:</span>
                  <span>{item.location.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Characters;
