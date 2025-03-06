'use client';
import clsx from "clsx";
import { useParams } from "next/navigation";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import "./LanguageToggler.css";

const LanguageToggler = ({ currentLocale }) => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const items = routing.locales

    const [nextLocale] = items.filter(
        (localeItem) => localeItem !== currentLocale
    );

    const handleClick = () => {
        router.replace(
        { pathname, params },
        { locale: nextLocale, scroll: false }
        );    
    }

    return (
        <>
            <button onClick={handleClick} className="language-toggler__body navigation-text fixed top-6 right-8 z-100 rounded-full cursor-pointer text-center uppercase py-1 px-4">
                {currentLocale}
            </button>
        </>
    );
};

export default LanguageToggler;
