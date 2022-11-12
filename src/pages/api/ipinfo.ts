import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.ip) {
    return res.status(400).json({
      message: 'Cannot fetch ip information without a ip query.',
    });
  }

  try {
    const baseUrl = `https://ipinfo.io/${req.query.ip}?token=${process.env.IPINFO_TOKEN}`;

    const info = await fetch(baseUrl);
    const ipinfo = await info.json();

    if (Object.keys(ipinfo).length) {
      return res.status(200).json(ipinfo);
    } else {
      return res.status(500).json({ message: 'Cannot fetch ip data.' });
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
