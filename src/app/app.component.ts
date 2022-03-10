import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  data:any;
  display:any = "none";
  constructor(private http: HttpClient){
    this.getJSON().subscribe(data => {
      console.log(data);
      this.data = data;
  });
  }
  ngOnInit(){
    document.body.style.background = "grey";
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/mentor.json");
}
  closed(){
    this.display = "none";
}
open(){
  this.display = "block";
}
}
