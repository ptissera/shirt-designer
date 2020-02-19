import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 't-shirt-designer';
   colorList = [
    {name: 'color 1', color: '#dacd4a'},
    {name: 'color 2', color: '#293e7a'},
    {name: 'color 3', color: '#1e263f'},
    {name: 'color 4', color: '#ffffff'},
    {name: 'color 5', color: '#6d0b1c'},
    {name: 'color 6', color: '#6b96a6'},
    {name: 'color 7', color: '#4d8fcc'},
    {name: 'color 8', color: '#b32753'},
    {name: 'color 9', color: '#909195'},
    {name: 'color1 0', color: '#58585a'},
    {name: 'color 11', color: '#786092'},
    {name: 'color 12', color: '#62472d'},
    {name: 'color 13', color: '#d56326'},
    {name: 'color 14', color: '#000000'},
    {name: 'color 15', color: '#c72424'},
    {name: 'color 16', color: '#b02575'},
    {name: 'color 17', color: '#54988c'},
    {name: 'color 18', color: '#468146'},
    {name: 'color 19', color: '#263e32'},
    {name: 'color 20', color: '#874997'}
 ];

  color = ['#000', '#000', '#000', '#000', '#fff'];

    constructor() {
    this.color[0]=this.colorList[1].color;
    this.color[1]=this.colorList[4].color;
    this.color[2]=this.colorList[8].color;
    this.color[3]=this.colorList[12].color;
    this.color[4]=this.colorList[13].color;
    }

    selectColor(index, color) {
      this.color[index] = color;
    }
}
