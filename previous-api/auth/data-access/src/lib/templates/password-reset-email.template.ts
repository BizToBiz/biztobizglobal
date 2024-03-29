import { MailerParams, PreparedMail, PreparedMailer } from '@biztobiz/api/mailer/data-access'

export function passwordResetEmail({
  email,
  firstName,
  passwordResetToken,
}: {
  email: string
  firstName: string
  passwordResetToken: string
}): PreparedMailer {
  return ({ appName, siteUrl }: MailerParams): PreparedMail => {
    const subject = `[${appName}] Password reset request`
    const url = `${siteUrl}/reset-password?token=${passwordResetToken}`

    const text = [
      `Hi ${firstName || 'There'},\n`,
      `We received a request to reset your password. If you did not generate this request, you can ignore this email.\n`,
      `If you need to reset your password, just click on the link below.\n`,
      `${url}\n`,
      `Thanks,\n`,
      `The ${appName} Team\n`,
    ].join('')

    const html = [
      `<p>Hi ${firstName || 'There'},</p>`,
      `<p>We received a request to reset your password. If you did not generate this request, you can ignore this email.</p>`,
      `<p>If you need to reset your password, just click on the link below.</p>`,
      `<p><a href="${url}">Click Here to Reset Your Password</a></p>`,
      `<p>Thanks,<br />The ${appName} Team</p>`,
    ].join('')

    return {
      label: 'password-reset-email',
      email,
      subject,
      html,
      text,
    }
  }
}
