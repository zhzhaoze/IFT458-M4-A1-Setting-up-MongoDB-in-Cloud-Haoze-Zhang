//Create schema
// this.rawData404 = new JSONSchemaView(this.obj);
import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema({
  // String is shorthand for {type: String}
  id: String,
  customerName:   String,
  phoneNumber:   String,
  address:   String,
  loanAmount:   Number,
  interest:   Number,
  loanTermYears: Number,
  loanType: String,
  description:  String
//   comments: [{ body: String, date: Date }],
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

const Customer = mongoose.model('Customer', customerSchema);

customerSchema.add({createdDate: {type: Date, default: Date.now}, insertedDate: {type: Date, default: Date.now}})

console.log(customerSchema)



