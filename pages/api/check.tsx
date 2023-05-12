import type { NextApiRequest, NextApiResponse } from "next"
import HandleThat from './checker'
  
 
function isValidUrl(string : URL) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
let checking: Boolean;
let data: any;


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) { 
  if (req.method === "POST") {
    
    try {
      if (req.body.QuerySite == '') {
        return  res.status(403).json({message:"Cant Be empty ):"})
        
      }
      if (isValidUrl(req.body.QuerySite))
      {
        const str = req.body.QuerySite;
        if (str.includes("/ports")) {
          checking = true
           data = await HandleThat(checking, req.body.QuerySite , req.body.MailForHost).catch(error => {
            return  res.status(403).json({message:"something worg happend try again ):"})
            
          });

        } else {
          checking = false
           data = await HandleThat(checking, req.body.QuerySite , req.body.MailForHost).catch(error => {
            return  res.status(403).json({message:"something worg happend try again ):"})
            
          });
        }
       
        res.send(data);
      } else {
        return    res.status(403).json({message:"Not A Valid URL ):"})
        
      }
    } catch (error) {
     return    res.status(403).json({message:"something worg happend try again ):"})
    }
  } else {
    return  res.status(403).json({message:"Bad request):"})
  }
}

