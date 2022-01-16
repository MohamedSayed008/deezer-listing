import { DEEZER_BASE_URL, httpClient } from '@util/http-client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await httpClient.GET({
      url: `${DEEZER_BASE_URL}artist/${req?.query?.artistId ?? ''}/albums`,
    });
    res.status(200).json(data);
  } catch (e) {
    res.json(e);
  }
}
