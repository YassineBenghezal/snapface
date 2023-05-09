import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  faceSnap!: FaceSnap;

  userSnapped! : boolean;
  buttonText! : string;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.userSnapped = false;
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
}
