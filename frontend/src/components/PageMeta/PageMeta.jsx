import { useEffect } from "react";

const PageMeta = ({ title, desc }) => {

    useEffect(() => {
        document.title = title;

        if (desc) {
            let descTag = document.querySelector('meta[name="description"]');
            if (!descTag) {
                descTag = document.createElement('meta');
                descTag.name = "description";
                document.head.appendChild(descTag);
            }
            descTag.content = desc;
        }
    }, [title, desc]);

    return null;
}

export default PageMeta;