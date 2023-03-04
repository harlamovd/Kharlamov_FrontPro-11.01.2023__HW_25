// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

// Вариант № 1 - сделал функцию которая принимает размеры (высота и ширина) таблицы, также принимает
// названия классов для строк и для ячеек, что бы сразу делать таблицу з необходимым стилем.
// Указывать классы не обязательно. Класс для 'table' не предусматривал, его легко будет добавить
// чем к сотни ячеек.
function creatTables (tableHeight, tableWidth, trClassName, tdClassName){
    const table = document.createElement('table');
    for (let i = 0; i < tableHeight; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        if (trClassName) {
            tr.className = trClassName;
        }
        for (let b = 1; b <= tableWidth; b++) {
            let tdCell =  tdClassName ? `<td class="${tdClassName}"> ${tableWidth*i+b} </td>`
                : `<td> ${tableWidth*i+b} </td>`;
            tr.insertAdjacentHTML('beforeend', tdCell);
        }
    }
    return table;
}
document.querySelector('.one_version').append(
    creatTables(10,10, 'tr_style', 'td_style')
);


// Вариант № 2 простой цикл.
const table = document.createElement('table');
let contentOne = 1;
for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let b = 0; b < 10; b++){
        tr.insertAdjacentHTML('beforeend', `<td> ${contentOne++} </td>`);
    }
}
document.querySelector('.two_version').append(table);