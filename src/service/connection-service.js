
import createInternalTransportModel from "./model/connection-model";

const MINIMUM_MINUTE_VALUE = 1000; 

export default class ConnectionService{
    

    static getConnectionList(pConnections){
        const connectionList = pConnections.map((connection) => createInternalTransportModel(connection));
        const minDuration = ConnectionService.findFastestRoute(connectionList);
        ConnectionService.markConnectionWithMinimumDuration(connectionList, minDuration);
        return connectionList;
    }

    static findFastestRoute(pConnections) {    
        return pConnections.reduce((acc, con) => acc > con.duration ? con.duration : acc, MINIMUM_MINUTE_VALUE);
    }

    static markConnectionWithMinimumDuration(pConnections, pMinDuration){
        pConnections.forEach((connection) => {
            if(connection.duration === pMinDuration){
                connection.hasMinimumDuration = true;
            }
        })
    }
}