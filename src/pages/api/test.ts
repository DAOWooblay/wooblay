
import mongoose from 'mongoose';
import {Address } from '../../models/address';

import type { NextApiRequest, NextApiResponse } from 'next'

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    
    const newAddress = new Address({
        twitter: 'shreeya16',
        telegram: 'shreeya16g',
        bio: 'student at usyd',
        skills: ['python', 'java', 'r'],
        nft_ids: [123, 345, 567],
        profile_pic : 'url/shreeya'
    })

    const resp = await newAddress.save();

    res.status(200).json( resp );
  } catch (error) {
    res.status(500).json( error );
  }
}