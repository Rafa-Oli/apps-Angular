import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {


  @Input() public progresso: number = 0 // recebe valores de fora
  constructor() { }

  ngOnInit(): void {
  }



}
