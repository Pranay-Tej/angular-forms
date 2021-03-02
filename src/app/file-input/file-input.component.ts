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
    let customFileName = document.querySelector(
      '.customFileName'
    ) as HTMLElement;
    let profileImage = document.querySelector('.profileImage') as HTMLElement;
    let imagePreviewText = document.querySelector(
      '.imagePreviewText'
    ) as HTMLElement;
    let imagePreview = document.querySelector('.imagePreview') as HTMLElement;

    if (!event.target.value) {
      customFileName.innerHTML = 'No file chosen';
      profileImage.setAttribute('src', '');
      profileImage.style.display = 'none';
      imagePreviewText.style.display = 'block';
      imagePreview.classList.add('borderDotted');
    }
    if (event.target.files && event.target.files.length) {
      const reader = new FileReader();
      const selectedFile = event.target.files[0];
      reader.readAsDataURL(selectedFile);
      console.log(selectedFile);
      customFileName.innerHTML = selectedFile.name;

      reader.addEventListener('load', () => {
        this.uploadedFileBase64 = reader.result;
        document
          .querySelector('.profileImage')
          .setAttribute('src', reader.result as any);
        profileImage.style.display = 'block';
        imagePreviewText.style.display = 'none';
        imagePreview.classList.remove('borderDotted');
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
    // console.log(this.fileInput);
    // console.log(this.uploadedFileBase64);
    console.log('formData', this.uploadedFileFormData);
    console.log('form submit', {
      ...this.profileForm.getRawValue(),
      profileImage: this.uploadedFileBase64,
    });
  }
}
