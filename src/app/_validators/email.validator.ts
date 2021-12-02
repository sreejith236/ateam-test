import { FormControl } from "@angular/forms";

export interface ValidationResult {
  [key: string]: boolean;
}

export class EmailValidatorUser {
  public static strong(control: FormControl): ValidationResult {
    let emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(
      control.value
    );

    if (!emailRegexp) {
      return { strong: true };
    }
    return null;
  }
}
