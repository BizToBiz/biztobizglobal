import { PreparedMail, PreparedMailer } from '@b2b-network/api/data-access-mailer'

export function attendanceTerminationEmail({ email, firstName }: { email: string; firstName: string }): PreparedMailer {
  return (): PreparedMail => {
    const subject = `Biz to Biz Global Networking – Attendance Termination`

    const text = [
      `Dear ${firstName || 'Member'},\n`,
      `Sadly, we must inform you that your membership with Biz to Biz has been closed effective
immediately. You have exceeded the number of allowed absences. If you wish to rejoin a Biz to Biz
chapter, please review the Terminated Members section of this letter. We want to thank you for all
you have contributed to your chapter, and we hope to see you as a member again in the future!\n`,
      `Our attendance policy is as follows:\n`,
      `------------------------------------------------------------\n`,
      `Attendance Policy: Each member of Biz to Biz Global Networking is a very busy individual and time
is one of the most valuable assets each one has. Therefore, it is imperative that each member is
dedicated to their chapter and weekly attendance should be of utmost importance. Without weekly
participation from all members the chapter will not achieve its primary objective which is business
growth for each of its members. Attendance is necessary to better understand each member's
business so that referrals can be most effective. Each member however will on occasion need to
miss a meeting due to business needs, education for licensing or illness/personal matters, etc., so
with that in mind a member may miss no more than two consecutive weeks in a row, no more than
three missed in a two calendar month time frame, and no more than twelve missed in a year. Any
absences in the excess of this number would create an immediate termination of membership.
The member may avoid some absenteeism by sending a substitute in their place to represent
them. The substitute however may not be a member of the same chapter.\n`,
      `------------------------------------------------------------\n`,
      `As a result of your membership being closed, the following policy is in place:\n`,
      `------------------------------------------------------------\n`,
      `Terminated Members: Members terminated due to violation of attendance policy may not reapply
for a membership with any chapter for a period of 6 months. They will need to complete an
application with the appropriate fees for consideration. Members terminated due to violation of
code of conduct may not reapply for one year and application must be approved by majority vote of
the advisory board.\n`,
      `------------------------------------------------------------\n`,
      `If you wish to contact the Home Office about this, please call 1-877-224-9224 or email
memberservices@biztobiznow.com.\n`,
      `We hope this letter finds you well and wish you the best of luck in your future!\n`,
      `From the Support Team at Biz To Biz\n`,
    ].join('')

    const html = [
      `<p>Dear ${firstName || 'Member'},</p>`,
      `<p>Sadly, we must inform you that your membership with Biz to Biz has been closed effective
immediately. You have exceeded the number of allowed absences. If you wish to rejoin a Biz to Biz
chapter, please review the Terminated Members section of this letter. We want to thank you for all
you have contributed to your chapter, and we hope to see you as a member again in the future!</p>`,
      `<p>Our attendance policy is as follows:</p>`,
      `<p>------------------------------------------------------------<br />
Attendance Policy: Each member of Biz to Biz Global Networking is a very busy individual and time
is one of the most valuable assets each one has. Therefore, it is imperative that each member is
dedicated to their chapter and weekly attendance should be of utmost importance. Without weekly
participation from all members the chapter will not achieve its primary objective which is business
growth for each of its members. Attendance is necessary to better understand each member's
business so that referrals can be most effective. Each member however will on occasion need to
miss a meeting due to business needs, education for licensing or illness/personal matters, etc., so
with that in mind a member may miss no more than two consecutive weeks in a row, no more than
three missed in a two calendar month time frame, and no more than twelve missed in a year. Any
absences in the excess of this number would create an immediate termination of membership.
The member may avoid some absenteeism by sending a substitute in their place to represent
them. The substitute however may not be a member of the same chapter.<br />
------------------------------------------------------------</p>`,
      `<p>As a result of your membership being closed, the following policy is in place:</p>`,
      `<p>------------------------------------------------------------<br />
Terminated Members: Members terminated due to violation of attendance policy may not reapply
for a membership with any chapter for a period of 6 months. They will need to complete an
application with the appropriate fees for consideration. Members terminated due to violation of
code of conduct may not reapply for one year and application must be approved by majority vote of
the advisory board.<br />
------------------------------------------------------------</p>`,
      `<p>If you wish to contact the Home Office about this, please call 1-877-224-9224 or email
memberservices@biztobiznow.com.</p>`,
      `<p>We hope this letter finds you well and wish you the best of luck in your future!</p>`,
      `<p>From the Support Team at Biz To Biz</p>`,
    ].join('')

    return {
      label: 'attendance-termination-email',
      email,
      subject,
      html,
      text,
    }
  }
}
