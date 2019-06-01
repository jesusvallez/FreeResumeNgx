import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formGroup: FormGroup
  privateInfoArray: FormArray
  previewLoadFile: any

  constructor(private formBuilder: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {

    // publicInfo: this.formBuilder.group({
    //   name: '',
    //   addressLine1: ['', [Validators.required]],
    //   city: ['', [Validators.required]],
    //   postalCode: [Validators.required],
    // }),

    this.formGroup = this.formBuilder.group({
      profile: this.formBuilder.group({
        name: new FormControl('', []),
        photo: new FormControl('', []),
        ocupation: new FormControl('', []),
      }),
      privateInfo: this.formBuilder.array([
        this.createPrivateInfo()
      ])
    },
    {
      validators: [ ]
    })
  }

  createPrivateInfo(): FormGroup {
    return this.formBuilder.group({
      icon: new FormControl('', []),
      type: new FormControl('', []),
      href: new FormControl('', []),
      text: new FormControl('', [])
    })
  }

  addPrivateInfo(): void {
    this.privateInfoArray = this.formGroup.get('privateInfo') as FormArray
    this.privateInfoArray.push(this.createPrivateInfo())
  }

  removeLastPrivateInfo(): void {
    this.privateInfoArray.removeAt(this.privateInfoArray.length - 1)
  }

  onFileChange(event) {
    const reader = new FileReader()

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files
      reader.readAsDataURL(file)

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
       })

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck()
      }
    }
  }

  onFileSelected(event) {
    const reader = new FileReader()
    this.previewLoadFile = null

    reader.onload = (onloadEvent: any) => {
      this.previewLoadFile = onloadEvent.target.result
    }

    reader.readAsDataURL(<File>event.target.files[0])
  }

  onSubmit () {
    const formObj = this.formGroup.getRawValue()
    console.log(formObj)
  }

}
