import axios from 'axios'
import { myWebEndpoints } from './myweb.endpoint';


 interface IExperience{
  companyName:string,
  roleDetails:string[]
 }
interface IUserInfo{
  homeTitle: String;
  homeDetail:String;
  aboutSection1:String;
  aboutSection2:String;
  aboutSection3:String;
  stacks:String[];
  // experiences:IExperience[];
}

export interface ILogin{
  userName:String;
  password:String;
}
export const insertInfo=async(info:IUserInfo)=>{
const response=await axios.put(myWebEndpoints.insertInfo,info)
return response
}

export const login= async(data:ILogin)=>{
  return await axios.post(myWebEndpoints.login,data);
}