import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  dataArr: any = [];
  dataObj: any = {};

  resultList: any;

  show = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe((res) => {
      this.dataObj = res;
      this.dataObj.forEach((element: any) => {
        this.dataArr.push(element);
      });
    });
    return this.dataArr;
  }

  showResult(input: any) {
    this.show = false;
    this.resultList = document.querySelector('.result');
    this.resultList.innerHTML = '';

    this.dataArr.map((element: string) => {
      input.target.value.split(' ').map((word: string) => {
        if (element.toLowerCase().indexOf(word.toLowerCase()) != -1) {
          this.resultList.innerHTML += `<li class="list-group-item">${element}</li>`;
        }
      });
    });
  }
}
