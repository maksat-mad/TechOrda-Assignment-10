import {Directive, HostListener, inject} from "@angular/core";
import { NavigationService } from "../services/navigation.service";

@Directive({
  selector: '[appBackButton]',
})
export class BackButtonDirective {
  navigation = inject(NavigationService);

  @HostListener("click")
  onClick(): void {
    this.navigation.back();
  }
}
