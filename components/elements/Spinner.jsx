import React from "react";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className="text-center">
      <Image
        src="/images/spinner.svg"
        alt="Loading..."
        width={200}
        height={200}
        className="animate-spin"
      />
    </div>
  );
}

export default Spinner