import { getLocale } from "next-intl/server";

import Divider from "@/modules/shared/components/Divider";
import StoriesViewer from "@/modules/my-story/components/StoriesViewer";

import "./MyStorySection.scss";

const getStories = async (locale) => {
    const response = await fetch(`https://${process.env.VERCEL_URL}/api/stories?locale=${locale}`);
    const stories = await response.json();

    return stories;
};

const MyStorySection = async ({ id }) => {
    const currentLocale = await getLocale();

    const stories = await getStories(currentLocale);

    return (
        <section id={id} className="my-story__body section relative flex flex-col justify-center items-center h-screen">
            <Divider className="absolute z-10" top />
            <StoriesViewer stories={stories}/>
            <Divider className="absolute z-10" />
        </section>
    );
};

export default MyStorySection;
