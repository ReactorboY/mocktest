import { resend } from '../lib/resend'
import { ApiResponse } from '@/types/ApiResponse'
import VerificationEmail from '../../emails/VerificationEmail'

export async function sendVerificationEmail(
  name: string,
  email: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const res = await resend.emails.send({
      from: 'support@mockyard.com',
      to: email,
      subject: 'MockTest Verification Code',
      react: VerificationEmail({ name, otp: verifyCode })
    })
    console.log('Idhar AAya, response: ', res)

    return { success: true, message: 'Verification email sent successfully.' }
  } catch (emailError) {
    console.error('Error sending verification email:', emailError)
    return { success: false, message: 'Failed to send verification email.' }
  }
}
