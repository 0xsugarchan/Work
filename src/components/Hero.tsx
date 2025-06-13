import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="h-[550px] w-[393px]">
      <div className="top-0 left-0 w-[421px] h-[550px]">
        <div className="relative w-[393px] h-[550px]">
          <img
            className="absolute top-0 left-[3px] w-[390px] h-full"
            alt="Background"
            src="https://c.animaapp.com/Omx7DLD0/img/image-127.png"
          />

          <div className="absolute top-[286px] left-[2px] w-[391px] h-[264px] bg-white/30 blur-md" />
          <div className="absolute top-[58px] left-0 w-[215px] h-[193px] bg-white/70 blur-md" />

          <div className="absolute top-[388px] left-[22px] w-[358px] h-[18px] bg-yellow-200" />
          <div className="absolute top-[270px] left-[21px] w-[201px] h-[35px] rounded-full border-2 border-black bg-white" />

          <div className="absolute top-[276px] left-[33px] w-[177px] text-center font-bold text-sm text-black">
            この広告からお申し込みで
          </div>

          <div
            className="absolute top-[284px] left-[44px] text-[91px] font-anton text-[#df4a34] text-center tracking-[4.55px]"
            style={{ WebkitTextStroke: "5px #df4a34" }}
          >
            100000
          </div>

          <div
            className="absolute top-[288px] left-[48px] text-[91px] font-anton text-[#df4a34] text-center tracking-[4.55px] shadow-md"
            style={{ WebkitTextStroke: "3px #ffffff" }}
          >
            100000
          </div>

          <img
            className="absolute top-[292px] left-[341px] w-[36px] h-[40px] object-cover"
            src="https://c.animaapp.com/Omx7DLD0/img/image-49@2x.png"
            alt="icon"
          />
          <img
            className="absolute top-[278px] left-[313px] w-[26px] h-[29px] object-cover"
            src="https://c.animaapp.com/Omx7DLD0/img/image-128@2x.png"
            alt="decor"
          />
          <img
            className="absolute top-[324px] left-[12px] w-[26px] h-[29px] object-cover"
            src="https://c.animaapp.com/Omx7DLD0/img/image-128@2x.png"
            alt="decor"
          />
          <img
            className="absolute top-[441px] left-[13px] w-[18px] h-[19px] object-cover"
            src="https://c.animaapp.com/Omx7DLD0/img/image-129@2x.png"
            alt="decor"
          />
          <img
            className="absolute top-[355px] left-[3px] w-[15px] h-[19px] object-cover"
            src="https://c.animaapp.com/Omx7DLD0/img/image-130@2x.png"
            alt="decor"
          />

          <div
            className="absolute top-[345px] left-[30px] text-[23px] font-bold text-[#df4a34] text-center shadow-md"
            style={{ WebkitTextStroke: "2px #ffffff" }}
          >
            最大
          </div>

          <div
            className="absolute top-[369px] left-[341px] text-[24px] font-bold text-[#df4a34] text-center"
            style={{ WebkitTextStroke: "4px #df4a34" }}
          >
            円
          </div>

          <div
            className="absolute top-[371px] left-[343px] text-[24px] font-bold text-[#df4a34] text-center shadow-md"
            style={{ WebkitTextStroke: "2px #ffffff" }}
          >
            円
          </div>

          <div
            className="absolute top-[411px] left-[19px] w-[369px] text-[23px] font-extrabold text-[#df4a34] text-center whitespace-nowrap shadow-md"
            style={{ WebkitTextStroke: "2px #ffffff" }}
          >
            キャッシュバックキャンペーン中！
          </div>

          <div
            className="absolute top-[310px] left-[172px] text-[70px] font-anton text-[#df4a34] text-center tracking-[3.5px]"
            style={{ WebkitTextStroke: "5px #df4a34" }}
          >
            ,
          </div>

          <div
            className="absolute top-[314px] left-[178px] text-[70px] font-anton text-[#df4a34] text-center tracking-[3.5px] shadow-md"
            style={{ WebkitTextStroke: "3px #ffffff" }}
          >
            ,
          </div>

          <div className="absolute top-[110px] left-[24px] text-[42px] font-black text-black whitespace-nowrap">
            いつでも
          </div>

          <div className="absolute top-[154px] left-[25px] text-[42px] font-black text-black whitespace-nowrap">
            どこでも
          </div>

          <div className="absolute top-[200px] left-[45px] text-[37px] font-extrabold text-black whitespace-nowrap">
            稼げる!
          </div>

          <div className="absolute top-[65px] left-[22px] w-[171px] h-[36px] rounded-full bg-[#df4a34] shadow-[0px_3px_0px_#cc3e29]" />

          <p className="absolute top-[70px] left-[47px] w-[141px] text-[20px] font-extrabold text-white text-center">
            <span className="text-[20px]">スマホだけ</span>
            <span className="text-[16px]">で</span>
          </p>

          <div className="absolute top-[65px] left-[66px] text-[10px] font-extrabold text-white tracking-[9.1px] text-center">
            ・・・・・
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
