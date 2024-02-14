import { environment } from '../environments/environment';


export const myWebEndpoints={
sendMail: `${environment.urls.web}/sendMail`,
getUserInfo:`${environment.urls.web}/findAllInfo`,
getExperience:`${environment.urls.web}/getAllExperience`
}