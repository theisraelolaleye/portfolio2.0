# Contact Form Email Setup

The contact form API is ready but needs email integration to actually send messages.

## Current Status

✅ Form validation (client & server-side)  
✅ API endpoint (`/api/contact`)  
✅ Error handling  
⏳ Email sending (needs setup)

## Setup Email Sending

### Option 1: Resend (Recommended - Easy & Modern)

1. **Install Resend:**

   ```bash
   npm install resend
   ```

2. **Get API Key:**

   - Sign up at https://resend.com
   - Get your API key from dashboard
   - Add to `.env.local`:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     ```

3. **Update `app/api/contact/route.ts`:**

   ```typescript
   import { Resend } from "resend";

   const resend = new Resend(process.env.RESEND_API_KEY);

   // In POST handler, replace the console.log with:
   await resend.emails.send({
   	from: "onboarding@resend.dev", // Use verified domain in production
   	to: "theisraelolaleye@gmail.com",
   	replyTo: email,
   	subject: `Portfolio Contact: ${subject}`,
   	html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>From:</strong> ${name} (${email})</p>
       <p><strong>Subject:</strong> ${subject}</p>
       <p><strong>Message:</strong></p>
       <p>${message.replace(/\n/g, "<br>")}</p>
     `,
   });
   ```

---

### Option 2: SendGrid

1. **Install SendGrid:**

   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**

   - Sign up at https://sendgrid.com
   - Create API key
   - Add to `.env.local`:
     ```
     SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
     ```

3. **Update route:**

   ```typescript
   import sgMail from "@sendgrid/mail";

   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

   await sgMail.send({
   	to: "theisraelolaleye@gmail.com",
   	from: "verified@yourdomain.com", // Must be verified
   	replyTo: email,
   	subject: `Portfolio Contact: ${subject}`,
   	text: message,
   	html: `...`,
   });
   ```

---

### Option 3: Nodemailer (Gmail SMTP)

1. **Install:**

   ```bash
   npm install nodemailer
   npm install -D @types/nodemailer
   ```

2. **Setup Gmail App Password:**

   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate app password
   - Add to `.env.local`:
     ```
     EMAIL_USER=theisraelolaleye@gmail.com
     EMAIL_PASS=xxxx xxxx xxxx xxxx
     ```

3. **Update route:**

   ```typescript
   import nodemailer from "nodemailer";

   const transporter = nodemailer.createTransport({
   	service: "gmail",
   	auth: {
   		user: process.env.EMAIL_USER,
   		pass: process.env.EMAIL_PASS,
   	},
   });

   await transporter.sendMail({
   	from: process.env.EMAIL_USER,
   	to: "theisraelolaleye@gmail.com",
   	replyTo: email,
   	subject: `Portfolio Contact: ${subject}`,
   	text: message,
   	html: `...`,
   });
   ```

---

## Testing

1. **Local Testing:**

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000/contact and submit the form

2. **Check Console:**

   - Submissions are currently logged to console
   - Check terminal for form data

3. **Test Email (after setup):**
   - Submit test message
   - Check inbox (theisraelolaleye@gmail.com)
   - Verify reply-to address works

---

## Production Checklist

- [ ] Choose email service and set up account
- [ ] Add environment variables to Vercel/hosting
- [ ] Verify sender domain (for SendGrid/Resend)
- [ ] Test from production URL
- [ ] Set up email templates (optional)
- [ ] Add rate limiting to prevent spam
- [ ] Consider honeypot field for bot protection

---

## Email Template Ideas

You can create a better HTML template:

```typescript
const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #3B82F6; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Contact</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">From:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> ${email}
      </div>
      <div class="field">
        <span class="label">Subject:</span> ${subject}
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
  </div>
</body>
</html>
`;
```

---

## Troubleshooting

**"Module not found" error:**

- Make sure you've installed the email package
- Restart dev server after installing

**Emails not sending:**

- Check API key is correct in `.env.local`
- Verify sender email is verified (SendGrid/Resend)
- Check spam folder
- Look at API error logs

**Rate limiting:**

- Consider adding Upstash Rate Limit or similar
- Implement CAPTCHA for production
