import { EmailTemplate } from './../../_components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    //  const responce=await resend.emails.send();
  try {
    const data = await resend.emails.send({
      from: 'janelee@resend.dev',
      to: ['accounts@docshare.com'],
      subject: " share file with You",
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}