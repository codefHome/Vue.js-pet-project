import axios from 'axios'
import { myWebEndipoints } from './myweb.endpoint'
export interface mailTypes{
    senderName:String;
    email:String;
    message:String;

}
export const sendMail=async(mail:mailTypes)=>{
const response=await axios.post(myWebEndipoints.sendMail,mail)
return response
}