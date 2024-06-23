import { resend } from '../lib/resend'
import { ApiResponse } from '@/types/ApiResponse'
import VerificationEmail from '../../emails/VerificationEmail'

export async function sendVerificationEmail(
  email: string,
  name: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: 'mockyardhelp@gmail.com',
      to: email,
      subject: 'MockTest Verification Code',
      react: VerificationEmail({ name, otp: verifyCode })
    })
    return { success: true, message: 'Verification email sent successfully.' }
  } catch (emailError) {
    console.error('Error sending verification email:', emailError)
    return { success: false, message: 'Failed to send verification email.' }
  }
}
