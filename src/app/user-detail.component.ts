import { Component, OnInit, Input }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { User }        from './user';
import { UserService } from './user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User = new User();

  section1 : boolean = false;
  section2 : boolean = false;

  role : string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (!this.user.dataAccessRights) return

    for (let section of this.user.dataAccessRights) {
      if (section.includes('section1')) {
        this.section1 = true 
      }

      if (section.includes('section2')) {
        this.section2 = true
      }
    }
  }

  save(): void {
    if (this.role.length > 0) {
      if (!this.user.roles) { this.user.roles = [] }
      this.user.roles.push(this.role)
      this.role = ''
    }

    this.userService.update(this.user)
  }

  setDataAccess(): void {
    let result : string[] = [];

    if (this.section1) { result.push('section1') }
    if (this.section2) { result.push('section2') }

    this.user.dataAccessRights = result
  }
}