import mongoose , {Model } from 'mongoose';

export interface IDaoProfile {
    name: string;
    bio: string
    abbreviation: string
    category_of_work: string
    nft_id: string
}

const DaoProfileModel = new mongoose.Schema<IDaoProfile>({
    name: {type: String, trim: true, default: ''},
    bio: {type: String, trim: true, default: ''},
    abbreviation: {type: String, trim: true, default: ''},
    category_of_work: {type: String, trim: true, default: ''},
    nft_id: {type: String, trim: true, default: ''},

})

let DaoProfile: Model<IDaoProfile>;

try{
    DaoProfile = mongoose.model<IDaoProfile>('DaoProfile');
} catch (e) {
    DaoProfile = mongoose.model<IDaoProfile>('Daoprofile', DaoProfileModel);
}

export {DaoProfile};