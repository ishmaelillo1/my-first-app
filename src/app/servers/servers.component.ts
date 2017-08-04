import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!' ;
  serverName="Test server name";
  userName : string;
  serverCreated = false;
  detailsDisplayed = false;
  btnClicks =[];
  Clicks = 0;
  servers = ['Server 1', 'Server 2'];
    constructor() {
    console.log("AllowNewServer = " + this.allowNewServer);

      setTimeout(() => {
        this.allowNewServer = true;
    console.log("AllowNewServer = " + this.allowNewServer);
    },2000);
  }
  ngOnInit(){

  }
  onDisplayDetails(){
    this.detailsDisplayed = !this.detailsDisplayed;
    this.Clicks++;
    this.btnClicks.push(this.Clicks);
    console.log(this.Clicks);
  }
  getButtonText(){
    return this.detailsDisplayed ? 'Hide Details' : 'Display Details';
  }
  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated= true;
    this.serverCreationStatus = 'server was created!!' + this.serverName;
  }
  onUpdateServerName(event:any){
    console.log(event);
    this.serverName = event.target.value;
  }
  onResetUser(){
    this.userName="";
  }
}
