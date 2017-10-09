import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {}

	createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      'admin:admin'); 
  }

    login(username: string, password: string) {
		
		let headers = new Headers();
        this.createAuthorizationHeader(headers);
		
        return this.http.get('/escrutinios/login/usuario', {headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}