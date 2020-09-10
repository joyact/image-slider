const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const prevBtn = document.getElementsById('prev-btn');
const nextBtn = document.getElementsById('next-btn');

let slides = document.querySelectorAll('.slide');
let index = 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
