import mongoose , {Model } from 'mongoose';

interface IAddress {
    _id: string;
    twitter: string
    telegram: string
    bio: string
    skills: string[]
    nft_ids: number[]
    profile_pic : string
}

const AddressModel = new mongoose.Schema<IAddress>({
    twitter: {type: String, trim: true, default: ''},
    telegram: {type: String, trim: true, default: ''},
    bio: {type: String, trim: true, default: ''},
    skills: [{type: String, trim: true, default: ''}],
    nft_ids: [{type: Number, trim: true, default: ''}],
    profile_pic: {type: String, trim: true, default: ''},
})

let Address: Model<IAddress>;

try{
    Address = mongoose.model<IAddress>('Address');
} catch (e) {
    Address = mongoose.model<IAddress>('Address', AddressModel);
}

export {Address};