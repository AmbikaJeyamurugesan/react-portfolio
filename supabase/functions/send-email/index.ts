import { Resend } from "npm:resend@3.2.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  try {
    const data = await req.json() as EmailData;
    
    // Validate input data
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new Error('Missing required fields');
    }

    // Get Resend API key
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const toEmail = Deno.env.get('TO_EMAIL');

    if (!resendApiKey || !toEmail) {
      throw new Error('Missing email configuration');
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: toEmail,
      reply_to: data.email,
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
      `.trim(),
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: error.message
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});