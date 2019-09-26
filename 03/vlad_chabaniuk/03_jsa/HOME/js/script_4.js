const makeCount = function () {
  let count = 0

  function set () {
    return ++count
  }

  function show () {
    assert(true, count)
  }

  return {
    show,
    set
  }
}

const c1 = makeCount()
const c2 = makeCount()

c1.set()
c1.set()
c1.set()

c2.set()

assert(true, "==== c1 ====")
c1.show();  // => 3

assert(true, "==== c2 ====")
c2.show() // =>  1

assert(true, "==== c1 ====")
c1.show() // =>  3
