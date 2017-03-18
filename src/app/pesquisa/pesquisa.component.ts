import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../shared/firebase.service";

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

    private survey: any;
    showLoder: boolean = false;

    constructor(private fire: FirebaseService) { }

    ngOnInit() {
        this.loadInscritos();
    }

    private loadInscritos(): void {
        this.showLoder = true;
        this.fire.getInscritos().subscribe(res => {
            this.showLoder = false;
            this.survey = this.fire.parseSurvey(res);
            this.loadSexo();
            this.loadOcupacao();
            this.loadFormacao();
            this.loadDivulgacao();
            this.loadTecnologia();
        });
    }

    private porcentagem(qtde: number): any {
        let total = this.survey.total;
        return ((qtde / total) * 100).toFixed(2);
    }

    private contagem(answers: Array<any>): Array<any> {
        let valores: Array<number> = [];
        let labels: Array<string> = [];

        answers.forEach( a => {
            labels.push(a.answer);
            valores.push(this.porcentagem(a.total));
        });

        return [labels, valores];
    }

    pieOpt: any = {
        legend: {
            position: 'bottom'
        }
    };

    /**
     * SEXO
     */
    sexoLabels:string[] = ['Meninas','Meninos'];
    sexoData:number[] = [];
    sexoType:string = 'pie';

    private loadSexo(): void {
        this.survey.questions.forEach( q => {
            if (q.question == 'sexo') {
                q.answers.forEach( a => {
                    if (a.answer == 'Menino') this.sexoData[1] = this.porcentagem(a.total);
                    if (a.answer == 'Menina') this.sexoData[0] = this.porcentagem(a.total);
                });
            }
        });
    }

    /**
     * OCUPACAO
     */
    ocupacaoOptions:any = {
        scaleShowVerticalLines: true,
        responsive: true,
        legend: {
            display: false
        }
    };
    ocupacaoLabels:string[] = [];
    ocupacaoType:string = 'bar';
    ocupacaoLegend:boolean = true;
    ocupacaoData:any[] = [
        {data: [], label: ''}
    ];

    private loadOcupacao(): void {
        this.survey.questions.forEach( q => {
            if (q.question == 'ocupacao') {
                let tmp = this.contagem(q.answers);
                this.ocupacaoLabels = tmp[0];
                this.ocupacaoData[0].data = tmp[1];
            }
        });
    }

    /**
     * FORMACAO
     */
    formacaoLabels:string[] = [];
    formacaoData:number[] = [];
    formacaoType:string = 'pie';

    private loadFormacao(): void {
        this.survey.questions.forEach( q => {
            if (q.question == 'formacao') {
                let tmp = this.contagem(q.answers);
                this.formacaoLabels = tmp[0];
                this.formacaoData = tmp[1];
            }
        });
    }

    /**
     * DIVULGACAO
     */
    divulgacaoLabels:string[] = [];
    divulgacaoData:number[] = [];
    divulgacaoType:string = 'pie';

    private loadDivulgacao(): void {
        this.survey.questions.forEach( q => {
            if (q.question == 'divulgacao') {
                let tmp = this.contagem(q.answers);
                this.divulgacaoLabels = tmp[0];
                this.divulgacaoData = tmp[1];
            }
        });
    }

    /**
     * TECNOLOGIA
     */
    tecnologiaOptions:any = {
        scaleShowVerticalLines: true,
        responsive: true,
        /*title: {
            display: true,
            text: 'Custom Chart Title'
        },*/
        legend: {
            display: false
        }
    };
    tecnologiaLabels:string[] = [];
    tecnologiaType:string = 'bar';
    tecnologiaLegend:boolean = true;
    tecnologiaData:any[] = [
        {data: [], label: ''}
    ];

    private loadTecnologia(): void {
        this.survey.questions.forEach( q => {
            if (q.question == 'tecnologia') {
                let tmp = this.contagem(q.answers);
                this.tecnologiaLabels = tmp[0];
                this.tecnologiaData[0].data = tmp[1];
            }
        });
    }
}
