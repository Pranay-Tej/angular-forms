import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
})
export class FileInputComponent implements OnInit {
  get fileInput() {
    return this.profileForm.get('fileInput');
  }

  profileForm = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    fileInput: this.formBuilder.control(null, [Validators.required]),
  });

  uploadedFileBase64: string | ArrayBuffer;
  uploadedFileFormData: FormData = new FormData();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fileInput.valueChanges.subscribe((value) => console.log(value));
  }

  onFileChange(event) {
    console.log(event);

    if (!event.target.value) {
      document.querySelector('.customFileName').innerHTML = 'No file chosen';
      document.querySelector('.profileImage').setAttribute('src', '');
      document.querySelector('.profileImage').style.display = 'none';
      document.querySelector('.imagePreviewText').style.display = 'block';
    }
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader();
      const selectedFile = event.target.files[0];
      reader.readAsDataURL(selectedFile);
      console.log(selectedFile);
      document.querySelector('.customFileName').innerHTML = selectedFile.name;

      reader.addEventListener('load', () => {
        this.uploadedFileBase64 = reader.result;
        document
          .querySelector('.profileImage')
          .setAttribute('src', reader.result as any);
        document.querySelector('.profileImage').style.display = 'block';
        document.querySelector('.imagePreviewText').style.display =
          'none';
      });
      // this.uploadedFileFormData = new FormData();
      this.uploadedFileFormData.append(
        'profileImage',
        selectedFile,
        selectedFile.name
      );
    }
  }

  submit() {
    console.log('upload');
    console.log(this.fileInput);
    // console.log(this.uploadedFileBase64);
    console.log('formData', this.uploadedFileFormData);
    console.log('form submit', {
      ...this.profileForm.getRawValue(),
      profileImage: this.uploadedFileBase64,
    });
  }
}
