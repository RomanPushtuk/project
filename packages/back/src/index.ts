import express from 'express';
import { Schema, model, connect } from 'mongoose';

connect('mongodb://db:27017/myapp');

interface IUser {
    name: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
})

const UserModel = model<IUser>('User', userSchema);

const roma = new UserModel()
roma.name = "Roma";
roma.save();


const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.get('/users', (req, res) => {
    try {
        UserModel.find({}, (err: Error, document: IUser[]) => {
            if(!err) res.status(200).json(JSON.stringify(document));
            res.status(500).json(err);
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(8080, () => {
    console.log('The application is listening on port 8080!');
})