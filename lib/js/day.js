const categories = [
    "codeAlong",
    "project",
    "softSkill",
    "misc",
    "lecture"
];

const parentSuffix = "-container";

/**
 * Returns category container.
 */
const getContainer = element => element.parent().parent();

/**
 * Sets appropriate parent class for all categories.
 */
const setAllBackgrounds = () => {
    for(const category of categories){
        const elements = $(`.${category}`);
        elements.each((i,element)=>{
            getContainer($(element)).addClass(category+parentSuffix);
        })
    }
}

setAllBackgrounds();

const set_blank_for_anchors = () => {
    const aElements = $("tbody a");
    aElements.attr('target','_blank');
}

set_blank_for_anchors();