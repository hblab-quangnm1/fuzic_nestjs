// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

export const EMAIL_TEMPLATE = {
  ja: {
    verifyEmail: {
      subject: '【FUZIC】メールアドレスの認証のお知らせ',
      content: `
            <div>
                <p>FUZICにご登録いただきありがとうございます。</p>
                <p>以下のリンクをクリックして、メールアドレスの認証手続きを完了させてください。</p>
                <br/>
                <a href="<url>" target="_blank">認証リンク</a>
                <br/>
                <br/>
                <p>このリンクは24時間で失効します。リンクが機能しない場合は、再度登録手続きを行ってください。</p>
                <br/>
                <p>このメールに心当たりがない方やお問合せについては、本メールにご返信ください。</p>
                <br/>
                <p>【FUZIC】サポートチーム</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    verifyEmailSuccessful: {
      subject: '【FUZIC】アカウント登録完了のお知らせ',
      content: `
            <div>
                <p>FUZICをご利用いただきありがとうございます。</p>
                <p>アカウントの登録が正常に完了しました。</p>
                <br/>
                <p>これからも【FUZIC】をよろしくお願いいたします。</p>
                <br/>
                <p>このメールに心当たりがない方やお問合せについては、本メールにご返信ください。</p>
                <br/>
                <p>【FUZIC】サポートチーム</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    forgotPasswordEmail: {
      subject: '【FUZIC】パスワード再設定のお知らせ',
      content: `
            <div>
                <p>いつもFUZICをご利用いただきありがとうございます。</p>
                <p>パスワードの再設定を受け付けました。以下のリンクから新しいパスワードを設定してください。</p>
                <br/>
                <a href="<url>" target="_blank">再設定リンク</a>
                <br/>
                <br/>
                <p>このリンクは24時間で失効します。リンクが機能しない場合は、再度パスワード再設定を行ってください。</p>
                <br/>
                <p>このメールに心当たりがない方やお問合せについては、本メールにご返信ください。</p>
                <br/>
                <p>【FUZIC】サポートチーム</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    changePasswordSuccessfulEmail: {
      subject: '【FUZIC】パスワード変更完了のお知らせ',
      content: `
            <div>
                <p>いつもFUZICをご利用いただきありがとうございます。</p>
                <p>パスワードの変更が正常に完了しました。</p>
                <br/>
                <p>安全のため、パスワードは定期的に変更することをお勧めします。</p>
                <br/>
                <p>このメールに心当たりがない方やお問合せについては、本メールにご返信ください。</p>
                <br/>
                <p>【FUZIC】サポートチーム</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    verifyChangeEmail: {
      subject: '【FUZIC】メールアドレス変更の確認のお知らせ',
      content: `
            <div>
                <p>いつもFUZICをご利用いただきありがとうございます。</p>
                <p>メールアドレスの変更を受け付けました。以下のリンクをクリックして、変更を完了させてください。</p>
                <br/>
                <a href="<url>" target="_blank">認証リンク</a>
                <br/>
                <br/>
                <p>このリンクは24時間で失効します。リンクが機能しない場合は、再度メールアドレス変更手続きを行ってください。</p>
                <br/>
                <p>このメールに心当たりがない方やお問合せについては、本メールにご返信ください。</p>
                <br/>
                <p>【FUZIC】サポートチーム</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    changeEmailSuccessful: {
      subject: '【FUZIC】メールアドレス変更完了のお知らせ',
      content: `
            <div>
                <p>いつもFUZICをご利用いただきありがとうございます。</p>
                <p>メールアドレスの変更が正常に完了しました。</p>
                <br/>
                <p>これからもFUZICをよろしくお願いいたします。</p>
                <br/>
                <p>このメールに心当たりがない方やお問合せについては、本メールにご返信ください。</p>
                <br/>
                <p>【FUZIC】サポートチーム</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
  },
  en: {
    verifyEmail: {
      subject: '【FUZIC】Email Address Verification Notice',
      content: `
            <div>
                <p>Thank you for registering with FUZIC.</p>
                <p>Please click the link below to complete the email verification process.</p>
                <br/>
                <a href="<url>" target="_blank">Verification Link</a>
                <br/>
                <p>This link will expire in 24 hours. If the link does not work, please re-register.</p>
                <br/>
                <p>If you do not recognize this email or have any inquiries, please reply to this email.</p>
                <br/>
                <p>The FUZIC Support Team</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    verifyEmailSuccessful: {
      subject: '【FUZIC】Account Registration Completed',
      content: `
            <div>
                <p>Thank you for using FUZIC.</p>
                <p>Your account registration has been successfully completed.</p>
                <br/>
                <p>We look forward to your continued support of FUZIC.</p>
                <br/>
                <p>If you do not recognize this email or have any inquiries, please reply to this email.</p>
                <br/>
                <p>The FUZIC Support Team</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    forgotPasswordEmail: {
      subject: '【FUZIC】Password Reset Notification',
      content: `
            <div>
                <p>Thank you for using FUZIC.</p>
                <p>We have received your request for a password reset. Please use the link below to set a new password.</p>
                <br/>
                <a href="<url>" target="_blank">Reset Link</a>
                <br/>
                <br/>
                <p>This link will expire in 24 hours. If the link does not work, please request a password reset again.</p>
                <br/>
                <p>If you do not recognize this email or have any inquiries, please reply to this email.</p>
                <br/>
                <p>The FUZIC Support Team</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    changePasswordSuccessfulEmail: {
      subject: '【FUZIC】Password Change Completed',
      content: `
            <div>
                <p>Thank you for using FUZIC.</p>
                <p>Your password change has been successfully completed.</p>
                <br/>
                <p>For security reasons, we recommend changing your password regularly.</p>
                <br/>
                <p>If you do not recognize this email or have any inquiries, please reply to this email.</p>
                <br/>
                <p>The FUZIC Support Team</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
    verifyChangeEmail: {
      subject: '【FUZIC】Email Address Change Verification Notice',
      content: `
            <div>
                <p>Thank you for using FUZIC.</p>
                <p>We have received your request to change your email address. Please click the link below to complete the change.</p>
                <br/>
                <a href="<url>" target="_blank">Verification Link</a>
                <br/>
                <p>This link will expire in 24 hours. If the link does not work, please initiate the email address change process again.</p>
                <br/>
                <p>If you do not recognize this email or have any inquiries, please reply to this email.</p>
                <br/>
                <p>The FUZIC Support Team</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
                <br/>
            </div>
            `,
    },
    changeEmailSuccessful: {
      subject: '【FUZIC】Email Address Change Completed Notice',
      content: `
            <div>
                <p>Thank you for using FUZIC.</p>
                <p>Your email address change has been successfully completed.</p>
                <br/>
                <p>We look forward to your continued support of FUZIC.</p>
                <br/>
                <p>If you do not recognize this email or have any inquiries, please reply to this email.</p>
                <br/>
                <p>The FUZIC Support Team</p>
                <br/>
                <p style="color: #990055">© <year> FUZIC. All Rights Reserved.</p>
            </div>
            `,
    },
  },
};
