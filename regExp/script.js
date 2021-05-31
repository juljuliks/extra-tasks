const task1 = document.querySelector('#task1');
const res1 = task1.innerHTML.match(/функци[яи]/ig);
res1.forEach((el, i) => {
    if (res1[i] === 'функция') {
        task1.innerHTML = task1.textContent.replace(/функци[яи]/ig, (str) => {return `<strong>${str}</strong>`})
    } else if (res1[i] === 'функции') {
        task1.innerHTML = task1.textContent.replace(/функци[яи]/ig, (str) => {return `<strong>${str}</strong>`})
    }
})

const task2 = document.querySelector('#task2');
const p = task2.querySelectorAll('p');
const res2 = task2.innerHTML.match(/\d.{1,4}\d/g);
for (let i = 0; i < res2.length; i++) {
    p[0].innerHTML = p[0].textContent.replace((/\d.{1,4}\d/g), (str) => {return `<span><b>${str}</b></span>`})
}

const task3 = document.querySelector('#task2');
const res3 = task3.innerHTML.match(/\".+\"/g);
task3.innerHTML = task3.innerHTML.replace(/\".+\"/g, (str) => `<mark>${str}</mark>`);

let obj = {};
document.body.innerText.replace(/https?:\/\/\S+([/$]|[\w+{2,}$])/gi, (match) => {
  let key = match;
  key = key.replace(/https?:\/\//gi, '')
  key = key.replace(/\/\S+/gi, '')
  obj[key] = match;
});

for (key in obj) {
  document.body.innerHTML = document.body.innerHTML.replace(obj[key], `<a href="${obj[key]}">${key}</a>`);
}

const task5 = document.querySelector('body');
const res5 = task5.innerHTML.match(/#[a-f0-9]{6}/gi);
// res5.forEach(el => console.log(el))

