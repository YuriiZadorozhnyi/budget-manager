import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { SharedModalProvider } from '@share/modals/shared-modal-provider.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private router: Router,
              private sharedModalProvider: SharedModalProvider) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  signOut() {
    const title = 'Confirmation Modal';
    const question = 'Are you sure you want to exit ?';
    const cancelBtn = 'Cancel';
    const okBtn = 'Exit';
    const modalRef = this.sharedModalProvider.openConfirmationModal(title, question, cancelBtn, okBtn);
    modalRef.afterClosed().subscribe(res => {
      if (res) {
        this.router.navigate(['/auth']);
        localStorage.removeItem('user');
      }
    });
  }

}
