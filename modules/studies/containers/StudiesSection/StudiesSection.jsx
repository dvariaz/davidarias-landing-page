import Divider from "@/modules/shared/components/Divider";
import StudiesViewer from "@/modules/studies/components/StudiesViewer";

const getStudies = async () => {
    const response = await fetch(`${process.env.APP_BASE_URL}/api/studies`);
    const studies = await response.json();

    return studies;
}

const StudiesSection = async ({ id }) => {
    const studies = await getStudies();

    return (
        <section id={id} className="section relative w-full h-screen">
            <Divider className="absolute z-10" top />
            <StudiesViewer
                studies={studies}
                className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 overflow-hidden h-full max-w-[1600px] mx-auto" />
            <Divider className="absolute z-10" />
        </section>
    );
};

export default StudiesSection;
