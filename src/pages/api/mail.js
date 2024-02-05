// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
mail.setApiKey('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');

export default async function handler (req, res)  {
   
    const body = JSON.parse(req.body);
    console.log(body);
    const data = {
        to: 'jayveepasahol@gmail.com',
        from: body.from,
        subject: `${body.subject}`,
        html: `<p><strong>Name:</strong>${body.name}</p>
            <p><strong>Email:</strong>${body.email}</p>
            <p><strong>Contact Number:</strong>${body.number}</p>
            <p><strong>Message:</strong>${body.message}</p>
            `,
    }
        mail.send(data);
        res.status(200).json({ status: "Ok" });
 
  }
  