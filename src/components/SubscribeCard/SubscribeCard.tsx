import illustrationMobile from "../../static/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../../static/images/illustration-sign-up-desktop.svg";
import SubscribeForm from "./SubscribeForm";

function SubscribeCard() {
  return (
    <div className="flex max-w-[375px] flex-col items-center bg-userWhite md:max-w-[928px] md:flex-row md:rounded-2xl md:p-6">
      <div className="flex justify-end md:order-2 md:basis-1/2">
        <picture>
          <source media="(min-width:768px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="Illustration" />
        </picture>
      </div>
      <div className="px-6 md:basis-1/2">
        <SubscribeForm />
      </div>
    </div>
  );
}

export default SubscribeCard;
