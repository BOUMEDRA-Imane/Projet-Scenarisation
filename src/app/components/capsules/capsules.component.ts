import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss']
})
export class CapsulesComponent implements OnInit {
  cheminImage1:any="assets/img/plus.png";

  constructor() { }

  ngOnInit(): void {
  }

}
