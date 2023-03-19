import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Wallet } from '../model/Wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletbackendService {

  constructor(private httpclient:HttpClient) {}
    addWallet(newwallet:Wallet):Observable<any>{
      return this.httpclient.post("http://localhost:8090/wallet",newwallet,{responseType:'json'});
  }
  deleteEmployeeById(id?:number):Observable<any>{
    return this.httpclient.delete("http://localhost:8090/wallet/"+id);
  }
  updateEmployee(newwallet:Wallet):Observable<any>{
    return this.httpclient.put("http://localhost:8090/v1/wallet",newwallet);
  }
  getAllEmployees():Observable<any>{
    return this.httpclient.get("http://localhost:8090/wallets");
  }
  fund(newwallet:Wallet):Observable<any>{
    return this.httpclient.patch("http://localhost:8090/wallet/"+newwallet.id,newwallet.balance);
  }
}
   

