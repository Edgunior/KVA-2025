import { count } from "rxjs";
import { AirlineModel } from "../models/airline.model";

export class AirlineService {
    static getAirlines(): AirlineModel[] {
        return [
            {
                id: 1,
                name: 'Air Serbia',
                country: 'Serbia',
                flights: 5,
                website: 'https://www.airserbia.com'
            }
        ]
    }
}