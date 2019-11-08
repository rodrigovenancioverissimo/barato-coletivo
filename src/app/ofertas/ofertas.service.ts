import { BC_API } from '../app.api'
import { Oferta } from './oferta/oferta.model'

import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class OfertasService {
    constructor(private http: Http){}

    ofertas(): Observable<Oferta[]>{
        return this.http.get(`${BC_API}/offers`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    oferta(id: string): Observable<Oferta>{
        return this.http.get(`${BC_API}/offer/${id}`).map(response => response.json());
    }
}