import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let ip = '8.8.8.8';

  try {
    const getIp = await fetch('https://ipinfo.io/ip');
    const ipAddress = await getIp.text();

    if (ipAddress) {
      ip = ipAddress;
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }

  try {
    const baseUrl = `https://ipinfo.io/${
      req.query.ip !== 'null' || !req.query.ip ? req.query.ip : ip
    }?token=${process.env.IPINFO_TOKEN}`;

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
