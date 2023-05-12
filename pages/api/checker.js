import  SSL from "ssl-verifier";
import prisma from '../../prisma/client'
import { v4 as uuidv4 } from 'uuid';
import CheckPort from './portCheck'

let FullUrlData;
function A(u) {
  FullUrlData = u
 }
export default async function HandleThat(checking , url , MailForHost) {
  const FullUrl = url.toString(); 
  
  const a = await SSL.Info(FullUrl /*, {port: 443, method: "GET"}*/)
  try { 
    if (checking) {
      
      await CheckPort(FullUrl).then((result) => {
       console.log(result);
       Object.assign(a, {PortChecking: `${result}`});
       console.log(a);
       
     })
    }
    const expiringDate = a.validTo
   if (MailForHost) {
    await prisma.MailForHost.create({
      data: {
        id : uuidv4(),
        url,
        MailForHost,
        expiringDate,
      }
    })
    }
    return  a
  } catch (error) {
   return error    
  } 
 
} 