import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../firebase.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

    constructor(private fire: FirebaseService, private router: Router, private active: ActivatedRoute) { }

    ngOnInit() { }

    logout(): void {
        this.fire.logout();
        this.router.navigate(['/login']);
    }

}
