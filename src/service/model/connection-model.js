import Datetime from "../datetime-service"



export default function createInternalTransportModel(pConnection){

    return {
        trainNames: getTrainNames(pConnection.products),
        from: pConnection.from.location.name,
        to: pConnection.to.location.name,
        duration: calculateDurationInMinutes(pConnection.duration),
        departure: getDepartureTime(pConnection.from.departure),
        hasMinimumDuration: false
    }
}

function getTrainNames(pTrainList){
    return pTrainList?.join(",")
}

function getDepartureTime(pDeparture){
    return `${Datetime.getDate(pDeparture)}, ${Datetime.getTime(pDeparture)}`
}

const calculateDurationInMinutes = (pDurationString) => {
    const timeParts = pDurationString?.slice(4, 8)?.split(":");
    return Number(timeParts[0])*60 + Number(timeParts[1]);
}