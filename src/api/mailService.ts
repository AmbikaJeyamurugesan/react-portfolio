interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class MailService {
  static async sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY
        },
        // credentials: 'include', // ✅ Add this if your Edge Function sends Access-Control-Allow-Credentials: true
        body: JSON.stringify(data)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error('Server response:', result);
        throw new Error(result.message || 'Failed to send email');
      }

      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: (error as Error).message || 'Failed to send email. Please try again later.'
      };
    }
  }
}
