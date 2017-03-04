import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {

    constructor(private fire: AngularFire) {
        this.getInscritos();
    }

    getInscritos(): FirebaseListObservable<any[]> {
        return this.fire.database.list('/inscricoes');
    }

    parseSurvey(list: Array<any>): any {
        let temp = {
            total: 0,
            questions: [
                {
                    question: 'ocupacao',
                    answers: [
                        {answer: 'Frontend Developer', total: 0},
                        {answer: 'Backend Developer', total: 0},
                        {answer: 'Fullstack Developer', total: 0},
                        {answer: 'Designer / Webdesigner', total: 0},
                        {answer: 'Atuo em outras áreas', total: 0},
                    ]
                },
                {
                    question: 'formacao',
                    answers: [
                        {answer: 'Formado há algum tempo', total: 0},
                        {answer: 'Recém formado', total: 0},
                        {answer: 'Estudante há algum tempo', total: 0},
                        {answer: 'Estudante calouro', total: 0},
                        {answer: 'Nenhum das respostas anteriores', total: 0},
                    ]
                },
                {
                    question: 'divulgacao',
                    answers: [
                        {answer: 'Facebook', total: 0},
                        {answer: 'Twitter', total: 0},
                        {answer: 'E-mail', total: 0},
                        {answer: 'Vi na Faculdade', total: 0},
                        {answer: 'Whatsapp/Telegram', total: 0},
                        {answer: 'Amigos', total: 0},
                        {answer: 'Outras formas', total: 0},
                    ]
                },
            ]
        };

        list.forEach( l => {
            if (l.survey)
                l.survey.questions.forEach( s => {
                    console.log(s.question, s.answer);
                });
        });

        return temp;
    }

}
