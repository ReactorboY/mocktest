import { sendVerificationEmail } from '@/helpers/sendVerificationEmail'

export async function POST(req: Request) {
  const reqData = await req.json()
  const { email } = reqData

  try {
    const res = await sendVerificationEmail('', email, '123')
    console.log(res.success + '----')

    return Response.json(res)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
