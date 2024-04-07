import mongoose from 'mongoose';

const personalityTraitSchema = new mongoose.Schema({
    grade: {
        type: String,
        required: true
    },
    trait: {
        type: String,
        required: true
    }
});

export const PersonalityTrait = mongoose.model('PersonalityTrait', personalityTraitSchema);

