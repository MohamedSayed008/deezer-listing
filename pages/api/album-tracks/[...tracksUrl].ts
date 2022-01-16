import { DEEZER_BASE_URL, httpClient } from '@util/http-client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const trackUrl = (req?.query?.tracksUrl as string[])?.join('/');
  try {
    const { data } = await httpClient.GET({
      url: `${DEEZER_BASE_URL}${trackUrl}`,
    });
    res.status(200).json(data);
  } catch (e) {
    res.json(e);
  }
}
