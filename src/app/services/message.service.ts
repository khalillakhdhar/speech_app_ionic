import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

 
  constructor(private firestore: AngularFirestore) {}


  create_NewMessage(record) {
    return this.firestore.collection('Messages').add(record);
  }

  read_Messages() {
    return this.firestore.collection('Messages', (ref) => ref.orderBy('date')).snapshotChanges();

  }

  update_Message(recordID, record) {
    this.firestore.doc('Messages/' + recordID).update(record);
    console.log('updated');
  }

  delete_Message(record_id) {
    this.firestore.doc('Messages/' + record_id).delete();
  }
}
