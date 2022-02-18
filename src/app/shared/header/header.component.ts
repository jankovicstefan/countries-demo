import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public selectedTheme: any;

  ngOnInit(): void {
    this.selectedTheme = localStorage.getItem('theme');
    if (!this.selectedTheme) {
      this.selectedTheme = 'light';
      localStorage.setItem('theme', this.selectedTheme);
    }
    document.body.classList.add(this.selectedTheme);
  }

  toggleTheme() {
    let tmpTheme = this.selectedTheme;
    this.selectedTheme === 'light' ? this.selectedTheme = 'dark' : this.selectedTheme = 'light';
    localStorage.setItem('theme', this.selectedTheme);
    document.body.classList.replace(tmpTheme, this.selectedTheme);
  }

}
