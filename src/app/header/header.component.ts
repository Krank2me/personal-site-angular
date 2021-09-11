import { Component, OnInit } from '@angular/core';
import { faAngry } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faAngry = faAngry;

  constructor() { }

  ngOnInit(): void {
  }

  goGithub() {
    window.location.href = "https://github.com/Krank2me";
  }
}
