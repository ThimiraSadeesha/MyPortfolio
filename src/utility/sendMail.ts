import { createTransport } from 'nodemailer';

export const sendMail = async function (
    name: string,
    email: string | 'SELF',
    subject: string,
    message: string,
): Promise<{ status: number; message: string }> {
  const user ='sadeethimira1234@gmail.com';
  const pass = '123sadee';

  if (!user || !pass) {
    return { status: 500, message: 'Internal server error' };
  }

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user,
    to: user,
    subject: `Portfolio: [${subject}]`,
    text: `${name}: <${email}>\n${message}`,
  };

  return new Promise((resolve) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        resolve({ status: 500, message: 'Failed to send mail' });
      } else {
        resolve({ status: 200, message: 'Mail sent successfully' });
      }
    });
  });
};
