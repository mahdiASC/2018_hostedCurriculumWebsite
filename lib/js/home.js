/**
 * Clears the ".homefocus" class from all grid items.
 */
const clearFocus = function(gridItems){
    gridItems.removeClass("homefocus");
}

/**
 * Sets the current element as the grid focus.
 */
const gridItemClickListener = function(gridItems, element){
    const elementObj = $(element);
    clearFocus(gridItems);
    elementObj.addClass("homefocus");
}

/**
 * Adds a callback for whenever a grid item is clicked.
 */
const attachClickListeners = function(){
    const gridItems = $(".grid-item");
    gridItems.each((i,gridItem)=>{
        const element = $(gridItem);
        element.on("click",event=>{
            const target = $(event.target);
            if(!target.is("h2")){
                gridItemClickListener(gridItems,element);
            }
        })
    });
}

attachClickListeners();