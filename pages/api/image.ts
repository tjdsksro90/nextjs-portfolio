import type { NextApiRequest, NextApiResponse } from 'next';
import getBase64 from '../../utils/getBase64';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { src } = req.body;
      
      if (!src) {
        return res.status(400).json({ error: 'src 파라미터가 필요합니다.' });
      }

      const result = await getBase64(src);
      res.status(200).json(result);
    } catch (error) {
      console.error('Image API Error:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      res.status(500).json({ 
        error: '이미지 처리 중 오류가 발생했습니다.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      });
    }
  } else {
    res.status(405).json({ error: 'POST 요청만 허용됩니다.' });
  }
}
