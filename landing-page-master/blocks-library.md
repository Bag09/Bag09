# Библиотека блоков

Каждый блок отвечает на один вопрос. Не собирайте все блоки «по списку»: лишний блок замедляет решение.

## Шапка и hero

**Нужны:** почти всегда; шапка особенно важна для длинной страницы. **Вредны:** навигация с десятком равных ссылок и hero без сути.

```html
<header class="site-header"><a class="brand" href="#top">Название</a><nav aria-label="Основная"><a href="#services">Услуги</a><a href="#faq">FAQ</a></nav><a class="button" href="#request">Оставить заявку</a></header>
<main id="top"><section class="hero"><p class="eyebrow">Сервис для клиник</p><h1>Одна заявка — понятный путь до восстановления работы</h1><p>Маршрутизируем инженерные и медтехнические задачи в нужную очередь.</p><a class="button" href="#request">Создать заявку</a></section></main>
```
```css
.site-header,.hero{max-width:1120px;margin:auto;padding:20px;display:flex;gap:16px;align-items:center}.hero{min-height:52vh;display:grid;align-content:center}.hero h1{max-width:18ch;font-size:clamp(2rem,6vw,4.5rem)}.button{display:inline-block;padding:.8rem 1.1rem;border-radius:.6rem;background:#126e62;color:#fff}@media(max-width:640px){.site-header nav{display:none}}
```

## Преимущества, услуги и процесс

**Нужны:** когда нужно объяснить выбор и исполнение. **Вредны:** карточки без отличий или процесс, повторяющий CTA.

```html
<section aria-labelledby="benefits"><h2 id="benefits">Контроль без лишних звонков</h2><div class="grid"><article><h3>Маршрутизация</h3><p>Описание задачи сразу попадает в нужную очередь.</p></article><article><h3>Статус</h3><p>Номер заявки ведёт к понятному следующему шагу.</p></article></div></section>
<section><h2>Как работаем</h2><ol><li>Фиксируем задачу и приоритет.</li><li>Назначаем специалиста.</li><li>Подтверждаем результат в карточке.</li></ol></section>
```
```css
section{max-width:1120px;margin:auto;padding:64px 20px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}.grid article{padding:24px;border:1px solid #d9e2e0;border-radius:16px}
```

## Доказательства, цена, FAQ и форма

**Нужны:** доказательства — до сильного запроса; цена — если она стандартна; FAQ — для повторяемых возражений; форма — в месте готовности. **Вредны:** фальшивые логотипы, калькулятор без валидной модели, FAQ вместо ясного текста.

```html
<details><summary>Когда вы ответите?</summary><p>Срок подтверждается в договорном SLA; для демо укажите это явно.</p></details>
<form id="request"><label>Контакт<input name="contact" autocomplete="name" required></label><label>Описание<textarea name="issue" required></textarea></label><button class="button">Создать заявку</button><p>Отправляя форму, вы соглашаетесь с политикой обработки данных.</p></form>
```
```css
form{display:grid;gap:14px;max-width:620px}label{display:grid;gap:6px;font-weight:600}input,textarea{font:inherit;padding:.75rem;border:1px solid #7d8b89;border-radius:.5rem}input:focus-visible,textarea:focus-visible,a:focus-visible,button:focus-visible{outline:3px solid #e0a400;outline-offset:3px}
```

Контакты и футер нужны для проверки реальности организации. Pop-up применяйте только после осмысленного действия и с закрытием клавишей Esc; он никогда не должен перекрывать форму или навигацию.
