import clsx from "clsx";

const CourseCard = ({ title, subtitle, date, duration, instituteLogo, className }) => {
  return (
    <div className={clsx("card__body w-full flex flex-col items-center rounded-xl p-4 relative light-text text-sm", className)}>
      <h4 className="relative text-center w-full px-12 light-text">
        {instituteLogo && <img src={instituteLogo} alt="" className="block w-6 h-6 rounded-full absolute left-0 top-0" />}
        {title}
      </h4>

      <div className="text-xs">
        <span className="text-center block mb-4">{date}</span>
        <span className="text-center block">{duration}</span>
      </div>
    </div>
  )
}

export default CourseCard;