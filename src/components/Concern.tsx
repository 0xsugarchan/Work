import React from "react";

const Concern: React.FC = () => {
  return (
    <div className="h-[414px] w-[391px]">
      <div className="top-0 left-0 h-[414px] w-[393px]">
        <div
          className="relative h-[414px] w-[390px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://c.animaapp.com/AlAqFZsB/img/rectangle-12.svg)",
          }}
        >
          <img
            className="absolute top-0 left-0 w-[390px] h-[315px]"
            src="https://c.animaapp.com/AlAqFZsB/img/group-575@2x.png"
            alt="Background"
          />

          <img
            className="absolute top-[166px] left-[71px] w-[248px] h-[248px] object-cover"
            src="https://c.animaapp.com/AlAqFZsB/img/image-113@2x.png"
            alt="Decoration"
          />

          <div className="absolute top-[25px] left-[101px] w-[94px] h-[40px] bg-[#df4a34] rounded-sm" />

          <p className="absolute top-[29px] left-[15px] text-white font-bold text-[25px] leading-normal tracking-[0.5px]">
            <span className="tracking-[0.12px]"> こんな </span>
            <span className="text-[28px] tracking-[0.16px]">お悩み </span>
            <span className="tracking-[0.12px]">ありませんか？</span>
          </p>

          <div className="absolute top-[77px] left-[21px] w-[350px] h-[184px]">
            <div className="relative w-[352px] h-[184px]">
              <div className="absolute top-[57px] left-0 w-[129px] h-[127px]">
                <div
                  className="relative w-[122px] h-[127px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://c.animaapp.com/AlAqFZsB/img/star-7.svg)",
                  }}
                >
                  <div className="absolute top-[39px] left-[10px] w-[103px] text-center text-[#152e3c] text-[14px] font-bold leading-[18px]">
                    趣味に使える
                    <br />
                    お金が
                    <br />
                    足りない
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-[115px] w-[116px] h-[114px]">
                <div
                  className="relative w-[110px] h-[114px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://c.animaapp.com/AlAqFZsB/img/star-7-1.svg)",
                  }}
                >
                  <div className="absolute top-[39px] left-[18px] w-[74px] text-center text-[#152e3c] text-[14px] font-bold leading-[19px]">
                    毎月生活に
                    <br />
                    余裕がない
                  </div>
                </div>
              </div>

              <div className="absolute top-[53px] left-[219px] w-[133px] h-[131px]">
                <div
                  className="relative w-[126px] h-[131px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://c.animaapp.com/AlAqFZsB/img/star-7-2.svg)",
                  }}
                >
                  <div className="absolute top-[39px] left-[8px] w-[112px] text-center text-[#152e3c] text-[14px] font-bold leading-[18px]">
                    ボーナスや
                    <br />
                    給料が
                    <br />
                    減ってしまった
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concern;
