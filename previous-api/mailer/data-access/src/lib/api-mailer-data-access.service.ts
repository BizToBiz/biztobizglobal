import { Injectable, Logger } from '@nestjs/common'
import { createTransport } from 'nodemailer'
import * as Mail from 'nodemailer/lib/mailer'
import { ApiCoreFeatureService } from '@biztobiz/api/core/feature'

export type PreparedMailer = (params: MailerParams) => PreparedMail

export interface MailerParams {
  appEmail: string
  appName: string
  siteUrl: string
}

export interface PreparedMail {
  label: string
  email: string
  html: string
  text: string
  subject: string
}

@Injectable()
export class ApiMailerDataAccessService {
  private readonly logger = new Logger('ApiMailerService')
  private readonly mailer: Mail
  private readonly appEmail: string
  private readonly appName: string
  private readonly appSupportEmail: string
  private readonly siteUrl: string

  constructor(private readonly config: ApiCoreFeatureService) {
    this.mailer = createTransport(this.config.mailerConfig)
    this.appEmail = this.config.appEmail
    this.appName = this.config.appName
    this.appSupportEmail = this.config.appSupportEmail
    this.siteUrl = this.config.siteUrl
  }

  async send(mailer: PreparedMailer) {
    const { email, html, label, subject, text } = mailer({
      appEmail: this.appEmail,
      appName: this.appName,
      siteUrl: this.siteUrl,
    })

    const from = `${this.appName} <${this.appEmail}>`
    const res = await this.mailer.sendMail({ to: email, from, subject, html, text })
    this.logger.verbose(`sendPreparedMail ${label} result: ${res.response} ${res.messageId}`)
    return res
  }
}
