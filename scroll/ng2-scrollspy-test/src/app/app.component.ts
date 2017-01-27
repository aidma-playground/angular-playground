// import { Component } from '@angular/core';
import { NgModule, Component, Injectable, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollSpyModule, ScrollSpyService } from 'ng2-scrollspy';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  constructor(private scrollSpyService: ScrollSpyService) {}
  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe((e: any) => {
      console.log('ScrollSpy::window: ', e);
    });
    // this.scrollSpyService.getObservable('test').subscribe((e: any) => {
    //   console.log('ScrollSpy::test: ', e);
    // });
  }
}

@NgModule({
  imports: [
        ScrollSpyModule
  ],
  declarations: [
    AppComponent
  ],
  providers: []
})
export class YourModule { }
