"use client";

import { type Html5QrcodeResult, Html5QrcodeScanner } from "html5-qrcode";
import { type Html5QrcodeError } from "html5-qrcode/esm/core";
import Link from "next/link";
import React from "react";

export default function Page() {
  const [result, setResult] = React.useState<Html5QrcodeResult>();

  React.useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 100,
          height: 100,
        },
        fps: 30,
      },
      true,
    );

    scanner.render(success, error);

    function success(decodedText: string, result: Html5QrcodeResult) {
      void scanner.clear();
      setResult(result);
    }

    function error(errorMessage: string, error: Html5QrcodeError) {
      console.warn(errorMessage);
      console.log(error);
    }
  }, []);

  return (
    <div className="mx-auto mt-32">
      {result ? (
        <div>
          Success: <Link href={result.result.text}>{result.result.text}</Link>
        </div>
      ) : (
        <div id="reader" className="bg-white-default"></div>
      )}
    </div>
  );
}
