export const sorter = (stage, elements) => {
    const tolerance = 10;
    elements.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        if (Math.abs(rectA.top - rectB.top) > tolerance) return rectB.top - rectA.top;
        return rectB.left - rectA.left;
    });

    stage.append(...elements);
}