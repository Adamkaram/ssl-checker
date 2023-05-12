"use client";
type Data = {
  validFrom: String;
  ExtendedKeyUsage: String;
  validTo: String;
  serialNumber: String;
  valid: String;
  subjectAlternativeName: Array<String>;
  xtendedKeyUsage: Array<String>;
  subjectcommonName: String;
  nistCurve: String;
  commonNameissuer: String;
  locationissuer: String;
  asn1Curve: String;
  certificateOCSPURL: Array<String>;
  PublicKeyType: String;
  rawdataType: String;
  certificateCaURL: Array<String>;
  organizationissuer: String;
  fingerPrint256: String;
  bits: String;
  daysRemaining: String;
  fingerPrint: String;
  openPorts: String;
  PublicKeydata: Array<String>;
  rawdata: Array<String>;
};
const ResultBar = ({
  daysRemaining,
  fingerPrint,
  bits,
  fingerPrint256,
  organizationissuer,
  locationissuer,
  validFrom,
  ExtendedKeyUsage,
  validTo,
  serialNumber,
  valid,
  subjectAlternativeName,
  nistCurve,
  commonNameissuer,
  PublicKeyType,
  rawdataType,
  certificateCaURL,
  certificateOCSPURL,
  xtendedKeyUsage,
  subjectcommonName,
  PublicKeydata,
  rawdata,
  openPorts
}: Data) => {
  return (
    <>
      
      <div className="  flex  flex-col items-center justify-between py-24 px-18">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>{" "}
              تفاصيل الشهادة
            </h2>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50   `}>
              Host :{" "}
              <span className=" text-white font-bold">{subjectcommonName}</span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              validFrom : <span>{validFrom}</span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              validTo : <span>{validTo}</span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              daysRemaining :{" "}
              <span className=" text-white font-bold">{daysRemaining}</span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              bits : <span className=" text-white font-bold">{bits}</span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              fingerPrint256 :{" "}
              <span className=" text-white font-bold">
              <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                    {fingerPrint256}
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              certificate CA URL :{" "}
              <span className=" text-white font-bold">
              <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                  {`${certificateCaURL.map((e)=> e)}`}
                   
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              certificate OC URL :{" "}
              <span className=" text-white font-bold">
              <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                  {`${certificateOCSPURL.map((e)=> e)}`}
                  
                    
                  </textarea>
                </div>
       
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              valid :{" "}
              <span className=" text-white font-bold">{`${valid}`}</span>
            </p>
          </div>

          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>{" "}
              تفاصيل الخادم
            </h2>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              AlterNative HostName :{" "}
              <span className=" text-white font-bold">
              <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                    {`${subjectAlternativeName.map((d) => d  )}`}
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            Server location :{" "}
              <span className=" text-white font-bold">
             {locationissuer}
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm font-bold `}>
            Open Ports :{" "}
              <span className=" text-rose-700 text-white font-bold">
             {openPorts}
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50    `}>
            issuer CommonName :{" "}
              <span className=" text-white font-bold">
             {commonNameissuer}
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            issuer Organization :{" "}
              <span className=" text-white font-bold">
             {organizationissuer}
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            (EKU):{" "}
              <span className=" text-white font-bold">
             {ExtendedKeyUsage}
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            (cryptographic curve):{" "}
              <span className=" text-white font-bold">
             {nistCurve}
              </span>
            </p>
          </div>

          <div
           
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>{" "}
              سلسلة الشهادة
            </h2>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            PublicKeyType :
              <span className=" text-white font-bold">
                <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                    {PublicKeyType}
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            rawdataType :
              <span className=" text-white font-bold">
                <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                    {rawdataType}
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            PublicKeydata :
              <span className=" text-white font-bold">
                <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                   {`${PublicKeydata.map((e)=> e)}`}
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            PublicKeydata :
              <span className=" text-white font-bold">
                <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                   {`${rawdata.map((e)=> e)}`}
                  </textarea>
                </div>
              </span>
            </p>
          </div>

          <div
           
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>{" "}
              نثريات
            </h2>

            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
              serialNumber :
              <span className=" text-white font-bold">
                <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                    {serialNumber}
                  </textarea>
                </div>
              </span>
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50  `}>
            fingerPrint :
              <span className=" text-white font-bold">
                <div className="form-control">
                  <textarea className="textarea textarea-bordered h-24">
                    {fingerPrint}
                  </textarea>
                </div>
              </span>
            </p>
      
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultBar;
