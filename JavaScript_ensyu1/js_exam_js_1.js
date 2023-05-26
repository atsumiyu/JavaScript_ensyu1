'use strict';

document.getElementById('calc_btn').addEventListener('click', () => {
    const num1 = Number(document.getElementById('jap_score').value);
    const num2 = Number(document.getElementById('math_score').value);
    const num3 = Number(document.getElementById('eng_score').value);
    const sum = num1 + num2 + num3;
    const avg = sum / 3;
    document.getElementById('sum').textContent = '合計：' + sum;
    document.getElementById('avg').textContent = '平均：' + avg;
});

document.getElementById('clear_btn').addEventListener('click', () => {
    document.getElementById('jap_score').value = 0;
    document.getElementById('math_score').value = 0;
    document.getElementById('eng_score').value = 0;
    document.getElementById('sum').textContent = '';
    document.getElementById('avg').textContent = '';
});