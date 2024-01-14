const choice = items => {
    if (items.length === 0) {
        return null;
    }

    const  randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];
};

const remove = (items, item) => {
    const index = items.indexOf(item);

    if (index !== -1) {
        // Remove the item from the array
        const removedItem = items.splice(index, 1)[0];
        return removedItem;
    }

    // Return undefined if the item is not found
    return undefined;
};

export {choice, remove}