export interface MailContent {
  toEmail: string;
  subject: string;
  text: string;
  html?: string; // Make html optional
}

export interface MailResponse {
  success: boolean;
  message: string;
}
