import { SMTPClient } from "npm:emailjs@4.0.3";

// CORS headers for your Netlify frontend
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // no trailing slash
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

Deno.serve(async (req) => {
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  let client: SMTPClient | null = null;

  try {
    const data = await req.json();

    // Validate input
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields');
    }

    // Required SMTP env variables
    const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'SMTP_TO'];
    const missing = requiredEnv.filter((key) => !Deno.env.get(key));
    if (missing.length > 0) throw new Error(`Missing environment variables: ${missing.join(', ')}`);

    // SMTP config
    const host = Deno.env.get('SMTP_HOST')!;
    const port = Number(Deno.env.get('SMTP_PORT'));
    const user = Deno.env.get('SMTP_USER')!;
    const password = Deno.env.get('SMTP_PASS')!;
    const from = Deno.env.get('SMTP_FROM')!;
    const to = Deno.env.get('SMTP_TO')!;

    client = new SMTPClient({ host, port, user, password, ssl: true });

    // Compose message
    const message = {
      from: `"${data.name}" <${from}>`,
      to,
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.subject}`,
      text: `
From: ${data.name} <${data.email}>
Subject: ${data.subject}

${data.message}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> ${data.name} &lt;${data.email}&gt;</p>
<p><strong>Subject:</strong> ${data.subject}</p>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `.trim()
    };

    // Send email
    await client.sendAsync(message);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error: any) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    });

  } finally {
    if (client) {
      try { client.close(); } 
      catch (e) { console.error('Error closing SMTP connection:', e); }
    }
  }
});
