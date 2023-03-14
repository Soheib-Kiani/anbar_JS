const categories = [
  {
    id: 1,
    title: 'frontend',
    description: 'frontend of applications',
    createdAt: '2021-11-01T10:47:26.889Z',
  },
  {
    id: 2,
    title: 'backend',
    description: 'the backend of the applications',
    createdAt: '2021-10-01T10:47:26.889Z',
  },
];

export default class Storage {
  static getAllCategories() {
    const saveCategories = JSON.stringify(localStorage.getItem('catory')) || [];
    const sortedCategories = saveCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    const saveCategories = Storage.getAllCategories()
    const existedItem = saveCategories.find((c) => c.id === categoryToSave.id)
    if(existedItem) {
        existedItem.title = categoryToSave.title;
        existedItem.description = categoryToSave.description;
    }else {
        categoryToSave.id = new Date().getTime()
        categoryToSave.createdAt = new Date().toISOString()
        saveCategories.push(categoryToSave)
    }
    localStorage.setItem("category",JSON.stringify(saveCategories))
  }
}
