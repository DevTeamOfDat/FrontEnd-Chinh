import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { UserState, getLogin } from '../../login/_reducers';
import { Router, ActivatedRoute } from '@angular/router';
import * as userLogin from '../../login/_action/userAction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
