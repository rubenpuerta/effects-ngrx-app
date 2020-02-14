import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, delay } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  reqresApi = "https://reqres.in/api";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.reqresApi}/users?per_page=6`).pipe(
      map(req => req["data"]),
      delay(1000)
    );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get(`${this.reqresApi}/users/${id}`).pipe(
      map(req => req["data"]),
      delay(1000)
    );
  }
}
