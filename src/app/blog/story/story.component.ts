import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-story2',
  template: `<h1>This is Story 01</h1>`,
  styles: ['h1 { font-family: Lato; }']
})
export class Story2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
