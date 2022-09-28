import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { User } from "../../model/user.model";
import { UserService } from "../../services/user.service";

@Component({
    selector: 'app-matCard-dashboard',
    templateUrl: './matCardDashboard.component.html',
    styleUrls: ['./matCardDashboard.component.css']
})
export class MatCardDarshboardComponent implements AfterViewInit{
    usersArray: any[] = [];
    constructor(
        private userService: UserService
        ){}

    ngAfterViewInit(): void {
        this.userService.getUsers().subscribe((users: User[]) => {
            Object.values(users).forEach((val: any) => this.usersArray.push(val));
          });
    }

}