import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

@Component({
    selector: 'app-inscricao',
    templateUrl: './inscricao.component.html',
    styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {

    private subscriptionsAll: Array<any> = [];
    private subscriptions: Array<any> = [];
    showLoder: boolean = false;
    filtro: string = '';
    csv: string = '';

    constructor(private fire: FirebaseService) { }

    ngOnInit() {
        this.loadSubscriptions();
    }

    private loadSubscriptions(): void {
        this.showLoder = true;
        this.fire.getInscritos().subscribe(
            subs => {
                this.showLoder = false;
                this.subscriptionsAll = subs;this.csvExport();
                this.subscriptions = subs;

                if (this.filtro)
                    this.filtrar();
            }
        );
    }

    filtrar(e?: any): void {
        this.subscriptions = this.subscriptionsAll.filter( t => t.name.toLowerCase().indexOf(this.filtro.toLowerCase()) > -1 );
    }

    delete(subscription: any): void {
        if (confirm('Tem certeza que deseja cancelar esta inscrição?')) {
            this.fire.deleteInscricao(subscription);
        }
    }

    confirma(subscription: any): void {
        let checkin = subscription.checkin ? {checkin: false} : {checkin: true};
        this.fire.editInscricao(subscription.$key, checkin)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    private csvExport(){
        this.csv = "Email Address\tFirst Name\tFIREID\n";
        this.subscriptionsAll.forEach(i => {
            this.csv += i.email+"\t"+i.name.split(' ')[0]+"\t"+i.$key+"\n";
        });
    }

}
