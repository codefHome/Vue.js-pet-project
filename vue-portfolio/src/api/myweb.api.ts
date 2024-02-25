import axios from 'axios'
import { myWebEndpoints } from './myweb.endpoint'
export interface mailTypes{
    senderName:String;
    email:String;
    message:String;

}
export const sendMail=async(mail:mailTypes)=>{
const response=await axios.post(myWebEndpoints.sendMail,mail)
return response
}

export const getUserInfo=async()=>{
    return await axios.get(myWebEndpoints.getUserInfo);
}