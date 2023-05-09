import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id : 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: './././assets/archibald.jpg',
          createdDate: new Date(),
          snaps:150,
          location: 'Paris'
        },
    
        {
            id: 2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: './././assets/mountain.jpg',
          createdDate: new Date(),
          snaps:0,
          location: 'la montagne'
        },
    
        {
            id: 3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: './././assets/repas.jpg',
          createdDate: new Date(),
          snaps:0
        }
        ]

        getAllFaceSnaps() : FaceSnap[] {
            return this.faceSnaps;
        }

        getFaceSnapById(faceSnapId: number): FaceSnap {
            const faceSnap = this.faceSnaps.find( faceSnap  => faceSnap.id === faceSnapId);
            if (faceSnap) {
                return faceSnap;
            }
            else {
                throw new Error('FaceSnap not found !');
            }

        }

       snapFaceSnapById(faceSnapId: number, snap: boolean) : void {
            const faceSnap = this.getFaceSnapById(faceSnapId);
            snap === true ? faceSnap.snaps-- : faceSnap.snaps++;
        }
}