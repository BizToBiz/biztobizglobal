import { PreparedMail, PreparedMailer } from '@biztobiz/api/mailer/data-access'

export function attendanceReminderEmail({ email, firstName }: { email: string; firstName: string }): PreparedMailer {
  return (): PreparedMail => {
    const subject = `Biz to Biz Global Networking – Attendance Reminder`

    const text = [
      `Dear ${firstName || 'Member'},\n`,
      `It has come to our attention that you have missed a number of meetings requiring us to send out this
reminder about the attendance policy. We sincerely hope you are okay and if there is something we should
be aware of, please reach out.\n`,
      `>We are sending you this reminder to make you aware that your membership may be in jeopardy with Biz to
Biz. We send a reminder when a member has missed two meetings in a row, three in a two-month time
period, or twelve in a year. In the event you miss a third meeting in a row, a fourth in a two-month period, or a
thirteenth in a year your membership will be canceled.\n`,
      `------------------------------------------------------------\n`,
      `In case it may have slipped your mind, our attendance policy is as follows:\n`,
      `------------------------------------------------------------\n`,
      `Attendance Policy: Each member of Biz to Biz Global Networking is a very busy individual and time is one of
the most valuable assets each one has. Therefore, it is imperative that each member is dedicated to their
chapter and weekly attendance should be of utmost importance. Without weekly participation from all
members the chapter will not achieve its primary objective which is business growth for each of its
members. Attendance is necessary to better understand each member's business so that referrals can be
most effective. Each member however will on occasion need to miss a meeting due to business needs,
education for licensing or illness/personal matters, etc., so with that in mind a member may miss no more
than two consecutive weeks in a row, no more than three missed in a two calendar month time frame, and no
more than twelve missed in a year. Any absences in the excess of this number would create an immediate
termination of membership. The member may avoid some absenteeism by sending a substitute in their
place to represent them. The substitute however may not be a member of the same chapter.\n`,
      `------------------------------------------------------------\n`,
      `If your membership should be closed, the following policy is in place:\n`,
      `------------------------------------------------------------\n`,
      `Terminated Memberships: Memberships closed due to violation of the attendance policy may not reapply for
a membership with any chapter for a period of 6 months. They will need to complete an application with the
appropriate fees for consideration. Memberships terminated due to violation of code of conduct may not
reapply for one year and application must be approved by majority vote of the advisory board.\n`,
      `------------------------------------------------------------\n`,
      `If some sort of emergency situation has arisen, please call the Biz office right away at 1-877-224-9224 or
email memberservices@biztobiznow.com. It is not our intent to bring additional hardship to you in this
situation.\n`,
      `We hope this letter finds you well and we hope that you will reach out in the event of any extenuating
circumstances.\n`,
      `From the Support Team at Biz To Biz\n`,
    ].join('')

    const html = [
      `<p>Dear ${firstName || 'Member'},</p>`,
      `<p>It has come to our attention that you have missed a number of meetings requiring us to send out this
reminder about the attendance policy. We sincerely hope you are okay and if there is something we should
be aware of, please reach out.</p>`,
      `<p>We are sending you this reminder to make you aware that your membership may be in jeopardy with Biz to
Biz. We send a reminder when a member has missed two meetings in a row, three in a two-month time
period, or twelve in a year. In the event you miss a third meeting in a row, a fourth in a two-month period, or a
thirteenth in a year your membership will be canceled.</p>`,
      `<p>In case it may have slipped your mind, our attendance policy is as follows:</p>`,
      `<p>------------------------------------------------------------<br />
Attendance Policy: Each member of Biz to Biz Global Networking is a very busy individual and time is one of
the most valuable assets each one has. Therefore, it is imperative that each member is dedicated to their
chapter and weekly attendance should be of utmost importance. Without weekly participation from all
members the chapter will not achieve its primary objective which is business growth for each of its
members. Attendance is necessary to better understand each member's business so that referrals can be
most effective. Each member however will on occasion need to miss a meeting due to business needs,
education for licensing or illness/personal matters, etc., so with that in mind a member may miss no more
than two consecutive weeks in a row, no more than three missed in a two calendar month time frame, and no
more than twelve missed in a year. Any absences in the excess of this number would create an immediate
termination of membership. The member may avoid some absenteeism by sending a substitute in their
place to represent them. The substitute however may not be a member of the same chapter.<br />
------------------------------------------------------------</p>`,
      `<p>If your membership should be closed, the following policy is in place:</p>`,
      `<p>------------------------------------------------------------<br />
Terminated Memberships: Memberships closed due to violation of the attendance policy may not reapply for
a membership with any chapter for a period of 6 months. They will need to complete an application with the
appropriate fees for consideration. Memberships terminated due to violation of code of conduct may not
reapply for one year and application must be approved by majority vote of the advisory board.<br />
------------------------------------------------------------</p>`,
      `<p>If some sort of emergency situation has arisen, please call the Biz office right away at 1-877-224-9224 or
email memberservices@biztobiznow.com. It is not our intent to bring additional hardship to you in this
situation.</p>`,
      `<p>We hope this letter finds you well and we hope that you will reach out in the event of any extenuating
circumstances.</p>`,
      `<p>From the Support Team at Biz To Biz</p>`,
    ].join('')

    return {
      label: 'attendance-reminder-email',
      email,
      subject,
      html,
      text,
    }
  }
}
