// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Zibral Healthcare <onboarding@resend.dev>',
      to: ['zibralhealthcare2021@gmail.com'], // ← PRIMARY: Healthcare email
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #000000; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3acb46, #2d8835); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2feb25; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>Zibral Healthcare</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">📝 Name:</span>
                <p>${name}</p>
              </div>
              <div class="field">
                <span class="label">📧 Customer Email:</span>
                <p>${email}</p>
              </div>
              <div class="field">
                <span class="label">📌 Subject:</span>
                <p>${subject}</p>
              </div>
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="message-box">
                  <p>${message.replace(/\n/g, '<br/>')}</p>
                </div>
              </div>
              <hr />
              <p style="font-size: 12px; color: #000000;">Reply to customer at: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}