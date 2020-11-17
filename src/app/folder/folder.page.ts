import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  user: User;
  users:any;
connected=false;

  constructor(private activatedRoute: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    localStorage.clear();
    this.user=new User();
this.getUsers();  }
  getUsers() {
    this.userService.read_Users().subscribe(data => {

      this.users = data.map(e => {
        return {
         id: e.payload.doc.id,

         nom: e.payload.doc.data()["nom"],
         prenom: e.payload.doc.data()["prenom"],

         email: e.payload.doc.data()["email"],
         mdp: e.payload.doc.data()["mdp"],
         age: e.payload.doc.data()["age"],
         telephone: e.payload.doc.data()["telephone"],


        };
      });
      console.log(this.users);

    });
  }
 connect()
 {

  for (const us of this.users) {
    if ((this.user.email == us.email) && (this.user.mdp ==us.mdp)) {
    //  alert('ok');
    this.connected=true;
    localStorage.setItem('etat', 'accepte');
    localStorage.setItem('nom',us.nom);
    localStorage.setItem('prenom',us.prenom);
    localStorage.setItem('email',us.email);
    localStorage.setItem('mdp',us.mdp);
    localStorage.setItem('telephone',us.telephone);
    localStorage.setItem('id',us.id);

    window.location.replace('profile');
  
    }
  }


 
 if(!this.connected)
 {
   alert("compte inconnu");
 }
}
}
