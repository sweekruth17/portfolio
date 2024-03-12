const SkillsCard = ({ lang }) => {
  console.log(lang);
  return (
    <div className="px-3 py-2 m-1 justify-center bg-black text-sm text-white rounded-md hover:bg-gradient-to-r from-red-500 to-violet-700">
      {lang}
    </div>
  );
};
export default SkillsCard;
