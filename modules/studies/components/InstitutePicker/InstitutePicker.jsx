import clsx from 'clsx';

const InstitutePicker = ({ currentInstitute, institutes, onInstitutePick }) => {
    const handleInputClick = (e) => {
        onInstitutePick(e.target.value);
    }

    return (
        <form className="flex gap-4 py-4 px-0 mx-auto">
            {institutes.map(study => (
                <label
                    key={study.id}
                    className="w-8 h-8">
                    <input
                        type="radio"
                        value={study.id}
                        defaultChecked={currentInstitute == study.id}
                        onClick={handleInputClick}
                        className={clsx("appearance-none bg-contain w-full h-full rounded-full transition-transform cursor-pointer", { "scale-125": currentInstitute == study.id })}
                        style={{ backgroundImage: `url('${study.logo}')` }}
                    />
                </label>
            ))}
        </form>
    )
}

export default InstitutePicker