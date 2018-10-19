import {AfterContentInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  budgets = [];
  deadlines = [];
  lastScrollTop = 0;

  keys = {37: 1, 38: 1, 39: 1, 40: 1};

  scrolling = false;

  sectionHeight = 0;

  load = false;

  @ViewChild('main') public main: ElementRef;
  @ViewChild('info') public info: ElementRef;
  @ViewChild('why') public why: ElementRef;
  @ViewChild('calculator') public calculator: ElementRef;

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
    console.log($event);
    let height = 0;
    if ($event.deltaY > 0) {// down
      if (this.lastScrollTop === 0) {
        height = this.sectionHeight * 0;
      }
    } else {// top
      height = this.sectionHeight * 0;
    }
    window.scrollTo({left: 0, top: height, behavior: 'smooth'});
    this.lastScrollTop = height;
  }

  @HostListener('document:scroll')
  private onScroll(): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (!this.load && this.lastScrollTop === 0 && st !== this.lastScrollTop) {
      window.scrollTo({left: 0, top: 0});
      setTimeout(() => {
        this.load = true;
      }, 150);
      return;
    }
  }

  get deadline(): string {
    return this.deadlines[this.form.controls['deadline'].value];
  }

  get budget(): string {
    return this.budgets[this.form.controls['budget'].value];
  }

  ngOnInit(): void {
    this.disableScroll();
    this.sectionHeight = this.main.nativeElement.offsetHeight;
  }
}
