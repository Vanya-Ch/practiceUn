window.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector('.catalog-list__content');
    let avto = `<li class="catalog-list__item">
    <a class="catalog-list__link" href="./cars/engine/">
        Автомобільні двигуни
        <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
    </a>
</li>
<li class="catalog-list__item">
    <a class="catalog-list__link" href="./cars/car body/">
        Автомобільні кузови
        <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
    </a>
</li>
<li class="catalog-list__item">
    <a class="catalog-list__link" href="./cars/oil/">
        Автомобільні масла
        <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
    </a>
</li>
<li class="catalog-list__item">
    <a class="catalog-list__link" href="./cars/filters/">
        Автомобільні фільтри
        <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
            <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
    </a>
</li>`,
track = `<li class="catalog-list__item">
<a class="catalog-list__link" href="./tracks/engine/">
    Вантажні двигуни
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
<li class="catalog-list__item">
<a class="catalog-list__link" href="./tracks/track body/">
    Вінтажні кузови
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
<li class="catalog-list__item">
<a class="catalog-list__link" href="./tracks/oil/">
    Вантажні масла
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
<li class="catalog-list__item">
<a class="catalog-list__link" href="./tracks/filters/">
    Вантажні фільтри
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>`,
tire = `<li class="catalog-list__item">
<a class="catalog-list__link" href="./tires/summer-tires/">
    Літні шини
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
<li class="catalog-list__item">
<a class="catalog-list__link" href="./tires/winter-tires/">
    Зимові шини
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
`,
accessory = `<li class="catalog-list__item">
<a class="catalog-list__link" href="./accessories/air-fresheners/">
    Освіжувачі повітря
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
<li class="catalog-list__item">
<a class="catalog-list__link" href="./accessories/different/">
    Аксесуари
    <svg class="catalog-list__arrow" width="12.25" height="14" viewBox="0 0 448 512">
        <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
</a>
</li>
`



document.querySelector('.car').addEventListener('click', ()=>{
    list.innerHTML=avto;
})
document.querySelector('.autobus').addEventListener('click', ()=>{
    list.innerHTML=track;
})
document.querySelector('.tire').addEventListener('click', ()=>{
    list.innerHTML=tire;
})
document.querySelector('.accessory').addEventListener('click', ()=>{
    list.innerHTML=accessory;
})



});
