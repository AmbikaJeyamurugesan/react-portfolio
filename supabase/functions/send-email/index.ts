import { SMTPClient } from "npm:emailjs@4.0.3";
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://ambi-portfolio.netlify.app/',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};
Deno.serve(async (req)=>{
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }
  let client = null;
  try {
    const data = await req.json();
    // Validate input data
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields');
    }
    const requiredEnv = [
      'SMTP_HOST',
      'SMTP_PORT',
      'SMTP_USER',
      'SMTP_PASS',
      'SMTP_FROM',
      'SMTP_TO'
    ];
    const missing = requiredEnv.filter((key)=>!Deno.env.get(key));
    if (missing.length > 0) {
      console.error('Missing environment variables:', missing.join(', '));
      throw new Error('Invalid SMTP configuration');
    }
    // Validate SMTP configuration
    const host = Deno.env.get('SMTP_HOST');
    const port = Number(Deno.env.get('SMTP_PORT'));
    const user = Deno.env.get('SMTP_USER');
    const password = Deno.env.get('SMTP_PASS');
    const from = Deno.env.get('SMTP_FROM');
    const to = Deno.env.get('SMTP_TO');
    if (!host || !port || !user || !password || !from || !to) {
      throw new Error('Invalid SMTP configuration');
    }
    client = new SMTPClient({
      host,
      port,
      user,
      password,
      ssl: true
    });
    const message = {
      from: `"${data.name}" <${from}>`,
      to: to,
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
    await client.sendAsync(message);
    return new Response(JSON.stringify({
      success: true,
      message: 'Email sent successfully'
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 200
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      },
      status: 500
    });
  } finally{
    // Clean up SMTP connection
    if (client) {
      try {
        client.close();
      } catch (e) {
        console.error('Error closing SMTP connection:', e);
      }
    }
  }
});
