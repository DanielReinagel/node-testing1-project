const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = {foo: "  foo ", bar:"bar ", baz:" baz"}
    const expected = {...input}
    utils.trimProperties(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = {foo: "  foo ", bar:"bar ", baz:" baz"}
    const expected = {foo:"foo", bar:"bar", baz:"baz"}
    utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer:-1}, {integer:2}, {integer:1}]
    const expected = 2
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  let initial = 3;
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(initial)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(initial-1)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  const skip = num => {
    seasons.next()
    if(num>1) skip(num-1)
  }
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    skip(1)
    expect(seasons.next()).toBe("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    skip(2)
    expect(seasons.next()).toBe("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    skip(3)
    expect(seasons.next()).toBe("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    skip(4)
    expect(seasons.next()).toBe("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    skip(39)
    expect(seasons.next()).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toBe(100)
    expect(focus.odometer).toBe(100)
  })
  test('[16] driving the car uses gas', () => {
    expect(focus.tank).toBe(20)
    focus.drive(300)
    expect(focus.tank).toBe(10)
  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(600)).toBe(600)
    focus.refuel(20)
    expect(focus.drive(600)).toBe(1200)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toBe(20)
    focus.refuel(1000)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    utils.isEvenNumberAsync(22).then(output => expect(output).toBe(true))
  })
  test('[20] resolves false if passed an odd number', () => {
    utils.isEvenNumberAsync(97).then(output => expect(output).toBe(false))
  })
})
