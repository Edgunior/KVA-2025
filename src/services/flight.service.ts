import axios from 'axios';

const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: (status: number) =>{
        return status === 200
    }
    // Samo ako je 200 vrati response
    // U ostalim slucajevima baci response
})
export class FlightService {
    static async getFlights(page: number = 0, size: number = 10){
        return client.request({
            url: '/flight',
            method: 'GET',
            params: {
                'page' : page,
                'size' : size,
                'sort' : 'scheduledAt,desc',
                'type' : 'departure'
            }
        })
    }
    static async getFlightById(id: number){
        return axios.get(`/flight/${id}`)
    } 
}