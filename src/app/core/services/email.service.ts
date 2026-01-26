import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Web3Forms - 100% GRATIS sin límites
  // Obtén tu Access Key en: https://web3forms.com
  private readonly WEB3FORMS_URL = 'https://api.web3forms.com/submit';
  private readonly ACCESS_KEY = '0ff99bff-b0a3-4a63-807e-e5e78f1db5e5';

  constructor(private http: HttpClient) {}

  sendEmail(formData: ContactForm): Observable<any> {
    const payload = {
      access_key: this.ACCESS_KEY,
      subject: `Nuevo mensaje de ${formData.name} - ${formData.projectType}`,
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone || 'No proporcionado',
      message: `
Tipo de Proyecto: ${formData.projectType}
Teléfono: ${formData.phone || 'No proporcionado'}

Mensaje:
${formData.message}
      `.trim()
    };

    return this.http.post(this.WEB3FORMS_URL, payload);
  }
}
