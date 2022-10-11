import { Component, OnInit } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: './room.component.html'})
export class RoomComponent {
	user: User;

	constructor(private accountService: AccountService) {
			this.user = this.accountService.userValue;
	}

	logout() {
		this.accountService.logout();
	}

}
