# Аналитика и витрина заявок

## Зачем и что публиковать

Витрина уменьшает неопределённость: показывает, что процесс управляем, а не обещает невозможного. Публикуйте агрегаты с периодом и `обновлено`: принято сегодня/неделя/месяц; в работе; средняя реакция (мин); среднее выполнение (ч/дни); соблюдение SLA (%); выполнено; выезды; склад; клиентов. Разделяйте инженерные системы и медтехнику: приоритеты и SLA различны. Никогда не показывайте ФИО, кабинет, серийный номер или подробность инцидента без правового основания и доступа.

«Демо-данные» — допустимая учебная маркировка, не социальное доказательство. Production-цифра должна иметь владельца, правило расчёта и дату. Покажите красный статус только с объяснением и действием, иначе он повышает тревогу.

## Компоненты

```html
<output class="metric" data-count="42" data-suffix=" заявок" aria-label="42 заявки сегодня">0</output>
<div class="bar" role="progressbar" aria-label="SLA" aria-valuemin="0" aria-valuemax="100" aria-valuenow="96"><i style="--value:96%"></i></div>
<svg class="ring" viewBox="0 0 42 42" role="img" aria-label="68 процентов в работе"><circle cx="21" cy="21" r="15.915"/><circle class="ring-value" cx="21" cy="21" r="15.915" pathLength="100" style="--value:68"/></svg>
<ul aria-label="Последние заявки"><li><strong>МС-1042</strong> · медтехника · назначен инженер</li></ul>
```
```css
.bar{height:10px;background:#e5ecea;border-radius:99px;overflow:hidden}.bar i{display:block;width:var(--value);height:100%;background:#17806f;transform-origin:left;transform:scaleX(0);transition:transform .6s ease-out}.visible .bar i{transform:scaleX(1)}.ring{width:100px;transform:rotate(-90deg)}.ring circle{fill:none;stroke:#e5ecea;stroke-width:4}.ring .ring-value{stroke:#17806f;stroke-dasharray:var(--value) 100;stroke-dashoffset:var(--value);transition:stroke-dashoffset .7s ease-out}.visible .ring-value{stroke-dashoffset:0}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition-duration:0.01ms!important;animation-duration:0.01ms!important}}
```
Код `templates/charts.js` запускает count-up и класс `visible` только при появлении блока. Лента обновляется мягко и не должна менять фокус; новые элементы сообщайте через отдельный `aria-live="polite"`.

## Трекинг после формы

Показывайте понятную неизменную цепочку: принята → распределена в отдел → назначен инженер → выполняется → завершена. В реальном продукте промежуточные состояния приходят с сервера; в демо следует показать, что симуляция не отражает настоящую заявку. Не «проигрывайте» все стадии мгновенно: статус должен соответствовать факту.

## Доступность и производительность

- [ ] Рядом с графиком есть текстовая сводка, период, единицы и отметка обновления.
- [ ] Цвет дублируется текстом/иконкой; SVG имеет `role=img` и доступное имя.
- [ ] `prefers-reduced-motion` убирает движение, но не данные.
- [ ] Длительность 400–800 мс, один `requestAnimationFrame` на кадр, без layout-thrashing.
- [ ] Невидимые блоки не анимируются; тяжёлые библиотеки не загружаются ради одного кольца.
- [ ] На 320 px карточки становятся одной колонкой, таблица/список остаётся читабельным.
