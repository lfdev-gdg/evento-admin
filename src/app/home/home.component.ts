import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    inscritos: number = 0;
    survey: Array<any> = [];

    constructor(private firebase: FirebaseService) { }

    ngOnInit() {
        this.firebase.getInscritos().subscribe(
            inscritos => {
                this.survey = this.firebase.parseSurvey(inscritos);
                this.inscritos = inscritos.length;
            }
        );
    }



}
