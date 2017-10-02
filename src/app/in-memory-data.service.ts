import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 0,  
      	uid: 'dduck',
      	name: 'Donald Duck',
      	email: 'donald@duck.com',
      	tenant: 'DEI',
      	roles: ['user', 'developer'],
      	dataAccessRights: ['section1'],
      	passwordValid: 15
      },
      { id: 1,  
      	uid: 'narth',
      	name: 'Nick Arthur',
      	email: 'nick@arthur.com',
      	tenant: 'RRG',
      	roles: ['developer'],
      	dataAccessRights: ['section1', 'section2'],
      	passwordValid: 30
      },
      { id: 2,  
      	uid: 'alex',
      	name: 'Alex Honnold',
      	email: 'alex@honnold.com',
      	tenant: 'YSD',
      	roles: ['user'],
      	dataAccessRights: [],
      	passwordValid: 1
      }
    ];
    return {users, user: users};
  }
}