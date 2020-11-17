import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class RappelService {
  constructor(private firestore: AngularFirestore) {}

  create_NewRappel(record) {
    return this.firestore.collection("Rappels").add(record);
  }

  read_Rappels() {
    return this.firestore.collection("Rappels").snapshotChanges();
  }

  update_Rappel(recordID, record) {
    this.firestore.doc("Rappels/" + recordID).update(record);
    console.log("updated");
  }

  delete_Rappel(record_id) {
    this.firestore.doc("Rappels/" + record_id).delete();
  }
}
