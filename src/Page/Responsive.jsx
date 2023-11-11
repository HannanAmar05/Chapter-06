import React from "react";

export const Responsive = () => {
  return (
    <div className="m-5">
      <div className="mt-2 w-full flex justify-end tablet:justify-center">
        <div className="w-2/5 tablet:w-full flex justify-center items-center font-bold bg-[#EB3838] text-center text-4xl text-white">
          Merah
        </div>
      </div>
      <div className="mt-4 h-[87vh] web:flex mobile:flex-col tablet:flex-col">
        <div className="flex gap-6 h-full w-full flex-col web:flex-row tablet:flex-col-reverse mobile:flex-col">
          <div className="h-1/2 mobile:h-1/2 tablet:h-1/2 web:h-full web:w-1/2">
            <div className="bg-[#5C38EB] h-full flex justify-center items-center text-4xl font-bold text-white">
              Purple
            </div>
          </div>
          <div className="flex w-full gap-6 h-full flex-col-reverse mobile:flex-col-reverse tablet:flex-col web:flex-col">
            <div className="flex items-center justify-center flex-col-reverse text-white font-bold text-4xl bg-[#38EB55] h-1/2">oke</div>
            <div className=" gap-6 flex h-full mobile:flex-row-reverse tablet:flex-row flex-row-reverse web:flex-row ">
              <div className="flex items-center bg-[#38C0EB] justify-center text-white font-bold text-4xl web:bg-[#38C0EB] w-1/2 tablet:bg-[#EB38AE]">Biru</div>
              <div className="flex items-center justify-center text-white font-bold text-4xl bg-[#EB38AE] w-1/2">Pink</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
