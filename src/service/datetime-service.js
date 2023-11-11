import StringService from "./string-service";

export default class Datetime{

    static getDate(pDate){
        const date = new Date(pDate);
        return `${StringService.pad(date.getFullYear())}-${StringService.pad(date.getMonth()+1)}-${StringService.pad(date.getDate())}`;
    }

    static getTime(pDate){
        const date = new Date(pDate);
        return `${StringService.pad(date.getHours())}:${StringService.pad(date.getMinutes())}`;
    }
}