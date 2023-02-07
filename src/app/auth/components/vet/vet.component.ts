import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get/get.service';

@Component({
  selector: 'app-vet',
  templateUrl: './vet.component.html',
  styleUrls: ['./vet.component.scss']
})
export class VetComponent implements OnInit {
vet:any
  constructor(private get:GetService) { }

  async ngOnInit(): Promise<void> {
    this.vet = await this.get.getallusers(2)
  }

}
