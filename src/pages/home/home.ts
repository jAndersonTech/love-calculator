import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1 = '';
  name2 = '';
  android = false;

  constructor(private plt: Platform) {
    StatusBar.hide();

    if(plt.is('android')) {
      this.android = true;
    }
  }

  get score() {

  	const letters = (this.name1 + this.name2).toLowerCase();

  	let sum = 0;
  	for(let i = 0; i < letters.length; i++) {
  		sum += letters.charCodeAt(i);
  	}

  	return sum % 101;
  }

}
