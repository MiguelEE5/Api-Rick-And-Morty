import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileId: string | null = null; // Permitir null inicialmente
  character: any; // Asegúrate de tipar esto si tienes una interfaz definida para los personajes

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (this.profileId) { // Verifica si profileId no es null
      this.http
        .get(`https://rickandmortyapi.com/api/character/${this.profileId}`)
        .subscribe((res) => {
          this.character = res;
        });
    } else {
      console.error('Profile ID not found');
      // Maneja el caso en que profileId es null si es necesario
    }
  }
}

