"use strict";

const copy_elem = document.getElementById('copy');
const generate_elem = document.getElementById('generate');
const password_elem = document.getElementById('password');
const ch_special_elem = document.getElementById('ch_special');
const ch_literal_elem = document.getElementById('ch_literal');

generate_elem.addEventListener('click', () => {
    password_elem.innerText = 'generated';
});