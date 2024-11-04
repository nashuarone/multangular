import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  getProfiles() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
    // return this.http.get<JsonplaceholderProfile[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`);
  }
}
