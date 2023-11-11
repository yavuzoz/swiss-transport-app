// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useReducer, useState } from "react";

import TransportApi from "./service/transport-service";
import ConnectionService from "./service/connection-service";
import TrainDisplay from "./components/TrainDisplay";
import TrainQueryForm from "./components/TrainQueryForm";


function App(){

  const [connections, setConnections] = useState([]);

  const initialValues = {
    fromLocation: "",
    toLocation: "",
    datetime: null
  };
  const [formValues, setFormValues] = useReducer(
    (curVals, newVals) => ({...curVals, ...newVals}), initialValues
  );
  const {fromLocation, toLocation, datetime} = formValues;

  function handleFormChange(pEvent){
    const {name, value} = pEvent.target;
    setFormValues({[name]: value})
  }

  const handleFindConnections = async (pEvent) => {
    pEvent.preventDefault();

    const connectionResponse = await TransportApi.findConnections(fromLocation, toLocation, datetime);
    const connectionList = ConnectionService.getConnectionList(connectionResponse.connections)

    setConnections(connectionList);
  }


  return(
      <div className="container">
        <div className="row">    
          <TrainQueryForm handleFormChange={handleFormChange} handleFindConnections={handleFindConnections}/>
          <TrainDisplay connections={connections}/> 
        </div>        
      </div>
    )
}

export default App;