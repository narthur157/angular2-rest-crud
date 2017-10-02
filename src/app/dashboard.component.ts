import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { User } from './user';
import { UserService } from './user.service';
 
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  selectedUser: User
 
  constructor(
    private router: Router,
    private userService: UserService) {
  }
 
  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users);
  }

  onSelected(user: User): void {
    this.selectedUser = user
  }
}