# JS team
[@Alex-JS-team/advanced-js]( https://github.com/orgs/Alex-JS-team/teams/advanced-js)`

# Материалы которые были использованы на уроке
[Материалы](#Материалы)

# Git Style Guide Содержание

1. [Ветки](#Ветки)
2. [Коммиты](#Коммиты)
3. [Сообщения](#Сообщения)
4. [Объединение](#Объединение)
5. [Другое...](#Другое)
6. [ПулРеквест](#ПР)

## Ветки

* Вносите в название первые буквы имени и фамилии и тип задачи:

  ```shell
  # хорошо
  $ git checkout -b ao/feat/oauth-migration
  ```

* Выбирайте *короткие* и *описательные* имена:

  ```shell
  # хорошо
  $ git checkout -b oauth-migration

  # плохо - расплывчатое название
  $ git checkout -b login_fix
  ```

* Используйте *дефисы* для разделения слов.

* Удалите ветку после объединения, если не будете её использовать.

  Совет: Находясь на ветке "master" в командной строке выполните следующую команду, чтобы получить список объединённых веток:

  ```shell
  $ git branch --merged | grep -v "\*"
  ```

## Коммиты

* Каждый коммит — одно *логическое изменение*. Не делайте несколько *логических изменений* в одном коммите. Например, если вы исправили баг и улучшили производительность, то лучше сделать два разных коммита.

* Не разделяйте одно *логическое изменение* на несколько коммитов. Например, реализация функции и тесты для неё должны быть в одном коммите.

* Делайте коммиты *маленькими*. Маленькие, автономные коммиты легче понять и вернуться, если что-то пойдёт не так.

* Коммиты должны быть *логически* раположены. Например, если *коммит X* зависит от изменений в *коммите Y*, тогда *коммит Y* нужно сделать до *коммита X*.

Примечание: работая в локальном репозитории можно делать коммиты промежуточной работы. Несмотря на это, перед публикацией в сети, стотит выполнить все рекомендации, написанные в этом руководстве.

## Сообщения

* Используйте редактор, а не командную строку, для описания коммита:

  ```shell
  # хорошо
  $ git commit

  # плохо
  $ git commit -m "Quick fix"
  ```

  Использование терминала ограничевает сообщения одной строкой, делая их не информативными.

* Заголовок (первая строка сообщения) должна *кратко*, но *ёмко* описывать изменения. Идеально - не больше 50 символов. Пишите заголовок в повелительном наклонении.

  ```shell
  # хорошо - повелительное наклонение, меньше 50 символов
  Mark huge records as obsolete when clearing hinting faults

  # плохо
  fixed ActiveModel::Errors deprecation messages failing when AR was used outside of Rails.
  ```

* Потом надо поставить пустую строку, после которой следует описание. Описание состоит из нескольких строк, максимальная длина, которых - 72 символа. Описание должно объяснять почему требуется изменение, как оно решает проблему и какие могут возникнуть ошибки.

  Также нужно оставить ссылки на используемые ресурсы (например, ссылку на соответствующую проблему в трекере ошибок):

  ```text
  Short (50 chars or fewer) summary of changes

  More detailed explanatory text, if necessary. Wrap it to
  72 characters. In some contexts, the first
  line is treated as the subject of an email and the rest of
  the text as the body.  The blank line separating the
  summary from the body is critical (unless you omit the body
  entirely); tools like rebase can get confused if you run
  the two together.

  Further paragraphs come after blank lines.

  - Bullet points are okay, too

  - Use a hyphen or an asterisk for the bullet,
    followed by a single space, with blank lines in
    between

  Source http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
  ```

  Проще говоря, делая коммит, вы должны подумать: "Какая информация понадобится вам?", если вы наткнётесь на этот коммит через год.


## Объединение

* **Не переписывайте опубликованную историю.** История репозитория ценна сама по себе, и очень важно иметь возможность посмотреть всю историю. Если вы опубликуете изменённую историю, то это вызовет проблемы у тех кто уже работает с репозиторием.

* Есть случаи, когда перезапись истории возможна. Например:

  * Вы - единственный, кто пользуется веткой и просматривает её историю.

  * Вы хотите привести в порядок вашу ветку (например, склеить коммиты) и/или перебазировать её на "master", чтобы объединить их.

  Тем не менее, *никогда не переписывайте историю "master" ветки* или каких-либо других специализированых ветвей (например, CI).

* Сделайте историю *чистой* и *простой*. Перед тем, как объединить ветку, удостоверьтесь, что она соответствует руководству по стилю, если это не так измените порядок коммитов, перепишите сообщения и т.д.

* Если ваша ветка включает в себя более одного коммита, не объединяйте её в режиме fast-forward:

  ```shell
  # хорошо
  $ git merge --no-ff my-branch

  # плохо
  $ git merge my-branch
  ```

## Другое...

* *Проверяйте ваши коммиты* перед тем, как отправить их в удалённый репозиторий.

* Никогда не отправляйте в удалённый репозиторий, наполовину сделанную работу.

* Держите ваши репозитории в хорошей форме, иногда, выполняя задачи по обслуживанию (англ.):

  * [`git-gc(1)`](https://git-scm.com/docs/git-gc)
  * [`git-prune(1)`](https://git-scm.com/docs/git-prune)
  * [`git-fsck(1)`](https://git-scm.com/docs/git-fsck)

## ПР
* Название ПР:

  ```
  # хорошо
  Homework 01. Regular expressions.

  # плохо
  HW
  ```
* Блок описания ПР:

  ```
  # хорошо
    ### Tasks list
    - [ ] 01 Phone numbers
    - [x] 02 Filtering actors

  # плохо
    none
  ```

## Материалы
---
* https://regex101.com/
* https://www.youtube.com/watch?v=8aGhZQkoFbQ
* http://latentflip.com/loupe/
* https://www.codewars.com/kata/closures-and-scopes/train/javascript
* https://www.youtube.com/watch?v=jTGb4t31vCY&list=WL&index=2&t=0s
* https://github.com/azat-io/you-dont-know-js-ru/blob/master
* https://github.com/urfu-2015/guides/blob/master/how-to-pull-request.md
---
* https://www.youtube.com/watch?v=1JsJx1x35c0
* https://www.youtube.com/watch?v=H1sz16xax4w
* https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/ch5.md
* https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1
