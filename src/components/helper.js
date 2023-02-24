export const getLocalStorage = function () {
  return localStorage.getItem('newTask') ? JSON.parse(localStorage.getItem('newTask')) : [];
};

export const setlocalStorage = function (value) {
  let lsArr = getLocalStorage();

  lsArr.push(value);
  localStorage.setItem('newTask', JSON.stringify(lsArr));
};

export const deleteTask = function (e) {
  const list = document.querySelector('.list');
  const target = e.target.closest('.list__item');
  const targetTitle = target.querySelector('.list__item-title').textContent;

  let lsArr = getLocalStorage();
  const updatedLS = lsArr.filter((value) => value.task !== targetTitle);

  localStorage.setItem('newTask', JSON.stringify(updatedLS));
  list.removeChild(target);
};
