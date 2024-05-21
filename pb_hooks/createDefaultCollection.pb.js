/**
 * Create a default collection called 'Favorites' for each new user
 */
onModelAfterCreate((e) => {
    const collection = $app.dao().findCollectionByNameOrId('collections');
    const record = new Record(collection, {
        title: 'Favorites',
        user: e.model.id,
    });
    $app.dao().saveRecord(record);
}, 'users');
