import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {}

  
  showSuccessAlert() {
    Swal.fire({
      title: 'Success',
      text: 'Operation completed successfully.',
      icon: 'success',
    });
  }

  showErrorAlert() {
    Swal.fire({
      title: 'Error',
      text: 'Something went wrong.',
      icon: 'error',
    });
  }

  showWarningAlert() {
    Swal.fire({
      title: 'Warning',
      text: 'Please proceed with caution.',
      icon: 'warning',
    });
  }
}


