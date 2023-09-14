import bulletIcon from "../../static/images/icon-list.svg";

function TextSection() {
  return (
    <div className="mb-10">
      <h1 className="mb-7 mt-11 text-4xl font-bold md:text-6xl">
        Stay updated!
      </h1>
      <p className="mb-7 text-userDarkGrey">
        Join 60,000+ product managers receiving monthy updates on:
      </p>
      <ul>
        <li className="relative mb-2">
          <img
            src={bulletIcon}
            alt="List bullet icon"
            className="absolute left-0 top-0"
          />
          <p className="pl-10 text-userDarkGrey">
            Product discovery and building what matters
          </p>
        </li>
        <li className="relative mb-2">
          <img
            src={bulletIcon}
            alt="List bullet icon"
            className="absolute left-0 top-0"
          />
          <p className="pl-10 text-userDarkGrey">
            Measuring to ensure updates are a success
          </p>
        </li>
        <li className="relative">
          <img
            src={bulletIcon}
            alt="List bullet icon"
            className="absolute left-0 top-0"
          />
          <p className="pl-10 text-userDarkGrey">And much more!</p>
        </li>
      </ul>
    </div>
  );
}

export default TextSection;
