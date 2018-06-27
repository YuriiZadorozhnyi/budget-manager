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
    const modalData = {
      title: 'Confirmation Modal',
      question: 'Are you sure you want to exit ?',
      cancelBtn: 'Cancel',
      okBtn: 'Exit'
    };
    const modalRef = this.sharedModalProvider.openConfirmationModal(modalData);
    modalRef.afterClosed().subscribe(res => {
      if (res) {
        this.router.navigate(['/auth']);
        localStorage.removeItem('user');
      }
    });
  }

}
