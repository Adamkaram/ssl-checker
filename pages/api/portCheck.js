const {scanAvailablePorts} = require("./portChecker");
const startTime = Date.now();


export default async function CheckPort(hostUrl ) {
   
    // let hostUrls = hostUrl.toString();
    
    const link = hostUrl.toString();

    const domainRegex = /^https?:\/\/(?:www\.)?([^/]+)\//;
    const domainName = link.match(domainRegex)[1];
    
   return  scanAvailablePorts(domainName, 10 * 1000).then(result => {
        console.log("Scanning completed in", Date.now() - startTime, 'ms.');
        console.log(result.length ? result.join(', ') : 'no opened ports found.');
        
        return result
    });
    
} 

