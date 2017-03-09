import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

@Component({
    selector: 'app-inscricao',
    templateUrl: './inscricao.component.html',
    styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {

    subscriptions: Array<any> = [];
    showLoder: boolean = false;

    constructor(private fire: FirebaseService) { }

    ngOnInit() {
        this.loadSubscriptions();
    }

    private loadSubscriptions(): void {
        this.showLoder = true;
        this.fire.getInscritos().subscribe(
            subs => {
                this.showLoder = false;
                this.subscriptions = subs;
            }
        );
    }

}
