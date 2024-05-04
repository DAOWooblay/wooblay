
import mongoose from 'mongoose';
import {Address } from '../../models/address';

import type { NextApiRequest, NextApiResponse } from 'next'

 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    const data = await Address.find();

    console.log({data, url:process.env.DATABASE_URL})

    res.status(200).json( data );
  } catch (error) {
    res.status(500).json( error );
  }
}