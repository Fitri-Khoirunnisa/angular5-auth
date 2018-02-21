import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from './../_models/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    private oauthUrl = "http://10.22.253.62/oauth/token";
    private userUrl = "http://10.22.253.62/api/user";

    login(username: string, password: string){
        var headers = new Headers(
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        );

        let postData={
            grant_type: "password",
            client_id: 2,
            client_secret: 'hJr3R0e0yLt8cCfvkV9H2npbjyfrBRuTP6JL0FIW',
            username: username,
            password: password,
            scope: '*'
        }

        return this.http.post(this.oauthUrl,JSON.stringify(postData),{
                headers: headers
            })
            .map((response: Response) => {
                // login successsfull if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.access_token){
                    //store use detail and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', JSON.stringify(user.access_token));
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
    }

    getUsers(accessToken: string): Observable<User[]>{
        var headers = new Headers(
            {
                "Accept": "application/json",
                "Authorization": "Bearer "+ accessToken,
            }
        );

        return this.http.get(this.userUrl,{
            headers: headers
        })
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout(){
        //remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}