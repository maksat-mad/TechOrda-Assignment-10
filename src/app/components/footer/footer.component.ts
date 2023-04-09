import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  links = [
    ['https://vk.com/', 'assets/social-media-icons/vk.svg', 'vk'],
    ['https://twitter.com/', 'assets/social-media-icons/twitter.svg', 'twitter'],
    ['https://telegram.org/', 'assets/social-media-icons/telegram.svg', 'telegram'],
    ['https://www.youtube.com/', 'assets/social-media-icons/youtube.svg', 'youtube']
  ];
}
