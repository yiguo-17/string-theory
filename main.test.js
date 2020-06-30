const {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
} = require('./main.js')


describe('indexedChars', () => {
  it(`adds a 0 before a one-character string`, () => {
    const char1 = 'a'
    const char2 = 'z'
    const indexed1 = '0a'
    const indexed2 = '0z'

    expect(indexedChars(char1)).toBe(indexed1);
    expect(indexedChars(char2)).toBe(indexed2);
  })

  it(`adds the index of each character before that character in the given string`, () => {
    const str1 = 'hello';
    const indexed1 = '0h1e2l3l4o';
    const str2 = 'bye';
    const indexed2 = '0b1y2e';

    expect(indexedChars(str1)).toBe(indexed1);
    expect(indexedChars(str2)).toBe(indexed2);
  })
})

describe('exclaim', () => {
  it(`returns a sentence with every question mark changed to an exclamation point`, () => {
    expect(exclaim('I am the best?')).toBe('I am the best!')
    expect(exclaim('What are you doing? Are you a fool?')).toBe('What are you doing! Are you a fool!')
  })

  it(`returns a sentence with every period changed to an exclamation point`, () => {
    expect(exclaim('I am.')).toBe('I am!')
    expect(exclaim('This is fine.')).toBe('This is fine!')
  })
})

describe('repeatIt', () => {
  it(`returns the given string repeated the number of times as the second parameter`, () => {
    expect(repeatIt('beetlejuice', 3)).toBe('beetlejuicebeetlejuicebeetlejuice');
    expect(repeatIt('oh hi!', 8)).toBe('oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!');
  })
});

describe('truncate', () => {
  it(`shortens a long string to 15 characters plus an elipsis (...)`, () => {
    const longString1 = 'The fault, dear Brutus, is not in our stars, but in ourselves.'
    const truncated1 = 'The fault, dear...'
    const longString2 = "Well, that's just, like, your opinion man." 
    const truncated2 = "Well, that's ju..."
    expect(truncate(longString1)).toBe(truncated1);
    expect(truncate(longString2)).toBe(truncated2);
  })

  it(`does not truncate a string shorter than 18 characters`, () => {
    const shortString1 = "I'm 17 characters"
    const shortString2 = "Whoa."
    expect(truncate(shortString1)).toBe(shortString1);
    expect(truncate(shortString2)).toBe(shortString2);
  })
})

describe('ciEmailify', () => {
  it(`creates an email from a two-part name`, () => {
    expect(ciEmailify('colin jaffe')).toBe('colin.jaffe@codeimmersives.com')
    expect(ciEmailify('mesuara kaleziq')).toBe('mesuara.kaleziq@codeimmersives.com')
  })
  
  it(`handles uppercased names`, () => {
    expect(ciEmailify('Colin jaffe')).toBe('colin.jaffe@codeimmersives.com')
    expect(ciEmailify('mesuara Kaleziq')).toBe('mesuara.kaleziq@codeimmersives.com')
    expect(ciEmailify('Anthony DeRosa')).toBe('anthony.derosa@codeimmersives.com')
  })
})

describe('reverse', () => {
  it(`reverses the string given`, () => {
    expect(reverse('colin')).toBe('niloc')
    expect(reverse('mesuara')).toBe('arausem')
  })
})

describe('onlyVowels', () => {
  it(`returns only the vowels from a word`, () => {
    expect(onlyVowels('Colin Jaffe')).toBe('oiae');
    expect(onlyVowels('Mesuara Kaleziq')).toBe('euaaaei');
  })

  it(`does not count "y" as a vowel`, () => {
    expect(onlyVowels('quickly')).toBe('ui');
    expect(onlyVowels('cowardly')).toBe('oa');
  })

  it(`handles uppercased vowels`, () => {
    expect(onlyVowels('Anthony DeRosa')).toBe('Aoeoa');
    expect(onlyVowels('New Orleans')).toBe('eOea');
  })
})

describe('numberedChars', () => {
  it(`adds a 1 in parentheses before a one-character string`, () => {
    const char1 = 'a'
    const char2 = 'z'
    const numbered1 = '(1)a'
    const numbered2 = '(1)z'

    expect(numberedChars(char1)).toBe(numbered1);
    expect(numberedChars(char2)).toBe(numbered2);
  })

  it(`adds the number of each character before that character`, () => {
    const str1 = 'hello';
    const numbered1 = '(1)h(2)e(3)l(4)l(5)o';
    const str2 = 'bye';
    const numbered2 = '(1)b(2)y(3)e';

    expect(numberedChars(str1)).toBe(numbered1);
    expect(numberedChars(str2)).toBe(numbered2);
  })
})

describe('crazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    expect(crazyCase('hello')).toBe('hElLo')
    expect(crazyCase('you')).toBe('yOu')
  })
  
  it(`counts spaces as characters`, () => {
    expect(crazyCase('multiple words here')).toBe('mUlTiPlE WoRdS HeRe')
    expect(crazyCase('crazy stuff')).toBe('cRaZy sTuFf')
  })
  
  it(`correctly lowercases parts of an uppercased string`, () => {
    expect(crazyCase('YELLING')).toBe('yElLiNg')
    expect(crazyCase('PERPETUALLY')).toBe('pErPeTuAlLy')
  })
})

describe('titleCase', () => {
  it(`returns a transformed version of the given string where every word starts with a capital letter`, () =>{
    expect(titleCase('The matrix')).toBe('The Matrix');
    expect(titleCase('The matrix reloaded')).toBe('The Matrix Reloaded');
  })
  
  it(`handles the first word of a title`, () => {
    expect(titleCase('speed')).toBe('Speed');
    expect(titleCase('return of the king')).toBe('Return Of The King')
  })

  it(`lowercases any letter that is not the first letter of a word`, () => {
    expect(titleCase('sPeEd')).toBe('Speed');
    expect(titleCase('cOde immerSives')).toBe('Code Immersives');
  })
})

describe('camelCase', () => {
  it(`removes spaces from the given string`, () => {
    expect(camelCase('oh Hello')).toBe('ohHello');
    expect(camelCase('whats Up Dog')).toBe('whatsUpDog');
  })

  it(`upper cases the first letters of non-first words`, () => {
    expect(camelCase('well yeah of course')).toBe('wellYeahOfCourse');
    expect(camelCase('boy howdy')).toBe('boyHowdy');
  })

  it(`lower cases the first letter of the first word`, () => {
    expect(camelCase('Well yeah of course')).toBe('wellYeahOfCourse');
    expect(camelCase('Boy howdy')).toBe('boyHowdy');
  })
})

describe('crazyCase2ReturnOfCrazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    expect(crazyCase2ReturnOfCrazyCase('hello')).toBe('hElLo')
    expect(crazyCase2ReturnOfCrazyCase('you')).toBe('yOu')
  })
  
  it(`does NOT count spaces as characters`, () => {
    expect(crazyCase2ReturnOfCrazyCase('multiple words here')).toBe('mUlTiPlE wOrDs HeRe')
    expect(crazyCase2ReturnOfCrazyCase('crazy stuff')).toBe('cRaZy StUfF')
  })
  
  it(`correctly lowercases parts of an uppercased string`, () => {
    expect(crazyCase2ReturnOfCrazyCase('YELLING')).toBe('yElLiNg')
    expect(crazyCase2ReturnOfCrazyCase('PERPETUALLY')).toBe('pErPeTuAlLy')
  })
})
