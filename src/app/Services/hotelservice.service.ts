import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../model/Hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  constructor(private http:HttpClient ) { }
  host =environment.host;

  public  gethotels():Observable<any>{ 
    return this.http.get<any>(this.host + "/hotels/liste")
  }
  public  Deletehotel(id:number):Observable<any>{ 
    return this.http.delete<any>(this.host + "/hotels/delete/"+ id)
  }
  public  Savehotel(hotel:Hotel):Observable<any>{ 
    return this.http.post<any>(this.host + "/hotels/create",hotel)
  }
  public  Editehotel(hotel:Hotel):Observable<any>{ 
    return this.http.put<any>(this.host + "/hotels/edite/"+hotel.id,hotel)
  }
}
