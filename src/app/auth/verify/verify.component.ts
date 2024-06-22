import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verify',
  // Make the conditional verification
  template: `
  <div class="container">
    <h2>Verification successful!!</h2>
    <p>The email {{email}} has been seccessfully verified</p>
  </div>`,
  styles: ``
})
export class VerifyComponent {
  @Input() email: string = 'john@gmail.com';

}
