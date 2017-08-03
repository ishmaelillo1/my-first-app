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
    constructor() {
    console.log("AllowNewServer = " + this.allowNewServer);

      setTimeout(() => {
        this.allowNewServer = true;
    console.log("AllowNewServer = " + this.allowNewServer);
    },2000);
  }
  ngOnInit(){

  }
  onCreateServer(){
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
