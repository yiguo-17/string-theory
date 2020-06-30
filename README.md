# String Theory

### Introduction

Let's use string building!


### Workflow

This is your typical test-run assignment. `jest --watch-all` is your friend!


### Guidelines

* Other than `.toUpperCase` and `.toLowerCase`, don't use any string methods. Sure, `.slice` would be nice here, or `.repeat`. But you'll learn just a ton more if you use actual loops!


### Tasks

* `indexedChars` - adds the index of each character before that character in the given string
  * indexedChars('hello') -> '0h1e2l3l4o'
  * indexedChars('bye') -> '0b1y2e'
* `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
  * exclaim('This is fine.') -> 'This is fine!'
* `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
  * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
  * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'
* `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
  * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
* `ciEmailify` - creates an email from a two-part name
  * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
  * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
* `reverse` - reverses the given string
  * reverse('colin') -> 'niloc'
  * reverse('mesuara') -> 'arausem'
* `onlyVowels` - returns only the vowels from a word
  * onlyVowels('Colin Jaffe') -> 'oiae'
  * onlyVowels('quickly') -> 'ui'
  * onlyVowels('Anthony DeRosa') -> 'Aoeoa'
* `numberedChars` - adds the number of each character before that character in the given string
  * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
  * numberedChars('bye') -> '(1)b(2)y(3)e'
* `crazyCase` - returns the given string with alternating lower and upper cases
  * crazyCase('hello') -> 'hElLo'
  * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
  * crazyCase('YELLING') -> 'yElLiNg'
* `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
  * titleCase('return of the king') -> 'Return Of The King'
  * titleCase('cOde immerSives') -> 'Code Immersives'
* `camelCase` - returns the given string in camel case
  * camelCase('oh Hello') -> 'ohHello'
  * camelCase('well yeah of course') -> 'wellYeahOfCourse'
  * camelCase('Boy howdy') -> 'boyHowdy'
* `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
  * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
  * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'
