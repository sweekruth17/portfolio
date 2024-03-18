const SocialCard = ({ link, icon }) => {
  //   console.log(sv);
  return (
    <div
      className="bg-stone-600 
     px-2 pt-2 mx-1  rounded-xl"
    >
      <button>
        <a href={link} target="blank">
          {icon}
        </a>
      </button>
    </div>
  );
};
export default SocialCard;
