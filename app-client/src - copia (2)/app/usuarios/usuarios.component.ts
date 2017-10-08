import { Component, OnInit } from '@angular/core';
import { User } from '../models/index';
import { UserService } from '../servicios/index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  providers: [UserService]

})
export class UsuariosComponent implements OnInit{
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.loadAllUsers();
    }
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
  
}
