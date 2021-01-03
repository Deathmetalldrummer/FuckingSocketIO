import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api';
  socket: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.socket = io('http://localhost:4000', {
      transports: ['websocket']
    });
    this.socket.on('connect', () => {
      console.log('connected');
    });
    this.socket.on('fuckYOU', (socket) => {
      console.log('>>>>>>>>>', socket);
    });
  }
  methodX(x): void {
    console.log('socket emitted');
    this.socket.emit('fuck', {fuck: 'socket'});
  }
}
