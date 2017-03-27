import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

@Component({
    selector: 'app-sorteio',
    templateUrl: './sorteio.component.html',
    styleUrls: ['./sorteio.component.scss']
})
export class SorteioComponent implements OnInit {

    showLoader: boolean = false;
    brinde: string = '';
    presentes: Array<any> = [];
    sorteados: Array<any> = [];

    constructor(private fire: FirebaseService) { }

    ngOnInit() {
        this.loadPresentes();
    }

    private loadPresentes(): void {
        this.showLoader = true;
        this.fire.getInscritos().subscribe(
            res => {
                this.sorteados = [];
                this.presentes = [];
                this.brinde = '';
                this.showLoader = false;

                res.forEach(p => {
                    if (p.checkin && !p.brinde)
                        this.presentes.push(p);
                    if (p.checkin && p.brinde)
                        this.sorteados.push(p);
                })
            }
        );
    }

    sortear(): void {
        if (this.brinde) {
            let indice = Math.floor(Math.random() * this.presentes.length);
            if (this.presentes[indice]){
                this.fire.editInscricao(this.presentes[indice].$key, {brinde: this.brinde}).then( this.loadPresentes() );
            }
        } else {
            alert('Que brinde você vai sortear? Esqueceu?');
        }
    }

    remove(sorteado: any): void {
        if (confirm('Tomar brinde do sorteado?')) {
            this.fire.editInscricao(sorteado.$key, {brinde: null}).then( this.loadPresentes() );
        }
    }

}
