import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mobile-landing',
  templateUrl: './mobile-landing.component.html',
  styleUrls: ['./mobile-landing.component.scss']
})
export class MobileLandingComponent implements OnInit {

  currentExp;
  currentYear = 2016;
  form: FormGroup;
  budgets = [];
  deadlines = [];
  isShowForm = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.currentExp = this.currentYear - new Date('06.20.2016').getFullYear();

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      company: [''],
      description: ['', Validators.required],
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

  showForm() {
    this.disableScroll();
    this.isShowForm = true;
  }

  closeForm() {
    this.isShowForm = false;
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  disableScroll() {
    if (window.addEventListener) { // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
  }
}
