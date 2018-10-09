import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  form: FormGroup;

  budgets = [];
  deadlines = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      budget: 0,
      deadline: 1
    });
    this.budgets = [
      '100 000 руб.',
      '200 000 руб.',
      '400 000 руб.',
      '600 000 руб.',
      '1 000 000 руб.',
      '2 000 000 руб.',
      '4 000 000 руб.',
      '10 000 000 руб.'
    ];

    this.deadlines = [
      'Срочно',
      '1 месяц',
      '2 месяц',
      '3 месяц',
      '4 месяц',
      '5 месяц',
      '6 месяц',
      '7 месяц',
      '8 месяц',
      '9 месяц',
      '10 месяц',
      '11 месяц',
      '12 месяц',
      'Не знаю'
    ];
  }

  get deadline(): string {
    return this.deadlines[this.form.controls['deadline'].value];
  }

  get budget(): string {
    return this.budgets[this.form.controls['budget'].value];
  }
}
