import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  currentExp;
  currentYear = 2016;

  keys = {37: 1, 38: 1, 39: 1, 40: 1};

  sectionHeight = 0;

  currentSection = 0;

  load = false;

  form: FormGroup;

  budgets = [];
  deadlines = [];
  isShowForm = false;

  @ViewChild('main') public main: ElementRef;
  @ViewChild('info') public info: ElementRef;
  @ViewChild('why') public why: ElementRef;
  @ViewChild('calculator') public calculator: ElementRef;

  constructor(private formBuilder: FormBuilder) {
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {
    if (this.keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  }

  disableScroll() {
    if (window.addEventListener) { // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  }

  @HostListener('document:wheel', ['$event'])
  private onWheel($event: WheelEvent): void {
    if ($event.deltaY > 0) {// down
      this.next();
    } else {// top
      this.previous();
    }
  }

  previous() {
    if (this.currentSection === 0 || this.load) {
      return;
    }

    setTimeout(() => {
      this.load = false;
    }, 1000);

    this.load = true;

    this.goToSection(this.currentSection - 1);
  }

  next() {
    if (this.currentSection === 4 || this.load) {
      return;
    }

    setTimeout(() => {
      this.load = false;
    }, 1000);

    this.load = true;

    this.goToSection(this.currentSection + 1);
  }

  goToSection(currentSection: number) {
    if (this.currentSection === currentSection) {
      return;
    }
    window.scrollTo({left: 0, top: (this.sectionHeight * currentSection) + 1, behavior: 'smooth'});
    this.currentSection = currentSection;
  }

  ngOnInit(): void {
    this.disableScroll();
    this.sectionHeight = this.main.nativeElement.offsetHeight;
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
    this.isShowForm = true;
  }

  closeForm() {
    this.isShowForm = false;
  }
}
