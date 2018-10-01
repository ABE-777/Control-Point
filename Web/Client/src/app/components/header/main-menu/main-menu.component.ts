import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Roles } from '../../../models/roles.enum';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.component.html'
})

export class MainMenuComponent implements OnInit {
  roles = Roles;

  constructor(public authService: AuthService, public route: Router) {};

  @ViewChild('hamburger') hamburger;
  @ViewChild('menuWrap') menuWrap;

  @Output() stateChanged = new EventEmitter();

  ngOnInit() {
    this.handleEvents();
    if (this.route.url === "/archive") {
      this.open();
    }
  }

  handleEvents() {
    let self = this;

    this.hamburger.nativeElement.addEventListener('click', () => this.toggle());

    this.menuWrap.nativeElement.addEventListener('click', function(event) {
      let target = event.target;

      if (target === this) {
        self.close();
        return;
      }

      while (target != this) {
        if (target.classList.contains('main-menu__link')) {
          self.close();
          return;
        }
        target = target.parentNode;
      }
    });
  }

  open() {
    this.menuWrap.nativeElement.classList.add('is-visible');
    this.hamburger.nativeElement.classList.add('is-active');
    this.stateChanged.emit('open');
  }

  close() {
    this.menuWrap.nativeElement.classList.remove('is-visible');
    this.hamburger.nativeElement.classList.remove('is-active');
    this.stateChanged.emit('close');
  }

  toggle() {
    this.menuWrap.nativeElement.classList.toggle('is-visible');
    this.hamburger.nativeElement.classList.toggle('is-active');
    this.menuWrap.nativeElement.classList.contains('is-visible') ? this.stateChanged.emit('open') : this.stateChanged.emit('close');
  }
}

