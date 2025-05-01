import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? { forbiddenValue: { value: control.value } } : null;
  };
}

export const confirmPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.password_one === control.value.password_two
    ? null
    : { PasswordDoNotMatch: true };
};

interface TemplateFormI {
  login: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-forms',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements OnInit {
  public templateForm: TemplateFormI = {
    login: 'Pedro',
    email: '',
    password: '',
  };

  constructor(private _fb: FormBuilder) {}

  public get skills() {
    return this.fbForm.get('skills') as FormArray;
  }

  public isLoading: boolean = false;

  public myForm = new FormGroup({
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  public validatorsForm = new FormGroup(
    {
      mail: new FormControl(
        '',
        checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
      ),
      password_one: new FormControl(''),
      password_two: new FormControl(''),
    },
    confirmPassword
  );

  public fbForm!: FormGroup;

  public ngOnInit(): void {
    this.fbForm = this._fb.group({
      name: ['Vasya', Validators.required],
      skills: this._fb.array([]),
    });
  }

  public submit() {
    if (this.myForm.invalid) {
      alert('Форма не валидна');
      return;
    }
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      console.log(this.myForm.value);
    }, 3000);
  }

  public newSkills(): FormGroup {
    return this._fb.group({
      skill: '',
      experience: '',
    });
  }

  public addSkill(): void {
    this.skills.push(this.newSkills());
  }
  public removeSkill(i: number): void {
    this.skills.removeAt(i);
  }

  public onSubmit() {
    console.log(this.fbForm.value);
  }
}
