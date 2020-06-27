export const expandCursor = () => {
    const bgCursor = document.querySelector(".bg-cursor");
    bgCursor.classList.add("expand");
};

export const shrinkCursor = () => {
    const bgCursor = document.querySelector(".bg-cursor");
    bgCursor.classList.remove("expand");
};