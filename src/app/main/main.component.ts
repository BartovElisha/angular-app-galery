import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  imageUrl:string = '';

  ngOnInit(): void {
  }

    showImage(url:HTMLInputElement) {
      console.log(url.value);
      this.imageUrl = url.value;
      url.value = '';
  }

}
