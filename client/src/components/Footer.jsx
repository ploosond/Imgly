import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />

      <p className="text-gray-500 text-xl">|</p>

      <p className="flex-1 text-md text-gray-500 max-sm:hidden">
        Copyright @Imgly.dev | All right reserved.
      </p>

      <div className="flex gap-2.5 ">
        <img src={assets.facebook_icon} alt="" width={35} />
        <img src={assets.twitter_icon} alt="" width={35} />
        <img src={assets.instagram_icon} alt="" width={35} />
      </div>
    </div>
  );
};

export default Footer;
