import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public sort: string | undefined;
  constructor() {}
  ngOnInit() {
    // console.log(this.sort);
  }
}
