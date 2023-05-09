import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userSnapped! : boolean;
  buttonText! : string;

  constructor(private faceSnapService: FaceSnapService,
              private router: Router){}

  ngOnInit(): void {
    this.userSnapped = false;
    this.buttonText = 'Oh Snap!';
  }

  onClickSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,this.userSnapped);
    this.userSnapped=!this.userSnapped;
    if (this.userSnapped){
      this.buttonText = "Oops, unSnap!"
    }
    else {
      this.buttonText = "Oh Snap!"
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
