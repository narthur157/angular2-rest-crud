import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { User }                from './user';
import { UserService }         from './user.service';
 
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
})
export class UserListComponent implements OnInit {
  users: User[];

  @Output() onSelected = new EventEmitter<User>()  
 
  constructor(
    private userService: UserService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {}
 
  getUsers(): void {
    this.userService
        .getUsers()
        .then(users => this.users = users);
  }
 
  addUser(): void {
    let user : User = new User()
    console.log(user)
    this.userService.create(user)
      .then(user => {
        console.log(user)
        this.users.push(user);
        this.onSelect(user);
      });
  }
 
  ngOnInit(): void {
    this.getUsers();
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.userService.getUser(params.id)
            .then(user => this.onSelect(user))
            .catch(err => this.router.navigate(['/users']));
      }
    })
  }
 
  onSelect(user: User): void {
    this.onSelected.emit(user)
    this.gotoDetail(user)
  }
 
  gotoDetail(user): void {
    this.location.replaceState('/users/' + user.id);
  }
}