import {inject, Injectable, OnDestroy} from "@angular/core";
import {Location} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Injectable({providedIn: "root"})
export class NavigationService implements OnDestroy{
  private history: string[] = []
  router = inject(Router);
  location = inject(Location);
  destroy = new Subject();


  constructor() {
    this.router.events.pipe(
      takeUntil(this.destroy)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  back(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
