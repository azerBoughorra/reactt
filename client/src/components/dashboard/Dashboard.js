
import React, { useState } from "react";
import axios from "axios";

import CardUI from './../house-card/CardUI';

const Dashboard = (props) => {
  const [houses, setHouses] = useState(null);

  const [searchByRegion, setSearchByRegion] = useState('');
  const [searchByName, setSearchByName] = useState('');
 
  const deleteHouse = (house) => {
    console.log(house);

    axios
      .delete("/api/house/delete/" + house._id)
      .then(res => {
        setHouses(houses.filter(h => h != house))
        console.log('res', res);
      })

  }

  if (!houses) {
    axios
      .get("/api/house/findAll")
      .then(res => {
        setHouses(res.data);
        console.log('res', res);
      })
  }

  const updateSearchRegion = (event) => {
    setSearchByRegion(event.target.value.substr(0, 20));
  }

  const updateSearchName = (event) => {
    setSearchByName(event.target.value.substr(0, 20));
  }

  return (
    <div className="container">

      <div className="container-fluid justify-content-center">
        <div className="row">
          <div className="col-md-6">Filtrer par région : <input type="text" placeholder="Région" value={searchByRegion} onChange={updateSearchRegion} /></div>
          <div className="col-md-6">Filtrer par Nom : <input type="text" placeholder="Région" value={searchByName} onChange={updateSearchName} /></div>
        </div>
        <div className="row">
          {houses && houses.length > 0 ?
            houses.map((house, i) => {
              if (house.name.toLowerCase().indexOf(searchByName) !== -1 && house.region.toLowerCase().indexOf(searchByRegion) !== -1) {
                return (
                  <div key={i} className="col-md-4 dash-card">
                    <CardUI onDelete={() => deleteHouse(house)} house={house} history={props.history} />
                  </div>
                )
              }
              else { return '' }
            }) : null
          }
        </div>
      </div>
    </div >

  )
}

export default Dashboard;