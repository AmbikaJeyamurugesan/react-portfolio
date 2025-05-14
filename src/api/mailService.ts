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
        credentials: 'include',
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Server response:', errorData);
        throw new Error(errorData.message || 'Failed to send email');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: (error as Error).message || 'Failed to send email. Please try again later.'
      };
    }
  }
}
