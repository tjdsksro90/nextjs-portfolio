import type { NextApiRequest, NextApiResponse } from 'next';
import getBase64 from '../../utils/getBase64';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { src } = req.body;
      const result = await getBase64(src);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: '이미지 처리 중 오류가 발생했습니다.' });
    }
  } else {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' });
  }
}
