"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ResultBar from "./ResultBar";
const SearchInput = () => {
  const [Result, setResult] = useState("");
  const [QuerySite, setQuerySite] = useState("");
  const [MailForHost, setMailForHost] = useState("");
  const [isDisabled, setisDisable] = useState(false);
  const [validFrom, setvalidFrom] = useState("");
  const [validTo, setvalidTo] = useState("");
  const [valid, setvalid] = useState("");
  const [subjectAlternativeName, setsubjectAlternativeName] = useState([]);
  const [subjectcommonName, setsubjectcommonName] = useState("");
  const [serialNumber, setserialNumber] = useState("");
  const [nistCurve, setnistCurve] = useState("");
  const [commonNameissuer, setcommonNameissuer] = useState("");
  const [locationissuer, setlocationissuer] = useState("");
  const [organizationissuer, setorganizationissuer] = useState("");
  const [fingerPrint256, setfingerPrint256] = useState("");
  const [fingerPrint, setfingerPrint] = useState("");
  const [daysRemaining, setdaysRemaining] = useState("");
  const [bits, setbits] = useState("");
  const [asn1Curve, setasn1Curve] = useState("");
  const [xtendedKeyUsage, setxtendedKeyUsage] = useState([]);
  const [certificateCaURL, setcertificateCaURL] = useState([]);
  const [certificateOCSPURL, setcertificateOCSPURL] = useState([]);
  const [rawdata  , setrawdata] = useState([]);
  const [rawdataType, setrawdataType] = useState("");
  const [PublicKeydata, setPublicKeydata] = useState([]);
  const [PublicKeyType, setPublicKeyType] = useState("");
  const [ExtendedKeyUsage, setExtendedKeyUsage] = useState("");
  const [openPorts, setopenPorts] = useState("");
  let porting : Boolean;
  let validDataURL;
  const { mutate } = useMutation(
    async ({QuerySite , MailForHost} : {QuerySite:string ; MailForHost:string}) =>
      axios.post("/api/check", { QuerySite , MailForHost }).then((res) => {
        validDataURL = res?.data;
        if (validDataURL.PortChecking) {
          porting = true
        } else {
          porting = false
        }
        setopenPorts(validDataURL.PortChecking);
        console.log(validDataURL);
        setResult(validDataURL);
        setrawdataType(validDataURL.raw.type);
        setrawdata(validDataURL.raw.data);
        setExtendedKeyUsage(validDataURL.ExtendedKeyUsage);
        setasn1Curve(validDataURL.asn1Curve);
        setbits(validDataURL.bits);
        setcertificateCaURL(validDataURL.certificate.CA.issuers.url);
        setcertificateOCSPURL(validDataURL.certificate.OCSP.url);
        setdaysRemaining(validDataURL.daysRemaining);
        setfingerPrint(validDataURL.fingerPrint);
        setfingerPrint256(validDataURL.fingerPrint256);
        setcommonNameissuer(validDataURL.issuer.commonName);
        setlocationissuer(validDataURL.issuer.location);
        setorganizationissuer(validDataURL.issuer.organization);
        setnistCurve(validDataURL.nistCurve);
        setserialNumber(validDataURL.serialNumber);
        setsubjectcommonName(validDataURL.subject.commonName);
        setsubjectAlternativeName(validDataURL.subjectAlternativeName);
        setvalid(validDataURL.valid);
        setvalidFrom(validDataURL.validFrom);
        setvalidTo(validDataURL.validTo);
        setPublicKeyType(validDataURL.publicKey.type);
        setPublicKeydata(validDataURL.publicKey.data);
        setxtendedKeyUsage(validDataURL.ExtendedKeyUsage);
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error);
          toast.error(error?.response?.data.message);
        }
        setisDisable(false);
      },
      onSuccess: (data) => {
       
        porting ?
        toast.success("Check has Compelete with port Checking") : toast.success("Check has Compelete") 

        setisDisable(false), setQuerySite("");
      },
    }
  );

  const SubmitQuerySite = async (e: React.FormEvent) => {
    e.preventDefault();
    setisDisable(true);
    
    mutate({ QuerySite, MailForHost });
    toast.success('Done just Wait')
  };
  return (
    <>
      <form onSubmit={SubmitQuerySite}>
        <div className="flex justify-start  ">
          <div className="relative group    ">
            <div className=" ml-14 absolute animate-tilt -inset-0.5 bg-gradient-to-r from-pink-600 to purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative pl-20 py-3 bg-transparent ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="space-y-2 mb-4 h-3">
                <div className="form-control  ">
                  <label className="input-group">
                    <span className="bg-black">https://</span>
                    <input
                      value={QuerySite}
                      onChange={(e) => setQuerySite(e.target.value)}
                      size={64}
                      // type="url"
                      placeholder="For checking ports add /ports after url e.g site.com/ports"
                      className="input input-bordered bg-transparent w-full	 focus:outline-0 "
                    />
                    <input
                      value={MailForHost}
                      onChange={(e) => setMailForHost(e.target.value)}
                      size={20}
                      // type="url"
                      placeholder="Optional::Notify Mail Before Expiring Date "
                      className="input input-bordered bg-transparent w-full	 focus:outline-0 "
                    />
                  </label>
                </div>

                {/* <a
            href=""
            className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
            target="_blank">
            Read Article →
          </a> */}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <h1 className="p-3 px-3  pt-2 text-white bg-transparent rounded-full baseline ">
              <p className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-2.5 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative p-0 text-white">
                    <button disabled={isDisabled} type="submit" className=" ">
                      {isDisabled && (
                        <span>
                          {" "}
                          <svg
                            className="animate-spin h-5 w-5  bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] "
                            viewBox="0 0 24 24"></svg>
                        </span>
                      )}
                      {!isDisabled && "Check"}
                    </button>
                  </span>
                </span>
              </p>
            </h1>
          </div>
        </div>
      </form>
      {!Result && (
        <div className="  flex  flex-col items-center justify-between py-24 px-18"></div>
      )}
      {Result && (
        <ResultBar
          xtendedKeyUsage={xtendedKeyUsage}
          certificateOCSPURL={certificateOCSPURL}
          certificateCaURL={certificateCaURL}
          rawdataType={rawdataType}
          PublicKeyType={PublicKeyType}
          asn1Curve={asn1Curve}
          daysRemaining={daysRemaining}
          fingerPrint={fingerPrint}
          bits={bits}
          fingerPrint256={fingerPrint256}
          organizationissuer={organizationissuer}
          locationissuer={locationissuer}
          commonNameissuer={commonNameissuer}
          nistCurve={nistCurve}
          subjectcommonName={subjectcommonName}
          subjectAlternativeName={subjectAlternativeName}
          valid={valid}
          serialNumber={serialNumber}
          validTo={validTo}
          ExtendedKeyUsage={ExtendedKeyUsage}
          validFrom={validFrom}
          PublicKeydata={PublicKeydata}
          rawdata={rawdata}
          openPorts={openPorts}
        />
      )}
    </>
  );
};
export default SearchInput;
