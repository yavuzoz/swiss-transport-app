import Datetime from "./datetime-service";

export default class TransportApi{

    static async findConnections(from, to, datetime) {
        
        if(datetime==null){
            datetime = new Date();
        }

        const date = Datetime.getDate(datetime)
        const time = Datetime.getTime(datetime)

        const response = await fetch(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`);
        return await response.json();
    }
}