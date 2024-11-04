import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileCardComponent } from '../../ui/profile-card/profile-card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  title = 'multangular )';
  profileService = inject(ProfileService);
  profiles: Profile[] = []

  constructor() {
    this.profileService.getProfiles().subscribe((res) => {
      console.log(res);
      this.profiles = res
    });
  }
}
