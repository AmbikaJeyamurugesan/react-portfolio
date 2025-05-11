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
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(data)
      });

      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.'
      };
    }
  }
}