import { useLocation, useNavigate } from "react-router-dom";
import StyledButton from "../components/SubscribeCard/StyledButton";
import successIcon from "../static/images/icon-success.svg";

function Subscribed() {
  const navigate = useNavigate();
  const location = useLocation();
  const subscriberEmail = location.state.email;

  return (
    <div className="m-6 flex max-w-[504px] flex-col gap-y-8 rounded-2xl bg-white px-6 py-8 md:px-16 md:py-12">
      <img src={successIcon} alt="Success icon" className="h-16 w-16" />
      <h1 className="text-4xl font-bold text-userDarkGrey md:text-6xl">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{subscriberEmail}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>
      <StyledButton text="Dismiss message" handlePress={() => navigate("/")} />
    </div>
  );
}

export default Subscribed;
