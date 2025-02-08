'use server';

import { Resend } from 'resend';

interface EmailResponse {
  success: boolean;
  message: string;
}


const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
  prevState: EmailResponse | null,
  formData: FormData,
): Promise<EmailResponse> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: email, 
      to: process.env.TO_EMAIL as string,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      
      html: `
        <h2>your message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email.' };
  }
}