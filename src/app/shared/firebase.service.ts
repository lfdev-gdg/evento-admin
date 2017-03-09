import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class FirebaseService {

    constructor(private fire: AngularFire) {
        this.getInscritos();
    }

    getInscritos(): FirebaseListObservable<any[]> {
        return this.fire.database.list('/inscricoes');
    }

    login(user: any): any {
        return this.fire.auth.login(user, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        });
    }

    logout(): void {
        this.fire.auth.logout();
    }

    parseSurvey(list: Array<any>): any {
        let temp = {
            total: 0,
            questions: [
                {
                    question: 'sexo',
                    answers: [
                        {answer: 'Menino', total: 0},
                        {answer: 'Menina', total: 0},
                    ]
                },
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
                {
                    question: 'tecnologia',
                    answers: [
                        {answer: 'HTML', total: 0},
                        {answer: 'CSS', total: 0},
                        {answer: 'JavaScript', total: 0},
                        {answer: 'C#, ASP.NET', total: 0},
                        {answer: 'PHP', total: 0},
                        {answer: 'Ruby', total: 0},
                        {answer: 'Python', total: 0},
                        {answer: 'Dart', total: 0},
                        {answer: 'Java', total: 0},
                        {answer: 'Go', total: 0},
                        {answer: 'Node.js', total: 0},
                        {answer: 'Angular', total: 0},
                        {answer: 'React', total: 0},
                        {answer: 'Meteor', total: 0},
                        {answer: 'Gulp/Grunt', total: 0},
                        {answer: 'SASS/LESS', total: 0},
                        {answer: 'jQuery', total: 0},
                        {answer: 'Laravel', total: 0},
                        {answer: 'MySql', total: 0},
                        {answer: 'MongoDB', total: 0},
                    ]
                },
            ]
        };

        list.forEach(l => {
            if (l.survey) {
                temp.total++;
                l.survey.questions.forEach(s => {
                    temp.questions.forEach(tmp => {
                        if (s.question == tmp.question) {
                            if (s.question == 'tecnologia') {
                                s.answer.forEach(ans => {
                                    tmp.answers.forEach(an => {
                                        if (an.answer == ans) {
                                            an.total++;
                                        }
                                    });
                                });
                            } else {
                                tmp.answers.forEach(an => {
                                    if (an.answer == s.answer) {
                                        an.total++;
                                    }
                                });
                            }
                        }
                    });
                });
            }
        });

        //console.log(temp);
        return temp;
    }

}
