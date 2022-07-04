type MenuOptions = '' | 'all' |'dog'|'cat'|'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let retunrObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if (activeMenu !== '') {
        retunrObject[activeMenu] = true;
    } 
    return retunrObject;
}